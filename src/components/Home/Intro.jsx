import { useTranslation } from "react-i18next";

/**
 * Compact, scannable intro.
 * On desktop, shows a subtle supporting image on the side.
 */
export default function HomeIntro() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-5 gap-8 items-center">
      {/* Text */}
      <div className="md:col-span-3 text-center md:text-left">
        <h2 className="font-display text-3xl md:text-4xl">{t("home.intro.title")}</h2>
        <p className="opacity-80 mt-4">{t("home.intro.text")}</p>

        {/* Optional secondary line */}
        <p className="opacity-70 mt-3 text-sm">
          {t("home.intro.sub", { defaultValue: "Steps from the ramparts and the ocean." })}
        </p>
      </div>

      {/* Supporting image (only for layout balance; swap later) */}
      <div className="md:col-span-2">
        <img
          src="https://picsum.photos/seed/riad-intro/900/700"
          alt={t("home.intro.alt")}
          className="w-full h-64 md:h-72 object-cover rounded-brand shadow-soft"
          loading="lazy"
        />
      </div>
    </section>
  );
}
