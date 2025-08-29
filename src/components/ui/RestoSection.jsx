export default function Section({
    children,
    bg = "plain",     // "plain" | "base"
    border = true,    // adds subtle bottom divider
    pad = "tight",    // "tight" | "normal"
    className = ""
  }) {
    const bgClass = bg === "base" ? "bg-base" : "bg-white";
    const yPad = pad === "tight" ? "py-6 md:py-8" : "py-8 md:py-10";
    const borderClass = border ? "border-b border-sand/40" : "";
    return (
      <section className={`${bgClass} ${borderClass} ${yPad} ${className}`}>
        <div className="max-w-6xl mx-auto px-4">{children}</div>
      </section>
    );
  }
  