import Section from "../ui/Section";

const reviews = [
  {
    text:
      "Wonderful location in the heart of the medina. Staff were warm and welcoming.",
    meta: "Anna, UK · May 2025",
    stars: 4,
  },
  {
    text:
      "The patio is magical at night. Great breakfast and very clean rooms.",
    meta: "Marc, FR · Apr 2025",
    stars: 5,
  },
  {
    text:
      "Authentic riad feel with modern comforts. We’ll be back!",
    meta: "Layla, US · Mar 2025",
    stars: 4,
  },
];

function Stars({ n }) {
  return (
    <div className="flex gap-1 text-amber-500 text-[13px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < n ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function ReviewsTeaser() {
  return (
    <Section title="Guest reviews" eyebrow="from Booking.com" bg="base">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {reviews.map((r, i) => (
          <article
            key={i}
            className="rounded-2xl border border-sand/50 bg-white shadow-soft p-4 md:p-5 flex flex-col min-h-[140px]"
          >
            <Stars n={r.stars} />
            <p className="mt-2 text-sm leading-6 flex-1">{r.text}</p>
            <div className="mt-3 text-xs opacity-70">{r.meta}</div>
          </article>
        ))}
      </div>

      <div className="mt-6 md:mt-8">
        <a
          href="#"
          className="text-sm underline opacity-80 hover:opacity-100"
        >
          Read more on Booking.com
        </a>
      </div>
    </Section>
  );
}
