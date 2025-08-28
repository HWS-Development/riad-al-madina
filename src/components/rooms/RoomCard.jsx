import { useTranslation } from "react-i18next";
import { buildBookingUrl } from "../../utils/booking";

export default function RoomCard({ room, checkin, checkout, adults = 2 }) {
  const { t } = useTranslation();

  const onBook = () => {
    const url = buildBookingUrl({ checkin, checkout, adults });
    window.open(url, "_blank", "noopener");
  };

  return (
    <article className="rounded-2xl overflow-hidden border border-sand/50 bg-white shadow-soft flex flex-col">
      <img
        src={room.hero}
        alt={`${room.title} preview`}
        loading="lazy"
        className="h-52 w-full object-cover"
      />
      <div className="p-4 md:p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{room.title}</h3>
          <span className="text-xs opacity-70">{room.size} m²</span>
        </div>
        <div className="text-xs opacity-70 mt-1">{room.beds}</div>
        <p className="text-sm mt-2 flex-1">{room.short}</p>

        {/* Features line */}
        <div className="mt-3 flex flex-wrap gap-2">
          {room.features.slice(0, 4).map((f) => (
            <span
              key={f}
              className="text-xs px-2 py-1 rounded-full border border-sand/50"
            >
              {f}
            </span>
          ))}
          {room.features.length > 4 && (
            <span className="text-xs opacity-70">
              +{room.features.length - 4}
            </span>
          )}
        </div>

        {/* CTAs */}
        <div className="mt-4 flex items-center gap-2">
          <a
            href={`/rooms/${room.id}`}
            className="rounded-xl px-4 py-2 border border-sand/60 hover:bg-base/70"
          >
            {t("rooms.show")}
          </a>
          <button
            onClick={onBook}
            className="rounded-xl px-4 py-2 bg-ink text-white hover:opacity-90"
          >
            {t("rooms.book")}
          </button>
        </div>
      </div>
    </article>
  );
}
