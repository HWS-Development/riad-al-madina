import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LangSwitch from "../common/LangSwitch";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/rooms", key: "nav.rooms" },
  { to: "/restaurant", key: "nav.restaurant" },
  { to: "/spa", key: "nav.spa" },
  { to: "/gallery", key: "nav.gallery" },
  { to: "/contact", key: "nav.contact" }
];

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-base/80 backdrop-blur border-b border-sand/40">
      <div className="mx-auto max-w-6xl h-16 px-4 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-wide">
          {t("brand")}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-ink font-medium" : "opacity-80 hover:opacity-100"}`
              }
            >
              {t(l.key)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch />
          <a
            href="https://riad-dar-tiflet-1.hotelrunner.com/bv3/search"
            className="rounded-brand border border-cacao/20 px-4 py-2 text-sm bg-ink text-white shadow-soft"
          >
            {t("nav.booking")}
          </a>
        </div>
      </div>
    </header>
  );
}
