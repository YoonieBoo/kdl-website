"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "ช่วยให้เข้าใจ AI มากขึ้น และเริ่มเห็นว่าควรนำไปใช้กับงานตรงไหนได้บ้าง",
    name: "Arada",
    role: "Product Manager",
    avatar: "/images/avatars/User1.jpg",
  },
  {
    id: 2,
    quote:
      "We’ve been looking for something like this since we started. It finally helps our teams move faster with AI.",
    name: "Yoonie Aung",
    role: "Product Designer",
    avatar: "/images/avatars/User4.jpg",
  },
  {
    id: 3,
    quote:
      "ชอบที่ workshop อธิบาย AI-driven marketing ได้เข้าใจง่าย จากที่เคยคิดว่ายาก ทีมสามารถนำไปปรับใช้กับโปรเจคที่ทำอยู่ได้จริง",
    name: "Mai",
    role: "Marketing Manager",
    avatar: "/images/avatars/User2.png",
  },

  {
    id: 4,
    quote:
      "Clear, practical, and hands-on. The workshops helped our people actually apply AI to real projects.",
    name: "Alurra N",
    role: "Head of Sales",
    avatar: "/images/avatars/User2.png",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(1); // start from middle
  const total = testimonials.length;

  const getIndex = (offset) => (activeIndex + offset + total) % total;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const visibleIndices =
    total >= 3
      ? [getIndex(-1), activeIndex, getIndex(1)]
      : Array.from({ length: total }, (_, i) => i);

  return (
    <section
      id="testimonials"
      className="
        relative -mt-px
        pt-20 pb-24
        bg-gradient-to-b
        from-[#0A1B33]
        via-[#081E3A]
        to-[#050914]
        overflow-hidden
      "
    >
      {/* soft fade into Who We Are */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 top-0 h-24
          bg-gradient-to-b
          from-[#0A1B33]
          via-[#0A1B33]/60
          to-transparent
        "
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.18em] text-slate-300 uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 leading-tight mb-3">
            What People Say About Us
          </h2>
          <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed">
            Teams and leaders use our workshops to turn AI ideas into real business results.
          </p>
        </div>

        {/* Swiper-like cards */}
        <div className="mt-18 flex justify-center">
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl w-full">
            {visibleIndices.map((idx) => {
              const item = testimonials[idx];
              const isActive = idx === activeIndex;

              return (
                <article
                  key={item.id}
                  onClick={() => setActiveIndex(idx)} // 👈 click card to activate
                  className={`
                    relative rounded-3xl border backdrop-blur-xl p-6 sm:p-7
                    cursor-pointer
                    transition-all duration-300 ease-out
                    ${
                      isActive
                        ? "bg-white/6 border-cyan-400/60 shadow-[0_25px_55px_rgba(0,0,0,0.7)] scale-[1.08] z-20 -translate-y-1"
                        : "bg-white/4 border-slate-700/80 shadow-[0_14px_35px_rgba(0,0,0,0.55)] opacity-70 scale-[0.94] z-10 hover:opacity-90 hover:shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
                    }
                  `}
                >
                  <div className="text-cyan-200 text-3xl mb-4">“</div>

                  <p className="text-sm sm:text-base text-slate-100/90 leading-relaxed mb-8">
                    {item.quote}
                  </p>

                  <div className="h-px w-full bg-slate-600/60 mb-4" />

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-slate-900/80 bg-slate-200">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-50">
                        {item.name}
                      </span>
                      <span className="text-[11px] uppercase tracking-wide text-cyan-200/80">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            className="
              h-8 w-8 rounded-full border border-slate-500/60
              flex items-center justify-center text-slate-200 text-sm
              hover:bg-slate-800/60 transition
            "
          >
            ‹
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`
                  h-1.5 rounded-full transition-all
                  ${i === activeIndex ? "w-6 bg-cyan-400" : "w-1.5 bg-slate-500/60"}
                `}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="
              h-8 w-8 rounded-full border border-slate-500/60
              flex items-center justify-center text-slate-200 text-sm
              hover:bg-slate-800/60 transition
            "
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
