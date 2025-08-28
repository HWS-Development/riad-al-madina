import { useTranslation } from "react-i18next";

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.3915047383807!2d-9.77303072454924!3d31.513405474217144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9bcd0001c675%3A0x129752bfd1758429!2sRiad%20Al%20Madina%20Essaouira%20H%C3%B4tel!5e0!3m2!1sen!2sma!4v1756302234241!5m2!1sen!2sma';

export default function ContactMap() {
  const { t } = useTranslation();

  return (
    <section className="py-10 md:py-14 border-t border-sand/50">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="rounded-2xl overflow-hidden border border-sand/60">
          <iframe
            src={MAP_EMBED}
            title={t("restaurant.mapTitle", "Map to the restaurant")}
            className="w-full h-[320px] md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div>
          <h3 className="font-medium">{t("restaurant.findUs", "Find us")}</h3>
          <p className="opacity-80 mt-2">
            9, rue Attarine, Old Medina, Essaouira — Morocco
          </p>
          <div className="mt-3 space-y-1">
            <a href="tel:+212524475907" className="block hover:underline">
              +212 524 475 907
            </a>
            <a
              href="mailto:contact@riadalmadina.com?subject=Table%20reservation"
              className="block hover:underline"
            >
              contact@riadalmadina.com
            </a>
          </div>
          <a
            href="https://maps.google.com/?q=Riad%20Al%20Madina%20Essaouira"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 rounded-xl px-4 py-2 border border-sand/60 hover:bg-base/70"
          >
            {t("restaurant.openMaps", "Open in Google Maps")}
          </a>
        </div>
      </div>
    </section>
  );
}
