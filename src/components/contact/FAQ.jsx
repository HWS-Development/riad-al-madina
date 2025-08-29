import Section from "../ui/Section";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();
  const qa = [
    { q: t("contact.faq.q1"), a: t("contact.faq.a1") },
    { q: t("contact.faq.q2"), a: t("contact.faq.a2") },
    { q: t("contact.faq.q3"), a: t("contact.faq.a3") }
  ];

  return (
    <Section pad="tight" border={false}>
      <h2 className="font-medium mb-3">{t("contact.faq.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {qa.map((item, i) => (
          <article
            key={i}
            className="rounded-2xl border border-sand/60 bg-white p-4 shadow-soft"
          >
            <h3 className="font-medium">{item.q}</h3>
            <p className="opacity-80 mt-1 text-sm leading-relaxed">{item.a}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
