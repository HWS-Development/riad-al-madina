import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function RoomModal({ open, onClose, room, onBook }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !room) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[60] flex items-center justify-center"
      onMouseDown={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative z-[61] w-[min(96vw,950px)] max-h-[90vh] overflow-auto rounded-2xl bg-white border border-sand/50 shadow-2xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between p-4 md:p-6 border-b border-sand/40">
          <div>
            <h3 className="font-display text-xl md:text-2xl">{room.title}</h3>
            {room.priceFrom && (
              <div className="text-sm opacity-70 mt-1">{room.priceFrom}</div>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label={t("common.close", "Close")}
            className="rounded-lg px-3 py-2 hover:bg-base/60"
          >
            ×
          </button>
        </div>

        <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <img
              src={room.hero}
              alt={`${room.title} main`}
              className="w-full h-64 md:h-72 object-cover rounded-xl"
              loading="lazy"
            />
            <div className="grid grid-cols-2 gap-3">
              {room.gallery?.map((g, i) => (
                <img
                  key={i}
                  src={g}
                  alt={`${room.title} ${i + 1}`}
                  loading="lazy"
                  className="w-full h-28 object-cover rounded-xl"
                />
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-xl bg-rose-50/60 border border-sand/50 p-4">
              {room.capacityLabel && (
                <div className="font-medium">{room.capacityLabel}</div>
              )}
              <ul className="mt-2 space-y-2 text-sm">
                {room.bullets?.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-ink/70" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {room.short && <p className="text-sm mt-4">{room.short}</p>}
            {room.breakfast && (
              <div className="text-xs opacity-70 mt-3">{room.breakfast}</div>
            )}

            <div className="mt-5 flex gap-2">
              <button
                onClick={onBook}
                className="rounded-xl px-4 py-2 bg-ink text-white hover:opacity-90"
              >
                {t("rooms.book", "Book now")}
              </button>
              <button
                onClick={onClose}
                className="rounded-xl px-4 py-2 border border-sand/60 hover:bg-base/70"
              >
                {t("common.close", "Close")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
