import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Single-month, zero-dependency date range picker.
 * - Week starts Monday
 * - Disables days before `fromDate`
 * - Click once for "from", click again for "to" (in same or other month)
 * - Esc/outside click closes
 *
 * Props:
 *  - initialMonth: Date (which month to show initially)
 *  - fromDate: Date (earliest selectable)
 *  - selected: { from: Date|null, to: Date|null }
 *  - onSelect(range) -> void
 *  - onClose() -> void
 *  - locale: string | BCP47 tag (default "en")
 *  - className: optional extra classes for the popover card
 */
export default function DateRangePicker({
  initialMonth,
  fromDate,
  selected,
  onSelect,
  onClose,
  locale = "en",
  className = "",
}) {
  const [viewMonth, setViewMonth] = useState(() => stripTime(initialMonth ?? new Date()));
  const popRef = useRef(null);

  useEffect(() => {
    const outside = (e) => {
      if (!popRef.current) return;
      if (!popRef.current.contains(e.target)) onClose?.();
    };
    const esc = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("mousedown", outside);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", outside);
      document.removeEventListener("keydown", esc);
    };
  }, [onClose]);

  const fmtMonth = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" });
  const fmtWeekday = new Intl.DateTimeFormat(locale, { weekday: "short" });

  const weeks = useMemo(() => {
    const start = startOfCalendar(viewMonth); // Monday grid start
    return Array.from({ length: 42 }, (_, i) => addDays(start, i)); // 6 rows * 7
  }, [viewMonth]);

  function chooseDay(day) {
    const { from, to } = selected || {};
    // Start a new range if none, or if we already had a complete range, or clicked before current start.
    if (!from || to || isBefore(day, from)) {
      onSelect?.({ from: day, to: null });
      return;
    }
    // Only a "from" exists:
    if (isAfter(day, from)) {
      onSelect?.({ from, to: day }); // second click -> complete range
    } else {
      // same day clicked -> reset start
      onSelect?.({ from: day, to: null });
    }
  }

  return (
    <div
      ref={popRef}
      className={[
        "rdp-pop rounded-2xl bg-white border border-sand/40 shadow-soft p-3",
        className,
      ].join(" ")}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2 px-1 pb-2">
        <div className="font-semibold">{fmtMonth.format(viewMonth)}</div>
        <div className="flex gap-1">
          <IconBtn ariaLabel="Previous month" onClick={() => setViewMonth(addMonths(viewMonth, -1))}>‹</IconBtn>
          <IconBtn ariaLabel="Next month" onClick={() => setViewMonth(addMonths(viewMonth, +1))}>›</IconBtn>
        </div>
      </div>

      {/* Weekday header (Mon–Sun) */}
      <div className="grid grid-cols-7 text-xs font-semibold opacity-70 px-1 mb-1">
        {Array.from({ length: 7 }).map((_, i) => {
          const d = addDays(new Date(2023, 0, 2), i); // 2023-01-02 is Monday
          return (
            <div key={i} className="h-8 flex items-center justify-center">
              {fmtWeekday.format(d)}
            </div>
          );
        })}
      </div>

      {/* Days (single month) */}
      <div className="grid grid-cols-7">
        {weeks.map((d, i) => {
          const disabled = fromDate ? isBefore(d, fromDate) : false;
          const outside = d.getMonth() !== viewMonth.getMonth();

          const { from, to } = selected || {};
          const isStart = from && isSameDay(d, from);
          const isEnd   = to   && isSameDay(d, to);
          const inRange = from && to && isBetween(d, from, to);

          return (
            <button
              key={i}
              type="button"
              onClick={() => !disabled && chooseDay(d)}
              disabled={disabled}
              className={[
                "m-1 h-10 w-10 rounded-xl flex items-center justify-center text-sm transition-colors",
                "border border-sand/50",
                disabled ? "opacity-30 cursor-not-allowed" : "hover:bg-base/70",
                outside ? "opacity-50" : "",
                isStart || isEnd
                  ? "bg-ink text-white hover:bg-ink"
                  : inRange
                  ? "bg-black/10"
                  : "bg-white",
              ].join(" ")}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end gap-3 pt-3 px-1">
        <RangeSummary selected={selected} locale={locale} />
        <button type="button" className="text-sm underline" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */
function stripTime(d){ const x=new Date(d); x.setHours(0,0,0,0); return x; }
function addDays(d,n){ const x=new Date(d); x.setDate(x.getDate()+n); x.setHours(0,0,0,0); return x; }
function addMonths(d,n){ const x=new Date(d); x.setMonth(x.getMonth()+n); return stripTime(x); }
function startOfMonth(d){ return new Date(d.getFullYear(), d.getMonth(), 1); }
function startOfCalendar(d){
  const first = startOfMonth(d);
  const dow = (first.getDay()+6)%7; // Monday=0
  return addDays(first, -dow);
}
function isSameDay(a,b){ return a&&b&&a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate(); }
function isBefore(a,b){ return stripTime(a) < stripTime(b); }
function isAfter(a,b){ return stripTime(a) > stripTime(b); }
function isBetween(x,a,b){ const s=stripTime(x)-stripTime(a); const t=stripTime(b)-stripTime(x); return s>0&&t>0; }

function RangeSummary({ selected, locale }){
  const { from, to } = selected || {};
  if (!from && !to) return <span className="text-xs opacity-70">Select check-in and check-out</span>;
  const nf = new Intl.DateTimeFormat(locale, { day:"2-digit", month:"short", year:"numeric" });
  if (from && !to) return <span className="text-xs opacity-70">Check-in {nf.format(from)}</span>;
  const nights = Math.max(1, Math.round((stripTime(to) - stripTime(from))/86400000));
  return (
    <span className="text-xs opacity-70">
      {nf.format(from)} → {nf.format(to)} · {nights} night{nights>1?"s":""}
    </span>
  );
}

function IconBtn({children, ariaLabel, onClick}){
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="h-8 w-8 rounded-lg border border-sand/50 bg-white hover:bg-base/70 flex items-center justify-center"
    >
      {children}
    </button>
  );
}
