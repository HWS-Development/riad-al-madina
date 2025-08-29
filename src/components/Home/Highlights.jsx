import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function HomeHighlights() {
  const { t } = useTranslation();
  const cards = [
    {
      title: t("home.highlights.restaurant"),
      img: "/images/resto.jpg",
      to: "/restaurant",
      alt: "Restaurant courtyard tables"
    },
    {
      title: t("home.highlights.spa"),
      img: "/images/spa.jpg",
      to: "/spa",
      alt: "Spa & wellness ambiance"
    }
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-6">
      {cards.map((c) => (
        <Link
          key={c.title}
          to={c.to}
          className="group rounded-brand overflow-hidden shadow-soft block bg-white"
        >
          <img
            src={c.img}
            alt={c.alt}
            className="h-56 md:h-80 w-full object-cover group-hover:scale-[1.03] transition"
            loading="lazy"
          />
          <div className="p-5 bg-base mt-auto">
            <div className="font-display text-2xl">{c.title}</div>
            <div className="text-sm opacity-70">{t("home.highlights.cta")}</div>
          </div>
        </Link>
      ))}
    </section>
  );
}
