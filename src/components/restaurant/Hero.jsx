import { useTranslation } from "react-i18next";

const HERO =
  "/images/resto.jpg";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[24vh] md:h-[32vh] border-b border-sand/40">
      <img
        src={HERO}
        alt={t("restaurant.hero.alt")}
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/40" />
      <div className="relative h-full max-w-6xl mx-auto px-4 flex flex-col justify-end pb-5 md:pb-6">
        <h1 className="font-display text-3xl md:text-4xl text-white drop-shadow">
          {t("restaurant.hero.title")}
        </h1>
        <p className="max-w-2xl text-white/90 mt-1.5 md:mt-2">
          {t("restaurant.hero.subtitle")}
        </p>
      </div>
    </section>
  );
}
