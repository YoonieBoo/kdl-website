"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WhoWeAre from "@/components/who-we-are"
import WhatWeDo from "@/components/what-we-do"
import WorkshopCategories from "@/components/workshop-categories"
import UpcomingWorkshops from "@/components/upcoming-workshops"
import WhyWorkWithUs from "@/components/why-work-with-us"
import TrainingApproach from "@/components/training-approach"
import ProgramModels from "@/components/program-models"
import LearningPathways from "@/components/learning-pathways"
import PartnershipCTA from "@/components/partnership-cta"
import Footer from "@/components/footer"
import TestimonialsSection from "@/components/testimonials";
import ContactUs from "@/components/contact-us";



export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection /> 
      <WhatWeDo />
      <WorkshopCategories />
      <ProgramModels />
      <WhoWeAre />
      {/* ✅ New testimonials section here */}
      <TestimonialsSection />
      <ContactUs /> 
      <Footer />
    </main>
  );
}

