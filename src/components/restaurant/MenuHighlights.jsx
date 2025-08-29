import Section from "../ui/Section";
import { useTranslation } from "react-i18next";

const HIGHLIGHTS = [
  {
    titleKey: "restaurant.highlights.sardines",
    img: "/images/food2.jpg"
  },
  {
    titleKey: "restaurant.highlights.tajine",
    img: "/images/food4.webp"
  },
  {
    titleKey: "restaurant.highlights.couscous",
    img: "/images/food5.png"
  }
];

export default function MenuHighlights() {
  const { t } = useTranslation();
  return (
    <Section bg="base" pad="tight">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {HIGHLIGHTS.map((it, i) => (
          <article
            key={i}
            className="rounded-2xl border border-sand/60 bg-white overflow-hidden shadow-soft"
          >
            <img
              src={it.img}
              alt={t("restaurant.highlights.alt", { defaultValue: "Dish" })}
              className="h-36 md:h-44 w-full object-cover"
              loading="lazy"
            />
            <div className="p-3.5">
              <h3 className="font-medium">{t(it.titleKey)}</h3>
              <p className="text-sm opacity-75 mt-1">
                {t("restaurant.highlights.caption")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
