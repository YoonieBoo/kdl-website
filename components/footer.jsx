"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-[#050B1E] text-slate-100">
      {/* subtle navy glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[520px] rounded-full bg-sky-500/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-8">
        {/* TOP ROW */}
        <div className="grid gap-10 md:grid-cols-2 items-start">
          
          {/* LEFT — Brand / summary */}
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-sky-300">
                KDL
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                AI-driven corporate training
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Empowering teams with practical AI, automation, and digital
              innovation training.
            </p>
          </div>

          {/* RIGHT — Sections (aligned to right corner) */}
          <div className="md:text-right">
            <h4 className="text-sm font-semibold text-white mb-3">
              Sections
            </h4>

            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link
                  href="#program-models"
                  className="hover:text-sky-300 transition-colors"
                >
                  Program models
                </Link>
              </li>
              <li>
                <Link
                  href="#workshop-categories"
                  className="hover:text-sky-300 transition-colors"
                >
                  Our workshops
                </Link>
              </li>
              <li>
                <Link
                  href="#who-we-are"
                  className="hover:text-sky-300 transition-colors"
                >
                  About the lab
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-sky-300 transition-colors"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 border-t border-slate-800/80 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2025 Knowledge Discovery Lab. All rights reserved.</p>

          <div className="flex gap-4">
            <button className="hover:text-sky-300 transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-sky-300 transition-colors">
              Terms of Use
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
