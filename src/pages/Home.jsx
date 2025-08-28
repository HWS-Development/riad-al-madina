import BookingBar from "../components/common/BookingBar";
import Hero from "../components/Home/Hero";
import HomeIntro from "../components/Home/Intro";
import RoomsPreview from "../components/Home/RoomsPreview";
import HomeHighlights from "../components/Home/Highlights";
import ServicesTeaser from "../components/Home/ServicesTeaser";
import ReviewsTeaser from "../components/Home/ReviewsTeaser";

export default function Home() {
  return (
    <>
      <Hero>
        <BookingBar />
      </Hero>

      {/* spacer to receive the overhanging booking bar on desktop */}
      <div className="hidden md:block h-10" />

      <HomeIntro />
      <RoomsPreview />
      <HomeHighlights />
      <ServicesTeaser />
      <ReviewsTeaser />
    </>
  );
}
