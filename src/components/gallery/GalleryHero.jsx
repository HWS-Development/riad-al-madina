import { useTranslation } from "react-i18next";

const HERO =
  "https://images.unsplash.com/photo-1544986581-efac024faf62?q=80&w=2000&auto=format&fit=crop";

export default function GalleryHero() {
  const { t } = useTranslation();
  return (
    <section className="relative h-[24vh] md:h-[32vh] border-b border-[#e6dccf]">
      <img
        src={HERO}
        alt={t("gallery.hero.alt", "Courtyard arches in warm light")}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/40" />
      <div className="relative h-full mx-auto max-w-6xl px-4 md:px-6 flex items-end pb-6">
        <div>
          <h1 className="text-white text-3xl md:text-4xl font-semibold drop-shadow">
            {t("gallery.hero.title", "Gallery")}
          </h1>
          <p className="text-white/90 mt-1 max-w-2xl">
            {t(
              "gallery.hero.subtitle",
              "Glimpses of our riad: rooms, patio, restaurant and the magic of Essaouira."
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
