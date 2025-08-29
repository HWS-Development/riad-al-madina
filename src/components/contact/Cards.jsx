import Section from "../ui/Section";
import { useTranslation } from "react-i18next";

export default function Cards() {
  const { t } = useTranslation();

  const items = [
    {
      title: t("contact.cards.phone"),
      value: "+212 524 475 907",
      href: "tel:+212524475907",
      hint: t("contact.cards.daily")
    },
    {
      title: t("contact.cards.email"),
      value: "contact@riadalmadina.com",
      href: "mailto:contact@riadalmadina.com"
    },
    {
      title: t("contact.cards.address"),
      value: t("contact.address.full"),
      href: "https://maps.google.com/?q=Riad%20Al%20Madina%20Essaouira",
      target: "_blank"
    },
    {
      title: t("contact.cards.social"),
      value: "Instagram / Facebook",
      href: "#"
    }
  ];

  return (
    <Section bg="base" pad="tight">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[1fr]">
        {items.map((it, i) => (
          <article
            key={i}
            className="h-full rounded-2xl border border-sand/60 bg-white p-4 shadow-soft flex flex-col"
          >
            <div className="text-[13px] opacity-70">{it.title}</div>
            <a
              href={it.href}
              target={it.target}
              rel={it.target ? "noreferrer" : undefined}
              className="mt-1 font-medium hover:underline leading-snug"
            >
              {it.value}
            </a>
            {it.hint && <div className="mt-auto pt-3 text-xs opacity-60">{it.hint}</div>}
          </article>
        ))}
      </div>
    </Section>
  );
}
