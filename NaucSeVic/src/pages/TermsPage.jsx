import React from "react";
import { FileText } from "lucide-react";
import SEO from "../components/SEO";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-purple-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Podmínky Použití | NaucSeVic"
        description="Přečtěte si podmínky použití pro vzdělávací platformu NaucSeVic."
      />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl shadow-lg shadow-purple-500/20">
              <FileText className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Podmínky použití
          </h1>
          <p className="text-lg text-purple-600 dark:text-purple-400">
            Platné od: 2. října 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white text-black dark:bg-zinc-900 dark:text-white rounded-2xl shadow-xl shadow-purple-900/10 border border-purple-100 dark:border-purple-900/30 p-8">
          <div className="prose prose-purple dark:prose-invert max-w-none">
            <h2>1. Úvodní ustanovení</h2>
            <p>
              1.1. Tyto Podmínky použití upravují vztah mezi provozovatelem
              webové aplikace NaucSeVic (dále jen „Provozovatel“) a jejími
              uživateli (dále jen „Uživatel“).
            </p>
            <p>
              1.2. Vytvořením uživatelského účtu a používáním aplikace NaucSeVic
              Uživatel vyjadřuje plný souhlas s těmito podmínkami. Pokud s
              podmínkami Uživatel nesouhlasí, není oprávněn aplikaci používat.
            </p>

            <h2>2. Uživatelský účet a registrace</h2>
            <p>
              2.1. Pro plné využití funkcí aplikace NaucSeVic je nutná
              registrace. Uživatel se zavazuje při registraci uvádět pouze
              pravdivé a aktuální informace.
            </p>
            <p>
              2.2. Autentizace a správa uživatelských účtů je zajišťována pomocí
              zabezpečené služby třetí strany (Firebase).
            </p>
            <p>
              2.3. Uživatel je plně zodpovědný za udržení svého hesla a
              přístupových údajů v tajnosti. Provozovatel nenese odpovědnost za
              zneužití účtu v důsledku nedbalosti Uživatele.
            </p>
            <p>
              2.4. Každý Uživatel smí mít vytvořený pouze jeden osobní účet.
            </p>

            <h2>3. Pravidla chování a ochrana aplikace (Zakázané činnosti)</h2>
            <p>
              3.1. Uživatel se zavazuje používat aplikaci NaucSeVic výhradně k
              osobním vzdělávacím účelům a v souladu s platnými právními
              předpisy.
            </p>
            <p>
              3.2. Je přísně zakázáno jakkoliv narušovat chod, bezpečnost a
              stabilitu aplikace. Zákaz se vztahuje zejména, nikoliv však
              výlučně, na:
            </p>
            <ul>
              <li>
                Pokusy o neoprávněný přístup do databáze nebo k účtům jiných
                uživatelů (hacking, SQL injection).
              </li>
              <li>
                Úmyslné přetěžování infrastruktury a serverů (DDoS útoky,
                spamování požadavků).
              </li>
              <li>
                Používání automatizovaných skriptů, botů nebo crawlerů k
                hromadnému stahování (scrapování) edukačního obsahu nebo dat z
                webu.
              </li>
              <li>Nahrávání nebo šíření škodlivého kódu (viry, malware).</li>
            </ul>
            <p>
              3.3. V případě detekce jakékoliv z výše uvedených aktivit má
              Provozovatel právo okamžitě a bez varování zablokovat nebo trvale
              smazat účet Uživatele a podniknout příslušné právní kroky.
            </p>

            <h2>4. Ochrana duševního vlastnictví</h2>
            <p>
              4.1. Veškerý obsah na webu NaucSeVic (včetně textů, cvičení,
              grafiky, kódu a designu) je duševním vlastnictvím Provozovatele a
              je chráněn autorským zákonem.
            </p>
            <p>
              4.2. Uživatel nesmí obsah aplikace NaucSeVic kopírovat, dále
              distribuovat, prodávat ani jinak komerčně využívat bez předchozího
              písemného souhlasu Provozovatele.
            </p>

            <h2>5. Omezení odpovědnosti</h2>
            <p>
              5.1. Aplikace NaucSeVic a její vzdělávací obsah jsou poskytovány
              „tak, jak jsou“. Provozovatel negarantuje, že používání aplikace
              povede k úspěšnému složení zkoušek nebo k získání konkrétních
              dovedností.
            </p>
            <p>
              5.2. Provozovatel se snaží o maximální dostupnost aplikace,
              nicméně nezaručuje nepřetržitý a bezchybný provoz (např. z důvodu
              údržby, výpadků serverů nebo technických problémů třetích stran).
            </p>
            <p>
              5.3. Provozovatel nenese odpovědnost za případnou ztrátu
              uživatelských dat, ačkoliv vynakládá maximální úsilí k jejich
              ochraně.
            </p>

            <h2>6. Závěrečná ustanovení</h2>
            <p>
              6.1. Provozovatel si vyhrazuje právo tyto Podmínky použití
              kdykoliv upravit. O významných změnách budou Uživatelé informováni
              prostřednictvím webu nebo e-mailu.
            </p>
            <p>6.2. Tyto podmínky nabývají účinnosti dnem jejich zveřejnění.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
