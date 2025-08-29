import { useTranslation } from "react-i18next";
import Section from "../ui/RestoSection";

export default function Story() {
  const { t } = useTranslation();

  return (
    <Section bg="base" pad="tight">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_.8fr] gap-5 md:gap-6">
        <div>
          <h2 className="font-medium mb-1.5">{t("restaurant.story.title")}</h2>
          <p className="opacity-80 leading-relaxed">
            {t("restaurant.story.text")}
          </p>
        </div>

        <aside className="rounded-2xl border border-sand/60 bg-white shadow-soft p-3.5 md:p-4">
          <h3 className="font-medium">{t("restaurant.hours.title")}</h3>
          <ul className="text-sm opacity-80 mt-1.5 space-y-0.5">
            <li>{t("restaurant.hours.lunch")}</li>
            <li>{t("restaurant.hours.dinner")}</li>
            <li>{t("restaurant.hours.note")}</li>
          </ul>

          <div className="mt-3 flex gap-2">
            <a
              href="tel:+212524475907"
              className="rounded-xl px-3.5 py-2 bg-ink text-white hover:opacity-90"
            >
              {t("restaurant.cta.book")}
            </a>
            <a
              href="mailto:contact@riadalmadina.com?subject=Restaurant"
              className="rounded-xl px-3.5 py-2 border border-sand/60 hover:bg-base/70"
            >
              {t("restaurant.cta.email")}
            </a>
          </div>
        </aside>
      </div>
    </Section>
  );
}
