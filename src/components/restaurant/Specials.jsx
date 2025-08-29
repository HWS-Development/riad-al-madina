import Section from "../ui/RestoSection";
import { useTranslation } from "react-i18next";

const PICKS = [
  "/images/resto1.jpg",
  "/images/resto2.jpg",
  "/images/resto3.jpg",
];

export default function Specials() {
  const { t } = useTranslation();
  return (
    <Section bg="base" pad="tight" border={false}>
      <h2 className="font-medium mb-3">{t("restaurant.picks.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {PICKS.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={t("restaurant.picks.alt")}
            className="h-40 md:h-48 w-full object-cover rounded-xl border border-sand/60 shadow-sm"
            loading="lazy"
          />
        ))}
      </div>
    </Section>
  );
}
