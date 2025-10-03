import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl">
              <FileText className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Podmínky použití
          </h1>
          <p className="text-lg text-gray-600 dark:text-zinc-400">
            Platné od: 2. října 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-700 p-8">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Obecné podmínky</h2>
            <p>
              Vítejte na platformě NaucSeVic. Používáním našich služeb
              souhlasíte s těmito podmínkami použití. Naše platforma je zcela
              zdarma a přístupná všem uživatelům.
            </p>

            <h2>2. Používání služeb</h2>
            <p>
              Naše vzdělávací platforma je poskytována zdarma. Zavazujete se
              používat služby pouze pro legální vzdělávací účely. Zakazuje se:
            </p>
            <ul>
              <li>Sdílení přihlašovacích údajů s třetími stranami</li>
              <li>Pokus o narušení bezpečnosti platformy</li>
              <li>Nahrávání nevhodného nebo škodlivého obsahu</li>
              <li>Používání služeb pro komerční účely bez souhlasu</li>
            </ul>

            <h2>3. Uživatelské účty</h2>
            <p>
              Pro plný přístup k funkcím je nutná registrace. Jste odpovědni za:
            </p>
            <ul>
              <li>Poskytnutí správných a aktuálních informací</li>
              <li>Udržení bezpečnosti vašeho hesla</li>
              <li>Všechny aktivity vykonané pod vaším účtem</li>
            </ul>

            <h2>4. Obsah a vlastnictví</h2>
            <p>
              Veškerý vzdělávací obsah na platformě je poskytován zdarma pro
              vzdělávací účely. Obsah je chráněn autorskými právy a nesmí být
              redistribuován bez souhlasu.
            </p>

            <h2>5. Ochrana soukromí</h2>
            <p>
              Vaše soukromí je pro nás důležité. Podrobnosti o tom, jak
              zacházíme s vašimi daty, najdete v našich{" "}
              <Link
                to="/privacy"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                zásadách ochrany soukromí
              </Link>
              .
            </p>

            <h2>6. Omezení odpovědnosti</h2>
            <p>
              Služby jsou poskytovány "tak jak jsou". Neneseme odpovědnost za:
            </p>
            <ul>
              <li>Dočasné výpadky služeb</li>
              <li>Ztrátu dat v důsledku technických problémů</li>
              <li>Nepřímé škody vzniklé používáním platformy</li>
            </ul>

            <h2>7. Změny podmínek</h2>
            <p>
              Vyhrazujeme si právo tyto podmínky kdykoli změnit. O významných
              změnách budete informováni prostřednictvím platformy nebo emailu.
            </p>

            <h2>8. Kontakt</h2>
            <p>
              Máte-li dotazy k těmto podmínkám, kontaktujte nás na:
              <br />
              Email: info@naucse.cz
              <br />
              Telefon: +420 123 456 789
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            to="/registrace"
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zpět na registraci
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
