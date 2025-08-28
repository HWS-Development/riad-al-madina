import Section from "../ui/Section";

const items = [
  {
    icon: "🚗",
    title: "Car park",
    desc: "Public parking around the hotel",
  },
  {
    icon: "📶",
    title: "Wi-Fi Internet",
    desc: "Free, unlimited Internet",
  },
  {
    icon: "🤝",
    title: "Concierge",
    desc: "Reception staff speaking FR, EN, DE, AR",
  },
];

export default function ServicesTeaser() {
  return (
    <Section title="Services" bg="alt">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {items.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl border border-sand/50 bg-white shadow-soft p-4 md:p-5 min-h-[112px] flex items-start gap-3"
          >
            <div className="text-xl md:text-2xl leading-none">{s.icon}</div>
            <div className="flex-1">
              <div className="font-medium">{s.title}</div>
              <div className="text-sm opacity-70 mt-1">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
