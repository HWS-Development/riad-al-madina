import { useTranslation } from "react-i18next";

const HERO =
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[34vh] md:h-[46vh] border-b border-sand/50">
      <img
        src={HERO}
        alt={t("restaurant.heroAlt", "Restaurant courtyard")}
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/40" />
      <div className="relative h-full max-w-6xl mx-auto px-4 flex flex-col justify-end pb-8 md:pb-10">
        <h1 className="font-display text-3xl md:text-5xl text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
          {t("restaurant.title", "Restaurant")}
        </h1>
        <p className="max-w-2xl md:text-lg text-white/90 mt-2 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
          {t(
            "restaurant.subtitle",
            "Meals are served in charming lounges where every detail commands attention. Enjoy traditional or international cuisine, with rigorously selected products."
          )}
        </p>
      </div>
    </section>
  );
}
