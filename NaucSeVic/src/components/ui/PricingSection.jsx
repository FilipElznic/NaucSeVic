import React from "react";
import { Check, ArrowRight, Heart, Star } from "lucide-react";

const PricingSection = () => {
  const features = [
    "Neomezený přístup ke všem kurzům",
    "Personalizované učení s AI",
    "Certifikáty po dokončení",
    "Komunitní podpora 24/7",
    "Mobilní i webová aplikace",
    "Offline režim pro učení kdekoli",
    "Pokročilé sledování pokroku",
    "Interaktivní cvičení a kvízy",
    "Přístup k expertním lektorům",
    "Pokročilé analytics a reporty",
    "Vlastní studijní plány",
    "Bez skrytých poplatků",
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 rounded-full px-4 py-2">
              <Heart className="h-5 w-5 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">
                100% Zdarma
              </span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Vše zdarma, navždy
          </h2>
          <p className="text-lg text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Věříme, že kvalitní vzdělání by mělo být dostupné všem. Proto je
            naše platforma zcela zdarma, bez omezení a bez skrytých poplatků.
          </p>
        </div>

        {/* Free Platform Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-zinc-800 dark:to-zinc-900 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-zinc-700/50 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full translate-y-12 -translate-x-12" />

            <div className="relative p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl">
                    <Star className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Kompletní přístup zdarma
                </h3>
                <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 mb-4">
                  0 Kč
                </div>
                <p className="text-xl text-gray-600 dark:text-zinc-400">
                  Navždy a pro všechny
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-zinc-300 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xl font-semibold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105">
                  Začít učit zdarma
                  <ArrowRight className="ml-3 h-6 w-6" />
                </button>
                <p className="mt-4 text-sm text-gray-500 dark:text-zinc-500">
                  Registrace trvá méně než minutu
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Free Section */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Proč je naše platforma zdarma?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-zinc-700">
              <div className="text-2xl mb-3">🎓</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Vzdělání pro všechny
              </h4>
              <p className="text-gray-600 dark:text-zinc-400 text-sm">
                Věříme, že kvalitní vzdělání by nemělo být omezeno finančními
                možnostmi.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-zinc-700">
              <div className="text-2xl mb-3">🌍</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Globální mise
              </h4>
              <p className="text-gray-600 dark:text-zinc-400 text-sm">
                Naším cílem je demokratizovat přístup ke vzdělání po celém
                světě.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-zinc-700">
              <div className="text-2xl mb-3">💝</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Komunita první
              </h4>
              <p className="text-gray-600 dark:text-zinc-400 text-sm">
                Podporujeme růst komunity učících se lidí bez finančních bariér.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-zinc-400 mb-4">
            Stále máte otázky? Jsme tu pro vás!
          </p>
          <a
            href="#contact"
            className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
          >
            Kontaktujte nás
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
