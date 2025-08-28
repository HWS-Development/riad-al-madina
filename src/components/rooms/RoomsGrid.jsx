import { useMemo, useState } from "react";
import { buildBookingUrl } from "../../utils/booking";
import RoomModal from "./RoomModal";

const cover = (q) =>
  `https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&${encodeURIComponent(
    q
  )}`;

const ROOMS = [
  {
    id: "single",
    title: "Single",
    size: 12,
    capacityLabel: "1 person",
    beds: "1 single bed",
    priceFrom: "540 DH / per night",
    breakfast: "Breakfast from 45 DH per person",
    short: "Cozy room with refined Moroccan touches.",
    bullets: ["12 m²", "1 single bed", "Air conditioner", "Satellite channels"],
    hero: 'https://picsum.photos/seed/room-single/900/700',
    gallery: [cover("single-a"), cover("single-b")],
  },
  {
    id: "double",
    title: "Double",
    size: 20,
    capacityLabel: "1–2 people",
    beds: "1 double bed",
    priceFrom: "720 DH / per night",
    breakfast: "Breakfast from 45 DH per person",
    short:
      "Warm, elegant room decorated in Moroccan tradition. Some rooms are on two levels (mezzanine).",
    bullets: ["20 m²", "1 double bed", "Bathroom", "Air conditioner", "Satellite channels"],
    hero: 'https://picsum.photos/seed/room-double/900/700',
    gallery: [cover("double-a"), cover("double-b")],
  },
  {
    id: "twin",
    title: "Twin",
    size: 18,
    capacityLabel: "2 people",
    beds: "2 separate beds",
    priceFrom: "—",
    breakfast: "Breakfast from 45 DH per person",
    short:
      "Two separate beds — ideal for friends or family while keeping Moroccan charm.",
    bullets: ["18 m²", "2 separate beds", "Bathroom", "Heating", "Wi-Fi"],
    hero: 'https://picsum.photos/seed/room-twin/900/700',
    gallery: [cover("twin-a"), cover("twin-b")],
  },
  {
    id: "suite",
    title: "Riad Suite",
    size: 28,
    capacityLabel: "1–2 people",
    beds: "Bedroom + Moroccan living room",
    priceFrom: "920 DH / per night",
    breakfast: "Breakfast from 45 DH per person",
    short:
      "Spacious suite with a traditional lounge for extra comfort (benches, TV, radiator).",
    bullets: ["One bedroom", "A Moroccan living room", "Benches", "TV, radiator …"],
    hero: 'https://picsum.photos/seed/room-suite/900/700',
    gallery: [cover("suite-a"), cover("suite-b")],
  },
];

export default function RoomsGrid({ checkin, checkout }) {
  const [openId, setOpenId] = useState(null);
  const current = useMemo(() => ROOMS.find((r) => r.id === openId) ?? null, [openId]);

  const open = (id) => setOpenId(id);
  const close = () => setOpenId(null);

  const bookNow = () => {
    const url = buildBookingUrl({ checkin, checkout, adults: 2 });
    window.open(url, "_blank", "noopener");
  };

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        {ROOMS.map((room) => (
          <article
            key={room.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-sand/50 pb-12"
          >
            {/* Image */}
            <img
                src={room.hero}
                alt={`${room.title} preview`}
                className="w-full h-80 md:h-80 object-cover rounded-xl shadow-sm"
                loading="lazy"
            />

            {/* Content */}
            <div>
    <h3 className="font-display text-2xl">{room.title}</h3>
    <div className="text-sm opacity-70 mt-1">{room.beds}</div>
    <div className="text-xs opacity-60">{room.size} m² · {room.capacityLabel}</div>

    <p className="mt-3 text-sm leading-relaxed">{room.short}</p>

    {room.priceFrom && (
      <div className="mt-3">
        <span className="text-xs opacity-60 mr-1">from</span>
        <span className="font-medium text-oasis">{room.priceFrom}</span>
      </div>
    )}

    {/* subtle divider */}
    <div className="mt-4 h-px bg-sand/40" />

    <ul className="mt-4 space-y-1.5 text-sm">
      {room.bullets.map((b) => (
        <li key={b} className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-ink/70" />
          {b}
        </li>
      ))}
    </ul>

    {/* CTA row right-aligned */}
    <div className="mt-6 flex gap-3 justify-end">
      <button
        onClick={() => open(room.id)}
        className="rounded-xl px-4 py-2 border border-sand/60 hover:bg-base/70"
      >
        View room
      </button>
      <button
        onClick={bookNow}
        className="rounded-xl px-4 py-2 bg-ink text-white hover:opacity-90"
      >
        Book now
      </button>
    </div>
    </div>
          </article>
        ))}
      </div>

      <RoomModal open={!!current} room={current} onClose={close} onBook={bookNow} />
    </section>
  );
}
