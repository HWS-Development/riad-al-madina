import BookingBar from "../components/common/BookingBar";
import Hero from "../components/Home/Hero";
import HomeIntro from "../components/Home/Intro";
import RoomsPreview from "../components/Home/RoomsPreview";
import HomeHighlights from "../components/Home/Highlights";
import ServicesTeaser from "../components/Home/ServicesTeaser";
import ReviewsTeaser from "../components/Home/ReviewsTeaser";
import CurveBand from "../components/ui/CurveBand";

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
      <CurveBand position="bottom" from="#EFE3D9" to="#F5EFE4" height={160} />
      <HomeHighlights />
      <CurveBand position="bottom" from="#F5EFE4" to="#EFE3D9" height={160} />
      <ServicesTeaser />
      <ReviewsTeaser />
    </>
  );
}
