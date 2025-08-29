import { useTranslation } from "react-i18next";

/**
 * Hero with responsive image + gradient overlay.
 * Renders children (BookingBar) so that on desktop it hangs across
 * the hero and the next section: half inside, half outside.
 */
export default function Hero({ children }) {
  const { t } = useTranslation();

  return (
    <section className="relative">
      {/* Responsive hero image */}
      <picture>
        <source media="(min-width:1024px)" srcSet="/images/interior.jpg" />
        <source media="(min-width:640px)"  srcSet="/images/interior.jpg" />
        <img
          src="/images/interior.jpg"
          alt={t("home.hero.alt")}
          className="h-[64vh] md:h-[72vh] w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      {/* Dark-to-clear overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

      {/* Headline + subtitle (raised so the bar won't overlap) */}
      <div className="absolute inset-x-0 bottom-40 md:bottom-48 mx-auto max-w-6xl px-4 text-white z-10">
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur">
            {t("home.hero.badge")}
          </span>
          <span className="h-[2px] w-24 bg-accent/90 rounded-full" />
        </div>

        <h1 className="font-display text-4xl md:text-6xl max-w-3xl leading-tight drop-shadow-sm">
          {t("home.hero.title")}
        </h1>
        <p className="mt-3 max-w-xl text-white/90">{t("home.hero.subtitle")}</p>
      </div>

      {/* Booking bar: half inside hero, half over next section (desktop).
         On mobile it stays fully inside the hero. */}
      {children && (
        <div className="absolute inset-x-0 bottom-0 md:translate-y-1/2 z-20 flex justify-center pointer-events-none">
          <div className="w-full max-w-6xl px-3 sm:px-4 pointer-events-auto">
            {children}
          </div>
        </div>
      )}
    </section>
  );
}
