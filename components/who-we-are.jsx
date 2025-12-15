"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function WhoWeAre() {
  const BASE_COUNT = 1248; // center value

  const [joinCount, setJoinCount] = useState(BASE_COUNT);

  // continuous subtle wiggle animation for the counter
  useEffect(() => {
    let frameId;
    const start = performance.now();

    const animate = (now) => {
      const elapsedSeconds = (now - start) / 1000;

      const amplitude = 12; // how far it moves up/down (±12)
      const speed = 0.4; // smaller = slower oscillation

      const wiggle = Math.sin(elapsedSeconds * speed) * amplitude;
      const value = Math.round(BASE_COUNT + wiggle);

      setJoinCount(value);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      id="who-we-are"
      className="relative pt-20 pb-22 bg-gradient-to-br from-[#08162F] via-[#0F2F55] to-[#0A1B33] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2 items-center">
        {/* LEFT SIDE — TEXT */}
        <div>
          <p className="text-xs tracking-[0.18em] text-slate-300 uppercase mb-3">
            About KDL
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 leading-tight mb-4">
            Who We Are
          </h2>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 max-w-xl">
            We bring together facilitators and professionals who want hands-on,
            practical AI learning — so teams can experiment, share wins, and
            turn ideas into visible business results.
          </p>

          {/* live join counter */}
          <div className="mb-5 inline-flex items-baseline gap-2 rounded-full bg-cyan-500/10 px-4 py-2 border border-cyan-400/35 backdrop-blur">
            <span className="text-lg font-semibold text-cyan-200">
              {joinCount.toLocaleString()}+
            </span>
            <span className="text-xs sm:text-sm text-slate-200">
              people learning with us
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full border border-slate-600/70 bg-slate-900/40 text-xs text-slate-100 backdrop-blur">
              Hands-on workshops
            </span>
            <span className="px-3 py-1 rounded-full border border-slate-600/70 bg-slate-900/40 text-xs text-slate-100 backdrop-blur">
              Built for professionals
            </span>
            <span className="px-3 py-1 rounded-full border border-slate-600/70 bg-slate-900/40 text-xs text-slate-100 backdrop-blur">
              Outcome-driven learning
            </span>
          </div>
        </div>

        {/* RIGHT SIDE — AVATARS + FLOATING STICKERS */}
        <div className="relative flex items-center justify-center">
          {/* invisible layout box just for positioning */}
          <div className="relative h-80 w-80 sm:h-88 sm:w-88">
            {/* gradient glow behind main avatar */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-40 w-40 rounded-full bg-cyan-400/40 blur-3xl" />
            </div>

            {/* MAIN CENTER AVATAR */}
            <div className="absolute inset-0 flex items-center justify-center animate-pop-in">
              <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden ring-4 ring-slate-900 shadow-xl bg-slate-200">
                <Image
                  src="/images/avatars/main.jpg"
                  alt="Community member"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
            </div>

            {/* TOP-LEFT AVATAR + "Welcome!!" */}
            <div className="absolute top-4 left-2 animate-float-slow">
              <div className="relative h-20 w-20">
                <div className="h-20 w-20 rounded-full overflow-hidden shadow-md bg-slate-200 ring-2 ring-slate-900/80">
                  <Image
                    src="/images/avatars/user-1.jpg"
                    alt="Member"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-8 right-9 rounded-full bg-slate-900 text-slate-50 text-[11px] px-3 py-1 shadow-lg">
                  Welcome!!
                </div>
              </div>
            </div>

            {/* TOP-RIGHT AVATAR + "Join us!!" */}
            <div className="absolute top-3 right-3 animate-float-medium">
              <div className="relative h-18 w-18">
                <div className="h-18 w-18 rounded-full overflow-hidden shadow-md bg-slate-200 ring-2 ring-slate-900/80">
                  <Image
                    src="/images/avatars/user-2.jpg"
                    alt="Member"
                    width={72}
                    height={72}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-8 left-14 -translate-x-1/2 rounded-full bg-slate-900 text-slate-50 text-[11px] px-3 py-1 shadow-lg whitespace-nowrap">
                  Join us!!
                </div>
              </div>
            </div>

            {/* BOTTOM-RIGHT AVATAR + "Hola!!" */}
            <div className="absolute bottom-10 right-4 animate-float-fast">
              <div className="relative h-20 w-20">
                <div className="h-20 w-20 rounded-full overflow-hidden shadow-md bg-slate-200 ring-2 ring-slate-900/80">
                  <Image
                    src="/images/avatars/user-4.jpg"
                    alt="Member"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 text-slate-50 text-[11px] px-3 py-1 shadow-lg">
                  Hola!!
                </div>
              </div>
            </div>

            {/* BOTTOM-LEFT AVATAR */}
            <div className="absolute bottom-14 left-4 animate-float-medium">
              <div className="h-18 w-18 rounded-full overflow-hidden shadow-md bg-slate-200 ring-2 ring-slate-900/80">
                <Image
                  src="/images/avatars/user-3.jpg"
                  alt="Member"
                  width={72}
                  height={72}
                  className="object-cover"
                />
              </div>
            </div>

            {/* BOTTOM-CENTER AVATAR */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-float-slow">
              <div className="h-16 w-16 rounded-full overflow-hidden shadow-md bg-slate-200 ring-2 ring-slate-900/80">
                <Image
                  src="/images/avatars/user-5.jpg"
                  alt="Member"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>

            {/* FLOATING GLASS STICKER CHIPS AROUND MAIN AVATAR */}

            {/* HEART – above/right of center */}
            <div className="absolute top-24 right-16 animate-float-slow">
              <div
                className="
                  h-9 w-9 rounded-full 
                  flex items-center justify-center 
                  bg-white/25 
                  backdrop-blur-xl 
                  border border-white/40
                  shadow-[0_10px_30px_rgba(255,255,255,0.25)]
                  hover:scale-110 
                  transition
                "
              >
                <span className="text-lg">❤️</span>
              </div>
            </div>

            {/* THUMB – mid-left of center */}
            <div className="absolute top-28 left-4 animate-float-medium">
              <div
                className="
                  h-9 w-9 rounded-full 
                  flex items-center justify-center 
                  bg-white/25 
                  backdrop-blur-xl 
                  border border-white/40
                  shadow-[0_10px_30px_rgba(255,255,255,0.25)]
                  hover:scale-110 
                  transition
                "
              >
                <span className="text-lg">👍</span>
              </div>
            </div>

            {/* SPARKLE – bottom-right of center */}
            <div className="absolute top-40 right-10 animate-float-fast">
              <div
                className="
                  h-9 w-9 rounded-full 
                  flex items-center justify-center 
                  bg-white/25 
                  backdrop-blur-xl 
                  border border-white/40
                  shadow-[0_10px_30px_rgba(255,255,255,0.25)]
                  hover:scale-110 
                  transition
                "
              >
                <span className="text-lg">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
