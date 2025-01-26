import React from "react";
import { circle } from "@/assets";
import { FoodCarousel } from "@/components/home/food-carousel";
import { foodItems } from "@/data/foodItems";
import { PhoneMockup } from "@/components/home/phone-mockup";
import HeroContent from "@/components/home/hero-content";

const HeroSection = () => {
  const [activeFood, setActiveFood] = React.useState(
    foodItems[foodItems.length - 1]
  );
  return (
    <main className="flex-1 my-4 pt-20 relative rounded-2xl h-auto overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/herobg.svg')",
          backgroundBlendMode: "screen",
          backgroundColor: "black",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-20 flex flex-col items-center justify-center text-white text-2xl">
        <HeroContent />
        <div className="w-full md:mt-32 md:mb-2 mt-0 mb-10">
          <FoodCarousel onActiveItemChange={setActiveFood} />
          <PhoneMockup
            className="lg:block absolute md:-bottom-[67%] -bottom-[32.5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            foodItem={activeFood}
          />
        </div>
      </div>
      <img src={circle} alt="" className="absolute left-0 bottom-10" />
    </main>
  );
};

export default HeroSection;
