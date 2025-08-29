import Section from "../ui/RestoSection";

const IMGS = [
  "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541542684-4a7a62c3f06f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544025162-8edb4a1f0b7f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516684669134-de6f26a04647?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526312426976-593c12823d79?q=80&w=1200&auto=format&fit=crop"
];

export default function GalleryMosaic() {
  return (
    <Section bg="base" pad="tight">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {IMGS.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Restaurant photo ${i + 1}`}
            className="h-28 md:h-28 w-full object-cover rounded-lg border border-sand/60"
            loading="lazy"
          />
        ))}
      </div>
    </Section>
  );
}
