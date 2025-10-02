import React from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Připraveni začít vaši
            <br />
            vzdělávací cestu?
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Připojte se k tisícům studentů, kteří už objevili sílu moderního
            učení. Začněte ještě dnes – první lekce je zdarma!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-indigo-600 bg-white hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
              Začít zdarma
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-xl text-white hover:bg-white hover:text-indigo-600 transition-all duration-300">
              Prohlédnout kurzy
            </button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center md:justify-start text-white">
              <Mail className="h-6 w-6 mr-3 text-indigo-200" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-indigo-200">info@naucse.cz</div>
              </div>
            </div>

            <div className="flex items-center justify-center text-white">
              <Phone className="h-6 w-6 mr-3 text-indigo-200" />
              <div>
                <div className="font-medium">Telefon</div>
                <div className="text-indigo-200">+420 123 456 789</div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end text-white">
              <MapPin className="h-6 w-6 mr-3 text-indigo-200" />
              <div>
                <div className="font-medium">Adresa</div>
                <div className="text-indigo-200">Praha, Česká republika</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
