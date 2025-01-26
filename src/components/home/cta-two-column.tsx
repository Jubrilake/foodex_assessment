import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { letter, thumbup } from "@/assets";
import { toNaira } from "@/lib/utils";
import { cardItems } from "@/data/cardItems";
import { manwithphone } from "@/assets";
import { FaHeart } from "react-icons/fa";

const CtaTwoColumn: React.FC = () => {
  return (
    <section className="relative">
    <img src={letter} alt="" className="absolute top-3 left-4 w-52 h-auto"  />
    <img src={letter} alt="" className="absolute bottom-0 right-4 w-52 h-auto" />
   
    <div className="grid grid-cols-1 p-10 lg:grid-cols-[2fr_1.8fr] gap-20 mt-10 bg-[#FFF8F2]">
      {/* Left Column */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardItems.map((item) => (
          <Card
            key={item.id}
            className={`transform border-none w-auto h-auto bg-white rounded-xl transition-transform duration-300 overflow-hidden p-2 ${
              item.opacity === 1 ? "shadow-xl" : ""
            }`}
            style={{ opacity: item.opacity }}
          >
            <CardContent className="p-0 text-start">
              <div className="relative mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-48 rounded-xl"
                />
                {item.loved && (
                  <div className="absolute top-2 left-2">
                  <FaHeart className="text-green-800" />
                  </div>
                )}
              </div>
              <h3 className="font-medium text-sm text-black">{item.title}</h3>
              <span className="inline-block px-2 py-1 text-xs bg-[#D6D5CA] text-[#49280F] rounded-full mb-2">
                {item.tag}
              </span>
              <div className="flex space-x-4 text-sm text-black">
                <p className="flex items-center space-x-1">
                  <img src={thumbup} alt="thumb up" className="w-4 h-4" />
                  <span>{item.picks} picks</span>
                </p>
                <p className="flex items-center space-x-1">
                  <span className="w-1 h-1 bg-black rounded-full"></span>
                  <span>{toNaira(item.approx)}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Right Column */}
      <div className="lg:block  relative grid grid-rows-1 grid-cols-1">
        <img
          src={manwithphone}
          alt="Man with phone"
          className="w-full h-full object-contain absolute "
        />
        <div className="absolute bottom-[16rem] -left-4 py-2 px-4 bg-[#009F79] border-4 border-white shadow-lg rounded-xl text-white flex space-x-4 items-center w-80 h-16">
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#1E735E]">
            👍🏽
          </div>
          <p className="font-medium">Picked by 314 people today</p>
        </div>
        <div className="absolute bottom-[10rem] left-12 py-2 px-4 bg-[#009F79] border-4 border-white shadow-lg rounded-xl text-white flex space-x-4 items-center w-80 h-16">
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#1E735E]">
            🧅
          </div>
          <p className="font-medium">Exclude onions.</p>
        </div>
        <div className="absolute bottom-[4.3rem] left-24 py-2 px-4 bg-[#009F79] border-4 border-white shadow-lg rounded-xl text-white flex space-x-4 items-center w-80 h-16">
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#1E735E]">
            🥩
          </div>
          <p className="font-medium">Must include turkey</p>
        </div>
        <div className="absolute top-[4.3rem] -right-10 py-2 px-4 bg-[#D87023] border-4 border-white shadow-lg rounded-xl text-white space-y-2">
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#77441E]">
          💵
          </div>
          <p className="font-medium">You can buy all for <span className="text-[#01FFC2]">N2,500</span> at Yaba</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default CtaTwoColumn;
