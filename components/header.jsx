"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Workshops", href: "#workshop-categories" },
  // { label: "Courses", href: "#upcoming-courses" },
  { label: "About Us", href: "#who-we-are" },
];

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#0B1C33] rounded-lg flex items-center justify-center text-white font-semibold text-xs tracking-[0.18em]">
              KDL
            </div>
            <span className="font-bold text-base text-[#0B1C33]">
              Knowledge Discovery Lab
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  relative text-sm font-medium text-slate-600 
                  px-2 py-1 rounded-full
                  hover:text-slate-900 hover:bg-slate-200/80
                  transition-colors
                "
              >
                {item.label}
              </Link>
            ))}

            
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-slate-700 hover:text-slate-900 transition-colors"
            aria-label="Toggle navigation"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200">
            <div className="flex flex-col gap-1 pt-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="
                    block rounded-full px-4 py-2.5 text-sm font-medium
                    text-slate-700 hover:bg-slate-100 hover:text-slate-900
                    transition-colors
                  "
                >
                  {item.label}
                </Link>
              ))}

             
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
