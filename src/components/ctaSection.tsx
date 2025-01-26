import { blacksparkle, dbcloud, cloud } from "@/assets";
import CtaTwoColumn from "./home/cta-two-column";
const CtaSection = () => {
  return (
    <section className="container mx-auto py-36 text-center">
   
      <div className="flex items-center justify-center gap-2 text-white/90 text-sm mb-5">
        <img src={blacksparkle} alt="" />
        <span className="text-black">JOIN THE CHOW AFRICA WAITLIST</span>
        <img src={blacksparkle} alt="" />
      </div>
      <div className=" mx-auto space-y-6 relative">
        <img src={dbcloud} alt="" className="absolute left-0 bottom-0" />
        <img src={cloud} alt="" className="absolute right-0 bottom-0" />
        <h2 className="text-3xl md:text-5xl font-bold text-[#111111]">
          tired of eating the <br />{" "}
          <span className="bg-[#d87023] border-4 md:text-3xl text-xl border-black font-medium text-white px-8 py-2 rounded-full inline-block mx-2">
            {" "}
            🍛 same dishes everyday? 🍝
          </span>
        </h2>
        <p className="text-black md:px-96 font-semibold px-10">
          Do you crave new and exciting dishes? Look no further! Chow is the
          perfect solution for discovering your next dish.
        </p>
      </div>
      {/* two colum grid */}
      <CtaTwoColumn />
    </section>
  );
};

export default CtaSection;
