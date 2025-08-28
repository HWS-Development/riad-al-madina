import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

/**
 * Shows 3–4 rooms as preview cards with a different background color
 * to visually separate the section.
 */
export default function RoomsPreview() {
  const { t } = useTranslation();

  const rooms = [
    {
      id: "single",
      title: t("rooms.types.single"),
      meta: t("home.roomsPreview.meta.single"),
      img: "https://picsum.photos/seed/room-single/900/700"
    },
    {
      id: "double",
      title: t("rooms.types.double"),
      meta: t("home.roomsPreview.meta.double"),
      img: "https://picsum.photos/seed/room-double/900/700"
    },
    {
      id: "twin",
      title: t("rooms.types.twin"),
      meta: t("home.roomsPreview.meta.twin"),
      img: "https://picsum.photos/seed/room-twin/900/700"
    },
    {
      id: "suite",
      title: t("rooms.types.suite"),
      meta: t("home.roomsPreview.meta.suite"),
      img: "https://picsum.photos/seed/room-suite/900/700"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#EFE3D9]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
          <h3 className="font-display text-2xl md:text-3xl">
            {t("home.roomsPreview.title")}
          </h3>
          <Link to="/rooms" className="text-sm underline self-start sm:self-auto">
            {t("home.roomsPreview.seeAll")}
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.slice(0, 4).map((room) => (
            <div
              key={room.id}
              className="rounded-brand overflow-hidden bg-white shadow-soft flex flex-col hover:translate-y-[-2px] transition"
            >
              <img
                src={room.img}
                alt={`${room.title} preview`}
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <div className="p-4 flex flex-col gap-2 grow">
                <div className="font-medium">{room.title}</div>
                <div className="text-sm opacity-70">{room.meta}</div>
                <div className="mt-auto">
                  <Link
                    to={`/rooms#${room.id}`}
                    className="inline-flex items-center gap-1 rounded-brand border border-sand/60 px-3 py-2 text-sm hover:bg-white"
                  >
                    {t("home.roomsPreview.show")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
