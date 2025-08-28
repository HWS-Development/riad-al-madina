import { useTranslation } from "react-i18next";

/** You can keep the data here (simple) or lift it to a constants file later */
const LUNCH = [
  { name: "Grilled sardines", price: 70 },
  { name: "Grilled bream", price: 100 },
  { name: "Grilled gambas", price: 120 },
  { name: "Sole grid", price: 100 },
  { name: "Calamar a la plancha", price: 110 },
  { name: "Skewers fish", price: 100 },
  { name: "Pil-pil shrimps", price: 110 },
  { name: "Pastilla for seafood", price: 120 },
  { name: "Grilled lobster", price: 220 },
];

function Line({ name, price }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="whitespace-pre-wrap">{name}</span>
      <span className="flex-1 border-b border-dotted border-sand/70 translate-y-[-2px]" />
      <span className="tabular-nums">{price} DH</span>
    </div>
  );
}

export default function MenuList() {
  const { t } = useTranslation();

  return (
    <section className="py-8 md:py-12 border-t border-sand/50">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-medium mb-3">
            {t("restaurant.lunchMenu", "Lunch Menu")}
          </h3>
          <div className="rounded-2xl border border-sand/50 bg-white p-5 space-y-3 shadow-soft">
            {LUNCH.map((i) => (
              <Line key={i.name} {...i} />
            ))}
          </div>
        </div>

        {/* Optionally add a second column for dinner or desserts */}
        <div className="opacity-60">
          <h3 className="font-medium mb-3">
            {t("restaurant.note", "Seasonal Specials")}
          </h3>
          <p className="text-sm">
            {t(
              "restaurant.seasonal",
              "Ask about the catch of the day and seasonal tajines. Prices may vary."
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
