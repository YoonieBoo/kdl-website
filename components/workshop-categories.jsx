"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * ✅ Only the 6 workshops from your screenshot:
 * - AI for Software Specification
 * - Lean-to Digital Transformation
 * - AI workflow for Business Process Optimization
 * - AI for Digital Content Creators
 * - AI for Data-Driven experience marketing
 * - AI in motion
 */

// Detailed copy for each workshop (used in the popup)
// ✅ Updated: each workshop supports 3h + 6h tabs in the modal
const workshopDetails = {


  "Lean-to Digital Transformation": {
    who: "Transformation leaders, operations managers, and digital leads.",
    durations: {
      "3": {
        overview:
          "A compact session to connect lean thinking with AI and digital initiatives.",
        format:
          "3-hour live workshop using simple canvases and quick prioritization exercises.",
        outcomes: [
          "Map lean pain points to digital opportunities.",
          "Pick quick wins vs. strategic initiatives.",
          "Align stakeholders with a clear storyline.",
        ],
      },
      "6": {
        overview:
          "Connect lean principles with digital tools and AI to design practical transformation roadmaps.",
        format:
          "6-hour live workshop combining lean canvases, journey maps, and digital use cases.",
        outcomes: [
          "Link lean pain points to digital and AI opportunities.",
          "Prioritize initiatives based on impact and readiness.",
          "Create a simple transformation storyline for stakeholders.",
        ],
      },
    },
  },

  "AI workflow for Business Process Optimization": {
    who: "Operations, PMO, transformation, and process owners.",
    durations: {
      "3": {
        overview:
          "A focused session to spot bottlenecks and redesign workflows with AI in mind.",
        format:
          "3-hour live session with current-state mapping and a target workflow draft.",
        outcomes: [
          "Identify bottlenecks in current processes.",
          "Draft an AI-assisted target workflow.",
          "Clarify roles and hand-offs quickly.",
        ],
      },
      "6": {
        overview:
          "Map current processes, identify bottlenecks, and design AI-assisted workflows that fit how teams really work.",
        format:
          "6-hour live session using swimlanes and real workflow examples.",
        outcomes: [
          "Document current-state and target-state workflow clearly.",
          "Identify high-impact automation opportunities.",
          "Define roles, controls, and hand-offs in AI-enabled processes.",
        ],
      },
    },
  },

    "AI for Software Specification": {
    who: "Product managers, BAs, and engineering leads working on digital products.",
    durations: {
      "3": {
        overview:
          "A fast-paced introduction to using AI for clearer requirements and user stories.",
        format:
          "3-hour live session with guided examples and lightweight exercises.",
        outcomes: [
          "Understand how AI supports requirement clarity.",
          "Draft better user stories faster.",
          "Spot common requirement pitfalls early.",
        ],
      },
      "6": {
        overview:
          "Use AI to support clearer requirements, user stories, and acceptance criteria for product and engineering teams.",
        format:
          "6-hour live session split into two parts with hands-on specification labs.",
        outcomes: [
          "Turn business goals into AI-assisted user stories and specs.",
          "Use AI to explore edge cases and scenarios.",
          "Improve clarity of requirements while keeping ownership with humans.",
        ],
      },
    },
  },

  "AI for Digital Content Creators": {
    who: "Marketing, brand, and CX teams producing campaigns and always-on content.",
    durations: {
      "3": {
        overview:
          "Give marketing and brand teams a practical playbook for using AI tools to ideate, draft, and repurpose content across channels.",
        format:
          "3-hour live session using real examples from blogs, social media, and campaign assets.",
        outcomes: [
          "Map your current content workflow and identify AI quick wins.",
          "Use prompt patterns to draft, refine, and repurpose content faster.",
          "Set guardrails for tone, messaging, and approvals when using AI.",
        ],
      },
      "6": {
        overview:
          "A deeper, hands-on version with more practice rounds, review loops, and reusable templates for your team.",
        format:
          "6-hour live workshop with exercises across multiple content formats + feedback rounds.",
        outcomes: [
          "Build a repeatable prompt kit for your brand voice.",
          "Create a repurposing workflow across channels.",
          "Set a team approval process with AI guardrails.",
        ],
      },
    },
  },

  "AI for Data-Driven experience marketing": {
    who: "CX, CRM, and lifecycle marketing teams responsible for journeys.",
    durations: {
      "3": {
        overview:
          "Use AI to connect customer data, experiments, and feedback to design better end-to-end experiences.",
        format:
          "3-hour live session combining journey maps and AI-assisted analysis.",
        outcomes: [
          "Translate customer data into clear journey insights.",
          "Prioritize improvements using scenario exploration.",
          "Create experience briefs that connect insights to action.",
        ],
      },
      "6": {
        overview:
          "A deeper workshop with more journey scenarios, experimentation planning, and prioritization frameworks.",
        format:
          "6-hour live workshop including analysis + planning + implementation roadmap.",
        outcomes: [
          "Build a journey measurement plan and experiment ideas.",
          "Create prioritized experience improvements by segment.",
          "Turn insights into a practical execution roadmap.",
        ],
      },
    },
  },

  "AI in motion": {
    who: "Teams who want to see real AI use cases end-to-end, quickly.",
    durations: {
      "3": {
        overview:
          "A fast-paced session showing how AI can be applied live across workflows, with practical examples and hands-on demos.",
        format:
          "3-hour live session with guided demos, exercises, and take-home templates.",
        outcomes: [
          "See AI workflows applied from start to finish.",
          "Learn prompt patterns you can reuse immediately.",
          "Leave with a practical starter toolkit for your team.",
        ],
      },
      "6": {
        overview:
          "A longer session with more demos + team exercises across multiple workflows end-to-end.",
        format:
          "6-hour live workshop with extended hands-on practice and reusable workflow templates.",
        outcomes: [
          "Practice AI workflows in multiple real scenarios.",
          "Build templates your team can reuse.",
          "Leave with a stronger starter toolkit + next steps.",
        ],
      },
    },
  },
};

// ✅ Only 6 workshops
export default function WorkshopCategories() {
  const workshops = [
    
    {
      title: "Lean-to Digital Transformation",
      track: "Process & Workflow",
      subtitle: "Practical roadmap design using lean + AI thinking.",
      durationLabel: "6 hours · Intermediate",
    },
    {
      title: "AI workflow for Business Process Optimization",
      track: "Process & Workflow",
      subtitle: "Design workflows that reduce bottlenecks and rework.",
      durationLabel: "6 hours · Intermediate",
    },
    {
      title: "AI for Software Specification",
      track: "Process & Workflow",
      subtitle: "Applied AI for product and IT requirement clarity.",
      durationLabel: "6 hours · Intermediate",
    },
  
    {
      title: "AI for Data-Driven experience marketing",
      track: "Marketing & Experience",
      subtitle: "Turn customer journey data into practical improvements.",
      durationLabel: "3 hours · Beginner–Intermediate",
    },
    {
      title: "AI in motion",
      track: "Marketing & Experience",
      subtitle: "Live AI demos across real workflows and templates.",
      durationLabel: "3 hours · Beginner–Intermediate",
    },
    {
      title: "AI for Digital Content Creators",
      track: "Marketing & Experience",
      subtitle: "Hands-on AI skills for content and campaign workflows.",
      durationLabel: "3 hours · Beginner–Intermediate",
    },
  ];

  // ✅ Images: map only the 6 titles
  const workshopImages = {
    
    "Lean-to Digital Transformation": {
      src: "/images/workshops/lean-digital-transformation.png",
      alt: "Lean-to digital transformation workshop",
    },
    "AI workflow for Business Process Optimization": {
      src: "/images/workshops/workflow-optimization.jpg",
      alt: "AI workflow for business process optimization workshop",
    },
    "AI for Software Specification": {
      src: "/images/workshops/software-specification.png",
      alt: "AI for software specification workshop",
    },
    "AI for Digital Content Creators": {
      src: "/images/workshops/digital-content.png",
      alt: "AI for digital content creators workshop",
    },
    "AI for Data-Driven experience marketing": {
      src: "/images/workshops/data-driven-marketing.png",
      alt: "AI for data-driven experience marketing workshop",
    },
    "AI in motion": {
      src: "/images/workshops/ai-in-motion.png",
      alt: "AI in motion workshop",
    },
    default: {
      src: "/images/workshops/default.jpg",
      alt: "Workshop image",
    },
  };

  const filters = ["All workshops", "Marketing & Experience", "Process & Workflow"];

  const [activeFilter, setActiveFilter] = useState("All workshops");
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  // ✅ NEW: controls the 3h/6h toggle inside the popup
  const [selectedDuration, setSelectedDuration] = useState("6");

  const visibleWorkshops =
    activeFilter === "All workshops"
      ? workshops
      : workshops.filter((w) => w.track === activeFilter);

  const handleCardClick = (workshop) => {
    setSelectedWorkshop(workshop);
    setSelectedDuration(workshop.durationLabel.startsWith("3") ? "3" : "6");
  };

  const handleClose = () => setSelectedWorkshop(null);

  return (
    <section id="workshop-categories" className="relative py-19 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* LEFT COLUMN */}
          <aside className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-3xl font-bold tracking-tight text-[#0B1C33]">
                Our Workshops
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Hands-on AI training for teams who want real results.
              </p>
            </div>

            {/* Filters */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-slate-900 mb-3">
                Tracks
              </p>
              <ul className="space-y-1 text-xs sm:text-sm">
                {filters.map((label) => {
                  const isActive = activeFilter === label;
                  return (
                    <li key={label}>
                      <button
                        type="button"
                        onClick={() => setActiveFilter(label)}
                        className={
                          "w-full text-left px-3 py-1.5 rounded-full border transition-colors " +
                          (isActive
                            ? "border-[#0B1C33] bg-[#0B1C33] text-white font-semibold shadow-sm"
                            : "border-transparent text-slate-700 hover:border-slate-300 hover:bg-slate-100")
                        }
                      >
                        {label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {visibleWorkshops.map((workshop) => {
                const img = workshopImages[workshop.title] || workshopImages.default;

                return (
                  <article
                    key={workshop.title}
                    onClick={() => handleCardClick(workshop)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_14px_35px_rgba(15,23,42,0.10)] hover:shadow-[0_20px_55px_rgba(15,23,42,0.20)] hover:-translate-y-0.5 transition-all"
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(min-width: 1280px) 18rem, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                    </div>

                    <div className="p-4 sm:p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700">
                        {workshop.track}
                      </p>
                      <h3 className="mt-1 text-sm sm:text-base font-semibold text-slate-900">
                        {workshop.title}
                      </h3>
                      <p className="mt-2 text-[12px] text-slate-600">
                        {workshop.subtitle}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedWorkshop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
          <button
            type="button"
            aria-label="Close workshop details"
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          <div className="relative z-10 w-full max-w-3xl rounded-3xl bg-white shadow-2xl overflow-hidden">
            <div className="relative h-48 w-full">
              {(() => {
                const img = workshopImages[selectedWorkshop.title] || workshopImages.default;
                return (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="768px"
                    className="object-cover"
                  />
                );
              })()}

              <button
                type="button"
                onClick={handleClose}
                className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-white text-sm hover:bg-slate-900"
              >
                ✕
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                {selectedWorkshop.track}
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2">
                {selectedWorkshop.title}
              </h3>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed max-w-2xl">
                {selectedWorkshop.subtitle}
              </p>

              {/* ✅ NEW: 3h / 6h Toggle (replaces the old duration chip) */}
              <div className="flex items-center gap-2 mb-8">
                {["3", "6"].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelectedDuration(d)}
                    className={
                      "px-4 py-1.5 rounded-full text-xs font-semibold border transition " +
                      (selectedDuration === d
                        ? "bg-[#0B1C33] text-white border-[#0B1C33]"
                        : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100")
                    }
                  >
                    {d} hours
                  </button>
                ))}

              </div>

              {(() => {
                const base = workshopDetails[selectedWorkshop.title];
                const detail = base?.durations?.[selectedDuration];
                if (!base || !detail) return null;

                return (
                  <div className="space-y-6 max-w-2xl">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900 mb-1">
                        Overview
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {detail.overview}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900 mb-1">
                        Who it&apos;s for
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {base.who}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900 mb-1">
                        Format
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {detail.format}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-900 mb-1">
                        You&apos;ll learn to
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-700 leading-relaxed list-disc pl-5">
                        {detail.outcomes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
