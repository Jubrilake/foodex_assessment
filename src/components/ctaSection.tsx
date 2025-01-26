import { Button } from "@/components/ui/button";
import { blacksparkle } from "@/assets";
const CtaSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center bg-white">
      <div className="flex items-center justify-center gap-2 text-white/90 text-sm mb-5">
        <img src={blacksparkle} alt="" />
        <span className="text-black">JOIN THE CHOW AFRICA WAITLIST</span>
        <img src={blacksparkle} alt="" />
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-[#111111]">
          tired of eating the <br />{" "}
          <span className="bg-[#d87023] border-4 md:text-3xl text-xl border-black font-medium text-white px-8 py-2 rounded-full inline-block mx-2">
            {" "}
            🍛 same dishes everyday? 🍝
          </span>
        </h2>
        <p className="text-[#111111]/80">
          Do you crave new and exciting dishes? Look no further! Chow is the
          perfect solution for discovering your next dish.
        </p>
        <Button className="bg-[#36d0b8] hover:bg-[#36d0b8]/90 text-white">
          JOIN WAITLIST
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
