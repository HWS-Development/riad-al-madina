import { useTranslation } from "react-i18next";

export default function ContactHero() {
    const { t } = useTranslation();
    return (
      <section
        aria-label="Contact hero"
        className="relative h-[22vh] md:h-[28vh] w-full overflow-hidden"
      >
        <img
          src="/images/interior5.jpg"
          alt="Warm terracotta rocks backdrop"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/15 to-transparent" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 h-full flex items-end pb-6">
          <div>
            <h1 className="text-white text-3xl md:text-4xl font-semibold drop-shadow">
                {t("contact.hero.title")}
            </h1>
            <p className="text-white/90 mt-1">
                {t("contact.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>
    );
  }
  