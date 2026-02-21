export const mathSS = {
  default: [
    {
      title: "Výroková logika a důkazy",
      description:
        "Matematika není o počítání, ale o pravdě. V této kapitole se naučíme jazyk, kterým mluví matematici. Zjistíme, jak poznat lež, jak logicky spojovat věty a jak dokázat, že máme pravdu, aby nám ji nikdo nemohl vyvrátit.",
      lessons: [
        {
          title: "Výrok, negace a základní spojky",
          content: {
            sections: [
              {
                heading: "Co je to výrok?",
                text: "Základním kamenem logiky je výrok. Je to jakákoliv oznamovací věta, u které má smysl se zeptat: 'Je to pravda, nebo lež?' Výrok musí mít pravdivostní hodnotu: buď Pravda (1, True) nebo Nepravda (0, False). \n- Příklad výroku: 'Číslo 5 je prvočíslo.' (Pravda)\n- Příklad výroku: 'Praha leží v Asii.' (Nepravda)\n- Není výrok: 'Ahoj!', 'Kolik je hodin?', 'Kéž by pršelo.' (U těchto vět nelze určit pravdivost).",
                image:
                  "[Image showing examples of sentences classified as propositions vs non-propositions]",
              },
              {
                heading: "Negace: Přesný opak",
                text: "Negace výroku je tvrzení, které má přesně opačnou pravdivostní hodnotu. Značíme ji symbolem $\\neg$ nebo čárkou před výrokem ($A'$).\n- Výrok $A$: 'Prší.'\n- Negace $\\neg A$: 'Neprší.'\n- Výrok $B$: 'Číslo 6 je menší než 5.' ($6 < 5$)\n- Negace $\\neg B$: 'Číslo 6 je větší nebo rovno 5.' ($6 \\ge 5$). Pozor na to! Opakem 'menší' není 'větší', ale 'větší nebo rovno'.",
                image: "placeholder-negation-inequality",
              },
              {
                heading: "Konjunkce a Disjunkce",
                text: "Výroky můžeme spojovat:\n1. Konjunkce (A a současně B): Značíme $A \\wedge B$. Platí JEN tehdy, když jsou oba výroky pravdivé. ('Mám jablko A mám hrušku' = musím mít oboje).\n2. Disjunkce (A nebo B): Značíme $A \\vee B$. Platí, když je pravdivý alespoň jeden z nich (nebo oba). V matematice 'nebo' neznamená volbu 'buď a nebo'. ('Prší nebo sněží' = je mokro, klidně může pršet i sněžit zároveň).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "hs_c1_l1_t1",
                question: "Která z následujících vět JE výrokem?",
                options: [
                  "Dávej pozor!",
                  "Číslo 13 je sudé.",
                  "Kolik máš roků?",
                  "Modrá barva je hezká.",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c1_l1_t2",
                question:
                  "Jaká je správná negace výroku 'Všichni žáci přišli'?",
                options: [
                  "Nikdo nepřišel.",
                  "Alespoň jeden žák nepřišel.",
                  "Všichni žáci odešli.",
                  "Někteří žáci přišli.",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c1_l1_t3",
                question: "Kdy je pravdivá disjunkce $A \\vee B$?",
                options: [
                  "Jen když platí A i B současně.",
                  "Jen když platí A a B neplatí.",
                  "Když platí alespoň jeden z výroků.",
                  "Nikdy.",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "hs_c1_l1_t4",
                question:
                  "Mějme výroky A='1+1=2' (Pravda) a B='2+2=5' (Nepravda). Jakou hodnotu má $A \\wedge B$?",
                options: ["Pravda", "Nepravda", "Nelze určit"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c1_l1_t5",
                question: "Symbol $\\wedge$ čteme jako:",
                options: [
                  "Nebo",
                  "A zároveň (konjunkce)",
                  "Jestliže, pak",
                  "Právě tehdy, když",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Implikace a Ekvivalence",
          content: {
            sections: [
              {
                heading: "Implikace: Slib",
                text: "Implikace je nejdůležitější spojka v matematice. Značíme $A \\Rightarrow B$ ('Jestliže A, pak B').\nPředstav si to jako slib: 'Jestliže budeš hodný ($A$), koupím ti zmrzlinu ($B$).'\nKdy jsem lhář? Pouze v jediném případě: Byl jsi hodný (A platí), ale zmrzlinu jsem nekoupil (B neplatí). To je jediná situace, kdy je implikace nepravdivá.\nPokud jsi zlobil (A neplatí), můžu ti zmrzlinu koupit i nekoupit a slib jsem neporušil. Z nepravdy plyne cokoliv!",
                image:
                  "[Image illustrating implication truth table with the promise analogy]",
              },
              {
                heading: "Ekvivalence: Dvojitá šipka",
                text: "Ekvivalence $A \\Leftrightarrow B$ ('A platí právě tehdy, když platí B') znamená, že výroky mají stejnou pravdivostní hodnotu. Buď oba platí, nebo oba neplatí. Je to vlastně spojená implikace tam i zpět ($A \\Rightarrow B$ a zároveň $B \\Rightarrow A$). V rovnici používáme ekvivalenci při úpravách, které nemění obor pravdivosti.",
                image: "placeholder-equivalence-arrows",
              },
              {
                heading: "Tabulka pravdivosti",
                text: "Abychom vyřešili složité výroky, používáme tabulku. Vypíšeme si všechny kombinace nul a jedniček pro vstupy (A, B) a postupně vyhodnocujeme sloupce.\nPro implikaci $A \\Rightarrow B$:\n1 $\\Rightarrow$ 1 ... 1 (Pravda)\n1 $\\Rightarrow$ 0 ... 0 (LEŽ!)\n0 $\\Rightarrow$ 1 ... 1 (Pravda)\n0 $\\Rightarrow$ 0 ... 1 (Pravda)",
                image: "",
              },
            ],
            tasks: [
              {
                id: "hs_c1_l2_t1",
                question: "Kdy je implikace $A \\Rightarrow B$ nepravdivá?",
                options: [
                  "Když A platí a B platí.",
                  "Když A neplatí a B platí.",
                  "Když A platí a B neplatí.",
                  "Když A neplatí a B neplatí.",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "hs_c1_l2_t2",
                question:
                  "Platí věta: 'Jestliže je $1+1=3$, pak jsou prasata fialová'?",
                options: [
                  "Ano (z nepravdy plyne cokoliv)",
                  "Ne (je to nesmysl)",
                  "Jen v úterý",
                  "Nelze rozhodnout",
                ],
                correctAnswer: 0,
                xp: 30,
              },
              {
                id: "hs_c1_l2_t3",
                question: "Obrácená implikace k $A \\Rightarrow B$ je:",
                options: [
                  "$\\neg A \\Rightarrow \\neg B$",
                  "$B \\Rightarrow A$",
                  "$A \\Leftrightarrow B$",
                  "$\\neg B \\Rightarrow \\neg A$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c1_l2_t4",
                question: "Výrok $A \\Leftrightarrow B$ je pravdivý, když:",
                options: [
                  "Má A jinou hodnotu než B",
                  "Mají A i B stejnou pravdivostní hodnotu",
                  "Platí A",
                  "Neplatí B",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c1_l2_t5",
                question: "Co znamená symbol $\\Leftrightarrow$?",
                options: [
                  "Jestliže, pak",
                  "Právě tehdy, když",
                  "Nebo",
                  "A zároveň",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Kvantifikátory",
          content: {
            sections: [
              {
                heading: "Všichni a Někdo",
                text: "Kvantifikátory nám říkají, kolika objektů se tvrzení týká.\n1. Obecný kvantifikátor ($\\forall$): Čteme 'Pro každé...'. Tvrzení musí platit pro úplně všechny prvky bez výjimky. Příklad: $\\forall x \\in \\mathbb{R}: x^2 \\ge 0$ (Pro každé reálné číslo platí, že jeho druhá mocnina je nezáporná).\n2. Existenční kvantifikátor ($\\exists$): Čteme 'Existuje alespoň jedno...'. Stačí najít jediný příklad, aby to byla pravda. Příklad: $\\exists x \\in \\mathbb{Z}: x + 1 = 0$ (Existuje číslo, pro které to platí – ano, -1).",
                image:
                  "[Image illustrating symbols for For All and Exists with group diagrams]",
              },
              {
                heading: "Negování kvantifikátorů",
                text: "Tady se dělá nejvíce chyb v běžné řeči. Jak popřít větu 'Všichni spí'?\n- Špatně: 'Nikdo nespí.'\n- Správně: 'Alespoň jeden nespí.'\n\nPravidla pro negaci:\n- $\\forall$ (Všichni) $\\rightarrow$ mění se na $\\exists$ a zneguje se zbytek (Alespoň jeden ne).\n- $\\exists$ (Existuje) $\\rightarrow$ mění se na $\\forall$ a zneguje se zbytek (Nikdo/Žádný ne).",
                image: "placeholder-quantifier-negation-rules",
              },
            ],
            tasks: [
              {
                id: "hs_c1_l3_t1",
                question: "Jak čteme symbol $\\forall$?",
                options: [
                  "Existuje",
                  "Pro každé / Pro všechna",
                  "Právě tehdy",
                  "Není pravda",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c1_l3_t2",
                question: "Zneguj větu: 'Každý den prší.'",
                options: [
                  "Žádný den neprší.",
                  "Alespoň jeden den neprší.",
                  "Každý den svítí slunce.",
                  "Občas prší.",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c1_l3_t3",
                question: "Zneguj větu: 'Existuje liché prvočíslo.'",
                options: [
                  "Existuje sudé prvočíslo.",
                  "Všechna prvočísla jsou sudá (žádné liché neexistuje).",
                  "Všechna prvočísla jsou lichá.",
                  "Neexistuje sudé prvočíslo.",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "hs_c1_l3_t4",
                question:
                  "Je pravdivý výrok $\\forall x \\in \\mathbb{R}: x > 0$?",
                options: [
                  "Ano, všechna čísla jsou kladná.",
                  "Ne, existují záporná čísla a nula.",
                  "Ano, ale jen pro velká čísla.",
                  "Nelze určit.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c1_l3_t5",
                question: "Co znamená $\\exists!$ (s vykřičníkem)?",
                options: [
                  "Existuje nečekaně",
                  "Existuje právě jedno",
                  "Určitě neexistuje",
                  "Existuje hlasitě",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Typy důkazů ",
          content: {
            sections: [
              {
                heading: "Proč dokazujeme?",
                text: "V matematice nestačí, že něco 'vypadá', že to platí (jako ve fyzice, kde se měří). Musíme si být jistí na 100 %. Důkaz je logická cesta od předpokladů k závěru, kterou nelze zpochybnit.",
                image:
                  "[Image illustrating a logical path from Assumption to Conclusion]",
              },
              {
                heading: "Přímý důkaz",
                text: "Jdeme přímočaře: Předpoklad $\\Rightarrow$ Krok 1 $\\Rightarrow$ Krok 2 $\\Rightarrow$ ... $\\Rightarrow$ Závěr.\nChceme dokázat: 'Součet dvou sudých čísel je sudý.'\n1. Nechť $a = 2k$ a $b = 2l$ (definice sudých čísel).\n2. $a + b = 2k + 2l$.\n3. Vytkneme dvojku: $2(k + l)$.\n4. Výsledek je násobek dvou, takže je sudý. Hotovo.",
                image: "placeholder-direct-proof-steps",
              },
              {
                heading: "Důkaz sporem",
                text: "Detektivní metoda. Chceme dokázat tvrzení $A$.\n1. Předpokládáme, že $A$ NEPLATÍ (negace).\n2. Hledáme důsledky této lži, až narazíme na nesmysl (spor, např. $1 = 0$ nebo 'číslo je sudé i liché zároveň').\n3. Protože předpoklad vedl k nesmyslu, musí být původní tvrzení $A$ pravdivé.\nPříklad: 'Největší přirozené číslo neexistuje.' Kdyby existovalo (označme ho $N$), pak číslo $N+1$ by bylo větší, což je spor.",
                image:
                  "[Image showing a path leading to a contradiction/dead end]",
              },
            ],
            tasks: [
              {
                id: "hs_c1_l4_t1",
                question: "Jak začíná důkaz sporem?",
                options: [
                  "Předpokládáme, že tvrzení platí.",
                  "Předpokládáme, že platí negace tvrzení.",
                  "Začneme počítat příklady.",
                  "Vzdáme to.",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c1_l4_t2",
                question: "Co je to 'protipříklad'?",
                options: [
                  "Důkaz, že něco platí.",
                  "Jeden konkrétní případ, který ukazuje, že tvrzení (s $\\forall$) neplatí.",
                  "Důkaz sporem.",
                  "Špatně spočítaný příklad.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c1_l4_t3",
                question:
                  "Chceš vyvrátit větu: 'Všechna prvočísla jsou lichá.' Stačí říct:",
                options: [
                  "To není pravda.",
                  "Číslo 2 je prvočíslo a je sudé (protipříklad).",
                  "Číslo 9 je liché a není prvočíslo.",
                  "Existuje nekonečně mnoho prvočísel.",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c1_l4_t4",
                question:
                  "Který typ důkazu využívá implikace $A \\Rightarrow B, B \\Rightarrow C ...$?",
                options: [
                  "Přímý důkaz",
                  "Důkaz sporem",
                  "Důkaz matematickou indukcí",
                  "Důkaz pozorováním",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c1_l4_t5",
                question:
                  "Co znamená zkratka 'cbd' nebo 'qed' na konci důkazu?",
                options: [
                  "Celkem blbý důkaz",
                  "Což bylo dokázati (konec důkazu)",
                  "Čekám brzké doučování",
                  "Quest ended daily",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Rovnice a nerovnice (Pokročilé techniky)",
          content: {
            sections: [
              {
                heading: "Kouzlo nuly",
                text: "Jak vyřešit rovnici $(x - 2) \\cdot (x + 5) \\cdot (2x - 1) = 0$? Nemusíš nic roznásobovat! Použij selský rozum: Kdy je výsledek násobení nula? Jen tehdy, když je alespoň jedno z čísel nula.\nStačí tedy vzít každou závorku zvlášť a položit ji rovnu nule.\n1. $x - 2 = 0 \\Rightarrow x_1 = 2$\n2. $x + 5 = 0 \\Rightarrow x_2 = -5$\n3. $2x - 1 = 0 \\Rightarrow x_3 = 0,5$\nRovnice má tři řešení.",
                image:
                  "[Image illustrating zero product property with logic gates]",
              },
              {
                heading: "Zlomky a zakázané dělení",
                text: "U rovnice v podílovém tvaru $\\frac{x + 3}{x - 4} = 0$ platí pravidlo: Zlomek je nula právě tehdy, když je čitatel nula (a jmenovatel existuje).\nTakže řešíme pouze $x + 3 = 0 \\Rightarrow x = -3$.\nALE POZOR! Musíme zkontrolovat jmenovatel. $x - 4 \\neq 0$, takže $x \\neq 4$. Kdyby nám vyšla čtyřka, museli bychom ji vyhodit.",
                image: "",
              },
              {
                heading: "Kladivo na paraboly",
                text: "Kvadratická rovnice má tvar $ax^2 + bx + c = 0$. Někdy jde rozložit na součin (např. $x^2 - 4 = (x-2)(x+2)$), ale když to z hlavy nejde, nastupuje univerzální vzorec s diskriminantem ($D$).\n$$ D = b^2 - 4ac $$\nDiskriminant nám řekne, kolik má rovnice řešení.",
                image: "[Image showing quadratic formula decomposition]",
              },
              {
                heading: "Tři scénáře",
                text: "1. $D > 0$ (Kladný): Dva různé kořeny. Vzorec: $$ x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a} $$\n2. $D = 0$ (Nula): Jeden dvojnásobný kořen. Vrchol paraboly leží na ose x.\n3. $D < 0$ (Záporný): Žádné řešení v reálných číslech (parabola se osy x nedotýká). Později zjistíme, že řešení existuje v komplexních číslech.",
                image:
                  "[Image illustrating geometric interpretation of discriminant D>0, D=0, D<0]",
              },
              {
                heading: "Jak se zbavit odmocniny?",
                text: "Máme rovnici $\\sqrt{x + 5} = x - 1$. Odmocninu zničíme tak, že celou rovnici umocníme na druhou. \n$$ (\\sqrt{x + 5})^2 = (x - 1)^2 $$\n$$ x + 5 = x^2 - 2x + 1 $$\nTeď už je to normální kvadratická rovnice, kterou vyřešíme. Tím to ale nekončí!",
                image: "[Image showing squaring both sides of an equation]",
              },
              {
                heading: "Zkouška je nutnost!",
                text: "Umocňování není ekvivalentní úprava. Proč? Protože z rovnice $2 = -2$ (která neplatí) udělá umocněním $4 = 4$ (která platí). Umocňování může vyrobit falešné kořeny. \nProto u každé rovnice s odmocninou MUSÍŠ udělat zkoušku pro všechna čísla, která ti vyšla. Pokud levá strana nerovná se pravé, kořen škrtáme.",
                image: "",
              },
              {
                heading: "Větší nebo menší?",
                text: "Lineární nerovnice (např. $2x - 5 > 3$) řešíme stejně jako rovnice, s jedním chytákem: Když násobíme nebo dělíme záporným číslem, zobáček se otáčí!\n$$ -2x > 10 \\quad / :(-2) $$\n$$ x < -5 $$\nVýsledek zapíšeme intervalem: $x \\in (-\\infty; -5)$.",
                image:
                  "[Image illustrating inequality sign flipping when dividing by negative number]",
              },
              {
                heading: "Metoda nulových bodů (Hádě)",
                text: "Jak vyřešit $(x-2)(x+3) > 0$? \n1. Najdeme nulové body, kde se závorky rovnají nule: $2$ a $-3$.\n2. Naneseme je na osu. Osa se rozdělí na 3 intervaly.\n3. Z každého intervalu vezmeme zkušební číslo, dosadíme a zjistíme znaménko výsledku (např. minus krát minus je plus).\n4. Vybereme intervaly, které splňují zadání ($>0$ chceme plusy).",
                image: "",
              },
              {
                heading: "Rovnice s knoflíkem",
                text: "Představ si rovnici $px = 10$, kde $x$ je neznámá a $p$ je parametr (nastavovátko). Nemůžeme jen tak napsat $x = 10/p$, protože nevíme, co je $p$.\nMusíme provést diskusi:\n1. Co když $p = 0$? Rovnice je $0 \\cdot x = 10$, tedy $0 = 10$. To je nesmysl $\\rightarrow$ Nemá řešení.\n2. Co když $p \\neq 0$? Můžeme dělit. $\\rightarrow x = 10/p$.",
                image:
                  "[Image illustrating a machine with a parameter knob creating different outputs]",
              },
              {
                heading: "Větvení reality",
                text: "Řešení rovnice s parametrem není jedno číslo, ale soubor podmínek. Je to jako programování s podmínkou 'IF'. 'Když je parametr takový, řešení je toto. Když je makový, řešení je tamto.' To je podstata matematické diskuse.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "hs_c4_l1_t1",
                question: "Kdy platí $A \\cdot B = 0$?",
                options: [
                  "Když $A=0$ nebo $B=0$",
                  "Jen když $A=0$ a $B=0$ současně",
                  "Když jsou obě čísla kladná",
                  "Když je jedno číslo 1",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c4_l1_t2",
                question: "Najdi kořeny rovnice $x(x - 3) = 0$.",
                options: [
                  "Jen $x = 3$",
                  "$x = 0$ a $x = 3$",
                  "$x = 1$ a $x = 3$",
                  "$x = -3$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c4_l1_t3",
                question: "Vyřeš $\\frac{x - 5}{x + 2} = 0$.",
                options: [
                  "$x = 5$",
                  "$x = -2$",
                  "$x = 5$ a $x = -2$",
                  "Nemá řešení",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c4_l1_t4",
                question:
                  "Jaká je podmínka pro rovnici $\\frac{2}{x(x-1)} = 0$?",
                options: [
                  "$x \\neq 0$",
                  "$x \\neq 1$",
                  "$x \\neq 0$ a $x \\neq 1$",
                  "Žádná",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "hs_c4_l1_t5",
                question: "Má rovnice $\\frac{x - 2}{x - 2} = 0$ řešení?",
                options: [
                  "Ano, $x = 2$",
                  "Ano, $x = 0$",
                  "Ne, protože podmínka je $x \\neq 2$",
                  "Ano, nekonečně mnoho",
                ],
                correctAnswer: 2,
                xp: 25,
              },
              {
                id: "hs_c4_l2_t1",
                question: "Vzorec pro diskriminant je:",
                options: [
                  "$a^2 + b^2$",
                  "$b^2 - 4ac$",
                  "$b^2 + 4ac$",
                  "$2a - b$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c4_l2_t2",
                question: "Kolik řešení má rovnice, když vyjde $D = -5$?",
                options: [
                  "Dvě",
                  "Jedno",
                  "Žádné (v $\\mathbb{R}$)",
                  "Nekonečně mnoho",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "hs_c4_l2_t3",
                question: "Vyřeš $x^2 - 4x + 4 = 0$ (Tip: $D=0$ nebo vzorec).",
                options: ["$x = 2$", "$x = -2$", "$x = 4$", "$x = 0$"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c4_l2_t4",
                question: "Najdi kořeny rovnice $x^2 - 5x + 6 = 0$.",
                options: ["$2$ a $3$", "$-2$ a $-3$", "$1$ a $6$", "$5$ a $6$"],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "hs_c4_l2_t5",
                question:
                  "Pokud v rovnici chybí 'b' (např. $x^2 - 9 = 0$), jak ji vyřešíš nejrychleji?",
                options: [
                  "Diskriminantem",
                  "Odmocněním ($x^2 = 9 \\Rightarrow x = \\pm 3$)",
                  "Nelze vyřešit",
                  "Vytýkáním",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c4_l3_t1",
                question: "Jaký je první krok při řešení $\\sqrt{x} = 5$?",
                options: [
                  "Odmocnit",
                  "Umocnit na druhou",
                  "Vydělit 5",
                  "Odečíst x",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c4_l3_t2",
                question: "Proč musíme dělat zkoušku u iracionálních rovnic?",
                options: [
                  "Protože učitel to vyžaduje",
                  "Protože umocňování může vytvořit falešná řešení",
                  "Protože odmocniny jsou nepřesné",
                  "Nemusíme, je to dobrovolné",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c4_l3_t3",
                question: "Vyřeš $\\sqrt{x} = -2$.",
                options: [
                  "$4$",
                  "$-4$",
                  "Nemá řešení (odmocnina nemůže vyjít záporná)",
                  "$2$",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "hs_c4_l3_t4",
                question: "Po umocnění rovnice $\\sqrt{x+2} = x$ vznikne:",
                options: [
                  "$x + 2 = x$",
                  "$x + 2 = x^2$",
                  "$x^2 + 4 = x^2$",
                  "$x + 4 = x^2$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c4_l3_t5",
                question:
                  "Vyšlo ti $x_1=4$. Zkouška: $L=\\sqrt{4}=2, P=-2$. Je to kořen?",
                options: [
                  "Ano",
                  "Ne, protože $L \\neq P$",
                  "Ano, znaménko nevadí",
                  "Nevím",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c4_l4_t1",
                question: "Kdy se otáčí znaménko nerovnosti?",
                options: [
                  "Při přičítání záporného čísla",
                  "Při násobení/dělení záporným číslem",
                  "Vždy, když je v rovnici nula",
                  "Nikdy",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c4_l4_t2",
                question: "Vyřeš $-x < 5$.",
                options: ["$x < -5$", "$x > -5$", "$x < 5$", "$x > 5$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c4_l4_t3",
                question: "Jaké jsou nulové body výrazu $(x-1)(x+4)$?",
                options: ["$1$ a $4$", "$-1$ a $-4$", "$1$ a $-4$", "$0$"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "hs_c4_l4_t4",
                question: "Který interval je řešením $x^2 > 0$?",
                options: [
                  "$\\mathbb{R}$ (všechna čísla)",
                  "$\\mathbb{R} \\setminus \\{0\\}$ (všechna kromě nuly)",
                  "$(0; \\infty)$",
                  "Prázdná množina",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "hs_c4_l4_t5",
                question: "Co znamená plný puntík na číselné ose?",
                options: [
                  "Krajní bod tam nepatří ($<$)",
                  "Krajní bod tam patří ($\\le$)",
                  "Nekonečno",
                  "Nula",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c4_l5_t1",
                question: "Co je to parametr?",
                options: [
                  "Neznámá, kterou hledáme",
                  "Proměnná hodnota, která mění vlastnosti rovnice",
                  "Chyba v zadání",
                  "Konstanta 3,14",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c4_l5_t2",
                question: "Vyřeš $a \\cdot x = 0$ (diskuse).",
                options: [
                  "$x = 0$ pro každé $a$",
                  "Když $a \\neq 0$, pak $x=0$. Když $a=0$, pak $x$ je cokoliv.",
                  "Nemá řešení",
                  "$x = a$",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "hs_c4_l5_t3",
                question: "Proč musíme dělat diskusi u dělení parametrem?",
                options: [
                  "Aby byl příklad delší",
                  "Protože parametr může být nula a nulou nelze dělit",
                  "Protože parametr může být záporný",
                  "Nemusíme",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c4_l5_t4",
                question: "Kdy má rovnice $0 \\cdot x = 5$ řešení?",
                options: ["Vždy", "Nikdy", "Když $x=5$", "Když prší"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c4_l5_t5",
                question: "Kdy má rovnice $0 \\cdot x = 0$ řešení?",
                options: [
                  "Nikdy",
                  "Jen pro $x=0$",
                  "Nekonečně mnoho řešení (pro jakékoliv $x$)",
                  "Jen pro $x=1$",
                ],
                correctAnswer: 2,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Algebraické výrazy a mocniny",
          description:
            "Nyní povýšíme počítání na novou úroveň. Naučíme se krotit složité mnohočleny, zjistíme, že odmocnina je vlastně jen převlečená mocnina, a naučíme se 'výtahový trik' se zápornými exponenty. Algebra je nástroj, bez kterého se ve vyšší matematice nepohnete.",
          content: {
            sections: [
              {
                heading: "Anatomie mnohočlenu",
                text: "Mnohočlen (polynom) je součet členů, jako je $5x^3 - 2x + 1$. Každý člen má svůj koeficient (číslo) a mocninu. Nejvyšší mocnina určuje stupeň mnohočlenu. Například $x^5 - 100$ je mnohočlen 5. stupně. Mnohočleny můžeme sčítat, odčítat a násobit ('každý s každým'), to už známe. Novinkou je dělení.",
                image: "",
              },
              {
                heading: "Dělení mnohočlenu mnohočlenem",
                text: "Jak vydělit $(x^3 + 2x^2 - 4) : (x - 1)$? Děláme to podobně jako písemné dělení čísel se zbytkem.\n1. Vydělíme první člen prvním členem: $x^3 : x = x^2$.\n2. Výsledek zpětně vynásobíme dělitelem: $x^2(x - 1) = x^3 - x^2$.\n3. Tuto část odečteme od původního výrazu.\n4. Opakujeme, dokud nezbyde číslo (zbytek) nebo nula. Je to algoritmus, který vyžaduje pečlivost!",
                image: "",
              },
              {
                heading: "Matematika nesnáší nulu",
                text: "Lomený výraz je vlastně zlomek, který má ve jmenovateli proměnnou, např. $\\frac{x+2}{x-3}$. Než začneme cokoliv počítat, musíme určit podmínky. V matematice je přísně zakázáno dělit nulou. Jmenovatel se nesmí rovnat nule! \nU $\\frac{x+2}{x-3}$ platí $x - 3 \\neq 0$, tedy $x \\neq 3$. Pokud na podmínky zapomeneš, můžeš dojít k nesmyslnému výsledku.",
                image: "",
              },
              {
                heading: "Krácení a rozklad",
                text: "Chceš zkrátit výraz $\\frac{x^2 - 9}{x + 3}$? NESMÍŠ jen tak škrtnout $x$ nebo čísla. Musíš nejprve rozložit na součin!\nČitatel je vzorec $a^2-b^2$: $(x-3)(x+3)$.\nTeď máme $\\frac{(x-3)(x+3)}{(x+3)}$. Celou závorku $(x+3)$ můžeme škrtnout.\nVýsledek je $x - 3$ (za podmínky $x \\neq -3$).",
                image: "",
              },
              {
                heading: "Záporný exponent = Výtah",
                text: "Co znamená $x^{-2}$? Není to záporné číslo! Minus v exponentu funguje jako výtah. Říká číslu: 'Jeď do druhého patra.'\n- Pokud je číslo nahoře, pošle ho dolů do jmenovatele: $$ x^{-n} = \\frac{1}{x^n} $$ Tedy $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$.\n- Pokud je dole, pošle ho nahoru: $\\frac{1}{x^{-n}} = x^n$.",
                image: "",
              },
              {
                heading: "Pravidla hry zůstávají",
                text: "Všechna pravidla pro sčítání a odčítání exponentů platí i pro záporná čísla.\n$$ \\frac{a^3}{a^5} = a^{3-5} = a^{-2} = \\frac{1}{a^2} $$\nNásobení: $x^2 \\cdot x^{-5} = x^{2+(-5)} = x^{-3}$. Díky tomu můžeme elegantně počítat se složitými zlomky.",
                image: "",
              },
              {
                heading: "Zlomek v exponentu",
                text: "Teď přijde velké odhalení: Odmocniny ve skutečnosti neexistují, jsou to jen zlomkové mocniny! \n- Druhá odmocnina je mocnina na jednu polovinu: $\\sqrt{x} = x^{\\frac{1}{2}}$.\n- Třetí odmocnina je mocnina na jednu třetinu: $\\sqrt[3]{x} = x^{\\frac{1}{3}}$.\nObecně platí: $$ \\sqrt[n]{x^m} = x^{\\frac{m}{n}} $$ Jmenovatel zlomku ti říká, kolikátá je to odmocnina. 'Kořen (root) je dole'.",
                image: "",
              },
              {
                heading: "Proč to děláme?",
                text: "Počítat s odmocninami je otrava. Počítat s mocninami je snadné. Když převedeme odmocniny na zlomkové exponenty, můžeme používat stejná pravidla (sčítání exponentů při násobení atd.). \nNapř. $\\sqrt{x} \\cdot \\sqrt[3]{x} = x^{\\frac{1}{2}} \\cdot x^{\\frac{1}{3}} = x^{\\frac{3+2}{6}} = x^{\\frac{5}{6}} = \\sqrt[6]{x^5}$.",
                image: "",
              },
              {
                heading: "Kosmetika výrazů",
                text: "V matematice se považuje za 'neslušné' nechat odmocninu ve jmenovateli (dole). Procesu odstranění odmocniny zespodu říkáme usměrňování. \nZákladní trik: Vynásobíme zlomek jedničkou zapsanou chytře jako $\\frac{\\sqrt{a}}{\\sqrt{a}}$.\n$$ \\frac{1}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2} $$ Hodnota se nezměnila, ale odmocnina je teď nahoře.",
                image: "",
              },
              {
                heading: "Trik se vzorcem",
                text: "Co když je dole součet, třeba $\\frac{1}{2 + \\sqrt{3}}$? Použijeme vzorec $(a+b)(a-b) = a^2 - b^2$. Rozšíříme zlomek 'opačnou' závorkou $(2 - \\sqrt{3})$.\nDole vznikne $2^2 - (\\sqrt{3})^2 = 4 - 3 = 1$. Odmocnina zmizela!",
                image: "",
              },
            ],
            tasks: [
              {
                id: "hs_c3_l1_t1",
                question: "Jaký je stupeň mnohočlenu $4x^3 - 5x^7 + 2$?",
                options: ["3", "7", "4", "10"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c3_l1_t2",
                question: "Co je výsledkem dělení $(x^2 - 1) : (x + 1)$?",
                options: ["$x + 1$", "$x - 1$", "$x^2$", "$1$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c3_l1_t3",
                question:
                  "Kdy říkáme, že je mnohočlen $A$ dělitelný mnohočlenem $B$?",
                options: [
                  "Když je výsledek kladný",
                  "Když je zbytek po dělení nula",
                  "Když mají stejný stupeň",
                  "Když neobsahují $x$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c3_l1_t4",
                question: "Vynásob $(x^2 + 1)(x - 1)$.",
                options: [
                  "$x^3 - x^2 + x - 1$",
                  "$x^3 + 1$",
                  "$x^2 - 1$",
                  "$x^3 - 1$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c3_l1_t5",
                question:
                  "Koeficient u kvadratického členu ($x^2$) ve výrazu $3x^4 - x^2 + 5$ je:",
                options: ["1", "-1", "0", "3"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c3_l2_t1",
                question: "Urči podmínky pro výraz $\\frac{1}{x+5}$.",
                options: [
                  "$x \\neq 0$",
                  "$x \\neq 5$",
                  "$x \\neq -5$",
                  "$x \\in \\mathbb{R}$",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "hs_c3_l2_t2",
                question: "Kdy má lomený výraz hodnotu nula?",
                options: [
                  "Když je jmenovatel nula",
                  "Když je čitatel nula (a jmenovatel nenulový)",
                  "Když jsou čitatel i jmenovatel stejné",
                  "Nikdy",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c3_l2_t3",
                question: "Zkrať výraz $\\frac{2x}{4x^2}$ na základní tvar.",
                options: [
                  "$\\frac{1}{2x}$",
                  "$\\frac{x}{2x}$",
                  "$\\frac{1}{2}$",
                  "$2x$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c3_l2_t4",
                question:
                  "Jaký je společný jmenovatel pro $\\frac{1}{x}$ a $\\frac{1}{x+1}$?",
                options: ["$x + 1$", "$x(x+1)$", "$x^2$", "$2x + 1$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c3_l2_t5",
                question:
                  "Je dovoleno krátit ve výrazu $\\frac{x+2}{2}$ dvojky?",
                options: [
                  "Ano, vyjde $x$",
                  "Ano, vyjde $x+1$",
                  "Ne, protože nahoře je součet, ne součin",
                  "Ano, vždy",
                ],
                correctAnswer: 2,
                xp: 25,
              },
              {
                id: "hs_c3_l3_t1",
                question: "Jak zapíšeš $5^{-2}$ jako zlomek?",
                options: [
                  "$-25$",
                  "$\\frac{1}{10}$",
                  "$\\frac{1}{25}$",
                  "$-10$",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "hs_c3_l3_t2",
                question: "Zjednoduš: $\\frac{1}{x^{-3}}$",
                options: ["$x^3$", "$-x^3$", "$\\frac{1}{x^3}$", "$3x$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c3_l3_t3",
                question: "Vypočítej: $(2x)^{-1}$",
                options: [
                  "$-2x$",
                  "$\\frac{1}{2x}$",
                  "$2/x$",
                  "$1/2 \\cdot x$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c3_l3_t4",
                question: "Kolik je $(-2)^{-2}$?",
                options: ["$4$", "$-4$", "$\\frac{1}{4}$", "$-\\frac{1}{4}$"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "hs_c3_l3_t5",
                question: "Zjednoduš $\\frac{a^2 b^{-1}}{c^{-2}}$",
                options: [
                  "$\\frac{a^2 c^2}{b}$",
                  "$\\frac{a^2}{b c^2}$",
                  "$\\frac{b}{a^2 c^2}$",
                  "$a^2 b c^2$",
                ],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "hs_c3_l4_t1",
                question: "Převeď $\\sqrt{x}$ na mocninu.",
                options: ["$x^2$", "$x^{-1}$", "$x^{1/2}$", "$x^{0,2}$"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "hs_c3_l4_t2",
                question: "Jak zapíšeš $x^{\\frac{2}{3}}$ pomocí odmocniny?",
                options: [
                  "$\\sqrt{x^3}$",
                  "$\\sqrt[3]{x^2}$",
                  "$\\sqrt[2]{x^3}$",
                  "$\\frac{2}{3}x$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c3_l4_t3",
                question: "Vypočítej $8^{\\frac{1}{3}}$.",
                options: ["$2$ (protože $2^3=8$)", "$24$", "$8/3$", "$4$"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c3_l4_t4",
                question: "Zjednoduš $\\sqrt{x} \\cdot x$.",
                options: [
                  "$x$",
                  "$x^{1,5}$ (nebo $x \\sqrt{x}$)",
                  "$x^2$",
                  "$2x$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c3_l4_t5",
                question: "Co znamená $x^{0,5}$?",
                options: [
                  "Polovina x",
                  "Druhá odmocnina z x",
                  "$x$ na pátou",
                  "Převrácená hodnota x",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c3_l5_t1",
                question: "Proč usměrňujeme zlomky?",
                options: [
                  "Abychom se zbavili odmocniny ve jmenovateli",
                  "Abychom se zbavili odmocniny v čitateli",
                  "Aby byl zlomek větší",
                  "Protože odmocniny neexistují",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c3_l5_t2",
                question: "Usměrni zlomek $\\frac{6}{\\sqrt{3}}$.",
                options: [
                  "$2$",
                  "$2\\sqrt{3}$",
                  "$3\\sqrt{3}$",
                  "$\\frac{\\sqrt{3}}{6}$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c3_l5_t3",
                question: "Čím rozšíříš zlomek $\\frac{1}{\\sqrt{5} - 1}$?",
                options: [
                  "$\\sqrt{5}$",
                  "$\\sqrt{5} - 1$",
                  "$\\sqrt{5} + 1$",
                  "$5$",
                ],
                correctAnswer: 2,
                xp: 25,
              },
              {
                id: "hs_c3_l5_t4",
                question: "Výsledek usměrnění $\\frac{1}{\\sqrt{2}}$ je:",
                options: [
                  "$\\frac{\\sqrt{2}}{2}$",
                  "$2$",
                  "$\\sqrt{2}$",
                  "$0,5$",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c3_l5_t5",
                question: "Platí rovnost $\\frac{1}{\\sqrt{x}} = x^{-1/2}$?",
                options: ["Ano", "Ne", "Jen pro $x=1$", "Nevím"],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Množiny a intervaly",
      description:
        "Matematika má ráda pořádek. Naučíme se třídit čísla a objekty do skupin (množin), budeme hledat, co mají společného, a naučíme se zapisovat nekonečné úseky číselné osy pomocí intervalů.",
      lessons: [
        {
          title: "Množina: Pytel s věcmi",
          content: {
            sections: [
              {
                heading: "Co je to množina?",
                text: "Množina je soubor libovolných objektů. Představ si ji jako nákupní tašku. To, co je uvnitř, jsou prvky. Množiny značíme velkými písmeny ($A, B, M$) a prvky vypisujeme do složených závorek.\nNapříklad množina barev na semaforu: $$ S = \\{\\text{červená, žlutá, zelená}\\} $$",
                image: "",
              },
              {
                heading: "Patří, nebo nepatří?",
                text: "Pokud prvek $x$ leží v množině $A$, píšeme $x \\in A$ (čteme: $x$ je prvkem $A$). Pokud tam není, píšeme $x \\notin A$ (přeškrtnuté $\\in$).\nExistují dva speciální případy:\n1. Prázdná množina ($\\emptyset$): Taška, ve které nic není.\n2. Podmnožina ($B \\subset A$): Když je celá taška $B$ vložena do větší tašky $A$.",
                image: "placeholder-subset-diagram",
              },
            ],
            tasks: [
              {
                id: "hs_c2_l1_t1",
                question: "Jak zapíšeš, že číslo 5 patří do množiny $M$?",
                options: [
                  "$5 \\subset M$",
                  "$5 = M$",
                  "$5 \\in M$",
                  "$M \\in 5$",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "hs_c2_l1_t2",
                question: "Co znamená symbol $\\emptyset$?",
                options: ["Nula", "Prázdná množina", "Všechna čísla", "Chyba"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c2_l1_t3",
                question:
                  "Mějme $A = \\{1, 2, 3\\}$. Je pravda, že $\\{1, 2\\} \\subset A$?",
                options: [
                  "Ano, je to podmnožina.",
                  "Ne, chybí tam trojka.",
                  "Ne, prvky musí být stejné.",
                  "Nelze určit.",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c2_l1_t4",
                question: "Kolik prvků má množina písmen ve slově 'ANANAS'?",
                options: [
                  "6 (A,N,A,N,A,S)",
                  "3 (A, N, S - prvky se neopakují!)",
                  "1 (slovo)",
                  "0",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c2_l1_t5",
                question:
                  "Který zápis je správně pro množinu přirozených čísel menších než 3?",
                options: [
                  "$A = (1, 2)$",
                  "$A = \\{1, 2\\}$",
                  "$A = [1, 2]$",
                  "$A = 1, 2$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Operace s množinami",
          content: {
            sections: [
              {
                heading: "Sjednocení (Miska)",
                text: "Sjednocení dvou množin $A \\cup B$ (symbol vypadá jako miska) znamená, že sesypeme obsah obou tašek na jednu hromadu. Prvky, které byly v obou, tam budou jen jednou (neopakují se). \n$$ \\{1, 2\\} \\cup \\{2, 3\\} = \\{1, 2, 3\\} $$ \nPlatí to pro prvky, které jsou v $A$ nebo v $B$.",
                image: "",
              },
              {
                heading: "Průnik (Most)",
                text: "Průnik $A \\cap B$ (symbol připomíná most nebo tunel) hledá to, co mají množiny společné. \n$$ \\{1, 2\\} \\cap \\{2, 3\\} = \\{2\\} $$ \nPokud množiny nemají nic společného (třeba sudá a lichá čísla), jejich průnikem je prázdná množina $\\emptyset$. Říkáme, že jsou disjunktní.",
                image: "",
              },
              {
                heading: "Rozdíl a doplněk",
                text: "- Rozdíl $A \\setminus B$: Vezmu množinu $A$ a 'vykopnu' z ní všechno, co patří i do $B$. ('Všechno, co je v A, ale není v B').\n- Doplněk $A'$: Všechno, co chybí množině $A$ do nějakého celku (univerza).",
                image: "placeholder-set-difference",
              },
            ],
            tasks: [
              {
                id: "hs_c2_l2_t1",
                question: "Najdi sjednocení $\\{1, 5\\} \\cup \\{5, 10\\}$.",
                options: [
                  "$\\{5\\}$",
                  "$\\{1, 5, 5, 10\\}$",
                  "$\\{1, 5, 10\\}$",
                  "$\\{1, 10\\}$",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "hs_c2_l2_t2",
                question: "Najdi průnik $\\{a, b, c\\} \\cap \\{c, d, e\\}$.",
                options: [
                  "$\\{c\\}$",
                  "$\\{a, b, c, d, e\\}$",
                  "$\\emptyset$",
                  "$\\{a, b\\}$",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c2_l2_t3",
                question: "Co znamená symbol $\\setminus$?",
                options: ["Dělení", "Rozdíl množin", "Průnik", "Podmnožina"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c2_l2_t4",
                question: "Jaký je průnik množiny sudých a lichých čísel?",
                options: [
                  "$\\{0\\}$",
                  "Všechna čísla",
                  "$\\emptyset$ (prázdná množina)",
                  "$\\{1, 2\\}$",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "hs_c2_l2_t5",
                question:
                  "Množina $A=\\{1,2\\}$, $B=\\{1\\}$. Co je $A \\setminus B$?",
                options: [
                  "$\\{1\\}$",
                  "$\\{2\\}$",
                  "$\\{1, 2\\}$",
                  "$\\emptyset$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Číselné obory: Rodokmen čísel",
          content: {
            sections: [
              {
                heading: "Přirozená a Celá čísla",
                text: "Čísla nepadají z nebe, mají svou hierarchii.\n1. Přirozená čísla ($\\mathbb{N}$): $1, 2, 3...$ (to, čím počítáme prsty). Někdy se tam řadí i nula $\\mathbb{N}_0$.\n2. Celá čísla ($\\mathbb{Z}$): Přirozená + nula + záporná čísla ($-5, 0, 10$). Zkratka je z německého 'Zahlen'.",
                image:
                  "[Image showing nested circles of number sets N inside Z]",
              },
              {
                heading: "Racionální a Reálná čísla",
                text: "3. Racionální čísla ($\\mathbb{Q}$): Vše, co jde zapsat jako zlomek (quotient). Patří sem $1/2$, $0,5$ i periodická čísla.\n4. Reálná čísla ($\\mathbb{R}$): Všechna čísla na číselné ose. Patří sem i ta, která nejdou zapsat zlomkem (iracionální), jako je $\\pi$ nebo $\\sqrt{2}$. Tahle čísla 'vyplňují díry' na ose.",
                image:
                  "[Image showing complete hierarchy N subset Z subset Q subset R]",
              },
            ],
            tasks: [
              {
                id: "hs_c2_l3_t1",
                question: "Do kterého oboru patří číslo $-5$?",
                options: [
                  "Jen do $\\mathbb{Z}$",
                  "Do $\\mathbb{N}$ a $\\mathbb{Z}$",
                  "Do $\\mathbb{Z}, \\mathbb{Q}$ i $\\mathbb{R}$",
                  "Jen do $\\mathbb{R}$",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "hs_c2_l3_t2",
                question: "Které číslo NENÍ racionální ($\\mathbb{Q}$)?",
                options: ["$0,5$", "$-10$", "$\\sqrt{2}$", "$2/3$"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "hs_c2_l3_t3",
                question: "Co znamená $\\mathbb{N}$?",
                options: [
                  "Náhodná čísla",
                  "Přirozená čísla (Natural)",
                  "Nulová čísla",
                  "Nekonečno",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c2_l3_t4",
                question: "Je číslo $\\pi$ reálné číslo?",
                options: ["Ano", "Ne", "Jen v geometrii", "Nevím"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c2_l3_t5",
                question:
                  "Platí, že $\\mathbb{Z} \\subset \\mathbb{R}$ (celá čísla jsou podmnožinou reálných)?",
                options: [
                  "Ano, každé celé číslo je i reálné.",
                  "Ne, jsou to jiné světy.",
                  "Jen kladná čísla.",
                  "Ne, je to naopak.",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Intervaly: Úsečky na ose",
          content: {
            sections: [
              {
                heading: "Od - do",
                text: "Jak zapsat 'všechna čísla od 2 do 5'? Nemůžeme je vypsat, je jich nekonečně mnoho ($2,1; 2,001...$). Používáme interval. \nInterval je kus číselné osy. Důležité je, zda krajní body patří dovnitř, nebo ne. To určují závorky.",
                image: "[Image showing a number line with an interval segment]",
              },
              {
                heading: "Závorky a puntíky",
                text: "1. Uzavřený interval $\\langle a; b \\rangle$: Krajní body tam PATŘÍ. Nerovnice: $a \\le x \\le b$. Na ose kreslíme plný puntík.\n2. Otevřený interval $(a; b)$: Krajní body tam NEPATŘÍ (končíme těsně před nimi). Nerovnice: $a < x < b$. Na ose kreslíme prázdný puntík.\n3. Polouzavřený interval $\\langle a; b)$: 'a' patří, 'b' nepatří.",
                image:
                  "[Image contrasting closed interval solid dots vs open interval hollow dots]",
              },
              {
                heading: "Nekonečno",
                text: "Intervaly mohou sahat až do nekonečna. Např. $(5; \\infty)$ jsou všechna čísla větší než 5. U nekonečna je VŽDY kulatá závorka (nekonečno není číslo, nemůžeme ho 'chytit').",
                image: "placeholder-infinity-interval",
              },
            ],
            tasks: [
              {
                id: "hs_c2_l4_t1",
                question: "Který interval odpovídá nerovnici $x \\ge 2$?",
                options: [
                  "$(2; \\infty)$",
                  "$\\langle 2; \\infty)$",
                  "$(-\\infty; 2)$",
                  "$\\langle 2; 100 \\rangle$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c2_l4_t2",
                question: "Patří číslo 5 do intervalu $(2; 5)$?",
                options: [
                  "Ano",
                  "Ne (je to krajní bod s kulatou závorkou)",
                  "Ano, je to hraniční hodnota",
                  "Záleží na náladě",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c2_l4_t3",
                question: "Jaký puntík na ose odpovídá ostré nerovnosti $<$?",
                options: ["Plný", "Prázdný", "Čtvereček", "Žádný"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c2_l4_t4",
                question: "Jak zapíšeš interval 'čísla od -3 do 3 včetně'?",
                options: [
                  "$\\langle -3; 3 \\rangle$",
                  "$(-3; 3)$",
                  "$\\langle -3; 3)$",
                  "$(-3; 3 \\rangle$",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c2_l4_t5",
                question: "Která závorka se používá u symbolu $\\infty$?",
                options: [
                  "Vždy lomená $\\langle$",
                  "Vždy kulatá $($",
                  "Podle toho, jestli je nekonečno kladné",
                  "Složená $\\{$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Operace s intervaly",
          content: {
            sections: [
              {
                heading: "Kreslíme nad sebou",
                text: "S intervaly děláme sjednocení a průniky stejně jako s množinami. Nejlepší metoda je grafická:\n1. Nakreslíš osu.\n2. Interval $A$ nakreslíš jako čáru nad osou (v jedné výšce).\n3. Interval $B$ nakreslíš jako čáru o kousek výš.\n4. Průnik je tam, kde jsou 'dvě čáry nad sebou'. Sjednocení je tam, kde je 'alespoň jedna čára'.",
                image:
                  "[Image showing two overlapping intervals on a number line highlighting intersection]",
              },
              {
                heading: "Příklad",
                text: "Mějme $A = \\langle -2; 3 \\rangle$ a $B = (0; 5)$.\n- Průnik ($A \\cap B$): Kde se překrývají? Od $0$ do $3$. Nula v B není (prázdná), trojka v A je (plná). Výsledek: $(0; 3 \\rangle$.\n- Sjednocení ($A \\cup B$): Odkud kam sahají dohromady? Začínají v -2 a končí v 5. Výsledek: $\\langle -2; 5)$.",
                image: "placeholder-interval-operations-example",
              },
            ],
            tasks: [
              {
                id: "hs_c2_l5_t1",
                question: "Najdi průnik intervalů $(1; 5)$ a $(3; 8)$.",
                options: [
                  "$(1; 8)$",
                  "$(3; 5)$",
                  "$(1; 3)$",
                  "$\\langle 3; 5 \\rangle$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c2_l5_t2",
                question: "Co je sjednocením $(-\\infty; 0)$ a $(0; \\infty)$?",
                options: [
                  "Celá množina $\\mathbb{R}$",
                  "$\\mathbb{R}$ kromě nuly",
                  "Prázdná množina",
                  "Interval $(-1; 1)$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c2_l5_t3",
                question:
                  "Když se intervaly vůbec nepřekrývají, jejich průnikem je:",
                options: [
                  "Nula",
                  "Sjednocení",
                  "Prázdná množina $\\emptyset$",
                  "Nekonečno",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "hs_c2_l5_t4",
                question:
                  "Urči $A \\cup B$ pro $A=\\langle 1; 4 \\rangle$ a $B=\\langle 2; 6 \\rangle$.",
                options: [
                  "$\\langle 2; 4 \\rangle$",
                  "$\\langle 1; 6 \\rangle$",
                  "$(1; 6)$",
                  "$\\langle 1; 2 \\rangle$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c2_l5_t5",
                question:
                  "Patří číslo 3 do průniku $\\langle 0; 3 \\rangle \\cap (3; 5)$?",
                options: [
                  "Ano",
                  "Ne (v druhém intervalu chybí)",
                  "Nelze určit",
                  "Ano, protože je v prvním",
                ],
                correctAnswer: 1,
                xp: 25,
              },
            ],
          },
        },
      ],
    },

    {
      title: "Úvod do funkcí",
      description:
        "Funkce jsou motorem matematiky a fyziky. Popisují, jak jedna věc závisí na druhé. V této kapitole se naučíme číst z grafů jako z mapy, určovat, která čísla do funkce smíme vložit, a poznávat symetrie, které nám ulehčí počítání.",
      lessons: [
        {
          title: "Pojem funkce a její zadání",
          content: {
            sections: [
              {
                heading: "Černá skříňka",
                text: "Funkce je jako stroj (černá skříňka). Vhodíš do ní číslo $x$ (vstup), stroj něco udělá (vynásobí, umocní...) a vypadne číslo $y$ (výstup). Zapisujeme to jako $y = f(x)$.\nZlaté pravidlo funkce zní: Pro jedno $x$ existuje nejvýše jedno $y$.\nNemůže se stát, že pro vstup $x=2$ by funkce vyplivla zároveň $10$ i $20$. To by nebyla funkce, ale chaos. Jeden vstup = jeden jasný výsledek.",
                image: "",
              },
              {
                heading: "Způsoby zadání",
                text: "Funkci můžeme zadat třemi způsoby:\n1. Předpisem (rovnicí): Např. $f(x) = 2x + 1$. To je nejpřesnější.\n2. Tabulkou: Vypíšeme pár dvojic. To je dobré pro přehled, ale nevidíme všechno.\n3. Grafem: Nakreslíme body v soustavě souřadnic. To je nejnázornější.",
                image: "placeholder-function-representations",
              },
            ],
            tasks: [
              {
                id: "hs_c5_l1_t1",
                question:
                  "Může mít funkce pro jedno $x$ dvě různé hodnoty $y$?",
                options: [
                  "Ano, běžně.",
                  "Ne, nikdy. To by nebyla funkce.",
                  "Jen když je $x$ kladné.",
                  "Ano, v kvadratické funkci.",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c5_l1_t2",
                question: "Co znamená zápis $f(2) = 5$?",
                options: [
                  "Funkce se jmenuje 2 a výsledek je 5.",
                  "Pro vstup $x=2$ je výstup $y=5$.",
                  "Pro vstup $x=5$ je výstup $y=2$.",
                  "2 krát f se rovná 5.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c5_l1_t3",
                question: "Který z grafů NENÍ grafem funkce?",
                options: [
                  "Přímka",
                  "Parabola (U)",
                  "Kružnice (protože pro jedno $x$ má dva body $y$ - nahoře a dole)",
                  "Vlnovka",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "hs_c5_l1_t4",
                question: "Jak nazýváme proměnnou $x$?",
                options: [
                  "Závislá proměnná (výsledek)",
                  "Nezávislá proměnná (vstup)",
                  "Konstanta",
                  "Parametr",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c5_l1_t5",
                question:
                  "Je přiřazení 'Každému člověku přiřadíme jeho rodné číslo' funkcí?",
                options: [
                  "Ano (každý má jen jedno)",
                  "Ne",
                  "Jen u mužů",
                  "Nelze určit",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Definiční obor a Obor hodnot",
          content: {
            sections: [
              {
                heading: "Povolené vstupy ($D_f$)",
                text: "Definiční obor (značíme $D_f$) je množina všech čísel $x$, která smíme do funkce vložit. Obvykle jsou to všechna reálná čísla $\\mathbb{R}$, kromě 'zakázaných' hodnot. Kdy musíme dávat pozor?\n1. Zlomek: Jmenovatel se nesmí rovnat nule.\n2. Odmocnina: Pod sudou odmocninou nesmí být záporné číslo.\n3. Logaritmus: Argument musí být kladný (uvidíme později).",
                image:
                  "[Image illustrating Domain as a projection of the graph onto the X-axis]",
              },
              {
                heading: "Možné výstupy ($H_f$)",
                text: "Obor hodnot (značíme $H_f$) je množina všech čísel $y$, která nám mohou z funkce vypadnout. \nPředstav si to jako stín, který vrhá graf funkce na osu $y$. Například u funkce $y = x^2$ nikdy nedostaneme záporný výsledek. Stín grafu začíná v nule a jde do nekonečna. $H_f = \\langle 0; \\infty)$.",
                image: "placeholder-range-shadow-y-axis",
              },
            ],
            tasks: [
              {
                id: "hs_c5_l2_t1",
                question: "Urči definiční obor funkce $y = \\frac{1}{x}$.",
                options: [
                  "$\\mathbb{R}$",
                  "$\\mathbb{R} \\setminus \\{0\\}$ (všechna kromě nuly)",
                  "$(0; \\infty)$",
                  "$\\mathbb{Z}$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c5_l2_t2",
                question: "Urči definiční obor funkce $y = \\sqrt{x}$.",
                options: [
                  "$\\mathbb{R}$",
                  "$\\langle 0; \\infty)$ (nezáporná čísla)",
                  "$(-\\infty; 0)$",
                  "$\\mathbb{R} \\setminus \\{0\\}$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c5_l2_t3",
                question: "Co je to obor hodnot?",
                options: [
                  "Množina vstupů $x$",
                  "Množina výstupů $y$",
                  "Graf funkce",
                  "Tabulka",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c5_l2_t4",
                question: "Jaký je obor hodnot konstantní funkce $y = 5$?",
                options: [
                  "$\\mathbb{R}$",
                  "$\\emptyset$",
                  "$\\{5\\}$ (jediná hodnota)",
                  "$\\langle 0; 5 \\rangle$",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "hs_c5_l2_t5",
                question: "Najdi $D_f$ pro $y = \\frac{1}{x-2}$.",
                options: [
                  "$x \\neq 0$",
                  "$x \\neq 2$",
                  "$x \\neq -2$",
                  "Všechna čísla",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Vlastnosti funkcí: Monotónnost",
          content: {
            sections: [
              {
                heading: "Z kopce a do kopce",
                text: "Sledujeme graf zleva doprava (jako když čteme knihu).\n- Rostoucí: Jdeme do kopce. Čím větší $x$, tím větší $y$. ($x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$).\n- Klesající: Jdeme z kopce. Čím větší $x$, tím menší $y$.\n- Konstantní: Jdeme po rovině. $y$ se nemění.",
                image:
                  "[Image illustrating increasing, decreasing and constant function graphs]",
              },
              {
                heading: "Prostá funkce",
                text: "Funkce je prostá, když každou hodnotu $y$ nabývá nanejvýš jednou. Graficky to poznáme tak, že kterákoliv vodorovná čára protne graf maximálně v jednom bodě. \n- Příklad: $y = 2x$ je prostá (nikdy se nevrací).\n- Příklad: $y = x^2$ není prostá (pro $y=4$ existují dva vstupy: $2$ a $-2$).",
                image: "placeholder-injective-function-test",
              },
            ],
            tasks: [
              {
                id: "hs_c5_l3_t1",
                question:
                  "Když graf funkce 'jde do kopce' (zleva doprava), funkce je:",
                options: ["Klesající", "Rostoucí", "Konstantní", "Prostá"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c5_l3_t2",
                question:
                  "Je funkce $y = x^2$ prostá na celém definičním oboru?",
                options: [
                  "Ano",
                  "Ne (hodnoty se opakují pro plus a minus)",
                  "Jen pro kladná čísla",
                  "Nevím",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c5_l3_t3",
                question: "Test vodorovné přímky slouží k určení:",
                options: [
                  "Zda je to funkce",
                  "Zda je funkce prostá",
                  "Definičního oboru",
                  "Sudosti",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c5_l3_t4",
                question: "Funkce $y = -2x$ je:",
                options: ["Rostoucí", "Klesající", "Konstantní", "Nelineární"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c5_l3_t5",
                question: "Může být funkce rostoucí i klesající zároveň?",
                options: [
                  "Ano, na celém oboru",
                  "Ne, ale může růst na jedné části a klesat na jiné (např. parabola)",
                  "Nikdy",
                  "Jen v úterý",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Vlastnosti funkcí: Sudost a Lichost",
          content: {
            sections: [
              {
                heading: "Symetrie podle zrcadla (Sudá)",
                text: "Funkce je sudá, pokud je její graf souměrný podle osy $y$ (svislé osy). Levá strana je zrcadlovým obrazem pravé.\nMatematicky: $f(-x) = f(x)$. (Minus uvnitř 'zmizí').\nTypický příklad: $y = x^2$ nebo $y = \\cos x$.",
                image:
                  "[Image showing an even function symmetric about the Y-axis like y=x^2]",
              },
              {
                heading: "Symetrie podle středu (Lichá)",
                text: "Funkce je lichá, pokud je její graf souměrný podle počátku $[0;0]$. Když graf otočíš o 180 stupňů, vypadá stejně.\nMatematicky: $f(-x) = -f(x)$. (Minus 'vyskkočí' ven).\nTypický příklad: $y = x^3$ nebo $y = \\sin x$.",
                image: "placeholder-odd-function-symmetry",
              },
            ],
            tasks: [
              {
                id: "hs_c5_l4_t1",
                question: "Graf sudé funkce je souměrný podle:",
                options: ["Osy $x$", "Osy $y$", "Počátku", "Přímky $y=x$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c5_l4_t2",
                question: "Funkce $y = x^2$ je:",
                options: ["Sudá", "Lichá", "Ani sudá, ani lichá", "Prostá"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c5_l4_t3",
                question: "Co platí pro lichou funkci?",
                options: [
                  "$f(-x) = f(x)$",
                  "$f(-x) = -f(x)$",
                  "$f(x) > 0$",
                  "Nemá graf",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c5_l4_t4",
                question: "Může být funkce sudá i lichá zároveň?",
                options: [
                  "Ne, nikdy",
                  "Ano, pouze funkce $y = 0$ (osa x)",
                  "Ano, všechny lineární funkce",
                  "Ano, parabola",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "hs_c5_l4_t5",
                question:
                  "Funkce $y = x + 1$ (přímka neprocházející počátkem) je:",
                options: ["Sudá", "Lichá", "Ani sudá, ani lichá", "Obojí"],
                correctAnswer: 2,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Omezenost a Extrémy",
          content: {
            sections: [
              {
                heading: "Podlaha a strop",
                text: "Funkce je omezená zdola, pokud existuje vodorovná čára, pod kterou graf nikdy neklesne (má dno). Např. $y = x^2$ je omezená zdola (nulou).\nFunkce je omezená shora, pokud má strop, který nikdy neprorazí. Např. $y = -x^2$.\nPokud má oboje (jako sinus, který létá jen mezi -1 a 1), je omezená.",
                image:
                  "[Image illustrating bounded functions with floor and ceiling lines]",
              },
              {
                heading: "Maxima a Minima",
                text: "Pokud funkce v nějakém bodě dosáhne nejvyšší hodnoty ze všech, má tam globální maximum (vrchol hory). Pokud dosáhne nejnižší hodnoty, má globální minimum (dno propasti). \nParabola $y = x^2$ má minimum v bodě $[0;0]$, ale nemá maximum (jde do nekonečna).",
                image: "placeholder-function-extrema",
              },
            ],
            tasks: [
              {
                id: "hs_c5_l5_t1",
                question: "Funkce $y = x^2$ je:",
                options: [
                  "Omezená shora",
                  "Omezená zdola",
                  "Omezená (shora i zdola)",
                  "Neomezená",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c5_l5_t2",
                question: "Funkce sinus (hodnoty od -1 do 1) je:",
                options: [
                  "Omezená",
                  "Neomezená",
                  "Jen omezená zdola",
                  "Jen omezená shora",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c5_l5_t3",
                question: "Co je to globální minimum?",
                options: [
                  "Místo, kde funkce klesá",
                  "Nejnižší bod celého grafu",
                  "Průsečík s osou x",
                  "Záporná část grafu",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c5_l5_t4",
                question: "Má přímka $y = x$ nějaké maximum?",
                options: [
                  "Ano, v nekonečnu",
                  "Ne, jde od $-\\infty$ do $+\\infty$",
                  "Ano, v nule",
                  "Ano, v bodě 1",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c5_l5_t5",
                question: "Pokud je funkce omezená, znamená to, že:",
                options: [
                  "Její graf se vejde do vodorovného pásu",
                  "Její graf je krátká úsečka",
                  "Nemá definiční obor",
                  "Je konstantní",
                ],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Lineární a Kvadratické funkce (Do hloubky)",
      description:
        "Nestačí jen umět dosadit body do tabulky. Naučíme se číst 'DNA' funkcí přímo z jejich rovnic. Zjistíme, jak posouvat paraboly, aniž bychom je museli znovu počítat, a pochopíme, co nám o grafu prozradí diskriminant.",
      lessons: [
        {
          title: "Lineární funkce: Směrnice a posuny",
          content: {
            sections: [
              {
                heading: "Směrnice: Jak strmý je kopec?",
                text: "V rovnici přímky $y = ax + b$ hraje hlavní roli číslo $a$, kterému říkáme směrnice. Udává, o kolik se zvedne $y$, když se $x$ posune o 1 doprava.\n- $a = 1$: Sklon $45^{\\circ}$.\n- $a = 2$: Prudký kopec (za 1 krok doprava 2 kroky nahoru).\n- $a = -0,5$: Mírné klesání (za 1 krok doprava půl kroku dolů).\nPokud známe dva body $[x_1; y_1]$ a $[x_2; y_2]$, směrnici vypočítáme jako: $$ a = \\frac{y_2 - y_1}{x_2 - x_1} $$",
                image:
                  "[Image showing slope triangle rise over run on a linear graph]",
              },
              {
                heading: "Absolutní člen b",
                text: "Číslo $b$ je místo, kde graf protíná osu $y$. Je to hodnota funkce pro $x=0$. Pokud je $b=0$, přímka prochází počátkem (přímá úměrnost). Pokud $b=5$, celá přímka se posune o 5 pater nahoru.",
                image: "placeholder-linear-intercepts",
              },
            ],
            tasks: [
              {
                id: "hs_c6_l1_t1",
                question:
                  "Jakou směrnici má přímka procházející body $[0; 0]$ a $[2; 4]$?",
                options: ["$a = 2$", "$a = 0,5$", "$a = 4$", "$a = -2$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c6_l1_t2",
                question:
                  "Co se stane s grafem $y = 2x$, když změníme předpis na $y = 2x - 3$?",
                options: [
                  "Změní se sklon (bude plošší)",
                  "Posune se o 3 dolů po ose y",
                  "Posune se o 3 nahoru",
                  "Otočí se",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c6_l1_t3",
                question: "Která přímka klesá nejrychleji?",
                options: ["$y = -x$", "$y = -0,1x$", "$y = -5x$", "$y = -2x$"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "hs_c6_l1_t4",
                question: "Pokud jsou přímky rovnoběžné, co mají stejné?",
                options: [
                  "Absolutní člen $b$",
                  "Směrnici $a$",
                  "Průsečík s osou x",
                  "Barvu",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c6_l1_t5",
                question:
                  "Najdi předpis přímky se směrnicí 3, která prochází bodem $[0; 2]$.",
                options: [
                  "$y = 2x + 3$",
                  "$y = 3x + 2$",
                  "$y = 3x - 2$",
                  "$y = x + 5$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Kvadratická funkce: Vrcholový tvar",
          content: {
            sections: [
              {
                heading: "Kde má parabola nos?",
                text: "Obecná rovnice $y = ax^2 + bx + c$ nám o poloze paraboly moc neřekne. Mnohem lepší je vrcholový tvar: $$ y = a(x - m)^2 + n $$ Z něj okamžitě vidíme souřadnice vrcholu $V[m; n]$. \n- Pozor na znaménko v závorce! $(x - 3)^2$ znamená posun doprava o 3 (m=3).\n- Číslo $n$ posouvá graf nahoru/dolů.",
                image:
                  "[Image illustrating parabola shift from origin based on vertex form]",
              },
              {
                heading: "Doplnění na čtverec",
                text: "Jak převést $y = x^2 + 6x + 5$ na vrcholový tvar? Použijeme fintu 'doplnění na čtverec' (podle vzorce $(a+b)^2$).\n1. Vezmeme $x^2 + 6x$. To vypadá jako začátek $(x+3)^2$, což je $x^2 + 6x + 9$.\n2. Aby se rovnost nezměnila, musíme tu devítku zase odečíst: $(x+3)^2 - 9$.\n3. Přidáme původní pětku: $(x+3)^2 - 9 + 5$.\n4. Výsledek: $y = (x+3)^2 - 4$. Vrchol je $[-3; -4]$.",
                image: "placeholder-completing-the-square-steps",
              },
            ],
            tasks: [
              {
                id: "hs_c6_l2_t1",
                question: "Kde má vrchol parabola $y = (x - 2)^2 + 5$?",
                options: ["$[2; 5]$", "$[-2; 5]$", "$[2; -5]$", "$[-2; -5]$"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c6_l2_t2",
                question: "Která parabola je 'smutná' (otevřená dolů)?",
                options: [
                  "$y = 2(x-1)^2$",
                  "$y = x^2 - 5$",
                  "$y = -(x+3)^2 + 1$",
                  "$y = 0,5x^2$",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "hs_c6_l2_t3",
                question: "Jaký posun způsobí výraz $(x + 4)^2$?",
                options: [
                  "O 4 nahoru",
                  "O 4 doprava",
                  "O 4 doleva",
                  "O 4 dolů",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "hs_c6_l2_t4",
                question: "Doplněním na čtverec výrazu $x^2 - 4x$ získáme:",
                options: [
                  "$(x-2)^2 - 4$",
                  "$(x-2)^2 + 4$",
                  "$(x-4)^2 - 16$",
                  "$(x+2)^2 - 4$",
                ],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "hs_c6_l2_t5",
                question: "Jaký vliv má koeficient $a$ v rovnici $y = ax^2$?",
                options: [
                  "Posouvá vrchol",
                  "Určuje 'tloušťku' (otevření) paraboly a směr",
                  "Určuje definiční obor",
                  "Nic nedělá",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Průsečíky s osami",
          content: {
            sections: [
              {
                heading: "Průsečík s osou y",
                text: "To je ten nejjednodušší bod. Leží tam, kde $x = 0$. Stačí dosadit nulu do rovnice. Pro $y = 2x^2 - 3x + 7$ je to $y = 7$. Graf protíná osu $y$ v bodě $[0; 7]$. Vždy je to ten absolutní člen na konci ($c$).",
                image: "[Image showing y-intercept of a parabola]",
              },
              {
                heading: "Průsečíky s osou x (Kořeny)",
                text: "Tady leží sranda. Hledáme body, kde $y = 0$. To znamená vyřešit kvadratickou rovnici $ax^2 + bx + c = 0$. Zde vstupuje do hry diskriminant:\n- $D > 0$: Parabola protne osu $x$ dvakrát (dva průsečíky).\n- $D = 0$: Parabola se osy $x$ jen dotkne (vrcholem).\n- $D < 0$: Parabola 'létá' nad (nebo pod) osou $x$ a neprotne ji.",
                image: "placeholder-parabola-discriminant-roots",
              },
            ],
            tasks: [
              {
                id: "hs_c6_l3_t1",
                question: "Kde protne $y = x^2 - 5x + 6$ osu $y$?",
                options: ["$y = -5$", "$y = 6$", "$y = 0$", "$y = 1$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c6_l3_t2",
                question: "Co znamená, když vyjde diskriminant záporný?",
                options: [
                  "Graf protíná osu x ve dvou bodech",
                  "Graf se dotýká osy x",
                  "Graf neprotíná osu x",
                  "Graf neexistuje",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "hs_c6_l3_t3",
                question:
                  "Najdi průsečíky s osou x pro $y = (x-1)(x+2)$. (Nápověda: Kdy je to nula?)",
                options: ["$1$ a $-2$", "$-1$ a $2$", "$1$ a $2$", "$0$ a $2$"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c6_l3_t4",
                question: "Kolik průsečíků s osou x má funkce $y = x^2 + 1$?",
                options: [
                  "Dva",
                  "Jeden",
                  "Žádný (je celá nad osou)",
                  "Nekonečně",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "hs_c6_l3_t5",
                question: "Vrchol paraboly $y = x^2$ je zároveň:",
                options: [
                  "Její jediný průsečík s osou x",
                  "Průsečík s osou y",
                  "Počátek soustavy souřadnic",
                  "Všechno z uvedeného",
                ],
                correctAnswer: 3,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Funkce s absolutní hodnotou",
          content: {
            sections: [
              {
                heading: "Graf do V",
                text: "Funkce $y = |x|$ je matkou všech 'lomených' funkcí. \n- Pro kladná čísla se chová jako $y = x$ (osa 1. kvadrantu).\n- Pro záporná čísla dělá z minusu plus ($y = -x$).\nVýsledkem je graf ve tvaru písmene V s špičkou v počátku $[0;0]$.",
                image: "",
              },
              {
                heading: "Posouvání Véčka",
                text: "Funguje to úplně stejně jako u parabol!\n$y = |x - 2| + 1$\n- $-2$ uvnitř absolutní hodnoty posouvá špičku o 2 doprava.\n- $+1$ vně absolutní hodnoty posouvá špičku o 1 nahoru.\nŠpička (vrchol) je tedy v bodě $[2; 1]$.",
                image: "placeholder-absolute-value-shift",
              },
            ],
            tasks: [
              {
                id: "hs_c6_l4_t1",
                question: "Jaký tvar má graf funkce $y = |x|$?",
                options: ["Přímka", "Písmeno U", "Písmeno V", "Kružnice"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "hs_c6_l4_t2",
                question: "Kde má 'špičku' funkce $y = |x + 3|$?",
                options: ["$[3; 0]$", "$[-3; 0]$", "$[0; 3]$", "$[0; -3]$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c6_l4_t3",
                question:
                  "Funkce $y = -|x|$ (minus před absolutní hodnotou) vypadá jako:",
                options: ["V (normální)", "Střecha (otočené V)", "U", "Z"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c6_l4_t4",
                question: "Která funkce má vrchol v bodě $[1; 2]$?",
                options: [
                  "$y = |x - 1| + 2$",
                  "$y = |x + 1| + 2$",
                  "$y = |x - 1| - 2$",
                  "$y = (x-1)^2$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c6_l4_t5",
                question:
                  "Může mít funkce $y = |x|$ záporné hodnoty ($y < 0$)?",
                options: [
                  "Ano",
                  "Ne, absolutní hodnota je vždy nezáporná",
                  "Jen pro záporná x",
                  "Občas",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Mocninné a lomené funkce",
      description:
        "Opouštíme svět přímek a parabol. Podíváme se na funkce, které se lámou, vybuchují do nekonečna nebo tvoří sopky. Naučíme se najít jejich skrytý střed a 'elektrické ohradníky' (asymptoty), kterých se graf nesmí dotknout.",
      lessons: [
        {
          title: "Mocninné funkce s přirozeným exponentem",
          content: {
            sections: [
              {
                heading: "Sudý vs. Lichý svět",
                text: "Funkce $y = x^n$ se chovají podle toho, zda je $n$ sudé nebo liché.\n1. Sudé $n$ ($x^2, x^4, x^6$): Grafem je parabola (nebo jí podobná křivka). Je to 'miska', která je vždy nezáporná (kromě nuly). Graf je souměrný podle osy $y$. Čím větší exponent, tím je miska hranatější (u dna plošší, na krajích strmější).\n2. Liché $n$ ($x^3, x^5, x^7$): Graf je esíčko (prohnutá křivka). V záporných číslech jde dolů, v kladných nahoru. Je středově souměrný.",
                image:
                  "[Image comparing graphs of even power functions x^2, x^4 vs odd power functions x^3, x^5]",
              },
              {
                heading: "Závod mezi nulou a jedničkou",
                text: "Zajímavé věci se dějí v intervalu $(0; 1)$. Zkus umocnit $0,1^2 = 0,01$. A $0,1^3 = 0,001$. Tady platí paradox: Čím vyšší mocnina, tím menší číslo! Grafy s vyšším exponentem se v tomto úseku více lepí k ose $x$.",
                image: "placeholder-power-functions-interval-0-1",
              },
            ],
            tasks: [
              {
                id: "hs_c7_l1_t1",
                question: "Jaký tvar má graf funkce $y = x^4$?",
                options: [
                  "Jako písmeno U (parabola)",
                  "Jako písmeno S (esíčko)",
                  "Jako písmeno V",
                  "Hyperbola",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c7_l1_t2",
                question: "Která funkce je lichá (souměrná podle počátku)?",
                options: [
                  "$y = x^2$",
                  "$y = x^5$",
                  "$y = x^4 + 1$",
                  "$y = |x|$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c7_l1_t3",
                question: "Které číslo je nejmenší?",
                options: ["$0,5$", "$0,5^2$", "$0,5^3$", "$0,5^{10}$"],
                correctAnswer: 3,
                xp: 20,
              },
              {
                id: "hs_c7_l1_t4",
                question: "Prochází všechny grafy typu $y=x^n$ bodem $[1; 1]$?",
                options: [
                  "Ano (1 na cokoliv je 1)",
                  "Ne",
                  "Jen sudé",
                  "Jen liché",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c7_l1_t5",
                question: "Pokud $f(x) = x^6$, jakou hodnotu má $f(-2)$?",
                options: ["$-64$", "$64$", "$12$", "$-12$"],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Mocninné funkce se záporným exponentem",
          content: {
            sections: [
              {
                heading: "Hyperbola a Sopka",
                text: "Co když je exponent záporný celé číslo? $y = x^{-n}$ je vlastně $y = \\frac{1}{x^n}$. Opět rozhoduje parita:\n1. Liché $n$ ($x^{-1}, x^{-3}$): Klasická hyperbola. Jedna větev v I. kvadrantu, druhá ve III. kvadrantu.\n2. Sudé $n$ ($x^{-2}, x^{-4}$): Graf připomíná sopku (nebo komín). Obě větve jdou nahoru do plus nekonečna. Proč? Protože sudá mocnina zruší minus ve jmenovateli, takže výsledek je vždy kladný.",
                image:
                  "[Image comparing graph of y=x^-1 (hyperbola) and y=x^-2 (volcano shape)]",
              },
              {
                heading: "Definiční obor",
                text: "U všech těchto funkcí platí přísný zákaz: $x$ se nesmí rovnat nule! Graf se k ose $y$ nekonečně přibližuje, ale nikdy se jí nedotkne. Ose $y$ říkáme vertikální asymptota.",
                image: "placeholder-vertical-asymptote",
              },
            ],
            tasks: [
              {
                id: "hs_c7_l2_t1",
                question: "Jak vypadá graf funkce $y = x^{-2}$ ($y = 1/x^2$)?",
                options: [
                  "Dvě větve proti sobě (hyperbola)",
                  "Dvě větve vedle sebe jdoucí nahoru (sopka)",
                  "Parabola",
                  "Přímka",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c7_l2_t2",
                question: "Jaký je definiční obor funkce $y = x^{-3}$?",
                options: [
                  "$\\mathbb{R}$",
                  "$\\mathbb{R} \\setminus \\{0\\}$",
                  "$(0; \\infty)$",
                  "$\\langle 0; \\infty)$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c7_l2_t3",
                question:
                  "Která funkce má graf pouze v 1. a 2. kvadrantu (vždy kladné y)?",
                options: [
                  "$y = x^{-1}$",
                  "$y = x^{-2}$",
                  "$y = x^3$",
                  "$y = x$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c7_l2_t4",
                question:
                  "Co se děje s hodnotou $1/x^2$, když se $x$ blíží k nule?",
                options: [
                  "Blíží se k 0",
                  "Blíží se k 1",
                  "Roste do nekonečna",
                  "Klesá do minus nekonečna",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "hs_c7_l2_t5",
                question: "Je funkce $y = x^{-1}$ lichá?",
                options: [
                  "Ano (graf je souměrný podle počátku)",
                  "Ne (graf je souměrný podle osy y)",
                  "Ne, není to funkce",
                  "Jen pro kladná x",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Lineární lomená funkce: Asymptoty",
          content: {
            sections: [
              {
                heading: "Elektrické ohradníky",
                text: "Lineární lomená funkce má tvar $y = \\frac{k}{x - m} + n$. Jejím grafem je hyperbola, která má dvě asymptoty – přímky, kterých se graf nikdy nedotkne.\n1. Svislá asymptota: Je v bodě, kde je jmenovatel nula ($x = m$). Tudy graf neprojde, protože nulou nelze dělit.\n2. Vodorovná asymptota: Je ve výšce posunu ($y = n$). K této hodnotě se funkce blíží v nekonečnu.",
                image: "",
              },
              {
                heading: "Střed hyperboly",
                text: "Průsečík asymptot tvoří pomyslný střed hyperboly $S[m; n]$. Když znáš střed, snadno načrtneš graf. Je to jako posunutý počátek souřadnic.",
                image: "placeholder-hyperbola-center",
              },
            ],
            tasks: [
              {
                id: "hs_c7_l3_t1",
                question: "Co je asymptota?",
                options: [
                  "Přímka, které se graf dotkne",
                  "Přímka, ke které se graf blíží, ale nedotkne se jí",
                  "Střed grafu",
                  "Osa x",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c7_l3_t2",
                question:
                  "Kde má svislou asymptotu funkce $y = \\frac{1}{x - 3}$?",
                options: ["$x = 0$", "$x = 3$", "$x = -3$", "$y = 3$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c7_l3_t3",
                question:
                  "Kde má vodorovnou asymptotu funkce $y = \\frac{1}{x} + 2$?",
                options: ["$y = 0$", "$y = 2$", "$y = -2$", "$x = 2$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c7_l3_t4",
                question: "Urči střed hyperboly $y = \\frac{1}{x + 1} - 4$.",
                options: [
                  "$S[1; 4]$",
                  "$S[-1; -4]$",
                  "$S[1; -4]$",
                  "$S[-1; 4]$",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "hs_c7_l3_t5",
                question: "Vliv parametru $k$ ve funkci $y = k/x$:",
                options: [
                  "Posouvá graf",
                  "Určuje v kterých kvadrantech hyperbola leží a jak je 'vzdálená' od středu",
                  "Určuje asymptoty",
                  "Nic nemění",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Obecný tvar lomené funkce",
          content: {
            sections: [
              {
                heading: "Jak najít střed?",
                text: "Často dostaneme funkci v obecném tvaru, kde je zlomek 'nerozdělený', např. $y = \\frac{2x + 5}{x + 1}$. Z toho střed nevidíme. Musíme výraz upravit na tvar s posunem. \nMetoda: Vydělíme čitatele jmenovatelem (nebo si čitatel chytře upravíme). \n$$ \\frac{2x + 5}{x + 1} = \\frac{2(x + 1) + 3}{x + 1} = 2 + \\frac{3}{x + 1} $$ \nTeď už vidíme střed $S[-1; 2]$.",
                image:
                  "[Image demonstrating algebraic division of (2x+5) by (x+1) to rewrite the function]",
              },
              {
                heading: "Rychlý vzorec",
                text: "Pro funkci $y = \\frac{ax + b}{cx + d}$ existuje trik. \n- Svislá asymptota (nulový bod jmenovatele): $x = -d/c$.\n- Vodorovná asymptota (podíl koeficientů u x): $y = a/c$.\nStřed je tedy $S[-d/c; a/c]$.",
                image: "placeholder-rational-function-formula",
              },
            ],
            tasks: [
              {
                id: "hs_c7_l4_t1",
                question: "Který tvar je vhodný pro kreslení grafu?",
                options: [
                  "Obecný ($y = \\frac{ax+b}{cx+d}$)",
                  "Středový/Posunutý ($y = \\frac{k}{x-m} + n$)",
                  "Součinový",
                  "Žádný",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c7_l4_t2",
                question:
                  "Najdi vodorovnou asymptotu pro $y = \\frac{3x - 1}{x + 2}$.",
                options: [
                  "$y = 1$",
                  "$y = 3$ (podíl 3/1)",
                  "$y = -1$",
                  "$y = 0$",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "hs_c7_l4_t3",
                question:
                  "Najdi nulový bod jmenovatele (svislou asymptotu) pro $y = \\frac{x}{2x - 4}$.",
                options: ["$x = 4$", "$x = 2$", "$x = 0$", "$x = -2$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c7_l4_t4",
                question: "Uprav $\\frac{x + 3}{x + 1}$ na středový tvar.",
                options: [
                  "$1 + \\frac{2}{x+1}$",
                  "$1 + \\frac{3}{x+1}$",
                  "$x + \\frac{3}{x+1}$",
                  "$1 - \\frac{2}{x+1}$",
                ],
                correctAnswer: 0,
                xp: 30,
              },
              {
                id: "hs_c7_l4_t5",
                question:
                  "Co se stane, když se v předpisu krátí $x$ (např. $\\frac{2x+2}{x+1}$)?",
                options: [
                  "Je to hyperbola",
                  "Je to přímka s 'dírou' v definičním oboru (konstantní funkce)",
                  "Je to parabola",
                  "Je to nula",
                ],
                correctAnswer: 1,
                xp: 25,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Exponenciální funkce a rovnice",
      description:
        "Rychleji to nejde. Seznámíme se s funkcemi, které popisují explozivní růst bakterií, šíření virů i úroky v bance. Zjistíme, co je to tajemné číslo 'e', a naučíme se řešit rovnice, kde je neznámá 'nahoře' v exponentu.",
      lessons: [
        {
          title: "Exponenciální funkce: Raketový růst",
          content: {
            sections: [
              {
                heading: "Neznámá v exponentu",
                text: "Doteď jsme měli $x$ dole ($x^2$). Teď se $x$ stěhuje nahoru: $y = a^x$. Tomu říkáme exponenciální funkce. Základ $a$ musí být kladné číslo různé od 1. \nProč je to jiné? \n- $x^2$: Když $x=10$, výsledek je $100$.\n- $2^x$: Když $x=10$, výsledek je $1024$. \nExponenciála roste mnohem rychleji než jakákoliv mocnina. Je to model pro množení buněk nebo řetězové reakce.",
                image:
                  "[Image comparing graphs of linear x, quadratic x^2 and exponential 2^x functions]",
              },
              {
                heading: "Růst vs. Pokles",
                text: "Tvar grafu závisí na základu $a$:\n1. $a > 1$ (Růst): Funkce prudce stoupá. Např. $y = 2^x$. Čím větší základ, tím strmější růst.\n2. $0 < a < 1$ (Pokles): Funkce klesá k nule. Např. $y = (0,5)^x$. To popisuje třeba radioaktivní rozpad nebo chladnutí kávy.\nGraf vždy prochází bodem $[0; 1]$, protože $a^0 = 1$.",
                image: "[Image showing exponential growth vs decay graphs]",
              },
            ],
            tasks: [
              {
                id: "hs_c8_l1_t1",
                question:
                  "Kterým bodem prochází graf každé základní exponenciální funkce $y = a^x$?",
                options: ["$[0; 0]$", "$[1; 1]$", "$[0; 1]$", "$[1; 0]$"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "hs_c8_l1_t2",
                question: "Která funkce je rostoucí?",
                options: [
                  "$y = 0,5^x$",
                  "$y = (\\frac{1}{3})^x$",
                  "$y = 1,2^x$",
                  "$y = 0,99^x$",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "hs_c8_l1_t3",
                question: "Co se děje s funkcí $y = 2^x$ pro záporná $x$?",
                options: [
                  "Jde do záporných hodnot",
                  "Blíží se k nule (kladné zlomky)",
                  "Roste",
                  "Je nedefinovaná",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c8_l1_t4",
                question: "Proč nemůže být základ $a = 1$?",
                options: [
                  "Protože $1^x = 1$ je konstantní funkce (přímka)",
                  "Protože je to moc složité",
                  "Protože nula nejde umocnit",
                  "Může být, je to exponenciála",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c8_l1_t5",
                question: "Jaký je obor hodnot funkce $y = 2^x$?",
                options: [
                  "$\\mathbb{R}$",
                  "$(0; \\infty)$ (jen kladná čísla)",
                  "$\\langle 0; \\infty)$",
                  "$(1; \\infty)$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Eulerovo číslo e",
          content: {
            sections: [
              {
                heading: "Přírodní konstanta",
                text: "Existuje jedno číslo, které je pro růst stejně důležité jako $\\pi$ pro kruhy. Je to Eulerovo číslo $e$. Jeho hodnota je přibližně $2,718$. Funkce $y = e^x$ se nazývá přirozená exponenciála. \nProč je tak slavná? Popisuje děje v přírodě nejdokonaleji. Derivace (rychlost změny) funkce $e^x$ je znovu $e^x$. Roste tak rychle, jaká je její hodnota.",
                image: "",
              },
              {
                heading: "Kde se vzalo?",
                text: "Vzniklo při zkoumání složeného úročení. Kdyby ti banka připisovala úroky ne jednou ročně, ale každou sekundu (spojitě), tvé peníze by rostly podle čísla $e$.",
                image: "placeholder-compound-interest-limit",
              },
            ],
            tasks: [
              {
                id: "hs_c8_l2_t1",
                question: "Jaká je přibližná hodnota čísla $e$?",
                options: ["$3,14$", "$2,71$", "$1,61$", "$1,41$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c8_l2_t2",
                question: "Je funkce $y = e^x$ rostoucí nebo klesající?",
                options: [
                  "Rostoucí (protože $e > 1$)",
                  "Klesající",
                  "Konstantní",
                  "Vlnitá",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c8_l2_t3",
                question: "Jak se nazývá funkce $y = e^x$?",
                options: [
                  "Obecná exponenciála",
                  "Přirozená exponenciální funkce",
                  "Eulerova přímka",
                  "Logaritmus",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c8_l2_t4",
                question: "Které číslo je iracionální (má nekonečný rozvoj)?",
                options: [
                  "Jen $\\pi$",
                  "Jen $e$",
                  "Obě ($\\pi$ i $e$)",
                  "Ani jedno",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "hs_c8_l2_t5",
                question: "K čemu se využívá číslo $e$?",
                options: [
                  "Výpočet obvodu kruhu",
                  "Popis přirozeného růstu a rozpadu",
                  "Výpočet obsahu čtverce",
                  "V geometrii trojúhelníku",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Exponenciální rovnice: Společný základ",
          content: {
            sections: [
              {
                heading: "Porovnávání exponentů",
                text: "Jak vyřešit rovnici $2^x = 8$? \nKlíčem je převést obě strany na stejný základ. Víme, že $8 = 2^3$. \nRovnice je tedy $2^x = 2^3$. \nProtože základ je stejný, musí se rovnat i exponenty (funkce je prostá). \nVýsledek: $x = 3$.",
                image:
                  "[Image illustrating solving 2^x = 8 by equating exponents]",
              },
              {
                heading: "Hra s mocninami",
                text: "Složitější příklad: $4^{x+1} = \\frac{1}{64}$.\n1. Převedeme na základ 4 (nebo 2). $64 = 4^3$. \n2. Zlomek znamená záporný exponent: $\\frac{1}{64} = 4^{-3}$.\n3. Rovnice: $4^{x+1} = 4^{-3}$.\n4. Porovnáme exponenty: $x + 1 = -3 \\Rightarrow x = -4$.",
                image: "placeholder-exponential-equation-steps",
              },
            ],
            tasks: [
              {
                id: "hs_c8_l3_t1",
                question: "Vyřeš: $3^x = 81$",
                options: ["$3$", "$4$", "$9$", "$27$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c8_l3_t2",
                question: "Vyřeš: $2^x = \\frac{1}{2}$",
                options: ["$1$", "$-1$", "$0$", "$0,5$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c8_l3_t3",
                question: "Jak zapíšeš $9^x$ pomocí základu 3?",
                options: ["$3^{2x}$", "$3^x$", "$3^{x+2}$", "$(3x)^2$"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c8_l3_t4",
                question: "Vyřeš: $5^{2x} = 25$",
                options: ["$1$", "$2$", "$5$", "$0$"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c8_l3_t5",
                question: "Platí implikace: $a^x = a^y \\Rightarrow x = y$?",
                options: [
                  "Ano (pro $a>0, a\\neq1$)",
                  "Ne, nikdy",
                  "Jen pro sudé exponenty",
                  "Nelze říct",
                ],
                correctAnswer: 0,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Exponenciální rovnice: Substituce",
          content: {
            sections: [
              {
                heading: "Když sčítáme mocniny",
                text: "Rovnici $4^x + 2^x - 6 = 0$ nelze vyřešit porovnáním exponentů, protože je tam plus. Všimni si ale, že $4^x = (2^2)^x = (2^x)^2$. \nMáme tam $2^x$ i jeho druhou mocninu. To volá po substituci! \nZavedeme novou neznámou $y = 2^x$. \nRovnice se změní na kvadratickou: $y^2 + y - 6 = 0$.",
                image:
                  "[Image showing substitution process converting exponential to quadratic equation]",
              },
              {
                heading: "Návrat k x",
                text: "Kvadratická rovnice $y^2 + y - 6 = 0$ má kořeny $y_1 = 2$ a $y_2 = -3$. \nMusíme se vrátit k původní neznámé $x$ (dosadit zpět $2^x$ za $y$):\n1. $2^x = 2 \\Rightarrow x = 1$.\n2. $2^x = -3 \\Rightarrow$ Nemá řešení (mocnina je vždy kladná!).\nJediné řešení je $x = 1$.",
                image: "placeholder-substitution-back-step",
              },
            ],
            tasks: [
              {
                id: "hs_c8_l4_t1",
                question: "Kdy používáme substituci?",
                options: [
                  "Když je v rovnici součet/rozdíl různých mocnin stejného základu",
                  "Když je rovnice moc jednoduchá",
                  "Když máme jen násobení",
                  "Vždy",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c8_l4_t2",
                question: "Jak nahradíš $9^x$, pokud $y = 3^x$?",
                options: ["$3y$", "$y^2$", "$2y$", "$y^3$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c8_l4_t3",
                question: "Vyřeš rovnici $2^x = -4$.",
                options: ["$-2$", "Nemá řešení", "$2$", "$0$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c8_l4_t4",
                question: "Substituce převede exponenciální rovnici často na:",
                options: [
                  "Lineární nebo kvadratickou rovnici",
                  "Logaritmickou rovnici",
                  "Nerovnici",
                  "Zlomek",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c8_l4_t5",
                question: "Proč $2^x = -3$ nemá řešení?",
                options: [
                  "Obor hodnot exponenciály jsou jen kladná čísla",
                  "Protože 3 není mocnina 2",
                  "Protože je tam minus",
                  "Má řešení, jen ho neumíme najít",
                ],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Aplikace: Růst a rozpad",
          content: {
            sections: [
              {
                heading: "Bakterie a poločas rozpadu",
                text: "Vzorec pro exponenciální růst/rozpad je: $$ N(t) = N_0 \\cdot a^t $$ \n- $N(t)$: Množství v čase $t$.\n- $N_0$: Počáteční množství.\n- $a$: Rychlost růstu.\nPříklad: Bakterie se dělí každou hodinu ($a=2$). Na začátku je 1 bakterie ($N_0=1$). Za 10 hodin jich bude $1 \\cdot 2^{10} = 1024$. \nU rozpadu je $a < 1$. Poločas rozpadu znamená, že za určitý čas zbude polovina látky.",
                image:
                  "[Image illustrating bacteria division doubling every step]",
              },
              {
                heading: "Fyzika a biologie",
                text: "Exponenciální rovnice nejsou jen teorie. Používají se pro datování archeologických nálezů (uhlík C14), předpovídání epidemií nebo výpočet, kdy vychladne čaj. Vždy jde o proces, kde rychlost změny závisí na aktuálním množství.",
                image: "placeholder-carbon-dating-curve",
              },
            ],
            tasks: [
              {
                id: "hs_c8_l5_t1",
                question: "Vzorec $N(t) = 100 \\cdot 2^t$ popisuje:",
                options: [
                  "Růst (zdvojnásobování)",
                  "Pokles (polovina)",
                  "Konstantní stav",
                  "Přímou úměrnost",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c8_l5_t2",
                question:
                  "Máš 1000 bakterií, každou hodinu jich 10 % uhyne. Základ $a$ bude:",
                options: ["$0,1$", "$1,1$", "$0,9$ (zůstane 90 %)", "$-0,1$"],
                correctAnswer: 2,
                xp: 25,
              },
              {
                id: "hs_c8_l5_t3",
                question: "Co znamená $N_0$?",
                options: [
                  "Konečný stav",
                  "Počáteční stav (v čase 0)",
                  "Nulový bod",
                  "Rychlost",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c8_l5_t4",
                question:
                  "Poločas rozpadu je 1 rok. Mám 100 g látky. Kolik zbude za 2 roky?",
                options: ["50 g", "0 g", "25 g (polovina z poloviny)", "75 g"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "hs_c8_l5_t5",
                question: "Který jev NENÍ exponenciální?",
                options: [
                  "Radioaktivní rozpad",
                  "Úroky v bance",
                  "Rovnoměrný pohyb auta ($s=vt$)",
                  "Množení virů",
                ],
                correctAnswer: 2,
                xp: 15,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Logaritmické funkce a rovnice",
      description:
        "Logaritmus není sprosté slovo. Je to záchranné lano, které nám pomůže sundat neznámou z exponentu dolů na zem. Naučíme se, jak logaritmy fungují, jaká mají kouzelná pravidla pro zjednodušování výpočtů a proč je $\\ln$ nejdůležitější tlačítko na kalkulačce.",
      lessons: [
        {
          title: "Co je to logaritmus?",
          content: {
            sections: [
              {
                heading: "Hledání ztraceného exponentu",
                text: "Už umíme vyřešit $2^3 = x$ (to je $8$). Umíme i $x^3 = 8$ (to je $2$). Ale co rovnice $2^x = 8$? Hledáme exponent. Víme, že je to $3$. Ale co $2^x = 10$? To z hlavy nedáme. Potřebujeme funkci, která se zeptá: 'Na kolikátou musím umocnit základ 2, abych dostal 10?'\nTato funkce se jmenuje logaritmus. Zapisujeme: $$ x = \\log_2 10 $$",
                image:
                  "[Image showing the relationship between exponential form a^y=x and logarithmic form log_a(x)=y]",
              },
              {
                heading: "Definice",
                text: "Logaritmus o základu $a$ z čísla $x$ je exponent $y$, na který musíme umocnit základ $a$, abychom dostali $x$. $$ \\log_a x = y \\Leftrightarrow a^y = x $$ \nPodmínky jsou přísné: Základ $a$ musí být kladný a různý od 1 ($a > 0, a \\neq 1$). A logaritmovat můžeme jen kladná čísla ($x > 0$). Záporná čísla logaritmus nemají!",
                image: "placeholder-logarithm-definition-cycle",
              },
            ],
            tasks: [
              {
                id: "hs_c9_l1_t1",
                question:
                  "Vypočítej $\\log_2 8$. (Na kolikátou umocníš 2, aby vyšlo 8?)",
                options: ["$3$", "$4$", "$2$", "$8$"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c9_l1_t2",
                question: "Přepiš rovnici $5^2 = 25$ pomocí logaritmu.",
                options: [
                  "$\\log_2 25 = 5$",
                  "$\\log_5 25 = 2$",
                  "$\\log_{25} 5 = 2$",
                  "$\\log_5 2 = 25$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c9_l1_t3",
                question: "Existuje $\\log_2 (-4)$?",
                options: [
                  "Ano, je to -2",
                  "Ne, logaritmovat lze jen kladná čísla",
                  "Ano, je to 0,5",
                  "Jen v komplexních číslech",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c9_l1_t4",
                question: "Kolik je $\\log_{10} 1000$?",
                options: ["$10$", "$100$", "$3$", "$4$"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "hs_c9_l1_t5",
                question: "Kolik je $\\log_7 1$?",
                options: ["$1$", "$0$ (protože $7^0 = 1$)", "$7$", "$-1$"],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Logaritmická funkce: Inverze k exponenciále",
          content: {
            sections: [
              {
                heading: "Zrcadlový obraz",
                text: "Logaritmická funkce $y = \\log_a x$ je inverzní k exponenciální funkci $y = a^x$. Grafy jsou souměrné podle osy 1. a 3. kvadrantu ($y=x$). \n- Exponenciála rostla strašně rychle do výšky. \n- Logaritmus roste strašně pomalu (jako by ho někdo připlácl k zemi), ale roste do nekonečna. Prochází bodem $[1; 0]$.",
                image:
                  "[Image comparing graph of 2^x and log_2(x) showing symmetry across y=x]",
              },
              {
                heading: "Definiční obor a Asymptota",
                text: "Graf se nekonečně přibližuje k ose $y$, ale nikdy se jí nedotkne. Osa $y$ je svislá asymptota. \n- Definiční obor ($D_f$): $(0; \\infty)$. Do logaritmu smíme sypat jen kladná čísla.\n- Obor hodnot ($H_f$): $\\mathbb{R}$. Výsledek logaritmu může být cokoliv (i záporné číslo, pokud logaritmujeme zlomek).",
                image: "placeholder-log-graph-domain",
              },
            ],
            tasks: [
              {
                id: "hs_c9_l2_t1",
                question:
                  "Kterým bodem vždy prochází graf funkce $y = \\log_a x$?",
                options: ["$[0; 1]$", "$[1; 0]$", "$[0; 0]$", "$[1; 1]$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c9_l2_t2",
                question: "Je funkce $y = \\log_2 x$ rostoucí nebo klesající?",
                options: [
                  "Rostoucí (základ > 1)",
                  "Klesající",
                  "Konstantní",
                  "Vlnitá",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c9_l2_t3",
                question: "Co se děje s funkcí $y = \\log_{0,5} x$?",
                options: [
                  "Roste",
                  "Klesá (základ je mezi 0 a 1)",
                  "Je stejná jako $\\log_2 x$",
                  "Neexistuje",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c9_l2_t4",
                question: "Jaký je definiční obor $\\log(x - 2)$?",
                options: [
                  "$x > 0$",
                  "$x > 2$ (závorka musí být kladná)",
                  "$x \\neq 2$",
                  "$\\mathbb{R}$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c9_l2_t5",
                question:
                  "Může být výsledek logaritmu záporný (např. $\\log_2 0,5$)?",
                options: [
                  "Ne, nikdy",
                  "Ano (je to -1)",
                  "Jen u přirozeného logaritmu",
                  "Jen v úterý",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Věty o logaritmech",
          content: {
            sections: [
              {
                heading: "Kalkulačka 17. století",
                text: "Logaritmy byly vymyšleny, aby zjednodušily násobení velkých čísel na sčítání. Platí tři magická pravidla:\n1. Logaritmus součinu: $\\log_a (x \\cdot y) = \\log_a x + \\log_a y$\n2. Logaritmus podílu: $\\log_a (\\frac{x}{y}) = \\log_a x - \\log_a y$\nPozor! $\\log(x+y)$ nejde roztrhnout! Logaritmus součtu nemá vzorec.",
                image:
                  "[Image illustrating log rules: product to sum, quotient to difference]",
              },
              {
                heading: "Pravidlo batohu (Mocnina)",
                text: "Třetí pravidlo je nejužitečnější. Logaritmus umí sundat exponent 'na zem' před sebe. \n$$ \\log_a (x^n) = n \\cdot \\log_a x $$\nDíky tomuto pravidlu dokážeme vyřešit rovnice jako $2^x = 10$.",
                image: "placeholder-log-power-rule",
              },
            ],
            tasks: [
              {
                id: "hs_c9_l3_t1",
                question: "Jak zjednodušíš $\\log 5 + \\log 2$?",
                options: [
                  "$\\log 7$",
                  "$\\log 10$ (což je 1)",
                  "$\\log 2,5$",
                  "$\\log 52$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c9_l3_t2",
                question: "Rozlož výraz $\\log(x^3)$.",
                options: [
                  "$\\log x \\cdot \\log 3$",
                  "$3 \\cdot \\log x$",
                  "$(\\log x)^3$",
                  "$x \\cdot \\log 3$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c9_l3_t3",
                question: "Čemu se rovná $\\log_2 4 - \\log_2 2$?",
                options: [
                  "$\\log_2 2$ (což je 1)",
                  "$\\log_2 8$",
                  "$\\log_2 6$",
                  "$0$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c9_l3_t4",
                question: "Platí $\\log(a+b) = \\log a + \\log b$?",
                options: [
                  "Ano, vždy",
                  "Ne! (to je logaritmus součinu)",
                  "Jen pro $a=1$",
                  "Záleží na základu",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c9_l3_t5",
                question: "Vypočítej $\\log_3 3^5$ pomocí pravidel.",
                options: ["$3$", "$5$", "$15$", "$1$"],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Dekadický a Přirozený logaritmus",
          content: {
            sections: [
              {
                heading: "Když základ chybí",
                text: "Dva logaritmy jsou tak důležité, že mají vlastní značku:\n1. Dekadický logaritmus: Má základ 10. Místo $\\log_{10} x$ píšeme jen $\\log x$. Používá se ve fyzice (pH, decibely, Richterova stupnice).\n2. Přirozený logaritmus: Má základ $e$ (Eulerovo číslo $\\approx 2,71$). Místo $\\log_e x$ píšeme $\\ln x$. Je to 'jazyk přírody', používá se v kalkulu a při popisu růstu.",
                image:
                  "[Image showing calculator buttons for LOG (base 10) and LN (base e)]",
              },
              {
                heading: "Změna základu",
                text: "Na kalkulačce většinou nemáš tlačítko pro $\\log_2$. Máš jen LOG a LN. Jak vypočítat $\\log_2 10$? Použiješ vzorec pro změnu základu: $$ \\log_a x = \\frac{\\ln x}{\\ln a} $$ Takže $\\log_2 10 = \\ln 10 / \\ln 2 \\approx 3,32$.",
                image: "placeholder-change-of-base",
              },
            ],
            tasks: [
              {
                id: "hs_c9_l4_t1",
                question: "Jaký základ má logaritmus $\\ln x$?",
                options: ["$10$", "$1$", "$e$ (Eulerovo číslo)", "$2$"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "hs_c9_l4_t2",
                question: "Jaký základ má logaritmus $\\log x$?",
                options: ["$10$", "$e$", "$1$", "$0$"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c9_l4_t3",
                question: "Kolik je $\\log 100$?",
                options: ["$10$", "$2$ (protože $10^2 = 100$)", "$100$", "$1$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c9_l4_t4",
                question: "Kolik je $\\ln e$?",
                options: ["$1$", "$0$", "$e$", "$2,71$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c9_l4_t5",
                question:
                  "Vzorec pro pH je $pH = -\\log[H+]$. O jaký logaritmus jde?",
                options: ["Přirozený", "Dekadický", "Binární", "Náhodný"],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Logaritmické rovnice",
          content: {
            sections: [
              {
                heading: "Odlogaritmování",
                text: "Základní metoda řešení: Snažíme se dostat rovnici do tvaru $\\log_a L = \\log_a P$. \nProtože je logaritmická funkce prostá, můžeme 'škrtnout' logaritmy a porovnat vnitřky: $L = P$. \nPříklad: $\\log_2 x = \\log_2 5 + \\log_2 3$. \n1. Spojíme pravou stranu: $\\log_2 x = \\log_2 (5 \\cdot 3)$. \n2. Porovnáme: $x = 15$.",
                image:
                  "[Image showing algebraic steps to solve a logarithmic equation]",
              },
              {
                heading: "Podmínky jsou životně důležité",
                text: "Při řešení logaritmických rovnic MUSÍŠ určit podmínky. Vše, co je uvnitř logaritmu, musí být ostře větší než nula. \nŘešíš $\\log(x-2) + \\log(x+2) = \\dots$. Podmínky: $x-2>0$ a $x+2>0$. Tedy $x>2$. Pokud ti vyjde kořen $x = -3$, musíš ho vyhodit, i kdyby zkouška vyšla!",
                image: "placeholder-log-equation-conditions",
              },
            ],
            tasks: [
              {
                id: "hs_c9_l5_t1",
                question: "Vyřeš $\\log_3 x = 2$.",
                options: ["$9$ (podle definice $3^2$)", "$6$", "$8$", "$5$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c9_l5_t2",
                question: "Vyřeš $\\ln x = 0$.",
                options: ["$0$", "$1$", "$e$", "$-1$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c9_l5_t3",
                question: "Jaká je podmínka pro $\\log(x+5)$?",
                options: ["$x > 0$", "$x \\neq -5$", "$x > -5$", "$x \\ge -5$"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "hs_c9_l5_t4",
                question: "Vyřeš $\\log_2 x + \\log_2 4 = \\log_2 12$.",
                options: [
                  "$3$ (protože $x \\cdot 4 = 12$)",
                  "$8$",
                  "$48$",
                  "$16$",
                ],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "hs_c9_l5_t5",
                question:
                  "Vyšlo ti $x = -2$ pro rovnici $\\log x = \\log(-x-2)$. Je to řešení?",
                options: [
                  "Ano",
                  "Ne, protože $\\log(-2)$ neexistuje",
                  "Ano, pokud to vyjde ve zkoušce",
                  "Nevím",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Goniometrické funkce",
      description:
        "Opouštíme pravoúhlé trojúhelníky a vstupujeme na kruhový objezd. Zjistíme, že sinus a kosinus jsou souřadnice bodu na jednotkové kružnici, naučíme se měřit úhly v radiánech a pochopíme, proč matematika 'vlní'.",
      lessons: [
        {
          title: "Jednotková kružnice: Nové hřiště",
          content: {
            sections: [
              {
                heading: "Proč trojúhelník nestačí?",
                text: "Na základní škole jste se učili, že sinus je 'protilehlá ku přeponě'. To funguje skvěle, dokud je úhel ostrý ($< 90^\\circ$). Ale kolik je $\\sin 120^\\circ$? V pravoúhlém trojúhelníku nemůže být tupý úhel! Proto matematici vymysleli jednotkovou kružnici. Je to kružnice se středem v počátku $[0;0]$ a poloměrem $r=1$.",
                image: "[Image of a unit circle on a Cartesian plane]",
              },
              {
                heading: "Sinus a Kosinus jako souřadnice",
                text: "Představ si bod $P$, který běhá po této kružnici. Jeho poloha závisí na úhlu $\\alpha$. Definice je revoluční:\n- $\\cos \\alpha$ je $x$-ová souřadnice bodu $P$.\n- $\\sin \\alpha$ je $y$-ová souřadnice bodu $P$.\nUž žádné přepony. Prostě souřadnice $[x; y] = [\\cos \\alpha; \\sin \\alpha]$. Díky tomu můžeme definovat sinus pro jakýkoliv úhel, třeba i $1000^\\circ$.",
                image:
                  "[Image showing a point P on the unit circle with coordinates (cos alpha, sin alpha)]",
              },
            ],
            tasks: [
              {
                id: "hs_c10_l1_t1",
                question: "Jaký poloměr má jednotková kružnice?",
                options: ["$1$", "$10$", "$\\pi$", "$2$"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c10_l1_t2",
                question:
                  "Která souřadnice bodu na kružnici odpovídá funkci sinus?",
                options: [
                  "Souřadnice $x$",
                  "Souřadnice $y$",
                  "Vzdálenost od středu",
                  "Úhel",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c10_l1_t3",
                question: "Kde leží bod pro úhel $90^\\circ$?",
                options: ["$[1; 0]$", "$[0; 1]$", "$[-1; 0]$", "$[0; -1]$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c10_l1_t4",
                question: "Jakou hodnotu má $\\cos 0^\\circ$ (bod $[1; 0]$)?",
                options: ["$1$", "$0$", "$-1$", "Nedefinováno"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c10_l1_t5",
                question: "Může být hodnota sinu větší než 1?",
                options: [
                  "Ano, pro velké úhly",
                  "Ne, kružnice má poloměr 1, bod nemůže být dál",
                  "Ano, v tangensu",
                  "Jen v komplexních číslech",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Stupně vs. Radiány",
          content: {
            sections: [
              {
                heading: "Proč 360 stupňů?",
                text: "Dělení kruhu na 360 dílků (stupňů) vymysleli staří Babyloňané. Je to ale jen dohoda. V 'dospělé' matematice měříme úhly v radiánech. Jeden radián je úhel, při kterém je oblouk kružnice stejně dlouhý jako její poloměr ($r$).\nProtože obvod kruhu je $2\\pi r$, plný úhel ($360^\\circ$) odpovídá $2\\pi$ radiánům.",
                image:
                  "[Image illustrating definition of 1 radian with arc length equal to radius]",
              },
              {
                heading: "Převodní můstek",
                text: "Klíč k převodu je půlkruh: $$ 180^\\circ = \\pi \\text{ rad} $$\nChceš převést $90^\\circ$? To je polovina ze $180^\\circ$, tedy $\\frac{\\pi}{2}$.\nChceš převést $60^\\circ$? To je třetina ze $180^\\circ$, tedy $\\frac{\\pi}{3}$.\nRadiány většinou píšeme bez jednotky, jen jako číslo s $\\pi$.",
                image: "placeholder-degrees-radians-chart",
              },
            ],
            tasks: [
              {
                id: "hs_c10_l2_t1",
                question: "Kolik radiánů je $360^\\circ$?",
                options: ["$\\pi$", "$2\\pi$", "$360\\pi$", "$4\\pi$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c10_l2_t2",
                question: "Převeď $90^\\circ$ na radiány.",
                options: ["$\\pi / 2$", "$\\pi / 4$", "$\\pi$", "$3\\pi / 2$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c10_l2_t3",
                question: "Kolik stupňů je $\\pi$ radiánů?",
                options: [
                  "$90^\\circ$",
                  "$100^\\circ$",
                  "$180^\\circ$",
                  "$360^\\circ$",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "hs_c10_l2_t4",
                question: "Přibližně kolik stupňů je 1 radián?",
                options: [
                  "$1^\\circ$",
                  "$57^\\circ$",
                  "$90^\\circ$",
                  "$180^\\circ$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c10_l2_t5",
                question: "Který úhel je větší: $60^\\circ$ nebo $1$ radián?",
                options: [
                  "$60^\\circ$ (protože 1 rad $\\approx 57^\\circ$)",
                  "$1$ radián",
                  "Jsou stejné",
                  "Nelze porovnat",
                ],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Vlastnosti Sinu a Kosinu",
          content: {
            sections: [
              {
                heading: "Znaménka v kvadrantech",
                text: "Protože $\\cos x$ je $x$-ová souřadnice a $\\sin x$ je $y$-ová souřadnice, znaménka se mění podle kvadrantu:\n- I. kvadrant ($0$ až $\\pi/2$): Vše kladné (jsme vpravo nahoře).\n- II. kvadrant ($\\pi/2$ až $\\pi$): Sinus kladný (nahoře), Kosinus záporný (vlevo).\n- III. kvadrant ($\\pi$ až $3\\pi/2$): Obojí záporné (vlevo dole).\n- IV. kvadrant ($3\\pi/2$ až $2\\pi$): Sinus záporný (dole), Kosinus kladný (vpravo).",
                image: "[Image showing signs of sin and cos in four quadrants]",
              },
              {
                heading: "Tabulkové hodnoty",
                text: "Některé úhly se vyskytují stále dokola ($30^\\circ, 45^\\circ, 60^\\circ$). Existuje trik, jak si je pamatovat (pravidlo levé ruky nebo tabulka).\nNapř. $\\sin 30^\\circ = 1/2$, ale $\\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$. Tyto 'odmocninové' hodnoty musíme znát nazpaměť.",
                image: "placeholder-trig-hand-trick",
              },
            ],
            tasks: [
              {
                id: "hs_c10_l3_t1",
                question:
                  "Jaké znaménko má $\\sin 200^\\circ$ (III. kvadrant)?",
                options: ["Kladné (+)", "Záporné (-)", "Nula", "Nelze určit"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c10_l3_t2",
                question: "Kolik je $\\sin 30^\\circ$ (nebo $\\sin \\pi/6$)?",
                options: ["$0$", "$1/2$", "$\\frac{\\sqrt{2}}{2}$", "$1$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c10_l3_t3",
                question: "Která funkce je sudá (graf souměrný podle osy y)?",
                options: ["Sinus", "Kosinus", "Obě", "Ani jedna"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c10_l3_t4",
                question: "V kterém kvadrantu jsou sinus i kosinus záporné?",
                options: ["I.", "II.", "III.", "IV."],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "hs_c10_l3_t5",
                question: "Platí $\\sin^2 x + \\cos^2 x = 1$?",
                options: [
                  "Ano, vždy (Pythagorova věta na kružnici)",
                  "Ne",
                  "Jen pro ostré úhly",
                  "Jen pro $x=0$",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Tangens a Cotangens",
          content: {
            sections: [
              {
                heading: "Tečna ke kružnici",
                text: "Tangens ($\\tg x$) je definován jako $\\frac{\\sin x}{\\cos x}$. Geometricky ho najdeme na tečně ke kružnici v bodě $[1;0]$. Vedeme polopřímku ze středu pod úhlem $\\alpha$ a kde protne tečnu, tam je hodnota tangens. Slovo 'tangere' znamená latinsky 'dotýkat se'.",
                image:
                  "[Image showing tangent line x=1 and intersection with angle ray]",
              },
              {
                heading: "Zakázané úhly",
                text: "Protože $\\tg x = \\sin x / \\cos x$, nesmí být ve jmenovateli nula. Kdy je $\\cos x = 0$? Při $90^\\circ$ ($\\pi/2$) a $270^\\circ$. V těchto bodech tangens 'vybuchuje' do nekonečna a není definován. Grafem nejsou vlnovky, ale zvláštní křivky zvané 'tangentoidy'.",
                image: "placeholder-tangent-graph-asymptotes",
              },
            ],
            tasks: [
              {
                id: "hs_c10_l4_t1",
                question: "Jak je definován $\\tg x$?",
                options: [
                  "$\\cos x / \\sin x$",
                  "$\\sin x / \\cos x$",
                  "$1 / \\sin x$",
                  "$x / y$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c10_l4_t2",
                question: "Kde není definován tangens?",
                options: [
                  "V $0^\\circ$",
                  "V $90^\\circ$ ($\\pi/2$)",
                  "Ve $45^\\circ$",
                  "V $180^\\circ$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c10_l4_t3",
                question: "Jakou hodnotu má $\\tg 45^\\circ$?",
                options: [
                  "$0$",
                  "$1$ (protože sinus = kosinus)",
                  "$\\infty$",
                  "$-1$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c10_l4_t4",
                question:
                  "Jaká je perioda funkce tangens (po jaké době se opakuje)?",
                options: [
                  "$2\\pi$ (celý kruh)",
                  "$\\pi$ (půlkruh)",
                  "$\\pi/2$",
                  "Nemá periodu",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c10_l4_t5",
                question: "Cotangens ($\\cot x$) je převrácená hodnota:",
                options: ["Sinu", "Kosinu", "Tangensu ($1/\\tg x$)", "Všeho"],
                correctAnswer: 2,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Grafy a Vlnění",
          content: {
            sections: [
              {
                heading: "Sinusoida",
                text: "Když rozbalíme pohyb po kružnici do grafu v čase, vznikne vlna – sinusoida. \n- Sinus začíná v nule ($0$), roste do $1$, klesá do $-1$ a vrací se do $0$. To celé trvá $2\\pi$ (jedna perioda).\n- Kosinusoida je stejná vlna, jen posunutá. Začíná na vrcholu ($1$).",
                image:
                  "[Image illustrating unwrapping unit circle to create sine wave]",
              },
              {
                heading: "Amplituda a Perioda",
                text: "Funkce $y = A \\cdot \\sin(B \\cdot x)$:\n- $A$ (Amplituda): Určuje výšku vlny. $2\\sin x$ je dvakrát vyšší vlna.\n- $B$ (Frekvence): Určuje hustotu vln. $\\sin(2x)$ vlní dvakrát rychleji (perioda se zkrátí na polovinu).",
                image: "placeholder-amplitude-period-change",
              },
            ],
            tasks: [
              {
                id: "hs_c10_l5_t1",
                question: "Kde začíná graf funkce $y = \\sin x$ (pro x=0)?",
                options: [
                  "V nule [0;0]",
                  "V jedničce [0;1]",
                  "V mínus jedničce",
                  "V nekonečnu",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c10_l5_t2",
                question: "Kde začíná graf funkce $y = \\cos x$ (pro x=0)?",
                options: [
                  "V nule [0;0]",
                  "V jedničce [0;1]",
                  "V mínus jedničce",
                  "V nekonečnu",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c10_l5_t3",
                question: "Jakou maximální výšku má funkce $y = 5 \\sin x$?",
                options: ["$1$", "$5$", "$10$", "$0,5$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c10_l5_t4",
                question: "Co se stane s periodou u funkce $\\sin(2x)$?",
                options: [
                  "Bude dvojnásobná ($4\\pi$)",
                  "Bude poloviční ($\\pi$) - vlna je 'rychlejší'",
                  "Nezmění se",
                  "Graf se posune nahoru",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "hs_c10_l5_t5",
                question: "Jaký je obor hodnot základního sinu?",
                options: [
                  "$\\mathbb{R}$",
                  "$\\langle 0; 1 \\rangle$",
                  "$\\langle -1; 1 \\rangle$",
                  "$(0; \\infty)$",
                ],
                correctAnswer: 2,
                xp: 15,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Goniometrické rovnice a vzorce",
      description:
        "Jak sečíst dva úhly, aniž bychom je znali? Jak vyřešit rovnici, která má nekonečně mnoho řešení? Naučíme se základní identitu, která spojuje sinus s kosinem, a ovládneme umění hledání úhlu $x$ na vlnícím se grafu.",
      lessons: [
        {
          title: "Goniometrická jednička",
          content: {
            sections: [
              {
                heading: "Pythagoras na kružnici",
                text: "Toto je nejdůležitější vzorec goniometrie. Vychází přímo z Pythagorovy věty ($a^2 + b^2 = c^2$) na jednotkové kružnici, kde přepona je poloměr $1$. \nPlatí: $$ \\sin^2 x + \\cos^2 x = 1 $$ \nTento vzorec nám umožňuje kdykoliv vypočítat sinus, když známe kosinus (a naopak), aniž bychom věděli úhel $x$. Jen si musíme dát pozor na znaménko podle kvadrantu.",
                image:
                  "[Image illustrating sin^2 + cos^2 = 1 on a unit circle triangle]",
              },
              {
                heading: "Vztah tangens a kotangens",
                text: "Protože $\\tg x = \\frac{\\sin x}{\\cos x}$ a $\\cot x = \\frac{\\cos x}{\\sin x}$, jsou tyto funkce navzájem převrácené. Jejich součin je tedy vždy jedna: $$ \\tg x \\cdot \\cot x = 1 $$",
                image: "placeholder-trig-identity-tan-cot",
              },
            ],
            tasks: [
              {
                id: "hs_c11_l1_t1",
                question: "Doplň vzorec: $\\sin^2 x + \\cos^2 x = ...$",
                options: ["$0$", "$1$", "$2$", "$\\tg x$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c11_l1_t2",
                question: "Pokud $\\sin x = 0,8$, kolik je $\\cos^2 x$?",
                options: [
                  "$0,2$",
                  "$0,36$ (protože $1 - 0,8^2 = 0,36$)",
                  "$0,64$",
                  "$0,5$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c11_l1_t3",
                question: "Vzorec $\\sin^2 x + \\cos^2 x = 1$ platí pro:",
                options: [
                  "Jen ostré úhly",
                  "Jen kladná čísla",
                  "Všechna reálná čísla",
                  "Jen v I. kvadrantu",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "hs_c11_l1_t4",
                question: "Vyjádři $\\sin^2 x$ pomocí kosinu.",
                options: [
                  "$1 + \\cos^2 x$",
                  "$1 - \\cos^2 x$",
                  "$\\cos^2 x - 1$",
                  "$\\sqrt{1 - \\cos x}$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c11_l1_t5",
                question: "Čemu se rovná $\\tg x \\cdot \\cot x$?",
                options: ["$1$", "$0$", "$-1$", "$\\sin x$"],
                correctAnswer: 0,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Vzorce pro dvojnásobný úhel",
          content: {
            sections: [
              {
                heading: "Pozor, není to lineární!",
                text: "Nejčastější chyba: Myslet si, že $\\sin(2x)$ je to samé jako $2 \\cdot \\sin x$. NENÍ! \nSinus dvojnásobného úhlu je rychlejší vlna. Vzorec zní: $$ \\sin(2x) = 2 \\sin x \\cos x $$ \nPro kosinus je to trochu složitější (vychází z rozdílu čtverců): $$ \\cos(2x) = \\cos^2 x - \\sin^2 x $$",
                image: "[Image comparing graphs of sin(x) and sin(2x)]",
              },
              {
                heading: "K čemu to je?",
                text: "Tyto vzorce používáme hlavně při řešení rovnic, kde máme namíchané různé argumenty, např. $\\sin(2x) + \\cos x = 0$. Nemůžeme počítat s $2x$ a $x$ dohromady. Musíme $2x$ rozložit pomocí vzorce na jednoduché $x$.",
                image: "placeholder-double-angle-application",
              },
            ],
            tasks: [
              {
                id: "hs_c11_l2_t1",
                question: "Je pravda, že $\\sin(2x) = 2\\sin x$?",
                options: [
                  "Ano, vždy",
                  "Ne, nikdy (kromě x=0)",
                  "Jen pro $90^\\circ$",
                  "Ano, je to lineární",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c11_l2_t2",
                question: "Vyber správný vzorec pro $\\sin(2x)$.",
                options: [
                  "$2 \\sin x$",
                  "$\\sin^2 x$",
                  "$2 \\sin x \\cos x$",
                  "$\\cos^2 x - \\sin^2 x$",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "hs_c11_l2_t3",
                question: "Uprav výraz $\\cos^2 x - \\sin^2 x$.",
                options: ["$1$", "$\\cos(2x)$", "$\\sin(2x)$", "$-1$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c11_l2_t4",
                question:
                  "Pokud $\\sin x = 0,6$ a $\\cos x = 0,8$, kolik je $\\sin(2x)$?",
                options: [
                  "$1,2$",
                  "$0,48$",
                  "$0,96$ ($2 \\cdot 0,6 \\cdot 0,8$)",
                  "$1,4$",
                ],
                correctAnswer: 2,
                xp: 25,
              },
              {
                id: "hs_c11_l2_t5",
                question:
                  "Jaký vzorec použiješ pro zjednodušení $\\sin x \\cdot \\cos x$?",
                options: [
                  "Goniometrickou jedničku",
                  "Polovinu vzorce pro $\\sin(2x)$",
                  "Součtový vzorec",
                  "Vzorec pro tangens",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Součtové vzorce",
          content: {
            sections: [
              {
                heading: "Jak sčítat uvnitř závorky",
                text: "Jak spočítat přesnou hodnotu $\\sin 75^\\circ$ bez kalkulačky? \nRozložíme si to na $\\sin(45^\\circ + 30^\\circ)$. Použijeme součtový vzorec: $$ \\sin(x + y) = \\sin x \\cos y + \\cos x \\sin y $$ \nSinus je 'kamarádský', míchá sinus a kosinus a nechává znaménko (+).",
                image:
                  "[Image illustrating sum of angles in a geometric proof]",
              },
              {
                heading: "Kosinus je sobec",
                text: "Kosinus se chová jinak: $$ \\cos(x + y) = \\cos x \\cos y - \\sin x \\sin y $$ \nKosinus drží funkce u sebe (kosinus s kosinem, sinus se sinem) a otáčí znaménko (z plusu udělá minus)!",
                image: "placeholder-cosine-sum-formula",
              },
            ],
            tasks: [
              {
                id: "hs_c11_l3_t1",
                question: "Jak rozepíšeš $\\sin(\\alpha + \\beta)$?",
                options: [
                  "$\\sin \\alpha + \\sin \\beta$",
                  "$\\sin \\alpha \\cos \\beta + \\cos \\alpha \\sin \\beta$",
                  "$\\cos \\alpha \\cos \\beta - \\sin \\alpha \\sin \\beta$",
                  "$\\sin \\alpha \\sin \\beta$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c11_l3_t2",
                question: "Co platí pro $\\cos(x - y)$?",
                options: [
                  "Znaménko uprostřed bude plus",
                  "Znaménko uprostřed bude minus",
                  "Funkce se nepromíchají",
                  "Výsledek je nula",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c11_l3_t3",
                question: "Pomocí jakých úhlů vypočítáš $\\sin 15^\\circ$?",
                options: [
                  "$10^\\circ + 5^\\circ$",
                  "$45^\\circ - 30^\\circ$",
                  "$30^\\circ / 2$",
                  "$90^\\circ - 75^\\circ$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c11_l3_t4",
                question: "Výraz $\\sin x \\cos y - \\cos x \\sin y$ odpovídá:",
                options: [
                  "$\\sin(x + y)$",
                  "$\\sin(x - y)$",
                  "$\\cos(x + y)$",
                  "$\\cos(x - y)$",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "hs_c11_l3_t5",
                question: "Platí $\\sin(x+y) = \\sin x + \\sin y$?",
                options: [
                  "Ano",
                  "Ne (funkce nejsou lineární)",
                  "Jen pro $x=0$",
                  "Občas",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Základní goniometrické rovnice",
          content: {
            sections: [
              {
                heading: "Hledání úhlu",
                text: "Máme rovnici $\\sin x = 0,5$. Hledáme úhel $x$. \nZ tabulky víme, že sinus je polovina ve $30^\\circ$ ($\\pi/6$). Ale pozor! Sinus je kladný i ve II. kvadrantu ($180^\\circ - 30^\\circ = 150^\\circ$). \nTakže v první otáčce máme dvě řešení: $x_1 = 30^\\circ$ a $x_2 = 150^\\circ$.",
                image:
                  "[Image showing unit circle intersections for sin x = 0.5 at 30 and 150 degrees]",
              },
              {
                heading: "Perioda (To se točí pořád dokola)",
                text: "Kružnice nemá konec. K bodu $30^\\circ$ se dostaneme znovu po celé otočce ($360^\\circ$), pak znovu a znovu. \nObecné řešení musíme zapsat s periodou: \n$$ x_1 = \\frac{\\pi}{6} + 2k\\pi $$ \n$$ x_2 = \\frac{5\\pi}{6} + 2k\\pi $$ \nKde $k$ je libovolné celé číslo (počet otoček). U tangensu je perioda jen $k\\pi$.",
                image: "placeholder-general-solution-period",
              },
            ],
            tasks: [
              {
                id: "hs_c11_l4_t1",
                question:
                  "Kolik řešení má rovnice $\\sin x = 0,5$ v intervalu $\\langle 0; 2\\pi \\rangle$?",
                options: ["Jedno", "Dvě", "Žádné", "Nekonečně"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c11_l4_t2",
                question: "Jakou periodu přičítáme k řešení u funkce sinus?",
                options: [
                  "$k\\pi$ (půlotočka)",
                  "$2k\\pi$ (celá otočka)",
                  "$k\\pi/2$",
                  "Žádnou",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c11_l4_t3",
                question:
                  "Vyřeš $\\cos x = 0$ (kde je x-ová souřadnice nula?).",
                options: [
                  "$0 + 2k\\pi$",
                  "$\\pi/2 + k\\pi$ (nahoře a dole)",
                  "$\\pi + 2k\\pi$",
                  "Nemá řešení",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c11_l4_t4",
                question: "Má rovnice $\\sin x = 2$ řešení?",
                options: [
                  "Ano",
                  "Ne (sinus je max 1)",
                  "Ano, komplexní",
                  "Nevím",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c11_l4_t5",
                question: "Jakou periodu má funkce tangens?",
                options: ["$2k\\pi$", "$k\\pi$", "$4k\\pi$", "$\\pi/2$"],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Složitější rovnice: Substituce a úpravy",
          content: {
            sections: [
              {
                heading: "Kvadratická rovnice v převleku",
                text: "Co s rovnicí $2\\sin^2 x - \\sin x - 1 = 0$? \nTohle je vlastně kvadratická rovnice! Zavedeme substituci $a = \\sin x$. \nDostaneme $2a^2 - a - 1 = 0$. Vyřešíme ji pro $a$, získáme kořeny (třeba $1$ a $-0,5$) a pak se vrátíme k sinu: $\\sin x = 1$ a $\\sin x = -0,5$.",
                image:
                  "[Image illustrating substitution method transforming trig equation to quadratic]",
              },
              {
                heading: "Vytýkání",
                text: "Rovnice $\\sin x \\cdot \\cos x + \\sin x = 0$. \nNikdy neděl celou rovnici sinem (ztratil bys řešení, kde $\\sin x = 0$)! Místo toho vytýkej. \n$\\sin x \\cdot (\\cos x + 1) = 0$. \nTeď se rozpadne na dvě jednoduché: \n1. $\\sin x = 0$ \n2. $\\cos x = -1$.",
                image: "placeholder-factoring-trig-equation",
              },
            ],
            tasks: [
              {
                id: "hs_c11_l5_t1",
                question:
                  "Co uděláš s rovnicí $2\\cos^2 x + 3\\cos x + 1 = 0$?",
                options: [
                  "Vydělím kosinem",
                  "Použiji substituci $y = \\cos x$",
                  "Použiji součtový vzorec",
                  "Vzdám to",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c11_l5_t2",
                question:
                  "Proč nesmíme dělit rovnici výrazem s neznámou (např. $\\sin x$)?",
                options: [
                  "Protože je to zakázané zákonem",
                  "Protože neznámá může být nula a přišli bychom o řešení",
                  "Protože by to bylo moc jednoduché",
                  "Můžeme, nevadí to",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c11_l5_t3",
                question: "Řešíš rovnici a vyjde $\\sin x = 5$. Co to znamená?",
                options: [
                  "Že $x = 5$ radiánů",
                  "Že tato větev nemá řešení",
                  "Že musím použít kalkulačku",
                  "Chyba v zadání",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c11_l5_t4",
                question: "Převeď $2\\sin^2 x$ na kosinus (v rovnici).",
                options: [
                  "$2(1 - \\cos^2 x)$",
                  "$2 - \\cos^2 x$",
                  "$1 - 2\\cos^2 x$",
                  "$\\cos(2x)$",
                ],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "hs_c11_l5_t5",
                question: "Kdy je součin $\\sin x \\cdot \\cos x$ roven nule?",
                options: [
                  "Jen když $\\sin x = 0$",
                  "Jen když $\\cos x = 0$",
                  "Když $\\sin x = 0$ NEBO $\\cos x = 0$",
                  "Nikdy",
                ],
                correctAnswer: 2,
                xp: 15,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Trigonometrie (Obecný trojúhelník)",
      description:
        "Svět není jen pravoúhlý. Naučíme se řešit jakýkoliv trojúhelník pomocí dvou mocných vět – Sinové a Kosinové. Zjistíme, jak změřit vzdálenost k nedostupnému místu a jak funguje triangulace v mapách.",
      lessons: [
        {
          title: "Sinová věta",
          content: {
            sections: [
              {
                heading: "Poměr strany a protějšku",
                text: "Sinová věta je o párech 'strana a úhel naproti ní'. Říká, že poměr délky strany a sinu protějšího úhlu je v daném trojúhelníku vždy stejný. \n$$ \\frac{a}{\\sin \\alpha} = \\frac{b}{\\sin \\beta} = \\frac{c}{\\sin \\gamma} = 2r $$\n(Kde $r$ je poloměr kružnice opsané). Tuto větu použiješ, když znáš dva úhly a jednu stranu (nebo dvě strany a úhel proti jedné z nich).",
                image:
                  "[Image illustrating the Law of Sines in a general triangle with labeled sides and opposite angles]",
              },
              {
                heading: "Pozor na tupý úhel!",
                text: "Při výpočtu úhlu pomocí sinové věty číhá past. Kalkulačka ti pro $\\sin x = 0,5$ vyplivne $30^\\circ$. Ale sinus je kladný i ve II. kvadrantu ($150^\\circ$)! Pokud je trojúhelník tupoúhlý, sinová věta ti to 'nepoví' přímo. Musíš použít selský rozum: Proti největší straně leží největší úhel.",
                image: "placeholder-ambiguous-case-sine-law",
              },
            ],
            tasks: [
              {
                id: "hs_c12_l1_t1",
                question: "Kdy použiješ Sinovou větu?",
                options: [
                  "Když znám 3 strany",
                  "Když znám 2 strany a úhel, který svírají",
                  "Když znám stranu a 2 úhly",
                  "Jen v pravoúhlém trojúhelníku",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "hs_c12_l1_t2",
                question: "Co znamená $2r$ ve vzorci sinové věty?",
                options: [
                  "Dvojnásobek obvodu",
                  "Průměr kružnice opsané",
                  "Průměr kružnice vepsané",
                  "Dvě ramena",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c12_l1_t3",
                question:
                  "Vyjádři stranu $a$ ze vzorce $\\frac{a}{\\sin \\alpha} = \\frac{b}{\\sin \\beta}$.",
                options: [
                  "$a = \\frac{b \\cdot \\sin \\alpha}{\\sin \\beta}$",
                  "$a = \\frac{b \\cdot \\sin \\beta}{\\sin \\alpha}$",
                  "$a = b \\cdot \\sin \\alpha \\cdot \\sin \\beta$",
                  "$a = \\frac{\\sin \\alpha}{b}$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c12_l1_t4",
                question: "Proti straně $b$ leží úhel:",
                options: [
                  "Alfa ($\\alpha$)",
                  "Beta ($\\beta$)",
                  "Gama ($\\gamma$)",
                  "Pravý",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c12_l1_t5",
                question: "Může mít trojúhelník dva tupé úhly?",
                options: [
                  "Ano",
                  "Ne (součet by byl přes $180^\\circ$)",
                  "Jen rovnostranný",
                  "Jen rovnoramenný",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Kosinová věta",
          content: {
            sections: [
              {
                heading: "Zobecněný Pythagoras",
                text: "Kosinová věta je jako Pythagorova věta, která funguje i pro křivé trojúhelníky. \n$$ c^2 = a^2 + b^2 - 2ab \\cos \\gamma $$\nKdyž je $\\gamma = 90^\\circ$, tak $\\cos 90^\\circ = 0$, celý konec zmizí a zbyde $c^2 = a^2 + b^2$. Geniální! \nPoužiješ ji, když znáš 3 strany (chceš úhel) nebo 2 strany a úhel mezi nimi (chceš třetí stranu).",
                image:
                  "[Image illustrating the Law of Cosines derivation from Pythagoras]",
              },
              {
                heading: "Hledání úhlu",
                text: "Když hledáme úhel, vzorec upravíme: \n$$ \\cos \\gamma = \\frac{a^2 + b^2 - c^2}{2ab} $$ \nTady je výhoda oproti sinové větě: Pokud vyjde kosinus záporný, úhel je tupý ($90^\\circ$ až $180^\\circ$). Kosinová věta nelže a řekne nám to přesně.",
                image: "placeholder-cosine-law-angle",
              },
            ],
            tasks: [
              {
                id: "hs_c12_l2_t1",
                question: "Kdy použiješ Kosinovou větu?",
                options: [
                  "Když znám stranu a protější úhel",
                  "Když znám 3 strany (sss)",
                  "Když znám jen úhly",
                  "Když chci spočítat obsah",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c12_l2_t2",
                question: "Jak vypadá vzorec pro stranu $a$?",
                options: [
                  "$a^2 = b^2 + c^2 - 2bc \\cos \\alpha$",
                  "$a^2 = b^2 + c^2 + 2bc \\cos \\alpha$",
                  "$a^2 = b^2 - c^2 - 2bc \\cos \\alpha$",
                  "$a = b + c$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c12_l2_t3",
                question: "Co se stane se vzorcem, když $\\gamma = 90^\\circ$?",
                options: [
                  "Vznikne Sinová věta",
                  "Vznikne Pythagorova věta",
                  "Vznikne nula",
                  "Nic",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c12_l2_t4",
                question: "Pokud vyjde $\\cos \\gamma = -0,5$, jaký je úhel?",
                options: [
                  "Ostrý ($60^\\circ$)",
                  "Tupý ($120^\\circ$)",
                  "Pravý ($90^\\circ$)",
                  "Nulový",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c12_l2_t5",
                question:
                  "Která věta je vhodnější pro výpočet největšího úhlu v trojúhelníku?",
                options: [
                  "Sinová (je jednodušší)",
                  "Kosinová (pozná tupý úhel)",
                  "Pythagorova",
                  "Thaletova",
                ],
                correctAnswer: 1,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Obsah trojúhelníku",
          content: {
            sections: [
              {
                heading: "Bez výšky to jde taky",
                text: "Klasický vzorec $S = \\frac{a \\cdot v_a}{2}$ vyžaduje znát výšku. Ale co když ji nemáme? Pokud známe dvě strany a úhel mezi nimi, použijeme trigonometrii: \n$$ S = \\frac{1}{2} a \\cdot b \\cdot \\sin \\gamma $$ \nJe to logické – $b \\cdot \\sin \\gamma$ je vlastně výpočet té výšky $v_a$.",
                image:
                  "[Image illustrating area formula S = 0.5*a*b*sin(gamma)]",
              },
              {
                heading: "Heronův vzorec (pro fajnšmekry)",
                text: "Když známe jen tři strany ($a, b, c$), použijeme Herona. Nejdřív spočítáme poloviční obvod $s = (a+b+c)/2$. \nPak platí: $$ S = \\sqrt{s(s-a)(s-b)(s-c)} $$ \nFunguje to vždy, i když čísla bývají ošklivá.",
                image: "placeholder-heron-formula",
              },
            ],
            tasks: [
              {
                id: "hs_c12_l3_t1",
                question:
                  "Vzorec $S = 0,5 \\cdot a \\cdot b \\cdot \\sin \\gamma$ použiješ, když:",
                options: [
                  "Znáš tři strany",
                  "Znáš dvě strany a úhel, který svírají",
                  "Znáš výšku",
                  "Znáš jen úhly",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c12_l3_t2",
                question:
                  "Jaký je obsah trojúhelníku, kde $a=4, b=5$ a úhel mezi nimi je $90^\\circ$?",
                options: [
                  "$20$",
                  "$10$ ($0,5 \\cdot 4 \\cdot 5 \\cdot 1$)",
                  "$15$",
                  "$9$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c12_l3_t3",
                question: "Co znamená $s$ v Heronově vzorci?",
                options: [
                  "Strana",
                  "Sinus",
                  "Poloviční obvod (semi-perimeter)",
                  "Obsah",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "hs_c12_l3_t4",
                question:
                  "Pokud je úhel $\\gamma = 30^\\circ$, hodnota $\\sin \\gamma$ ve vzorci pro obsah je:",
                options: ["$1$", "$0,5$", "$0$", "$0,866$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c12_l3_t5",
                question:
                  "Lze Heronův vzorec použít pro pravoúhlý trojúhelník?",
                options: [
                  "Ne, nikdy",
                  "Ano, platí pro všechny trojúhelníky",
                  "Jen když jsou strany celá čísla",
                  "Jen v pátek",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Aplikace: Měření v terénu",
          content: {
            sections: [
              {
                heading: "Jak změřit řeku",
                text: "Stojíš na břehu a chceš změřit šířku řeky, ale neumíš plavat. \n1. Vytyčíš si na břehu úsečku (třeba 100 m). \n2. Změříš úhly z obou konců úsečky k bodu na druhém břehu. \n3. Znáš stranu a dva úhly $\\rightarrow$ Dopočítáš třetí úhel $\\rightarrow$ Použiješ Sinovou větu. \nTomu se říká triangulace.",
                image: "[Image illustrating triangulation across a river]",
              },
              {
                heading: "Síly a vektory",
                text: "Ve fyzice se sčítají síly. Pokud dvě síly táhnou pod nějakým úhlem, výslednice tvoří stranu trojúhelníku. Velikost výsledné síly spočítáme pomocí Kosinové věty (protože známe dvě síly a úhel mezi nimi).",
                image: "placeholder-physics-vectors-cosine",
              },
            ],
            tasks: [
              {
                id: "hs_c12_l4_t1",
                question: "Co je triangulace?",
                options: [
                  "Metoda měření pomocí trojúhelníků",
                  "Hra na triangl",
                  "Dělení úhlu na tři části",
                  "Typ trojúhelníku",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c12_l4_t2",
                question:
                  "Chceš změřit vzdálenost lodi na moři. Stačí ti jeden bod na břehu?",
                options: [
                  "Ano, stačí se podívat",
                  "Ne, potřebuji dva body (základnu) a měřit úhly",
                  "Ano, pokud mám laser",
                  "Ne, musím tam doplavat",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c12_l4_t3",
                question:
                  "Dvě síly $F_1, F_2$ svírají úhel. Jak zjistíš velikost výslednice?",
                options: [
                  "Sečtu $F_1 + F_2$",
                  "Pomocí Kosinové věty",
                  "Pomocí Sinové věty",
                  "Vynásobím je",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c12_l4_t4",
                question: "V trojúhelníku známe dva úhly. Jak zjistíme třetí?",
                options: [
                  "Nelze zjistit",
                  "Odečteme je od $180^\\circ$",
                  "Odečteme je od $360^\\circ$",
                  "Použijeme Herona",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c12_l4_t5",
                question: "Proč je geodézie založena na trojúhelnících?",
                options: [
                  "Trojúhelník je tuhý (nemění tvar při daných stranách)",
                  "Je to hezké",
                  "Čtverce jsou složité",
                  "Kvůli pyramidám",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Komplexní čísla",
      description:
        "Co když vám řeknu, že rovnice $x^2 = -1$ má řešení? Vstupujeme do světa za zrcadlem, kde existují 'imaginární' čísla. Zjistíme, že čísla nemusí ležet jen na přímce, ale mohou vyplňovat celou rovinu, a naučíme se počítat to, co dříve bylo nemožné.",
      lessons: [
        {
          title: "Imaginární jednotka i",
          content: {
            sections: [
              {
                heading: "Hledání nemožného",
                text: "Doposud jsme tvrdili, že $\\sqrt{-1}$ neexistuje, protože žádné číslo umocněné na druhou nedá minus. Matematici ale byli zvědaví: 'Co kdybychom si takové číslo vymysleli?' \nZavedli imaginární jednotku $i$. Její definice je prostá: $$ i^2 = -1 $$ \nNebo jinak: $i = \\sqrt{-1}$. Díky tomuto triku můžeme odmocňovat záporná čísla: $\\sqrt{-4} = \\sqrt{4 \\cdot (-1)} = 2i$.",
                image:
                  "[Image illustrating the definition of imaginary unit i squared equals minus one]",
              },
              {
                heading: "Algebraický tvar ($a + bi$)",
                text: "Komplexní číslo $z$ má dvě části:\n1. Reálná část ($a$): To je to staré známé číslo.\n2. Imaginární část ($b$): To je to, co stojí u $i$.\nZápis: $z = a + bi$. Například $z = 3 + 2i$. Je to jako bod v mapě, který má dvě souřadnice. Reálná čísla jsou jen podmnožinou, kde $b=0$.",
                image: "placeholder-complex-number-parts",
              },
            ],
            tasks: [
              {
                id: "hs_c13_l1_t1",
                question: "Jak je definováno $i^2$?",
                options: ["$1$", "$-1$", "$0$", "$\\sqrt{1}$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c13_l1_t2",
                question: "Vypočítej $\\sqrt{-9}$ v komplexních číslech.",
                options: ["$-3$", "$3$", "$3i$", "$-3i$"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "hs_c13_l1_t3",
                question: "Urči reálnou část čísla $z = 5 - 4i$.",
                options: ["$5$", "$-4$", "$4$", "$-4i$"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c13_l1_t4",
                question: "Kolik je $i^3$? (Nápověda: $i^2 \\cdot i$)",
                options: ["$1$", "$i$", "$-1$", "$-i$"],
                correctAnswer: 3,
                xp: 20,
              },
              {
                id: "hs_c13_l1_t5",
                question: "Je číslo 7 komplexní číslo?",
                options: [
                  "Ano, $z = 7 + 0i$",
                  "Ne, je reálné",
                  "Jen v úterý",
                  "Ne, nemá $i$",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Počítání s komplexními čísly",
          content: {
            sections: [
              {
                heading: "Sčítání a Násobení",
                text: "S komplexními čísly počítáme jako s mnohočleny, kde $i$ je proměnná.\n- Sčítání: Reálné k reálným, imaginární k imaginárním. $(2+3i) + (1+4i) = 3 + 7i$.\n- Násobení: Každý s každým. $(1+i)(2+i) = 2 + i + 2i + i^2$. \nPOZOR! Vždy nahraď $i^2$ za $-1$. Takže $2 + 3i - 1 = 1 + 3i$.",
                image:
                  "[Image illustrating multiplication of complex numbers using FOIL method]",
              },
              {
                heading: "Komplexně sdružené číslo",
                text: "Ke každému číslu $z = a + bi$ existuje dvojče $\\bar{z} = a - bi$. Říkáme mu číslo komplexně sdružené. Liší se jen znaménkem u $i$. \nK čemu je dobré? Když je vynásobíme ($z \\cdot \\bar{z}$), zmizí $i$ a vznikne reálné číslo! To používáme při dělení (usměrňování zlomků).",
                image: "placeholder-complex-conjugate",
              },
            ],
            tasks: [
              {
                id: "hs_c13_l2_t1",
                question: "Sečti: $(3 - i) + (2 + 2i)$.",
                options: ["$5 + i$", "$5 + 3i$", "$1 - i$", "$6 - 2i$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c13_l2_t2",
                question: "Vynásob: $2i \\cdot 3i$.",
                options: ["$6i$", "$6i^2$", "$-6$", "$6$"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "hs_c13_l2_t3",
                question: "Jaké je číslo sdružené k $z = 1 + 5i$?",
                options: ["$-1 - 5i$", "$1 - 5i$", "$-1 + 5i$", "$5 + i$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c13_l2_t4",
                question: "Vypočítej součin $(2+i)(2-i)$.",
                options: ["$4 - 1$", "$4 + 1 = 5$", "$4 - i^2 = 3$", "$3$"],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "hs_c13_l2_t5",
                question: "Co se stane, když umocníš $i^4$?",
                options: ["$-1$", "$1$", "$i$", "$-i$"],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Gaussova rovina: Geometrie čísel",
          content: {
            sections: [
              {
                heading: "Od osy k rovině",
                text: "Reálná čísla bydlí na přímce (osa x). Komplexní čísla bydlí v rovině (Gaussova rovina). \n- Osa $x$: Reálná část ($a$).\n- Osa $y$: Imaginární část ($b$).\nČíslo $z = 3 + 4i$ je bod se souřadnicemi $[3; 4]$. Můžeme si ho představit i jako šipku (vektor) z počátku do tohoto bodu.",
                image: "",
              },
              {
                heading: "Absolutní hodnota (Modul)",
                text: "Absolutní hodnota $|z|$ je vzdálenost bodu od počátku $[0;0]$. Je to vlastně délka té šipky. \nPodle Pythagorovy věty: $$ |z| = \\sqrt{a^2 + b^2} $$ \nNapř. pro $3 + 4i$ je velikost $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.",
                image: "placeholder-complex-modulus-pythagoras",
              },
            ],
            tasks: [
              {
                id: "hs_c13_l3_t1",
                question: "Kde leží číslo $2i$ v Gaussově rovině?",
                options: [
                  "Na ose x (vpravo)",
                  "Na ose y (nahoře)",
                  "V počátku",
                  "Na ose y (dole)",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c13_l3_t2",
                question: "Vypočítej absolutní hodnotu čísla $z = 1 + i$.",
                options: ["$2$", "$\\sqrt{2}$", "$1$", "$0$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c13_l3_t3",
                question:
                  "Jaký geometrický útvar tvoří čísla, která mají $|z| = 1$?",
                options: [
                  "Přímku",
                  "Kružnici (jednotkovou)",
                  "Čtverec",
                  "Parabolu",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c13_l3_t4",
                question: "Součet dvou komplexních čísel graficky odpovídá:",
                options: [
                  "Sčítání vektorů",
                  "Násobení úseček",
                  "Průsečíku přímek",
                  "Ničemu",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c13_l3_t5",
                question: "Vzdálenost čísla $-3 + 4i$ od nuly je:",
                options: ["$7$", "$1$", "$5$", "$\\sqrt{7}$"],
                correctAnswer: 2,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Goniometrický tvar a Moivreova věta",
          content: {
            sections: [
              {
                heading: "Dálka a Směr",
                text: "Místo souřadnic $[a; b]$ můžeme číslo popsat pomocí:\n1. Vzdálenosti ($|z|$): Jak daleko je od nuly.\n2. Úhlu ($\\varphi$): Jak moc je otočené od kladné osy x.\nZápis: $$ z = |z| \\cdot (\\cos \\varphi + i \\sin \\varphi) $$ Tomu říkáme goniometrický tvar. Je skvělý pro násobení a umocňování.",
                image:
                  "[Image illustrating polar coordinates r and phi for a complex number]",
              },
              {
                heading: "Moivreova věta: Síla rotace",
                text: "Jak spočítat $(1+i)^{10}$? Roznásobovat závorky by byla sebevražda. Použijeme Moivreovu větu. Ta říká, že při umocňování se vzdálenost umocní a úhel se vynásobí. \n$$ z^n = |z|^n \\cdot (\\cos(n\\varphi) + i \\sin(n\\varphi)) $$ \nUmocňování v komplexní rovině je vlastně otáčení!",
                image: "placeholder-moivre-theorem-rotation",
              },
            ],
            tasks: [
              {
                id: "hs_c13_l4_t1",
                question: "Co představuje $\\varphi$ v goniometrickém tvaru?",
                options: [
                  "Reálnou část",
                  "Argument (úhel)",
                  "Modul (vzdálenost)",
                  "Imaginární složku",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c13_l4_t2",
                question:
                  "Jaký úhel $\\varphi$ má číslo $2i$ (leží na kladné ose y)?",
                options: [
                  "$0^\\circ$",
                  "$90^\\circ$ ($\\pi/2$)",
                  "$180^\\circ$",
                  "$45^\\circ$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c13_l4_t3",
                question: "Co se stane s úhlem při násobení komplexních čísel?",
                options: [
                  "Úhly se násobí",
                  "Úhly se sčítají",
                  "Úhly se nemění",
                  "Úhly se odečítají",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "hs_c13_l4_t4",
                question: "Převeď $z=1$ na goniometrický tvar.",
                options: [
                  "$1(\\cos 0 + i \\sin 0)$",
                  "$1(\\cos 90 + i \\sin 90)$",
                  "$\\cos \\pi + i \\sin \\pi$",
                  "$0 + i$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c13_l4_t5",
                question:
                  "Podle Moivreovy věty je $(\\cos x + i\\sin x)^2$ rovno:",
                options: [
                  "$\\cos^2 x + i\\sin^2 x$",
                  "$\\cos(2x) + i\\sin(2x)$",
                  "$2\\cos x + 2i\\sin x$",
                  "$1$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Kvadratické rovnice: Záporný diskriminant",
          content: {
            sections: [
              {
                heading: "Konec zákazu",
                text: "Na ZŠ jsme u kvadratické rovnice končili, když vyšel diskriminant $D < 0$. 'Nemá řešení,' psali jsme. Teď už víme, že má řešení v komplexním oboru $\\mathbb{C}$. \nPokud $D = -4$, pak $\\sqrt{D} = \\sqrt{-4} = 2i$. \nKořeny budou dva komplexně sdružené: $$ x_{1,2} = \\frac{-b \\pm i\\sqrt{|D|}}{2a} $$",
                image:
                  "[Image showing quadratic formula applied to D less than 0 producing complex roots]",
              },
              {
                heading: "Parabola bez průsečíků",
                text: "Geometricky to znamená, že parabola neprotíná osu $x$ (létá nad ní nebo pod ní). Ale algebraicky rovnice řešení má. Například $x^2 + 1 = 0$ má kořeny $i$ a $-i$.",
                image: "placeholder-parabola-no-x-intercepts",
              },
            ],
            tasks: [
              {
                id: "hs_c13_l5_t1",
                question:
                  "Kolik řešení má kvadratická rovnice se záporným diskriminantem v $\\mathbb{C}$?",
                options: [
                  "Žádné",
                  "Jedno",
                  "Dvě (komplexně sdružená)",
                  "Čtyři",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "hs_c13_l5_t2",
                question: "Vyřeš $x^2 + 4 = 0$.",
                options: ["$2$", "$-2$", "$\\pm 2i$", "$\\pm 2$"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "hs_c13_l5_t3",
                question:
                  "Pokud je jedním kořenem $3 + i$, jaký je druhý kořen (u reálných koeficientů)?",
                options: [
                  "$3 + i$ (stejný)",
                  "$3 - i$ (sdružený)",
                  "$-3 - i$",
                  "Nemůžeme vědět",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c13_l5_t4",
                question: "Vypočítej $\\sqrt{-16}$ pro účely vzorce.",
                options: ["$4$", "$-4$", "$4i$", "$-16i$"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "hs_c13_l5_t5",
                question: "Která rovnice má řešení $i$?",
                options: [
                  "$x^2 - 1 = 0$",
                  "$x^2 + 1 = 0$",
                  "$x + 1 = 0$",
                  "$x^2 = 0$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Vektory a souřadnice",
      description:
        "Geometrie bez pravítka. Naučíme se převést body a čáry na čísla. Zjistíme, že 'vektor' je vlastně jen návod na posun, naučíme se sčítat síly a pomocí jednoho magického násobení zjistíme, zda jsou na sebe stěny kolmé.",
      lessons: [
        {
          title: "Co je to vektor?",
          content: {
            sections: [
              {
                heading: "Bod vs. Vektor",
                text: "Jaký je rozdíl mezi bodem a vektorem? \n- Bod $A[1; 2]$ je špendlík zapíchnutý v mapě. Říká: 'Tady jsem'.\n- Vektor $\\vec{u} = (2; 3)$ je instrukce k pohybu. Říká: 'Jdi o 2 doprava a o 3 nahoru'.\nVektor nemá pevné místo. Je to jen směr a velikost. Můžeme ho umístit kamkoliv.",
                image:
                  "[Image showing difference between fixed points on a grid and a  vector arrow]",
              },
              {
                heading: "Výpočet souřadnic",
                text: "Vektor je orientovaná úsečka z bodu $A$ do bodu $B$. Značíme $\\vec{AB}$ nebo $\\vec{u}$. Jak zjistíme jeho souřadnice? Od konce odečteme začátek: $$ \\vec{u} = B - A $$ \nPokud je $A[1; 1]$ a $B[4; 5]$, pak $\\vec{u} = (4-1; 5-1) = (3; 4)$.",
                image: "placeholder-vector-coordinates-calculation",
              },
            ],
            tasks: [
              {
                id: "hs_c14_l1_t1",
                question: "Co reprezentuje vektor?",
                options: [
                  "Konkrétní místo v prostoru",
                  "Posun (směr a velikost)",
                  "Délku úsečky",
                  "Přímku",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c14_l1_t2",
                question:
                  "Mějme $A[2; 3]$ a $B[5; 7]$. Jaký je vektor $\\vec{AB}$?",
                options: ["$(3; 4)$", "$(7; 10)$", "$(-3; -4)$", "$(3; 10)$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c14_l1_t3",
                question:
                  "Co se stane, když zaměníme pořadí bodů (vektor $\\vec{BA}$)?",
                options: [
                  "Nic, vektor je stejný",
                  "Vektor bude mít opačná znaménka",
                  "Vektor bude nulový",
                  "Vektor se otočí o 90 stupňů",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c14_l1_t4",
                question: "Co je to 'nulový vektor'?",
                options: [
                  "Vektor $(0; 0)$, nikam nevede",
                  "Vektor $(1; 1)$",
                  "Bod v počátku",
                  "Chyba výpočtu",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c14_l1_t5",
                question:
                  "Jsou vektory $(1; 2)$ a $(1; 2)$ umístěné na různých místech shodné?",
                options: [
                  "Ano, na umístění nezáleží",
                  "Ne, musí vycházet ze stejného bodu",
                  "Jen pokud jsou rovnoběžné s osou",
                  "Nevím",
                ],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Operace s vektory",
          content: {
            sections: [
              {
                heading: "Sčítání sil",
                text: "Představ si, že na loďku působí proud řeky (vektor $\\vec{u}$) a vítr (vektor $\\vec{v}$). Kam loďka popluje? Popluje ve směru výsledného vektoru $\\vec{w} = \\vec{u} + \\vec{v}$.\nMatematicky je to prosté: Sčítáme 'hrušky s hruškami'.\n$$ (1; 2) + (3; 5) = (1+3; 2+5) = (4; 7) $$",
                image:
                  "[Image illustrating vector addition head-to-tail method]",
              },
              {
                heading: "Natahování a otáčení (Násobení číslem)",
                text: "Vektor můžeme vynásobit číslem $k$. \n- $2 \\cdot \\vec{u}$: Vektor se 2x prodlouží (stejný směr).\n- $0,5 \\cdot \\vec{u}$: Vektor se zkrátí na polovinu.\n- $-1 \\cdot \\vec{u}$: Vektor se otočí o $180^\\circ$ (opačný směr).\nNásobíme každou souřadnici zvlášť: $2 \\cdot (3; -1) = (6; -2)$.",
                image: "placeholder-vector-scaling",
              },
            ],
            tasks: [
              {
                id: "hs_c14_l2_t1",
                question:
                  "Sečti vektory $\\vec{u}=(2; 5)$ a $\\vec{v}=(-1; 3)$.",
                options: ["$(1; 8)$", "$(3; 8)$", "$(1; 2)$", "$(-2; 15)$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c14_l2_t2",
                question: "Jaké souřadnice má vektor opačný k $(3; -4)$?",
                options: ["$(-3; 4)$", "$(3; 4)$", "$(-3; -4)$", "$(4; -3)$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c14_l2_t3",
                question: "Vypočítej $3 \\cdot (2; 0) - (1; 1)$.",
                options: ["$(5; -1)$", "$(6; 0)$", "$(5; 1)$", "$(7; -1)$"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c14_l2_t4",
                question: "Co se stane, když vektor vynásobíš nulou?",
                options: [
                  "Vznikne nulový vektor $(0; 0)$",
                  "Vznikne číslo 0",
                  "Zůstane stejný",
                  "Zmizí",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c14_l2_t5",
                question: "Jsou vektory $(2; 4)$ a $(1; 2)$ rovnoběžné?",
                options: [
                  "Ano, jeden je násobkem druhého",
                  "Ne",
                  "Jen v 3D",
                  "Nelze určit",
                ],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Velikost vektoru (Vzdálenost)",
          content: {
            sections: [
              {
                heading: "Jak dlouhá je šipka?",
                text: "Velikost vektoru $|\\vec{u}|$ je vlastně délka úsečky. Použijeme Pythagorovu větu! Vektor má složku $x$ a $y$, které tvoří odvěsny pravoúhlého trojúhelníku. Přepona je naše velikost.\n$$ |\\vec{u}| = \\sqrt{u_1^2 + u_2^2} $$\nNapř. pro $\\vec{u}=(3; 4)$ je velikost $\\sqrt{3^2+4^2} = \\sqrt{25} = 5$.",
                image:
                  "[Image showing vector magnitude calculation using Pythagorean theorem triangle]",
              },
              {
                heading: "Vzdálenost dvou bodů",
                text: "Chceš změřit vzdálenost bodů $A$ a $B$? \n1. Udělej z nich vektor $\\vec{u} = B - A$.\n2. Spočítej velikost tohoto vektoru $|\\vec{u}|$.\nJe to mnohem přehlednější, než si pamatovat složitý vzorec pro vzdálenost bodů.",
                image: "placeholder-distance-between-points",
              },
            ],
            tasks: [
              {
                id: "hs_c14_l3_t1",
                question: "Jaká je velikost vektoru $(6; 8)$?",
                options: ["$10$", "$14$", "$100$", "$48$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c14_l3_t2",
                question: "Vzorec pro velikost vektoru v rovině je:",
                options: [
                  "$\\sqrt{u_1^2 + u_2^2}$",
                  "$u_1 + u_2$",
                  "$u_1^2 + u_2^2$",
                  "$\\sqrt{u_1 + u_2}$",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c14_l3_t3",
                question: "Jak se nazývá vektor, který má velikost 1?",
                options: [
                  "Jednotkový vektor",
                  "První vektor",
                  "Základní vektor",
                  "Malý vektor",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c14_l3_t4",
                question: "Vzdálenost bodů $A[1; 1]$ a $B[4; 5]$ je:",
                options: [
                  "$5$ (velikost vektoru $(3; 4)$)",
                  "$4$",
                  "$7$",
                  "$25$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c14_l3_t5",
                question: "Může být velikost vektoru záporná?",
                options: [
                  "Ne, je to vzdálenost",
                  "Ano, pokud vektor míří doleva",
                  "Ano, v komplexních číslech",
                  "Občas",
                ],
                correctAnswer: 0,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Skalární součin",
          content: {
            sections: [
              {
                heading: "Kouzlo s úhly",
                text: "Můžeme násobit dva vektory mezi sebou? Ano! Skalární součin $\\vec{u} \\cdot \\vec{v}$ je operace, jejímž výsledkem není vektor, ale ČÍSLO (skalár).\nVzorec v souřadnicích: $$ \\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 $$ (První s prvním plus druhý s druhým).\nNapř. $(2; 3) \\cdot (4; -1) = 2\\cdot4 + 3\\cdot(-1) = 8 - 3 = 5$.",
                image:
                  "[Image showing dot product formula and its relation to the angle between vectors]",
              },
              {
                heading: "Test kolmosti",
                text: "Toto je nejdůležitější využití! Skalární součin nám řekne, jaký úhel vektory svírají.\nPlatí: $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos \\alpha$.\nKlíčové pravidlo: Vektory jsou na sebe KOLMÉ právě tehdy, když je jejich skalární součin roven NULE. (protože $\\cos 90^\\circ = 0$).",
                image: "placeholder-vector-orthogonality-test",
              },
            ],
            tasks: [
              {
                id: "hs_c14_l4_t1",
                question: "Vypočítej skalární součin $(1; 5) \\cdot (2; -1)$.",
                options: ["$-3$", "$7$", "$3$", "$(2; -5)$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c14_l4_t2",
                question: "Kdy jsou dva vektory kolmé?",
                options: [
                  "Když je jejich skalární součin 0",
                  "Když je jejich skalární součin 1",
                  "Když jsou jejich souřadnice stejné",
                  "Když je jejich součet 0",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c14_l4_t3",
                question: "Jsou vektory $(2; 3)$ a $(-3; 2)$ kolmé?",
                options: [
                  "Ano ($2\\cdot(-3) + 3\\cdot2 = -6 + 6 = 0$)",
                  "Ne",
                  "Jen v pátek",
                  "Nelze určit",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c14_l4_t4",
                question: "K čemu slouží skalární součin?",
                options: [
                  "K výpočtu úhlu mezi vektory",
                  "K výpočtu délky vektoru",
                  "K sčítání vektorů",
                  "K násobení vektoru číslem",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c14_l4_t5",
                question: "Výsledkem skalárního součinu je:",
                options: ["Číslo (skalár)", "Vektor", "Bod", "Přímka"],
                correctAnswer: 0,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Vektorový součin (3D)",
          content: {
            sections: [
              {
                heading: "Třetí do party",
                text: "V prostoru (3D) existuje ještě vektorový součin $\\vec{u} \\times \\vec{v}$. Výsledkem je nový vektor, který je kolmý na oba původní vektory. Používáme pravidlo pravé ruky: palec (u), ukazovák (v), prostředník (výsledek).\nTento součin existuje pouze ve 3D!",
                image:
                  "[Image illustrating cross product right-hand rule and resultant vector]",
              },
              {
                heading: "Obsah rovnoběžníku",
                text: "Velikost tohoto nového vektoru $|\\vec{u} \\times \\vec{v}|$ se rovná obsahu rovnoběžníku, který ty dva vektory tvoří. Toho se využívá při výpočtech obsahů trojúhelníků v prostoru (je to polovina rovnoběžníku).",
                image: "placeholder-cross-product-area",
              },
            ],
            tasks: [
              {
                id: "hs_c14_l5_t1",
                question: "Výsledkem vektorového součinu je:",
                options: ["Vektor", "Číslo", "Matice", "Úhel"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c14_l5_t2",
                question:
                  "Jaký směr má vektor $\\vec{w} = \\vec{u} \\times \\vec{v}$?",
                options: [
                  "Je kolmý na $\\vec{u}$ i $\\vec{v}$",
                  "Je rovnoběžný s $\\vec{u}$",
                  "Půlí úhel mezi nimi",
                  "Je opačný k $\\vec{v}$",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c14_l5_t3",
                question: "K čemu se používá velikost vektorového součinu?",
                options: [
                  "K výpočtu obsahu rovnoběžníku/trojúhelníku",
                  "K výpočtu objemu",
                  "K testu kolmosti",
                  "K ničemu",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c14_l5_t4",
                question: "Vektorový součin existuje:",
                options: [
                  "Jen ve 3D (prostoru)",
                  "V rovině i prostoru",
                  "Jen v rovině",
                  "Všude",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c14_l5_t5",
                question:
                  "Pokud jsou vektory rovnoběžné, jejich vektorový součin je:",
                options: [
                  "Nulový vektor",
                  "Jednotkový vektor",
                  "Nekonečno",
                  "Součin jejich délek",
                ],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Analytická geometrie v rovině (Přímky)",
      description:
        "Jak naučit počítač narýsovat čáru? Musíme ji popsat rovnicí. Naučíme se tři jazyky přímek: parametrický (procházka), obecný (kolmá zeď) a směrnicový (funkce). Zjistíme, jak vypočítat průsečík dvou cest a jak daleko je bod od přímky.",
      lessons: [
        {
          title: "Parametrické vyjádření přímky",
          content: {
            sections: [
              {
                heading: "Start a Směr",
                text: "Představ si přímku jako stopu po chodci. Abychom ji popsali, potřebujeme dvě věci:\n1. Bod $A$ (Start): Odkud vychází.\n2. Směrový vektor $\\vec{u}$ (Směr): Kam jde.\nRovnice zní: $X = A + t \\cdot \\vec{u}$.\nKde $X$ je libovolný bod na přímce a $t$ je parametr (čas). Když $t=1$, jsme o krok dál. Když $t=-1$, couváme.",
                image:
                  "[Image illustrating parametric line equation X = A + t*u with points for t=0, t=1, t=2]",
              },
              {
                heading: "Rozpis do souřadnic",
                text: "V rovině má rovnice dvě řádky (pro $x$ a $y$):\n$$ x = a_1 + t \\cdot u_1 $$\n$$ y = a_2 + t \\cdot u_2 $$\nTo je skvělé pro fyziku – popisuje to pohyb bodu v čase.",
                image: "placeholder-parametric-equations-system",
              },
            ],
            tasks: [
              {
                id: "hs_c15_l1_t1",
                question: "Co potřebujeme k parametrickému vyjádření přímky?",
                options: [
                  "Dva vektory",
                  "Jeden bod a směrový vektor",
                  "Jeden bod a normálový vektor",
                  "Jen jeden bod",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c15_l1_t2",
                question:
                  "Mějme přímku $x = 2 + 3t, y = 1 - 2t$. Jaký je směrový vektor?",
                options: ["$(2; 1)$", "$(3; -2)$", "$(2; 3)$", "$(1; -2)$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c15_l1_t3",
                question:
                  "Leží bod $[5; -1]$ na přímce z předchozí otázky? (Zkus najít $t$)",
                options: [
                  "Ano, pro $t=1$",
                  "Ne",
                  "Ano, pro $t=0$",
                  "Ano, pro $t=2$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c15_l1_t4",
                question: "Jak získáš směrový vektor ze dvou bodů $A$ a $B$?",
                options: [
                  "$\\vec{u} = B - A$",
                  "$\\vec{u} = A + B$",
                  "$\\vec{u} = A \\cdot B$",
                  "Nelze to",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c15_l1_t5",
                question: "Kolik směrových vektorů má jedna přímka?",
                options: [
                  "Právě jeden",
                  "Nekonečně mnoho (všechny násobky)",
                  "Dva (tam a zpět)",
                  "Žádný",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Obecná rovnice přímky",
          content: {
            sections: [
              {
                heading: "Normálový vektor (Kolmice)",
                text: "Obecná rovnice vypadá takto: $$ ax + by + c = 0 $$ \nTady pozor! Čísla $a$ a $b$ NEJSOU směrový vektor. Tvoří tzv. normálový vektor $\\vec{n} = (a; b)$. \nNormálový vektor je kolmý na přímku. Představ si ho jako hřebík, který trčí z přímky ven.",
                image:
                  "[Image illustrating a line ax+by+c=0 and its normal vector n=(a,b) perpendicular to it]",
              },
              {
                heading: "Převod Směr $\\leftrightarrow$ Normála",
                text: "Jak udělat z vektoru kolmý vektor? Prohodíme souřadnice a u jedné změníme znaménko. (Protože jejich skalární součin musí být 0).\n- Směrový $\\vec{u} = (2; 3) \\rightarrow$ Normálový $\\vec{n} = (3; -2)$ (nebo $(-3; 2)$).\nTo je klíč k převodu mezi parametrickou a obecnou rovnicí.",
                image: "placeholder-vector-orthogonal-swap",
              },
            ],
            tasks: [
              {
                id: "hs_c15_l2_t1",
                question: "Co vyčteme z rovnice $2x - 5y + 3 = 0$?",
                options: [
                  "Směrový vektor $(2; -5)$",
                  "Normálový vektor $(2; -5)$",
                  "Bod $[2; -5]$",
                  "Směrnici 2",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c15_l2_t2",
                question:
                  "Najdi normálový vektor k přímce se směrovým vektorem $(1; 4)$.",
                options: ["$(1; 4)$", "$(4; 1)$", "$(4; -1)$", "$(-1; -4)$"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "hs_c15_l2_t3",
                question: "Který bod leží na přímce $x + y - 2 = 0$?",
                options: ["$[1; 1]$", "$[2; 2]$", "$[0; 0]$", "$[1; 2]$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c15_l2_t4",
                question: "Obecná rovnice existuje:",
                options: [
                  "Jen v rovině (2D)",
                  "V rovině i prostoru",
                  "Jen v prostoru",
                  "Nikdy",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c15_l2_t5",
                question:
                  "Jaký je vztah mezi normálovým a směrovým vektorem téže přímky?",
                options: [
                  "Jsou rovnoběžné",
                  "Jsou na sebe kolmé",
                  "Jsou totožné",
                  "Svou délku mají 1",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Směrnicový tvar (Návrat k funkcím)",
          content: {
            sections: [
              {
                heading: "Osamostatnění y",
                text: "Když z obecné rovnice vyjádříme $y$, dostaneme nám známou lineární funkci: $$ y = kx + q $$ \n- $k$: Směrnice (tangens úhlu, který přímka svírá s osou x).\n- $q$: Posun (kde protne osu y).\nTento tvar nefunguje pro svislé přímky (např. $x=3$), protože ty nejsou funkcemi.",
                image:
                  "[Image linking general equation ax+by+c=0 to slope-intercept form y=kx+q]",
              },
              {
                heading: "Výpočet směrnice",
                text: "Směrnice $k$ se dá vypočítat ze směrového vektoru $\\vec{u}=(u_1; u_2)$ jako podíl $u_2 / u_1$. ('Kolik jdu nahoru děleno kolik jdu doprava').\nNapř. směr $(2; 6) \\rightarrow k = 6/2 = 3$.",
                image: "placeholder-slope-calculation-vector",
              },
            ],
            tasks: [
              {
                id: "hs_c15_l3_t1",
                question: "Převeď $2x + y - 4 = 0$ na směrnicový tvar.",
                options: [
                  "$y = 2x - 4$",
                  "$y = -2x + 4$",
                  "$y = 2x + 4$",
                  "$x = -0,5y + 2$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c15_l3_t2",
                question:
                  "Jakou směrnici má přímka se směrovým vektorem $(1; 2)$?",
                options: ["$2$ ($2/1$)", "$0,5$ ($1/2$)", "$1$", "$-2$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c15_l3_t3",
                question: "Která přímka nemá směrnicový tvar?",
                options: [
                  "Vodorovná ($y = 5$)",
                  "Svislá ($x = 2$)",
                  "Klesající",
                  "Procházející počátkem",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c15_l3_t4",
                question: "Co znamená $k$ ve rovnici $y=kx+q$?",
                options: [
                  "Normálový vektor",
                  "Tangens směrového úhlu (sklon)",
                  "Průsečík s osou x",
                  "Délka přímky",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c15_l3_t5",
                question: "Jsou přímky $y=2x+1$ a $y=2x-5$ rovnoběžné?",
                options: [
                  "Ano (mají stejnou směrnici k=2)",
                  "Ne",
                  "Jen v úterý",
                  "Nelze určit",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Vzájemná poloha přímek",
          content: {
            sections: [
              {
                heading: "Detektivka se dvěma rovnicemi",
                text: "Máme dvě přímky. Jak se k sobě chovají?\n1. Podíváme se na jejich normálové (nebo směrové) vektory.\n- Jsou vektory násobkem? (např. $(1; 2)$ a $(2; 4)$) $\\rightarrow$ Přímky jsou rovnoběžné.\n- Nejsou násobkem? $\\rightarrow$ Přímky jsou různoběžné (mají průsečík).",
                image:
                  "[Image showing parallel vs intersecting lines based on vector comparison]",
              },
              {
                heading: "Hledání průsečíku",
                text: "Pokud jsou různoběžné, průsečík najdeme vyřešením soustavy rovnic. \nNapř. $x+y-3=0$ a $x-y+1=0$. \nSečteme rovnice $\\rightarrow 2x - 2 = 0 \\rightarrow x=1$. \nDosadíme $\\rightarrow 1+y-3=0 \\rightarrow y=2$. Průsečík je $[1; 2]$.",
                image: "placeholder-intersection-system-linear",
              },
            ],
            tasks: [
              {
                id: "hs_c15_l4_t1",
                question: "Jsou přímky $x+y=0$ a $2x+2y=5$ rovnoběžné?",
                options: [
                  "Ano (normálové vektory $(1;1)$ a $(2;2)$ jsou násobkem)",
                  "Ne",
                  "Jsou na sebe kolmé",
                  "Jsou totožné",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c15_l4_t2",
                question: "Jaké vektory mají na sebe kolmé přímky?",
                options: [
                  "Jejich skalární součin je 0",
                  "Jsou stejné",
                  "Jeden je dvojnásobkem druhého",
                  "Jejich součet je 0",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c15_l4_t3",
                question: "Najdi průsečík přímek $x=1$ a $y=2$.",
                options: [
                  "$[1; 2]$",
                  "$[2; 1]$",
                  "$[0; 0]$",
                  "Nemají průsečík",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c15_l4_t4",
                question: "Kolik společných bodů mají totožné přímky?",
                options: ["Jeden", "Žádný", "Nekonečně mnoho", "Dva"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "hs_c15_l4_t5",
                question:
                  "Řešíš soustavu rovnic pro průsečík a vyjde $0 = 5$. Co to znamená?",
                options: [
                  "Přímky jsou rovnoběžné různé (nemají průsečík)",
                  "Přímky jsou totožné",
                  "Přímky jsou různoběžné",
                  "Chyba ve vesmíru",
                ],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Vzdálenost bodu od přímky",
          content: {
            sections: [
              {
                heading: "Jak daleko je ke zdi?",
                text: "Vzdálenost bodu $M[x_0; y_0]$ od přímky $ax + by + c = 0$ se měří kolmo. Existuje na to 'dosazovací' vzorec: \n$$ d = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}} $$ \n1. Dosadíš bod do levé strany rovnice (do absolutní hodnoty).\n2. Vydělíš to velikostí normálového vektoru.",
                image:
                  "[Image showing perpendicular distance from point M to line p formula]",
              },
              {
                heading: "Odchylka přímek",
                text: "Úhel mezi dvěma přímkami spočítáme pomocí jejich vektorů (směrových nebo normálových). Použijeme vzorec pro skalární součin: \n$$ \\cos \\alpha = \\frac{|\\vec{u} \\cdot \\vec{v}|}{|\\vec{u}| \\cdot |\\vec{v}|} $$ \nAbsolutní hodnota nahoře zajistí, že nám vyjde ostrý úhel.",
                image: "placeholder-angle-between-lines",
              },
            ],
            tasks: [
              {
                id: "hs_c15_l5_t1",
                question:
                  "Jaká je vzdálenost bodu $[0; 0]$ od přímky $3x + 4y - 5 = 0$?",
                options: ["$1$ ($|-5| / 5$)", "$5$", "$0$", "$2$"],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "hs_c15_l5_t2",
                question: "Co je ve jmenovateli vzorce pro vzdálenost?",
                options: [
                  "Velikost normálového vektoru",
                  "Velikost směrového vektoru",
                  "Číslo 1",
                  "Součin souřadnic",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c15_l5_t3",
                question: "Jaký úhel svírají osy x a y?",
                options: [
                  "$90^\\circ$",
                  "$45^\\circ$",
                  "$0^\\circ$",
                  "$180^\\circ$",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c15_l5_t4",
                question: "Pokud vyjde $\\cos \\alpha = 0$, úhel je:",
                options: [
                  "$90^\\circ$ (přímky jsou kolmé)",
                  "$0^\\circ$",
                  "$45^\\circ$",
                  "$60^\\circ$",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c15_l5_t5",
                question: "Vzdálenost bodu, který leží na přímce, je:",
                options: ["$0$", "1", "Nekonečno", "Záporná"],
                correctAnswer: 0,
                xp: 10,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Kuželosečky",
      description:
        "Co mají společného dráhy planet, satelitní antény a chladicí věže elektráren? Jsou to křivky, které vzniknou, když rovinou říznete do kužele. Naučíme se je poznávat, rýsovat a popisovat rovnicemi.",
      lessons: [
        {
          title: "Kružnice: Dokonalý tvar",
          content: {
            sections: [
              {
                heading: "Definice a Středová rovnice",
                text: "Kružnice je množina bodů, které mají od středu $S[m; n]$ stále stejnou vzdálenost $r$ (poloměr). \nZ Pythagorovy věty odvodíme rovnici: $$ (x - m)^2 + (y - n)^2 = r^2 $$ \nKdyž vidíš $(x-2)^2 + (y+3)^2 = 25$, hned víš: Střed je $S[2; -3]$ a poloměr $r=5$.",
                image:
                  "[Image showing circle definition on Cartesian plane with radius r and center S(m,n)]",
              },
              {
                heading: "Obecná rovnice",
                text: "Když závorky roznásobíme, dostaneme obecnou rovnici: $x^2 + y^2 + Ax + By + C = 0$. \nPozor! Aby to byla kružnice, musí být u $x^2$ a $y^2$ stejné číslo (obvykle jednička). Pokud tam jsou různá čísla, je to elipsa. Pokud mají opačná znaménka, je to hyperbola.",
                image: "placeholder-circle-equation-forms",
              },
            ],
            tasks: [
              {
                id: "hs_c16_l1_t1",
                question: "Kde má střed kružnice $(x - 1)^2 + (y + 2)^2 = 9$?",
                options: ["$[1; -2]$", "$[-1; 2]$", "$[1; 2]$", "$[0; 0]$"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c16_l1_t2",
                question:
                  "Jaký je poloměr kružnice, pokud je na pravé straně rovnice číslo 16?",
                options: ["$16$", "$4$", "$8$", "$256$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "hs_c16_l1_t3",
                question:
                  "Která rovnice popisuje kružnici se středem v počátku?",
                options: [
                  "$x^2 + y^2 = r^2$",
                  "$x + y = r$",
                  "$x^2 - y^2 = r^2$",
                  "$y = x^2$",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c16_l1_t4",
                question: "Je rovnice $2x^2 + 2y^2 - 10 = 0$ kružnicí?",
                options: [
                  "Ano (koeficienty u kvadratických členů jsou stejné)",
                  "Ne, musí tam být jedničky",
                  "Ne, je to elipsa",
                  "Ne, je to přímka",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c16_l1_t5",
                question: "Jak zjistíš, zda bod leží na kružnici?",
                options: [
                  "Dosadím ho do rovnice a musí vyjít rovnost",
                  "Změřím to pravítkem",
                  "Musí mít kladné souřadnice",
                  "Musí ležet v kruhu",
                ],
                correctAnswer: 0,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Elipsa: Sešlápnutá kružnice",
          content: {
            sections: [
              {
                heading: "Zahradnická konstrukce",
                text: "Elipsa má dvě ohniska $E$ a $F$. Součet vzdáleností bodu na elipse od obou ohnisek je stálý ($2a$). \nRovnice vypadá jako 'kružnice, kterou někdo natáhl': \n$$ \\frac{(x-m)^2}{a^2} + \\frac{(y-n)^2}{b^2} = 1 $$ \n- $a$: Hlavní poloosa (ta delší).\n- $b$: Vedlejší poloosa (ta kratší).",
                image:
                  "[Image illustrating ellipse construction with two pins and a string]",
              },
              {
                heading: "Pythagoras v elipse",
                text: "V elipse platí vztah mezi poloosami a excentricitou $e$ (vzdálenost ohniska od středu). \nProtože $a$ je nejdelší (přepona), platí: $$ a^2 = b^2 + e^2 $$",
                image: "placeholder-ellipse-pythagoras",
              },
            ],
            tasks: [
              {
                id: "hs_c16_l2_t1",
                question: "Co určuje parametr $a$ u elipsy?",
                options: [
                  "Délku hlavní poloosy",
                  "Délku vedlejší poloosy",
                  "Excentricitu",
                  "Poloměr",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c16_l2_t2",
                question:
                  "V rovnici $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$ je hlavní poloosa $a$ rovna:",
                options: ["$25$", "$5$", "$9$", "$3$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "hs_c16_l2_t3",
                question: "Jaký tvar má elipsa, kde $a = b$?",
                options: [
                  "Je to kružnice",
                  "Je to úsečka",
                  "Je to hyperbola",
                  "To nejde",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c16_l2_t4",
                question: "Ohniska elipsy leží:",
                options: [
                  "Na hlavní ose",
                  "Na vedlejší ose",
                  "Mimo elipsu",
                  "Ve středu",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c16_l2_t5",
                question: "Které znaménko je v rovnici elipsy mezi zlomky?",
                options: ["Plus (+)", "Mínus (-)", "Krát (*)", "Rovná se (=)"],
                correctAnswer: 0,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Hyperbola: Dvě větve",
          content: {
            sections: [
              {
                heading: "Rozdíl vzdáleností",
                text: "Hyperbola je množina bodů, pro které je rozdíl vzdáleností od ohnisek stálý. Graf se skládá ze dvou oddělených větví. \nRovnice je podobná elipse, ale má mínus: \n$$ \\frac{(x-m)^2}{a^2} - \\frac{(y-n)^2}{b^2} = 1 $$ \nPokud je minus u $y$, hyperbola je vodorovná (otevírá se do stran). Pokud je minus u $x$, je svislá (nahoru a dolů).",
                image:
                  "[Image showing hyperbola parts: vertices, foci, asymptotes]",
              },
              {
                heading: "Asymptoty",
                text: "Hyperbola má dvě vodící čáry – asymptoty, ke kterým se blíží, ale nikdy se jich nedotkne. Vytvářejí kříž procházející středem.",
                image: "placeholder-hyperbola-asymptotes",
              },
            ],
            tasks: [
              {
                id: "hs_c16_l3_t1",
                question: "Jak poznáš rovnici hyperboly od elipsy?",
                options: [
                  "Má mezi členy znaménko mínus",
                  "Má mezi členy znaménko plus",
                  "Nemá zlomky",
                  "Má třetí mocninu",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c16_l3_t2",
                question: "Co jsou asymptoty hyperboly?",
                options: [
                  "Přímky, ke kterým se graf blíží",
                  "Ohniska",
                  "Tečny ve vrcholech",
                  "Osy souměrnosti",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c16_l3_t3",
                question:
                  "V rovnici $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ je $a$ rovno:",
                options: ["$4$", "$16$", "$3$", "$9$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c16_l3_t4",
                question: "Rovnomosá hyperbola (např. $y=1/x$) má asymptoty:",
                options: ["Na sebe kolmé", "Rovnoběžné", "Totožné", "Žádné"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c16_l3_t5",
                question: "Pro hyperbolu platí vztah (Pythagoras):",
                options: [
                  "$e^2 = a^2 + b^2$ (excentricita je největší)",
                  "$a^2 = b^2 + e^2$",
                  "$b^2 = a^2 + e^2$",
                  "$e = a + b$",
                ],
                correctAnswer: 0,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Parabola: Geometrický pohled",
          content: {
            sections: [
              {
                heading: "Ohnisko a Řídící přímka",
                text: "Parabola je množina bodů, které mají stejnou vzdálenost od ohniska $F$ a od řídící přímky $d$. \nRovnice má druhou mocninu jen u jedné proměnné!\n- $(x-m)^2 = 2p(y-n)$: Otevřená nahoru/dolů (známe z funkcí).\n- $(y-n)^2 = 2p(x-m)$: Otevřená doprava/doleva (to je novinka!).",
                image:
                  "[Image illustrating parabola definition: distance to Focus equals distance to Directrix]",
              },
              {
                heading: "Parametr p",
                text: "Číslo $p$ určuje, jak je parabola 'široká'. Ohnisko je vzdáleno od vrcholu o $p/2$.",
                image: "placeholder-parabola-focus-directrix",
              },
            ],
            tasks: [
              {
                id: "hs_c16_l4_t1",
                question: "Jak poznáš rovnici paraboly?",
                options: [
                  "Jedna proměnná je na druhou, druhá na první",
                  "Obě proměnné jsou na druhou",
                  "Je tam znaménko mínus",
                  "Je to zlomek",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c16_l4_t2",
                question: "Kam se otevírá parabola $y^2 = 4x$?",
                options: ["Doprava (kladná osa x)", "Doleva", "Nahoru", "Dolů"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c16_l4_t3",
                question: "Kam se otevírá parabola $x^2 = -4y$?",
                options: ["Dolů", "Nahoru", "Doprava", "Doleva"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c16_l4_t4",
                question: "Co je řídící přímka?",
                options: [
                  "Přímka, od které mají body paraboly stejnou vzdálenost jako od ohniska",
                  "Osa paraboly",
                  "Tečna ve vrcholu",
                  "Asymptota",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c16_l4_t5",
                question: "Vrchol paraboly $(x-2)^2 = 6(y+1)$ je:",
                options: ["$[2; -1]$", "$[-2; 1]$", "$[0; 0]$", "$[2; 1]$"],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Vzájemná poloha přímky a kuželosečky",
          content: {
            sections: [
              {
                heading: "Řezání kuželoseček",
                text: "Přímka může kuželosečku:\n1. Protnout (sečna, 2 body).\n2. Dotknout se (tečna, 1 bod).\n3. Minout (vnější přímka, 0 bodů).\nJak to zjistíme? Vyjádříme z rovnice přímky $y$ (nebo $x$), dosadíme do rovnice kuželosečky a vznikne kvadratická rovnice.",
                image:
                  "[Image showing secant, tangent, and non-intersecting line relative to a circle]",
              },
              {
                heading: "Diskriminant rozhodne",
                text: "Podle diskriminantu kvadratické rovnice:\n- $D > 0$: Dva body (sečna).\n- $D = 0$: Jeden bod (tečna).\n- $D < 0$: Žádný bod (vnější přímka).",
                image: "placeholder-discriminant-intersection",
              },
            ],
            tasks: [
              {
                id: "hs_c16_l5_t1",
                question: "Kolik společných bodů má tečna s kružnicí?",
                options: ["Jeden", "Dva", "Žádný", "Nekonečně"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c16_l5_t2",
                question: "Pokud vyjde diskriminant záporný, přímka je:",
                options: [
                  "Vnější přímka (nesečna)",
                  "Tečna",
                  "Sečna",
                  "Asymptota",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c16_l5_t3",
                question: "Jak najdeš průsečíky?",
                options: [
                  "Vyřešením soustavy rovnic",
                  "Rýsováním",
                  "Odhadem",
                  "Pomocí derivace",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c16_l5_t4",
                question:
                  "Může mít přímka s parabolou jen jeden průsečík, a přitom nebýt tečnou?",
                options: [
                  "Ano, pokud je rovnoběžná s osou paraboly",
                  "Ne, vždy musí být tečna",
                  "Ano, pokud prochází ohniskem",
                  "Ne",
                ],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "hs_c16_l5_t5",
                question: "Tečna ke kružnici je kolmá na:",
                options: [
                  "Poloměr v bodě dotyku",
                  "Osu x",
                  "Osu y",
                  "Libovolnou tětivu",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Kombinatorika a Pravděpodobnost",
      description:
        "Svět je plný možností, ale kolik jich přesně je? Naučíme se spočítat, kolika způsoby lze seřadit knihy v poličce, jaká je šance, že vytáhnete eso, a proč sázkové kanceláře vždy vyhrávají. Vstupujeme do světa faktoriálů a kombinačních čísel.",
      lessons: [
        {
          title: "Kombinatorické pravidlo součinu a Faktoriál",
          content: {
            sections: [
              {
                heading: "Cesty a oblečení",
                text: "Základní pravidlo kombinatoriky je prosté: Pokud mám 3 trička a 2 kalhoty, kolik outfitů mohu vytvořit? Ke každému tričku si mohu vzít jedny ze dvou kalhot. Tedy $3 \\cdot 2 = 6$ možností. Tomu říkáme pravidlo součinu. Používáme ho, když vybíráme nezávisle jednu věc z jedné hromádky a druhou z druhé.",
                image: "",
              },
              {
                heading: "Faktoriál (!)",
                text: "Kolika způsoby seřadit 5 lidí do fronty? \n- Na 1. místo vybírám z 5 lidí.\n- Na 2. místo už jen ze 4 (jeden už stojí).\n- Na 3. místo ze 3...\nCelkem: $5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$. \nTomuto součinu říkáme faktoriál a značíme ho vykřičníkem: $5!$. \nPozor: $0! = 1$ (prázdná množina lze seřadit jediným způsobem – nijak).",
                image: "placeholder-factorial-queue",
              },
            ],
            tasks: [
              {
                id: "hs_c17_l1_t1",
                question: "Vypočítej $4!$.",
                options: ["$24$", "$10$", "$12$", "$4$"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c17_l1_t2",
                question:
                  "Mám 3 předkrmy, 4 hlavní jídla a 2 dezerty. Kolik různých menu sestavím?",
                options: [
                  "$9$",
                  "$24$ ($3 \\cdot 4 \\cdot 2$)",
                  "$12$",
                  "$14$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "hs_c17_l1_t3",
                question: "Kolikrát je $5!$ větší než $4!$?",
                options: [
                  "$5\\times$",
                  "O jednu",
                  "$4\\times$",
                  "Je to stejné",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c17_l1_t4",
                question: "Kolika způsoby lze přeskupit písmena ve slově LES?",
                options: ["$3! = 6$", "$3$", "$9$", "$1$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c17_l1_t5",
                question: "Čemu se rovná $\\frac{100!}{99!}$?",
                options: ["$100$", "$1$", "$\\frac{100}{99}$", "$99$"],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Variace a Permutace (Na pořadí záleží)",
          content: {
            sections: [
              {
                heading: "Záleží na pořadí?",
                text: "Toto je nejdůležitější otázka kombinatoriky. \n- Je rozdíl mezi heslem 1234 a 4321? ANO. (Záleží na pořadí $\\rightarrow$ Variace/Permutace).\n- Je rozdíl mezi týmem {Petr, Jana} a {Jana, Petr}? NE. (Nezáleží na pořadí $\\rightarrow$ Kombinace).",
                image:
                  "[Image illustrating difference between a permutation lock code and a fruit bowl combination]",
              },
              {
                heading: "Variace vs. Permutace",
                text: "1. Permutace: Mícháme všechny prvky, co máme. (5 lidí do fronty). Počet je $P(n) = n!$.\n2. Variace: Vybíráme jen několik prvků a řadíme je. (Z 10 běžců vybíráme medailisty na 1., 2. a 3. místo). \n$$ V(k, n) = \\frac{n!}{(n-k)!} $$ \n(Pro běžce: $10 \\cdot 9 \\cdot 8$).",
                image: "placeholder-race-podium",
              },
            ],
            tasks: [
              {
                id: "hs_c17_l2_t1",
                question:
                  "Vybírám PIN kód (4 čísla z 10, mohou se opakovat). Jde o variace s opakováním. Kolik jich je?",
                options: [
                  "$10^4 = 10\\,000$",
                  "$4^{10}$",
                  "$10 \\cdot 9 \\cdot 8 \\cdot 7$",
                  "$40$",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c17_l2_t2",
                question:
                  "8 běžců běží závod. Kolik je možností pro stupně vítězů (zlato, stříbro, bronz)?",
                options: [
                  "$8 \\cdot 7 \\cdot 6 = 336$",
                  "$8 \\cdot 8 \\cdot 8$",
                  "$3 \\cdot 8$",
                  "$8!$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c17_l2_t3",
                question: "Kdy použiješ permutace?",
                options: [
                  "Když řadím všechny prvky množiny",
                  "Když vybírám jen část prvků",
                  "Když nezáleží na pořadí",
                  "Když sčítám pravděpodobnosti",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c17_l2_t4",
                question: "Kolika způsoby si může 6 lidí sednout na 6 židlí?",
                options: ["$6! = 720$", "$6^6$", "$36$", "$6$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c17_l2_t5",
                question: "Co znamená 'variace s opakováním'?",
                options: [
                  "Prvky se mohou ve výběru opakovat (např. heslo 1111)",
                  "Výběr opakujeme pořád dokola",
                  "Prvky se neopakují",
                  "To neexistuje",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Kombinace (Na pořadí nezáleží)",
          content: {
            sections: [
              {
                heading: "Třídní tým",
                text: "Z 30 žáků máme vybrat trojici na úklid. Je jedno, jestli vyberu (A, B, C) nebo (C, B, A). Je to pořád ta stejná skupina. \nPočítáme to pomocí kombinačního čísla $\\binom{n}{k}$ (čti: 'n nad k').\n$$ \\binom{n}{k} = \\frac{n!}{k!(n-k)!} $$ \nVlastně vypočítáme variace ($n!/(n-k)!$) a pak vydělíme počtem možných seřazení té trojice ($k!$), protože na pořadí nezáleží.",
                image:
                  "[Image illustrating binomial coefficient formula n choose k]",
              },
              {
                heading: "Sportka a Pascalův trojúhelník",
                text: "Ve Sportce se losuje 6 čísel ze 49. Nezáleží na tom, v jakém pořadí vypadnou. Počet možností je $\\binom{49}{6}$, což je téměř 14 milionů. \nKombinační čísla najdeme i v Pascalově trojúhelníku (každé číslo je součtem dvou nad ním).",
                image: "placeholder-pascals-triangle",
              },
            ],
            tasks: [
              {
                id: "hs_c17_l3_t1",
                question: "Jak vypočítáš $\\binom{5}{2}$?",
                options: [
                  "$\\frac{5 \\cdot 4}{2 \\cdot 1} = 10$",
                  "$5 \\cdot 4 = 20$",
                  "$5 / 2 = 2,5$",
                  "$5^2 = 25$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c17_l3_t2",
                question:
                  "Kolikrát si ťukne 5 lidí při přípitku (každý s každým)?",
                options: ["10 (kombinace 2 z 5)", "20", "25", "5"],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "hs_c17_l3_t3",
                question:
                  "Platí $\\binom{n}{k} = \\binom{n}{n-k}$? (Např. vybrat 2 lidi, co jedou = vybrat 3, co nejedou)",
                options: [
                  "Ano, vždy",
                  "Ne, nikdy",
                  "Jen pro sudá čísla",
                  "Jen pro $k=1$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c17_l3_t4",
                question: "Který příklad vede na kombinace?",
                options: [
                  "Losování 6 čísel ve Sportce",
                  "Zadávání PIN kódu",
                  "Běžecký závod",
                  "Seřazení knih na poličce",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c17_l3_t5",
                question:
                  "Kolik je $\\binom{n}{n}$? (Kolika způsoby vyberu všech n prvků z n?)",
                options: ["$1$", "$n$", "$0$", "$n!$"],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Pravděpodobnost: Základy",
          content: {
            sections: [
              {
                heading: "Příznivé ku všem",
                text: "Klasická pravděpodobnost (Laplaceova) se počítá jednoduše: \n$$ P(A) = \\frac{m}{n} = \\frac{\\text{počet příznivých výsledků}}{\\text{počet všech možných výsledků}} $$\nHod kostkou: Jaká je šance, že padne číslo větší než 4 ($5, 6$)? Příznivé jsou 2. Všech je 6. $P = 2/6 = 1/3 \\approx 33,3\\,\\%$.",
                image:
                  "[Image illustrating probability fraction: favorable outcomes over total outcomes using dice]",
              },
              {
                heading: "Jev opačný (Doplněk)",
                text: "Někdy je těžké spočítat, co chceme (např. 'padne aspoň jedna šestka'). Snazší je spočítat opak ('nepadne žádná šestka') a odečíst to od jedničky (100 %). \n$$ P(A) = 1 - P(A') $$",
                image: "placeholder-complementary-probability",
              },
            ],
            tasks: [
              {
                id: "hs_c17_l4_t1",
                question:
                  "Jaká je pravděpodobnost, že na kostce padne sudé číslo?",
                options: ["$3/6 = 0,5$", "$2/6 = 0,33$", "$1/6$", "$4/6$"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c17_l4_t2",
                question:
                  "V balíčku 32 karet jsou 4 esa. Jaká je šance vytáhnout eso?",
                options: ["$4/32 = 1/8$", "$1/32$", "$4/4$", "$1/4$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c17_l4_t3",
                question:
                  "Součet pravděpodobnosti jevu a jevu opačného je vždy:",
                options: ["$1$ ($100\\,\\%$)", "$0$", "$0,5$", "Nekonečno"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c17_l4_t4",
                question: "Jaká je pravděpodobnost nemožného jevu?",
                options: ["$0$", "$1$", "$-1$", "Malá"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c17_l4_t5",
                question:
                  "Hodím dvěma mincemi. Jaká je šance, že padnou dva orli?",
                options: ["$1/4$ (OO, OP, PO, PP)", "$1/2$", "$1/3$", "$1/8$"],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Sčítání a násobení pravděpodobností",
          content: {
            sections: [
              {
                heading: "NEBO vs. A ZÁROVEŇ",
                text: "1. Sčítání ($A \\cup B$): Ptáme se na 'A nebo B'. Pokud se jevy vylučují (padne 1 nebo 2), pravděpodobnosti sčítáme. Pokud se překrývají, musíme odečíst průnik.\n2. Násobení ($A \\cap B$): Ptáme se na 'A a zároveň B' (nebo 'A a pak B'). Pokud jsou jevy nezávislé (hod dvěma kostkami), pravděpodobnosti násobíme. \n$$ P(A \\cap B) = P(A) \\cdot P(B) $$",
                image:
                  "[Image illustrating intersection and union probability rules with Venn diagrams]",
              },
              {
                heading: "Závislé jevy",
                text: "Pokud taháme karty z balíčku a nevracíme je, jevy jsou závislé. Druhý tah je ovlivněn prvním (v balíčku je méně karet). \nPravděpodobnost vytažení dvou es po sobě: \n1. tah: $4/32$. \n2. tah: už jen $3/31$. \nVýsledek: $(4/32) \\cdot (3/31)$.",
                image: "placeholder-dependent-probability-cards",
              },
            ],
            tasks: [
              {
                id: "hs_c17_l5_t1",
                question:
                  "Hodím kostkou dvakrát. Jaká je šance, že padne 6 A POTOM znovu 6?",
                options: [
                  "$1/6 \\cdot 1/6 = 1/36$",
                  "$1/6 + 1/6 = 2/6$",
                  "$1/12$",
                  "$2/36$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c17_l5_t2",
                question:
                  "Jaká je šance, že na kostce padne číslo menší než 3 (1, 2) NEBO číslo 6?",
                options: [
                  "$2/6 + 1/6 = 3/6 = 0,5$",
                  "$2/6 \\cdot 1/6$",
                  "$1/6$",
                  "$4/6$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c17_l5_t3",
                question: "Kdy pravděpodobnosti násobíme?",
                options: [
                  "Když chceme, aby nastaly oba jevy současně (za sebou)",
                  "Když chceme jeden nebo druhý",
                  "Když se jevy vylučují",
                  "Když počítáme sjednocení",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c17_l5_t4",
                question: "Co znamená, že jsou jevy nezávislé?",
                options: [
                  "Výsledek jednoho neovlivňuje druhý (např. hody mincí)",
                  "Jeden jev vylučuje druhý",
                  "Součet jejich pravděpodobností je 1",
                  "Nemohou nastat najednou",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c17_l5_t5",
                question:
                  "Jaká je pravděpodobnost, že padne 'panna' 3x po sobě?",
                options: [
                  "$0,5 \\cdot 0,5 \\cdot 0,5 = 0,125$",
                  "$0,5 + 0,5 + 0,5 = 1,5$",
                  "$1/3$",
                  "$3 \\cdot 0,5$",
                ],
                correctAnswer: 0,
                xp: 25,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Posloupnosti a řady",
      description:
        "Čísla v řadě za sebou, která mají řád. Naučíme se předpovídat budoucnost (n-tý člen), sečíst stohlavé řady čísel pomocí jediného vzorce a podíváme se do tváře nekonečnu. Zjistíme také, proč je složené úročení tak mocné.",
      lessons: [
        {
          title: "Co je to posloupnost?",
          content: {
            sections: [
              {
                heading: "Funkce na schodech",
                text: "Posloupnost je vlastně funkce, ale jejím definičním oborem jsou jen přirozená čísla ($1, 2, 3...$). Nekreslíme ji jako spojitou čáru, ale jako izolované tečky (schody). \nČleny značíme $a_1$ (první), $a_2$ (druhý), ..., $a_n$ (n-tý).\nNapř. $2, 4, 6, 8...$ je posloupnost sudých čísel.",
                image:
                  "[Image plotting a sequence as discrete points on a graph vs a continuous function]",
              },
              {
                heading: "Vzorec vs. Rekurze",
                text: "Dva způsoby, jak zadat posloupnost:\n1. Vzorec pro n-tý člen: $a_n = 2n$. Dosadím $n=100$ a hned vím, že stý člen je 200. Je to 'teleport'.\n2. Rekurentně: Řekneme start a pravidlo pro další krok. $a_1 = 2, a_{n+1} = a_n + 2$. Musím spočítat všechny předchozí členy, abych se dostal ke stému. Je to 'chůze'.",
                image: "placeholder-recursive-formula-steps",
              },
            ],
            tasks: [
              {
                id: "hs_c18_l1_t1",
                question:
                  "Jaký je 5. člen posloupnosti dané vzorcem $a_n = n^2 + 1$?",
                options: ["$26$ ($5^2 + 1$)", "$25$", "$11$", "$6$"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c18_l1_t2",
                question: "Co znamená $a_{n+1}$?",
                options: [
                  "Člen následující po $a_n$",
                  "Člen předcházející $a_n$",
                  "Součet n a 1",
                  "První člen",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c18_l1_t3",
                question:
                  "Rekurentní zadání $a_1=1, a_{n+1} = 2 \\cdot a_n$ popisuje posloupnost:",
                options: [
                  "$1, 2, 4, 8, 16...$",
                  "$1, 3, 5, 7...$",
                  "$1, 2, 3, 4...$",
                  "$2, 4, 6, 8...$",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c18_l1_t4",
                question: "Je posloupnost $a_n = 1/n$ rostoucí nebo klesající?",
                options: [
                  "Klesající ($1, 0,5, 0,33...$)",
                  "Rostoucí",
                  "Konstantní",
                  "Ani jedno",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c18_l1_t5",
                question: "Co je definičním oborem posloupnosti?",
                options: [
                  "Přirozená čísla $\\mathbb{N}$",
                  "Reálná čísla $\\mathbb{R}$",
                  "Interval $\\langle 0; 1 \\rangle$",
                  "Pouze sudá čísla",
                ],
                correctAnswer: 0,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Aritmetická posloupnost",
          content: {
            sections: [
              {
                heading: "Stále stejně daleko",
                text: "V aritmetické posloupnosti se k předchozímu členu vždy přičítá stejné číslo – diference $d$. \nNapř. $3, 5, 7, 9...$ ($d=2$).\nVzorec pro n-tý člen: $$ a_n = a_1 + (n-1) \\cdot d $$ \nChci 10. člen? Vezmu první a přičtu k němu 9 skoků (diferencí).",
                image:
                  "[Image illustrating arithmetic progression as stepping stones with equal spacing]",
              },
              {
                heading: "Gaussovo sčítání",
                text: "Jak rychle sečíst $1 + 2 + 3 + ... + 100$? Malý Gauss si všiml, že součet prvního a posledního ($1+100$) je stejný jako druhého a předposledního ($2+99$). Párů je 50. Součet je $101 \\cdot 50 = 5050$. \nVzorec pro součet prvních $n$ členů: $$ s_n = \\frac{n}{2} \\cdot (a_1 + a_n) $$",
                image: "placeholder-gauss-summation-trick",
              },
            ],
            tasks: [
              {
                id: "hs_c18_l2_t1",
                question:
                  "Jaká je diference $d$ posloupnosti $10, 7, 4, 1...$?",
                options: ["$-3$", "$3$", "$0,3$", "$-10$"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c18_l2_t2",
                question:
                  "Najdi 10. člen posloupnosti $2, 4, 6...$ ($a_1=2, d=2$).",
                options: ["$20$", "$18$", "$22$", "$10$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c18_l2_t3",
                question:
                  "Vzorec pro součet $s_n$ aritmetické posloupnosti je:",
                options: [
                  "$\\frac{n}{2}(a_1 + a_n)$",
                  "$a_1 + a_n$",
                  "$n \\cdot d$",
                  "$\\frac{a_1 + a_n}{n}$",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c18_l2_t4",
                question:
                  "Mezi čísla 4 a 16 vlož jedno číslo tak, aby tvořila aritmetickou posloupnost.",
                options: ["$10$ (průměr 4 a 16)", "$8$", "$12$", "$6$"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c18_l2_t5",
                question: "Je posloupnost $1, 1, 1, 1...$ aritmetická?",
                options: [
                  "Ano, $d=0$",
                  "Ne, neroste",
                  "Ne, nemění se",
                  "Jen geometrická",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Geometrická posloupnost",
          content: {
            sections: [
              {
                heading: "Násobení místo sčítání",
                text: "V geometrické posloupnosti se předchozí člen násobí číslem – kvocientem $q$. \nNapř. $3, 6, 12, 24...$ ($q=2$). \nVzorec pro n-tý člen: $$ a_n = a_1 \\cdot q^{n-1} $$ \nToto je princip úroků v bance nebo množení bakterií.",
                image: "[Image showing geometric growth doubling at each step]",
              },
              {
                heading: "Součet (Když q není 1)",
                text: "Součet členů geometrické posloupnosti roste mnohem rychleji (nebo se blíží k limitě, pokud je $q$ malé). \nVzorec: $$ s_n = a_1 \\cdot \\frac{q^n - 1}{q - 1} $$ \nLegenda o šachovnici: Když dáš na 1. políčko zrnko rýže a na každé další dvojnásobek, na konci budeš mít víc rýže, než je na celém světě.",
                image: "placeholder-chessboard-rice-legend",
              },
            ],
            tasks: [
              {
                id: "hs_c18_l3_t1",
                question:
                  "Jaký je kvocient $q$ posloupnosti $2, -6, 18, -54...$?",
                options: ["$-3$", "$3$", "$-4$", "$1/3$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c18_l3_t2",
                question:
                  "Najdi 4. člen posloupnosti $1, 10, 100...$ ($a_1=1, q=10$).",
                options: ["$1000$", "$300$", "$10\\,000$", "$10$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c18_l3_t3",
                question:
                  "Co se stane, když je kvocient $q$ mezi -1 a 1 (např. 0,5)?",
                options: [
                  "Členy se zmenšují (blíží se k nule)",
                  "Členy rostou",
                  "Posloupnost osciluje do nekonečna",
                  "Střídají se znaménka, ale rostou",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c18_l3_t4",
                question: "Složené úročení (úroky z úroků) je příkladem:",
                options: [
                  "Geometrické posloupnosti",
                  "Aritmetické posloupnosti",
                  "Lineární funkce",
                  "Náhodného jevu",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c18_l3_t5",
                question:
                  "Mezi 2 a 8 vlož číslo tak, aby tvořilo geometrickou posloupnost.",
                options: [
                  "$4$ ($2 \\cdot 2 = 4, 4 \\cdot 2 = 8$)",
                  "$5$ (aritmetický průměr)",
                  "$6$",
                  "$3$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Limita posloupnosti",
          content: {
            sections: [
              {
                heading: "Kam to spěje?",
                text: "Zkoumáme, co se děje s členy $a_n$, když $n$ roste do nekonečna. \n- Konvergentní: Posloupnost se blíží k jednomu číslu (limitě). Např. $1/n$ ($1, 0,5, 0,33...$) se blíží k nule.\n- Divergentní: Posloupnost utíká do nekonečna ($n^2$) nebo skáče tam a zpět ($(-1)^n$) a nikde se neustálí.",
                image:
                  "[Image illustrating convergence of 1/n to 0 vs divergence of n^2]",
              },
              {
                heading: "Vlastní vs. Nevlastní limita",
                text: "Pokud se posloupnost blíží ke konkrétnímu číslu (třeba 5), má vlastní limitu. Pokud roste nade všechny meze, má nevlastní limitu ($+\\infty$ nebo $-\\infty$).",
                image: "placeholder-limit-types",
              },
            ],
            tasks: [
              {
                id: "hs_c18_l4_t1",
                question: "Jaká je limita posloupnosti $a_n = 1/n$?",
                options: ["$0$", "$1$", "Nekonečno", "Nemá limitu"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c18_l4_t2",
                question: "Má posloupnost $1, -1, 1, -1...$ limitu?",
                options: [
                  "Ne, osciluje (diverguje)",
                  "Ano, 0",
                  "Ano, 1",
                  "Ano, -1",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c18_l4_t3",
                question: "Posloupnost $2, 4, 8, 16...$ má limitu:",
                options: [
                  "$+\\infty$ (nevlastní)",
                  "$0$",
                  "$2$",
                  "Nemá žádnou",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "hs_c18_l4_t4",
                question: "Co znamená, že je posloupnost konvergentní?",
                options: [
                  "Má vlastní limitu (konkrétní číslo)",
                  "Má limitu nekonečno",
                  "Nemá limitu",
                  "Stále roste",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c18_l4_t5",
                question: "Limita konstantní posloupnosti $5, 5, 5...$ je:",
                options: ["$5$", "$0$", "Nekonečno", "Nemá"],
                correctAnswer: 0,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Nekonečná geometrická řada",
          content: {
            sections: [
              {
                heading: "Součet nekonečna",
                text: "Můžeme sečíst nekonečně mnoho čísel a dostat konečný výsledek? ANO! Ale jen když se čísla rychle zmenšují (geometrická řada s $|q| < 1$).\nNapř. $1 + 1/2 + 1/4 + 1/8 + ... = 2$.\nJe to jako Zenonův paradox: Achilles dohoní želvu, i když musí překonat nekonečně mnoho úseků.",
                image:
                  "[Image illustrating the sum of 1/2 + 1/4 + 1/8... filling a square of area 1]",
              },
              {
                heading: "Vzorec pro součet",
                text: "Pokud $|q| < 1$, pak součet je: $$ S = \\frac{a_1}{1 - q} $$ \nDíky tomuto vzorci umíme převádět periodická čísla na zlomky (např. $0,333...$ je řada $3/10 + 3/100...$).",
                image: "placeholder-infinite-series-formula",
              },
            ],
            tasks: [
              {
                id: "hs_c18_l5_t1",
                question: "Kdy můžeme sečíst nekonečnou geometrickou řadu?",
                options: [
                  "Když $|q| < 1$",
                  "Když $q > 1$",
                  "Když $q = 1$",
                  "Vždy",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "hs_c18_l5_t2",
                question: "Sečti řadu $1 + 1/2 + 1/4 + ...$ ($a_1=1, q=0,5$).",
                options: [
                  "$2$ ($1 / (1 - 0,5)$)",
                  "$1,5$",
                  "Nekonečno",
                  "$100$",
                ],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "hs_c18_l5_t3",
                question: "Co se stane, když sečteme $1 + 2 + 4 + 8...$?",
                options: [
                  "Součet je nekonečno (diverguje)",
                  "Součet je -1",
                  "Součet je 0",
                  "Součet je 1000",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "hs_c18_l5_t4",
                question: "Periodické číslo $0,999...$ je rovno:",
                options: [
                  "$1$",
                  "$0,9$",
                  "Nekonečně blízko 1, ale ne 1",
                  "$10/9$",
                ],
                correctAnswer: 0,
                xp: 30,
              },
              {
                id: "hs_c18_l5_t5",
                question: "Jaký je kvocient řady $1 - 1/2 + 1/4 - 1/8...$?",
                options: ["$-1/2$", "$1/2$", "$2$", "$-2$"],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
      ],
    },
  ],
};
