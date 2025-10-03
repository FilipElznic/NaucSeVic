import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Zásady ochrany soukromí
          </h1>
          <p className="text-lg text-gray-600 dark:text-zinc-400">
            Platné od: 2. října 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-700 p-8">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Úvod</h2>
            <p>
              NaucSeVic ("my", "nás", "naše") se zavazuje chránit vaše soukromí.
              Tyto zásady popisují, jak shromažďujeme, používáme a chráníme vaše
              osobní údaje.
            </p>

            <h2>2. Jaké údaje sbíráme</h2>
            <p>
              Při používání naší platformy můžeme shromažďovat následující
              údaje:
            </p>
            <ul>
              <li>
                <strong>Účet:</strong> Jméno, emailová adresa, heslo
                (zašifrované)
              </li>
              <li>
                <strong>Profil:</strong> Vzdělávací preferenční, pokrok v
                kurzech
              </li>
              <li>
                <strong>Technické:</strong> IP adresa, typ prohlížeče, čas
                návštěvy
              </li>
              <li>
                <strong>Cookies:</strong> Pro zlepšení uživatelské zkušenosti
              </li>
            </ul>

            <h2>3. Jak používáme vaše údaje</h2>
            <p>Vaše údaje používáme pro:</p>
            <ul>
              <li>Poskytování vzdělávacích služeb</li>
              <li>Personalizaci obsahu a doporučení</li>
              <li>Sledování pokroku v kurzech</li>
              <li>Komunikaci o aktualizacích platformy</li>
              <li>Zlepšování našich služeb</li>
            </ul>

            <h2>4. Sdílení údajů</h2>
            <p>Vaše osobní údaje nesdílíme s třetími stranami, kromě:</p>
            <ul>
              <li>Technických poskytovatelů (hosting, analytics)</li>
              <li>Zákonných požadavků</li>
              <li>Ochrany našich práv a bezpečnosti</li>
            </ul>

            <h2>5. Zabezpečení údajů</h2>
            <p>Implementujeme příslušná technická a organizační opatření:</p>
            <ul>
              <li>Šifrování citlivých údajů</li>
              <li>Pravidelné bezpečnostní audity</li>
              <li>Omezený přístup k osobním údajům</li>
              <li>Secure HTTPS připojení</li>
            </ul>

            <h2>6. Vaše práva</h2>
            <p>Podle GDPR máte právo:</p>
            <ul>
              <li>
                <strong>Přístup:</strong> Vyžádat kopii vašich údajů
              </li>
              <li>
                <strong>Oprava:</strong> Opravit nesprávné údaje
              </li>
              <li>
                <strong>Vymazání:</strong> Požádat o smazání účtu
              </li>
              <li>
                <strong>Přenositelnost:</strong> Exportovat vaše data
              </li>
              <li>
                <strong>Námitka:</strong> Vznést námitku proti zpracování
              </li>
            </ul>

            <h2>7. Cookies a sledování</h2>
            <p>Používáme cookies pro:</p>
            <ul>
              <li>Udržení přihlášení</li>
              <li>Uložení preferencí</li>
              <li>Analýzu použití (anonymně)</li>
              <li>Zlepšení výkonu platformy</li>
            </ul>
            <p>Cookies můžete spravovat v nastavení prohlížeče.</p>

            <h2>8. Uchovávání údajů</h2>
            <p>Vaše údaje uchováváme:</p>
            <ul>
              <li>Po dobu existence účtu</li>
              <li>3 roky po smazání účtu (pro zákonné účely)</li>
              <li>Anonymní analytická data: 2 roky</li>
            </ul>

            <h2>9. Změny zásad</h2>
            <p>O změnách těchto zásad vás budeme informovat:</p>
            <ul>
              <li>Emailem na registrovanou adresu</li>
              <li>Oznámením na platformě</li>
              <li>Aktualizací této stránky</li>
            </ul>

            <h2>10. Kontakt</h2>
            <p>
              Pro dotazy k ochraně soukromí nás kontaktujte:
              <br />
              Email: privacy@naucse.cz
              <br />
              Telefon: +420 123 456 789
              <br />
              Pošta: NaucSeVic s.r.o., Wenceslas Square 1, 110 00 Praha 1
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            to="/registrace"
            className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zpět na registraci
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
