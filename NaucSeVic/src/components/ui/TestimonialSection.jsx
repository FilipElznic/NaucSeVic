import React, { useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import { gsap } from "gsap";

const TestimonialSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      // Stagger fade-in animation on mount
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
        }
      );

      // Hover animation
      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -8,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  const testimonials = [
    {
      name: "Anna Novotná",
      role: "Studentka VŠE",
      content:
        "Díky této platformě jsem zvládla složité předměty mnohem lépe. Personalizované učení je skutečně revoluční!",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "Tomáš Svoboda",
      role: "IT Specialista",
      content:
        "Flexibilita a kvalita obsahu jsou neuvěřitelné. Mohu se učit ve svém tempu a všechno si hned prakticky vyzkoušet.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Marie Krásná",
      role: "Učitelka",
      content:
        "Používám tuto platformu i pro své studenty. Interaktivní prvky a jasné vysvětlení jsou fantastické.",
      gradient: "from-pink-500 to-indigo-500",
    },
  ];

  return (
    <section className="py-32 bg-white dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Co říkají naši studenti
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Zkušenosti našich uživatelů
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300 group"
            >
              {/* Gradient accent on top */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`}
              />

              {/* Quote Icon with gradient */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-lg mb-6 shadow-lg`}
              >
                <Quote className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
