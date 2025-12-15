"use client";

import { useState } from "react";
import Image from "next/image";

// Detailed copy for each workshop (used in the popup)
const workshopDetails = {
  "AI for Digital Content Creators": {
    overview:
      "Give marketing and brand teams a practical playbook for using AI tools to ideate, draft, and repurpose digital content across channels.",
    who: "Marketing, brand, and CX teams who produce campaigns, social posts, and always-on content.",
    format:
      "3-hour live session using real examples from blogs, social media, and campaign assets.",
    outcomes: [
      "Map your current content workflow and identify AI quick wins.",
      "Use prompt patterns to draft, refine, and repurpose content faster.",
      "Set guardrails for tone, messaging, and approvals when using AI.",
    ],
  },
  "AI for Campaign Performance Analysis": {
    overview:
      "Use AI to turn campaign data into clear stories and recommendations that stakeholders can act on.",
    who: "Performance marketers, growth teams, and analysts who report on campaign results.",
    format:
      "3-hour live session using sample dashboards, spreadsheets, and campaign data.",
    outcomes: [
      "Summarize campaign performance with AI-generated narratives.",
      "Spot key drivers and anomalies using prompt recipes.",
      "Produce stakeholder-ready summaries in minutes, not days.",
    ],
  },
  "AI for Data-Driven Experience Marketing": {
    overview:
      "Connect journey data, experiments, and customer feedback to design better end-to-end experiences.",
    who: "CX, CRM, and lifecycle marketing teams responsible for customer journeys.",
    format:
      "3-hour live session combining journey maps, experiments, and AI-assisted analysis.",
    outcomes: [
      "Translate customer data into clear journey insights.",
      "Prioritize improvements using AI-based scenario exploration.",
      "Create experience briefs that connect data to action.",
    ],
  },
  "Generative AI for Brand Storytelling": {
    overview:
      "Explore how generative AI can support brand-safe storytelling without diluting your core narrative.",
    who: "Brand, creative, and content leaders responsible for narrative and campaigns.",
    format:
      "3-hour live session with story frameworks, prompt examples, and creative exercises.",
    outcomes: [
      "Design AI prompt frameworks that respect brand voice.",
      "Generate concept directions for campaigns and narratives.",
      "Build a simple review flow to keep AI outputs on-brand.",
    ],
  },
  "AI for Social Listening & Trend Discovery": {
    overview:
      "Use AI to synthesize social data, reviews, and conversation snippets into clear trend signals.",
    who: "Marketing, CX, insights, and social media teams monitoring brand and category conversations.",
    format:
      "3-hour live session using anonymized social data and listening outputs.",
    outcomes: [
      "Cluster social conversations into themes with AI.",
      "Surface emerging topics and risks from noisy data.",
      "Turn findings into actionable briefs for marketing and CX.",
    ],
  },
  "Personalization at Scale with AI": {
    overview:
      "Learn how AI can support segment-level and one-to-few personalization without over-engineering.",
    who: "Growth, CRM, and product marketing teams driving targeted campaigns and journeys.",
    format:
      "3-hour live session using scenarios across email, in-app, and paid media.",
    outcomes: [
      "Define practical personalization tiers for your context.",
      "Use AI to draft and test tailored messages by segment.",
      "Create a roadmap for scaling personalization safely.",
    ],
  },
  "AI for Software Specification": {
    overview:
      "Use AI to support clearer requirements, user stories, and acceptance criteria for product and engineering teams.",
    who: "Product managers, BAs, and engineering leads working on digital products.",
    format:
      "6-hour live session split into two parts with hands-on specification labs.",
    outcomes: [
      "Turn business goals into AI-assisted user stories and specs.",
      "Use AI as a sounding board for edge cases and scenarios.",
      "Improve clarity of requirements while keeping ownership with humans.",
    ],
  },
  "AI Workflow for Business Process Optimization": {
    overview:
      "Map current processes, identify bottlenecks, and design AI-assisted workflows that actually fit how teams work.",
    who: "Operations, PMO, transformation, and process owners.",
    format:
      "6-hour live session using swimlanes, RACI views, and example automations.",
    outcomes: [
      "Document a target-state workflow with AI assist.",
      "Identify high-impact automation opportunities.",
      "Define roles, controls, and hand-offs in AI-enabled processes.",
    ],
  },
  "Intelligent Document Processing with AI": {
    overview:
      "Explore how AI can classify, extract, and route information from documents, forms, and unstructured content.",
    who: "Operations, shared services, compliance, and back-office teams.",
    format:
      "6-hour live session with document samples and pipeline design exercises.",
    outcomes: [
      "Identify document types suitable for AI-powered processing.",
      "Design a basic intake and review flow for critical documents.",
      "Define quality checks and exception handling for AI outputs.",
    ],
  },
  "AI for Operations & Capacity Planning": {
    overview:
      "Use AI to stress-test assumptions, scenario-plan, and communicate operational trade-offs.",
    who: "Operations leaders, planners, and team managers.",
    format:
      "6-hour live session built around capacity models and real-world scenarios.",
    outcomes: [
      "Create prompt templates for scenario exploration.",
      "Translate operational data into clear narratives for leaders.",
      "Highlight risks and options in a way stakeholders can act on.",
    ],
  },
  "Lean-to-Digital Transformation": {
    overview:
      "Connect lean principles with digital tools and AI to design practical transformation roadmaps.",
    who: "Transformation leaders, operations managers, and digital leads.",
    format:
      "6-hour live workshop combining lean canvases, journey maps, and digital use cases.",
    outcomes: [
      "Link lean pain points to digital and AI opportunities.",
      "Prioritize initiatives based on impact and readiness.",
      "Create a simple transformation storyline for stakeholders.",
    ],
  },
};

export default function WorkshopCategories() {
  const groups = [
    {
      title: "Marketing & Experience",
      subtitle: "Hands-on AI skills for marketing, brand, and CX teams.",
      workshops: [
        "AI for Digital Content Creators",
        "AI for Campaign Performance Analysis",
        "AI for Data-Driven Experience Marketing",
        "Generative AI for Brand Storytelling",
        "AI for Social Listening & Trend Discovery",
        "Personalization at Scale with AI",
      ],
    },
    {
      title: "Process & Workflow",
      subtitle: "Applied AI for product, operations, and IT workflow automation.",
      workshops: [
        "AI for Software Specification",
        "AI Workflow for Business Process Optimization",
        "Intelligent Document Processing with AI",
        "AI for Operations & Capacity Planning",
        "Lean-to-Digital Transformation",
      ],
    },
  ];

  // Shared duration labels per track
  const durationByTrack = {
    "Marketing & Experience": "3 hours · Beginner–Intermediate",
    "Process & Workflow": "6 hours · Intermediate",
  };

  // title -> image mapping
  const workshopImages = {
    // Marketing & Experience
    "AI for Digital Content Creators": {
      src: "/images/workshops/digital-content.png",
      alt: "AI tools supporting digital content creation",
    },
    "AI for Campaign Performance Analysis": {
      src: "/images/workshops/campaign-performance.png",
      alt: "Charts showing AI-driven campaign performance analysis",
    },
    "AI for Data-Driven Experience Marketing": {
      src: "/images/workshops/data-driven-marketing.png",
      alt: "Dashboards and graphs for experience marketing analytics",
    },
    "Generative AI for Brand Storytelling": {
      src: "/images/workshops/brand-storytelling.png",
      alt: "Creative visuals representing generative AI brand storytelling",
    },
    "AI for Social Listening & Trend Discovery": {
      src: "/images/workshops/social-listening.png",
      alt: "Social media feeds and trend graphs powered by AI",
    },
    "Personalization at Scale with AI": {
      src: "/images/workshops/personalization-at-scale.png",
      alt: "Customer journeys visualizing AI-powered personalization",
    },

    // Process & Workflow
    "AI for Software Specification": {
      src: "/images/workshops/software-specification.png",
      alt: "Product and engineering teams collaborating on software specs",
    },
    "AI Workflow for Business Process Optimization": {
      src: "/images/workshops/workflow-optimization.jpg",
      alt: "Workflow diagram optimized with AI recommendations",
    },
    "Intelligent Document Processing with AI": {
      src: "/images/workshops/intelligent-doc-processing.png",
      alt: "Documents being processed and classified by AI",
    },
    "AI for Operations & Capacity Planning": {
      src: "/images/workshops/operations-capacity.png",
      alt: "Operations dashboards and capacity planning charts",
    },
    "Lean-to-Digital Transformation": {
      src: "/images/workshops/lean-digital-transformation.png",
      alt: "Team planning a lean digital transformation roadmap",
    },

    // Fallback
    default: {
      src: "/images/workshops/default.jpg",
      alt: "Abstract AI and data visualization",
    },
  };

  // Flatten list for grid
  const allWorkshops = groups.flatMap((group) =>
    group.workshops.map((title) => ({
      title,
      track: group.title,
      subtitle: group.subtitle,
      durationLabel: durationByTrack[group.title],
    }))
  );

  const [activeFilter, setActiveFilter] = useState("All workshops");
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const filters = ["All workshops", ...groups.map((g) => g.title)];

  const visibleWorkshops =
    activeFilter === "All workshops"
      ? allWorkshops
      : allWorkshops.filter((w) => w.track === activeFilter);

  const handleCardClick = (workshop) => {
    setSelectedWorkshop(workshop);
  };

  const handleClose = () => {
    setSelectedWorkshop(null);
  };

  return (
    <section
      id="workshop-categories"
      className="relative py-19 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 2-column layout: sidebar + grid */}
        <div className="grid gap-12 lg:grid-cols-4">
          {/* LEFT COLUMN – title, description, filters */}
          <aside className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-3xl font-bold tracking-tight text-[#0B1C33]">
                Our Workshops
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Hands-on AI training for teams who want real results.
              </p>
            </div>

            {/* Filters list */}
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

          {/* RIGHT COLUMN – grid of cards */}
          <div className="lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {visibleWorkshops.map((workshop) => {
                const img =
                  workshopImages[workshop.title] || workshopImages.default;

                return (
                  <article
                    key={workshop.title}
                    onClick={() => handleCardClick(workshop)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_14px_35px_rgba(15,23,42,0.10)] hover:shadow-[0_20px_55px_rgba(15,23,42,0.20)] hover:-translate-y-0.5 transition-all"
                  >
                    {/* Image */}
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

                    {/* Text content */}
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

                      <div className="mt-3 flex flex-wrap items-center gap-2 text-[10px] text-slate-700">
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-700 border border-slate-200">
                          {workshop.durationLabel}
                        </span>
                      
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* POPUP MODAL */}
      {selectedWorkshop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
          {/* backdrop */}
          <button
            type="button"
            aria-label="Close workshop details"
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* dialog */}
          <div className="relative z-10 w-full max-w-3xl rounded-3xl bg-white shadow-2xl overflow-hidden">
            {/* image header */}
            <div className="relative h-48 w-full">
              {(() => {
                const img =
                  workshopImages[selectedWorkshop.title] ||
                  workshopImages.default;
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

            {/* content */}
            <div className="p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                {selectedWorkshop.track}
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2">
                {selectedWorkshop.title}
              </h3>

              <p className="text-sm text-slate-600 mb-3 leading-relaxed max-w-2xl">
                {selectedWorkshop.subtitle}
              </p>

              {/* meta chips (no facilitator-led wording) */}
              <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs mb-9">
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-800 border border-slate-200">
                  {selectedWorkshop.durationLabel}
                </span>
                <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 font-medium text-sky-800 border border-sky-100">
                  Live session
                </span>
              </div>

              {(() => {
                const detail = workshopDetails[selectedWorkshop.title];
                if (!detail) return null;

                return (
                  <div className="space-y-6 max-w-2xl">
                    {/* OVERVIEW */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900 mb-1">
                        Overview
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {detail.overview}
                      </p>
                    </div>

                    {/* WHO IT'S FOR */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900 mb-1">
                        Who it&apos;s for
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {detail.who}
                      </p>
                    </div>

                    {/* FORMAT */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900 mb-1">
                        Format
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {detail.format}
                      </p>
                    </div>

                    {/* YOU'LL LEARN TO */}
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
