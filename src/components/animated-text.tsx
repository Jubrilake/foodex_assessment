import { useEffect, useState, useRef } from "react"
import { stroke } from "@/assets"

const phrases = ["Asap!", "as e dey hot!", "kia kia!"]
const INTERVAL = 3000 // 3 seconds per phrase

export function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const textRef = useRef<HTMLSpanElement>(null) // Specify the type as HTMLSpanElement
  const [textWidth, setTextWidth] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false) // Start fade out

      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % phrases.length)
        setIsVisible(true) // Start fade in
      }, 500) // Wait for fade out to complete
    }, INTERVAL)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth) // Measure text width
    }
  }, [currentIndex]) // Recalculate width whenever the phrase changes

  return (
    <span
      className={`text-[#00C9A7] italic relative inline-block transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      ref={textRef}
    >
      <span className="text-white">,</span> {/* White comma */}
      {phrases[currentIndex]}
      <span
        className="absolute bottom-0 left-0"
        style={{
          width: `${textWidth}px`, // Set the stroke width to match the text width
        }}
      >
        <img src={stroke} alt="" className="w-full" />
      </span>
    </span>
  )
}
