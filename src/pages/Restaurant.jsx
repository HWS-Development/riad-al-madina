import Hero from "../components/restaurant/Hero";
import IntroHours from "../components/restaurant/IntroHours";
import MenuList from "../components/restaurant/MenuList";
import GalleryStrip from "../components/restaurant/GalleryStrip";
import ContactMap from "../components/restaurant/ContactMap";

export default function Restaurant() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Hero />
      <IntroHours />
      <MenuList />
      <GalleryStrip />
      <ContactMap />
    </main>
  );
}
