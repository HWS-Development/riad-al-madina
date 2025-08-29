import Hero from "../components/restaurant/Hero";
import Story from "../components/restaurant/Story";
import MenuHighlights from "../components/restaurant/MenuHighlights";
import MenuList from "../components/restaurant/MenuList";
import Specials from "../components/restaurant/Specials";
import GalleryMosaic from "../components/restaurant/GalleryMosaic";
import CTAReservation from "../components/restaurant/CTAReservation";
import ContactMap from "../components/restaurant/ContactMap";

export default function RestaurantPage() {
  return (
    <main>
      <Hero />
      <Story />
      <MenuHighlights />
      <MenuList />
      <Specials />
      {/* <GalleryMosaic /> */}
      <ContactMap />
      <CTAReservation />
    </main>
  );
}
