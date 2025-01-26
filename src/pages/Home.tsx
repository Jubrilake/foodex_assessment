import CtaSection from "@/components/ctaSection";
import FooterSection from "@/components/footerSection";
import HeroSection from "@/components/heroSection";

const Home = () => {
  return (
    <div className="flex-1 flex-col my-5 mx-4">
      <HeroSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
};

export default Home;
