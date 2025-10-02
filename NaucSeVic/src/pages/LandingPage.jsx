import React from "react";
import ModernHeroSection from "../components/ui/ModernHeroSection";
import FeatureSection from "../components/ui/FeatureSection";
import StatsSection from "../components/ui/StatsSection";
import TestimonialSection from "../components/ui/TestimonialSection";
import PricingSection from "../components/ui/PricingSection";
import CTASection from "../components/ui/CTASection";
import SectionSeparator from "../components/ui/SectionSeparator";

function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Modern Hero Section with Spline Animation */}
      <ModernHeroSection />

      {/* Features Section */}
      <FeatureSection />

      <SectionSeparator variant="wave" rotate={true} />

      {/* Stats Section */}
      <StatsSection />

      <SectionSeparator variant="curve" rotate={false} />

      {/* Testimonials Section */}
      <TestimonialSection />

      <SectionSeparator variant="diagonal" rotate={true} />

      {/* Pricing Section */}
      <PricingSection />

      {/* Call to Action Section */}
      <CTASection />
    </div>
  );
}

export default LandingPage;
