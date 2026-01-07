"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { AboutLead } from "@/components/home/AboutLead";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { CaseStudyList } from "@/components/home/CaseStudyList";
import { IntroOverlay } from "@/components/home/IntroOverlay";

export default function Home() {
  const [complete, setComplete] = useState(true); // Default to true to avoid flash

  useEffect(() => {
    // Check if intro has already been completed in this session
    const introCompleted = sessionStorage.getItem('introCompleted');
    if (!introCompleted) {
      setComplete(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setComplete(true);
    sessionStorage.setItem('introCompleted', 'true');
  };

  return (
    <main className="bg-background min-h-screen">
      {!complete && <IntroOverlay onComplete={handleIntroComplete} />}

      <div className={complete ? "animate-in fade-in duration-1000" : "opacity-0 h-0 overflow-hidden"}>
        <Navbar />
        <Hero />
        <CaseStudyList />
        <ExperienceTimeline />
        <AboutLead />
        <Footer />
      </div>
    </main>
  );
}
