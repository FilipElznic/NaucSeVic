import React, { Suspense, lazy } from "react";
import SEO from "../components/SEO";
import ModernHeroSection from "../components/ui/ModernHeroSection";
import FloatingOrbs from "../components/ui/FloatingOrbs";

// Lazy load sections below the fold
const FeatureSection = lazy(() => import("../components/ui/FeatureSection"));
const StatsSection = lazy(() => import("../components/ui/StatsSection"));
const TestimonialSection = lazy(
  () => import("../components/ui/TestimonialSection"),
);
const PricingSection = lazy(() => import("../components/ui/PricingSection"));

function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-black">
      <SEO
        title="NaucSeVic - Zábavná Matematika a Fyzika"
        description="Nejlepší online platforma pro výuku matematiky a fyziky. Interaktivní simulace, testy a kurzy pro studenty všech úrovní."
      />
      <ModernHeroSection />
      <Suspense fallback={null}>
        <FeatureSection />
      </Suspense>
      <Suspense fallback={null}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={null}>
        <TestimonialSection />
      </Suspense>
      <Suspense fallback={null}>
        <PricingSection />
      </Suspense>
    </div>
  );
}

export default LandingPage;
