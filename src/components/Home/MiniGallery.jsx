export default function MiniGallery() {
    const imgs = [
      "https://picsum.photos/seed/riad-g1/900/600",
      "https://picsum.photos/seed/riad-g2/900/600",
      "https://picsum.photos/seed/riad-g3/900/600",
      "https://picsum.photos/seed/riad-g4/900/600",
      "https://picsum.photos/seed/riad-g5/900/600",
      "https://picsum.photos/seed/riad-g6/900/600"
    ];
    return (
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h3 className="font-display text-2xl mb-6">Glimpses of the Riad</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {imgs.map((src, i) => (
            <img key={i} src={src} alt={`Riad photo ${i + 1}`} className="h-40 md:h-48 w-full object-cover rounded-xl" loading="lazy" />
          ))}
        </div>
        <div className="text-right mt-4">
          <a href="/gallery" className="text-sm underline">Open full gallery</a>
        </div>
      </section>
    );
  }
  