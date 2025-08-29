const TREATMENTS = [
    {
      key: "hammam_ritual",
      title: "Hammam Ritual",
      desc: "Steam, black soap & kessa exfoliation for velvety skin.",
      duration: "45 min",
      price: "250 DH",
    },
    {
      key: "oriental_massage",
      title: "Oriental Massage",
      desc: "Flowing aromatherapy massage with warm argan oil.",
      duration: "45 / 60 min",
      price: "350 / 450 DH",
    },
    {
      key: "deep_massage",
      title: "Deep Tissue",
      desc: "Targeted pressure to release tension in back, neck & shoulders.",
      duration: "60 min",
      price: "480 DH",
    },
    {
      key: "facial_glow",
      title: "Radiance Facial",
      desc: "Cleanse, gentle scrub & nourishing mask with argan.",
      duration: "45 min",
      price: "320 DH",
    },
    {
      key: "foot_reflex",
      title: "Foot Reflexology",
      desc: "Grounding foot & lower-leg treatment to improve circulation.",
      duration: "30 min",
      price: "220 DH",
    },
    {
      key: "couples_ritual",
      title: "Ritual for Two",
      desc: "Shared hammam + side-by-side massage in our couple suite.",
      duration: "90 min",
      price: "890 DH / couple",
    },
  ];
  
  export default function Treatments() {
    return (
      <div className="space-y-4">
        <div className="flex items-end justify-between">
          <h3 className="text-lg md:text-xl font-medium">Treatments & Prices</h3>
          <p className="text-sm opacity-70">Prices in MAD. Kindly inform us of any allergies.</p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {TREATMENTS.map((t) => (
            <article
              key={t.key}
              className="rounded-2xl border border-[#e6dccf] bg-white shadow-soft p-4 flex flex-col justify-between"
            >
              <div>
                <h4 className="font-medium">{t.title}</h4>
                <p className="opacity-80 mt-1 text-sm">{t.desc}</p>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="opacity-70">{t.duration}</span>
                {/* <span className="font-medium">{t.price}</span> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }
  