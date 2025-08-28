const IMGS = [
    "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
  ];
  
  export default function GalleryStrip() {
    return (
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {IMGS.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Restaurant photo ${i + 1}`}
              loading="lazy"
              className="h-40 md:h-48 w-full object-cover rounded-xl shadow-sm"
            />
          ))}
        </div>
      </section>
    );
  }
  