import React from "react";
import CharacterHelper from "../components/CharacterHelper";

function Demo() {
  return (
    <div className="min-h-screen bg-zinc-950 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-12">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ukázka CharacterHelper komponenty
          </span>
        </h1>

        {/* Základní použití */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Základní použití
          </h2>
          <CharacterHelper
            img="happy"
            text="Ahoj! Jsem tvůj pomocník při učení. Pojď se spolu učit nové věci!"
          />
        </div>

        {/* Různé pozice */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Pozice vpravo</h2>
          <CharacterHelper
            img="thinking"
            text="Víš, že můžeš změnit moji pozici? Teď jsem napravo od textu!"
            position="right"
            characterName="Učitel"
          />
        </div>

        {/* Různé velikosti */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Malá velikost</h2>
          <CharacterHelper
            img="learning"
            text="Toto je malá verze komponenty. Ideální pro krátké tipy!"
            size="small"
            characterName="Tip"
          />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Velká velikost</h2>
          <CharacterHelper
            img="excited"
            text="A toto je velká verze! Perfektní pro důležité zprávy nebo úvodní uvítání na stránce."
            size="large"
            characterName="Průvodce"
          />
        </div>

        {/* Různé varianty */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Různé styly</h2>

          <CharacterHelper
            img="celebrating"
            text="Skvělá práce! Právě jsi dokončil lekci s 100% úspěšností!"
            variant="success"
            characterName="Gratulace"
          />

          <CharacterHelper
            img="learning"
            text="Tady je zajímavá informace: Víš, že matematika je jazyk vesmíru?"
            variant="info"
            characterName="Zajímavost"
            position="right"
          />

          <CharacterHelper
            img="thinking"
            text="Pozor! Nezapomeň si uložit svůj pokrok před odchodem."
            variant="warning"
            characterName="Upozornění"
          />
        </div>

        {/* S číselnými obrázky */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            S čísly (pro vlastní obrázky)
          </h2>
          <CharacterHelper
            img="1"
            text="Můžeš použít čísla jako '1', '2', '3' a já načtu příslušný obrázek z složky!"
            characterName="Robot"
          />

          <CharacterHelper
            img="2"
            text="Každé číslo odpovídá jinému obrázku postavy. Stačí přidat obrázky do složky /public/characters/"
            characterName="Asistent"
            position="right"
          />
        </div>

        {/* Dlouhý text */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Delší konverzace
          </h2>
          <CharacterHelper
            img="learning"
            text="Když máš delší text, komponenta se automaticky přizpůsobí. Můžeš psát víc informací a bublina se roztáhne, aby vše pěkně zobrazila. To je skvělé pro vysvětlování složitějších konceptů nebo poskytování podrobných instrukcí!"
            size="medium"
          />
        </div>

        {/* Příklad v sérii */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Konverzace (séria zpráv)
          </h2>
          <CharacterHelper
            img="happy"
            text="Pojďme se spolu učit geometrii!"
            characterName="Průvodce"
          />
          <CharacterHelper
            img="thinking"
            text="Začneme od základů - co je to trojúhelník?"
            characterName="Průvodce"
            position="right"
          />
          <CharacterHelper
            img="excited"
            text="Trojúhelník má tři strany a tři rohy. Teď to zkusíme nakreslit!"
            characterName="Průvodce"
          />
        </div>

        {/* Dokumentace */}
        <div className="bg-zinc-800/40 border border-zinc-700/60 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">📖 Dokumentace</h2>
          <div className="text-zinc-300 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Props:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <code className="bg-zinc-700 px-2 py-1 rounded">img</code> -
                  Číslo obrázku ("1"-"5") nebo emoji ("happy", "thinking", atd.)
                </li>
                <li>
                  <code className="bg-zinc-700 px-2 py-1 rounded">text</code> -
                  Text, který postava říká
                </li>
                <li>
                  <code className="bg-zinc-700 px-2 py-1 rounded">
                    position
                  </code>{" "}
                  - "left" nebo "right" (default: "left")
                </li>
                <li>
                  <code className="bg-zinc-700 px-2 py-1 rounded">
                    characterName
                  </code>{" "}
                  - Jméno postavy (default: "Pomocník")
                </li>
                <li>
                  <code className="bg-zinc-700 px-2 py-1 rounded">size</code> -
                  "small", "medium", "large" (default: "medium")
                </li>
                <li>
                  <code className="bg-zinc-700 px-2 py-1 rounded">variant</code>{" "}
                  - "default", "success", "info", "warning" (default: "default")
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Příklad použití:
              </h3>
              <pre className="bg-zinc-900 p-4 rounded-lg overflow-x-auto text-sm">
                {`<CharacterHelper
  img="3"
  text="Ahoj! Pojďme se učit!"
  position="left"
  characterName="Učitel"
  size="medium"
  variant="success"
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
