import { Card, CardContent } from "@/components/ui/card";
import { thumbup } from "@/assets";
import { toNaira } from "@/lib/utils";
import { FaHeart } from "react-icons/fa";
import { statusbar, smavatar, smlogo, filter, statuspicks } from "@/assets";

interface PhoneMockupProps {
  className?: string;
  foodItem: {
    title: string;
    image: string;
    tag: string;
    picks: number;
    approx: number;
  };
}

export function PhoneMockup({ className, foodItem }: PhoneMockupProps) {
  return (
    <div className={`md:w-[320px] w-[220px] ${className}`}>
      <div className="relative w-full aspect-[9/19] bg-[#F4F3E8] rounded-[3rem] shadow-xl p-3">
        <div className="absolute inset-0 rounded-[3rem] border-8 border-black pointer-events-none" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl" />
        <div className="w-full h-full bg-[#F4F3E8] rounded-[2.5rem] overflow-hidden">
          <div className="flex w-full">
            <img src={statusbar} alt="Logo" className="w-72 h-auto" />
          </div>

          <div className="flex flex-col space-y-3">
            <div className="flex justify-between items-center md:px-7 px-3 md:py-4 py-2">
              <img src={filter} alt="" />
              <img src={smlogo} alt="" />
              <img src={smavatar} alt="" />
            </div>
            <div className="flex justify-center">
              <img src={statuspicks} alt="" className="w-14 h-auto" />
            </div>
          </div>

          <div className="md:p-4 p-0">
            <Card className="bg-transparent border-0 shadow-none overflow-hidden p-2 transform transition-transform duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-auto ">
                  <img
                    src={foodItem.image}
                    alt={foodItem.title}
                    className="object-cover w-full h-auto"
                  />
                  <div className="absolute md:top-32 top-24 md:left-6 left-5s">
                    <FaHeart className="text-green-800" />
                  </div>
                </div>

                <h3 className="font-medium text-black text-sm">
                  {foodItem.title}
                </h3>
                <span className="inline-block px-2 py-1 text-xs bg-[#D6D5CA] text-[#49280F] rounded-full mb-2">
                  {foodItem.tag}
                </span>
                <div className="flex space-x-2 text-black text-sm">
                  <p className="flex items-center space-x-1">
                    {" "}
                    <span>
                      <img src={thumbup} alt="thumb up" width={14} />
                    </span>
                    {foodItem.picks} picks
                  </p>
                  <p className="flex items-center gap-x-3">
                    <span className="w-1 h-1 rounded-full inline-block bg-black"></span>{" "}
                    {toNaira(foodItem.approx)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
