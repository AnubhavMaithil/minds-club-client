import HeroSection from "@/components/sections/HeroSection";
import ContentSectionHomepage from "@/components/sections/ContentSectionHomepage";
import WorkshopSection from "@/components/sections/WorkshopSection";
import ShopSection from "@/components/sections/ShopSection";
import TheOneSection from "@/components/sections/TheOneSection";
import MindsClubInsider from "@/components/sections/MindsClubInsider";


const Home = () => {

  return (
    <>
      <div className="animate-fade-in bg-[#F7F4F4]">
        {/* Hero Section */}
        <HeroSection />

        {/* Content */}
        <ContentSectionHomepage />

        {/* Workshops */}
        <WorkshopSection />

        {/* SHOP */}
        <ShopSection />

        {/* Minds Club Insider */}
        <MindsClubInsider />

        {/* The One */}
        <TheOneSection />
      </div>
    </>

  );
};

export default Home;
