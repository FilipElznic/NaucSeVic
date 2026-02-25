import React, { Suspense, lazy } from "react";
import SEO from "../components/SEO";
import ModernHeroSection from "../components/ui/ModernHeroSection";
import LoadingSpinner from "../components/ui/LoadingSpinner";
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
      <Suspense
        fallback={
          <div className="py-20 flex justify-center items-center">
            <LoadingSpinner size="lg" />
          </div>
        }
      >
        <FeatureSection />
        <StatsSection />

        <TestimonialSection />
        <PricingSection />
      </Suspense>
    </div>
  );
}

export default LandingPage;
