import { useState } from "react";
import { useTranslation } from "react-i18next";
import { defaultDates } from "../utils/booking";
import RoomsGrid from "../components/rooms/RoomsGrid";

const ROOMS_HERO =
  "https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3";

function RoomsHero() {
  const { t } = useTranslation();
  return (
    <section className="relative h-[38vh] md:h-[48vh] border-b border-sand/50">
      <img
        src={ROOMS_HERO}
        alt="Rooms & Suites hero"
        className="absolute inset-0 w-full h-full object-cover"
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/35" />
      <div className="relative h-full max-w-6xl mx-auto px-4 flex flex-col justify-end pb-8 md:pb-10">
        <h1 className="font-display text-white text-3xl md:text-5xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
          {t("rooms.title", "Rooms & Suites")}
        </h1>
        <p className="mt-2 max-w-2xl text-white/90 md:text-lg drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
          {t(
            "rooms.subtitle",
            "Each room has its own style, colors and charm — all restored with care to keep the discreet elegance of our 18th-century riad."
          )}
        </p>
      </div>
    </section>
  );
}

export default function RoomsPage() {
  const d = defaultDates();
  const [checkin] = useState(d.checkin);
  const [checkout] = useState(d.checkout);

  return (
    <main className="relative">
      <RoomsHero />
      <RoomsGrid checkin={checkin} checkout={checkout} />
      <section className="py-10 border-t border-sand/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-medium">Useful information</h2>
          <ul className="text-sm opacity-80 mt-2 space-y-1 list-disc pl-5">
            <li>Check-in from 3pm · Check-out until 12pm.</li>
            <li>Breakfast available (optional).</li>
            <li>City tax may apply at the property.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
