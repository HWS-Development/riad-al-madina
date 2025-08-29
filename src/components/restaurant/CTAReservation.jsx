import Section from "../ui/RestoSection";
import { useTranslation } from "react-i18next";

const BOOK_URL =
  "https://riad-dar-tiflet-1.hotelrunner.com/bv3/search"; // replace with your final URL + params

export default function CTAReservation() {
  const { t } = useTranslation();
  return (
    <Section bg="base" pad="tight" border={false}>
      <div className="rounded-2xl border border-sand/60 bg-white shadow-soft p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div>
          <h2 className="font-medium">{t("restaurant.cta.bigTitle")}</h2>
          <p className="opacity-75">{t("restaurant.cta.bigText")}</p>
        </div>
        <a          
          href='/contact'
          target="_blank"
          rel="noreferrer"
          className="rounded-xl px-5 py-2 bg-ink text-white hover:opacity-90"
        >
          {t("restaurant.cta.book")}
        </a>
      </div>
    </Section>
  );
}
