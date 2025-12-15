"use client";

import React from "react";

const EngagementProgramModels = () => {
  const programModels = [
    {
      id: "intro",
      title: "Intro Sessions",
      duration: "½ Day",
      summary: "Executive awareness for leaders and key decision-makers.",
      bullets: [
        "Get leaders aligned on where AI can help — and where it can’t.",
        "Understand key AI terms, trends, and real use cases.",
        "Build a shared vision and common language across teams.",
      ],
    },
    {
      id: "applied",
      title: "Applied Workshops",
      duration: "1–2 Days",
      summary: "Hands-on learning and real project creation with your data.",
      bullets: [
        "Work on real business use cases from your own company.",
        "Build practical prompts, workflows, and reusable templates.",
        "Leave with ready-to-use tools and clear next steps.",
      ],
    },
    {
      id: "corporate",
      title: "Corporate Programs",
      duration: "Multi-session",
      summary:
        "Structured capability-building across teams and functions.",
      bullets: [
        "Connect marketing, operations, and workflow into one program.",
        "Learn through guided sessions with real assignments.",
        "Track real skill growth and measurable business results. ",
      ],
    },
  ];

  return (
    <section
      id="program-models"
      className="relative py-13 overflow-hidden"

    >
      

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[13px] tracking-[0.22em] uppercase text-sky-600 mb-4">
            How we work with teams
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[#0B1C33] mb-4">
            Engagement & Program Models
          </h2>
          <p className="text-sm font-semibold text-slate-500 leading-relaxed">
            Choose one model or combine all
            three for a full transformation journey.
          </p>
        </div>

        {/* PRICING-STYLE CARD ROW */}
        <div className="relative grid gap-6 lg:grid-cols-3">
          {programModels.map((model, index) => {
            const isFeatured = index === 1; // middle card

            return (
              <article
                key={model.id}
                className={`
                  group relative flex flex-col justify-between rounded-3xl px-7 py-8
                  border bg-white
                  shadow-[0_18px_40px_rgba(15,23,42,0.08)]
                  transition-all duration-300
                  lg:hover:-translate-y-3 hover:-translate-y-2
                  hover:shadow-[0_26px_60px_rgba(15,23,42,0.16)]
                  hover:z-20
                  hover:border-sky-500
                  hover:bg-gradient-to-b hover:from-white hover:to-[#E5EDFF]
                  ${isFeatured ? "lg:scale-[1.03] lg:z-10 border-sky-200" : "border-slate-200"}
                `}
              >
                {/* MOST POPULAR pill, like pricing highlight */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-[#0B1C33] text-white text-[11px] px-4 py-1 shadow-md">
                      Most popular
                    </span>
                  </div>
                )}

                {/* TITLE + DURATION inline */}
                <header className="flex items-center justify-between mb-5">
                  <h3
                    className="
                      text-lg sm:text-xl font-semibold text-[#0B1C33]
                      transition-colors duration-300
                      group-hover:text-sky-700
                    "
                  >
                    {model.title}
                  </h3>
                  <span
                    className="
                      rounded-full border border-dashed border-slate-300
                      px-3 py-1 text-[11px] text-slate-600
                      bg-slate-50/70
                      transition-colors duration-300
                      group-hover:border-sky-400 group-hover:text-sky-700 group-hover:bg-white
                    "
                  >
                    {model.duration}
                  </span>
                </header>

                {/* SUMMARY */}
                <p className="text-sm font-semibold text-slate-500 mb-5 group-hover:text-slate-800">
                  {model.summary}
                </p>

                {/* BULLET LIST – pricing-style checks */}
                <ul className="space-y-2 text-sm font-semibold text-slate-500">
                  {model.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 transition-colors group-hover:text-slate-600"
                    >
                      <span className="mt-[2px] text-sky-500 group-hover:text-sky-600">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngagementProgramModels;
