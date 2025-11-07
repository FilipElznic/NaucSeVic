import React, { useEffect, useRef } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import FloatingOrbs from "./FloatingOrbs";

const PricingSection = () => {
  const cardRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
      );
    }

    featuresRef.current.forEach((feature, index) => {
      if (!feature) return;
      gsap.fromTo(
        feature,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: 0.5 + index * 0.1,
          ease: "power2.out",
        }
      );
    });
  }, []);

  const features = [
    "Neomezený přístup ke všem kurzům",
    "Personalizované učení s AI",
    "Certifikáty po dokončení",
    "Komunitní podpora 24/7",
    "Mobilní i webová aplikace",
    "Offline režim pro učení kdekoli",
    "Pokročilé sledování pokroku",
    "Interaktivní cvičení a kvízy",
  ];

  return (
    <section className="py-32 bg-white dark:bg-black relative overflow-hidden">
      <FloatingOrbs count={3} colors={["purple", "pink", "indigo"]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">100% Zdarma</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Vše zdarma, navždy
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Kvalitní vzdělání dostupné všem
          </p>
        </div>

        {/* Free Platform Card */}
        <div className="max-w-3xl mx-auto">
          <div
            ref={cardRef}
            className="relative border border-gray-200 dark:border-gray-800 p-12 group hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500"
          >
            {/* Gradient corners */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-transparent" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/20 to-transparent" />

            {/* Header */}
            <div className="text-center mb-12 relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-8 w-8 text-white" />
              </div>

              <div className="text-6xl md:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-4 tracking-tight">
                0 Kč
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Navždy a pro všechny
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => (featuresRef.current[index] = el)}
                  className="flex items-start group/item"
                >
                  <div className="flex items-center justify-center w-5 h-5 rounded bg-gradient-to-br from-indigo-500 to-purple-500 mt-0.5 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-800">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Začít učit zdarma
                <ArrowRight className="ml-3 h-5 w-5" />
              </button>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
                Registrace trvá méně než minutu
              </p>
            </div>
          </div>
        </div>

        {/* Why Free Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Proč je naše platforma zdarma?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Vzdělání pro všechny",
                desc: "Kvalitní vzdělání by nemělo být omezeno finančními možnostmi",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                title: "Globální mise",
                desc: "Demokratizace přístupu ke vzdělání po celém světě",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Komunita první",
                desc: "Růst komunity bez finančních bariér",
                gradient: "from-pink-500 to-indigo-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-800 p-6 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-1 bg-gradient-to-r ${item.gradient} mb-4 group-hover:w-16 transition-all duration-300`}
                />
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
