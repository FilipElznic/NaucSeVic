export const mathZS = {
  default: [
    {
      title: "Přirozená čísla",
      lessons: [
        "Zápis a čtení čísel",
        "Porovnávání a zaokrouhlování",
        "Sčítání a odčítání",
        "Násobení a dělení",
        "Slovní úlohy",
      ],
    },
  ],
  1: [
    {
      title: "Základy: Obor čísel do 20",
      lessons: [
        {
          title: "Velká cesta čísly: Od 0 až do 20",
          content: {
            sections: [
              {
                heading: "První kroky: Čísla 0 až 10",
                text: "Všechno začíná nulou. 0 znamená 'nic' – jako prázdná miska na bonbóny. Když přidáme první bonbón, máme 1. Pak přidáváme další a počítáme stejně, jako máš prsty na rukou: 1, 2, 3, 4, 5 (jedna ruka), 6, 7, 8, 9... až dojdeme k číslu 10. \n\n\n\nČísla od 0 do 9 se nazývají jednociferná, protože se píší jen jedním znakem. Ale číslo 10 je speciální – je to první číslo dvojciferné (píše se pomocí jedničky a nuly). Desítka je jako plný balíček, máme plné obě ruce prstů!",
                image: "",
              },
              {
                heading: "Výprava za desítku: 11 až 20",
                text: "Co se stane, když máme plnou desítku (10) a přidáme další jedničku? Vznikne číslo 11 (jedenáct). Tady vstupujeme do světa větších čísel. Všimni si, jak se tvoří: vezmeme celou desítku a k ní přidáváme jednotky. \n\n\n\nSlyšíš tu koncovku -náct? \n* 13 (tři-náct),\n* 14 (čtr-náct),\n* až po 19 (devate-náct).\n\nCesta končí u čísla 20 (dvacet). To už nejsou jen nějaké drobné k desítce, to jsou rovnou dvě celé desítky pohromadě (2 a 0).",
                image: "",
              },
              {
                heading: "Kdo bydlí vedle? (Sousedé)",
                text: "Žádné číslo nebydlí na číselné ose samo. Každé má své sousedy. Představ si čísla jako řadové domečky v ulici.\n\n* Předchůdce je soused, který bydlí vlevo (je menší). Například předchůdcem čísla 5 je 4. Předchůdcem čísla 20 je 19.\n* Následník je soused, který bydlí vpravo (je větší). Následníkem čísla 0 je 1. Následníkem čísla 10 je 11.\n\nJe důležité umět se podívat na jakékoliv číslo a hned vědět, kdo stojí před ním a kdo za ním.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "l1_t0_start",
                question: "Kolik je prstů na jedné ruce?",
                options: ["10", "5", "3", "8"],
                correctAnswer: 1,
                xp: 5,
              },
              {
                id: "l1_t1",
                question:
                  "Které číslo následuje hned po číslu 19 (je jeho následník)?",
                options: ["18", "20", "10", "21"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "l1_t2",
                question: "Kdo je předchůdcem čísla 10?",
                options: ["11", "9", "8", "1"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "l1_t3",
                question: "Doplň řadu: $0, 1, 2, \\dots, 4, 5$",
                options: ["3", "6", "10", "8"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "l1_t4",
                question: "Seřaď čísla od nejmenšího po největší: 5, 20, 0, 11",
                options: [
                  "0, 5, 11, 20",
                  "20, 11, 5, 0",
                  "5, 0, 11, 20",
                  "0, 11, 5, 20",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "l1_t5",
                question: "Které číslo je první dvojciferné (má dva znaky)?",
                options: ["9", "10", "20", "1"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "l1_t6_written",
                type: "text-input",
                question: "Napiš číslicí číslo patnáct:",
                correctAnswer: "15",
                xp: 15,
              },
              {
                id: "l1_t7_sequence",
                type: "sequence",
                question: "Seřaď čísla tak, jak jdou za sebou:",
                options: ["10", "9", "11", "8"],
                correctAnswer: ["8", "9", "10", "11"],
                xp: 20,
              },
            ],
          },
        },

        {
          title: "Sčítání a odčítání bez přechodu desítky",
          content: {
            sections: [
              {
                heading: "Desítka a jednotky",
                text: "Čísla od 11 do 19 se skládají z jedné desítky a několika jednotek. Například číslo 14 je vlastně 'deset a čtyři'. Když k takovému číslu přičítáme (např. $14 + 3$), desítku si schováme do kapsy a sečteme jen jednotky: $4 + 3 = 7$. Pak desítku vyndáme a výsledek je 17. Je to stejné jako malá čísla, jen nesmíme zapomenout na tu desítku!",
                image: "",
              },
              {
                heading: "Odčítání je stejné kouzlo",
                text: "Při odčítání (např. $16 - 4$) to funguje stejně. Desítku necháme spát a odečteme jen jednotky: $6 - 4 = 2$. Pak k tomu vrátíme spící desítku a máme 12. Pozor ale, tohle funguje jen tehdy, když nám stačí prsty na jedné ruce (nepřecházíme přes desítku).",
                image: "placeholder-subtraction-blocks",
              },
            ],
            tasks: [
              {
                id: "l3_t1",
                question: "Vypočítej: $12 + 5$",
                options: ["15", "17", "18", "7"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "l3_t2",
                question: "Vypočítej: $19 - 6$",
                options: ["13", "14", "12", "15"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "l3_t3",
                question: "Kolik je $10 + 4$?",
                options: ["6", "14", "104", "40"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "l3_t4",
                question: "$18 - 8 =$",
                options: ["0", "8", "10", "18"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "l3_t5",
                question: "Doplň číslo: $13 + ? = 15$",
                options: ["1", "2", "3", "5"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "l3_t6_written",
                type: "text-input",
                question: "Vypočítej: $11 + 6 =$",
                correctAnswer: "17",
                xp: 15,
              },
              {
                id: "l3_t7_sequence",
                type: "sequence",
                question:
                  "Seřaď příklady podle výsledku od nejmenšího po největší:",
                options: ["$10 + 5$", "$10 + 2$", "$10 + 8$"],
                correctAnswer: ["$10 + 2$", "$10 + 5$", "$10 + 8$"],
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Přechod přes desítku (Rozklad čísel)",
          content: {
            sections: [
              {
                heading: "Most přes rozbouřenou řeku (Sčítání)",
                text: "Teď nás čeká nejdůležitější matematická dovednost! Co když máme příklad $8 + 5$? Na prstech nám to nevychází. Představ si, že číslo 10 je bezpečný ostrov uprostřed řeky. My nemůžeme skočit z osmičky rovnou o pět dál, spadli bychom do vody. Musíme si postavit most.\n\n\n\nJak na to?\n1. Jdeme na ostrov 10. Kolik chybí číslu 8 do 10? Chybí 2. \n2. Tyto 2 si vypůjčíme z pětky. Pětku si tedy rozložíme na 2 a 3.\n3. Osmička sní dvojku a stane se z ní 10. \n4. Teď už jen k desítce přičteme ten zbytek (3). $10 + 3 = 13$. \n\nZní to složitě, ale je to jen o tom vědět, kolik chybí do deseti!",
                image: "",
              },
              {
                heading: "Odčítání s couváním",
                text: "Při odčítání, třeba $13 - 6$, to děláme podobně, jen couváme. Představ si, že jedeš autem a chceš couvnout o 6 metrů, ale na metru 10 je závora (zastávka). Musíš zastavit.\n\n\n\n1. Z čísla 13 couvneme na desítku. Musíme odebrat 3 ($13 - 3 = 10$).\n2. Chtěli jsme odebrat celkem 6, ale zatím jsme odebrali jen 3. Kolik nám ještě zbývá odebrat? Ještě 3.\n3. Teď už to jde snadno: od desítky odebereme ty zbylé 3. \n4. Příklad $10 - 3 = 7$.\n\nTomuto postupu říkáme rozklad přes desítku. Vždy se snažíme dostat na desítku, tam si odpočinout, a pak dokončit zbytek.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "l4_t1",
                question: "Vypočítej s přechodem: $8 + 5$",
                options: ["12", "13", "14", "15"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "l4_t2_sequence",
                type: "sequence",
                question: "Seřaď myšlenkové kroky pro výpočet $9 + 4$:",
                options: [
                  "Teď k desítce přičtu zbytek (3).",
                  "Mám 9 a chci přičíst 4.",
                  "Z čísla 4 vezmu 1 a dám ho devítce, abych měl 10.",
                  "Výsledek je 13.",
                ],
                correctAnswer: [
                  "Mám 9 a chci přičíst 4.",
                  "Z čísla 4 vezmu 1 a dám ho devítce, abych měl 10.",
                  "Teď k desítce přičtu zbytek (3).",
                  "Výsledek je 13.",
                ],
                xp: 25,
              },
              {
                id: "l4_t3",
                question: "Jak správně rozložíme číslo 7 v příkladu $8 + 7$?",
                options: [
                  "na 2 a 5 (protože 8 + 2 = 10)",
                  "na 1 a 6 (protože 8 + 1 = 9)",
                  "na 3 a 4 (jen tak náhodou)",
                  "nerozkládáme ho",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "l4_t4_written",
                type: "text-input",
                question: "Vypočítej příklad: $7 + 7$. Napiš jen číslo.",
                correctAnswer: "14",
                xp: 15,
              },
              {
                id: "l4_t5_written",
                type: "text-input",
                question:
                  "Vypočítej s couváním: $12 - 5$. (Jdi na 10 a pak odečti zbytek).",
                correctAnswer: "7",
                xp: 20,
              },
              {
                id: "l4_t6_sequence",
                type: "sequence",
                question: "Seřaď postup pro odčítání $14 - 6$:",
                options: [
                  "Jsem na 10 a musím odebrat ještě 2.",
                  "Výsledek je 8.",
                  "Startuji na 14. Abych byl na 10, odeberu 4.",
                ],
                correctAnswer: [
                  "Startuji na 14. Abych byl na 10, odeberu 4.",
                  "Jsem na 10 a musím odebrat ještě 2.",
                  "Výsledek je 8.",
                ],
                xp: 25,
              },
              {
                id: "l4_t7",
                question: "Doplň chybějící číslo v rozkladu: $6 + ? = 11$",
                options: ["4", "5", "6", "7"],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Porovnávání čísel: Kdo je větší?",
          content: {
            sections: [
              {
                heading: "Hladový krokodýl (< a >)",
                text: "Když vidíme dvě různá čísla, chceme zjistit, které je větší a které menší. Používáme k tomu znaménka, která vypadají jako šipky: $<$ a $>$. Aby se ti to nikdy nepletlo, představ si, že to není obyčejná šipka, ale otevřená tlama hladového krokodýla.\n\n\n\nKrokodýl je velký jedlík a vždycky se otočí tam, kde je více jídla (větší číslo). \n* Když máme $5$ a $10$, krokodýl otevře pusu na desítku: $5 < 10$.\n* Když máme $20$ a $3$, otočí se na dvacítku: $20 > 3$.\n\nPamatuj, že čteme vždy zleva doprava (jako v knížce). Zobáček nám ukazuje, která strana je 'menší' (tam, kde je špička) a která 'větší' (tam, kde je otevřeno).",
                image: "",
              },
              {
                heading: "Když je to stejně (=)",
                text: "Co se stane, když krokodýl přijde k obědu a na obou stranách najde stejně jídla? Třeba 8 ryb vlevo a 8 ryb vpravo? Krokodýl neví, kam se otočit, je zmatený a zavře pusu. \n\n\n\nJeho zavřená pusa vypadá jako dvě čárky pod sebou: $=$. Tomuto znaménku říkáme rovná se. Znamená to, že hodnota vlevo je úplně stejná jako hodnota vpravo, jako když jsou váhy dokonale vyvážené. Například $15 = 15$.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "l2_t1",
                question:
                  "Kam se otočí krokodýl, když vidí čísla 15 a 18? ($15 \\dots 18$)",
                options: [
                  "> (otočí se na 15)",
                  "< (otočí se na 18)",
                  "= (zavře pusu)",
                  "+ (sečte je)",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "l2_t2",
                question: "Který zápis je matematicky správně?",
                options: [
                  "$12 > 20$ (12 je větší než 20)",
                  "$8 = 8$ (8 se rovná 8)",
                  "$10 < 5$ (10 je menší než 5)",
                  "$1 = 2$ (1 se rovná 2)",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "l2_t3",
                question: "Doplň správné znaménko: $20 \\dots 10$",
                options: [">", "<", "=", "0"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "l2_t4",
                question: "Které číslo je větší než 16?",
                options: ["15", "10", "16", "17"],
                correctAnswer: 3,
                xp: 10,
              },
              {
                id: "l2_t5",
                question: "Najdi chybu! Který krokodýl se spletl?",
                options: [
                  "$12 < 14$",
                  "$20 > 19$",
                  "$9 > 11$ (TOHLE JE CHYBA)",
                  "$7 = 7$",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "l2_t6_written",
                type: "text-input",
                question:
                  "Napiš na klávesnici znaménko ( <, > nebo = ), které patří mezi tato čísla: $5 \\dots 5$",
                correctAnswer: "=",
                xp: 15,
              },
              {
                id: "l2_t7_sequence",
                type: "sequence",
                question:
                  "Seřaď čísla od nejmenšího (nahoře) po největší (dole), aby je mohl krokodýl sníst postupně:",
                options: ["12", "4", "20", "9"],
                correctAnswer: ["4", "9", "12", "20"],
                xp: 20,
              },
            ],
          },
        },
        {
          title: "První slovní úlohy: Matematika v příbězích",
          content: {
            sections: [
              {
                heading: "Hra na detektivy",
                text: "Slovní úlohy jsou jako malé detektivní příběhy. Čísla se v nich schovávají mezi slovy a naším úkolem je najít je a zjistit, co se s nimi děje. Musíme být pozorní k určitým slovíčkům, která nám napoví, jaký příklad sestavit.\n\n\n\n* Kdy sčítáme (+)? Když slyšíš slova jako: *přiletěl, dostal, koupil, přidal, celkem, dohromady*.\n* Kdy odčítáme (-)? Když slyšíš slova jako: *odletěl, ztratil, snědl, rozbil, dal pryč, zbylo*.\n\nNení to jen o počítání, je to o pochopení příběhu!",
                image: "",
              },
              {
                heading: "Jak vyřešit každou záhadu (Postup)",
                text: "Aby ses v úloze neztratil, dodržuj vždy těchto 5 kroků:\n\n1.  Přečti si zadání: Klidně dvakrát. Musíš vědět, o čem se tam píše.\n2.  Najdi čísla: Co víme? (Např. *Petr má 5 autíček*).\n3.  Na co se ptáme? Co musíme zjistit? (Např. *Kolik jich má teď?*).\n4.  Vymysli příklad: Převeď slova na čísla ($5 + 3$).\n5.  Odpověz: Každá slovní úloha končí větou. Nestačí jen číslo 8, musíme říct: *Petr má teď 8 autíček.*\n\n\n\nZkus si to hned na dalším úkolu!",
                image: "",
              },
            ],
            tasks: [
              {
                id: "l5_t1",
                question:
                  "Na stromě sedělo 8 ptáčků. 3 ptáčci odletěli. Kolik ptáčků zůstalo na stromě?",
                options: [
                  "11 (protože 8 + 3)",
                  "5 (protože 8 - 3)",
                  "6 (špatně spočítáno)",
                  "3 (to jsou ti, co odletěli)",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "l5_t2_input",
                type: "text-input",
                question:
                  "Jana měla 12 pastelek a k svátku dostala další 4. Kolik pastelek má teď dohromady? (Napiš jen číslo)",
                correctAnswer: "16",
                xp: 20,
              },
              {
                id: "l5_t3_sequence",
                type: "sequence",
                question: "Seřaď správně kroky, jak se řeší slovní úloha:",
                options: [
                  "Přečtu si pozorně zadání.",
                  "Zjistím, co mám spočítat (otázka).",
                  "Vypočítám příklad.",
                  "Napíšu odpověď.",
                ],
                correctAnswer: [
                  "Přečtu si pozorně zadání.",
                  "Zjistím, co mám spočítat (otázka).",
                  "Vypočítám příklad.",
                  "Napíšu odpověď.",
                ],
                xp: 25,
              },
              {
                id: "l5_t4_input",
                type: "text-input",
                question:
                  "V autobuse jelo 15 lidí. Na zastávce 5 lidí vystoupilo. Kolik lidí zůstalo v autobuse? (Napiš číslo)",
                correctAnswer: "10",
                xp: 20,
              },
              {
                id: "l5_t5_sequence",
                type: "sequence",
                question: "Sestav příběh podle příkladu $10 - 2 = 8$:",
                options: [
                  "Měl jsem 10 jablek.",
                  "2 jablka jsem snědl.",
                  "Zbylo mi 8 jablek.",
                ],
                correctAnswer: [
                  "Měl jsem 10 jablek.",
                  "2 jablka jsem snědl.",
                  "Zbylo mi 8 jablek.",
                ],
                xp: 25,
              },
              {
                id: "l5_t6",
                question:
                  "Tomáš má 9 kuliček. Milan má o 3 kuličky VÍCE. Kolik kuliček má Milan?",
                options: [
                  "6 (to by měl méně)",
                  "12 (9 + 3)",
                  "9 (stejně)",
                  "3 (jen ten rozdíl)",
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
      title: "Rozšíření na obor 0–100",
      lessons: [
        {
          title: "Desítková soustava: Jednotky a desítky",
          content: {
            sections: [
              {
                heading: "Balíčky po deseti",
                text: "Představ si, že máš hromadu kostiček. Aby se lépe počítaly, začneme je balit do sáčků. Do každého sáčku se vejde přesně 10 kostiček. Těmto sáčkům říkáme 'desítky'. Kostičky, které zůstanou volně venku a nevejdou se do sáčku, jsou 'jednotky'.",
                image: "",
              },
              {
                heading: "Jak čteme čísla",
                text: "Každé dvojciferné číslo nám říká příběh. Například číslo 42. Čtyřka nám říká, že máme 4 plné sáčky (4 desítky = 40). Dvojka říká, že nám zbyly 2 volné kostičky (2 jednotky). Můžeme to zapsat jako rozklad: 42 = 40 + 2. Tomu říkáme desítková soustava.",
                image: "placeholder-number-decomposition-42",
              },
            ],
            tasks: [
              {
                id: "c2_l1_t1",
                question: "Kolik desítek má číslo 73?",
                options: ["7", "3", "70", "10"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c2_l1_t2",
                question: "Jak rozložíš číslo 56?",
                options: ["5 + 6", "50 + 6", "60 + 5", "50 + 60"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c2_l1_t3",
                question: "Které číslo se skládá z 8 desítek a 0 jednotek?",
                options: ["8", "18", "80", "800"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c2_l1_t4",
                question: "Co znamená číslice 9 v čísle 29?",
                options: ["9 desítek", "9 stovek", "9 jednotek", "Nic"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c2_l1_t5",
                question: "Slož číslo: 30 + 5",
                options: ["35", "53", "305", "8"],
                correctAnswer: 0,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Počítání s celými desítkami",
          content: {
            sections: [
              {
                heading: "Jako malá čísla, jen s nulou",
                text: "Sčítání celých desítek je snadné. Pokud umíš spočítat 3 + 2, umíš i 30 + 20! Představ si to: 3 krabice (desítky) plus 2 krabice (desítky) je 5 krabic. A protože v každé krabici je 10 věcí, připíšeme na konec nulu. Takže 30 + 20 = 50.",
                image: "[Image showing 30+20 analogy with boxes]",
              },
              {
                heading: "Odčítání desítek",
                text: "Stejně to funguje i při odčítání. Máme 90 (devět desítek) a chceme ubrat 40 (čtyři desítky). Uděláme 9 - 4 = 5. A nezapomeneme na nulu! Výsledek je 50. Pozor, nulu píšeme jen na konec, nikdy ne doprostřed čísla.",
                image: "placeholder-tens-subtraction",
              },
            ],
            tasks: [
              {
                id: "c2_l2_t1",
                question: "30 + 50 =",
                options: ["8", "80", "800", "35"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c2_l2_t2",
                question: "90 - 40 =",
                options: ["50", "40", "60", "5"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c2_l2_t3",
                question: "Doplň řadu: 10, 20, 30, ...",
                options: ["31", "35", "40", "50"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c2_l2_t4",
                question: "20 + 20 + 20 =",
                options: ["40", "50", "60", "222"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c2_l2_t5",
                question: "Mám 100 Kč a utratím 30 Kč. Kolik mi zbyde?",
                options: ["60 Kč", "70 Kč", "80 Kč", "130 Kč"],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Sčítání a odčítání bez přechodu desítky",
          content: {
            sections: [
              {
                heading: "Každý s každým",
                text: "Když sčítáme čísla jako 23 + 45, musíme být pečliví. Sčítáme zvlášť desítky a zvlášť jednotky. Desítky k desítkám: 20 + 40 = 60. Jednotky k jednotkám: 3 + 5 = 8. Nakonec to dáme dohromady: 60 + 8 = 68. Je to jako skládání stavebnice.",
                image: "",
              },
              {
                heading: "Odčítání bez bourání",
                text: "U odčítání bez přechodu (např. 76 - 24) to děláme stejně. Desítky odečteme od desítek (70 - 20 = 50) a jednotky od jednotek (6 - 4 = 2). Výsledek je 52. Důležité je si pamatovat: Vždy odčítej menší číslo od většího ve správném řádu.",
                image: "placeholder-simple-subtraction",
              },
            ],
            tasks: [
              {
                id: "c2_l3_t1",
                question: "23 + 45 =",
                options: ["68", "67", "58", "78"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c2_l3_t2",
                question: "56 - 22 =",
                options: ["34", "33", "44", "35"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c2_l3_t3",
                question: "40 + 17 =",
                options: ["47", "57", "67", "50"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c2_l3_t4",
                question: "98 - 6 =",
                options: ["92", "38", "90", "82"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c2_l3_t5",
                question: "Který výsledek je největší?",
                options: ["20 + 30", "45 + 4", "10 + 35", "50 - 1"],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Sčítání a odčítání s přechodem přes desítku",
          content: {
            sections: [
              {
                heading: "Překračujeme hranice",
                text: "Co když máme příklad 38 + 5? Tady nám jednotky 'přetečou' přes desítku (8 + 5 je víc než 10). Použijeme trik s doplněním! Nejprve se zeptej: Kolik chybí 38 do nejbližší desítky (do 40)? Chybí 2. Pětku si tedy rozdělíme na 2 a 3. Příklad teď vypadá takto: 38 + 2 = 40. A pak přičteme zbytek: 40 + 3 = 43.",
                image: "",
              },
              {
                heading: "Odčítání s rozbitím desítky",
                text: "Příklad 42 - 7. Z jednotek (2) nemůžeme odečíst sedmičku. Musíme 'rozbít' desítku. Couváme! Nejprve se vrátíme na rovnou desítku: 42 - 2 = 40. Kolik ještě musíme odečíst ze sedmičky? Ještě 5 (protože 7 je 2 + 5). Takže počítáme 40 - 5 = 35. Chce to trénink, ale je to nejužitečnější trik v matematice!",
                video: "placeholder-video-harder-bridging",
              },
            ],
            tasks: [
              {
                id: "c2_l4_t1",
                question: "38 + 5 =",
                options: ["42", "43", "44", "33"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c2_l4_t2",
                question: "42 - 7 =",
                options: ["35", "36", "34", "33"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "c2_l4_t3",
                question: "Kolik chybí číslu 26 do nejbližší desítky (30)?",
                options: ["4", "6", "3", "5"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c2_l4_t4",
                question: "55 + 9 =",
                options: ["63", "64", "65", "54"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c2_l4_t5",
                question: "Jak rozložíš číslo 6 v příkladu 34 - 6?",
                options: ["na 4 a 2", "na 3 a 3", "na 5 a 1", "na 6 a 0"],
                correctAnswer: 0,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Úvod do písemného sčítání (Pod sebou)",
          content: {
            sections: [
              {
                heading: "Pořádek dělá mistry",
                text: "Když jsou čísla velká a složitá, jako 28 + 35, je nejlepší si je napsat pod sebe. Tomu se říká 'písemné sčítání'. Zlaté pravidlo zní: Jednotky musí být přesně pod jednotkami a desítky pod desítkami. Jako vojáci v řadě. Když to napíšeš křivě, vyjde ti nesmysl.",
                image:
                  "[Image showing correct vs incorrect alignment of numbers]",
              },
              {
                heading: "Jak na to (i v hlavě)",
                text: "I když to píšeme pod sebe, můžeme počítat chytře. Příklad 28 + 35. Můžeš to sečíst postupně: 28 + 30 = 58. A teď k tomu přičti těch zbylých 5. 58 + 5 = 63. Rozklad druhého čísla nám pomáhá zvládnout i ty nejtěžší příklady.",
                image: "placeholder-column-addition-setup",
              },
            ],
            tasks: [
              {
                id: "c2_l5_t1",
                question: "Při sčítání pod sebou píšeme:",
                options: [
                  "Jednotky pod desítky",
                  "Jednotky pod jednotky",
                  "Jak se nám to líbí",
                  "Větší číslo dospod",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c2_l5_t2",
                question: "Vypočítej 28 + 35",
                options: ["53", "63", "65", "73"],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "c2_l5_t3",
                question: "Co je výsledkem 49 + 22?",
                options: ["61", "71", "81", "72"],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "c2_l5_t4",
                question: "Který zápis je správně pro 12 + 5?",
                options: [
                  "Pětka je pod jedničkou",
                  "Pětka je pod dvojkou",
                  "Pětka je vedle jedničky",
                  "Je to jedno",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c2_l5_t5",
                question: "Vypočítej 67 + 14",
                options: ["81", "71", "80", "74"],
                correctAnswer: 0,
                xp: 25,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Malá násobilka a dělení",
      lessons: [
        {
          title: "Princip násobení: Rychlé sčítání",
          content: {
            sections: [
              {
                heading: "Matematika pro líné počtáře",
                text: "Představ si, že máš 5 talířů a na každém jsou 3 buchty. Mohl bys počítat: 3 + 3 + 3 + 3 + 3. To je ale strašně dlouhé psaní! Matematici jsou chytří a líní psát dlouhé příklady, tak vymysleli násobení. Místo toho napíšeme jednoduše: 5 · 3. Čteme to 'pět krát tři'. Znamená to, že pět-krát vezmeme trojku.",
                image: "",
              },
              {
                heading: "Tečka místo plusu",
                text: "Znaménkem pro násobení je tečka (·). Někdy se používá i křížek (x). Když vidíš tečku, znamená to 'opakuj tolikrát'. 4 · 2 znamená: Vezmi dvojku a sečti ji čtyřikrát (2 + 2 + 2 + 2). Výsledek je 8. Je to mnohem rychlejší než sčítání!",
                image: "placeholder-multiplication-intro",
              },
            ],
            tasks: [
              {
                id: "c3_l1_t1",
                question: "Jak zkrátíš zápis 4 + 4 + 4?",
                options: ["3 · 4", "4 · 4", "3 + 4", "12"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c3_l1_t2",
                question: "Co znamená 2 · 5?",
                options: [
                  "5 + 5",
                  "2 + 2 + 2 + 2 + 2",
                  "Obojí je správně",
                  "Ani jedno",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c3_l1_t3",
                question: "Kolik nohou mají 3 židle? (Každá má 4 nohy)",
                options: ["7", "12", "10", "16"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c3_l1_t4",
                question: "Který příklad má výsledek 10?",
                options: ["2 · 4", "2 · 5", "3 · 3", "1 · 9"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c3_l1_t5",
                question: "Přepiš na násobení: 6 + 6 + 6 + 6",
                options: ["6 · 4", "4 · 6", "6 · 6", "4 + 6"],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Násobilka 1–5: Základní spoje",
          content: {
            sections: [
              {
                heading: "Nula a jednička: Kouzelná čísla",
                text: "Než začneme počítat, pamatuj si dva triky. Cokoliv násobíme nulou, zmizí a stane se z toho nula (5 · 0 = 0). Nula je jako hladový otesánek. Naopak jednička funguje jako zrcadlo. Cokoliv násobíme jedničkou, zůstane stejné (5 · 1 = 5).",
                image: "",
              },
              {
                heading: "Skáčeme po číslech (2, 3, 4, 5)",
                text: "Násobilka není o biflování, ale o rytmu. Násobilka dvou jsou skoky po dvou (2, 4, 6, 8...). Násobilka pěti je nejlehčí, protože končí vždy na 0 nebo 5 (5, 10, 15, 20...). Zkus si to vytleskat! Když umíš násobilku do pěti, umíš už polovinu vší matematiky!",
                image: "placeholder-number-line-jumps",
              },
            ],
            tasks: [
              {
                id: "c3_l2_t1",
                question: "7 · 0 =",
                options: ["7", "0", "70", "1"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c3_l2_t2",
                question: "1 · 9 =",
                options: ["1", "9", "10", "90"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c3_l2_t3",
                question: "Doplň řadu násobilky 5: 5, 10, 15, ...",
                options: ["16", "25", "20", "30"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c3_l2_t4",
                question: "4 · 3 =",
                options: ["7", "12", "14", "10"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c3_l2_t5",
                question: "3 · 3 (čtverec) =",
                options: ["6", "9", "12", "33"],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Násobilka 6–10 a výměna čísel",
          content: {
            sections: [
              {
                heading: "Trik s otáčením (Komutativnost)",
                text: "Násobilka velkých čísel vypadá těžce, ale máme trik! Věděl jsi, že 2 · 8 je to samé jako 8 · 2? Tomu se říká záměna činitelů. Pokud neumíš 8 · 2, prostě si to v hlavě otoč na 'dvakrát osm', což je 16. Díky tomu se musíš učit jen polovinu příkladů!",
                image: "[Image showing 2x8 grid rotated to be 8x2 grid]",
              },
              {
                heading: "Devítka a prsty",
                text: "Násobilka devíti má skvělý trik na prstech. Dej dlaně před sebe. Chceš 3 · 9? Skrč třetí prst zleva. Kolik prstů je vlevo od skrčeného? 2. Kolik vpravo? 7. Výsledek je 27! Funguje to pro celou násobilku devíti.",
                video: "placeholder-finger-trick-9",
              },
            ],
            tasks: [
              {
                id: "c3_l3_t1",
                question: "Kolik je 6 · 6?",
                options: ["36", "30", "42", "12"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "c3_l3_t2",
                question: "Vypočítej 9 · 8",
                options: ["72", "81", "64", "70"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "c3_l3_t3",
                question: "Je pravda, že 7 · 4 je to samé jako 4 · 7?",
                options: [
                  "Ano, vždy",
                  "Ne, nikdy",
                  "Jen v úterý",
                  "Záleží na kalkulačce",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c3_l3_t4",
                question: "8 · 10 =",
                options: ["18", "80", "800", "810"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c3_l3_t5",
                question: "7 · 7 =",
                options: ["49", "47", "59", "14"],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Princip dělení: Spravedlivé dělení",
          content: {
            sections: [
              {
                heading: "Dělení je opak násobení",
                text: "Představ si, že máš 12 bonbónů a chceš je spravedlivě rozdělit mezi 3 kamarády. Musíš dávat každému stejně, dokud bonbóny nedojdou. Tomu říkáme dělení. Používáme znaménko dvojtečky (:). Příklad zapíšeme: 12 : 3 = 4. Každý kamarád dostane 4 bonbóny.",
                image: "",
              },
              {
                heading: "Co když něco zbyde?",
                text: "Někdy to nevyjde přesně. Představ si, že máš 7 jablek a chceš je dát do 2 košíků. Do každého dáš 3 a jedno jablko ti zůstane v ruce. Tomu říkáme 'zbytek'. Zapíšeme to: 7 : 2 = 3 (zbytek 1). Zbytek musí být vždy menší než číslo, kterým dělíme!",
                image: "placeholder-division-remainder",
              },
            ],
            tasks: [
              {
                id: "c3_l4_t1",
                question: "Vypočítej 15 : 3",
                options: ["3", "4", "5", "6"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c3_l4_t2",
                question: "Rozděl 20 : 4",
                options: ["4", "5", "6", "10"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c3_l4_t3",
                question: "Mám 10 : 2. Kolik to je?",
                options: ["2", "8", "5", "20"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c3_l4_t4",
                question: "Urči zbytek: 7 : 3 =",
                options: [
                  "2 (zbytek 0)",
                  "2 (zbytek 1)",
                  "3 (zbytek 0)",
                  "1 (zbytek 2)",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "c3_l4_t5",
                question: "Které číslo nelze nikdy dělit nulou?",
                options: [
                  "Jen 5",
                  "Jen 100",
                  "Žádné číslo (nulou dělit nelze)",
                  "Všechna čísla",
                ],
                correctAnswer: 2,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Rodiny čísel: Vztah násobení a dělení",
          content: {
            sections: [
              {
                heading: "Trojúhelník čísel",
                text: "Násobení a dělení jsou nejlepší kamarádi. Patří do jedné rodiny. Když víš, že 3 · 4 = 12, tak automaticky víš dvě další věci: že 12 : 4 = 3 a také že 12 : 3 = 4. Vždy jsou to ta samá tři čísla! Této kontrole říkáme 'zkouška'.",
                image: "",
              },
              {
                heading: "Jak najít neznámé číslo?",
                text: "Když vidíš příklad ? : 5 = 6, použij násobení! Co musím rozdělit na 5 hromádek po 6? Vynásob 5 · 6 a máš výsledek 30. Násobení ti vždy pomůže zkontrolovat, jestli jsi dělil správně.",
                image: "placeholder-missing-number",
              },
            ],
            tasks: [
              {
                id: "c3_l5_t1",
                question: "Když 6 · 5 = 30, kolik je 30 : 6?",
                options: ["5", "6", "30", "4"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "c3_l5_t2",
                question: "Doplň rodinu čísel: 4, 8, ...",
                options: ["12", "32 (protože 4·8)", "2", "16"],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "c3_l5_t3",
                question: "Najdi číslo: ? : 3 = 7",
                options: ["10", "21", "4", "14"],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "c3_l5_t4",
                question: "Vypočítej zkoušku k příkladu 40 : 5 = 8",
                options: ["8 + 5", "8 - 5", "5 · 8", "40 - 8"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "c3_l5_t5",
                question: "Co patří k sobě? 3 · 9 = 27",
                options: [
                  "27 : 9 = 3",
                  "27 + 3 = 30",
                  "9 : 3 = 3",
                  "3 + 9 = 12",
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
      title: "Velká čísla a jejich vlastnosti",
      lessons: [
        {
          title: "Řády čísel: Od jednotek k milionu",
          content: {
            sections: [
              {
                heading: "Každá číslice má své místo",
                text: "Čísla jsou jako vlak s vagóny. Úplně vzadu sedí Jednotky. Před nimi Desítky, pak Stovky. Ale co je dál? Před stovkami jsou Tisíce (1 000), pak Desetitisíce (10 000) a Statisíce (100 000). A králem všech je Milion (1 000 000), který má za jedničkou rovnou šest nul! Tomu, kde číslice sedí, říkáme 'řád'.",
                image: "",
              },
              {
                heading: "Jak číst velká čísla",
                text: "Aby se nám z těch nul nezamotala hlava, píšeme mezi tisíci mezeru. Například 2 350. Čteme to hezky popořadě: 'dva tisíce tři sta padesát'. Hodnota číslice závisí na tom, kde stojí. Pětka na místě jednotek je jen 5, ale pětka na místě tisíců je 5000!",
                image: "placeholder-large-number-reading",
              },
            ],
            tasks: [
              {
                id: "c4_l1_t1",
                question: "Co znamená číslice 3 v čísle 3 500?",
                options: ["3 stovky", "3 jednotky", "3 tisíce", "3 desítky"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c4_l1_t2",
                question: "Kolik nul má jeden milion?",
                options: ["3", "4", "5", "6"],
                correctAnswer: 3,
                xp: 10,
              },
              {
                id: "c4_l1_t3",
                question: "Které číslo je: pět tisíc dvacet?",
                options: ["5 200", "5 020", "520", "5 002"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c4_l1_t4",
                question: "Jaký řád je hned před stovkami (větší)?",
                options: ["Desítky", "Tisíce", "Miliony", "Jednotky"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c4_l1_t5",
                question: "Seřaď řády od nejmenšího:",
                options: [
                  "jednotky, desítky, stovky, tisíce",
                  "tisíce, stovky, desítky, jednotky",
                  "jednotky, stovky, tisíce, desítky",
                  "desítky, jednotky, stovky, tisíce",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Zaokrouhlování",
          content: {
            sections: [
              {
                heading: "Kopec rozhodování",
                text: "Někdy nepotřebujeme přesné číslo, stačí nám vědět 'přibližně'. Tomu říkáme zaokrouhlování. Představ si kopec. Čísla 0, 1, 2, 3, 4 jsou slabá a skutálí se zpátky dolů (zaokrouhlujeme dolů). Čísla 5, 6, 7, 8, 9 jsou silná a přehoupnou se přes kopec k další desítce (zaokrouhlujeme nahoru).",
                image: "",
              },
              {
                heading: "Na koho se dívat?",
                text: "Když zaokrouhlujeme na desítky, díváme se na jednotky. Když na stovky, díváme se na desítky. Vždy rozhoduje ta číslice, která je hned vpravo od té, na kterou zaokrouhlujeme. Příklad: 36 zaokrouhlíme na desítky. Šestka je silná, takže jdeme nahoru na 40.",
                image: "placeholder-rounding-rules",
              },
            ],
            tasks: [
              {
                id: "c4_l2_t1",
                question: "Zaokrouhli 23 na desítky.",
                options: ["20", "30", "25", "100"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c4_l2_t2",
                question: "Zaokrouhli 158 na stovky.",
                options: ["100", "150", "200", "160"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "c4_l2_t3",
                question: "Které číslo se zaokrouhlí na 50?",
                options: ["42", "56", "48", "39"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "c4_l2_t4",
                question: "Zaokrouhli 95 na desítky.",
                options: ["90", "100", "950", "10"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c4_l2_t5",
                question: "Mám 428 Kč. Kolik je to přibližně stovek?",
                options: ["300", "500", "400", "420"],
                correctAnswer: 2,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Porovnávání velkých čísel",
          content: {
            sections: [
              {
                heading: "Dívej se na začátek!",
                text: "Při porovnávání malých čísel to vidíme hned. U velkých čísel (třeba 4 521 a 4 299) musíme postupovat chytře. Nejdříve se podívej na počet cifer. Číslo, které má více cifer, je vždy větší (100 je víc než 99). Pokud mají cifer stejně, porovnáváme zleva. Tisíce jsou stejné (4), tak jdeme na stovky. 5 je víc než 2. Hotovo! 4 521 je větší.",
                image: "",
              },
              {
                heading: "Zrádné devítky",
                text: "Nenech se zmást devítkami na konci. Číslo 1 000 je větší než 999, i když je v něm samá nula a v druhém samá devítka. Rozhoduje nejvyšší řád!",
                image: "placeholder-comparing-thousands",
              },
            ],
            tasks: [
              {
                id: "c4_l3_t1",
                question: "Které číslo je větší: 3 450 nebo 3 405?",
                options: ["3 450", "3 405", "Jsou stejná", "Nelze určit"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c4_l3_t2",
                question: "Doplň znaménko: 15 000 ... 9 999",
                options: ["<", ">", "=", "+"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c4_l3_t3",
                question: "Seřaď sestupně (od největšího): 200, 2 000, 20",
                options: [
                  "20, 200, 2 000",
                  "2 000, 200, 20",
                  "200, 20, 2 000",
                  "2 000, 20, 200",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c4_l3_t4",
                question: "Které číslo je menší než 500 000?",
                options: ["500 001", "1 000 000", "499 999", "600 000"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "c4_l3_t5",
                question: "Porovnej: 6 tisíc a 60 stovek",
                options: [
                  "6 tisíc je víc",
                  "60 stovek je víc",
                  "Rovná se (=)",
                  "Nevím",
                ],
                correctAnswer: 2,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Násobení a dělení 10, 100, 1000",
          content: {
            sections: [
              {
                heading: "Trik s přepisováním nul",
                text: "Tohle je nejjednodušší počítání na světě! Když násobíme číslem 10, prostě k číslu připíšeme jednu nulu (5 · 10 = 50). Když násobíme 100, připíšeme dvě nuly (5 · 100 = 500). A u tisíce? Jasně, tři nuly! Číslo se tím posune do vyššího řádu.",
                image:
                  "[Image illustrating adding zeros when multiplying by 10, 100, 1000]",
              },
              {
                heading: "Dělení je zloděj nul",
                text: "Když dělíme čísly 10, 100 nebo 1000, děláme pravý opak – nuly škrtáme. 400 : 100 = 4 (škrtli jsme dvě nuly). Pozor, můžeme škrtnout jen tolik nul, kolik jich má dělitel a kolik jich má číslo na konci.",
                image: "placeholder-division-zeros",
              },
            ],
            tasks: [
              {
                id: "c4_l4_t1",
                question: "8 · 100 =",
                options: ["80", "800", "8000", "108"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c4_l4_t2",
                question: "35 · 10 =",
                options: ["350", "305", "3500", "35"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c4_l4_t3",
                question: "6000 : 100 =",
                options: ["6", "60", "600", "60000"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c4_l4_t4",
                question: "Kolik nul přidáš, když násobíš tisícem?",
                options: ["Jednu", "Dvě", "Tři", "Čtyři"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c4_l4_t5",
                question: "Vypočítej: 50 · 100",
                options: ["500", "5000", "50", "50000"],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Římské číslice",
          content: {
            sections: [
              {
                heading: "Dědictví z Říma",
                text: "Kdysi dávno Římané nepoužívali naše číslice (0-9), ale písmena. I = 1, V = 5, X = 10. To jsou základy, které najdeš na hodinách. Ale měli i větší: L = 50, C = 100, D = 500, M = 1000. Aby sis to zapamatoval, zkus větu: Ivan Vedl Xenii Lesní Cestou Do Města.",
                image: "",
              },
              {
                heading: "Jak se skládají?",
                text: "Římská čísla se sčítají. VI je 5 + 1 = 6. Ale pozor! Když je menší číslo PŘED větším, tak se odčítá. IV je 5 - 1 = 4. IX je 10 - 1 = 9. Římané neměli rádi, když se opakovaly více než tři stejné znaky za sebou (proto 4 není IIII, ale IV).",
                image: "placeholder-roman-clock",
              },
            ],
            tasks: [
              {
                id: "c4_l5_t1",
                question: "Co znamená římské číslo V?",
                options: ["1", "5", "10", "50"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c4_l5_t2",
                question: "Jak zapíšeš číslo 10?",
                options: ["V", "I", "X", "L"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c4_l5_t3",
                question: "Které číslo je VI?",
                options: ["4", "5", "6", "7"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c4_l5_t4",
                question: "Jakou hodnotu má C (Cestou)?",
                options: ["10", "50", "100", "1000"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c4_l5_t5",
                question:
                  "Přepiš číslo 2024 do římských číslic (jen rok 2000 stačí MM)",
                options: ["MMXXIV", "MMXV", "DDXXIV", "MMIIII"],
                correctAnswer: 0,
                xp: 30,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Zlomky a desetinná čísla",
      lessons: [
        {
          title: "Zlomek jako část celku",
          content: {
            sections: [
              {
                heading: "Pizza a čokoláda",
                text: "Co uděláš, když máš jednu čokoládu, ale jste na ni čtyři? Musíš ji rozlámat. Zlomky nám říkají, jakou část z celku máme. Zlomek má dvě patra. Dole je 'jmenovatel' – ten nám říká, na kolik dílů jsme celek rozřezali (pojmenovává dílky). Nahoře je 'čitatel' – ten nám říká, kolik dílků jsme si vzali (počítá je). Mezi nimi je zlomková čára.",
                image: "",
              },
              {
                heading: "Polovina, čtvrtina, třetina",
                text: "Některé zlomky znáš, ani o tom nevíš. 1/2 je jedna polovina. 1/4 je jedna čtvrtina. Když máš v ruce 3 dílky pizzy, která byla rozkrájená na 8 dílků, držíš zlomek 3/8 (tři osminy). Pamatuj: Čím větší číslo je dole (jmenovatel), tím jsou dílky menší! (Raději chceš 1/2 pizzy než 1/100 pizzy).",
                image: "placeholder-fraction-sizes",
              },
            ],
            tasks: [
              {
                id: "c6_l1_t1",
                question: "Co nám říká číslo dole (jmenovatel)?",
                options: [
                  "Kolik dílků máme",
                  "Na kolik dílů je celek rozdělen",
                  "Jak je pizza velká",
                  "Kolik to stojí",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c6_l1_t2",
                question: "Jak zapíšeš 'tři pětiny'?",
                options: ["3/5", "5/3", "3,5", "53"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c6_l1_t3",
                question: "Co je víc? 1/2 koláče nebo 1/4 koláče?",
                options: [
                  "1/4 je víc",
                  "1/2 je víc",
                  "Je to stejně",
                  "Záleží na chuti",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c6_l1_t4",
                question:
                  "Mám 8 dílků čokolády a sním 3. Jaký zlomek jsem snědl?",
                options: ["8/3", "3/8", "5/8", "1/8"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c6_l1_t5",
                question: "Co znamená zlomková čára?",
                options: ["Sčítání", "Násobení", "Dělení", "Nic"],
                correctAnswer: 2,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Desetinná čísla: Desetiny a setiny",
          content: {
            sections: [
              {
                heading: "Plot s desetinnou čárkou",
                text: "Desetinná čísla jsou vlastně zlomky, které mají dole desítku nebo stovku, jen zapsané jinak. Používáme k tomu desetinnou čárku. Vlevo od čárky jsou celá čísla (jednotky, desítky...). Vpravo od čárky jsou 'drobky'. První místo za čárkou jsou desetiny (0,1), druhé místo jsou setiny (0,01).",
                image: "",
              },
              {
                heading: "Jak to přečíst",
                text: "Číslo 3,14 čteme 'tři celé, čtrnáct setin' (nebo hovorově 'tři celá čtrnáct'). Číslo 0,5 znamená 'žádná celá, pět desetin' – což je přesně to samé jako polovina! Desetinná čísla vidíme všude – na cenovkách v obchodě (19,90 Kč) nebo na teploměru (36,6 °C).",
                image: "placeholder-price-tags",
              },
            ],
            tasks: [
              {
                id: "c6_l2_t1",
                question: "Které místo je hned za desetinnou čárkou?",
                options: ["Jednotky", "Setiny", "Desetiny", "Tisíciny"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c6_l2_t2",
                question: "Jak zapíšeš 'dvě celé pět desetin'?",
                options: ["25", "2,05", "2,5", "0,25"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c6_l2_t3",
                question: "Co znamená číslice 4 v čísle 0,42?",
                options: ["4 desetiny", "4 setiny", "4 jednotky", "4 stovky"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c6_l2_t4",
                question: "Kolik setin má číslo 0,08?",
                options: ["Žádnou", "Osm", "Deset", "Nula"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c6_l2_t5",
                question: "Přepiš zlomek 3/10 jako desetinné číslo.",
                options: ["3,10", "0,3", "3,0", "0,03"],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Porovnávání desetinných čísel",
          content: {
            sections: [
              {
                heading: "Pozor na délku!",
                text: "Tady dělá chybu spousta dospělých. Co je víc: 0,5 nebo 0,49? Láká nás říct 0,49, protože 49 je víc než 5. ALE POZOR! Musíme porovnávat řád po řádu. Na místě desetin má první číslo 5 a druhé jen 4. Pět je víc než čtyři, takže 0,5 je větší!",
                image: "[Image showing 0.5 vs 0.49 on a ruler or scale]",
              },
              {
                heading: "Trik s nulami",
                text: "Aby se to nepletlo, máme skvělý trik: Doplň si nuly tak, aby obě čísla byla stejně dlouhá. Z 0,5 uděláme 0,50. Teď porovnáváme 0,50 a 0,49. A hned je jasné, že 50 je víc než 49. Nuly na konci desetinného čísla můžeme libovolně přidávat, hodnotu to nemění.",
                image: "placeholder-adding-zeros-comparison",
              },
            ],
            tasks: [
              {
                id: "c6_l3_t1",
                question: "Které číslo je největší?",
                options: ["0,2", "0,19", "0,199", "0,09"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "c6_l3_t2",
                question: "Porovnej: 0,6 ... 0,60",
                options: ["<", ">", "=", "Nelze"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c6_l3_t3",
                question: "Seřaď od nejmenšího: 1,5; 1,05; 1,55",
                options: [
                  "1,05; 1,5; 1,55",
                  "1,5; 1,05; 1,55",
                  "1,55; 1,5; 1,05",
                  "1,05; 1,55; 1,5",
                ],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "c6_l3_t4",
                question: "Je 2,1 větší než 2,09?",
                options: ["Ano", "Ne", "Jsou stejná", "Nevím"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c6_l3_t5",
                question:
                  "Kolik nul si můžu přimyslet na konec desetinného čísla?",
                options: ["Jen jednu", "Maximálně dvě", "Kolik chci", "Žádnou"],
                correctAnswer: 2,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Sčítání a odčítání desetinných čísel",
          content: {
            sections: [
              {
                heading: "Čárka pod čárkou",
                text: "Při sčítání pod sebou je jediné pravidlo, které nesmíš porušit: Desetinná čárka musí být přesně pod desetinnou čárkou. Jako knoflíky u košile. Pokud sčítáš 12,5 + 3,21, napiš si to tak, aby čárky seděly. Prázdná místa vyplň nulami (12,50 + 3,21).",
                image: "[Image showing correct vertical alignment of decimals]",
              },
              {
                heading: "Odčítání s dopočítáním",
                text: "U odčítání je doplňování nul nutnost! Pokud máš 5 - 1,2, musíš si pětku napsat jako 5,0. Pak počítáš 5,0 - 1,2. Nula mínus dva nejde, půjčíš si... a počítáš stejně jako u celých čísel. Jen nezapomeň ve výsledku napsat čárku přesně tam, kde je nahoře.",
                image: "placeholder-decimal-subtraction",
              },
            ],
            tasks: [
              {
                id: "c6_l4_t1",
                question: "Jak musíme zarovnat čísla při sčítání?",
                options: ["Zprava", "Zleva", "Čárku pod čárku", "Na střed"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c6_l4_t2",
                question: "Vypočítej: 1,2 + 0,5",
                options: ["1,7", "0,7", "1,25", "2,7"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c6_l4_t3",
                question: "Vypočítej: 3,5 + 1,25 (pozor na zarovnání!)",
                options: ["4,30", "4,75", "4,3", "5,00"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c6_l4_t4",
                question: "Kolik je 2 - 0,5?",
                options: ["2,5", "1,5", "0,5", "1,95"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c6_l4_t5",
                question: "Který zápis je správně pro 10 + 2,5?",
                options: ["10,0 + 2,5", "10 + 25", "1,0 + 2,5", "Nic z toho"],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Násobení desetinného čísla",
          content: {
            sections: [
              {
                heading: "Zapomeň na čárku",
                text: "Když násobíme číslo desetinné číslem celým (např. 2,3 · 4), na chvíli na čárku úplně zapomeň. Představ si, že počítáš 23 · 4. To je 92. A teď přijde kouzlo: Vrať čárku zpátky. V zadání bylo jedno číslo za čárkou (trojka), tak ve výsledku musí být taky jedno číslo za čárkou. Výsledek je 9,2.",
                image:
                  "[Image illustrating multiplication ignoring comma, then placing it back]",
              },
              {
                heading: "Kontrola odhadem",
                text: "Vždycky si udělej rychlý odhad. 2,3 je 'něco málo přes dvě'. Čtyřikrát dvě je 8. Takže výsledek musí být kousek nad 8. Kdyby ti vyšlo 92, je to moc. Kdyby 0,92, je to málo. 9,2 je tak akorát!",
                video: "placeholder-estimation-check",
              },
            ],
            tasks: [
              {
                id: "c6_l5_t1",
                question: "Vypočítej 1,2 · 3",
                options: ["36", "3,6", "0,36", "3,2"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c6_l5_t2",
                question: "Kam patří čárka ve výsledku 2,15 · 2 = 430?",
                options: ["43,0", "4,30", "0,430", "430"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c6_l5_t3",
                question: "Vypočítej 0,5 · 4",
                options: ["2,0", "0,20", "20", "5,4"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "c6_l5_t4",
                question: "Odhadni výsledek: 9,8 · 5",
                options: ["Asi 5", "Asi 50", "Asi 500", "Asi 100"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c6_l5_t5",
                question: "Co se stane, když zapomeneme vrátit čárku?",
                options: [
                  "Výsledek bude 10x nebo 100x větší (špatně)",
                  "Nic se nestane",
                  "Výsledek bude záporný",
                  "Učitel bude mít radost",
                ],
                correctAnswer: 0,
                xp: 10,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Aritmetická logika a operace",
      lessons: [
        {
          title: "Přednost operací: Matematický semafor",
          content: {
            sections: [
              {
                heading: "Kdo má přednost?",
                text: "Představ si křižovatku. Když se tam potkají sčítání a násobení, kdo jede první? V matematice platí přísná pravidla přednosti. Násobení a dělení jsou jako rychlá auta – mají přednost před sčítáním a odčítáním! Příklad $2 + 3 \\cdot 4$. Nejdřív násobíme ($3 \\cdot 4 = 12$) a teprve pak přičítáme ($2 + 12 = 14$). Kdybychom to udělali opačně, vyjde nám nesmysl.",
                image: "",
              },
              {
                heading: "Král Závorka",
                text: "Existuje ale někdo silnější než násobení – ZÁVORKY! To, co je v závorce, má absolutní přednost. Je to jako sanitka s majákem. V příkladu $(2 + 3) \\cdot 4$ musíme nejdřív sečíst to v závorce ($5$) a teprve pak násobit ($5 \\cdot 4 = 20$). Vidíš ten rozdíl ve výsledku?",
                image: "placeholder-brackets-priority",
              },
            ],
            tasks: [
              {
                id: "c7_l1_t1",
                question: "Co má v příkladu největší přednost?",
                options: ["Sčítání", "Násobení", "Závorka", "To, co je vlevo"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c7_l1_t2",
                question: "Vypočítej: $2 + 5 \\cdot 2$",
                options: ["14", "12", "9", "7"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c7_l1_t3",
                question: "Vypočítej: $(2 + 5) \\cdot 2$",
                options: ["14", "12", "9", "7"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "c7_l1_t4",
                question:
                  "Který krok uděláš jako první v příkladu $10 - 4 : 2$?",
                options: [
                  "Odečtu 4 od 10",
                  "Vydělím 4 děleno 2",
                  "Je to jedno",
                  "Uteču",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c7_l1_t5",
                question: "Jaký je výsledek $10 - 4 : 2$?",
                options: ["3", "8", "6", "5"],
                correctAnswer: 1,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Rovnice: Hledání neznámé",
          content: {
            sections: [
              {
                heading: "Váhy v rovnováze",
                text: "Rovnice je jako váha. Znaménko $=$ uprostřed znamená, že levá miska váží stejně jako pravá. Příklad $x + 5 = 12$. Písmenko $x$ je tajná krabice. Nevíme, co v ní je, ale víme, že když k ní přidáme 5 kilo, váží to stejně jako 12 kilo. Jak zjistíme váhu krabice? Musíme z obou stran odebrat 5.",
                image: "",
              },
              {
                heading: "Detektivní práce (Inverzní operace)",
                text: "Abychom našli $x$, děláme opak toho, co vidíme. Vidíš $+ 5$? Udělej $- 5$. Vidíš $\\cdot 3$? Udělej $: 3$. Příklad $3 \\cdot x = 21$. Nějaké číslo jsme vynásobili třemi a vyšlo 21. Abychom ho našli, musíme 21 vydělit třemi. $x = 7$.",
                image: "placeholder-inverse-operations",
              },
            ],
            tasks: [
              {
                id: "c7_l2_t1",
                question: "Co znamená $x$ v rovnici?",
                options: [
                  "Písmeno abecedy",
                  "Neznámé číslo, které hledáme",
                  "Chyba v tisku",
                  "Křížek",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c7_l2_t2",
                question: "Najdi $x$: $x + 10 = 25$",
                options: ["10", "15", "35", "5"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c7_l2_t3",
                question: "Najdi $x$: $x - 5 = 5$",
                options: ["0", "5", "10", "25"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "c7_l2_t4",
                question: "Najdi $x$: $4 \\cdot x = 20$",
                options: ["4", "5", "16", "24"],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "c7_l2_t5",
                question: "Jakou operací zjistíš $x$ v rovnici $x : 2 = 10$?",
                options: [
                  "Dělením (10 : 2)",
                  "Násobením (10 · 2)",
                  "Sčítáním (10 + 2)",
                  "Odčítáním (10 - 2)",
                ],
                correctAnswer: 1,
                xp: 30,
              },
            ],
          },
        },
        {
          title: "Úvod do záporných čísel",
          content: {
            sections: [
              {
                heading: "Zima a dluhy",
                text: "Doteď jsme znali jen čísla od nuly nahoru. Ale svět pokračuje i pod nulou! Představ si teploměr v mrazu. Ukazuje $-5$ stupňů (mínus pět). To je menší číslo než nula. Nebo si představ, že nemáš peníze a půjčíš si od kamaráda 10 korun. Tvůj stav je $-10$ korun. Jsi v mínusu.",
                image: "",
              },
              {
                heading: "Cesta do sklepa",
                text: "Představ si číselnou osu jako vysoký dům. Přízemí je 0. Kladná čísla jsou patra nad zemí. Záporná čísla jsou sklepy. Čím větší číslo je za mínusem, tím hlouběji jsi. $-100$ je mnohem hlouběji (je menší) než $-1$.",
                image: "placeholder-underground-floors",
              },
            ],
            tasks: [
              {
                id: "c7_l3_t1",
                question: "Které číslo je menší (studenější)?",
                options: ["0", "-5", "2", "10"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c7_l3_t2",
                question: "Co je větší: $-1$ nebo $-10$?",
                options: [
                  "-10 (je to větší číslo)",
                  "-1 (je blíž k nule a teplu)",
                  "Jsou stejná",
                  "Nevím",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c7_l3_t3",
                question: "Jsem v 1. patře a jedu o 3 patra dolů. Kde skončím?",
                options: [
                  "Ve 2. patře",
                  "V patře -2",
                  "V patře -3",
                  "Na ulici",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c7_l3_t4",
                question: "Jak zapíšeš dluh 50 korun?",
                options: ["50", "-50", "0,50", "<50"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c7_l3_t5",
                question: "Seřaď od nejmenšího: 3, -2, 0",
                options: ["0, -2, 3", "-2, 0, 3", "3, 0, -2", "-2, 3, 0"],
                correctAnswer: 1,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Vlastnosti operací",
          content: {
            sections: [
              {
                heading: "Výměna míst (Komutativnost)",
                text: "Sčítání a násobení jsou kamarádské operace. Můžeme u nich prohazovat čísla a výsledek je stejný. $5 + 2$ je to samé jako $2 + 5$. $4 \\cdot 3$ je to samé jako $3 \\cdot 4$. Tomu říkáme komutativnost. Ale pozor! Odčítání a dělení jsou přísné. $10 - 2$ není to samé jako $2 - 10$!",
                image:
                  "[Image illustrating commutativity with blocks a+b = b+a]",
              },
              {
                heading: "Sdružování (Asociativnost)",
                text: "Když sčítáme více čísel, můžeme si vybrat, která sečteme dřív, abychom si ulehčili práci. Příklad: $7 + 5 + 3$. Chytrý počtář uvidí 7 a 3. Ty dají dohromady 10. A pak přičte 5. Výsledek 15. Nemusíš jít popořadě, hledej desítky!",
                image: "placeholder-grouping-strategy",
              },
            ],
            tasks: [
              {
                id: "c7_l4_t1",
                question: "U které operace MŮŽEME prohodit čísla?",
                options: ["Odčítání", "Dělení", "Sčítání", "U žádné"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c7_l4_t2",
                question: "Platí $10 : 2 = 2 : 10$?",
                options: ["Ano", "Ne", "Někdy", "Vždy"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c7_l4_t3",
                question: "Jak nejvýhodněji sečteš $4 + 8 + 6$?",
                options: [
                  "4+8 a pak 6",
                  "4+6 (to je 10) a pak 8",
                  "8+6 a pak 4",
                  "Je to jedno",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c7_l4_t4",
                question:
                  "Jak se říká vlastnosti, že můžeme měnit pořadí sčítanců?",
                options: [
                  "Komunikativnost",
                  "Komutativnost",
                  "Kreativita",
                  "Kombinatorika",
                ],
                correctAnswer: 1,
                xp: 30,
              },
              {
                id: "c7_l4_t5",
                question: "Vypočítej chytře: $2 \\cdot 9 \\cdot 5$",
                options: ["90", "80", "45", "100"],
                correctAnswer: 0,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Složené početní řetězce",
          content: {
            sections: [
              {
                heading: "Matematický maraton",
                text: "Teď spojíme všechno dohromady. Dostaneš dlouhý příklad, třeba $20 - (3 + 2) \\cdot 2 + 6 : 3$. Neboj se ho! Jdi krok za krokem. 1. Závorky ($3+2=5$). 2. Násobení a dělení ($5\\cdot2=10$ a $6:3=2$). 3. Sčítání a odčítání zleva doprava ($20 - 10 + 2$). Výsledek je 12. Podtrhávej si mezivýsledky!",
                image:
                  "[Image showing step-by-step breakdown of a complex equation]",
              },
              {
                heading: "Pořádek dělá mistry",
                text: "Nejvíce chyb vzniká z nepozornosti a spěchu. Piš si každý krok na nový řádek. Když uděláš chybu na začátku, celý výsledek bude špatně. Buď jako chirurg – přesný a trpělivý.",
                image: "placeholder-math-surgeon",
              },
            ],
            tasks: [
              {
                id: "c7_l5_t1",
                question: "Vypočítej: $10 + 2 \\cdot 3 - 4$",
                options: ["32", "12", "8", "20"],
                correctAnswer: 1,
                xp: 30,
              },
              {
                id: "c7_l5_t2",
                question: "Vypočítej: $(10 + 2) \\cdot (3 - 1)$",
                options: ["24", "13", "14", "20"],
                correctAnswer: 0,
                xp: 30,
              },
              {
                id: "c7_l5_t3",
                question: "Najdi chybu: $10 - 2 + 3 = 5$",
                options: [
                  "Žádná chyba",
                  "Chyba je v počítání zleva doprava (správně je 10 - 2 = 8, 8 + 3 = 11)",
                  "Mělo se nejdřív sčítat",
                  "Výsledek má být 15",
                ],
                correctAnswer: 1,
                xp: 35,
              },
              {
                id: "c7_l5_t4",
                question: "Vypočítej: $2 \\cdot 5 + 3 \\cdot 4$",
                options: ["52", "22", "34", "14"],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "c7_l5_t5",
                question:
                  "Co uděláš jako úplně první v příkladu $100 : (20 + 5) - 2$?",
                options: [
                  "Dělení",
                  "Odčítání",
                  "Závorku (20+5)",
                  "Půjdu na svačinu",
                ],
                correctAnswer: 2,
                xp: 20,
              },
            ],
          },
        },
      ],
    },
  ],
  2: [
    {
      title: "Dělitelnost a přirozená čísla",
      description:
        "Podíváme se pod kapotu čísel. Zjistíme, že čísla nejsou jen náhodné symboly, ale že jsou složena z menších stavebních kamenů – prvočísel. Naučíme se je rozkládat, hledat jejich společné dělitele a předpovídat, kdy se potkají jejich násobky.",
      lessons: [
        {
          title: "Prvočísla a čísla složená",
          content: {
            sections: [
              {
                heading: "Atomy matematiky",
                text: "Představ si, že každé přirozené číslo je postavené z Lego kostiček. Některá čísla jsou velká a složitá, jiná jsou malá. Existují však speciální čísla, která už nejdou rozbít na menší kousky (kromě jedničky). Těm říkáme prvočísla.\n\n\n\nPrvočíslo je jako základní atom. Má přesně dva dělitele: jedničku a samo sebe. Příkladem je číslo $5$ (jde dělit jen $1$ a $5$) nebo $13$. Nikdo jiný je nedělí.",
                image: "",
              },
              {
                heading: "Čísla složená a osamělá jednička",
                text: "Čísla, která mají více než dva dělitele, se nazývají čísla složená. Můžeme je 'rozložit' na menší násobky. Například číslo $4$ je složené, protože jde dělit $1$, $2$ a $4$. \n\nA co číslo $1$? To je speciální samotář. Jednička má pouze jednoho dělitele (sama sebe), proto nepatří ani mezi prvočísla, ani mezi čísla složená. Je to prostě jednotka, začátek všeho.",
                image: "",
              },
              {
                heading: "Jak lovit prvočísla (Eratosthenovo síto)",
                text: "Jak najít všechna prvočísla třeba do dvacítky? Použijeme metodu starou tisíce let – Eratosthenovo síto. Funguje to vylučovací metodou:\n1. Napíšeme si čísla $1$ až $20$.\n2. Škrtneme $1$ (není prvočíslo).\n3. Zakroužkujeme $2$ (první prvočíslo) a škrtneme všechny její násobky ($4, 6, 8...$).\n4. Další čisté číslo je $3$. Zakroužkujeme ho a škrtneme jeho násobky.\n5. Takhle pokračujeme, dokud nezůstanou jen prvočísla.\n\n",
                image: "",
              },
            ],
            tasks: [
              {
                id: "c1_l1_t1",
                question: "Které z následujících čísel je prvočíslo?",
                options: [
                  "$9$ (jde dělit 3)",
                  "$15$ (jde dělit 5)",
                  "$17$ (má jen 2 dělitele)",
                  "$1$ (je to jednotka)",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c1_l1_t2_input",
                type: "text-input",
                question: "Napiš nejmenší prvočíslo, které je sudé:",
                correctAnswer: "2",
                xp: 15,
              },
              {
                id: "c1_l1_t3_sequence",
                type: "sequence",
                question: "Seřaď kroky Eratosthenova síta:",
                options: [
                  "Vypíšu řadu čísel.",
                  "Škrtnu číslo 1.",
                  "Zakroužkuji 2 a škrtám násobky dvojky.",
                  "Zakroužkuji 3 a škrtám násobky trojky.",
                ],
                correctAnswer: [
                  "Vypíšu řadu čísel.",
                  "Škrtnu číslo 1.",
                  "Zakroužkuji 2 a škrtám násobky dvojky.",
                  "Zakroužkuji 3 a škrtám násobky trojky.",
                ],
                xp: 25,
              },
              {
                id: "c1_l1_t4",
                question: "Kolik dělitelů má číslo $10$?",
                options: [
                  "Dva ($1, 10$)",
                  "Tři ($1, 5, 10$)",
                  "Čtyři ($1, 2, 5, 10$)",
                  "Pět",
                ],
                correctAnswer: 2,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Znaky dělitelnosti",
          content: {
            sections: [
              {
                heading: "Matematické hacky",
                text: "Představ si, že máš číslo $1\\ 234\\ 567\\ 890$ a máš zjistit, jestli jde vydělit pěti beze zbytku. Nemusíš to složitě dělit! Stačí se podívat na konec. Matematika má svá tajná pravidla, kterým říkáme znaky dělitelnosti. Díky nim okamžitě vidíme vlastnosti čísla, aniž bychom museli zdlouhavě počítat.",
                image: "",
              },
              {
                heading: "Pravidla koncovky (2, 5, 10)",
                text: "Tato pravidla se týkají pouze poslední číslice. Zbytek čísla nás nezajímá!\n* Dělitelnost 2: Číslo musí být sudé. Tedy končí na $0, 2, 4, 6, 8$.\n* Dělitelnost 5: Číslo musí končit na $0$ nebo $5$.\n* Dělitelnost 10: Číslo musí končit přesně na $0$.\n\n",
                image: "",
              },
              {
                heading: "Magický ciferný součet (3 a 9)",
                text: "U čísel $3$ a $9$ nezáleží na poslední číslici, ale na celém čísle. Musíme sečíst všechny jeho cifry. Tomu říkáme ciferný součet.\n\nMějme číslo $123$. Sečteme cifry: $$1 + 2 + 3 = 6$$ \nJe výsledek ($6$) dělitelný třemi? Ano! Takže i celé obří číslo $123$ je dělitelné třemi. Stejně to funguje pro devítku.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "c1_l2_t1",
                question: "Které číslo je dělitelné číslem $5$?",
                options: ["$123$", "$501$", "$1\\ 005$", "$77$"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c1_l2_t2_input",
                type: "text-input",
                question: "Vypočítej ciferný součet čísla $258$. (Napiš číslo)",
                correctAnswer: "15",
                xp: 15,
              },
              {
                id: "c1_l2_t3_sequence",
                type: "sequence",
                question:
                  "Seřaď čísla podle velikosti jejich ciferného součtu (od nejmenšího):",
                options: [
                  "$10$ (součet 1)",
                  "$21$ (součet 3)",
                  "$40$ (součet 4)",
                  "$15$ (součet 6)",
                ],
                correctAnswer: [
                  "$10$ (součet 1)",
                  "$21$ (součet 3)",
                  "$40$ (součet 4)",
                  "$15$ (součet 6)",
                ],
                xp: 20,
              },
              {
                id: "c1_l2_t4",
                question: "Je číslo $72$ dělitelné devíti?",
                options: [
                  "Ano, protože $7+2=9$.",
                  "Ne, protože nekončí devítkou.",
                  "Ano, protože je sudé.",
                  "Ne, je moc malé.",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Prvočíselný rozklad",
          content: {
            sections: [
              {
                heading: "Rentgenové vidění",
                text: "Každé složené číslo se dá rozložit na součin prvočísel. Je to jako bychom číslo dali pod rentgen a viděli jeho DNA. Tento proces se nazývá prvočíselný rozklad. \n\nNapříklad rozklad čísla $12$:\n1. $12 = 4 \\cdot 3$ (Ale 4 není prvočíslo, musíme dál!)\n2. $12 = 2 \\cdot 2 \\cdot 3$\n3. Teď už máme samá prvočísla. Můžeme to zapsat zkráceně pomocí mocniny: $$12 = 2^2 \\cdot 3$$",
                image: "",
              },
              {
                heading: "Metoda žebříku (postupné dělení)",
                text: "Jak rozložit velké číslo, třeba $60$? Dělíme postupně nejmenšími možnými prvočísly:\n\n1. Jde $60$ dělit $2$? Ano. ($60 : 2 = 30$)\n2. Jde $30$ dělit $2$? Ano. ($30 : 2 = 15$)\n3. Jde $15$ dělit $2$? Ne. Zkusíme další prvočíslo ($3$). Jde to? Ano. ($15 : 3 = 5$)\n4. $5$ je prvočíslo. Hotovo.\n\nVýsledek zapíšeme jako součin: $60 = 2 \\cdot 2 \\cdot 3 \\cdot 5$.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "c1_l3_t1",
                question:
                  "Který zápis je správný prvočíselný rozklad čísla $8$?",
                options: [
                  "$4 \\cdot 2$",
                  "$2 \\cdot 2 \\cdot 2$",
                  "$1 \\cdot 8$",
                  "$2 \\cdot 4$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c1_l3_t2_sequence",
                type: "sequence",
                question: "Seřaď kroky rozkladu čísla 18:",
                options: [
                  "Mám číslo 18.",
                  "Vydělím ho 2 (zbyde 9).",
                  "Devítku vydělím 3 (zbyde 3).",
                  "Trojka je prvočíslo, mám hotovo ($2 \\cdot 3 \\cdot 3$).",
                ],
                correctAnswer: [
                  "Mám číslo 18.",
                  "Vydělím ho 2 (zbyde 9).",
                  "Devítku vydělím 3 (zbyde 3).",
                  "Trojka je prvočíslo, mám hotovo ($2 \\cdot 3 \\cdot 3$).",
                ],
                xp: 25,
              },
              {
                id: "c1_l3_t3_input",
                type: "text-input",
                question:
                  "Které číslo se skrývá pod rozkladem $2 \\cdot 3 \\cdot 5$? (Vynásob je)",
                correctAnswer: "30",
                xp: 20,
              },
              {
                id: "c1_l3_t4",
                question:
                  "Jak zapíšeme $2 \\cdot 2 \\cdot 2 \\cdot 3$ zkráceně pomocí mocniny?",
                options: [
                  "$23 \\cdot 3$",
                  "$6 \\cdot 3$",
                  "$2^3 \\cdot 3$",
                  "$2 \\cdot 3^3$",
                ],
                correctAnswer: 2,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Největší společný dělitel (NSD)",
          content: {
            sections: [
              {
                heading: "Krájíme tyče (Co je to NSD)",
                text: "Představ si, že máš dvě dřevěné tyče: jedna měří $12$ metrů a druhá $18$ metrů. Chceš je rozřezat na stejně dlouhé kousky tak, aby ti nic nezbylo a kousky byly co největší. \n\nHledáme Největší Společný Dělitel ($NSD$).\n* Dělitelé 12: $1, 2, 3, 4, 6, 12$\n* Dělitelé 18: $1, 2, 3, 6, 9, 18$\n\nKterá čísla mají společná? $1, 2, 3$ a $6$. Největší z nich je $6$. Takže nejdelší tyč, kterou můžeme nařezat, měří 6 metrů.",
                image: "",
              },
              {
                heading: "Profesionální metoda (přes rozklad)",
                text: "U malých čísel stačí dělitele vypsat. U velkých (např. 120 a 300) bychom se upsali. Použijeme prvočíselný rozklad!\n\nPravidlo: Pro NSD vybereme jen ta prvočísla, která se vyskytují v obou rozkladech, a to v té menší mocnině (musí se vejít do obou).\n\n* $12 = 2^2 \\cdot 3$\n* $18 = 2 \\cdot 3^2$\n\nSpolečná je jedna dvojka ($2^1$) a jedna trojka ($3^1$). \n$$NSD(12, 18) = 2 \\cdot 3 = 6$$",
                image: "",
              },
            ],
            tasks: [
              {
                id: "c1_l4_t1_input",
                type: "text-input",
                question:
                  "Najdi největšího společného dělitele čísel 10 a 15. Napiš číslo:",
                correctAnswer: "5",
                xp: 15,
              },
              {
                id: "c1_l4_t2_sequence",
                type: "sequence",
                question: "Seřaď postup hledání NSD(12, 18) pomocí rozkladu:",
                options: [
                  "Rozložím 12 na $2 \\cdot 2 \\cdot 3$.",
                  "Rozložím 18 na $2 \\cdot 3 \\cdot 3$.",
                  "Vyberu společná čísla (jedna 2 a jedna 3).",
                  "Vynásobím $2 \\cdot 3 = 6$.",
                ],
                correctAnswer: [
                  "Rozložím 12 na $2 \\cdot 2 \\cdot 3$.",
                  "Rozložím 18 na $2 \\cdot 3 \\cdot 3$.",
                  "Vyberu společná čísla (jedna 2 a jedna 3).",
                  "Vynásobím $2 \\cdot 3 = 6$.",
                ],
                xp: 30,
              },
              {
                id: "c1_l4_t3",
                question:
                  "Čísla, jejichž $NSD$ je $1$ (nemají žádného společného dělitele kromě jedničky), nazýváme:",
                options: [
                  "Sousoudělná",
                  "Nesoudělná",
                  "Prvočísla",
                  "Nepřátelská",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c1_l4_t4",
                question:
                  "Máš 20 jablek a 30 hrušek. Chceš udělat stejné balíčky. Kolik nejvíc balíčků uděláš?",
                options: [
                  "$5$",
                  "$10$ (protože 10 dělí 20 i 30)",
                  "$20$",
                  "$2$",
                ],
                correctAnswer: 1,
                xp: 30,
              },
            ],
          },
        },
        {
          title: "Nejmenší společný násobek (nsn)",
          content: {
            sections: [
              {
                heading: "Závody na okruhu (Co je to nsn)",
                text: "Představ si dva běžce na oválu. První uběhne kolo za $4$ minuty, druhý je pomalejší a trvá mu to $6$ minut. Vystartují spolu. Kdy se znovu potkají na startovní čáře? \n\nHledáme nejmenší společný násobek ($nsn$).\n* Běžec A (4 min): bude na startu v čase 4, 8, 12, 16, 20, 24...\n* Běžec B (6 min): bude na startu v čase 6, 12, 18, 24...\n\nPoprvé se potkají ve 12. minutě. To je jejich nejmenší společný násobek.",
                image: "",
              },
              {
                heading: "Jak na to přes rozklad",
                text: "Pro nalezení $nsn$ pomocí rozkladu platí opačné pravidlo než u NSD: Musíme vytvořit 'batoh', do kterého se vejdou obě čísla. \n\nPravidlo: Sjednotíme všechna prvočísla a použijeme jejich nejvyšší mocninu.\n\n* $12 = 2^2 \\cdot 3$ (potřebuje dvě dvojky a jednu trojku)\n* $18 = 2 \\cdot 3^2$ (potřebuje jednu dvojku a dvě trojky)\n\nAby byl batoh dost velký pro oba, musí tam být dvě dvojky ($2^2$) a dvě trojky ($3^2$).\n$$nsn(12, 18) = 2^2 \\cdot 3^2 = 4 \\cdot 9 = 36$$",
                image: "",
              },
            ],
            tasks: [
              {
                id: "c1_l5_t1_input",
                type: "text-input",
                question:
                  "Najdi nejmenší společný násobek čísel 2 a 3. (Kdy se potkají násobky?)",
                correctAnswer: "6",
                xp: 15,
              },
              {
                id: "c1_l5_t2",
                question:
                  "Autobus A jezdí každých 10 minut, autobus B každých 15 minut. Teď odjeli spolu. Za jak dlouho pojedou zase spolu?",
                options: [
                  "Za 25 minut",
                  "Za 30 minut (nsn 10 a 15)",
                  "Za 60 minut",
                  "Za 150 minut",
                ],
                correctAnswer: 1,
                xp: 30,
              },
              {
                id: "c1_l5_t3_sequence",
                type: "sequence",
                question: "Seřaď násobky čísla 6:",
                options: ["6", "12", "18", "24"],
                correctAnswer: ["6", "12", "18", "24"],
                xp: 10,
              },
              {
                id: "c1_l5_t4",
                question: "Platí, že $nsn(3, 5) = 15$? (Jsou to prvočísla)",
                options: [
                  "Ano, u prvočísel je nsn jejich součin.",
                  "Ne, je to 8.",
                  "Ne, je to 1.",
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
      title: "Celá čísla a Racionální čísla",
      description:
        "Svět nekončí u nuly. Podíváme se do 'suterénu' matematiky, naučíme se pracovat s dluhy a teplotami pod nulou. Také se staneme mistry zlomků, protože bez nich se v algebře a fyzice neobejdeme.",
      lessons: [
        {
          title: "Celá čísla a absolutní hodnota",
          content: {
            sections: [
              {
                heading: "Svět za zrcadlem",
                text: "Doposud jsme znali jen kladná čísla ($1, 2, 3...$). Ale co když je venku mráz nebo máme na účtu dluh? Potřebujeme celá čísla. Představ si nulu jako velké zrcadlo. Každé kladné číslo má v zrcadle svůj obraz – číslo opačné.\n\n\n\n* Obrazem pětky ($5$) je minus pět ($-5$).\n* Obrazem stovky ($100$) je minus sto ($-100$).\n\nVšechna tato čísla dohromady (kladná, záporná a nula) tvoří rodinu celých čísel (značíme $\\mathbb{Z}$).",
                image: "",
              },
              {
                heading: "Vzdálenost od nuly (Absolutní hodnota)",
                text: "Někdy nás nezajímá, jestli jdeme doleva (do minusu) nebo doprava (do plusu), ale jen to, kolik kroků jsme ušli. Této vzdálenosti od nuly říkáme absolutní hodnota. Značíme ji svislými čarami, např. $|-5|$.\n\n\n\nAbsolutní hodnota je jako pračka na znaménka – vždy z ní vypadne kladné číslo (nebo nula). Vzdálenost totiž nemůže být záporná!\n* $|-5| = 5$ (ušli jsme 5 kroků doleva)\n* $|5| = 5$ (ušli jsme 5 kroků doprava)",
                image: "",
              },
              {
                heading: "Porovnávání v mrazu",
                text: "Které číslo je větší? $-5$ nebo $-10$? Představ si teplotu. Kdy je větší zima? Při $-10$ stupních. To znamená, že $-10$ je menší (nižší) číslo než $-5$. Na číselné ose platí jednoduché pravidlo: Číslo, které je více vpravo, je vždy větší.\n\n$$ -100 < -1 < 0 < 5 $$",
                image: "placeholder-thermometer-comparison",
              },
            ],
            tasks: [
              {
                id: "c2_l1_t1",
                question: "Kolik je $|-8|$?",
                options: ["$-8$", "$8$", "$0$", "$0,8$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c2_l1_t2_input",
                type: "text-input",
                question: "Napiš číslo opačné k číslu $-15$:",
                correctAnswer: "15",
                xp: 15,
              },
              {
                id: "c2_l1_t3_sequence",
                type: "sequence",
                question:
                  "Seřaď čísla od nejmenšího (největší zimy) po největší:",
                options: ["$-20$", "$-5$", "$0$", "$3$"],
                correctAnswer: ["$-20$", "$-5$", "$0$", "$3$"],
                xp: 25,
              },
              {
                id: "c2_l1_t4",
                question: "Který zápis je pravdivý?",
                options: [
                  "$-5 > -2$ (chyba, -5 je větší zima)",
                  "$-10 > 0$ (chyba, záporné není větší než nula)",
                  "$-50 < -20$ (správně, -50 je více vlevo)",
                  "$0 < -5$ (chyba)",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "c2_l1_t5_input",
                type: "text-input",
                question: "Vypočítej: $|-3| + |2| = ?",
                correctAnswer: "5",
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Počítání se zápornými čísly",
          content: {
            sections: [
              {
                heading: "Sčítání a odčítání: Model peněz",
                text: "Jak spočítat $-5 + 2$ nebo $-3 - 4$? Nejlepší je představit si peníze a dluhy.\n\n* Minus je dluh. Plus jsou peníze v kapse.\n* $-5 + 2$: Mám dluh 5 korun, ale vydělám 2 koruny. Splatím část dluhu. Kolik mi zbývá doplatit? Dlužím ještě 3. Výsledek: $-3$.\n* $-3 - 4$: Mám dluh 3 koruny a udělám další sekeru za 4 koruny. Můj dluh se prohloubí. Celkem dlužím 7. Výsledek: $-7$.\n\n",
                image: "",
              },
              {
                heading: "Válka znamének",
                text: "Co když se potkají dvě znaménka vedle seba, třeba $5 - (-2)$? Platí pravidla jako ve vztazích:\n\n* $+$ a $+$ se mají rádi $\\rightarrow$ +\n* $-$ a $-$ se 'poperou' a vznikne $\\rightarrow$ + (odebrat dluh znamená zbohatnout!)\n* $+$ a $-$ se nemají rádi $\\rightarrow$ -\n\nPříklad: $5 - (-2)$ změníme na $5 + 2 = 7$.",
                image: "",
              },
              {
                heading: "Násobení a dělení: Přítel a nepřítel",
                text: "Pro násobení a dělení platí jednoduchá pravidla:\n\n* Přítel mého přítele je můj přítel: $(+) \\cdot (+) = +$\n* Nepřítel mého nepřítele je můj přítel: $(-) \\cdot (-) = +$\n* Přítel mého nepřítele je můj nepřítel: $(+) \\cdot (-) = -$\n\n\n\nJednoduše: Pokud je v příkladu sudý počet minusů, výsledek je kladný. Pokud lichý, je záporný.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "c2_l2_t1_input",
                type: "text-input",
                question:
                  "Vypočítej: $-5 - 3$ (mám dluh 5 a udělám dluh 3). Napiš výsledek:",
                correctAnswer: "-8",
                xp: 15,
              },
              {
                id: "c2_l2_t2",
                question: "Vypočítej: $10 + (-4)$",
                options: [
                  "$14$",
                  "$6$ (protože plus a minus dá minus)",
                  "$-6$",
                  "$-14$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c2_l2_t3_sequence",
                type: "sequence",
                question: "Seřaď kroky výpočtu $3 - (-3)$:",
                options: [
                  "Mám příklad $3 - (-3)$.",
                  "Dvě minusy vedle sebe dají plus ($3 + 3$).",
                  "Sečtu $3 + 3$.",
                  "Výsledek je 6.",
                ],
                correctAnswer: [
                  "Mám příklad $3 - (-3)$.",
                  "Dvě minusy vedle sebe dají plus ($3 + 3$).",
                  "Sečtu $3 + 3$.",
                  "Výsledek je 6.",
                ],
                xp: 25,
              },
              {
                id: "c2_l2_t4_input",
                type: "text-input",
                question: "Vypočítej: $(-2) \\cdot (-5)$ (pozor na znaménka!)",
                correctAnswer: "10",
                xp: 15,
              },
              {
                id: "c2_l2_t5",
                question: "Jaké znaménko bude mít výsledek $-20 : 4$?",
                options: [
                  "Kladné (+)",
                  "Záporné (-)",
                  "Žádné (nula)",
                  "Nelze určit",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Zlomky: Rozšiřování a krácení",
          content: {
            sections: [
              {
                heading: "Změna vizáže, stejná hodnota",
                text: "Zlomky jsou jako chameleoni. $\\frac{1}{2}$ vypadá jinak než $\\frac{2}{4}$ nebo $\\frac{50}{100}$, ale je to pořád ta samá polovina pizzy. Zlomky můžeme upravovat, aniž bychom změnili jejich hodnotu:\n\n* Rozšiřování: Vynásobíme čitatele i jmenovatele stejným číslem. (Zvětšíme počet dílků, ale zmenšíme jejich velikost).\n* Krácení: Vydělíme čitatele i jmenovatele stejným číslem.\n\n",
                image: "",
              },
              {
                heading: "Základní tvar",
                text: "V matematice je slušnost uvádět výsledky v základním tvaru. To je stav, kdy už zlomek nejde dál krátit (čitatel a jmenovatel nemají společného dělitele).\n\nNapříklad zlomek $\\frac{8}{12}$. Vidíme, že obě čísla jsou sudá a jdou dělit čtyřmi.\n$$ \\frac{8:4}{12:4} = \\frac{2}{3} $$\nZlomek $\\frac{2}{3}$ už krátit nejde, to je základní tvar.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "c2_l3_t1",
                question:
                  "Který zlomek má stejnou hodnotu jako $\\frac{1}{3}$?",
                options: [
                  "$\\frac{2}{6}$ (rozšířeno dvěma)",
                  "$\\frac{1}{6}$",
                  "$\\frac{3}{1}$",
                  "$\\frac{2}{5}$",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c2_l3_t2_sequence",
                type: "sequence",
                question:
                  "Seřaď kroky krácení zlomku $\\frac{10}{20}$ na základní tvar:",
                options: [
                  "Mám zlomek $\\frac{10}{20}$.",
                  "Vidím, že obě čísla jdou vydělit 10.",
                  "Vydělím čitatele: $10 : 10 = 1$.",
                  "Vydělím jmenovatele: $20 : 10 = 2$.",
                  "Výsledek je $\\frac{1}{2}$.",
                ],
                correctAnswer: [
                  "Mám zlomek $\\frac{10}{20}$.",
                  "Vidím, že obě čísla jdou vydělit 10.",
                  "Vydělím čitatele: $10 : 10 = 1$.",
                  "Vydělím jmenovatele: $20 : 10 = 2$.",
                  "Výsledek je $\\frac{1}{2}$.",
                ],
                xp: 25,
              },
              {
                id: "c2_l3_t3_input",
                type: "text-input",
                question:
                  "Rozšiř zlomek $\\frac{2}{3}$ číslem 5. Jaký bude čitatel nového zlomku? (Napiš číslo)",
                correctAnswer: "10",
                xp: 15,
              },
              {
                id: "c2_l3_t4",
                question:
                  "Jsou zlomky $\\frac{3}{5}$ a $\\frac{6}{10}$ stejné?",
                options: [
                  "Ano",
                  "Ne, druhý je větší",
                  "Ne, první je větší",
                  "Nelze určit",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c2_l3_t5",
                question:
                  "Který zlomek je v základním tvaru (už nejde krátit)?",
                options: [
                  "$\\frac{4}{6}$ (jde dělit 2)",
                  "$\\frac{7}{9}$ (nic společného nemají)",
                  "$\\frac{10}{100}$ (jde dělit 10)",
                  "$\\frac{12}{4}$ (jde dělit 4)",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Operace se zlomky (Sčítání a násobení)",
          content: {
            sections: [
              {
                heading: "Sčítání: Hledání společné řeči",
                text: "Nemůžeme sčítat hrušky s jablky. Stejně tak nemůžeme sčítat zlomky s různými jmenovateli (třetiny s pětinami). Musíme je nejdřív převést na společného jmenovatele (nejlépe nejmenší společný násobek).\n\n\n\nPříklad $\\frac{1}{2} + \\frac{1}{3}$:\n1. Společný jmenovatel pro 2 a 3 je 6.\n2. Rozšíříme zlomky: $\\frac{3}{6} + \\frac{2}{6}$.\n3. Teď už můžeme sečíst čitatele: $3 + 2 = 5$.\n4. Výsledek: $\\frac{5}{6}$.",
                image: "",
              },
              {
                heading: "Násobení: Přímá cesta",
                text: "Násobení je mnohem jednodušší. Tady nic nepřevádíme! Prostě vynásobíme horní s horním (čitatele) a dolní s dolním (jmenovatele).\n\n$$ \\frac{2}{3} \\cdot \\frac{4}{5} = \\frac{2 \\cdot 4}{3 \\cdot 5} = \\frac{8}{15} $$",
                image: "",
              },
              {
                heading: "Dělení: Salto vzad",
                text: "Jak vydělit zlomek zlomkem? Použijeme trik: Dělení změníme na násobení převrácenou hodnotou.\n\n\n\nDruhý zlomek prostě otočíme nohama vzhůru (uděláme salto) a znaménko dělení přepíšeme na krát.\n$$ \\frac{2}{3} : \\frac{5}{7} \\rightarrow \\frac{2}{3} \\cdot \\frac{7}{5} = \\frac{14}{15} $$",
                image: "",
              },
            ],
            tasks: [
              {
                id: "c2_l4_t1_sequence",
                type: "sequence",
                question: "Seřaď postup sčítání $\\frac{1}{4} + \\frac{1}{5}$:",
                options: [
                  "Najdu společný jmenovatel (20).",
                  "Rozšířím zlomky na $\\frac{5}{20}$ a $\\frac{4}{20}$.",
                  "Sečtu čitatele ($5 + 4 = 9$).",
                  "Výsledek je $\\frac{9}{20}$.",
                ],
                correctAnswer: [
                  "Najdu společný jmenovatel (20).",
                  "Rozšířím zlomky na $\\frac{5}{20}$ a $\\frac{4}{20}$.",
                  "Sečtu čitatele ($5 + 4 = 9$).",
                  "Výsledek je $\\frac{9}{20}$.",
                ],
                xp: 30,
              },
              {
                id: "c2_l4_t2",
                question:
                  "Jaký je nejmenší společný jmenovatel pro $\\frac{1}{2}$ a $\\frac{1}{5}$?",
                options: [
                  "$7$",
                  "$5$",
                  "$2$",
                  "$10$ (protože $2 \\cdot 5 = 10$)",
                ],
                correctAnswer: 3,
                xp: 10,
              },
              {
                id: "c2_l4_t3_input",
                type: "text-input",
                question:
                  "Vypočítej součin čitatelů v příkladu $\\frac{2}{3} \\cdot \\frac{4}{5}$ (napiš číslo):",
                correctAnswer: "8",
                xp: 15,
              },
              {
                id: "c2_l4_t4",
                question: "Jak vypočítáš $\\frac{1}{2} : \\frac{1}{3}$?",
                options: [
                  "Jako $\\frac{1}{2} \\cdot \\frac{1}{3}$",
                  "Jako $\\frac{1}{2} \\cdot \\frac{3}{1}$ (násobím převrácenou hodnotou)",
                  "Jako $\\frac{2}{1} \\cdot \\frac{1}{3}$",
                  "Nejde to",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c2_l4_t5",
                question:
                  "Vypočítej $\\frac{3}{8} - \\frac{1}{8}$ (jmenovatel je stejný):",
                options: [
                  "$\\frac{2}{0}$",
                  "$\\frac{2}{8}$ (což je po zkrácení $\\frac{1}{4}$)",
                  "$\\frac{4}{8}$",
                  "$\\frac{2}{16}$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Desetinná čísla vs. Zlomky",
          content: {
            sections: [
              {
                heading: "Dva jazyky stejného kmene",
                text: "Zlomek a desetinné číslo jsou jen dva způsoby zápisu téže hodnoty. Někdy se hodí jeden, jindy druhý.\n\n* Zlomek je matematicky přesný. $\\frac{1}{3}$ je naprosto přesná třetina koláče.\n* Desetinné číslo je praktické pro peníze a měření. $0,33$ metrů si lépe představíme.\n\nZlomek převedeme na desetinné číslo tak, že prostě vydělíme čitatele jmenovatelem (čára zlomku znamená děleno).",
                image:
                  "[Image comparing 1/3 fraction notation vs 0.33 decimal notation]",
              },
              {
                heading: "Nekonečné příběhy (Perioda)",
                text: "Některé zlomky při dělení 'skončí' (třeba $\\frac{1}{2} = 0,5$). Jiné jsou 'zlobivé' a táhnou se do nekonečna. Třeba $\\frac{1}{3} = 0,3333...$\n\n\n\nTěmto číslům říkáme periodická. Tu opakující se část značíme pruhem nad číslem: $0,\\overline{3}$. V takovém případě je pro počítání vždy lepší nechat číslo ve zlomku, jinak bychom museli zaokrouhlovat a dělali chyby.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "c2_l5_t1_input",
                type: "text-input",
                question:
                  "Převeď zlomek $\\frac{1}{2}$ na desetinné číslo (napiš číslo s desetinnou čárkou):",
                correctAnswer: "0,5",
                xp: 15,
              },
              {
                id: "c2_l5_t2",
                question: "Co znamená čára nad číslem $0,\\overline{6}$?",
                options: [
                  "Že je číslo záporné",
                  "Že se šestka opakuje do nekonečna",
                  "Že je to konec příkladu",
                  "Je to chyba tisku",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c2_l5_t3_sequence",
                type: "sequence",
                question: "Seřaď čísla od nejmenšího:",
                options: [
                  "$0,2$",
                  "$0,25$ (což je $\\frac{1}{4}$)",
                  "$0,5$ (což je $\\frac{1}{2}$)",
                  "$0,9$",
                ],
                correctAnswer: [
                  "$0,2$",
                  "$0,25$ (což je $\\frac{1}{4}$)",
                  "$0,5$ (což je $\\frac{1}{2}$)",
                  "$0,9$",
                ],
                xp: 20,
              },
              {
                id: "c2_l5_t4",
                question: "Převeď $0,25$ na zlomek v základním tvaru.",
                options: [
                  "$\\frac{25}{100}$",
                  "$\\frac{1}{4}$",
                  "$\\frac{1}{5}$",
                  "$\\frac{2}{5}$",
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
      title: "Poměr, úměra a procenta",
      description:
        "Matematika reálného světa. Naučíme se míchat šťávu ve správném poměru, spočítat, jak dlouho bude trvat práce více lidem, a hlavně rozumět slevám a úrokům, abychom se nenechali ošidit.",
      lessons: [
        {
          title: "Poměr a měřítko",
          content: {
            sections: [
              {
                heading: "Recept na správný mix",
                text: "Poměr nám říká, v jakém vztahu jsou dvě veličiny. Představ si, že mícháš šťávu s vodou v poměru $1:4$ (čteme 'jedna ku čtyřem'). To znamená, že na 1 díl šťávy dáš 4 díly vody. Celý nápoj má pak dohromady 5 dílů.\n\n\n\nS poměrem můžeme pracovat stejně jako se zlomky – můžeme ho krátit i rozšiřovat. Poměr $10:20$ je úplně to samé jako $1:2$.",
                image: "",
              },
              {
                heading: "Rozdělování lupu (Rozdělení v poměru)",
                text: "Často potřebujeme něco rozdělit nerovnoměrně. Představ si, že babička rozdělí $1\\,000$ Kč mezi Petra a Janu v poměru $2:3$. Petr má dostat 2 díly a Jana 3 díly. Jak na to?\n\n1.  Sečteme díly: $2 + 3 = 5$ dílů celkem.\n2.  Hodnota 1 dílu: $1\\,000 : 5 = 200$ Kč.\n3.  Rozdáme to: Petr dostane $2 \\cdot 200 = 400$ Kč, Jana $3 \\cdot 200 = 600$ Kč.",
                image: "placeholder-ratio-division-money",
              },
              {
                heading: "Svět v malém (Měřítko mapy)",
                text: "Na mapě najdeš měřítko, třeba $1 : 50\\,000$. To je vlastně poměr! Říká nám, že 1 cm na mapě odpovídá 50 000 cm ve skutečnosti.\n\nAbychom si to představili, škrtneme dvě nuly (převedeme cm na metry). Takže 1 cm na mapě je 500 metrů venku. Kdyby bylo měřítko $1 : 100$, znamená to, že skutečnost je stokrát zmenšená.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "c3_l1_t1",
                question: "Zkrať poměr $12 : 4$ na základní tvar.",
                options: ["$6 : 2$", "$3 : 1$", "$4 : 12$", "$1 : 3$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c3_l1_t2_input",
                type: "text-input",
                question:
                  "Rozděl číslo 20 v poměru $1 : 4$. Napiš pouze to větší číslo z rozdělení:",
                correctAnswer: "16",
                xp: 20,
              },
              {
                id: "c3_l1_t3",
                question:
                  "Měřítko je $1 : 100$. Jak dlouhá je ve skutečnosti úsečka, která má na výkresu 5 cm?",
                options: [
                  "$500$ cm ($5$ metrů)",
                  "$100$ cm",
                  "$50$ cm",
                  "$5$ km",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c3_l1_t4_sequence",
                type: "sequence",
                question:
                  "Seřaď poměry podle velikosti prvního čísla vůči druhému (od nejmenšího podílu):",
                options: [
                  "$1:10$ (desetina)",
                  "$1:4$ (čtvrtina)",
                  "$1:2$ (polovina)",
                  "$1:1$ (celek)",
                ],
                correctAnswer: [
                  "$1:10$ (desetina)",
                  "$1:4$ (čtvrtina)",
                  "$1:2$ (polovina)",
                  "$1:1$ (celek)",
                ],
                xp: 20,
              },
              {
                id: "c3_l1_t5",
                question:
                  "Mícháš beton: 1 díl cementu, 2 díly písku, 3 díly štěrku. Kolik lopat materiálu celkem potřebuješ na jednu dávku?",
                options: ["$3$", "$5$", "$6$", "$10$"],
                correctAnswer: 2,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Přímá a nepřímá úměrnost",
          content: {
            sections: [
              {
                heading: "Čím víc, tím víc (Přímá úměra)",
                text: "To je jednoduchá logika nákupů. Čím víc rohlíků koupím, tím víc zaplatím. Pokud 1 rohlík stojí 3 Kč, 10 rohlíků stojí 30 Kč.\n\nPlatí: Kolikrát se zvětší jedna veličina, tolikrát se zvětší i ta druhá. Grafem přímé úměrnosti je přímka, která vychází z nuly.",
                image:
                  "[Image showing graph of direct proportion as a straight line starting from zero]",
              },
              {
                heading: "Čím víc, tím míň (Nepřímá úměra)",
                text: "Tady pozor! Představ si bagr, který kope jámu. Jeden bagr to udělá za 10 hodin. Když přijede druhý bagr (je jich $2\\times$ víc), bude jim to trvat déle? Ne! Bude to hotové dříve ($2\\times$ rychleji).\n\nPlatí: Kolikrát se zvětší počet pracantů, tolikrát se zmenší čas. Grafem je křivka zvaná hyperbola.",
                image:
                  "[Image comparing graphs of direct straight line and inverse hyperbola proportions]",
              },
              {
                heading: "Jak to poznat?",
                text: "Vždy si řekni selským rozumem: Když zdvojnásobím první věc, co se stane s druhou?\n* Zdvihne se taky? $\\rightarrow$ Přímá úměra (nákupy, dráha, recepty).\n* Klesne na polovinu? $\\rightarrow$ Nepřímá úměra (rychlost a čas, dělníci a práce).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "c3_l2_t1",
                question:
                  "Urči typ úměry: Počet koupených jablek a cena, kterou zaplatím u pokladny.",
                options: ["Přímá úměra", "Nepřímá úměra", "Žádná úměra"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c3_l2_t2",
                question:
                  "Urči typ úměry: Rychlost auta a čas, za který dojede do cíle (čím jedu rychleji...)",
                options: [
                  "Přímá úměra (čím rychleji, tím déle)",
                  "Nepřímá úměra (čím rychleji, tím dříve)",
                  "Nezávisí to na sobě",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c3_l2_t3_input",
                type: "text-input",
                question:
                  "3 dělníci postaví zeď za 12 hodin. Kolik hodin to bude trvat 6 dělníkům? (Je jich dvakrát víc, tak to stihnou...)",
                correctAnswer: "6",
                xp: 20,
              },
              {
                id: "c3_l2_t4_sequence",
                type: "sequence",
                question: "Seřaď logickou úvahu u nepřímé úměry (Bagry):",
                options: [
                  "1 bagr kope 10 hodin.",
                  "Přijel druhý bagr, bagry jsou 2 (2x více).",
                  "Práce půjde 2x rychleji.",
                  "Výsledný čas je 5 hodin.",
                ],
                correctAnswer: [
                  "1 bagr kope 10 hodin.",
                  "Přijel druhý bagr, bagry jsou 2 (2x více).",
                  "Práce půjde 2x rychleji.",
                  "Výsledný čas je 5 hodin.",
                ],
                xp: 25,
              },
              {
                id: "c3_l2_t5_input",
                type: "text-input",
                question:
                  "1 kg barvy vystačí na $5\\,m^2$. Kolik $m^2$ natřu se 4 kg?",
                correctAnswer: "20",
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Trojčlenka",
          content: {
            sections: [
              {
                heading: "Univerzální řešitel problémů",
                text: "Trojčlenka je super nástroj, jak vypočítat neznámou, když známe tři údaje a víme, že jde o úměru. Zápis vypadá takto:\n\n$5$ kg ........... $200$ Kč\n$7$ kg ........... $x$ Kč\n\nNejdůležitější krok je určit šipky! \n* Pokud je to přímá úměra (víc kg = víc Kč), šipky jdou stejným směrem.\n* Pokud nepřímá (víc lidí = méně času), šipky jdou proti sobě.",
                image:
                  "[Image showing rule of three setup with arrows for direct proportion]",
              },
              {
                heading: "Křížové pravidlo (Přímá úměra)",
                text: "U přímé úměry (jako cena zboží) funguje jednoduchý trik zvaný 'na kříž'.\n1. Vynásob čísla na uhlopříčce, kde nemáš neznámou $x$ ($7 \\cdot 200$).\n2. Vyděl to číslem, které zbývá ($5$).\n\nV příkladu výše: $x = \\frac{7 \\cdot 200}{5} = \\frac{1400}{5} = 280$ Kč.",
                image: "placeholder-cross-multiplication",
              },
            ],
            tasks: [
              {
                id: "c3_l3_t1",
                question:
                  "Kdy píšeme šipky u trojčlenky opačným směrem (jednu nahoru, jednu dolů)?",
                options: ["Vždy", "U přímé úměry", "U nepřímé úměry", "Nikdy"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c3_l3_t2_input",
                type: "text-input",
                question:
                  "Vypočítej x: 3 ks stojí 30 Kč. Kolik stojí 5 ks? (Napiš jen číslo)",
                correctAnswer: "50",
                xp: 20,
              },
              {
                id: "c3_l3_t3_sequence",
                type: "sequence",
                question: "Seřaď kroky výpočtu trojčlenky:",
                options: [
                  "Napíšu si zadání pod sebe (kg pod kg, cena pod cenu).",
                  "Určím typ úměry a nakreslím šipky.",
                  "Sestavím rovnici nebo zlomek podle šipek.",
                  "Vypočítám neznámou x.",
                ],
                correctAnswer: [
                  "Napíšu si zadání pod sebe (kg pod kg, cena pod cenu).",
                  "Určím typ úměry a nakreslím šipky.",
                  "Sestavím rovnici nebo zlomek podle šipek.",
                  "Vypočítám neznámou x.",
                ],
                xp: 30,
              },
              {
                id: "c3_l3_t4",
                question:
                  "Trojčlenka pro nepřímou úměru: 4 lidé ... 10 hod. Jak dlouho to bude trvat 2 lidem?",
                options: [
                  "5 hod (polovina času)",
                  "20 hod (dvojnásobek času)",
                  "8 hod",
                  "40 hod",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "c3_l3_t5_input",
                type: "text-input",
                question:
                  "Auto žere 6 litrů na 100 km. Kolik litrů spálí na 300 km?",
                correctAnswer: "18",
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Procenta: Úvod",
          content: {
            sections: [
              {
                heading: "Jedna setina celku",
                text: "Slovo procento pochází z latinského 'per centum', což znamená 'ze sta'. Značka je $\\%$. \n\n$1\\,\\%$ je prostě jedna setina celku ($\\frac{1}{100}$ nebo $0,01$).\n* Celý dort je $100\\,\\%$.\n* Polovina dortu je $50\\,\\%$.\n* Čtvrtina dortu je $25\\,\\%$.\n\nProč je používáme? Protože se s nimi lépe porovnává. Říct 'sleva $20\\,\\%$' je pro lidi jasnější než říct 'sleva jedna pětina'.",
                image:
                  "[Image showing a pie chart representing percentages 100%, 50%, 25%, 1%]",
              },
              {
                heading: "Trik přes 1 %",
                text: "Nejjednodušší způsob, jak počítat procenta z hlavy, je přes jedno procento.\n\nJak vypočítat $1\\,\\%$? Prostě vyděl celek číslem 100 (posuň desetinnou čárku o dvě místa doleva).\n\nPříklad: Chci $7\\,\\%$ z čísla $200$.\n1. $1\\,\\%$ z $200$ je 2.\n2. Chci jich sedm, takže $7 \\cdot 2 = 14$.",
                image: "placeholder-calculate-one-percent",
              },
            ],
            tasks: [
              {
                id: "c3_l4_t1_input",
                type: "text-input",
                question: "Vypočítej 1% z čísla 500 (vyděl ho stem):",
                correctAnswer: "5",
                xp: 10,
              },
              {
                id: "c3_l4_t2",
                question: "Jak zapíšeš polovinu (1/2) pomocí procent?",
                options: [
                  "$10\\,\\%$",
                  "$20\\,\\%$",
                  "$50\\,\\%$",
                  "$100\\,\\%$",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c3_l4_t3_sequence",
                type: "sequence",
                question: "Seřaď hodnoty od nejmenší po největší:",
                options: [
                  "$1\\,\\%$",
                  "$10\\,\\%$",
                  "$0,5$ (což je 50%)",
                  "$100\\,\\%$",
                ],
                correctAnswer: [
                  "$1\\,\\%$",
                  "$10\\,\\%$",
                  "$0,5$ (což je 50%)",
                  "$100\\,\\%$",
                ],
                xp: 20,
              },
              {
                id: "c3_l4_t4_input",
                type: "text-input",
                question: "Vypočítej 20% z čísla 50. (Tip: 10% je 5...)",
                correctAnswer: "10",
                xp: 20,
              },
              {
                id: "c3_l4_t5",
                question: "Převeď zlomek $\\frac{1}{4}$ na procenta.",
                options: [
                  "$4\\,\\%$",
                  "$25\\,\\%$",
                  "$40\\,\\%$",
                  "$75\\,\\%$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Počítání s procenty",
          content: {
            sections: [
              {
                heading: "Tři herci v příběhu",
                text: "V každé úloze na procenta vystupují tři veličiny. Musíš je umět najít:\n1.  Základ ($z$): To je celek, odpovídá $100\\,\\%$. (Např. původní cena bez slevy).\n2.  Procentová část ($č$): To je kousek základu. (Např. výše slevy v korunách).\n3.  Počet procent ($p$): To je číslo se znakem $\\%$. (Např. sleva $20\\,\\%$).\n\nVztah mezi nimi je: $$ č = \\frac{p \\cdot z}{100} $$",
                image: "",
              },
              {
                heading: "Pozor na chytáky! (Změna základu)",
                text: "Tohle je klasická past, do které padají i dospělí:\nBoty stojí $1000$ Kč. Zdražíme je o $10\\,\\%$ (na $1100$ Kč). Pak je zlevníme o $10\\,\\%$. Budou stát zase $1000$ Kč? \n\nNE!\nProtože při slevě počítáme $10\\,\\%$ už z nové ceny ($1100$). $10\\,\\%$ z $1100$ je $110$ Kč. \nNová cena bude $1100 - 110 = 990$ Kč. Boty jsou levnější než na začátku! Základ se totiž v průběhu změnil.",
                image:
                  "[Image illustrating percentage price trap: 1000 + 10% -> 1100 - 10% -> 990]",
              },
            ],
            tasks: [
              {
                id: "c3_l5_t1",
                question: "Co je 'základ' v procentovém počtu?",
                options: [
                  "$1\\,\\%$",
                  "Hodnota odpovídající $100\\,\\%$ (celek)",
                  "Sleva",
                  "Výsledek",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c3_l5_t2_input",
                type: "text-input",
                question:
                  "Tričko stálo 200 Kč a zlevnili ho o 50 Kč. Kolik procent byla sleva? (50 z 200 je čtvrtina...)",
                correctAnswer: "25",
                xp: 25,
              },
              {
                id: "c3_l5_t3_sequence",
                type: "sequence",
                question:
                  "Seřaď postup výpočtu 'Pasti': 100 Kč + 10% a pak - 10%:",
                options: [
                  "Začínám na 100 Kč.",
                  "Přičtu 10% (10 Kč), mám 110 Kč.",
                  "Teď počítám 10% ze 110 Kč (to je 11 Kč).",
                  "Odečtu 11 Kč. Výsledek je 99 Kč.",
                ],
                correctAnswer: [
                  "Začínám na 100 Kč.",
                  "Přičtu 10% (10 Kč), mám 110 Kč.",
                  "Teď počítám 10% ze 110 Kč (to je 11 Kč).",
                  "Odečtu 11 Kč. Výsledek je 99 Kč.",
                ],
                xp: 30,
              },
              {
                id: "c3_l5_t4_input",
                type: "text-input",
                question:
                  "Kolik je 150% z čísla 10? (Je to 10 + půlka desítky...)",
                correctAnswer: "15",
                xp: 20,
              },
              {
                id: "c3_l5_t5",
                question:
                  "Mám 200 Kč, to je přesně 50% (polovina) ceny dárku. Kolik stojí celý dárek?",
                options: ["$100$ Kč", "$300$ Kč", "$400$ Kč", "$1000$ Kč"],
                correctAnswer: 2,
                xp: 25,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Mocniny a odmocniny",
      description:
        "Jak zapsat číslo, které má padesát nul? Jak vypočítat stranu čtverce, když známe jen jeho plochu? Vstoupíme do světa exponentů, kde se násobení mění na sčítání a čísla rostou raketovou rychlostí.",
      lessons: [
        {
          title: "Druhá mocnina: Čtverce a závorky",
          content: {
            sections: [
              {
                heading: "Obsah čtverce",
                text: "Proč říkáme 'na druhou'? Představ si čtverec o straně $a$. Jeho obsah vypočítáme jako $a \\cdot a$. Abychom to nemuseli psát dvakrát, matematici vymysleli zkratku: malé číslo vpravo nahoře. Píšeme $a^2$. Čteme to 'a na druhou'. \n\n$$ 5^2 = 5 \\cdot 5 = 25 $$\n\nMocnina nám říká: Vezmi toto číslo a vynásob ho samo sebou. Pozor! $5^2$ není $5 \\cdot 2$ (to by bylo 10). Je to $5 \\cdot 5$.",
                image:
                  "[Image showing a square with side length 5 and area 25 composed of grid blocks]",
              },
              {
                heading: "Past se závorkou (Minusy)",
                text: "Tady chybuje 90 % žáků! Závorka je naprosto klíčová pro znaménko výsledku.\n\n* $(-3)^2$: Znamená 'minus tři' krát 'minus tři'. Minus krát minus dává plus. Výsledek je 9.\n* $-3^2$: Znamená 'minus opisuji a trojku umocním'. Tedy $- (3 \\cdot 3)$. Výsledek je -9.\n\nZávorka rozhoduje o tom, jestli mocnina 'požere' i to znaménko minus.",
                image: "placeholder-negative-square-trap",
              },
            ],
            tasks: [
              {
                id: "c4_l1_t1",
                question: "Vypočítej $7^2$.",
                options: ["$14$", "$49$", "$9$", "$72$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c4_l1_t2_sequence",
                type: "sequence",
                question: "Seřaď čísla od nejmenšího po největší:",
                options: [
                  "$-4^2$ (výsledek -16)",
                  "$0^2$ (výsledek 0)",
                  "$(-2)^2$ (výsledek 4)",
                  "$3^2$ (výsledek 9)",
                ],
                correctAnswer: [
                  "$-4^2$ (výsledek -16)",
                  "$0^2$ (výsledek 0)",
                  "$(-2)^2$ (výsledek 4)",
                  "$3^2$ (výsledek 9)",
                ],
                xp: 25,
              },
              {
                id: "c4_l1_t3",
                question: "Vypočítej $-5^2$ (pozor, bez závorky!).",
                options: ["$25$", "$-25$", "$10$", "$-10$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c4_l1_t4_input",
                type: "text-input",
                question: "Vypočítej $12^2$ (dvanáct na druhou). Napiš číslo:",
                correctAnswer: "144",
                xp: 15,
              },
              {
                id: "c4_l1_t5",
                question: "Jaký je obsah čtverce se stranou $6$ cm?",
                options: ["$12$ cm²", "$36$ cm²", "$24$ cm²", "$3$ cm²"],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Třetí mocnina a objem",
          content: {
            sections: [
              {
                heading: "Svět ve 3D",
                text: "Zatímco druhá mocnina je plocha (2D), třetí mocnina je prostor (3D). Představ si krychli o hraně $a$. Její objem je $a \\cdot a \\cdot a$. Zkráceně $a^3$. Čteme 'a na třetí'. \n\n$$ 2^3 = 2 \\cdot 2 \\cdot 2 = 8 $$\n\nPozor, opět to není $2 \\cdot 3$ (což je 6). Mocnina roste mnohem rychleji než násobení!",
                image: "[Image comparing 2D square area vs 3D cube volume]",
              },
              {
                heading: "Lichý exponent znaménko nezmění",
                text: "U druhé mocniny se minus ztratil ($(-2)^2 = 4$), protože byla sudá. U třetí mocniny je to jinak!\n\n$$ (-2)^3 = (-2) \\cdot (-2) \\cdot (-2) $$\n\nPrvní dva minusy dají plus, ale ten třetí minus to zase 'zkazí' a vrátí výsledek do minusu. Výsledek je -8.\n\nPravidlo: Sudá mocnina 'požírá' minus, lichá mocnina ho 'vyplivne' ven.",
                image: "placeholder-odd-exponent-sign",
              },
            ],
            tasks: [
              {
                id: "c4_l2_t1",
                question: "Vypočítej $1^3$ (jedna na třetí).",
                options: ["$1$", "$3$", "$0$", "$111$"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c4_l2_t2_input",
                type: "text-input",
                question: "Vypočítej $10^3$ (deset na třetí). Napiš výsledek:",
                correctAnswer: "1000",
                xp: 15,
              },
              {
                id: "c4_l2_t3",
                question: "Jaké znaménko bude mít výsledek $(-5)^3$?",
                options: ["Kladné (+)", "Záporné (-)", "Žádné", "Nelze určit"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c4_l2_t4_sequence",
                type: "sequence",
                question: "Seřaď postup výpočtu $(-2)^3$:",
                options: [
                  "Rozepíšu na $(-2) \\cdot (-2) \\cdot (-2)$.",
                  "První dvě čísla dají $4$.",
                  "Vynásobím $4 \\cdot (-2)$.",
                  "Výsledek je $-8$.",
                ],
                correctAnswer: [
                  "Rozepíšu na $(-2) \\cdot (-2) \\cdot (-2)$.",
                  "První dvě čísla dají $4$.",
                  "Vynásobím $4 \\cdot (-2)$.",
                  "Výsledek je $-8$.",
                ],
                xp: 25,
              },
              {
                id: "c4_l2_t5",
                question: "Objem krychle o hraně 4 cm je:",
                options: ["$16$ cm³", "$64$ cm³", "$12$ cm³", "$44$ cm³"],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Pravidla pro počítání s mocninami",
          content: {
            sections: [
              {
                heading: "Lenost je matkou pokroku",
                text: "Představ si, že máš vypočítat $2^3 \\cdot 2^4$. Můžeš to rozepsat:\n$$(2 \\cdot 2 \\cdot 2) \\cdot (2 \\cdot 2 \\cdot 2 \\cdot 2)$$\nCelkem vidíš sedm dvojek. Výsledek je $2^7$. \n\nMatematici vymysleli pravidlo: Když násobíme mocniny se stejným základem, exponenty se sčítají ($3+4=7$).\n$$ a^m \\cdot a^n = a^{m+n} $$",
                image:
                  "[Image showing algebraic expansion of exponents multiplication a^m * a^n]",
              },
              {
                heading: "Dělení a mocnina mocniny",
                text: "Podobně to funguje u dělení, jen exponenty odčítáme.\n$$ \\frac{2^5}{2^3} = 2^{5-3} = 2^2 $$\n\nA co když máme mocninu na mocninu? $(2^3)^2$. To znamená $(2^3) \\cdot (2^3) = 2^{3+3} = 2^6$. Zkrátka exponenty násobíme.\n$$ (a^m)^n = a^{m \\cdot n} $$",
                image: "placeholder-exponent-rules",
              },
            ],
            tasks: [
              {
                id: "c4_l3_t1",
                question: "Zjednoduš: $x^2 \\cdot x^3$",
                options: [
                  "$x^6$ (chyba - násobení)",
                  "$x^5$ (správně - sčítání)",
                  "$2x^5$",
                  "$x^1$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c4_l3_t2",
                question: "Zjednoduš: $10^6 : 10^2$",
                options: [
                  "$10^3$",
                  "$10^4$ (odečítáme $6-2$)",
                  "$10^8$",
                  "$10^{12}$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c4_l3_t3_sequence",
                type: "sequence",
                question: "Seřaď kroky pro zjednodušení $(x^2)^3 \\cdot x^4$:",
                options: [
                  "Odstraním závorku: $(x^2)^3 = x^6$.",
                  "Mám příklad $x^6 \\cdot x^4$.",
                  "Sečtu exponenty $6 + 4$.",
                  "Výsledek je $x^{10}$.",
                ],
                correctAnswer: [
                  "Odstraním závorku: $(x^2)^3 = x^6$.",
                  "Mám příklad $x^6 \\cdot x^4$.",
                  "Sečtu exponenty $6 + 4$.",
                  "Výsledek je $x^{10}$.",
                ],
                xp: 30,
              },
              {
                id: "c4_l3_t4_input",
                type: "text-input",
                question: "Vypočítej hodnotu $5^0$ (cokoliv na nultou je...):",
                correctAnswer: "1",
                xp: 25,
              },
              {
                id: "c4_l3_t5",
                question: "Platí pravidlo $a^2 + a^3 = a^5$? (Sčítání mocnin)",
                options: [
                  "Ano",
                  "Ne, u sčítání základů to neplatí!",
                  "Jen pro sudá čísla",
                  "Nevím",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Mocniny deseti a vědecký zápis",
          content: {
            sections: [
              {
                heading: "Počítání nul",
                text: "Mocniny desítky jsou úžasné. Exponent nám přesně říká, kolik nul číslo má.\n* $10^1 = 10$ (jedna nula)\n* $10^3 = 1000$ (tři nuly)\n* $10^6 = 1\\,000\\,000$ (milion, šest nul)\n\nJe to nejrychlejší způsob, jak napsat obrovská čísla, třeba počet atomů ve vesmíru, aniž bychom popsali celý papír nulami.",
                image:
                  "[Image comparing standard notation 1000000 and scientific notation 10^6]",
              },
              {
                heading: "Vědecký zápis ($a \\cdot 10^n$)",
                text: "Vědci jsou líní psát nuly. Místo $300\\,000\\,000$ (rychlost světla) napíší $3 \\cdot 10^8$. \n\nZápis má vždy tvar: jedno číslo od 1 do 10 krát mocnina desítky.\nNapř. $5\\,200$. Posuneme desetinnou čárku o 3 místa doleva, abychom dostali $5,2$. Proto napíšeme $5,2 \\cdot 10^3$.",
                image: "placeholder-scientific-notation-shift",
              },
            ],
            tasks: [
              {
                id: "c4_l4_t1",
                question: "Jak zapíšeš číslo milion mocninou?",
                options: ["$10^5$", "$10^6$ (6 nul)", "$10^9$", "$100^2$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c4_l4_t2_input",
                type: "text-input",
                question: "Kolik nul má číslo $10^9$ (miliarda)? Napiš číslo:",
                correctAnswer: "9",
                xp: 10,
              },
              {
                id: "c4_l4_t3",
                question: "Převeď $4\\,500$ na vědecký zápis.",
                options: [
                  "$45 \\cdot 10^2$ (špatně, 45 je moc velké)",
                  "$4,5 \\cdot 10^3$ (správně, posun o 3 místa)",
                  "$0,45 \\cdot 10^4$",
                  "$4,5 \\cdot 10^2$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c4_l4_t4_sequence",
                type: "sequence",
                question: "Seřaď čísla od nejmenšího:",
                options: [
                  "$10^2$ (sto)",
                  "$5 \\cdot 10^2$ (pět set)",
                  "$10^3$ (tisíc)",
                  "$2 \\cdot 10^3$ (dva tisíce)",
                ],
                correctAnswer: [
                  "$10^2$ (sto)",
                  "$5 \\cdot 10^2$ (pět set)",
                  "$10^3$ (tisíc)",
                  "$2 \\cdot 10^3$ (dva tisíce)",
                ],
                xp: 20,
              },
              {
                id: "c4_l4_t5",
                question:
                  "Které číslo je větší: $2 \\cdot 10^3$ nebo $5 \\cdot 10^2$?",
                options: [
                  "$2 \\cdot 10^3$ (je to 2000)",
                  "$5 \\cdot 10^2$ (je to 500)",
                  "Jsou stejná",
                  "Nelze určit",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Druhá odmocnina: Detektivní práce",
          content: {
            sections: [
              {
                heading: "Hledáme kořen (Odmocnina)",
                text: "Odmocňování je opakem mocnění. Představ si, že znáš obsah čtverce ($25$ m²) a hledáš délku jeho strany. Ptáš se: 'Které číslo musím vynásobit samo se sebou, abych dostal 25?'\n\nOdpověď je $5$. Zapíšeme to pomocí znaku odmocniny: \n$$ \\sqrt{25} = 5 $$",
                image:
                  "[Image illustrating square root as finding the side of a square]",
              },
              {
                heading: "Zákaz vstupu pro záporná čísla",
                text: "Existuje $\\sqrt{-9}$? \nHledáme číslo, které když vynásobíme samo sebou, dá $-9$. \n* $3 \\cdot 3 = 9$ (špatně)\n* $(-3) \\cdot (-3) = 9$ (taky špatně!)\n\nV reálných číslech nelze odmocnit záporné číslo. Pod odmocninou musí být vždy nezáporné číslo.",
                image: "placeholder-no-negative-roots",
              },
              {
                heading: "Odmocnina součinu a podílu",
                text: "Stejně jako u mocnin, i tady platí pravidla pro 'roztržení' příkladu.\n$$ \\sqrt{4 \\cdot 9} = \\sqrt{4} \\cdot \\sqrt{9} = 2 \\cdot 3 = 6 $$\n\nPozor! Toto neplatí pro sčítání! $\\sqrt{16 + 9}$ není $4 + 3$. $\\sqrt{25}$ je $5$, zatímco $4+3$ je $7$.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "c4_l5_t1_input",
                type: "text-input",
                question: "Vypočítej odmocninu ze 100. Napiš číslo:",
                correctAnswer: "10",
                xp: 10,
              },
              {
                id: "c4_l5_t2",
                question: "Vypočítej $\\sqrt{36}$.",
                options: ["$6$", "$18$", "$4$", "$72$"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c4_l5_t3",
                question: "Existuje $\\sqrt{-16}$?",
                options: [
                  "Ano, je to $-4$",
                  "Ano, je to $4$",
                  "Ne, v reálných číslech neexistuje",
                  "Ano, je to $0$",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c4_l5_t4_sequence",
                type: "sequence",
                question: "Seřaď postup výpočtu $\\sqrt{9 + 16}$:",
                options: [
                  "Nejdřív musím sečíst čísla pod odmocninou ($9+16$).",
                  "Dostanu $\\sqrt{25}$.",
                  "Odmocním 25.",
                  "Výsledek je 5.",
                ],
                correctAnswer: [
                  "Nejdřív musím sečíst čísla pod odmocninou ($9+16$).",
                  "Dostanu $\\sqrt{25}$.",
                  "Odmocním 25.",
                  "Výsledek je 5.",
                ],
                xp: 25,
              },
              {
                id: "c4_l5_t5",
                question: "Odhadni $\\sqrt{50}$. Mezi kterými čísly leží?",
                options: [
                  "Mezi 4 a 5",
                  "Mezi 5 a 6",
                  "Mezi 7 a 8 (protože $7^2=49$ a $8^2=64$)",
                  "Mezi 20 a 30",
                ],
                correctAnswer: 2,
                xp: 25,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Výrazy a mnohočleny",
      description:
        "Vítejte v Algebře! Místo konkrétních čísel začneme používat písmena. Naučíme se psát matematické věty, které platí pro všechna čísla na světě, a ovládneme mocné vzorce.",
      lessons: [
        {
          title: "Proměnná a výraz",
          content: {
            sections: [
              {
                heading: "Proč písmena v matematice?",
                text: "Představ si, že programuješ hru. Nevíš, kolik bodů hráč získá, ale víš, že za každou minci dostane 10 bodů. Počet mincí se mění – je to proměnná. V matematice ji označujeme písmenem, nejčastěji $x, y, a$ nebo $b$.\n\nVýraz $10 \\cdot x$ (nebo prostě $10x$) nám říká: 'Vezmi počet mincí (ať je jakýkoliv) a vynásob ho deseti.'",
                image:
                  "[Image illustrating video game coins and score calculation with variable x]",
              },
              {
                heading: "Dosazování: Otevíráme krabici",
                text: "Výraz sám o sobě nemá jednu konkrétní hodnotu. Je to jen předpis. Hodnotu získá až ve chvíli, kdy za písmeno dosadíme číslo.\n\nMějme výraz $2x + 3$.\n* Když $x = 1$, hodnota je $2 \\cdot 1 + 3 = 5$.\n* Když $x = 5$, hodnota je $2 \\cdot 5 + 3 = 13$.\n\nTomu říkáme 'určit hodnotu výrazu'. Je to jako otevřít krabici označenou $x$ a podívat se, co je uvnitř.",
                image: "placeholder-evaluating-expressions",
              },
            ],
            tasks: [
              {
                id: "c5_l1_t1",
                question: "Co znamená zápis $2x$?",
                options: [
                  "$2 + x$",
                  "$2 \\cdot x$ (dvakrát x)",
                  "Dvojciferné číslo začínající dvojkou",
                  "$x \\cdot x$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c5_l1_t2_input",
                type: "text-input",
                question:
                  "Urči hodnotu výrazu $x - 5$ pro $x = 12$. Napiš výsledek:",
                correctAnswer: "7",
                xp: 15,
              },
              {
                id: "c5_l1_t3",
                question: "Urči hodnotu výrazu $a^2$ pro $a = -3$.",
                options: [
                  "$-9$",
                  "$9$ (protože minus krát minus je plus)",
                  "$6$",
                  "$-6$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c5_l1_t4_sequence",
                type: "sequence",
                question: "Seřaď hodnoty výrazu $2x$ pro $x=1, x=2, x=3$:",
                options: ["2", "4", "6"],
                correctAnswer: ["2", "4", "6"],
                xp: 15,
              },
              {
                id: "c5_l1_t5",
                question: "Který výraz má pro $x=2$ hodnotu $10$?",
                options: [
                  "$2x + 6$ ($4 + 6 = 10$)",
                  "$5x - 1$ ($10 - 1 = 9$)",
                  "$x^2 + 5$ ($4 + 5 = 9$)",
                  "$3x$ ($6$)",
                ],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Mnohočleny: Sčítání a odčítání",
          content: {
            sections: [
              {
                heading: "Hrušky s hruškami",
                text: "Při sčítání výrazů platí zlaté pravidlo: Sčítat můžeme jen členy se stejnou proměnnou ve stejné mocnině.\n\nPředstav si $x$ jako jablka a $y$ jako hrušky.\n$$ 3x + 2y + 5x - y $$\n* Mám 3 jablka, přidám 5 jablek $\\rightarrow$ mám $8x$.\n* Mám 2 hrušky, sním 1 hrušku $\\rightarrow$ mám $1y$.\n\nVýsledek: $8x + y$. Nemůžeme sečíst $x$ a $y$ dohromady!",
                image:
                  "[Image illustrating grouping like terms using fruits x-apples and y-pears]",
              },
              {
                heading: "Pozor na mocniny!",
                text: "Stejně tak nemůžeme sčítat $x$ a $x^2$. Jsou to jiné druhy ovoce! \n* $x$ je délka (čára).\n* $x^2$ je čtverec (plocha).\n\n$$ 2x^2 + 3x + 4x^2 - x = 6x^2 + 2x $$\nSečetli jsme čtverce se čtverci a čáry s čárami.",
                image: "placeholder-x-vs-xsquared-visual",
              },
            ],
            tasks: [
              {
                id: "c5_l2_t1",
                question: "Zjednoduš: $3a + 2a$",
                options: ["$5a$", "$5a^2$", "$6a$", "$a^5$"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c5_l2_t2_input",
                type: "text-input",
                question:
                  "Kolik je $x$ ve výrazu $5x + 3x$? (Napiš jen číslo před x):",
                correctAnswer: "8",
                xp: 10,
              },
              {
                id: "c5_l2_t3",
                question: "Lze sečíst $x^2 + x$?",
                options: [
                  "Ano, je to $2x^3$",
                  "Ano, je to $x^3$",
                  "Ne, nelze zjednodušit (jsou to jiné mocniny)",
                  "Ano, je to $2x$",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c5_l2_t4_sequence",
                type: "sequence",
                question: "Seřaď postup odstranění závorky $-(3a - 2b)$:",
                options: [
                  "Minus před závorkou mění znaménka uvnitř.",
                  "$3a$ se změní na $-3a$.",
                  "$-2b$ se změní na $+2b$.",
                  "Výsledek je $-3a + 2b$.",
                ],
                correctAnswer: [
                  "Minus před závorkou mění znaménka uvnitř.",
                  "$3a$ se změní na $-3a$.",
                  "$-2b$ se změní na $+2b$.",
                  "Výsledek je $-3a + 2b$.",
                ],
                xp: 25,
              },
              {
                id: "c5_l2_t5",
                question: "Sečti: $(2x + 1) + (3x - 5)$",
                options: [
                  "$5x + 6$",
                  "$5x - 4$ ($2x+3x=5x$, $1-5=-4$)",
                  "$6x - 5$",
                  "$5x + 4$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Násobení mnohočlenů",
          content: {
            sections: [
              {
                heading: "Jednočlen krát závorka",
                text: "Když násobíme závorku číslem nebo jednočlenem, musíme vynásobit každý člen v závorce. Říkáme tomu roznásobování.\n\n$$ 3 \\cdot (x + 4) = 3 \\cdot x + 3 \\cdot 4 = 3x + 12 $$\n\nPozor na znaménka! $-2(x - 3) = -2x + 6$ (protože minus krát minus dává plus).",
                image:
                  "[Image illustrating distributive property a(b+c) = ab + ac with rectangle areas]",
              },
              {
                heading: "Každý s každým (Závorka krát závorka)",
                text: "Když se potkají dvě závorky, musí se každý člen z první závorky 'pozdravit' s každým členem z druhé závorky.\n\n$$ (x + 2)(y + 3) = xy + 3x + 2y + 6 $$\n\nVzniknou nám 4 členy. Pokud to jde (mají stejné proměnné), nakonec je ještě sečteme a zjednodušíme.",
                image: "placeholder-multiplying-binomials-foil",
              },
            ],
            tasks: [
              {
                id: "c5_l3_t1",
                question: "Vynásob: $2(3x + 1)$",
                options: ["$6x + 1$", "$6x + 2$", "$5x + 3$", "$3x + 2$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c5_l3_t2_input",
                type: "text-input",
                question:
                  "Vynásob $x(x + 5)$. Napiš první člen výsledku ($x$ krát $x$):",
                correctAnswer: "x^2",
                xp: 15,
              },
              {
                id: "c5_l3_t3",
                question: "Vynásob: $(x+1)(x+2)$",
                options: [
                  "$x^2 + 2$",
                  "$x^2 + 3x + 2$ ($x^2 + 2x + 1x + 2$)",
                  "$x^2 + 2x + 1$",
                  "$2x + 3$",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "c5_l3_t4",
                question: "Pozor na minus: $-3(2x - 4)$",
                options: [
                  "$-6x - 12$",
                  "$-6x + 12$ (minus krát minus je plus)",
                  "$6x - 12$",
                  "$-6x - 4$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c5_l3_t5_sequence",
                type: "sequence",
                question: "Seřaď kroky násobení $(a+b)(c+d)$:",
                options: [
                  "Vynásobím $a \\cdot c$.",
                  "Vynásobím $a \\cdot d$.",
                  "Vynásobím $b \\cdot c$.",
                  "Vynásobím $b \\cdot d$.",
                ],
                correctAnswer: [
                  "Vynásobím $a \\cdot c$.",
                  "Vynásobím $a \\cdot d$.",
                  "Vynásobím $b \\cdot c$.",
                  "Vynásobím $b \\cdot d$.",
                ],
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Algebraické vzorce",
          content: {
            sections: [
              {
                heading: "Matematické zkratky",
                text: "Některá násobení se v matematice opakují tak často, že se vyplatí naučit se výsledek nazpaměť. Říkáme jim vzorce.\n\n1.  $(a + b)^2 = a^2 + 2ab + b^2$\n2.  $(a - b)^2 = a^2 - 2ab + b^2$\n\nNejčastější chyba? Zapomenout na ten prostřední člen ($2ab$)! $(a+b)^2$ opravdu není jen $a^2 + b^2$.",
                image:
                  "[Image showing geometric proof of (a+b)^2 as a large square composed of two squares and two rectangles]",
              },
              {
                heading: "Rozdíl čtverců",
                text: "Třetí vzorec je nejužitečnější. Co se stane, když násobíme součet a rozdíl stejných čísel?\n\n$$ (a + b)(a - b) = a^2 - b^2 $$\n\nProstřední členy se navzájem odečtou a zmizí. Tento vzorec budeme hodně potřebovat při krácení zlomků.",
                image: "placeholder-difference-of-squares",
              },
            ],
            tasks: [
              {
                id: "c5_l4_t1",
                question: "Doplň vzorec: $(a + b)^2 = ...$",
                options: [
                  "$a^2 + b^2$",
                  "$a^2 + ab + b^2$",
                  "$a^2 + 2ab + b^2$",
                  "$2a + 2b$",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c5_l4_t2",
                question: "Vypočítej podle vzorce: $(x - 3)^2$",
                options: [
                  "$x^2 - 9$",
                  "$x^2 + 9$",
                  "$x^2 - 3x + 9$",
                  "$x^2 - 6x + 9$ (prostřední člen je $2 \\cdot x \\cdot 3$)",
                ],
                correctAnswer: 3,
                xp: 20,
              },
              {
                id: "c5_l4_t3",
                question: "Vypočítej: $(x + 5)(x - 5)$",
                options: [
                  "$x^2 - 25$",
                  "$x^2 + 25$",
                  "$x^2 - 10x + 25$",
                  "$x^2 - 5$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "c5_l4_t4_input",
                type: "text-input",
                question: "Umocni $(2x)^2$. Napiš výsledek:",
                correctAnswer: "4x^2",
                xp: 20,
              },
              {
                id: "c5_l4_t5",
                question: "Jaký je prostřední člen u $(3 + x)^2$?",
                options: [
                  "$3x$",
                  "$6x$ ($2 \\cdot 3 \\cdot x$)",
                  "$9x$",
                  "$x^2$",
                ],
                correctAnswer: 1,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Rozklad na součin (Vytýkání)",
          content: {
            sections: [
              {
                heading: "Zpátečka (Vytýkání)",
                text: "Doteď jsme závorky odstraňovali (násobili). Teď se naučíme je vyrábět. Tomu se říká rozklad na součin. \n\nPrvní metodou je vytýkání. Hledáme, co mají všechny členy společného.\n$$ 4x + 8 $$\nOba členy jdou vydělit čtyřkou. Čtyřku napíšeme před závorku a zbytek dáme dovnitř.\n$$ 4(x + 2) $$",
                image:
                  "[Image illustrating factoring out common terms like pulling common items out of baskets]",
              },
              {
                heading: "Použití vzorců pozpátku",
                text: "Někdy vytýkání nestačí a musíme poznat skrytý vzorec. \nVidíš $x^2 - 9$? To vypadá jako $a^2 - b^2$! Můžeme to tedy rozložit na dvě závorky:\n\n$$ x^2 - 9 = (x + 3)(x - 3) $$\n\nRozklad je klíčový pro řešení složitějších rovnic a krácení zlomků.",
                image: "placeholder-reverse-formula",
              },
            ],
            tasks: [
              {
                id: "c5_l5_t1",
                question: "Vytkni největšího společného dělitele: $5x + 15$",
                options: [
                  "$5(x + 3)$",
                  "$5(x + 15)$",
                  "$x(5 + 15)$",
                  "$15(x + 1)$",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c5_l5_t2_sequence",
                type: "sequence",
                question: "Seřaď kroky rozkladu $x^2 - 16$:",
                options: [
                  "Poznám vzorec $a^2 - b^2$.",
                  "$a$ je $x$, $b$ je $4$.",
                  "Napíšu dvě závorky $(x-4)(x+4)$.",
                ],
                correctAnswer: [
                  "Poznám vzorec $a^2 - b^2$.",
                  "$a$ je $x$, $b$ je $4$.",
                  "Napíšu dvě závorky $(x-4)(x+4)$.",
                ],
                xp: 20,
              },
              {
                id: "c5_l5_t3",
                question: "Vytkni $x$: $x^2 + 3x$",
                options: [
                  "$x(x + 3)$",
                  "$x(1 + 3)$",
                  "$x(x + 3x)$",
                  "$3(x^2 + 1)$",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c5_l5_t4",
                question: "Rozlož pomocí vzorce: $a^2 + 2a + 1$",
                options: [
                  "$(a + 1)(a - 1)$",
                  "$(a + 1)^2$ (vzorec $(a+b)^2$)",
                  "$a(a + 2)$",
                  "Nejde rozložit",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "c5_l5_t5_input",
                type: "text-input",
                question:
                  "Vytkni číslo 3 z výrazu $3x + 9$. Napiš, co bude v závorce:",
                correctAnswer: "x + 3",
                xp: 20,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Lineární rovnice a nerovnice",
      description:
        "Staneme se matematickými detektivy. Naučíme se odhalit hodnotu neznámé $x$, ať je schovaná kdekoliv. Budeme udržovat rovnováhu na miskách vah a přeložíme složité slovní příběhy do jasné řeči čísel.",
      lessons: [
        {
          title: "Princip vah a ekvivalentní úpravy",
          content: {
            sections: [
              {
                heading: "Rovnice je váha",
                text: "Představ si klasické miskové váhy. Uprostřed je znaménko $=$. To znamená, že levá miska váží přesně stejně jako pravá. Na jedné straně je pytlík s neznámým počtem mincí ($x$) a závaží, na druhé straně je jiné závaží.\n\nNaším úkolem je zjistit, co je v pytlíku. Pravidlo je jediné: Cokoliv uděláš s levou miskou, musíš udělat i s pravou. Jinak se váha převáží a rovnice přestane platit.",
                image:
                  "[Image illustrating an equation as a balance scale with weights and variable x]",
              },
              {
                heading: "Osamostatnění neznámé",
                text: "Chceme, aby $x$ zůstalo na jedné straně úplně samo. Tomu říkáme 'osamostatnění neznámé'. Používáme k tomu ekvivalentní úpravy (úpravy, které nemění pravdivost rovnice).\n\n1.  Přičítání/Odčítání: Mám $x + 5 = 12$. Abych měl jen $x$, musím odebrat 5. Ale musím to odebrat z obou stran! \n$$ x = 12 - 5 \\Rightarrow x = 7 $$",
                image: "placeholder-equation-balance-steps",
              },
            ],
            tasks: [
              {
                id: "c6_l1_t1",
                question:
                  "Co se stane, když k levé straně rovnice přičteš 5 a k pravé nic?",
                options: [
                  "Nic, rovnice platí dál",
                  "Rovnice přestane platit (poruší se rovnováha)",
                  "Vyjde $x=5$",
                  "Změní se znaménko",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c6_l1_t2",
                question:
                  "Jakou úpravu provedeš pro vyřešení $x - 8 = 20$? (Musíš zrušit minus 8)",
                options: [
                  "Odečtu 8 od obou stran",
                  "Přičtu 8 k oběma stranám",
                  "Vydělím dvěma",
                  "Vynásobím osmi",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c6_l1_t3_input",
                type: "text-input",
                question: "Vyřeš rovnici: $10 + x = 25$. Napiš hodnotu x:",
                correctAnswer: "15",
                xp: 15,
              },
              {
                id: "c6_l1_t4",
                question: "Proč děláme zkoušku?",
                options: [
                  "Abychom potěšili učitele",
                  "Abychom ověřili, že se levá strana rovná pravé po dosazení výsledku",
                  "Zkouška se dělat nemusí",
                  "Abychom zjistili zadání",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c6_l1_t5_sequence",
                type: "sequence",
                question: "Seřaď kroky řešení rovnice $x + 3 = 10$:",
                options: [
                  "Mám rovnici $x + 3 = 10$.",
                  "Rozhodnu se odečíst 3 od obou stran.",
                  "Levá strana: $x + 3 - 3 = x$. Pravá strana: $10 - 3 = 7$.",
                  "Výsledek je $x = 7$.",
                ],
                correctAnswer: [
                  "Mám rovnici $x + 3 = 10$.",
                  "Rozhodnu se odečíst 3 od obou stran.",
                  "Levá strana: $x + 3 - 3 = x$. Pravá strana: $10 - 3 = 7$.",
                  "Výsledek je $x = 7$.",
                ],
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Násobení a dělení v rovnici",
          content: {
            sections: [
              {
                heading: "Když je x v partě (Násobení)",
                text: "Často nemáme jen jedno $x$, ale třeba $3x = 21$. To znamená 'tři krabice váží 21 kg'. Jak zjistím váhu jedné? Musím celou rovnici vydělit třemi.\n$$ \\frac{3x}{3} = \\frac{21}{3} \\Rightarrow x = 7 $$\n\nOpačný případ: $\\frac{x}{4} = 5$. 'Čtvrtina krabice váží 5 kg'. Jak zjistím váhu celé? Vynásobím celou rovnici čtyřmi.\n$$ x = 5 \\cdot 4 = 20 $$",
                image:
                  "[Image illustrating division of an equation by a number using groups of items]",
              },
              {
                heading: "Změna znaménka (Minus před x)",
                text: "Co když nám vyjde $-x = 5$? My nechceme 'minus x', my chceme 'plus x'. \n\nCelou rovnici vynásobíme číslem -1. Tím se otočí znaménka na obou stranách.\n$$ -x \\cdot (-1) = 5 \\cdot (-1) \\Rightarrow x = -5 $$",
                image: "placeholder-equation-sign-flip",
              },
            ],
            tasks: [
              {
                id: "c6_l2_t1",
                question:
                  "Jakou úpravu uděláš v rovnici $4x = 20$? (Mezi 4 a x je krát)",
                options: ["Odečtu 4", "Vydělím 4", "Vynásobím 4", "Vydělím 20"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c6_l2_t2_input",
                type: "text-input",
                question:
                  "Vyřeš: $\\frac{x}{2} = 6$. (Neznámé číslo děleno dvěma je 6. Kolik je to číslo?)",
                correctAnswer: "12",
                xp: 20,
              },
              {
                id: "c6_l2_t3_input",
                type: "text-input",
                question: "Vyřeš: $-2x = 10$. (Pozor na znaménko)",
                correctAnswer: "-5",
                xp: 20,
              },
              {
                id: "c6_l2_t4",
                question: "Pokud $-x = -7$, kolik je $x$?",
                options: ["$7$", "$-7$", "$0$", "$1/7$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c6_l2_t5_sequence",
                type: "sequence",
                question: "Seřaď kroky řešení $3x + 2 = 17$:",
                options: [
                  "Nejdřív odečtu 2 (zbyde $3x = 15$).",
                  "Pak vydělím 3.",
                  "Výsledek je $x = 5$.",
                ],
                correctAnswer: [
                  "Nejdřív odečtu 2 (zbyde $3x = 15$).",
                  "Pak vydělím 3.",
                  "Výsledek je $x = 5$.",
                ],
                xp: 30,
              },
            ],
          },
        },
        {
          title: "Rovnice se zlomky a závorkami",
          content: {
            sections: [
              {
                heading: "Úklid před počítáním",
                text: "Složitá rovnice je jako neuklizený pokoj. Než začneš hledat $x$, musíš uklidit.\n\n1.  Odstraň závorky: Roznásob je. $2(x+3)$ se změní na $2x+6$.\n2.  Odstraň zlomky: To je nejdůležitější trik! Celou rovnici (každý člen!) vynásob společným jmenovatelem. Zlomky zmizí a zbyde ti krásná rovnice s celými čísly.",
                image:
                  "[Image showing step-by-step removal of fractions in an equation by multiplying by LCD]",
              },
              {
                heading: "Postup řešení (Třídění)",
                text: "Když zmizí závorky a zlomky, nastává fáze třídění:\n3.  Dej všechna $x$ na jednu stranu (třeba doleva) a všechna čísla na druhou (doprava). \n    * Při přehazování přes $=$ měníme znaménko (plus na minus a naopak).\n4.  Sečti $x$ a čísla.\n5.  Vyděl rovnici číslem u $x$.",
                image: "placeholder-equation-sorting-terms",
              },
            ],
            tasks: [
              {
                id: "c6_l3_t1",
                question:
                  "Čím vynásobíš rovnici $\\frac{x}{2} + \\frac{x}{3} = 5$, aby zmizely zlomky? (Hledáš společný násobek 2 a 3)",
                options: ["Dvojkou", "Trojkou", "Pětkou", "Šestkou"],
                correctAnswer: 3,
                xp: 20,
              },
              {
                id: "c6_l3_t2_input",
                type: "text-input",
                question:
                  "Vyřeš: $2(x - 1) = 8$. (Roznásob závorku: $2x - 2 = 8$...)",
                correctAnswer: "5",
                xp: 20,
              },
              {
                id: "c6_l3_t3",
                question:
                  "Co uděláš s členem $+3x$, když ho chceš převést zleva doprava?",
                options: [
                  "Nic, zůstane $+3x$",
                  "Změním ho na $-3x$ (změna znaménka)",
                  "Vydělím ho třemi",
                  "Smažu ho",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c6_l3_t4_sequence",
                type: "sequence",
                question: "Seřaď kroky řešení $5x = 2x + 9$:",
                options: [
                  "Převedu $2x$ doleva (změním na $-2x$).",
                  "Získám $5x - 2x = 9$, tedy $3x = 9$.",
                  "Vydělím 3.",
                  "Výsledek $x = 3$.",
                ],
                correctAnswer: [
                  "Převedu $2x$ doleva (změním na $-2x$).",
                  "Získám $5x - 2x = 9$, tedy $3x = 9$.",
                  "Vydělím 3.",
                  "Výsledek $x = 3$.",
                ],
                xp: 30,
              },
              {
                id: "c6_l3_t5",
                question: "Je $x=1$ řešením rovnice $x + 1 = 2x$?",
                options: ["Ano (protože $1+1 = 2$)", "Ne", "Nelze určit"],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Slovní úlohy: Pohyb a společná práce",
          content: {
            sections: [
              {
                heading: "Z češtiny do matematiky",
                text: "Nejtěžší na slovní úloze je sestavit rovnici. Musíme příběh přeložit do jazyka algebry.\n* 'Číslo $x$ zvětšené o 5' $\\rightarrow x + 5$\n* 'Trojnásobek čísla' $\\rightarrow 3x$\n* 'Petr je o 3 roky starší než Jana'. Pokud Jana je $x$, Petr je $x+3$.",
                image:
                  "[Image showing text phrases translated into algebraic expressions]",
              },
              {
                heading: "Pohyb (s = v · t)",
                text: "Klasická úloha: Jedno auto vyjede z Prahy, druhé z Brna. Kdy se potkají? Klíčem je dráha ($s$). \n\n$$ s_{celkem} = s_{auto1} + s_{auto2} $$\n\nProtože dráha je rychlost krát čas ($s = v \\cdot t$), rovnice často vypadá takto: \n$$ s_{celkem} = v_1 \\cdot t + v_2 \\cdot t $$\nZa $t$ dosadíme neznámou a řešíme.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "c6_l4_t1",
                question:
                  "Jak zapíšeš: 'Jana má dvakrát více kuliček než Petr' (Petr = x)?",
                options: ["$x + 2$", "$x - 2$", "$2x$", "$x / 2$"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c6_l4_t2_sequence",
                type: "sequence",
                question:
                  "Sestav rovnici pro úlohu: 'Součet tří po sobě jdoucích čísel je 15':",
                options: [
                  "První číslo je $x$.",
                  "Druhé je $x+1$.",
                  "Třetí je $x+2$.",
                  "Rovnice: $x + (x+1) + (x+2) = 15$.",
                ],
                correctAnswer: [
                  "První číslo je $x$.",
                  "Druhé je $x+1$.",
                  "Třetí je $x+2$.",
                  "Rovnice: $x + (x+1) + (x+2) = 15$.",
                ],
                xp: 30,
              },
              {
                id: "c6_l4_t3",
                question: "Vzorec pro výpočet dráhy je:",
                options: [
                  "$s = v + t$",
                  "$s = v : t$",
                  "$s = v \\cdot t$",
                  "$s = t - v$",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c6_l4_t4_input",
                type: "text-input",
                question:
                  "Otec (40 let) je 4x starší než syn. Kolik je synovi?",
                correctAnswer: "10",
                xp: 20,
              },
              {
                id: "c6_l4_t5",
                question:
                  "Jeden dělník udělá práci za 10 hodin. Jakou část práce udělá za 1 hodinu?",
                options: [
                  "$1/10$ (jednu desetinu)",
                  "$10/1$",
                  "Celou",
                  "$50\\,\\%$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Soustavy dvou rovnic",
          content: {
            sections: [
              {
                heading: "Dvě stopy pro detektiva",
                text: "Někdy máme dvě neznámé ($x$ a $y$). Abychom je našli, potřebujeme dvě rovnice (dvě informace). \n1.  Součet dvou čísel je 10 ($x + y = 10$).\n2.  Jejich rozdíl je 2 ($x - y = 2$).\n\nTohle je soustava rovnic. Hledáme čísla, která splňují OBA řádky zároveň.",
                image: "",
              },
              {
                heading: "Metoda sčítací",
                text: "Nejrychlejší metoda je rovnice sečíst pod sebou. \n$$ (x + y) + (x - y) = 10 + 2 $$\n$y$ a $-y$ se vyruší (zmizí)! Zbyde: \n$$ 2x = 12 \\Rightarrow x = 6 $$\nTeď už jen dosadíme $x$ zpátky a zjistíme, že $y = 4$.",
                image: "placeholder-system-equations-elimination",
              },
            ],
            tasks: [
              {
                id: "c6_l5_t1",
                question:
                  "Kolik řešení má obvykle soustava dvou lineárních rovnic?",
                options: [
                  "Žádné",
                  "Jedno (dvojice čísel x, y)",
                  "Deset",
                  "Nekonečně mnoho",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c6_l5_t2_sequence",
                type: "sequence",
                question: "Vyřeš soustavu sečtením ($x+y=5, x-y=1$):",
                options: [
                  "Sečtu rovnice: $2x = 6$.",
                  "Vypočítám $x = 3$.",
                  "Dosadím $x$ do první rovnice ($3+y=5$).",
                  "Vypočítám $y = 2$.",
                ],
                correctAnswer: [
                  "Sečtu rovnice: $2x = 6$.",
                  "Vypočítám $x = 3$.",
                  "Dosadím $x$ do první rovnice ($3+y=5$).",
                  "Vypočítám $y = 2$.",
                ],
                xp: 30,
              },
              {
                id: "c6_l5_t3",
                question: "Metoda dosazovací znamená:",
                options: [
                  "Že si výsledek tipnu a dosadím",
                  "Že vyjádřím jednu neznámou a dosadím ji do druhé rovnice",
                  "Že dosadím čísla do kalkulačky",
                  "Že rovnice sečtu",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c6_l5_t4",
                question:
                  "V ohradě jsou slepice a králíci. Mají 5 hlav a 14 nohou. Která soustava je správně? ($s$=slepice, $k$=králíci)",
                options: [
                  "$s+k=5, 2s+4k=14$",
                  "$s+k=14, 2s+4k=5$",
                  "$s \\cdot k = 5, s+k=14$",
                  "$s+k=5, s+k=14$",
                ],
                correctAnswer: 0,
                xp: 30,
              },
              {
                id: "c6_l5_t5",
                question:
                  "Co se stane s $y$ při sečtení rovnic $2x + y = 10$ a $3x - y = 5$?",
                options: [
                  "Bude z toho $2y$",
                  "Zmizí (vyruší se, protože $y - y = 0$)",
                  "Změní se na $y^2$",
                  "Bude z toho nula na pravé straně",
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
      title: "Funkce",
      description:
        "Matematika v obrazech. Naučíme se číst z grafů, předpovídat budoucnost pomocí křivek a zjistíme, že každá rovnice má svůj tvar. Od přímek až po paraboly.",
      lessons: [
        {
          title: "Pojem funkce a soustava souřadnic",
          content: {
            sections: [
              {
                heading: "Funkční automat",
                text: "Představ si funkci jako automat na nápoje. Vhodíš minci (vstupní číslo $x$), automat zachrastí (provede výpočet podle předpisu) a vypadne nápoj (výstupní číslo $y$).\n\nZlaté pravidlo funkce: Pro každé $x$ existuje právě jedno $y$. Nemůže se stát, že vhodíš pětikorunu a jednou vypadne cola a podruhé nic (nebo dvě různé věci). To by nebyla funkce, ale rozbitý automat.",
                image:
                  "[Image illustrating a function machine taking input x and producing output y]",
              },
              {
                heading: "Reného mapa (Kartézská soustava)",
                text: "Abychom funkci viděli, musíme ji nakreslit. Používáme k tomu dvě osy, které se kříží v nule (počátek $[0;0]$). \n* Osa $x$ je vodorovná (leží).\n* Osa $y$ je svislá (stojí).\n\nKaždý bod má svou adresu – souřadnice $[x; y]$. Například bod $A[2; 3]$ najdeš tak, že jdeš 2 kroky doprava a 3 kroky nahoru.",
                image: "placeholder-coordinate-system-points",
              },
            ],
            tasks: [
              {
                id: "c7_l1_t1",
                question: "Co musí platit, aby šlo o funkci?",
                options: [
                  "Ke každému $x$ existuje právě jedno $y$",
                  "Ke každému $x$ existují dvě $y$",
                  "Grafem musí být přímka",
                  "Musí to být složité",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c7_l1_t2_sequence",
                type: "sequence",
                question: "Seřaď kroky, jak najít bod A[3; -2]:",
                options: [
                  "Začnu v počátku [0;0].",
                  "Jdu o 3 dílky doprava (po ose x).",
                  "Jdu o 2 dílky dolů (po ose y).",
                  "Udělám křížek.",
                ],
                correctAnswer: [
                  "Začnu v počátku [0;0].",
                  "Jdu o 3 dílky doprava (po ose x).",
                  "Jdu o 2 dílky dolů (po ose y).",
                  "Udělám křížek.",
                ],
                xp: 20,
              },
              {
                id: "c7_l1_t3",
                question: "Co je 'definiční obor'?",
                options: [
                  "Všechna čísla $x$, která můžeme do funkce vložit",
                  "Všechna čísla $y$, která nám vyjdou",
                  "Obrázek grafu",
                  "Název funkce",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "c7_l1_t4_input",
                type: "text-input",
                question:
                  "Mám předpis $y = 2x$. Jaké $y$ vyjde pro $x = 5$? (Napiš číslo)",
                correctAnswer: "10",
                xp: 15,
              },
              {
                id: "c7_l1_t5",
                question:
                  "Ve kterém kvadrantu jsou obě souřadnice záporné (např. $[-2; -5]$)?",
                options: [
                  "I. (vpravo nahoře)",
                  "II. (vlevo nahoře)",
                  "III. (vlevo dole)",
                  "IV. (vpravo dole)",
                ],
                correctAnswer: 2,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Lineární funkce (Přímka)",
          content: {
            sections: [
              {
                heading: "Rovná čára",
                text: "Lineární funkce má předpis $y = ax + b$. Jejím grafem je vždy přímka. \n\nK sestrojení přímky ti stačí znát pouhé dva body! Vypočítáš si je tabulkou (dosadíš libovolná dvě $x$, třeba 0 a 1), vyneseš do grafu a spojíš pravítkem. Nekonečná čára je na světě.",
                image:
                  "[Image showing a straight line graph on a coordinate plane]",
              },
              {
                heading: "Co dělají písmenka a a b?",
                text: "* Číslo $a$ (sklon): Když je kladné, funkce roste (jde do kopce). Když je záporné, funkce klesá (z kopce). Čím je číslo větší, tím je kopec prudší.\n* Číslo $b$ (posun): Říká nám, kde přesně přímka protne svislou osu $y$.",
                image: "placeholder-linear-slope-intercept",
              },
            ],
            tasks: [
              {
                id: "c7_l2_t1",
                question: "Jaký tvar má graf funkce $y = 2x + 1$?",
                options: ["Kruh", "Parabola", "Přímka", "Vlnovka"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c7_l2_t2",
                question: "Funkce $y = -3x + 2$ je:",
                options: [
                  "Rostoucí (do kopce)",
                  "Klesající (z kopce, protože je tam minus)",
                  "Vodorovná",
                  "Svislá",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c7_l2_t3_input",
                type: "text-input",
                question:
                  "V jaké hodnotě protne funkce $y = 5x + 4$ osu y? (Je to číslo b).",
                correctAnswer: "4",
                xp: 20,
              },
              {
                id: "c7_l2_t4",
                question:
                  "Kolik bodů minimálně potřebuješ k narýsování přímky?",
                options: ["Jeden", "Dva", "Deset", "Pět"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c7_l2_t5_sequence",
                type: "sequence",
                question:
                  "Seřaď funkce od nejmírnější po nejprudší (podle čísla u x):",
                options: ["$y = 1x$", "$y = 2x$", "$y = 5x$", "$y = 10x$"],
                correctAnswer: [
                  "$y = 1x$",
                  "$y = 2x$",
                  "$y = 5x$",
                  "$y = 10x$",
                ],
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Přímá úměrnost (Speciální případ)",
          content: {
            sections: [
              {
                heading: "Startujeme z nuly",
                text: "Přímá úměrnost je nejjednodušší lineární funkce. Její předpis je $y = k \\cdot x$. Chybí tam to 'plus něco' na konci.\n\nTo znamená, že graf vždy prochází počátkem – bodem $[0; 0]$. Logicky: Pokud si koupím 0 rohlíků ($x=0$), zaplatím 0 korun ($y=0$).",
                image:
                  "[Image comparing direct variation graph starting at 0,0 vs general linear function]",
              },
              {
                heading: "Konstanta úměrnosti k",
                text: "Číslo $k$ nám říká, kolikrát se $y$ zvětší. Například $y = 3x$. Když se $x$ zvětší o 1, $y$ se zvětší o 3. Je to vlastně cena za jeden kus.",
                image: "placeholder-direct-variation-slope",
              },
            ],
            tasks: [
              {
                id: "c7_l3_t1",
                question: "Která rovnice představuje přímou úměrnost?",
                options: [
                  "$y = 2x + 1$",
                  "$y = 5x$ (nemá +b)",
                  "$y = x^2$",
                  "$y = 5 / x$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c7_l3_t2",
                question: "Kterým bodem VŽDY prochází graf přímé úměrnosti?",
                options: [
                  "$[0; 1]$",
                  "$[1; 1]$",
                  "$[0; 0]$ (počátek)",
                  "$[10; 10]$",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c7_l3_t3_input",
                type: "text-input",
                question:
                  "Pokud 1 kg stojí 20 Kč, kolik stojí 5 kg? (Napiš číslo)",
                correctAnswer: "100",
                xp: 15,
              },
              {
                id: "c7_l3_t4",
                question: "Je funkce $y = -2x$ přímá úměrnost?",
                options: [
                  "Ano (prochází počátkem, jen klesá)",
                  "Ne, protože je tam minus",
                  "Ne, je to parabola",
                  "Nelze určit",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "c7_l3_t5",
                question: "Grafem přímé úměrnosti je:",
                options: [
                  "Křivka",
                  "Přímka procházející počátkem",
                  "Přímka mimo počátek",
                  "Úsečka",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Kvadratická funkce (Parabola)",
          content: {
            sections: [
              {
                heading: "Prohnutá křivka",
                text: "Co se stane, když $x$ umocníme? Dostaneme funkci $y = x^2$. \n* $1^2 = 1$\n* $2^2 = 4$\n* $3^2 = 9$ (roste to hrozně rychle!)\n\nAle pozor: $(-2)^2$ je taky $4$! Grafem není přímka, ale symetrická křivka ve tvaru písmene U, které říkáme parabola.",
                image: "",
              },
              {
                heading: "Smějící se a smutná parabola",
                text: "* Základní parabola $y = x^2$ se směje (je otevřená nahoru $\\cup$).\n* Když před ni dáme minus ($y = -x^2$), parabola se otočí dolů a je smutná ($\\cap$).\n\nParabola popisuje spoustu věcí v přírodě – třeba dráhu hozeného míče nebo tvar visutého mostu.",
                image: "placeholder-parabola-types",
              },
            ],
            tasks: [
              {
                id: "c7_l4_t1",
                question: "Jak se jmenuje graf kvadratické funkce?",
                options: ["Hyperbola", "Přímka", "Parabola", "Elipsa"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c7_l4_t2_input",
                type: "text-input",
                question:
                  "Vypočítej y pro $x = -3$ ve funkci $y = x^2$. (Napiš výsledek)",
                correctAnswer: "9",
                xp: 15,
              },
              {
                id: "c7_l4_t3",
                question: "Jak vypadá graf $y = -x^2$?",
                options: [
                  "Jako U (směje se)",
                  "Jako kopec / obrácené U (smutná)",
                  "Jako přímka",
                  "Jako vlnovka",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c7_l4_t4",
                question: "Který bod neleží na parabole $y = x^2$?",
                options: [
                  "$[2; 4]$",
                  "$[3; 9]$",
                  "$[1; 1]$",
                  "$[2; 5]$ (protože $2^2$ není 5)",
                ],
                correctAnswer: 3,
                xp: 20,
              },
              {
                id: "c7_l4_t5_sequence",
                type: "sequence",
                question:
                  "Seřaď hodnoty $y=x^2$ pro $x=1, x=2, x=3$ od nejmenší:",
                options: ["1", "4", "9"],
                correctAnswer: ["1", "4", "9"],
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Nepřímá úměrnost (Hyperbola)",
          content: {
            sections: [
              {
                heading: "Dělení neznámou",
                text: "Předpis $y = \\frac{k}{x}$ znamená, že $x$ je ve jmenovateli. Čím větší číslo dáme dolů (za $x$), tím menší je výsledek ($y$). \n* $100 : 1 = 100$\n* $100 : 100 = 1$\n\nGrafem jsou dva oblouky, kterým říkáme hyperbola. Nikdy se nedotknou os! Proč? Protože nulou nelze dělit ($x$ nesmí být $0$) a výsledek taky nikdy nebude přesně $0$.",
                image: "",
              },
              {
                heading: "Praktické využití",
                text: "Nepřímá úměrnost popisuje situace 'společné práce' nebo 'dělení kořisti'. \nKdyž jeden člověk uklízí halu 10 hodin, dva lidé ji uklidí za 5 hodin ($y = 10 / x$). Graf jde prudce dolů a pak se blíží k nule, ale nikdy nezastaví.",
                image: "placeholder-inverse-variation-workers",
              },
            ],
            tasks: [
              {
                id: "c7_l5_t1",
                question: "Jak se nazývá graf nepřímé úměrnosti?",
                options: ["Parabola", "Hyperbola", "Superbola", "Kružnice"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c7_l5_t2",
                question: "Proč se graf hyperboly nikdy nedotkne osy y?",
                options: [
                  "Protože se mu nechce",
                  "Protože za $x$ nesmíme dosadit nulu (nulou nelze dělit)",
                  "Protože osa y je moc vysoko",
                  "Dotkne se jí, když je $x$ velké",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c7_l5_t3_input",
                type: "text-input",
                question:
                  "Urči hodnotu y pro $x = 2$ ve funkci $y = 10 / x$. Napiš číslo:",
                correctAnswer: "5",
                xp: 15,
              },
              {
                id: "c7_l5_t4",
                question: "Která rovnice je nepřímá úměrnost?",
                options: [
                  "$y = 5x$",
                  "$y = x - 5$",
                  "$y = 5 / x$ (x je ve jmenovateli)",
                  "$y = x / 5$",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c7_l5_t5_sequence",
                type: "sequence",
                question: "Seřaď logickou úvahu o dělnících (nepřímá úměra):",
                options: [
                  "1 dělník pracuje 10 hodin.",
                  "Přijdou další, je jich 5 (5x víc).",
                  "Čas se 5x zmenší.",
                  "Výsledek je 2 hodiny.",
                ],
                correctAnswer: [
                  "1 dělník pracuje 10 hodin.",
                  "Přijdou další, je jich 5 (5x víc).",
                  "Čas se 5x zmenší.",
                  "Výsledek je 2 hodiny.",
                ],
                xp: 25,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Finanční matematika a základy statistiky",
      description:
        "Příprava na skutečný život. Naučíme se, jak fungují peníze, proč se 'úroky z úroků' nazývají osmým divem světa a jak se nenechat oklamat statistikami a grafy v novinách.",
      lessons: [
        {
          title: "Úroky: Jak peníze vydělávají peníze",
          content: {
            sections: [
              {
                heading: "Cena peněz",
                text: "Když si půjčíš auto, platíš nájem. Když si půjčíš peníze, platíš úrok. Úrok je cena za půjčení peněz na určitou dobu.\n\nFunguje to oběma směry:\n* Spoření: Ty půjčuješ peníze bance $\\rightarrow$ banka platí úrok tobě (vyděláváš).\n* Půjčka: Banka půjčuje tobě $\\rightarrow$ ty platíš úrok bance (proděláváš).\n\nVýše úroku závisí na úrokové sazbě (např. $5\\,\\%$ p.a. – *per annum*, tedy ročně).",
                image:
                  "[Image illustrating money growing over time with interest added to a piggy bank]",
              },
              {
                heading: "Jednoduché úročení",
                text: "Jak spočítat úrok za jeden rok? Použijeme klasický vzoreček z procent.\n$$ úrok = \\frac{sazba \\cdot částka}{100} $$\n\nPříklad: Uložím $1\\,000$ Kč na úrok $5\\,\\%$.\n1.  $1\\,\\%$ z tisícovky je $10$ Kč.\n2.  $5\\,\\%$ je tedy $50$ Kč.\nNa konci roku mám $1\\,050$ Kč. (Pozor, v reálu si stát z úroku vezme ještě $15\\,\\%$ daň).",
                image: "placeholder-interest-calculation",
              },
            ],
            tasks: [
              {
                id: "c8_l1_t1",
                question: "Co znamená zkratka p.a. u úrokové sazby?",
                options: [
                  "Per annum (ročně)",
                  "Po akci (jednorázově)",
                  "Půlročně",
                  "Procento akcií",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c8_l1_t2_input",
                type: "text-input",
                question:
                  "Půjčím si 10 000 Kč s úrokem 10 %. Kolik Kč činí samotný úrok? (Napiš číslo)",
                correctAnswer: "1000",
                xp: 20,
              },
              {
                id: "c8_l1_t3",
                question: "Kdo platí úrok, když máš peníze na spořicím účtu?",
                options: [
                  "Ty platíš bance",
                  "Banka platí tobě",
                  "Nikdo nic neplatí",
                  "Stát platí bance",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c8_l1_t4_sequence",
                type: "sequence",
                question: "Seřaď kroky výpočtu konečné částky na účtu:",
                options: [
                  "Mám vloženou částku (jistinu).",
                  "Vypočítám úrok podle procent.",
                  "Odečtu daň z úroku (15%).",
                  "Čistý úrok přičtu k jistině.",
                ],
                correctAnswer: [
                  "Mám vloženou částku (jistinu).",
                  "Vypočítám úrok podle procent.",
                  "Odečtu daň z úroku (15%).",
                  "Čistý úrok přičtu k jistině.",
                ],
                xp: 25,
              },
              {
                id: "c8_l1_t5",
                question: "Co je 'jistina'?",
                options: [
                  "Původní vložená/půjčená částka",
                  "Úrok",
                  "Poplatek bance",
                  "Jistota, že peníze vrátím",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Složené úročení (Osmý div světa)",
          content: {
            sections: [
              {
                heading: "Sněhová koule",
                text: "Albert Einstein prý řekl, že složené úročení je osmý div světa. Proč? Protože úroky se nevyplácejí, ale připisují k jistině. Další rok se tedy počítají úroky i z těch minulých úroků!\n\n1.  rok: máš $100$ Kč, úrok $10\\,\\%$ $\\rightarrow$ máš $110$ Kč.\n2.  rok: počítáš $10\\,\\%$ už ze $110$ Kč! Úrok je $11$ Kč. Máš $121$ Kč.\n3.  rok: počítáš $10\\,\\%$ ze $121$ Kč...\n\nPeníze nerostou rovnoměrně, ale jako sněhová koule – čím dál rychleji.",
                image:
                  "[Image illustrating compound interest as a rolling snowball getting bigger vs linear growth]",
              },
              {
                heading: "Dobrý sluha, zlý pán",
                text: "Složené úročení je skvělé, když spoříš (tvé bohatství roste exponenciálně). Ale je to naprostá katastrofa, když dlužíš a nesplácíš. Dluh narůstá raketovou rychlostí, protože platíš 'úroky z úroků'. Proto je tak nebezpečné brát si půjčky s vysokým úrokem.",
                image: "placeholder-compound-growth-graph",
              },
            ],
            tasks: [
              {
                id: "c8_l2_t1",
                question: "Co je principem složeného úročení?",
                options: [
                  "Úroky se počítají jen z počáteční částky",
                  "Úroky se počítají i z připsaných úroků (úroky z úroků)",
                  "Úrok se každý rok snižuje",
                  "Banka ti sebere všechno",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c8_l2_t2_sequence",
                type: "sequence",
                question:
                  "Seřaď růst částky 1000 Kč při 10% úroku (složené úročení):",
                options: [
                  "Začátek: 1000 Kč",
                  "Po 1. roce: 1100 Kč (+100)",
                  "Po 2. roce: 1210 Kč (+110)",
                  "Po 3. roce: 1331 Kč (+121)",
                ],
                correctAnswer: [
                  "Začátek: 1000 Kč",
                  "Po 1. roce: 1100 Kč (+100)",
                  "Po 2. roce: 1210 Kč (+110)",
                  "Po 3. roce: 1331 Kč (+121)",
                ],
                xp: 25,
              },
              {
                id: "c8_l2_t3_input",
                type: "text-input",
                question:
                  "Máš 100 Kč a úrok je 50 %. Kolik budeš mít po 2 letech? (1. rok: 150, 2. rok: 150 + polovina ze 150...)",
                correctAnswer: "225",
                xp: 25,
              },
              {
                id: "c8_l2_t4",
                question: "Kdy peníze rostou rychleji?",
                options: [
                  "Při jednoduchém úročení",
                  "Při složeném úročení",
                  "Je to jedno",
                  "Když jsou pod matrací",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c8_l2_t5",
                question:
                  "Vzoreček pro složené úročení využívá matematickou operaci:",
                options: [
                  "Sčítání",
                  "Mocnění (na entou)",
                  "Odmocňování",
                  "Dělení beze zbytku",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Daně a mzdy",
          content: {
            sections: [
              {
                heading: "Hrubá vs. Čistá mzda",
                text: "Ve smlouvě podepíšeš hrubou mzdu (třeba $30\\,000$ Kč). Na účet ti ale přijde čistá mzda (třeba $24\\,000$ Kč). Kam zmizel zbytek? Zaměstnavatel za tebe musel odvést státu:\n\n1.  Zdravotní pojištění (aby tě ošetřili u doktora).\n2.  Sociální pojištění (na důchody a nemocenskou).\n3.  Daň z příjmu (na policii, školy, silnice).\n\nNikdy nepočítej s hrubou mzdou jako s penězi, které můžeš utratit!",
                image:
                  "[Image illustrating gross salary pie chart with slices cut out for taxes and insurance]",
              },
              {
                heading: "DPH (Daň z přidané hodnoty)",
                text: "Tuhle daň platíme všichni každý den. Když si koupíš rohlík nebo mobil, v ceně je už započteno DPH (základní sazba v ČR je $21\\,\\%$).\n\nObchodník si nechá jen část peněz (cenu bez daně) a DPH musí poslat státu.\n$$ Cena_{s DPH} = Cena_{bez DPH} \\cdot 1,21 $$",
                image: "placeholder-vat-receipt",
              },
            ],
            tasks: [
              {
                id: "c8_l3_t1",
                question: "Která mzda ti reálně přijde na bankovní účet?",
                options: ["Hrubá", "Čistá", "Superhrubá", "Minimální"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c8_l3_t2_sequence",
                type: "sequence",
                question: "Seřaď, jak se z hrubé mzdy stane čistá:",
                options: [
                  "Mám hrubou mzdu.",
                  "Odečte se sociální a zdravotní pojištění.",
                  "Odečte se záloha na daň.",
                  "Zbude čistá mzda k výplatě.",
                ],
                correctAnswer: [
                  "Mám hrubou mzdu.",
                  "Odečte se sociální a zdravotní pojištění.",
                  "Odečte se záloha na daň.",
                  "Zbude čistá mzda k výplatě.",
                ],
                xp: 25,
              },
              {
                id: "c8_l3_t3_input",
                type: "text-input",
                question:
                  "Výrobek stojí 100 Kč bez DPH. Sazba DPH je 21 %. Kolik zaplatíš u pokladny? (Napiš číslo)",
                correctAnswer: "121",
                xp: 20,
              },
              {
                id: "c8_l3_t4",
                question: "Co NENÍ součástí běžných srážek ze mzdy?",
                options: [
                  "Zdravotní pojištění",
                  "Sociální pojištění",
                  "Daň z příjmu",
                  "Nájemné (pokud nemáš exekuci)",
                ],
                correctAnswer: 3,
                xp: 15,
              },
              {
                id: "c8_l3_t5",
                question: "Komu nakonec skončí peníze vybrané na DPH?",
                options: [
                  "Obchodníkovi",
                  "Státu (do státního rozpočtu)",
                  "Tvému šéfovi",
                  "Bance",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Statistika: Průměr a Medián",
          content: {
            sections: [
              {
                heading: "Průměr může lhát",
                text: "Aritmetický průměr znáš: sečteš všechna čísla a vydělíš jejich počtem. Ale pozor!\n\nPředstav si hospodu, kde sedí 5 lidí s platem $20\\,000$ Kč. Najednou vejde miliardář Bill Gates. Průměrný plat v hospodě rázem vyletí na miliony korun. Zbohatli ti původní hosté? Ne. Průměr je velmi citlivý na extrémní hodnoty (úlety).",
                image:
                  "[Image illustrating mean vs median with salaries in a pub]",
              },
              {
                heading: "Medián: Spravedlivý střed",
                text: "Medián je odolnější. Seřadíme všechny hodnoty od nejmenší po největší a vezmeme tu, která je přesně uprostřed.\n\nKdyž přijde Bill Gates, medián se skoro nezmění, protože miliardář bude jen na konci řady, ale ten 'prostřední člověk' (typický host) zůstane stejný. Medián lépe popisuje realitu, když jsou ve skupině velké rozdíly.",
                image: "placeholder-median-sorting",
              },
            ],
            tasks: [
              {
                id: "c8_l4_t1_input",
                type: "text-input",
                question:
                  "Vypočítej průměr známek: 1, 1, 5, 5. (Součet je 12, počet je 4).",
                correctAnswer: "3",
                xp: 15,
              },
              {
                id: "c8_l4_t2_sequence",
                type: "sequence",
                question: "Seřaď postup, jak najít medián:",
                options: [
                  "Vezmu všechna data.",
                  "Seřadím je od nejmenšího po největší.",
                  "Najdu hodnotu, která je uprostřed řady.",
                  "To je medián.",
                ],
                correctAnswer: [
                  "Vezmu všechna data.",
                  "Seřadím je od nejmenšího po největší.",
                  "Najdu hodnotu, která je uprostřed řady.",
                  "To je medián.",
                ],
                xp: 20,
              },
              {
                id: "c8_l4_t3",
                question:
                  "Najdi medián čísel: 1, 2, 10, 100, 1000. (Které je uprostřed?)",
                options: ["10", "222 (průměr)", "100", "2"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "c8_l4_t4",
                question: "Co je 'Modus'?",
                options: [
                  "Nejčastěji se vyskytující hodnota",
                  "Průměr",
                  "Prostřední hodnota",
                  "Módní oblečení",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c8_l4_t5",
                question: "Kdy je lepší použít medián místo průměru?",
                options: [
                  "Vždy",
                  "Nikdy",
                  "Když data obsahují extrémní hodnoty (např. platy)",
                  "Když máme málo čísel",
                ],
                correctAnswer: 2,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Pravděpodobnost",
          content: {
            sections: [
              {
                heading: "Hra s náhodou",
                text: "Jaká je šance, že na kostce padne šestka? Kostka má 6 stěn. Šestka je tam jen jedna. Šance je 1 ku 6.\n\nVzoreček je jednoduchý:\n$$ P(A) = \\frac{\\text{počet příznivých výsledků}}{\\text{počet všech možných výsledků}} $$\n\nVýsledek je číslo mezi 0 (nemožné) a 1 (jisté). Často se násobí stem a udává v procentech.",
                image:
                  "[Image showing probability formula favorable outcomes divided by total outcomes with dice example]",
              },
              {
                heading: "Hod mincí",
                text: "Mince má 2 strany (panna, orel). Jaká je šance, že padne orel? 1 (orel) lomeno 2 (všechny možnosti).\n$$ P = \\frac{1}{2} = 0,5 = 50\\,\\% $$\n\nAle pozor! To neznamená, že když hodíš dvakrát, musí jednou padnout orel. Znamená to, že když hodíš milionkrát, bude orel přibližně v polovině případů.",
                image: "placeholder-coin-toss-probability",
              },
            ],
            tasks: [
              {
                id: "c8_l5_t1_input",
                type: "text-input",
                question:
                  "V osudí je 10 lístků, vyhrává jen 1. Jaká je pravděpodobnost výhry v procentech? (Napiš jen číslo)",
                correctAnswer: "10",
                xp: 20,
              },
              {
                id: "c8_l5_t2",
                question:
                  "Jaká je pravděpodobnost, že na kostce padne sudé číslo (2, 4, 6)?",
                options: ["1/6", "3/6 = 1/2 (50 %)", "2/6 = 1/3", "1/20"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c8_l5_t3",
                question: "Co znamená pravděpodobnost 0?",
                options: [
                  "Jev nastane určitě",
                  "Je to 50 na 50",
                  "Jev je nemožný (nikdy se nestane)",
                  "Malá šance",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c8_l5_t4_sequence",
                type: "sequence",
                question: "Seřaď jevy od nemožného po jistý:",
                options: [
                  "Na kostce padne číslo 7 (0%).",
                  "Na minci padne orel (50%).",
                  "Vyberu červenou kuličku z pytlíku, kde jsou jen červené (100%).",
                ],
                correctAnswer: [
                  "Na kostce padne číslo 7 (0%).",
                  "Na minci padne orel (50%).",
                  "Vyberu červenou kuličku z pytlíku, kde jsou jen červené (100%).",
                ],
                xp: 20,
              },
              {
                id: "c8_l5_t5",
                question: "Jaká je šance vyhrát hlavní cenu ve sportce?",
                options: [
                  "Vysoká",
                  "50 na 50",
                  "Extrémně nízká (jedna ku milionům)",
                  "Jistá, když si koupím los",
                ],
                correctAnswer: 2,
                xp: 10,
              },
            ],
          },
        },
      ],
    },
  ],
};
