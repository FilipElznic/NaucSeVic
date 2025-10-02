import React from "react";
import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Anna Novotná",
      role: "Studentka VŠE",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format",
      content:
        "Díky této platformě jsem zvládla složité předměty mnohem lépe. Personalizované učení je skutečně revoluční!",
      rating: 5,
    },
    {
      name: "Tomáš Svoboda",
      role: "IT Specialista",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
      content:
        "Flexibilita a kvalita obsahu jsou neuvěřitelné. Mohu se učit ve svém tempu a všechno si hned prakticky vyzkoušet.",
      rating: 5,
    },
    {
      name: "Marie Krásná",
      role: "Učitelka",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
      content:
        "Používám tuto platformu i pro své studenty. Interaktivní prvky a jasné vysvětlení jsou fantastické.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Co říkají naši studenti
          </h2>
          <p className="text-lg text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Přečtěte si zkušenosti těch, kteří již objevili sílu našeho přístupu
            k učení.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-zinc-700"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="h-8 w-8 text-indigo-600 dark:text-indigo-400 opacity-60" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-zinc-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-zinc-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-zinc-400 mb-6">
            Připojte se k tisícům spokojených studentů
          </p>
          <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Začít zdarma
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
