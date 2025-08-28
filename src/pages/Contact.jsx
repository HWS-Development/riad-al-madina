import { useTranslation } from "react-i18next";

export default function Contact(){
  const { t } = useTranslation();
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-3xl mb-6">{t("contact.title")}</h1>

      <div className="relative w-full overflow-hidden rounded-brand shadow-soft"
           style={{ paddingTop: "56.25%" /* 16:9 ratio */ }}>
        <iframe
          title="Riad Al Madina Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.3915047383807!2d-9.77303072454924!3d31.513405474217144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9bcd0001c675%3A0x129752bfd1758429!2sRiad%20Al%20Madina%20Essaouira%20H%C3%B4tel!5e0!3m2!1sen!2sma!4v1756302234241!5m2!1sen!2sma"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>

      <div className="mt-3">
        <a
          href="https://www.google.com/maps/place/Riad+Al+Madina+Essaouira+H%C3%B4tel/"
          target="_blank" rel="noopener"
          className="text-sm underline">
          {t("contact.openMaps")}
        </a>
      </div>
    </section>
  );
}
