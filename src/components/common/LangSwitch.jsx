import { useTranslation } from "react-i18next";

export default function LangSwitch() {
  const { i18n } = useTranslation();
  const current = (i18n.language || "en").toLowerCase();
  const next = current === "en" ? "fr" : "en";
  return (
    <button
      aria-label="Toggle language"
      onClick={() => i18n.changeLanguage(next)}
      className="text-xs md:text-sm rounded-md border border-sand/60 px-2 py-1 hover:bg-white"
    >
      {current.toUpperCase()}
    </button>
  );
}
