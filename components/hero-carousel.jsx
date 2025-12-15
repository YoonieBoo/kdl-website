"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const slides = [
    {
      title: "Promote human resource development",
      subtitle: "Professional training programs for modern businesses",
      image: "/professional-training.png",
    },
    {
      title: "All Course 2025",
      subtitle: "Comprehensive training courses for annual personnel planning",
      image: "/training-courses.jpg",
    },
    {
      title: "Digital Transformation",
      subtitle: "Elevate your organization into the Industry 4.0 era",
      image: "/digital-transformation-concept.png",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative h-96 bg-gray-100 overflow-hidden rounded-lg">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 z-20">
            <h2 className="text-4xl font-bold text-white mb-2">{slide.title}</h2>
            <p className="text-xl text-gray-200">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition ${idx === current ? "bg-white w-8" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}
