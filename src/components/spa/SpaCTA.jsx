const BOOK_URL =
  "https://riad-dar-tiflet-1.hotelrunner.com/bv3/search?search=%7B%22checkin_date%22:%222025-08-27%22,%22checkout_date%22:%222025-08-28%22,%22day_count%22:1,%22room_count%22:1,%22total_adult%22:2,%22total_child%22:0%7D";

export default function SpaCTA() {
  return (
    <div className="rounded-2xl border border-[#e6dccf] bg-white shadow-soft p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <div>
        <h3 className="text-lg md:text-xl font-medium">Relax, we take care of everything…</h3>
        <p className="opacity-80 mt-1">
          Book the hammam or a massage in advance — or visit us upon arrival. Treatments are subject to availability.
        </p>
      </div>
      <div className="flex gap-3">
        <a
          href='/contact'
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-xl px-5 py-2 bg-[#14110f] text-white hover:opacity-90"
        >
          Book a treatment
        </a>
        <a
          href="mailto:contact@riadalmadina.com"
          className="inline-flex items-center rounded-xl px-5 py-2 border border-[#e6dccf] hover:bg-[#f9f4ee]"
        >
          Email us
        </a>
      </div>
    </div>
  );
}
