"use client";

import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative pt-30 pb-30 bg-gradient-to-br from-[#08162F] via-[#0F2F55] to-[#0A1B33] overflow-hidden">
      {/* Subtle background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-24 h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute top-40 -right-40 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/4 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-center">
            <div className="mb-7"></div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight tracking-tight text-slate-50 mb-10">
              AI-Driven <br />
              Learning Experience
            </h1>

            <p className="text-sm md:text-base font-normal text-slate-200 leading-relaxed mb-8 max-w-xl">
              Hands-on AI workshops that turn real business problems into <br />
              real-world solutions, helping teams automate workflows and <br />
              make better data-driven decisions.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <Link
                href="#workshop-categories"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-slate-50 text-slate-900 font-semibold shadow-lg shadow-slate-900/40 hover:bg-sky-50 hover:text-slate-950 transition-colors"
              >
                Explore Workshops
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-5 sm:mt-15 sm:flex sm:flex-row sm:gap-10">
              <div className="text-center sm:text-left">
                <p className="text-xl sm:text-2xl font-bold text-slate-50">100+</p>
                <p className="mt-1 text-[11px] sm:text-sm text-slate-400 leading-snug">
                  Professionals trained
                </p>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-xl sm:text-2xl font-bold text-slate-50">20+</p>
                <p className="mt-1 text-[11px] sm:text-sm text-slate-400 leading-snug">
                  Workshops &amp; programs
                </p>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-xl sm:text-2xl font-bold text-amber-300">95%</p>
                <p className="mt-1 text-[11px] sm:text-sm text-slate-400 leading-snug">
                  Participant satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – illustration + spread-out cards */}
          <div className="relative h-[22rem] sm:h-[26rem] lg:h-[28rem] flex items-center justify-center">
            {/* Dashboard illustration behind cards */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center float-1">
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-950/95 via-slate-900/85 to-slate-800/80 shadow-[0_32px_90px_rgba(15,23,42,0.95)] overflow-hidden">
                {/* window header */}
                <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-slate-700/70">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-300" />
                  </div>
                  <div className="h-5 w-16 rounded-full bg-slate-700/80" />
                </div>

                {/* ghost inputs/cards */}
                <div className="px-4 pt-3 space-y-3">
                  <div className="h-9 rounded-2xl bg-slate-800/90 border border-slate-600/80" />
                  <div className="h-9 rounded-2xl bg-slate-800/90 border border-slate-600/80" />
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="h-14 rounded-2xl bg-slate-800/90 border border-slate-600/80" />
                    <div className="h-14 rounded-2xl bg-sky-500/20 border border-sky-400/60" />
                    <div className="h-14 rounded-2xl bg-emerald-500/20 border border-emerald-300/60" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="relative w-full max-w-lg">
              {/* AI Workshops – mid-left */}
              <div
                className="
                  absolute
                  left-3 top-10
                  sm:left-[-1rem] sm:top-16
                  rounded-2xl bg-slate-900/90 border border-slate-600/80 backdrop-blur-2xl
                  px-4 py-3 sm:px-6 sm:py-4
                  shadow-[0_22px_55px_rgba(0,0,0,0.8)]
                  float-3
                "
              >
                <p className="text-[12px] sm:text-[13px] font-semibold text-sky-100">
                  AI Workshops
                </p>
                <p className="mt-1 text-[12px] sm:text-[13px] text-sky-50/85">
                  Hands-on sessions for corporate teams.
                </p>
              </div>

              {/* Applied Learning – upper-right */}
              <div
                className="
                  absolute
                  right-3 top-16
                  sm:right-[-1.5rem] sm:top-24
                  rounded-2xl bg-cyan-400/10 border border-cyan-300/30 backdrop-blur-2xl
                  px-4 py-3 sm:px-6 sm:py-4
                  shadow-[0_24px_70px_rgba(34,211,238,0.25)]
                  float-4
                "
              >
                <p className="text-[12px] sm:text-[13px] font-semibold text-cyan-200">
                  Applied Learning
                </p>
                <p className="mt-1 text-[12px] sm:text-[13px] text-cyan-100/90">
                  Real data, real business impact.
                </p>
              </div>

              {/* Transformation chip – bottom */}
              <div
                className="
                  absolute
                  left-6 bottom-3
                  sm:left-10 sm:bottom-2
                  rounded-2xl bg-slate-900/90 border border-slate-600/80 backdrop-blur-2xl
                  px-4 py-2.5 sm:px-6 sm:py-3
                  shadow-[0_18px_45px_rgba(0,0,0,0.85)]
                  float-3
                "
              >
                <p className="text-[11px] sm:text-[12px] font-medium text-sky-50">
                  Transformation programs with TLM &amp; DU DA TAE.
                </p>
              </div>
            </div>
          </div>
          {/* end right column */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
