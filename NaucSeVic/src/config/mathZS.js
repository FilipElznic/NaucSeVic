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
          title: "Číselná řada 0–20 a sousedé",
          content: {
            sections: [
              {
                heading: "Cesta od 0 do 20",
                text: "Vítej ve světě čísel! Už umíš počítat do deseti, ale svět je mnohem větší. Teď se vydáme na cestu až k číslu 20. Představ si čísla jako domy v dlouhé ulici. Začínáme nulou, což je prázdný dům, a jdeme postupně dál: 10, 11 (jedenáct), 12 (dvanáct)... až dojdeme k 20 (dvacet). Je důležité umět je vyjmenovat nejen od začátku do konce, ale i pozpátku – jako když odpočítáváme start rakety!",
                image: "",
              },
              {
                heading: "Předchůdce a následník",
                text: "Každé číslo má své sousedy, stejně jako ty máš sousedy v lavici nebo doma. Soused, který bydlí 'před' naším číslem (je menší), se jmenuje předchůdce. Soused, který bydlí 'za' ním (je větší), je následník. Například číslo 15 má předchůdce 14 a následníka 16. Bez znalosti sousedů bychom se na číselné ose ztratili.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "l1_t1",
                question: "Které číslo následuje hned po číslu 19?",
                options: ["18", "20", "10", "21"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "l1_t2",
                question: "Kdo je předchůdcem čísla 15?",
                options: ["16", "14", "13", "10"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "l1_t3",
                question: "Doplň řadu: $8, 9, 10, \\dots, 12$",
                options: ["13", "11", "7", "14"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "l1_t4",
                question: "Seřaď čísla od nejmenšího: 15, 8, 20, 12",
                options: [
                  "8, 12, 15, 20",
                  "20, 15, 12, 8",
                  "8, 15, 12, 20",
                  "12, 8, 15, 20",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "l1_t5",
                question: "Které číslo leží přesně mezi 10 a 12?",
                options: ["9", "13", "11", "11 a půl"],
                correctAnswer: 2,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Porovnávání čísel (<, >, =)",
          content: {
            sections: [
              {
                heading: "Hladový krokodýl",
                text: "Když máme dvě čísla, často chceme vědět, které je větší. K tomu používáme znaménka $<$ a $>$. Aby se ti to nepletlo, představ si, že zobáček je tlama hladového krokodýla. Krokodýl je chytrý a vždycky se otočí s otevřenou pusou tam, kde je více jídla (větší číslo). Takže $5 < 10$, protože krokodýl chce sníst desítku.",
                image: "",
              },
              {
                heading: "Když je to stejně",
                text: "Někdy se stane, že na obou stranách je stejně. Třeba 5 jablek na stole a 5 jablek v košíku. Krokodýl neví, kam se otočit, a tak zavře pusu. Vzniknou dvě čárky pod sebou, kterým říkáme 'rovná se' ($=$). To znamená, že hodnota vlevo je naprosto stejná jako hodnota vpravo.",
                image: "placeholder-equals-sign",
              },
            ],
            tasks: [
              {
                id: "l2_t1",
                question: "Doplň znaménko: $15 \\dots 18$",
                options: ["$>$", "$<$", "$=$", "$+$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "l2_t2",
                question: "Který zápis je správně?",
                options: ["$12 > 20$", "$8 = 8$", "$10 < 5$", "$1 = 2$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "l2_t3",
                question: "Co platí pro čísla 11 a 11?",
                options: ["$11 > 11$", "$11 < 11$", "$11 = 11$", "Nic neplatí"],
                correctAnswer: 2,
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
                question: "Vyber správné porovnání:",
                options: ["$12 < 14$", "$20 < 10$", "$9 > 11$", "$7 = 17$"],
                correctAnswer: 0,
                xp: 10,
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
            ],
          },
        },
        {
          title: "Přechod přes desítku (Rozklad čísel)",
          content: {
            sections: [
              {
                heading: "Most přes rozbouřenou řeku",
                text: "Teď nás čeká nejdůležitější dovednost! Co když máme $8 + 5$? To už na prstech jednoduše nespočítáme. Představ si desítku jako záchytný ostrov. Nejprve musíme dojít k desítce. Od osmičky nám do deseti chybí 2. Pětku si tedy 'rozložíme' na 2 a 3. Osmička sní dvojku, stane se z ní 10, a pak už jen přičteme zbytek (3). Výsledek je 13!",
                image: "",
              },
              {
                heading: "Odčítání s couváním",
                text: "Při odčítání, třeba $13 - 6$, to děláme podobně, jen couváme. Nejprve se musíme vrátit na desítku. Z 13 musíme odebrat 3, abychom byli na 10. Ale měli jsme odebrat celkem 6! Kolik ještě musíme odebrat? Ještě 3. Takže $10 - 3 = 7$. Tomuto postupu říkáme 'rozklad' nebo 'počítání přes desítku'.",
                video: "placeholder-video-bridging-10",
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
                id: "l4_t2",
                question:
                  "Jak rozložíš číslo 5 v příkladu $9 + 5$, abys doplnil do desítky?",
                options: ["na 1 a 4", "na 2 a 3", "na 5 a 0", "na 3 a 2"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "l4_t3",
                question: "Vypočítej: $15 - 7$",
                options: ["8", "7", "9", "6"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "l4_t4",
                question: "Kolik je $7 + 7$?",
                options: ["13", "14", "15", "12"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "l4_t5",
                question: "Doplň chybějící číslo: $6 + ? = 14$",
                options: ["7", "8", "9", "6"],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "První slovní úlohy",
          content: {
            sections: [
              {
                heading: "Matematika v příbězích",
                text: "Slovní úlohy jsou jako malé detektivní příběhy. Nejsou tam jen čísla, ale i slova. Musíme zjistit, co se děje. Když slyšíš slova jako 'přidal', 'přiletěl', 'dostal', obvykle budeme sčítat (+). Když slyšíš 'snědl', 'odletěl', 'ztratil' nebo 'dal pryč', budeme odčítat (-).",
                image: "",
              },
              {
                heading: "Jak vyřešit úlohu",
                text: "1. Přečti si zadání (klidně dvakrát).\n2. Zjisti, co víme (např. Petr má 5 autíček).\n3. Zjisti, na co se ptáme (Kolik jich má teď?).\n4. Sestav příklad ($5 + 3$).\n5. Vypočítej a napiš odpověď. Nezapomeň, že každá slovní úloha musí mít odpověď celou větou!",
                image: "placeholder-detective-math",
              },
            ],
            tasks: [
              {
                id: "l5_t1",
                question:
                  "Na stromě bylo 8 ptáčků. 3 odletěli. Kolik jich zůstalo?",
                options: ["11", "5", "6", "4"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "l5_t2",
                question:
                  "Jana měla 12 pastelek a dostala k narozeninám další 4. Kolik má celkem?",
                options: ["8", "15", "16", "124"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "l5_t3",
                question:
                  "Tomáš má 9 kuliček, Milan má o 3 více. Kolik má Milan?",
                options: ["6", "11", "12", "13"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "l5_t4",
                question:
                  "V autobuse jelo 15 lidí. Na zastávce 5 lidí vystoupilo. Kolik lidí jede dál?",
                options: ["10", "20", "15", "5"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "l5_t5",
                question: "Mám 7 bonbónů a chci jich mít 15. Kolik mi chybí?",
                options: ["7", "8", "9", "6"],
                correctAnswer: 1,
                xp: 25,
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
                text: "Představ si, že každé přirozené číslo je postavené z Lego kostiček. Některá čísla jsou velká a složitá, jiná jsou malá. Existují však speciální čísla, která už nejdou rozbít na menší kousky (kromě jedničky). Těm říkáme prvočísla. Jsou to základní stavební kameny vší matematiky. Prvočíslo má přesně dva dělitele: jedničku a samo sebe. Příkladem je číslo $5$ (jde dělit jen $1$ a $5$) nebo $13$.",
                image: "",
              },
              {
                heading: "Čísla složená a osamělá jednička",
                text: "Čísla, která mají více než dva dělitele, se nazývají čísla složená. Například číslo $4$ je složené, protože jde dělit $1$, $2$ a $4$. Můžeme ho „postavit“ jako $2 \\cdot 2$. A co číslo $1$? To je speciální samotář. Jednička má pouze jednoho dělitele (sama sebe), proto nepatří ani mezi prvočísla, ani mezi čísla složená. Je to prostě jednotka.",
                image: "placeholder-prime-composite-diagram",
              },
              {
                heading: "Eratosthenovo síto",
                text: "Jak najít všechna prvočísla třeba do sta? Řecký matematik Eratosthenes vymyslel trik. Napíšeš si čísla $1$ až $100$. Škrtneš $1$. Kroužkuješ $2$ (prvočíslo) a škrtneš všechny jeho násobky ($4, 6, 8...$). Pak zakroužkuješ další čisté číslo v pořadí ($3$) a škrtneš jeho násobky ($6, 9, 12...$). Takhle pokračuješ dál. Čísla, která zůstanou neškrtnutá, jsou prvočísla.",
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
                id: "c1_l1_t2",
                question: "Proč číslo $1$ není prvočíslo?",
                options: [
                  "Protože je liché.",
                  "Protože má pouze jednoho dělitele.",
                  "Protože je moc malé.",
                  "Je to prvočíslo.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c1_l1_t3",
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
              {
                id: "c1_l1_t4",
                question: "Které je nejmenší prvočíslo?",
                options: ["$0$", "$1$", "$2$", "$3$"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c1_l1_t5",
                question: "Je číslo $99$ prvočíslo?",
                options: [
                  "Ano, vypadá tak.",
                  "Ne, je dělitelné třeba 9 a 11.",
                  "Ano, je liché.",
                  "Ne, protože je menší než 100.",
                ],
                correctAnswer: 1,
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
                text: "Představ si, že máš číslo $1\\ 234\\ 567\\ 890$ a máš zjistit, jestli jde vydělit pěti beze zbytku. Nemusíš to složitě dělit! Stačí se podívat na konec. Matematika má svá tajná pravidla, kterým říkáme znaky dělitelnosti. Díky nim okamžitě vidíme vlastnosti čísla, aniž bychom museli počítat.",
                image: "",
              },
              {
                heading: "Pravidla pro 2, 5 a 10 (Koncovky)",
                text: "Tato pravidla se týkají pouze poslední číslice:\n- Dělitelnost 2: Číslo je sudé (končí na $0, 2, 4, 6, 8$).\n- Dělitelnost 5: Číslo končí na $0$ nebo $5$.\n- Dělitelnost 10: Číslo končí na $0$.\nNapříklad číslo $345$ je dělitelné pěti, ale není dělitelné dvěma ani deseti.",
                image: "placeholder-divisibility-2-5-10",
              },
              {
                heading: "Magický ciferný součet (3 a 9)",
                text: "U čísel $3$ a $9$ nezáleží na poslední číslici, ale na součtu všech cifer. Tomu říkáme ciferný součet. Mějme číslo $123$. Sečteme cifry: $$1 + 2 + 3 = 6$$ Je výsledek ($6$) dělitelný třemi? Ano! Takže i celé číslo $123$ je dělitelné třemi. Stejně to funguje pro devítku. Příklad $81$: $$8 + 1 = 9$$ Devět je dělitelné devíti, takže i $81$ je dělitelné devíti.",
                image:
                  "[Image explaining digit sum calculation for divisibility]",
              },
            ],
            tasks: [
              {
                id: "c1_l2_t1",
                question: "Které číslo je dělitelné číslem $2$?",
                options: ["$123$", "$501$", "$1\\ 008$", "$77$"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c1_l2_t2",
                question:
                  "Je číslo $51$ dělitelné třemi? (Tip: Zkus ciferný součet)",
                options: [
                  "Ne, protože končí jedničkou.",
                  "Ano, protože $5 + 1 = 6$ a to jde dělit 3.",
                  "Ne, je to prvočíslo.",
                  "Ano, protože je liché.",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c1_l2_t3",
                question: "Které číslo je dělitelné pěti, ale ne deseti?",
                options: ["$100$", "$55$", "$20$", "$8$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c1_l2_t4",
                question: "Jaký je ciferný součet čísla $2\\ 024$?",
                options: ["$4$", "$6$", "$8$", "$10$"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c1_l2_t5",
                question: "Vyber číslo dělitelné devíti.",
                options: [
                  "$100$",
                  "$82$ (součet 10)",
                  "$72$ (součet 9)",
                  "$19$ (součet 10)",
                ],
                correctAnswer: 2,
                xp: 20,
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
                text: "Každé složené číslo se dá rozložit na součin prvočísel. Je to jako bychom číslo dali pod rentgen a viděli jeho DNA. Tento proces se nazývá prvočíselný rozklad. Každé číslo má svůj unikátní rozklad (pokud nepočítáme pořadí). Například rozklad čísla $12$ vypadá takto: $$12 = 4 \\cdot 3$$ Ale $4$ není prvočíslo, musíme dál! $$12 = 2 \\cdot 2 \\cdot 3$$ Teď už máme samá prvočísla. Můžeme to zapsat pomocí mocniny: $$12 = 2^2 \\cdot 3$$",
                image: "",
              },
              {
                heading: "Metoda stromečku nebo žebříku",
                text: "Jak rozložit velké číslo, třeba $60$? Použijeme postupné dělení.\n1. Jde $60$ dělit nejmenším prvočíslem ($2$)? Ano. $$60 : 2 = 30$$\n2. Jde $30$ dělit $2$? Ano. $$30 : 2 = 15$$\n3. Jde $15$ dělit $2$? Ne. Zkusíme další prvočíslo ($3$). Jde to? Ano. $$15 : 3 = 5$$\n4. $5$ je prvočíslo. Hotovo.\nVýsledek: $60 = 2 \\cdot 2 \\cdot 3 \\cdot 5$.",
                image: "placeholder-prime-factorization-ladder",
              },
            ],
            tasks: [
              {
                id: "c1_l3_t1",
                question: "Jaký je správný prvočíselný rozklad čísla $8$?",
                options: [
                  "$4 \\cdot 2$",
                  "$2 \\cdot 2 \\cdot 2$ (nebo $2^3$)",
                  "$1 \\cdot 8$",
                  "$2 \\cdot 4$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c1_l3_t2",
                question: "Rozlož číslo $20$ na součin prvočísel.",
                options: [
                  "$2 \\cdot 10$",
                  "$4 \\cdot 5$",
                  "$2 \\cdot 2 \\cdot 5$",
                  "$2 \\cdot 5 \\cdot 5$",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "c1_l3_t3",
                question: "Které číslo má rozklad $3 \\cdot 5$?",
                options: ["$8$", "$15$", "$35$", "$53$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c1_l3_t4",
                question: "Je zápis $30 = 6 \\cdot 5$ prvočíselným rozkladem?",
                options: [
                  "Ano, je správný.",
                  "Ne, protože $6$ není prvočíslo (dá se rozložit na $2 \\cdot 3$).",
                  "Ne, chybí tam jednička.",
                  "Ano, protože $5$ je prvočíslo.",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c1_l3_t5",
                question:
                  "Jak zapíšeme $2 \\cdot 2 \\cdot 2 \\cdot 3$ zkráceně?",
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
                heading: "Co mají společného?",
                text: "Představ si, že máš dvě tyče dlouhé $12$ metrů a $18$ metrů. Chceš je rozřezat na stejně dlouhé kousky tak, aby ti nic nezbylo a kousky byly co největší. Hledáš Největší Společný Dělitel (značíme $NSD$). Vypíšeme si dělitele:\n- Dělitelé $12$: $1, 2, 3, 4, 6, 12$\n- Dělitelé $18$: $1, 2, 3, 6, 9, 18$\nSpolečná čísla jsou $1, 2, 3, 6$. Největší z nich je $6$. Takže $$NSD(12, 18) = 6$$.",
                image:
                  "[Image comparing divisors of 12 and 18 finding the greatest common one]",
              },
              {
                heading: "Hledání pomocí rozkladu",
                text: "U velkých čísel je vypisování zdlouhavé. Použijeme prvočíselný rozklad! Pravidlo zní: Pro NSD vybereme jen ta prvočísla, která se vyskytují v obou rozkladech, a to v nejnižší mocnině.\n- $12 = 2^2 \\cdot 3$\n- $18 = 2 \\cdot 3^2$\nSpolečná je jedna dvojka a jedna trojka. $$NSD(12, 18) = 2 \\cdot 3 = 6$$",
                image: "placeholder-gcd-venn-diagram",
              },
            ],
            tasks: [
              {
                id: "c1_l4_t1",
                question: "Najdi $NSD(10, 15)$.",
                options: ["$2$", "$5$", "$10$", "$1$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c1_l4_t2",
                question: "Jaký je největší společný dělitel čísel $8$ a $12$?",
                options: ["$2$", "$4$", "$8$", "$24$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c1_l4_t3",
                question:
                  "Čísla, jejichž $NSD$ je $1$ (např. 4 a 9), nazýváme:",
                options: [
                  "Sousoudělná",
                  "Nesoudělná",
                  "Prvočísla",
                  "Nepřátelská",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "c1_l4_t4",
                question:
                  "Máš 20 jablek a 30 hrušek. Chceš udělat stejné balíčky. Kolik nejvíc balíčků uděláš?",
                options: ["$5$", "$10$", "$20$", "$2$"],
                correctAnswer: 1,
                xp: 30,
              },
              {
                id: "c1_l4_t5",
                question: "Najdi $NSD(7, 13)$ (obě jsou prvočísla).",
                options: ["$0$", "$1$", "$7$", "$91$"],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Nejmenší společný násobek (nsn)",
          content: {
            sections: [
              {
                heading: "Závody na okruhu",
                text: "Představ si dva běžce na oválu. První uběhne kolo za $4$ minuty, druhý za $6$ minut. Vystartují spolu. Kdy se znovu potkají na startu? Hledáme nejmenší společný násobek (značíme $nsn$ nebo $n$).\n- Násobky $4$: $4, 8, 12, 16, 20, 24...$\n- Násobky $6$: $6, 12, 18, 24...$\nPoprvé se potkají v $12$. minutě. $$nsn(4, 6) = 12$$.",
                image: "",
              },
              {
                heading: "Pravidlo pro rozklad",
                text: "Pro nalezení $nsn$ pomocí rozkladu platí pravidlo: Sjednotíme všechny prvočíselné faktory a použijeme jejich nejvyšší mocninu. Musíme „pokrýt“ potřeby obou čísel.\n- $12 = 2^2 \\cdot 3$\n- $18 = 2 \\cdot 3^2$\nPotřebujeme $2^2$ (aby se vešla dvanáctka) a $3^2$ (aby se vešla osmnáctka). $$nsn(12, 18) = 2^2 \\cdot 3^2 = 4 \\cdot 9 = 36$$",
                image: "placeholder-lcm-calculation",
              },
            ],
            tasks: [
              {
                id: "c1_l5_t1",
                question: "Najdi nejmenší společný násobek čísel $2$ a $3$.",
                options: ["$2$", "$3$", "$5$", "$6$"],
                correctAnswer: 3,
                xp: 10,
              },
              {
                id: "c1_l5_t2",
                question: "Najdi $nsn(4, 10)$.",
                options: ["$10$", "$20$", "$40$", "$14$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c1_l5_t3",
                question:
                  "Autobus A jezdí každých 10 minut, autobus B každých 15 minut. Teď odjeli spolu. Za jak dlouho pojedou zase spolu?",
                options: [
                  "Za 25 minut",
                  "Za 30 minut",
                  "Za 60 minut",
                  "Za 150 minut",
                ],
                correctAnswer: 1,
                xp: 30,
              },
              {
                id: "c1_l5_t4",
                question: "Které číslo je násobkem čísla $8$?",
                options: ["$4$", "$12$", "$16$", "$20$"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c1_l5_t5",
                question: "Výpočet $nsn(5, 7)$ (obě prvočísla):",
                options: ["$12$", "$35$", "$1$", "$7$"],
                correctAnswer: 1,
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
                text: "Doposud jsme znali přirozená čísla ($1, 2, 3...$). Ale co když je venku mráz nebo máme na účtu dluh? Potřebujeme celá čísla. Představ si nulu jako zrcadlo. Každé kladné číslo má svůj obraz na druhé straně – číslo opačné. Opačné číslo k $5$ je $-5$. Opačné k $-100$ je $100$. Všechna tato čísla tvoří množinu celých čísel (značíme $\\mathbb{Z}$).",
                image: "",
              },
              {
                heading: "Vzdálenost od nuly (Absolutní hodnota)",
                text: "Někdy nás nezajímá, jestli jdeme doleva (do minusu) nebo doprava (do plusu), ale jen to, jak daleko jsme šli. Této vzdálenosti od nuly říkáme absolutní hodnota. Značíme ji svislými čarami, např. $|-5|$. Platí, že $|-5| = 5$ a $|5| = 5$. Vzdálenost nikdy nemůže být záporná! Absolutní hodnota 'požírá' znaménka minus.",
                image: "placeholder-absolute-value-distance",
              },
              {
                heading: "Porovnávání v mrazu",
                text: "Které číslo je větší? $-5$ nebo $-10$? Představ si teplotu. Kdy je větší zima? Při $-10$ stupních. To znamená, že $-10$ je menší číslo než $-5$. Na číselné ose platí jednoduché pravidlo: Číslo, které je více vpravo, je vždy větší. $$ -100 < -1 < 0 < 5 $$",
                image: "",
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
                id: "c2_l1_t2",
                question: "Které číslo je opačné k číslu $-15$?",
                options: ["$15$", "$-15$", "$0$", "$1/15$"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c2_l1_t3",
                question: "Který zápis je pravdivý?",
                options: ["$-5 > -2$", "$-10 > 0$", "$-50 < -20$", "$0 < -5$"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "c2_l1_t4",
                question: "Seřaď čísla od nejmenšího: $2, -5, 0, -1$",
                options: [
                  "$0, -1, -5, 2$",
                  "$-5, -1, 0, 2$",
                  "$-1, -5, 0, 2$",
                  "$2, 0, -1, -5$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c2_l1_t5",
                question: "Vypočítej: $|-3| + |2|$",
                options: ["$-1$", "$1$", "$5$", "$-5$"],
                correctAnswer: 2,
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
                text: "Jak spočítat $-5 + 2$ nebo $-3 - 4$? Nejlepší je představit si peníze.\n- Minus je dluh. Plus je majetek.\n- $-5 + 2$: Mám dluh 5 korun, vydělám 2 koruny. Splatím část dluhu, ale stále dlužím 3 koruny. Výsledek: $-3$.\n- $-3 - 4$: Mám dluh 3 koruny a udělám další dluh 4 koruny. Můj dluh se prohloubí. Výsledek: $-7$.",
                image: "[Image illustrating debt and earnings coins]",
              },
              {
                heading: "Dvě znaménka vedle seba",
                text: "Co když se potkají dvě znaménka, třeba $5 - (-2)$? \n- Plus a plus se mají rádi $\\rightarrow +$\n- Minus a minus se 'popere' a vznikne $\\rightarrow +$ (odebrat dluh znamená zbohatnout!)\n- Plus a minus je vždy $\\rightarrow -$\nTakže: $$ 5 - (-2) = 5 + 2 = 7 $$",
                image: "placeholder-signs-rules",
              },
              {
                heading: "Násobení a dělení: Přítel a nepřítel",
                text: "Pro násobení a dělení platí jednoduchá 'sociální' pravidla:\n- Přítel mého přítele je můj přítel: $(+) \\cdot (+) = +$\n- Nepřítel mého nepřítele je můj přítel: $(-) \\cdot (-) = +$\n- Přítel mého nepřítele je můj nepřítel: $(+) \\cdot (-) = -$\nPokud je v součinu sudý počet minusů, výsledek je kladný. Pokud lichý, je záporný.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "c2_l2_t1",
                question: "Vypočítej: $-5 - 3$",
                options: ["$-2$", "$-8$", "$2$", "$8$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c2_l2_t2",
                question: "Vypočítej: $10 + (-4)$",
                options: ["$14$", "$6$", "$-6$", "$-14$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c2_l2_t3",
                question: "Co vznikne z $3 - (-3)$?",
                options: ["$0$", "$6$", "$-6$", "$9$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c2_l2_t4",
                question: "Vypočítej: $(-2) \\cdot (-5)$",
                options: ["$-10$", "$10$", "$-7$", "$7$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c2_l2_t5",
                question: "Vypočítej: $-20 : 4$",
                options: ["$5$", "$-5$", "$4$", "$-0,2$"],
                correctAnswer: 1,
                xp: 15,
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
                text: "Zlomky jsou jako chameleoni. $\\frac{1}{2}$ vypadá jinak než $\\frac{2}{4}$ nebo $\\frac{50}{100}$, ale je to pořád ta samá polovina pizzy. Této proměně říkáme rozšiřování (násobíme čitatele i jmenovatele stejným číslem) nebo krácení (dělíme čitatele i jmenovatele stejným číslem). Hodnota zlomku se tím nemění!",
                image:
                  "[Image showing 1/2 pizza, 2/4 pizza and 4/8 pizza being equal size]",
              },
              {
                heading: "Základní tvar",
                text: "V matematice je slušnost uvádět výsledky v základním tvaru. To je stav, kdy už zlomek nejde dál krátit (čitatel a jmenovatel jsou nesoudělná čísla). Například nám vyjde $\\frac{8}{12}$. Vidíme, že obě čísla jdou dělit čtyřmi. $$ \\frac{8:4}{12:4} = \\frac{2}{3} $$ Zlomek $\\frac{2}{3}$ už krátit nejde, to je základní tvar.",
                image: "placeholder-fraction-simplification",
              },
            ],
            tasks: [
              {
                id: "c2_l3_t1",
                question:
                  "Který zlomek má stejnou hodnotu jako $\\frac{1}{3}$?",
                options: [
                  "$\\frac{2}{6}$",
                  "$\\frac{1}{6}$",
                  "$\\frac{3}{1}$",
                  "$\\frac{2}{5}$",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c2_l3_t2",
                question: "Převeď zlomek $\\frac{10}{20}$ na základní tvar.",
                options: [
                  "$\\frac{5}{10}$",
                  "$\\frac{2}{4}$",
                  "$\\frac{1}{2}$",
                  "$\\frac{100}{200}$",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c2_l3_t3",
                question:
                  "Čím musíme rozšířit $\\frac{3}{4}$, abychom dostali jmenovatel $12$?",
                options: ["Dvěma", "Třemi", "Čtyřmi", "Pěti"],
                correctAnswer: 1,
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
                question: "Který zlomek UŽ NEJDE krátit?",
                options: [
                  "$\\frac{4}{6}$",
                  "$\\frac{7}{9}$",
                  "$\\frac{10}{100}$",
                  "$\\frac{12}{4}$",
                ],
                correctAnswer: 1,
                xp: 20,
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
                text: "Nemůžeme sčítat hrušky s jablky, a stejně tak nemůžeme sčítat zlomky s různými jmenovateli (třetiny s pětinami). Musíme je nejdřív převést na společného jmenovatele (nejlépe nejmenší společný násobek). \n$$ \\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6} $$ \nČitatele sečteme, ale jmenovatel zůstává stejný!",
                image:
                  "[Image illustrating addition of fractions using pie chart segments]",
              },
              {
                heading: "Násobení: Přímá cesta",
                text: "Násobení je odměna za dřinu se sčítáním. Tady nic nepřevádíme! Prostě vynásobíme horní s horním (čitatele) a dolní s dolním (jmenovatele). \n$$ \\frac{2}{3} \\cdot \\frac{4}{5} = \\frac{2 \\cdot 4}{3 \\cdot 5} = \\frac{8}{15} $$ \nPřed násobením je chytré zkontrolovat, jestli nejde něco zkrátit křížem.",
                image: "placeholder-fraction-multiplication",
              },
              {
                heading: "Dělení: Salto vzad",
                text: "Dělení zlomků vlastně neexistuje. Místo toho 'násobíme převrácenou hodnotou'. Druhý zlomek prostě otočíme nohama vzhůru (uděláme z něj převrácenou hodnotu) a změníme dělení na násobení.\n$$ \\frac{2}{3} : \\frac{5}{7} = \\frac{2}{3} \\cdot \\frac{7}{5} = \\frac{14}{15} $$",
                image:
                  "[Image showing the flip of the second fraction in division]",
              },
            ],
            tasks: [
              {
                id: "c2_l4_t1",
                question: "Vypočítej: $\\frac{1}{4} + \\frac{1}{4}$",
                options: [
                  "$\\frac{2}{8}$",
                  "$\\frac{1}{8}$",
                  "$\\frac{2}{4}$ (což je $\\frac{1}{2}$)",
                  "$\\frac{1}{20}$",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c2_l4_t2",
                question:
                  "Jaký je společný jmenovatel pro $\\frac{1}{2}$ a $\\frac{1}{5}$?",
                options: ["$7$", "$5$", "$2$", "$10$"],
                correctAnswer: 3,
                xp: 15,
              },
              {
                id: "c2_l4_t3",
                question: "Vypočítej: $\\frac{2}{3} \\cdot \\frac{1}{2}$",
                options: [
                  "$\\frac{2}{6}$ (což je $\\frac{1}{3}$)",
                  "$\\frac{3}{5}$",
                  "$\\frac{2}{5}$",
                  "$\\frac{4}{3}$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "c2_l4_t4",
                question: "Jak vypočítáš $\\frac{1}{2} : \\frac{1}{3}$?",
                options: [
                  "Jako $\\frac{1}{2} \\cdot \\frac{1}{3}$",
                  "Jako $\\frac{1}{2} \\cdot \\frac{3}{1}$",
                  "Jako $\\frac{2}{1} \\cdot \\frac{1}{3}$",
                  "Nejde to",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c2_l4_t5",
                question: "Vypočítej $\\frac{3}{8} - \\frac{1}{8}$",
                options: [
                  "$\\frac{2}{0}$",
                  "$\\frac{2}{8}$ (což je $\\frac{1}{4}$)",
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
                text: "Zlomek a desetinné číslo jsou jen dva způsoby zápisu téže hodnoty. Někdy se hodí jeden, jindy druhý.\n- Zlomek je přesný. $\\frac{1}{3}$ je naprosto přesná třetina.\n- Desetinné číslo je praktické pro peníze a měření. $0,33$ je přibližná hodnota. \nZlomek převedeme na desetinné číslo tak, že prostě vydělíme čitatele jmenovatelem ($1 : 3$).",
                image: "[Image contrasting 1/3 vs 0.333...]",
              },
              {
                heading: "Konečná vs. nekonečná čísla",
                text: "Některé zlomky jsou hodné a 'skončí'. Třeba $\\frac{1}{2} = 0,5$. Jiné jsou zlobivé a táhnou se do nekonečna. Třeba $\\frac{1}{3} = 0,3333...$ Těm říkáme periodická čísla. Tu opakující se část značíme pruhem nad číslem: $0,\\overline{3}$. V takovém případě je pro počítání vždy lepší nechat číslo ve zlomku!",
                image: "placeholder-periodic-numbers",
              },
            ],
            tasks: [
              {
                id: "c2_l5_t1",
                question: "Převeď $\\frac{1}{2}$ na desetinné číslo.",
                options: ["$0,2$", "$0,5$", "$1,2$", "$0,52$"],
                correctAnswer: 1,
                xp: 10,
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
                id: "c2_l5_t3",
                question: "Který tvar je přesnější pro zápis jedné třetiny?",
                options: [
                  "$0,33$",
                  "$0,333$",
                  "$\\frac{1}{3}$",
                  "Všechny jsou stejně přesné",
                ],
                correctAnswer: 2,
                xp: 15,
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
                xp: 20,
              },
              {
                id: "c2_l5_t5",
                question:
                  "Vypočítej $\\frac{1}{3} + 0,3$ (nápověda: převeď $0,3$ na $\\frac{3}{10}$).",
                options: [
                  "$0,6$",
                  "$\\frac{4}{13}$",
                  "$\\frac{19}{30}$",
                  "$1$",
                ],
                correctAnswer: 2,
                xp: 30,
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
                text: "Poměr nám říká, v jakém vztahu jsou dvě veličiny. Představ si, že mícháš šťávu s vodou v poměru $1:4$ (čteme 'jedna ku čtyřem'). To znamená, že na $1$ díl šťávy dáš $4$ díly vody. Celý nápoj má pak $5$ dílů. Poměr můžeme krátit a rozšiřovat úplně stejně jako zlomky. Poměr $10:20$ je to samé jako $1:2$.",
                image:
                  "[Image showing mixing juice concentrate and water in ratio 1:4]",
              },
              {
                heading: "Rozdělování lupu",
                text: "Často potřebujeme něco rozdělit nerovnoměrně. Představ si, že babička rozdělí $1,000$ Kč mezi Petra a Janu v poměru $2:3$. Jak na to? \n1. Sečteme díly: $2 + 3 = 5$ dílů celkem.\n2. Zjistíme hodnotu jednoho dílu: $1,000 : 5 = 200$ Kč.\n3. Vynásobíme díly pro každého: Petr dostane $2 \\cdot 200 = 400$ Kč, Jana $3 \\cdot 200 = 600$ Kč.",
                image: "placeholder-ratio-division-money",
              },
              {
                heading: "Měřítko mapy",
                text: "Na mapě najdeš měřítko, třeba $1 : 50\\,000$. To je vlastně poměr! Říká nám, že $1$ cm na mapě odpovídá $50\\,000$ cm ve skutečnosti. Kolik to je? Převedeme na metry (škrtneme 2 nuly) $\\rightarrow 500$ m. Takže každý centimetr na mapě je půl kilometru venku.",
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
                id: "c3_l1_t2",
                question: "Rozděl číslo $20$ v poměru $1 : 4$.",
                options: [
                  "$5$ a $15$",
                  "$4$ a $16$",
                  "$2$ a $18$",
                  "$1$ a $4$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c3_l1_t3",
                question:
                  "Měřítko je $1 : 100$. Jak dlouhá je ve skutečnosti úsečka, která má na výkresu $5$ cm?",
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
                id: "c3_l1_t4",
                question: "Který poměr má stejnou hodnotu jako $2 : 5$?",
                options: ["$4 : 10$", "$5 : 2$", "$20 : 500$", "$1 : 3$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c3_l1_t5",
                question:
                  "Mícháš beton: 1 díl cementu, 2 díly písku, 3 díly štěrku. Kolik lopat materiálu celkem potřebuješ na jednu dávku?",
                options: ["$3$", "$5$", "$6$", "$10$"],
                correctAnswer: 2,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Přímá a nepřímá úměrnost",
          content: {
            sections: [
              {
                heading: "Čím víc, tím víc (Přímá)",
                text: "To je jednoduchá logika nákupů. Čím víc rohlíků koupím, tím víc zaplatím. Pokud $1$ rohlík stojí $3$ Kč, $10$ rohlíků stojí $30$ Kč. Kolikrát se zvětší počet kusů, tolikrát se zvětší cena. Grafem přímé úměrnosti je přímka, která vychází z nuly. Vzorec je $y = k \\cdot x$.",
                image: "",
              },
              {
                heading: "Čím víc, tím míň (Nepřímá)",
                text: "Tady pozor! Představ si bagr, který kope jámu. Jeden bagr to udělá za $10$ hodin. Když přijede druhý bagr (je jich $2\\times$ víc), bude jim to trvat déle? Ne! Bude to hotové dříve ($2\\times$ rychleji). Dva bagry to stihnou za $5$ hodin. Kolikrát zvětšíme počet pracantů, tolikrát se zmenší čas. Grafem je křivka zvaná hyperbola.",
                image: "",
              },
              {
                heading: "Jak to poznat?",
                text: "Vždy si řekni selským rozumem: Když zdvojnásobím první věc, co se stane s druhou? \n- Zdvihne se taky? $\\rightarrow$ Přímá úměra.\n- Klesne na polovinu? $\\rightarrow$ Nepřímá úměra.",
                image: "placeholder-proportions-comparison",
              },
            ],
            tasks: [
              {
                id: "c3_l2_t1",
                question:
                  "Urči typ úměry: Počet koupených jablek a jejich cena.",
                options: ["Přímá úměra", "Nepřímá úměra", "Žádná úměra"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c3_l2_t2",
                question:
                  "Urči typ úměry: Rychlost auta a čas, za který dojede do cíle.",
                options: [
                  "Přímá úměra (čím rychleji, tím déle)",
                  "Nepřímá úměra (čím rychleji, tím dříve)",
                  "Nezávisí to na sobě",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c3_l2_t3",
                question:
                  "3 dělníci postaví zeď za 12 hodin. Jak dlouho to bude trvat 6 dělníkům?",
                options: ["24 hodin", "6 hodin", "4 hodiny", "12 hodin"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c3_l2_t4",
                question: "Co je grafem přímé úměrnosti?",
                options: [
                  "Křivka",
                  "Kruh",
                  "Přímka jdoucí počátkem",
                  "Vlnovka",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c3_l2_t5",
                question:
                  "1 kg barvy vystačí na $5\\,m^2$. Kolik $m^2$ natřu se 4 kg?",
                options: [
                  "$20\\,m^2$",
                  "$10\\,m^2$",
                  "$1,25\\,m^2$",
                  "$9\\,m^2$",
                ],
                correctAnswer: 0,
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
                text: "Trojčlenka je postup, jak vypočítat neznámou, když známe tři údaje. \nZápis vypadá takto:\n$5$ kg ........... $200$ Kč\n$7$ kg ........... $x$ Kč\nNejdůležitější krok: Určit šipky! Pokud je to přímá úměra, šipky jdou stejným směrem (obě nahoru). Pokud nepřímá, jdou proti sobě. Pak už jen sestavíme rovnici podle šipek.",
                image:
                  "[Image showing rule of three setup with arrows for direct proportion]",
              },
              {
                heading: "Křížové pravidlo (Přímá úměra)",
                text: "U přímé úměry (např. cena zboží) funguje jednoduchý trik: Vynásob čísla na uhlopříčce, kde nemáš $x$, a vyděl tím číslem, které zbývá. \nV příkladu výše: $x = \\frac{7 \\cdot 200}{5}$.\n$x = \\frac{1400}{5} = 280$ Kč.",
                image: "placeholder-cross-multiplication",
              },
            ],
            tasks: [
              {
                id: "c3_l3_t1",
                question: "Kdy píšeme šipky u trojčlenky opačným směrem?",
                options: ["Vždy", "U přímé úměry", "U nepřímé úměry", "Nikdy"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c3_l3_t2",
                question: "Vypočítej $x$: \n3 ks ... 30 Kč \n5 ks ... x Kč",
                options: ["40 Kč", "50 Kč", "60 Kč", "150 Kč"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c3_l3_t3",
                question:
                  "Auto spotřebuje 6 litrů na 100 km. Kolik spotřebuje na 250 km?",
                options: ["12 litrů", "15 litrů", "18 litrů", "20 litrů"],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "c3_l3_t4",
                question:
                  "Trojčlenka pro nepřímou úměru: 4 lidé ... 10 hod. Jak dlouho 2 lidé?",
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
                id: "c3_l3_t5",
                question:
                  "Z 5 kg mouky upeču 20 housek. Kolik housek upeču z 8 kg?",
                options: ["32", "30", "40", "25"],
                correctAnswer: 0,
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
                text: "Slovo procento pochází z latinského 'per centum', což znamená 'ze sta'. Jedno procento ($1\\,\\%$) je prostě jedna setina celku ($\\frac{1}{100}$ nebo $0,01$). Celý dort je $100\\,\\%$. Polovina dortu je $50\\,\\%$. \nProč je používáme? Protože se s nimi lépe porovnává. Říct 'sleva $20\\,\\%$' je jasnější než říct 'sleva jedna pětina'.",
                image: "",
              },
              {
                heading: "Počítání přes 1 %",
                text: "Jak vypočítat $10\\,\\%$ nebo $5\\,\\%$ z něčeho? Univerzální návod: Vždy si nejdřív vypočítej $1\\,\\%$. To uděláš tak, že celek vydělíš číslem $100$ (posuneš desetinnou čárku o dvě místa doleva). \nChci $7\\,\\%$ z čísla $200$:\n1. $1\\,\\%$ z $200$ je $2$.\n2. $7\\,\\%$ je $7 \\cdot 2 = 14$.",
                image: "placeholder-calculate-one-percent",
              },
            ],
            tasks: [
              {
                id: "c3_l4_t1",
                question: "Kolik je $1\\,\\%$ z čísla $500$?",
                options: ["$50$", "$5$", "$0,5$", "$1$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c3_l4_t2",
                question: "Jak zapíšeš polovinu pomocí procent?",
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
                id: "c3_l4_t3",
                question: "Co znamená $100\\,\\%$?",
                options: ["Nic", "Polovina", "Celek", "Dvojnásobek"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c3_l4_t4",
                question: "Vypočítej $20\\,\\%$ z $50$.",
                options: ["$10$", "$20$", "$25$", "$5$"],
                correctAnswer: 0,
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
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Počítání s procenty",
          content: {
            sections: [
              {
                heading: "Základ, Část, Počet procent",
                text: "V každé úloze na procenta vystupují tři herci:\n1. Základ ($z$): To je celek, odpovídá $100\\,\\%$. (Např. původní cena).\n2. Procentová část ($č$): To je kousek základu. (Např. výše slevy v korunách).\n3. Počet procent ($p$): To je číslo se znakem $%$. (Např. $20\\,\\%$).\nVztah mezi nimi je: $$ č = \\frac{p \\cdot z}{100} $$",
                image: "",
              },
              {
                heading: "Pozor na chytáky!",
                text: "Tohle je klasická past: Boty stojí $1000$ Kč. Zdražíme je o $10\\,\\%$ (na $1100$ Kč). Pak je zlevníme o $10\\,\\%$. Budou stát zase $1000$ Kč? NE! \nProtože při slevě počítáme $10\\,\\%$ už z nové ceny ($1100$). $10\\,\\%$ z $1100$ je $110$. Nová cena bude $1100 - 110 = 990$ Kč. Boty jsou levnější než na začátku! Základ se totiž v průběhu změnil.",
                image: "placeholder-percentage-trap-visualization",
              },
            ],
            tasks: [
              {
                id: "c3_l5_t1",
                question: "Co je 'základ' v procentovém počtu?",
                options: [
                  "$1\\,\\%$",
                  "Hodnota odpovídající $100\\,\\%$",
                  "Sleva",
                  "Výsledek",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c3_l5_t2",
                question:
                  "Tričko stálo $200$ Kč a zlevnili ho o $50$ Kč. Kolik procent byla sleva?",
                options: [
                  "$50\\,\\%$",
                  "$25\\,\\%$",
                  "$20\\,\\%$",
                  "$10\\,\\%$",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "c3_l5_t3",
                question:
                  "Výrobek zdražil ze $100$ Kč na $120$ Kč. O kolik procent zdražil?",
                options: [
                  "$20\\,\\%$",
                  "$120\\,\\%$",
                  "$2\\,\\%$",
                  "$12\\,\\%$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "c3_l5_t4",
                question: "Kolik je $150\\,\\%$ z čísla $10$?",
                options: ["$1,5$", "$15$", "$150$", "$25$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c3_l5_t5",
                question:
                  "Mám $200$ Kč, to je $50\\,\\%$ ceny dárku. Kolik stojí dárek?",
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
                text: "Proč říkáme 'na druhou'? Představ si čtverec o straně $a$. Jeho obsah vypočítáme jako $a \\cdot a$. Abychom to nemuseli psát dvakrát, matematici vymysleli zkratku: malé číslo vpravo nahoře. Píšeme $a^2$. Čteme to 'a na druhou'. Tedy: $$ 5^2 = 5 \\cdot 5 = 25 $$ Mocnina nám říká: Vezmi toto číslo a vynásob ho samo sebou.",
                image: "",
              },
              {
                heading: "Past se závorkou (Minusy)",
                text: "Tady chybuje 90 % žáků! Jaký je rozdíl mezi $(-3)^2$ a $-3^2$?\n- $(-3)^2$ znamená $(-3) \\cdot (-3)$. Minus krát minus dává plus. Výsledek je $9$.\n- $-3^2$ znamená 'minus opisuji a trojku umocním'. Tedy $- (3 \\cdot 3)$. Výsledek je $-9$.\nZávorka rozhoduje o tom, jestli se minus týká mocniny, nebo ne!",
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
                id: "c4_l1_t2",
                question: "Vypočítej $(-4)^2$.",
                options: ["$16$", "$-16$", "$8$", "$-8$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c4_l1_t3",
                question: "Vypočítej $-5^2$ (pozor, bez závorky!).",
                options: ["$25$", "$-25$", "$10$", "$-10$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c4_l1_t4",
                question: "Kolik je $0^2$?",
                options: ["$0$", "$1$", "$2$", "Nelze vypočítat"],
                correctAnswer: 0,
                xp: 10,
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
                text: "Zatímco druhá mocnina je plocha (2D), třetí mocnina je prostor (3D). Představ si krychli o hraně $a$. Její objem je $a \\cdot a \\cdot a$. Zkráceně $a^3$. Čteme 'a na třetí'. $$ 2^3 = 2 \\cdot 2 \\cdot 2 = 8 $$ Pozor, nepleť si to s $2 \\cdot 3$ (což je 6). Mocnina roste mnohem rychleji!",
                image: "",
              },
              {
                heading: "Lichý exponent znaménko nezmění",
                text: "U druhé mocniny se minus ztratil ($(-2)^2 = 4$). U třetí mocniny je to jinak! $$ (-2)^3 = (-2) \\cdot (-2) \\cdot (-2) $$ První dva minusy dají plus, ale ten třetí minus to zase 'zkazí'. Výsledek je $-8$. Pamatuj: Sudá mocnina 'požírá' minus, lichá mocnina ho 'vyplivne' ven.",
                image: "placeholder-odd-exponent-sign",
              },
            ],
            tasks: [
              {
                id: "c4_l2_t1",
                question: "Vypočítej $1^3$.",
                options: ["$1$", "$3$", "$0$", "$111$"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c4_l2_t2",
                question: "Vypočítej $3^3$.",
                options: ["$9$", "$27$", "$6$", "$33$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c4_l2_t3",
                question: "Jaké znaménko bude mít výsledek $(-5)^3$?",
                options: [
                  "Kladné (+)",
                  "Záporné (-)",
                  "Žádné",
                  "Záleží na náladě",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c4_l2_t4",
                question: "Kolik je $10^3$?",
                options: ["$30$", "$100$", "$1000$", "$300$"],
                correctAnswer: 2,
                xp: 10,
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
                text: "Představ si, že máš vypočítat $2^3 \\cdot 2^4$. Můžeš to rozepsat: $$(2 \\cdot 2 \\cdot 2) \\cdot (2 \\cdot 2 \\cdot 2 \\cdot 2)$$ Celkem vidíš sedm dvojek. Výsledek je $2^7$. Matematici si všimli pravidla: Když násobíme mocniny se stejným základem, exponenty se sčítají ($3+4=7$). $$ a^m \\cdot a^n = a^{m+n} $$",
                image:
                  "[Image showing algebraic expansion of exponents multiplication]",
              },
              {
                heading: "Dělení a mocnina mocniny",
                text: "Podobně to funguje u dělení, jen exponenty odčítáme. $$ \frac{2^5}{2^3} = 2^{5-3} = 2^2 $$ A co když máme mocninu na mocninu? $(2^3)^2$. To znamená $(2^3) \\cdot (2^3) = 2^{3+3} = 2^6$. Zkrátka exponenty násobíme. $$ (a^m)^n = a^{m \\cdot n} $$",
                image: "placeholder-exponent-rules",
              },
            ],
            tasks: [
              {
                id: "c4_l3_t1",
                question: "Zjednoduš: $x^2 \\cdot x^3$",
                options: ["$x^6$", "$x^5$", "$2x^5$", "$x^1$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c4_l3_t2",
                question: "Zjednoduš: $10^6 : 10^2$",
                options: ["$10^3$", "$10^4$", "$10^8$", "$10^{12}$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c4_l3_t3",
                question: "Vypočítej: $(2^2)^3$",
                options: ["$2^5$", "$2^6$", "$2^1$", "$4^3$ (což je totéž)"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c4_l3_t4",
                question: "Kolik je $5^2 \\cdot 5^0$? (Pamatuj, $x^0 = 1$)",
                options: ["$5^2$", "$5^0$", "$5^{20}$", "$0$"],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "c4_l3_t5",
                question: "Platí pravidlo $a^2 + a^3 = a^5$?",
                options: [
                  "Ano",
                  "Ne, u sčítání to neplatí!",
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
                text: "Mocniny desítky jsou úžasné. Exponent nám přesně říká, kolik nul číslo má. \n- $10^1 = 10$ (jedna nula)\n- $10^3 = 1000$ (tři nuly)\n- $10^6 = 1\\,000\\,000$ (milion, šest nul)\nJe to nejrychlejší způsob, jak napsat obrovská čísla, třeba počet atomů ve vesmíru.",
                image:
                  "[Image comparing standard notation and scientific notation of one million]",
              },
              {
                heading: "Vědecký zápis (a \\cdot 10^n)",
                text: "Vědci jsou líní psát nuly. Místo $300\\,000\\,000$ (rychlost světla) napíší $3 \\cdot 10^8$. Zápis má vždy tvar: jedno číslo od 1 do 10 krát mocnina desítky. \nNapř. $5\\,200$ zapíšeme jako $5,2 \\cdot 10^3$. Desetinnou čárku jsme posunuli o 3 místa.",
                image: "placeholder-scientific-notation-shift",
              },
            ],
            tasks: [
              {
                id: "c4_l4_t1",
                question: "Jak zapíšeš číslo milion mocninou?",
                options: ["$10^5$", "$10^6$", "$10^9$", "$100^2$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c4_l4_t2",
                question: "Co znamená $3 \\cdot 10^2$?",
                options: ["$30$", "$300$", "$3000$", "$60$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c4_l4_t3",
                question: "Převeď $4\\,500$ na vědecký zápis.",
                options: [
                  "$45 \\cdot 10^2$",
                  "$4,5 \\cdot 10^3$",
                  "$0,45 \\cdot 10^4$",
                  "$4,5 \\cdot 10^2$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c4_l4_t4",
                question: "Kolik nul má číslo $10^9$ (miliarda)?",
                options: ["$6$", "$9$", "$12$", "$10$"],
                correctAnswer: 1,
                xp: 10,
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
                heading: "Hledáme kořen",
                text: "Odmocňování je opakem mocnění. Představ si, že znáš obsah čtverce ($25$ m²) a hledáš délku jeho strany. Ptáš se: 'Které číslo musím vynásobit samo se sebou, abych dostal 25?' Odpověď je $5$. Zapíšeme to pomocí znaku odmocniny: $$ \\sqrt{25} = 5 $$",
                image: "",
              },
              {
                heading: "Zákaz vstupu pro záporná čísla",
                text: "Existuje $\\sqrt{-9}$? Hledáme číslo, které když vynásobíme samo sebou, dá $-9$. \n- $3 \\cdot 3 = 9$ (špatně)\n- $(-3) \\cdot (-3) = 9$ (taky špatně!)\nV reálných číslech nelze odmocnit záporné číslo. Pod odmocninou musí být vždy nezáporné číslo.",
                image: "placeholder-no-negative-roots",
              },
              {
                heading: "Odmocnina součinu a podílu",
                text: "Stejně jako u mocnin, i tady platí pravidla pro 'roztržení' příkladu. $$ \\sqrt{4 \\cdot 9} = \\sqrt{4} \\cdot \\sqrt{9} = 2 \\cdot 3 = 6 $$ Pozor! Toto neplatí pro sčítání! $\\sqrt{16 + 9}$ není $4 + 3$. $\\sqrt{25}$ je $5$, zatímco $4+3$ je $7$.",
                image: "[Image illustrating sqrt(a*b) vs sqrt(a+b) error]",
              },
            ],
            tasks: [
              {
                id: "c4_l5_t1",
                question: "Vypočítej $\\sqrt{36}$.",
                options: ["$6$", "$18$", "$4$", "$72$"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "c4_l5_t2",
                question: "Vypočítej $\\sqrt{100}$.",
                options: ["$50$", "$10$", "$20$", "$1$"],
                correctAnswer: 1,
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
                id: "c4_l5_t4",
                question: "Vypočítej $\\sqrt{9} + \\sqrt{16}$.",
                options: ["$\\sqrt{25} = 5$", "$3 + 4 = 7$", "$12$", "$25$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c4_l5_t5",
                question: "Odhadni $\\sqrt{50}$. Mezi kterými čísly leží?",
                options: [
                  "Mezi 4 a 5",
                  "Mezi 5 a 6",
                  "Mezi 7 a 8 (protože $7^2=49$)",
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
                text: "Představ si, že programuješ hru. Nevíš, kolik bodů hráč získá, ale víš, že za každou minci dostane 10 bodů. Počet mincí se mění – je to proměnná. V matematice ji označujeme písmenem, nejčastěji $x, y, a$ nebo $b$. Výraz $10 \\cdot x$ nám říká: 'Vezmi počet mincí (ať je jakýkoliv) a vynásob ho deseti.'",
                image: "",
              },
              {
                heading: "Dosazování: Otevíráme krabici",
                text: "Výraz sám o sobě nemá jednu hodnotu. Hodnotu získá až ve chvíli, kdy za písmeno dosadíme konkrétní číslo. Mějme výraz $2x + 3$. \n- Když $x = 1$, hodnota je $2 \\cdot 1 + 3 = 5$. \n- Když $x = 5$, hodnota je $2 \\cdot 5 + 3 = 13$. \nTomu říkáme 'určit hodnotu výrazu'.",
                image: "placeholder-evaluating-expressions",
              },
            ],
            tasks: [
              {
                id: "c5_l1_t1",
                question: "Co znamená $2x$?",
                options: [
                  "$2 + x$",
                  "$2 \\cdot x$ (krát)",
                  "Dvojciferné číslo s x",
                  "$x \\cdot x$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c5_l1_t2",
                question: "Urči hodnotu výrazu $x - 5$ pro $x = 12$.",
                options: ["$7$", "$17$", "$60$", "$-7$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "c5_l1_t3",
                question: "Urči hodnotu výrazu $a^2$ pro $a = -3$.",
                options: ["$-9$", "$9$", "$6$", "$-6$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c5_l1_t4",
                question: "Jak zapíšeš 'číslo o 5 větší než x'?",
                options: ["$5 \\cdot x$", "$x - 5$", "$x + 5$", "$5x$"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c5_l1_t5",
                question: "Který výraz má pro $x=2$ hodnotu $10$?",
                options: ["$2x + 6$", "$5x - 1$", "$x^2 + 5$", "$3x$"],
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
                text: "Při sčítání výrazů platí zlaté pravidlo: Sčítat můžeme jen členy se stejnou proměnnou ve stejné mocnině. Představ si $x$ jako jablka a $y$ jako hrušky. \n$$ 3x + 2y + 5x - y $$\nMám 3 jablka, přidám 5 jablek $\\rightarrow$ mám $8x$. \nMám 2 hrušky, sním 1 hrušku $\\rightarrow$ mám $1y$. \nVýsledek: $8x + y$. Nemůžeme sečíst $x$ a $y$ dohromady!",
                image:
                  "[Image illustrating grouping like terms using fruits x-apples and y-pears]",
              },
              {
                heading: "Pozor na mocniny!",
                text: "Stejně tak nemůžeme sčítat $x$ a $x^2$. Jsou to jiné druhy ovoce! $x$ je délka (čára), $x^2$ je čtverec (plocha). \n$$ 2x^2 + 3x + 4x^2 - x = 6x^2 + 2x $$\nSečetli jsme čtverce se čtverci a čáry s čárami.",
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
                id: "c5_l2_t2",
                question: "Zjednoduš: $5x - 2y + 3x$",
                options: ["$6xy$", "$8x - 2y$", "$6x + y$", "$8x^2 - 2y$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c5_l2_t3",
                question: "Lze sečíst $x^2 + x$?",
                options: [
                  "Ano, je to $2x^3$",
                  "Ano, je to $x^3$",
                  "Ne, nelze zjednodušit",
                  "Ano, je to $2x$",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c5_l2_t4",
                question: "Odstraň závorku (pozor na minus): $-(3a - 2b)$",
                options: ["$-3a - 2b$", "$-3a + 2b$", "$3a + 2b$", "$-3a - 2$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c5_l2_t5",
                question: "Sečti: $(2x + 1) + (3x - 5)$",
                options: ["$5x + 6$", "$5x - 4$", "$6x - 5$", "$5x + 4$"],
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
                text: "Když násobíme závorku číslem nebo jednočlenem, musíme vynásobit každý člen v závorce. Říkáme tomu roznásobování. \n$$ 3 \\cdot (x + 4) = 3 \\cdot x + 3 \\cdot 4 = 3x + 12 $$ \nPozor na znaménka! $-2(x - 3) = -2x + 6$ (protože minus krát minus dává plus).",
                image:
                  "[Image illustrating distributive property a(b+c) = ab + ac with rectangle areas]",
              },
              {
                heading: "Každý s každým (Závorka krát závorka)",
                text: "Když se potkají dvě závorky, musí se každý člen z první závorky pozdravit s každým členem z druhé závorky. \n$$ (x + 2)(y + 3) = xy + 3x + 2y + 6 $$ \nVzniknou nám 4 členy. Pokud to jde, nakonec je ještě sečteme a zjednodušíme.",
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
                id: "c5_l3_t2",
                question: "Vynásob: $x(x + 5)$",
                options: ["$2x + 5$", "$x^2 + 5$", "$x^2 + 5x$", "$x + 5x$"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c5_l3_t3",
                question: "Vynásob: $(x+1)(x+2)$",
                options: [
                  "$x^2 + 2$",
                  "$x^2 + 3x + 2$",
                  "$x^2 + 2x + 1$",
                  "$2x + 3$",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "c5_l3_t4",
                question: "Pozor na minus: $-3(2x - 4)$",
                options: ["$-6x - 12$", "$-6x + 12$", "$6x - 12$", "$-6x - 4$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c5_l3_t5",
                question: "Co vznikne z $(a+b)(c+d)$?",
                options: [
                  "$ac + bd$",
                  "$ab + cd$",
                  "$ac + ad + bc + bd$",
                  "$a+b+c+d$",
                ],
                correctAnswer: 2,
                xp: 20,
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
                text: "Některá násobení se v matematice opakují tak často, že se vyplatí naučit se výsledek nazpaměť. Říkáme jim vzorce. První dva jsou pro druhou mocninu součtu a rozdílu: \n1. $(a + b)^2 = a^2 + 2ab + b^2$ \n2. $(a - b)^2 = a^2 - 2ab + b^2$ \nNejčastější chyba? Zapomenout na ten prostřední člen ($2ab$)! $(a+b)^2$ opravdu není $a^2 + b^2$.",
                image:
                  "[Image showing geometric proof of (a+b)^2 as a large square composed of two squares and two rectangles]",
              },
              {
                heading: "Rozdíl čtverců",
                text: "Třetí vzorec je nejužitečnější. Co se stane, když násobíme součet a rozdíl stejných čísel? \n$$ (a + b)(a - b) = a^2 - b^2 $$ \nProstřední členy se odečtou a zmizí. Tento vzorec budeme hodně potřebovat při krácení zlomků.",
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
                  "$x^2 - 6x + 9$",
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
                id: "c5_l4_t4",
                question: "Kde je chyba? $(2x)^2 = 2x^2$",
                options: [
                  "Chyba není",
                  "Mocnina se týká i dvojky, má být $4x^2$",
                  "Má být $2x$",
                  "Má být $4x$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c5_l4_t5",
                question: "Jaký je prostřední člen u $(3 + x)^2$?",
                options: ["$3x$", "$6x$", "$9x$", "$x^2$"],
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
                heading: "Zpátečka",
                text: "Doteď jsme závorky odstraňovali (násobili). Teď se naučíme je vyrábět. Tomu se říká rozklad na součin. První metodou je vytýkání. Hledáme, co mají všechny členy společného. \n$$ 4x + 8 $$\nOba členy jdou vydělit čtyřkou. Čtyřku napíšeme před závorku a zbytek dáme dovnitř. \n$$ 4(x + 2) $$",
                image:
                  "[Image illustrating factoring out common terms like pulling common items out of baskets]",
              },
              {
                heading: "Použití vzorců pozpátku",
                text: "Někdy vytýkání nestačí a musíme poznat skrytý vzorec. Vidíš $x^2 - 9$? To vypadá jako $a^2 - b^2$! Můžeme to tedy rozložit na dvě závorky: \n$$ x^2 - 9 = (x + 3)(x - 3) $$ \nRozklad je klíčový pro řešení složitějších rovnic a krácení zlomků.",
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
                id: "c5_l5_t2",
                question: "Rozlož na součin: $x^2 - 16$",
                options: [
                  "$(x - 4)^2$",
                  "$(x - 4)(x + 4)$",
                  "$(x - 8)(x + 8)$",
                  "$x(x - 16)$",
                ],
                correctAnswer: 1,
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
                  "$(a + 1)^2$",
                  "$a(a + 2)$",
                  "Nejde rozložit",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "c5_l5_t5",
                question: "Co mají společného členy $6ab$ a $9ac$?",
                options: ["Jen $a$", "$3a$", "$6a$", "$abc$"],
                correctAnswer: 1,
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
                text: "Představ si klasické miskové váhy. Uprostřed je znaménko $=$. To znamená, že levá miska váží přesně stejně jako pravá. Na jedné straně je pytlík s neznámým počtem mincí ($x$) a závaží, na druhé straně je jiné závaží. Naším úkolem je zjistit, co je v pytlíku. Pravidlo je jediné: Cokoliv uděláš s levou miskou, musíš udělat i s pravou. Jinak se váha převáží a rovnice přestane platit.",
                image: "",
              },
              {
                heading: "Osamostatnění neznámé",
                text: "Chceme, aby $x$ zůstalo na jedné straně úplně samo. Tomu říkáme 'osamostatnění neznámé'. Používáme k tomu ekvivalentní úpravy (úpravy, které nemění pravdivost rovnice).\n1. Přičítání/Odčítání: Mám $x + 5 = 12$. Abych měl jen $x$, musím odebrat 5. Ale musím to odebrat z obou stran! $$ x = 12 - 5 \\Rightarrow x = 7 $$",
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
                question: "Jakou úpravu provedeš pro vyřešení $x - 8 = 20$?",
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
                id: "c6_l1_t3",
                question: "Vyřeš rovnici: $10 + x = 25$",
                options: ["$x = 35$", "$x = 15$", "$x = -15$", "$x = 250$"],
                correctAnswer: 1,
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
                id: "c6_l1_t5",
                question:
                  "Vyřeš: $2x - x + 5 = 10$ (nejdřív zjednoduš levou stranu)",
                options: ["$x = 5$", "$x = 15$", "$x = 2$", "$x = 10$"],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Násobení a dělení v rovnici",
          content: {
            sections: [
              {
                heading: "Když je x v partě",
                text: "Často nemáme jen jedno $x$, ale třeba $3x = 21$. To znamená 'tři krabice váží 21 kg'. Jak zjistím váhu jedné? Musím celou rovnici vydělit třemi. $$ \\frac{3x}{3} = \\frac{21}{3} \\Rightarrow x = 7 $$ Opačný případ: $\\frac{x}{4} = 5$. 'Čtvrtina krabice váží 5 kg'. Jak zjistím váhu celé? Vynásobím celou rovnici čtyřmi. $$ x = 5 \\cdot 4 = 20 $$",
                image:
                  "[Image illustrating division of an equation by a number using groups of items]",
              },
              {
                heading: "Změna znaménka (Minus před x)",
                text: "Co když nám vyjde $-x = 5$? My nechceme 'minus x', my chceme 'plus x'. Celou rovnici vynásobíme číslem $-1$. Tím se otočí znaménka na obou stranách. $$ -x \\cdot (-1) = 5 \\cdot (-1) \\Rightarrow x = -5 $$",
                image: "placeholder-equation-sign-flip",
              },
            ],
            tasks: [
              {
                id: "c6_l2_t1",
                question: "Jakou úpravu uděláš v rovnici $4x = 20$?",
                options: ["Odečtu 4", "Vydělím 4", "Vynásobím 4", "Vydělím 20"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c6_l2_t2",
                question: "Vyřeš: $\\frac{x}{2} = 6$",
                options: ["$x = 3$", "$x = 12$", "$x = 8$", "$x = 4$"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c6_l2_t3",
                question: "Vyřeš: $-2x = 10$",
                options: ["$x = 5$", "$x = -5$", "$x = 20$", "$x = -20$"],
                correctAnswer: 1,
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
                id: "c6_l2_t5",
                question: "Vyřeš: $3x + 2 = 17$ (dvě úpravy za sebou!)",
                options: ["$x = 6$", "$x = 5$", "$x = 15$", "$x = 3$"],
                correctAnswer: 1,
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
                text: "Složitá rovnice je jako neuklizený pokoj. Než začneš hledat $x$, musíš uklidit.\n1. Odstraň závorky: Roznásob je. $2(x+3)$ se změní na $2x+6$.\n2. Odstraň zlomky: To je nejdůležitější trik! Celou rovnici (každý člen!) vynásob společným jmenovatelem. Zlomky zmizí a zbyde ti krásná rovnice s celými čísly.",
                image:
                  "[Image showing step-by-step removal of fractions in an equation by multiplying by LCD]",
              },
              {
                heading: "Postup řešení",
                text: "Když zmizí závorky a zlomky: \n3. Dej všechna $x$ na jednu stranu (třeba doleva) a všechna čísla na druhou (doprava). Při přehazování přes $=$ měníme znaménko (plus na minus a naopak).\n4. Sečti $x$ a čísla.\n5. Vyděl rovnici číslem u $x$.",
                image: "placeholder-equation-sorting-terms",
              },
            ],
            tasks: [
              {
                id: "c6_l3_t1",
                question:
                  "Čím vynásobíš rovnici $\\frac{x}{2} + \\frac{x}{3} = 5$, aby zmizely zlomky?",
                options: [
                  "Dvojkou",
                  "Trojkou",
                  "Pětkou",
                  "Šestkou (společný násobek)",
                ],
                correctAnswer: 3,
                xp: 20,
              },
              {
                id: "c6_l3_t2",
                question: "Vyřeš: $2(x - 1) = 8$",
                options: ["$x = 5$", "$x = 3$", "$x = 4$", "$x = 9$"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "c6_l3_t3",
                question:
                  "Co uděláš s členem $+3x$, když ho chceš převést zleva doprava?",
                options: [
                  "Nic, zůstane $+3x$",
                  "Změním ho na $-3x$",
                  "Vydělím ho třemi",
                  "Smažu ho",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c6_l3_t4",
                question: "Vyřeš: $5x = 2x + 9$ (převeď x k sobě)",
                options: ["$x = 9$", "$x = 3$", "$x = 4,5$", "$x = -3$"],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "c6_l3_t5",
                question: "Je $x=1$ řešením rovnice $x + 1 = 2x$?",
                options: ["Ano (1+1 = 2·1)", "Ne", "Nelze určit"],
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
                text: "Nejtěžší na slovní úloze je sestavit rovnici. Musíme příběh přeložit.\n- 'Číslo $x$ zvětšené o 5' $\\rightarrow x + 5$\n- 'Trojnásobek čísla' $\\rightarrow 3x$\n- 'Petr je o 3 roky starší než Jana'. Pokud Jana je $x$, Petr je $x+3$.",
                image:
                  "[Image showing text phrases translated into algebraic expressions]",
              },
              {
                heading: "Pohyb (s = v · t)",
                text: "Klasická úloha: Jedno auto vyjede z Prahy, druhé z Brna. Kdy se potkají? Klíčem je dráha ($s$). \n$$ s_{celkem} = s_{auto1} + s_{auto2} $$\nProtože dráha je rychlost krát čas ($s = v \\cdot t$), rovnice vypadá takto: $$ s_{celkem} = v_1 \\cdot t + v_2 \\cdot t $$ Za $t$ dosadíme neznámou a řešíme.",
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
                id: "c6_l4_t2",
                question:
                  "Součet tří po sobě jdoucích čísel je 15. Jak sestavíš rovnici?",
                options: [
                  "$x + x + x = 15$",
                  "$x + (x+1) + (x+2) = 15$",
                  "$x \\cdot 3 = 15$",
                  "$x + 1 + 2 = 15$",
                ],
                correctAnswer: 1,
                xp: 25,
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
                id: "c6_l4_t4",
                question:
                  "Jeden dělník udělá práci za 10 hodin. Jakou část práce udělá za 1 hodinu?",
                options: ["$1/10$", "$10/1$", "Celou", "$50\\,\\%$"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "c6_l4_t5",
                question: "Otec (40) je 4x starší než syn. Kolik je synovi?",
                options: [
                  "$4$ roky",
                  "$10$ let ($4 \\cdot x = 40$)",
                  "$15$ let",
                  "$36$ let",
                ],
                correctAnswer: 1,
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
                text: "Někdy máme dvě neznámé ($x$ a $y$). Abychom je našli, potřebujeme dvě rovnice (dvě informace). \n1. Součet dvou čísel je 10 ($x + y = 10$).\n2. Jejich rozdíl je 2 ($x - y = 2$).\nTohle je soustava rovnic. Hledáme čísla, která splňují OBA řádky zároveň.",
                image: "",
              },
              {
                heading: "Metoda sčítací",
                text: "Nejrychlejší metoda je rovnice sečíst pod sebou. \n$$ (x + y) + (x - y) = 10 + 2 $$\n$y$ a $-y$ se vyruší (zmizí)! Zbyde: $$ 2x = 12 \\Rightarrow x = 6 $$ Teď už jen dosadíme $x$ zpátky a zjistíme, že $y = 4$.",
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
                id: "c6_l5_t2",
                question: "Vyřeš soustavu sečtením: $x+y=5, x-y=1$",
                options: [
                  "$x=3, y=2$",
                  "$x=4, y=1$",
                  "$x=2, y=3$",
                  "$x=5, y=0$",
                ],
                correctAnswer: 0,
                xp: 25,
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
                  "V ohradě jsou slepice a králíci. Mají 5 hlav a 14 nohou. Sestav rovnice ($s$+slepice, $k$=králíci).",
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
                  "Zmizí (vyruší se)",
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
                text: "Představ si funkci jako automat na nápoje. Vhodíš minci (vstupní číslo $x$), automat zachrastí (provede výpočet podle předpisu) a vypadne nápoj (výstupní číslo $y$). Pravidlo funkce zní: Pro každé $x$ existuje právě jedno $y$. Nemůže se stát, že vhodíš pětikorunu a jednou vypadne cola a podruhé nic. To by nebyla funkce, ale rozbitý automat.",
                image: "",
              },
              {
                heading: "Reného mapa (Kartézská soustava)",
                text: "Abychom funkci viděli, musíme ji nakreslit. Používáme k tomu dvě osy, které se kříží v nule (počátek). \n- Osa $x$ je vodorovná (leží). \n- Osa $y$ je svislá (stojí). \nKaždý bod má svou adresu – souřadnice $[x; y]$. Například bod $A[2; 3]$ najdeš tak, že jdeš 2 kroky doprava a 3 kroky nahoru.",
                image: "",
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
                id: "c7_l1_t2",
                question: "Kde leží bod $A[-2; 0]$?",
                options: [
                  "Na ose $y$",
                  "Na ose $x$ (vlevo od nuly)",
                  "Vpravo nahoře",
                  "V počátku",
                ],
                correctAnswer: 1,
                xp: 15,
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
                id: "c7_l1_t4",
                question: "Mám předpis $y = 2x$. Jaké $y$ vyjde pro $x = 3$?",
                options: ["$5$", "$6$", "$1$", "$23$"],
                correctAnswer: 1,
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
                text: "Lineární funkce má předpis $y = ax + b$ (nebo $kx + q$). Jejím grafem je vždy přímka. K sestrojení přímky ti stačí znát pouhé dva body! Vypočítáš si je tabulkou (dosadíš libovolná dvě $x$), vyneseš do grafu a spojíš pravítkem. Nekonečná čára je na světě.",
                image: "",
              },
              {
                heading: "Co dělají písmenka $a$ a $b$?",
                text: "- Číslo $a$ (u $x$) určuje sklon. Když je kladné, funkce roste (jde do kopce). Když je záporné, funkce klesá (z kopce). Čím je číslo větší, tím je kopec prudší.\n- Číslo $b$ (samostatné) určuje posun. Říká nám, kde přímka protne svislou osu $y$.",
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
                id: "c7_l2_t3",
                question: "Kde protne funkce $y = 5x + 4$ osu $y$?",
                options: ["V bodě 5", "V bodě 4", "V bodě 0", "V bodě -4"],
                correctAnswer: 1,
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
                id: "c7_l2_t5",
                question: "Která funkce roste nejrychleji (je nejprudší)?",
                options: ["$y = x$", "$y = 2x$", "$y = 10x$", "$y = 0,5x$"],
                correctAnswer: 2,
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
                text: "Přímá úměrnost je nejjednodušší lineární funkce. Její předpis je $y = k \\cdot x$. Chybí tam to 'plus něco' na konci. To znamená, že graf vždy prochází počátkem – bodem $[0; 0]$. Pokud si nic nekoupím ($x=0$), nic nezaplatím ($y=0$).",
                image:
                  "[Image comparing direct variation graph starting at 0,0 vs general linear function]",
              },
              {
                heading: "Konstanta úměrnosti $k$",
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
                  "$y = 5x$",
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
                id: "c7_l3_t3",
                question: "Pokud 1 kg stojí 20 Kč, jaký je předpis funkce?",
                options: [
                  "$y = 20 + x$",
                  "$y = 20x$",
                  "$y = x / 20$",
                  "$y = 20$",
                ],
                correctAnswer: 1,
                xp: 20,
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
                text: "Co se stane, když $x$ umocníme? Dostaneme funkci $y = x^2$. \n- $1^2 = 1$\n- $2^2 = 4$\n- $3^2 = 9$ (roste to hrozně rychle!)\nAle pozor: $(-2)^2$ je taky $4$! Grafem není přímka, ale symetrická křivka ve tvaru písmene U, které říkáme parabola.",
                image: "",
              },
              {
                heading: "Smějící se a smutná parabola",
                text: "Základní parabola $y = x^2$ se 'směje' (otevřená nahoru). Když před ni dáme minus ($y = -x^2$), parabola se otočí dolů a je 'smutná'. Parabola popisuje spoustu věcí v přírodě – třeba dráhu hozeného míče nebo tvar visutého mostu.",
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
                id: "c7_l4_t2",
                question: "Vypočítej $y$ pro $x = -3$ ve funkci $y = x^2$.",
                options: ["$-9$", "$9$", "$6$", "$-6$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c7_l4_t3",
                question: "Jak vypadá graf $y = -x^2$?",
                options: [
                  "Jako U (směje se)",
                  "Jako kopec (obrácené U)",
                  "Jako přímka",
                  "Jako vlnovka",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c7_l4_t4",
                question: "Který bod neleží na parabole $y = x^2$?",
                options: ["$[2; 4]$", "$[3; 9]$", "$[1; 1]$", "$[2; 5]$"],
                correctAnswer: 3,
                xp: 20,
              },
              {
                id: "c7_l4_t5",
                question:
                  "Kde má parabola $y = x^2$ svůj vrchol (nejnižší bod)?",
                options: ["$[0; 0]$", "$[1; 1]$", "Nemá vrchol", "$[0; 1]$"],
                correctAnswer: 0,
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
                text: "Předpis $y = \\frac{k}{x}$ znamená, že $x$ je ve jmenovateli. Čím větší číslo dáme dolů (za $x$), tím menší je výsledek ($y$). \n- $100 : 1 = 100$\n- $100 : 100 = 1$\nGrafem jsou dva oblouky, kterým říkáme hyperbola. Nikdy se nedotknou os! Proč? Protože nulou nelze dělit ($x$ nesmí být $0$) a výsledek taky nikdy nebude přesně $0$.",
                image: "",
              },
              {
                heading: "Praktické využití",
                text: "Nepřímá úměrnost popisuje situace 'společné práce'. Když jeden člověk uklízí halu 10 hodin, dva lidé ji uklidí za 5 hodin ($y = 10 / x$). Graf jde prudce dolů a pak se blíží k nule, ale nikdy nezastaví.",
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
                question: "Proč se graf nikdy nedotkne osy $y$?",
                options: [
                  "Protože se mu nechce",
                  "Protože za $x$ nesmíme dosadit nulu (nulou nelze dělit)",
                  "Protože osa $y$ je moc vysoko",
                  "Dotkne se jí, když je $x$ velké",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c7_l5_t3",
                question:
                  "Urči hodnotu $y$ pro $x = 2$ ve funkci $y = 10 / x$.",
                options: ["$20$", "$5$", "$8$", "$12$"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c7_l5_t4",
                question: "Která rovnice je nepřímá úměrnost?",
                options: [
                  "$y = 5x$",
                  "$y = x - 5$",
                  "$y = 5 / x$",
                  "$y = x / 5$",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c7_l5_t5",
                question:
                  "Co se stane s časem práce, když zdvojnásobíme počet dělníků (nepřímá úměra)?",
                options: [
                  "Zdvojnásobí se",
                  "Zůstane stejný",
                  "Klesne na polovinu",
                  "Zvýší se o 2 hodiny",
                ],
                correctAnswer: 2,
                xp: 20,
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
                text: "Když si půjčíš auto, platíš nájem. Když si půjčíš peníze, platíš úrok. Úrok je cena za půjčení peněz. \n- Když peníze uložíš do banky, ty půjčuješ bance $\\rightarrow$ banka platí úrok tobě.\n- Když si vezmeš půjčku, banka půjčuje tobě $\\rightarrow$ ty platíš úrok bance.\nVýše úroku závisí na úrokové sazbě (např. $5\\,\\%$ p.a. – per annum, tedy ročně).",
                image:
                  "[Image illustrating money growing over time with interest]",
              },
              {
                heading: "Jednoduché úročení",
                text: "Jak spočítat úrok za jeden rok? Použijeme vzoreček z procent: $$ úrok = \\frac{sazba \\cdot částka}{100} $$ Pokud uložím $1\\,000$ Kč na $5\\,\\%$, úrok je $50$ Kč. Na konci roku mám $1\\,050$ Kč. Pozor, stát si z úroku obvykle ukousne daň (často $15\\,\\%$), takže reálně dostaneš o trochu méně.",
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
                id: "c8_l1_t2",
                question:
                  "Půjčím si $10\\,000$ Kč s úrokem $10\\,\\%$. Kolik musím po roce vrátit?",
                options: [
                  "$10\\,000$ Kč",
                  "$10\\,100$ Kč",
                  "$11\\,000$ Kč",
                  "$15\\,000$ Kč",
                ],
                correctAnswer: 2,
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
                id: "c8_l1_t4",
                question: "Vypočítej $1\\,\\%$ úrok z $1\\,000\\,000$ Kč.",
                options: [
                  "$100$ Kč",
                  "$1\\,000$ Kč",
                  "$10\\,000$ Kč",
                  "$100\\,000$ Kč",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "c8_l1_t5",
                question: "Co je 'jistina'?",
                options: [
                  "Původní půjčená částka",
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
                text: "Albert Einstein prý řekl, že složené úročení je osmý div světa. Proč? Protože úroky se připisují k jistině a další rok se počítají úroky i z těch minulých úroků! \n1. rok: máš $100$, úrok $10\\,\\%$ $\\rightarrow$ máš $110$.\n2. rok: počítáš $10\\,\\%$ ze $110$! Úrok je $11$. Máš $121$.\n3. rok: počítáš $10\\,\\%$ ze $121$... \nPeníze nerostou lineárně, ale exponenciálně (čím dál rychleji).",
                image:
                  "[Image illustrating compound interest as a rolling snowball getting bigger]",
              },
              {
                heading: "Dobrý sluha, zlý pán",
                text: "Složené úročení je skvělé, když spoříš (bohatneš rychleji). Ale je to katastrofa, když dlužíš a nesplácíš. Dluh narůstá raketovou rychlostí. Proto je tak nebezpečné brát si půjčky s vysokým úrokem.",
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
                id: "c8_l2_t2",
                question: "Kdy peníze rostou rychleji?",
                options: [
                  "Při jednoduchém úročení",
                  "Při složeném úročení",
                  "Je to stejné",
                  "Když je schovám pod polštář",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c8_l2_t3",
                question:
                  "Máš $100$ Kč, úrok $50\\,\\%$. Kolik máš po 2 letech (složené úročení)?",
                options: [
                  "$200$ Kč",
                  "$225$ Kč (1. rok 150, 2. rok 150 + 75)",
                  "$150$ Kč",
                  "$300$ Kč",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "c8_l2_t4",
                question: "Kdy je složené úročení nebezpečné?",
                options: [
                  "Když spoříš na důchod",
                  "Když si půjčíš a nesplácíš (dluh rychle roste)",
                  "Když vyhraješ ve sportce",
                  "Nikdy",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c8_l2_t5",
                question: "Vzoreček pro složené úročení obsahuje:",
                options: [
                  "Sčítání",
                  "Mocninu (násobení sebe sama)",
                  "Odmocninu",
                  "Jen dělení",
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
                text: "Ve smlouvě podepíšeš hrubou mzdu (třeba $30\\,000$ Kč). Na účet ti ale přijde čistá mzda (třeba $24\\,000$ Kč). Kam zmizel zbytek? Zaměstnavatel za tebe musel odvést:\n1. Zdravotní pojištění (doktoři).\n2. Sociální pojištění (důchody, nemocenská).\n3. Daň z příjmu (policie, školy, silnice).\nNikdy nepočítej s hrubou mzdou jako s penězi, které můžeš utratit!",
                image:
                  "[Image illustrating gross salary pie chart with slices cut out for taxes and insurance]",
              },
              {
                heading: "DPH (Daň z přidané hodnoty)",
                text: "Tuhle daň platíme všichni každý den. Když si koupíš rohlík nebo mobil, v ceně je započteno DPH (základní sazba v ČR je $21\\,\\%$). Obchodník si nechá jen část peněz (cenu bez daně) a DPH musí poslat státu. $$ Cena_{s DPH} = Cena_{bez DPH} \\cdot 1,21 $$",
                image: "placeholder-vat-receipt",
              },
            ],
            tasks: [
              {
                id: "c8_l3_t1",
                question: "Která mzda ti přijde na účet?",
                options: ["Hrubá", "Čistá", "Superhrubá", "Minimální"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c8_l3_t2",
                question: "Co NENÍ součástí srážek ze mzdy?",
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
                id: "c8_l3_t3",
                question:
                  "Výrobek stojí $100$ Kč bez DPH ($21\\,\\%$). Kolik zaplatíš u pokladny?",
                options: ["$100$ Kč", "$121$ Kč", "$79$ Kč", "$21$ Kč"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c8_l3_t4",
                question: "Komu jdou peníze z daní?",
                options: [
                  "Obchodníkovi",
                  "Státu a obcím",
                  "Tvému šéfovi",
                  "Bance",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "c8_l3_t5",
                question: "Jaká je základní sazba DPH v ČR (přibližně)?",
                options: [
                  "$10\\,\\%$",
                  "$21\\,\\%$",
                  "$50\\,\\%$",
                  "$5\\,\\%$",
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
                text: "Aritmetický průměr znáš: sečteš všechna čísla a vydělíš jejich počtem. Ale pozor! Představ si hospodu, kde sedí 5 dělníků s průměrným platem $20\\,000$. Najednou vejde miliardář Bill Gates. Průměrný plat v hospodě rázem vyletí na miliony. Zbohatli dělníci? Ne. Průměr je citlivý na extrémní hodnoty.",
                image: "[Image illustrating mean vs median with salaries]",
              },
              {
                heading: "Medián: Spravedlivý střed",
                text: "Medián je odolnější. Seřadíme všechny hodnoty od nejmenší po největší a vezmeme tu, která je přesně uprostřed. Když přijde Bill Gates, medián se skoro nezmění, protože miliardář bude jen na konci řady, ale prostřední člověk zůstane stejný. Medián lépe popisuje 'typickou' hodnotu.",
                image: "placeholder-median-sorting",
              },
            ],
            tasks: [
              {
                id: "c8_l4_t1",
                question: "Vypočítej průměr známek: $1, 1, 5, 5$.",
                options: ["$1$", "$5$", "$3$", "$2,5$"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "c8_l4_t2",
                question: "Jak najdeš medián?",
                options: [
                  "Sečtu čísla a vydělím",
                  "Seřadím čísla podle velikosti a vezmu to uprostřed",
                  "Vezmu nejčastější číslo",
                  "Vezmu největší číslo",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "c8_l4_t3",
                question: "Najdi medián čísel: $1, 2, 10, 100, 1000$.",
                options: [
                  "$10$ (je uprostřed)",
                  "$222$ (průměr)",
                  "$100$",
                  "$2$",
                ],
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
                  "Když máme v datech extrémní výchylky (např. platy)",
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
                text: "Jaká je šance, že na kostce padne šestka? Kostka má 6 stěn. Šestka je tam jen jedna. Šance je $1$ ku $6$. \nVzoreček je jednoduchý: $$ P(A) = \\frac{\\text{počet příznivých výsledků}}{\\text{počet všech možných výsledků}} $$ Výsledek je číslo mezi $0$ (nemožné) a $1$ (jisté). Často se udává v procentech.",
                image:
                  "[Image showing probability formula favorable outcomes divided by total outcomes with dice example]",
              },
              {
                heading: "Hod mincí",
                text: "Mince má 2 strany (panna, orel). Jaká je šance, že padne orel? $1$ (orel) lomeno $2$ (všechny možnosti). $$ P = \\frac{1}{2} = 0,5 = 50\\,\\% $$ Ale pozor! To neznamená, že když hodíš dvakrát, musí padnout jednou orel. Znamená to, že když hodíš milionkrát, bude orel přibližně v polovině případů.",
                image: "placeholder-coin-toss-probability",
              },
            ],
            tasks: [
              {
                id: "c8_l5_t1",
                question:
                  "Jaká je pravděpodobnost, že na kostce padne sudé číslo ($2, 4, 6$)?",
                options: [
                  "$1/6$",
                  "$3/6 = 1/2$ ($50\\,\\%$)",
                  "$2/6 = 1/3$",
                  "$1/20$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "c8_l5_t2",
                question:
                  "V osudí je 9 bílých koulí a 1 černá. Jaká je šance vytáhnout černou?",
                options: [
                  "$10\\,\\%$ ($1/10$)",
                  "$90\\,\\%$",
                  "$50\\,\\%$",
                  "$1\\,\\%$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "c8_l5_t3",
                question: "Co znamená pravděpodobnost $0$?",
                options: [
                  "Jev nastane určitě",
                  "Je to 50 na 50",
                  "Jev je nemožný",
                  "Malá šance",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c8_l5_t4",
                question:
                  "Jaká je šance vyhrát ve sportce (uhádnout 6 čísel ze 49)?",
                options: [
                  "Vysoká",
                  "50 na 50",
                  "Extrémně nízká (jedna ku milionům)",
                  "Jistá, když si koupím los",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "c8_l5_t5",
                question: "Vypočítej $P(A)$, když mám 3 výherní losy ze 100.",
                options: ["$3\\,\\%$", "$30\\,\\%$", "$0,3\\,\\%$", "$1/3$"],
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
