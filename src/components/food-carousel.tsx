import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { foodItems, FoodItem } from "../data/foodItems";
import Autoplay from "embla-carousel-autoplay";
import { thumbup } from "@/assets";
import { toNaira } from "@/lib/utils";
import type { EmblaCarouselType } from "embla-carousel";

interface FoodCarouselProps {
  onActiveItemChange: (item: FoodItem) => void;
}

export function FoodCarousel({ onActiveItemChange }: FoodCarouselProps) {
  const initialIndex = foodItems.length - 1;
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const [current, setCurrent] = useState<number>(initialIndex);

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const handleSetApi = (apiInstance: EmblaCarouselType | undefined) => {
    setApi(apiInstance || null);
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    onActiveItemChange(foodItems[initialIndex]);

    api.on("select", () => {
      const selectedIndex = api.selectedScrollSnap();
      setCurrent(selectedIndex);
      onActiveItemChange(foodItems[selectedIndex]);
    });

    api.scrollTo(initialIndex);
  }, [api, onActiveItemChange, initialIndex]);

  return (
    <Carousel
      setApi={handleSetApi}
      className="w-full mx-auto"
      plugins={[plugin.current]}
      opts={{
        align: "center",
        loop: true,
        startIndex: initialIndex,
      }}
    >
      <CarouselContent>
        {foodItems.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/5 pt-64 lg:pt-10"
          >
            <div
              className={`transition-opacity duration-300 ${
                current === index ? "opacity-100" : ""
              }`}
            >
              <Card className="bg-white overflow-hidden p-2 transform rounded-xl transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-auto">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="object-cover rounded-t-lg w-full h-full"
                    />
                  </div>

                  <h3 className="font-medium text-black text-sm">
                    {item.title}
                  </h3>
                  <span className="inline-block px-2 py-1 text-xs bg-[#D6D5CA] text-[#49280F] rounded-full mb-2">
                    {item.tag}
                  </span>
                  <div className="flex space-x-2 text-black text-sm">
                    <p className="flex items-center space-x-1">
                      <span>
                        <img src={thumbup} alt="thumb up" width={14} />
                      </span>
                      {item.picks} picks
                    </p>
                    <p className="flex items-center gap-x-3">
                      <span className="w-1 h-1 rounded-full inline-block bg-black"></span>{" "}
                      {toNaira(item.approx)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
