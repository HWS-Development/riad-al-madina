export default function SpaHero() {
    return (
      <section aria-label="Spa hero" className="relative h-[26vh] md:h-[34vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2000&auto=format&fit=crop"
          alt="Warm spa ambience"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/15 to-transparent" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 h-full flex items-end pb-6">
          <div>
            <h1 className="text-white text-3xl md:text-4xl font-semibold drop-shadow">
              Spa & Wellness
            </h1>
            <p className="text-white/90 mt-1 max-w-2xl">
              Exhale in our traditional hammam, aromatic massages and slow rituals — all in the calm of our riad.
            </p>
          </div>
        </div>
      </section>
    );
  }
  