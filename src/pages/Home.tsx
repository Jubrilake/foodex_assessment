import CtaSection from "@/components/ctaSection";
import HeroSection from "@/components/heroSection";

const Home = () => {
  return (
    <div className="flex-1 flex-col">
      {/* HERO SECTION */}
      <HeroSection />
      {/* CTA SECTION */}
      <CtaSection />
    </div>
  );
};

export default Home;
