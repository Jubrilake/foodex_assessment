import { AnimatedText } from "./animated-text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sparkle } from "@/assets";

const HeroContent = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 mb-20">
      <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
        <img src={sparkle} alt="" />
        <span>JOIN THE CHOW AFRICA WAITLIST</span>
        <img src={sparkle} alt="" />
      </div>

      <h1 className="text-center">
        <span className="block text-white font-medium text-4xl md:text-7xl mb-1">
          Find chow
          <AnimatedText />
        </span>
      </h1>

      <p className="text-white/80 text-center lg:px-48 px-20 text-lg">
        The patient dog eats left overs. Be the first to know when we launch.
        Join our Waitlist 😎
      </p>

      <div className="flex flex-col md:flex-row max-w-md justify-center mx-auto gap-2 px-10 md:px-0 items-center">
        <Input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-auto bg-white text-black rounded-xl placeholder:text-black p-6"
        />
        <Button
          variant="default"
          className="w-full md:w-auto text-white px-8 py-6 text-center rounded-full border-2 border-white"
        >
          JOIN WAITLIST
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
