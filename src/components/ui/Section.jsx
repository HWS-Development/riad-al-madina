export default function Section({
    id,
    title,
    eyebrow,
    bg = "base", // "base" | "alt"
    children,
  }) {
    const bgClass = bg === "alt" ? "bg-[#EFE3D9]" : "bg-transparent"; // use your alt token here
    return (
      <section id={id} className={`${bgClass} py-6 md:py-10`}>
        <div className="max-w-6xl mx-auto px-4">
          {title && (
            <h2 className="font-display text-2xl md:text-3xl tracking-tight">
              {title}
            </h2>
          )}
          {eyebrow && (
            <p className="text-sm opacity-70 mt-1">{eyebrow}</p>
          )}
          <div className="mt-8 md:mt-12">{children}</div>
        </div>
      </section>
    );
  }
  