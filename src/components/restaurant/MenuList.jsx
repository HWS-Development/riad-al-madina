import Section from "../ui/RestoSection";
import { useTranslation } from "react-i18next";

const LUNCH = [
  { nameKey: "restaurant.menu.sardines", price: 70 },
  { nameKey: "restaurant.menu.bream",    price: 100 },
  { nameKey: "restaurant.menu.gambas",   price: 120 },
  { nameKey: "restaurant.menu.sole",     price: 100 },
  { nameKey: "restaurant.menu.calamar",  price: 110 },
  { nameKey: "restaurant.menu.skewers",  price: 100 },
  { nameKey: "restaurant.menu.pilpil",   price: 110 },
  { nameKey: "restaurant.menu.pastilla", price: 120 },
  { nameKey: "restaurant.menu.lobster",  price: 220 }
];

function Line({ label, price }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="whitespace-pre-wrap">{label}</span>
      <span className="flex-1 border-b border-dotted border-sand/70 translate-y-[-2px]" />
      <span className="tabular-nums">{price} DH</span>
    </div>
  );
}

export default function MenuList() {
  const { t } = useTranslation();

  return (
    <Section bg="base" pad="tight">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-medium mb-2">{t("restaurant.menu.title")}</h2>
          <div className="rounded-2xl border border-sand/60 bg-white shadow-soft p-4 space-y-2.5">
            {LUNCH.map((row) => (
              <Line
                key={row.nameKey}
                label={t(row.nameKey)}
                price={row.price}
              />
            ))}
          </div>
          <p className="text-xs opacity-60 mt-2">{t("restaurant.menu.note")}</p>
        </div>

        <div>
          <h2 className="font-medium mb-2">{t("restaurant.specials.title")}</h2>
          <div className="rounded-2xl border border-sand/60 bg-white shadow-soft p-4">
            <p className="text-sm opacity-80">{t("restaurant.specials.text")}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
