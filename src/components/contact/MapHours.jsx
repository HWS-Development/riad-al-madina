import Section from "../ui/Section";
import { useTranslation } from "react-i18next";

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.3915047383807!2d-9.77303072454924!3d31.513405474217144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9bcd0001c675%3A0x129752bfd1758429!2sRiad%20Al%20Madina%20Essaouira%20H%C3%B4tel!5e0!3m2!1sen!2sma!4v1756302234241!5m2!1sen!2sma';

export default function MapHours() {
  const { t } = useTranslation();

  return (
    <Section bg="base" pad="tight">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl overflow-hidden border border-sand/60 shadow-soft">
          <iframe
            src={MAP_EMBED}
            title={t("contact.map.title")}
            className="w-full h-[260px] md:h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="rounded-2xl border border-sand/60 bg-white shadow-soft p-4 md:p-5">
          <h3 className="font-medium">{t("contact.hours.title")}</h3>
          <ul className="mt-2 text-sm space-y-1">
            <li>{t("contact.hours.reception")}</li>
            <li>{t("contact.hours.checkin")}</li>
            <li>{t("contact.hours.checkout")}</li>
            <li className="opacity-70">{t("contact.hours.note")}</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
