import SpaHero from "../components/spa/SpaHero";
import Hammam from "../components/spa/Hammam";
import Treatments from "../components/spa/Treatments";
import SpaCTA from "../components/spa/SpaCTA";

export default function Spa() {
  return (
    <>
      <SpaHero />
      <section className="bg-[#f4efe8]">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-12 space-y-8 md:space-y-10">
          <Hammam />
          <Treatments />
          <SpaCTA />
        </div>
      </section>
    </>
  );
}
