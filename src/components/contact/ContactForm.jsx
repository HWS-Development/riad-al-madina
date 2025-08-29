import { useTranslation } from "react-i18next";
import Section from "../ui/Section";
import { useState } from "react";

export default function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(t("contact.form.subject"));
    const body = encodeURIComponent(
      `${t("contact.form.name")}: ${form.name}\n` +
      `${t("contact.form.email")}: ${form.email}\n` +
      `${t("contact.form.phone")}: ${form.phone}\n\n` +
      `${t("contact.form.message")}:\n${form.message}`
    );
    window.location.href = `mailto:contact@riadalmadina.com?subject=${subject}&body=${body}`;
  };

  return (
    <Section pad="tight">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_.9fr] gap-6 items-start">
        {/* FORM */}
        <form
          onSubmit={submit}
          className="rounded-2xl border border-sand/60 bg-white shadow-soft p-4 md:p-5"
        >
          <h2 className="font-medium">{t("contact.form.title")}</h2>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label={t("contact.form.name")}>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="w-full rounded-xl border border-sand/60 px-3 py-2 bg-white"
              />
            </Field>
            <Field label={t("contact.form.email")}>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                className="w-full rounded-xl border border-sand/60 px-3 py-2 bg-white"
              />
            </Field>
            <Field label={t("contact.form.phone")} full>
              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                className="w-full rounded-xl border border-sand/60 px-3 py-2 bg-white"
              />
            </Field>
            <Field label={t("contact.form.message")} full>
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={onChange}
                className="w-full rounded-xl border border-sand/60 px-3 py-2 bg-white"
              />
            </Field>
          </div>

          <div className="mt-3 flex md:justify-end">
            <button className="rounded-xl px-5 py-2 bg-ink text-white hover:opacity-90">
              {t("contact.form.send")}
            </button>
          </div>
        </form>

        {/* DIRECT CONTACT / FIND US */}
        <aside className="rounded-2xl border border-sand/60 bg-white shadow-soft p-4 md:p-5 space-y-4">
          <h3 className="font-medium">{t("contact.direct.title")}</h3>

          <ul className="space-y-1 text-sm">
            <li>
              <strong>{t("contact.cards.phone")}: </strong>
              <a className="hover:underline" href="tel:+212524475907">
                +212 524 475 907
              </a>{" "}
              <span className="opacity-60">({t("contact.cards.daily")})</span>
            </li>
            <li>
              <strong>{t("contact.cards.email")}: </strong>
              <a className="hover:underline" href="mailto:contact@riadalmadina.com">
                contact@riadalmadina.com
              </a>
            </li>
            <li>
              <strong>{t("contact.cards.address")}: </strong>
              {t("contact.address.full")}
            </li>
            <li>
              <strong>{t("contact.cards.social")}: </strong>
              <a className="hover:underline" href="#">
                Instagram / Facebook
              </a>
            </li>
          </ul>

          <div>
            <h4 className="font-medium mt-3">{t("contact.direct.findUs")}</h4>
            <p className="opacity-80 text-sm">{t("contact.address.full")}</p>
            <a
              href="https://maps.google.com/?q=Riad%20Al%20Madina%20Essaouira"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 rounded-xl px-3.5 py-2 border border-sand/60 hover:bg-base/70"
            >
              {t("contact.map.open")}
            </a>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function Field({ label, children, full = false }) {
  return (
    <label className={`block ${full ? "md:col-span-2" : ""}`}>
      <span className="text-sm opacity-70">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
