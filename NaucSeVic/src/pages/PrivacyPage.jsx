import React from "react";
import { Shield } from "lucide-react";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-purple-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-lg shadow-purple-500/20">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Zásady ochrany soukromí
          </h1>
          <p className="text-lg text-purple-600 dark:text-purple-400">
            Platné od: 2. října 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white text-black dark:bg-zinc-900 dark:text-white rounded-2xl shadow-xl shadow-purple-900/10 border border-purple-100 dark:border-purple-900/30 p-8">
          <div className="prose prose-purple dark:prose-invert max-w-none">
            <p>
              Vaše soukromí je pro nás důležité. Tento dokument vysvětluje, jaké
              osobní údaje v rámci aplikace NaucSeVic shromažďujeme, jak s nimi
              nakládáme a jaká jsou vaše práva.
            </p>

            <h2>1. Kdo zpracovává vaše údaje?</h2>
            <p>
              Správcem vašich osobních údajů je provozovatel webu NaucSeVic:
            </p>
            <ul>
              <li>
                <strong>Jméno / Název společnosti:</strong> Filip Elznic
              </li>
              <li>
                <strong>Kontaktní e-mail:</strong> elznicfilip@gmail.com
              </li>
            </ul>

            <h2>2. Jaké údaje shromažďujeme?</h2>
            <p>
              Při používání aplikace NaucSeVic shromažďujeme následující údaje:
            </p>
            <ul>
              <li>
                <strong>Registrační údaje:</strong> E-mailová adresa,
                uživatelské jméno a zašifrované heslo.
              </li>
              <li>
                <strong>Údaje o vašem postupu:</strong> Záznamy o vašem
                vzdělávání, splněné testy, získané body a celkový postup v
                aplikaci, abyste mohli navázat tam, kde jste skončili.
              </li>
              <li>
                <strong>Technické a bezpečnostní údaje:</strong> IP adresa, typ
                prohlížeče, operační systém a časy přístupu. Tyto údaje jsou
                nezbytné pro zajištění bezpečnosti webu.
              </li>
            </ul>

            <h2>3. Proč údaje sbíráme (Účel zpracování)?</h2>
            <p>Vaše data zpracováváme výhradně k těmto účelům:</p>
            <ul>
              <li>
                <strong>Poskytování služby:</strong> Pro vytvoření účtu,
                přihlášení a ukládání vašeho studijního postupu.
              </li>
              <li>
                <strong>Bezpečnost aplikaci:</strong> Pro ochranu před podvody,
                neoprávněným přístupem a kybernetickými útoky (např. DDoS).
              </li>
              <li>
                <strong>Komunikace:</strong> Pro zasílání nezbytných systémových
                zpráv (např. obnova hesla).
              </li>
            </ul>

            <h2>4. Kdo má k údajům přístup (Zpracovatelé)?</h2>
            <p>
              Vaše osobní údaje neprodáváme žádným třetím stranám. Pro technický
              chod aplikace a bezpečné uložení dat však využíváme spolehlivé
              partnery, kteří vystupují v roli zpracovatelů:
            </p>
            <ul>
              <li>
                <strong>Google LLC (služba Firebase):</strong> Využíváme
                Firebase Authentication pro bezpečné přihlašování a Firebase
                Database pro ukládání dat aplikace. Společnost Google zpracovává
                data v souladu se svými přísnými bezpečnostními a privacy
                standardy a platnou legislativou.
              </li>
            </ul>

            <h2>5. Jak dlouho údaje uchováváme?</h2>
            <p>
              Vaše údaje uchováváme po dobu existence vašeho uživatelského účtu
              v aplikaci NaucSeVic. Pokud svůj účet zrušíte nebo požádáte o jeho
              smazání, vaše osobní údaje a postup v aplikaci vymažeme ze všech
              našich databází nejpozději do 30 dnů, s výjimkou dat nezbytných
              pro splnění našich zákonných povinností.
            </p>

            <h2>6. Cookies a technologie ukládání dat</h2>
            <p>
              Aplikace NaucSeVic využívá nezbytné technické soubory cookies
              (případně Local Storage vašeho prohlížeče), které jsou naprosto
              nutné pro fungování služby – konkrétně pro udržení vašeho
              přihlášení a bezpečné fungování služby Firebase. Bez těchto
              technologií by nebylo možné aplikaci používat.
            </p>

            <h2>7. Jaká jsou vaše práva?</h2>
            <p>
              V souladu s nařízením GDPR máte ohledně svých údajů následující
              práva:
            </p>
            <ul>
              <li>
                <strong>Právo na přístup:</strong> Můžete si vyžádat informace o
                tom, jaká data o vás uchováváme.
              </li>
              <li>
                <strong>Právo na opravu:</strong> Můžete požádat o opravu
                nepřesných údajů.
              </li>
              <li>
                <strong>Právo na výmaz ("právo být zapomenut"):</strong> Můžete
                nás kdykoliv požádat o trvalé smazání vašeho účtu a všech s ním
                spojených dat.
              </li>
              <li>
                <strong>Právo vznést námitku:</strong> Proti zpracování vašich
                údajů.
              </li>
            </ul>

            <p>
              Pokud chcete některé ze svých práv uplatnit, kontaktujte nás
              prosím na e-mailu: elznicfilip@gmail.com.
            </p>
          </div>
        </div>

        {/* Back Button */}
      </div>
    </div>
  );
};

export default PrivacyPage;
