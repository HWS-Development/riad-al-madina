import { useEffect, useMemo, useState } from "react";
import Lightbox from "./Lightbox";

const IMAGES = [
  // Rooms
  {
    src: "https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1600&auto=format&fit=crop",
    w: 1600, h: 1066, alt: "Quiet double room, linen & wood", tag: "rooms"
  },
  {
    src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop",
    w: 1600, h: 1067, alt: "Suite lounge with Moroccan rug", tag: "rooms"
  },
  // Patio / Riads
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop",
    w: 1600, h: 1066, alt: "Riad patio with plants and arches", tag: "riad"
  },
  {
    src: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1600&auto=format&fit=crop",
    w: 1600, h: 1066, alt: "Courtyard breakfast table", tag: "riad"
  },
  // Restaurant
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    w: 1600, h: 1066, alt: "Restaurant table setting", tag: "restaurant"
  },
  {
    src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1600&auto=format&fit=crop",
    w: 1600, h: 1066, alt: "Seafood dish from Essaouira", tag: "restaurant"
  },
  // Spa
  {
    src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1600&auto=format&fit=crop",
    w: 1600, h: 1066, alt: "Spa massage with warm tones", tag: "spa"
  },
  {
    src: "https://images.unsplash.com/photo-1599058945522-28d584b4d7b9?q=80&w=1600&auto=format&fit=crop",
    w: 1600, h: 1066, alt: "Traditional hammam detail", tag: "spa"
  },
  // Essaouira / Surroundings
  {
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    w: 1600, h: 1066, alt: "Essaouira ocean ramparts", tag: "essaouira"
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-84f3a9c7eef1?q=80&w=1600&auto=format&fit=crop",
    w: 1600, h: 1066, alt: "Blue doors and white walls", tag: "essaouira"
  }
];

const TAGS = [
  { key: "all", label: "All" },
  { key: "rooms", label: "Rooms" },
  { key: "riad", label: "Riad" },
  { key: "restaurant", label: "Restaurant" },
  { key: "spa", label: "Spa" },
  { key: "essaouira", label: "Essaouira" }
];

export default function GalleryGrid() {
  const [active, setActive] = useState("all");
  const [index, setIndex] = useState(-1);

  const filtered = useMemo(() => {
    if (active === "all") return IMAGES;
    return IMAGES.filter((i) => i.tag === active);
  }, [active]);

  // close on ESC inside grid (lightbox handles its own too)
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIndex(-1);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Filters */}
      <div className="mb-4 flex flex-wrap gap-2">
        {TAGS.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={[
              "rounded-full border px-3 py-1 text-sm",
              active === t.key
                ? "border-[#14110f] bg-[#14110f] text-white"
                : "border-[#e6dccf] hover:bg-[#f9f4ee]"
            ].join(" ")}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
        style={{ gridAutoRows: "10px" }}
      >
        {filtered.map((img, i) => {
          // simple masonry effect using aspect ratio → row span
          const span = Math.max(20, Math.round((img.h / img.w) * 30)); // tune factor for height
          return (
            <button
              key={img.src}
              onClick={() => setIndex(i)}
              className="group relative overflow-hidden rounded-xl border border-[#e6dccf] bg-white"
              style={{ gridRowEnd: `span ${span}` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {index >= 0 && (
        <Lightbox
          images={filtered}
          index={index}
          onClose={() => setIndex(-1)}
          onPrev={() => setIndex((i) => (i - 1 + filtered.length) % filtered.length)}
          onNext={() => setIndex((i) => (i + 1) % filtered.length)}
        />
      )}
    </>
  );
}
