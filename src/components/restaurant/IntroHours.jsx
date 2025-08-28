import { useTranslation } from "react-i18next";

export default function IntroHours() {
  const { t } = useTranslation();

  return (
    <section className="py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="font-medium mb-2">{t("restaurant.welcome", "Welcome")}</h2>
          <p className="opacity-80 leading-relaxed">
            {t(
              "restaurant.about",
              "In a musical atmosphere around the patio, our kitchen blends Moroccan classics and market-fresh seafood from Essaouira. Our menu follows the seasons and the catch of the day."
            )}
          </p>
        </div>

        <aside className="rounded-2xl border border-sand/50 bg-rose-50/50 p-4">
          <h3 className="font-medium">{t("restaurant.hours", "Hours & Contact")}</h3>
          <ul className="text-sm opacity-80 mt-2 space-y-1">
            <li>{t("restaurant.lunch", "Lunch: 12:00 – 15:00")}</li>
            <li>{t("restaurant.dinner", "Dinner: 19:00 – 22:30")}</li>
            <li>{t("restaurant.closed", "Open daily (subject to season)")}</li>
          </ul>
          <div className="mt-3 text-sm">
            <a href="tel:+212524475907" className="hover:underline block">
              +212 524 475 907
            </a>
            <a href="mailto:contact@riadalmadina.com" className="hover:underline block">
              contact@riadalmadina.com
            </a>
          </div>
          <div className="mt-4 flex gap-2">
            <a
              href="tel:+212524475907"
              className="rounded-xl px-4 py-2 bg-ink text-white hover:opacity-90"
            >
              {t("restaurant.bookTable", "Book a table")}
            </a>
            <a
              href="mailto:contact@riadalmadina.com?subject=Table%20reservation"
              className="rounded-xl px-4 py-2 border border-sand/60 hover:bg-base/70"
            >
              {t("restaurant.emailUs", "Email us")}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
