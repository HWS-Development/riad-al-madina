import { useEffect } from "react";

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  const img = images[index];
  if (!img) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog" aria-modal="true"
      onClick={onClose}
    >
      <figure
        className="relative max-w-[96vw] max-height-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-[80vh] w-auto max-w-[92vw] rounded-xl shadow-2xl border border-white/10"
        />
        <figcaption className="mt-2 text-center text-white/90 text-sm">
          {img.alt}
        </figcaption>

        {/* Controls */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 h-9 w-9 rounded-full bg-white/90 hover:bg-white text-[#14110f] shadow"
          aria-label="Close"
        >
          ×
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-[-3rem] top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white/90 hover:bg-white text-[#14110f] shadow"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-[-3rem] top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white/90 hover:bg-white text-[#14110f] shadow"
          aria-label="Next"
        >
          ›
        </button>
      </figure>
    </div>
  );
}
