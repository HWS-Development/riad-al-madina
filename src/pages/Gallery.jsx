import GalleryHero from "../components/gallery/GalleryHero";
import GalleryGrid from "../components/gallery/GalleryGrid";

export default function Gallery() {
  return (
    <>
      <GalleryHero />
      <section className="bg-[#f4efe8] py-10 md:py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
