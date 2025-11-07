import React from "react";
import ModernHeroSection from "../components/ui/ModernHeroSection";
import FeatureSection from "../components/ui/FeatureSection";
import StatsSection from "../components/ui/StatsSection";
import TestimonialSection from "../components/ui/TestimonialSection";
import PricingSection from "../components/ui/PricingSection";

function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-black">
      <ModernHeroSection />
      <FeatureSection />
      <StatsSection />
      <TestimonialSection />
      <PricingSection />
    </div>
  );
}

export default LandingPage;
