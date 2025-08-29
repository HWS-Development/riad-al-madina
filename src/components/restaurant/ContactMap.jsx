import { useTranslation } from "react-i18next";
import Section from "../ui/RestoSection";

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.3915047383807!2d-9.77303072454924!3d31.513405474217144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9bcd0001c675%3A0x129752bfd1758429!2sRiad%20Al%20Madina%20Essaouira%20H%C3%B4tel!5e0!3m2!1sen!2sma!4v1756302234241!5m2!1sen!2sma';

export default function ContactMap() {
  const { t } = useTranslation();

  return (
    <Section bg="base" pad="tight" border={false}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="rounded-2xl overflow-hidden border border-sand/60 shadow-soft">
          <iframe
            src={MAP_EMBED}
            title={t("restaurant.map.title")}
            className="w-full h-[260px] md:h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div>
          <h3 className="font-medium">{t("restaurant.contact.title")}</h3>
          <p className="opacity-80 mt-1">{t("restaurant.contact.address")}</p>
          <div className="mt-2 space-y-0.5">
            <a href="tel:+212524475907" className="block hover:underline">
              +212 524 475 907
            </a>
            <a
              href="mailto:contact@riadalmadina.com?subject=Restaurant"
              className="block hover:underline"
            >
              contact@riadalmadina.com
            </a>
          </div>
          <a
            href="https://maps.google.com/?q=Riad%20Al%20Madina%20Essaouira"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 rounded-xl px-3.5 py-2 border border-sand/60 hover:bg-base/70"
          >
            {t("restaurant.map.openLabel")}
          </a>
        </div>
      </div>
    </Section>
  );
}
