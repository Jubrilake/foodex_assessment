import { useEffect, useState, useRef } from "react";
import { stroke } from "@/assets";

const phrases = ["Asap!", "as e dey hot!", "kia kia!", "Now Now!"];
const INTERVAL = 3000;

export function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const textRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % phrases.length);
        setIsVisible(true);
      }, 500);
    }, INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [currentIndex]);

  return (
    <span
      className={`text-[#00C9A7] font-courgette relative inline-block transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      ref={textRef}
    >
      <span className="text-white">,</span>
      {phrases[currentIndex]}
      <span
        className="absolute bottom-0 left-0"
        style={{
          width: `${textWidth}px`, 
        }}
      >
        <img src={stroke} alt="" className="w-full" />
      </span>
    </span>
  );
}
