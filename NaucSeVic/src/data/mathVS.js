export const mathVS = {
  default: [
    {
      title: "Jazyk matematiky a Komplexní čísla",
      description:
        "Abychom mohli stavět mrakodrapy, musíme mít pevné základy. V této kapitole se naučíme přesně formulovat myšlenky pomocí logiky, aby v nich nebyl chaos. Následně prolomíme hranice reálných čísel a vstoupíme do světa čísel komplexních, kde i odmocnina z minus jedné má smysl.",
      lessons: [
        {
          title: "Výroková logika: Pravda a lež",
          content: {
            sections: [
              {
                heading: "Co je to výrok?",
                text: "Základním stavebním kamenem matematiky je výrok. Je to jakákoliv oznamovací věta, u které má smysl se ptát: Je to pravda (1), nebo lež (0)?\n\n- 'Praha je hlavní město ČR.' -> Výrok (pravdivý).\n- '1 + 1 = 3' -> Výrok (nepravdivý).\n- 'Ahoj!' nebo 'Kéž by zítra nepršelo.' -> Nejsou výroky (nemají pravdivostní hodnotu).",
                image: "",
              },
              {
                heading: "Logické spojky",
                text: "Výroky spojujeme do složitějších souvětí pomocí spojek. Každá má svůj symbol:\n1. Konjunkce ($\\land$): 'A zároveň'. Platí jen tehdy, když jsou OBA výroky pravdivé.\n2. Disjunkce ($\\lor$): 'Nebo'. Platí, když je pravdivý ALESPOŇ JEDEN (nebo oba). Pozor: V běžné řeči 'nebo' často vylučuje, v matematice ne!\n3. Negace ($\\neg$): 'Není pravda, že...'. Obrací hodnotu (z pravdy udělá lež).",
                image: "[Image of truth tables for AND, OR, NOT logical gates]",
              },
              {
                heading: "Implikace a Ekvivalence",
                text: "To nejdůležitější pro definice a věty:\n- Implikace ($A \\Rightarrow B$): 'Jestliže A, pak B'. Je nepravdivá v jediném případě: Když z pravdy plyne lež ($1 \\Rightarrow 0$). Pokud je předpoklad nepravdivý, implikace platí vždy (tzv. z prázdna plyne cokoliv).\n- Ekvivalence ($A \\Leftrightarrow B$): 'A platí právě tehdy, když platí B'. Je to vlastně implikace oběma směry. Platí, když mají oba výroky stejnou hodnotu (oba 1 nebo oba 0).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ma_c1_l1_t1",
                question: "Která z vět NENÍ výrok?",
                options: [
                  "Číslo 5 je sudé.",
                  "Vypočítej příklad!",
                  "Včera pršelo.",
                  "Země je placatá.",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ma_c1_l1_t2",
                question: "Kdy je nepravdivá implikace $A \\Rightarrow B$?",
                options: [
                  "Když A platí a B neplatí.",
                  "Když neplatí ani jedno.",
                  "Když A neplatí a B platí.",
                  "Nikdy, implikace je vždy pravdivá.",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "ma_c1_l1_t3",
                question:
                  "Máme výrok: 'Prší nebo svítí slunce'. Kdy je tento výrok pravdivý?",
                options: [
                  "Pouze když prší a nesvítí slunce.",
                  "Pouze když svítí slunce a neprší.",
                  "Když se děje alespoň jedno z toho (nebo obojí).",
                  "Pouze když se dějí obě věci naráz.",
                ],
                correctAnswer: 2,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Kvantifikátory: Všichni a někdo",
          content: {
            sections: [
              {
                heading: "Symboly $\\forall$ a $\\exists$",
                text: "Matematika často mluví o množinách čísel. Abychom nemuseli vypisovat 'pro každé číslo x platí...', používáme značky:\n- Obecný kvantifikátor ($\\forall$): Čteme 'pro všechna'. ($\forall x \\in \\mathbb{R}: x^2 \\ge 0$)\n- Existenční kvantifikátor ($\\exists$): Čteme 'existuje alespoň jedno'. ($exists x \\in \\mathbb{N}: x < 2$)\n\nPořadí je klíčové! $\\forall x \\exists y$ (Ke každému zámku existuje klíč) je něco jiného než $\\exists y \\forall x$ (Existuje univerzální paklíč ke všem zámkům).",
                image: "",
              },
              {
                heading: "Negování kvantifikátorů",
                text: "Jak říct opak věty s kvantifikátorem? To je častá chyba u zkoušek.\n1. Změníme kvantifikátor na ten druhý ($\\forall \\to \\exists$, $\\exists \\to \\forall$).\n2. Znegujeme samotný výrok vzadu.\n\nPříklad:\n- Věta: 'Všichni studenti spí.' ($\\forall x: S(x)$)\n- Negace: 'Existuje alespoň jeden student, který nespí.' ($\\exists x: \\neg S(x)$)\nNikoliv 'Žádný student nespí'!",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ma_c1_l2_t1",
                question:
                  "Co znamená zápis $\\exists x \\in \\mathbb{R}: x^2 = -1$?",
                options: [
                  "Pro všechna reálná čísla platí, že druhá mocnina je -1.",
                  "Existuje reálné číslo, jehož druhá mocnina je -1.",
                  "Reálná čísla neexistují.",
                  "Rovnice nemá řešení.",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ma_c1_l2_t2",
                question: "Jaká je správná negace věty: 'Každý den prší.'?",
                options: [
                  "Nikdy neprší.",
                  "Každý den svítí slunce.",
                  "Existuje alespoň jeden den, kdy neprší.",
                  "Zítra nebude pršet.",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ma_c1_l2_t3",
                question:
                  "Je pravdivý výrok $\\forall x \\in \\mathbb{R}: x > 0$?",
                options: [
                  "Ano.",
                  "Ne, protože existují záporná čísla a nula.",
                  "Ne, platí to jen pro přirozená čísla.",
                  "Ano, pokud nepočítáme nulu.",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Komplexní čísla: Když reálná nestačí",
          content: {
            sections: [
              {
                heading: "Proč je potřebujeme?",
                text: "V reálných číslech rovnice $x^2 = -1$ nemá řešení. Žádné číslo vynásobené sebou samým nedá mínus. Matematiky to štvalo, tak si definovali novou jednotku: imaginární jednotku $i$.\n\nDefinice: $$ i^2 = -1 $$\n\nDíky tomu můžeme odmocňovat záporná čísla (např. $\\sqrt{-4} = 2i$).",
                image: "",
              },
              {
                heading: "Algebraický tvar",
                text: "Komplexní číslo $z$ se skládá ze dvou částí: reálné a imaginární. Zapisujeme ho jako:\n$$ z = a + bi $$\n- $a$ je reálná část ($Re(z)$)\n- $b$ je imaginární část ($Im(z)$) - pozor, $b$ je reálné číslo, 'i' stojí vedle něj.\n\nPočítáme s nimi jako s dvojčleny. Sčítáme hrušky s hruškami (reálné s reálnými) a jablka s jablky (imaginární s imaginárními).",
                image:
                  "[Image showing complex plane with real axis x and imaginary axis y]",
              },
              {
                heading: "Osoba sdružená a absolutní hodnota",
                text: "- Číslo komplexně sdružené ($\\bar{z}$): Jen změníme znaménko u 'ička'. Pokud $z = 3 + 2i$, pak $\\bar{z} = 3 - 2i$. Používá se při dělení komplexních čísel.\n- Absolutní hodnota ($|z|$): Je to vzdálenost čísla od nuly v komplexní rovině. Počítá se přes Pythagorovu větu: $|z| = \\sqrt{a^2 + b^2}$.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ma_c1_l3_t1",
                question: "Kolik je $i^2$?",
                options: ["1", "-1", "0", "i"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ma_c1_l3_t2",
                question: "Sečti čísla $z_1 = 2 + 3i$ a $z_2 = 1 - 4i$.",
                options: ["$3 - i$", "$3 + 7i$", "$1 - i$", "$3 - 7i$"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "ma_c1_l3_t3",
                question: "Jaká je imaginární část čísla $5 - 8i$?",
                options: ["5", "-8i", "8", "-8"],
                correctAnswer: 3,
                xp: 15,
              },
              {
                id: "ma_c1_l3_t4",
                question: "Vypočítej absolutní hodnotu čísla $z = 3 + 4i$.",
                options: ["7", "1", "5 (odmocnina z $9+16$)", "25"],
                correctAnswer: 2,
                xp: 20,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Lineární algebra: Matice a soustavy",
      description:
        "Vstupujeme do světa velkých dat. Zatímco s jedním číslem si vystačíme při nákupu, pro popis 3D grafiky, chování ekonomiky nebo neuronových sítí potřebujeme tabulky čísel – matice. Naučíme se s nimi počítat a řešit soustavy, které by ručně trvaly věčnost.",
      lessons: [
        {
          title: "Matice: Tabulky, které počítají",
          content: {
            sections: [
              {
                heading: "Co je to matice a jak se v ní vyznat?",
                text: "Matici si představ jako obdélníkové schéma čísel seřazených do řádků a sloupců. Značíme je velkými písmeny (A, B, C). Každé číslo uvnitř má svou přesnou adresu určenou řádkem ($i$) a sloupcem ($j$), píšeme $a_{ij}$.\n\nNapříklad matice $A$ typu $2\\times3$ (2 řádky, 3 sloupce) vypadá takto:\n$$ A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} $$\nPrvek $a_{23}$ je číslo v 2. řádku a 3. sloupci, tedy 6.\nHlavní diagonála je 'sjezjovka' z levého horního rohu dolů doprava (prvky $a_{11}, a_{22}, ...$).",
                image: "placeholder-matrix-structure",
              },
              {
                heading: "Sčítání a násobení číslem",
                text: "Operace s maticemi mají svá pravidla. Sčítat můžeme jen matice stejných rozměrů – prostě sečteme čísla na stejných pozicích (prvek s prvkem). Pokud mají matice jiný tvar, sčítat nejdou.\n\nNásobení matice číslem (skalárem) je intuitivní: Chceme-li matici vynásobit číslem 3, vynásobíme trojkou úplně každé číslo uvnitř matice. Matice se celá 'zvětší'.",
                image: "",
              },
              {
                heading: "Násobení matic (To zrádné)",
                text: "Násobení dvou matic $A \\cdot B$ je složitější. Není to prvek krát prvek! Funguje to jako 'řádek krát sloupec'.\n\nAbychom mohli násobit, musí mít první matice tolik sloupců, kolik má druhá řádků (pravidlo 'vnitřních rozměrů'). Výsledná matice pak dědí počet řádků od první a počet sloupců od druhé.\n\nPostup: Vezmeme 1. řádek z $A$ a 'potopíme' ho do 1. sloupce $B$. První číslo vynásobíme prvním, druhé druhým... a součiny sečteme. To nám dá jedno číslo výsledku. Pozor: $A \\cdot B$ zpravidla NENÍ totéž co $B \\cdot A$!",
                image: "placeholder-matrix-multiplication-scheme",
              },
            ],
            tasks: [
              {
                id: "la_c1_l1_t1",
                question:
                  "Máme matici $A$ typu $3\\times2$ a matici $B$ typu $2\\times5$. Jaký rozměr bude mít součin $A \\cdot B$?",
                options: [
                  "$3\\times5$ (vnější rozměry)",
                  "$2\\times2$ (vnitřní rozměry)",
                  "$3\\times2$ (podle A)",
                  "Nelze násobit",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "la_c1_l1_t2",
                question:
                  "Co je na pozici $a_{21}$ v matici $\\begin{pmatrix} 1 & 0 \\\\ 5 & 7 \\end{pmatrix}$?",
                options: ["1", "0", "5 (druhý řádek, první sloupec)", "7"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "la_c1_l1_t3",
                question: "Kdy můžeme sečíst dvě matice?",
                options: [
                  "Vždy, když obsahují čísla.",
                  "Jen když jsou čtvercové.",
                  "Jen když mají stejný počet řádků i sloupců.",
                  "Když mají stejný počet prvků (např. $2\\times3$ a $3\\times2$).",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "la_c1_l1_t4",
                question:
                  "Je násobení matic komutativní (platí $A \\cdot B = B \\cdot A$)?",
                options: [
                  "Ano, vždy.",
                  "Ne, obecně neplatí.",
                  "Ano, ale jen pro kladná čísla.",
                  "Platí pouze u sčítání, u násobení nikdy.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Determinanty: Číslo skryté v matici",
          content: {
            sections: [
              {
                heading: "Křížové pravidlo (2x2)",
                text: "Determinant je jedno číslo, které charakterizuje čtvercovou matici. Značíme ho $|A|$ nebo $\\det A$. Pokud je determinant nula, matice je 'zdegenerovaná' (singulární) a to je špatná zpráva pro řešení rovnic.\n\nPro matici $2\\times2$: $$ \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc $$ Prostě vynásobíme hlavní diagonálu a odečteme vedlejší.",
                image: "",
              },
              {
                heading: "Sarrusovo pravidlo (3x3)",
                text: "Pro matice $3\\times3$ používáme Sarrusovo pravidlo. Opíšeme první dva řádky pod matici. Pak násobíme diagonálně: tři směry 'z kopce' (sečteme) a tři směry 'do kopce' (odečteme).\n\nPozor: Pro matice $4\\times4$ a větší Sarrusovo pravidlo NEFUNGUJE! Tam musíme použít rozvoj podle řádku (Laplaceův rozvoj) nebo úpravu na trojúhelníkový tvar.",
                image: "placeholder-sarrus-rule",
              },
              {
                heading: "K čemu to je?",
                text: "Determinant nám řekne o matici spoustu věcí:\n1. Pokud $\\det A \\neq 0$, k matici existuje inverzní matice (regulární).\n2. Pokud $\\det A = 0$, řádky matice jsou lineárně závislé (jeden je násobkem jiného).\n3. Geometricky determinant představuje zvětšení/zmenšení plochy (ve 2D) nebo objemu (ve 3D) při transformaci.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "la_c1_l2_t1",
                question:
                  "Vypočítej determinant $\\begin{vmatrix} 1 & 2 \\\\ 3 & 4 \\end{vmatrix}$.",
                options: [
                  "$4 - 6 = -2$",
                  "$1 + 4 = 5$",
                  "$3 - 8 = -5$",
                  "$10$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "la_c1_l2_t2",
                question:
                  "Lze použít Sarrusovo pravidlo pro matici $4\\times4$?",
                options: [
                  "Ano, funguje pro všechny.",
                  "Ne, funguje jen pro $3\\times3$.",
                  "Ano, ale musí se opsat 3 řádky.",
                  "Ne, funguje jen pro $2\\times2$.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "la_c1_l2_t3",
                question: "Co znamená, když $\\det A = 0$?",
                options: [
                  "Matice je prázdná.",
                  "Matice je singulární (nemá inverzi).",
                  "Matice je jednotková.",
                  "Všechna čísla v matici jsou nuly.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Soustavy rovnic a Gaussova eliminace",
          content: {
            sections: [
              {
                heading: "Matice jako systém",
                text: "Soustavu rovnic, např. $2x + y = 5$ a $x - y = 1$, můžeme přepsat do matice. Do jedné části dáme koeficienty u neznámých (levá strana) a za svislou čáru dáme výsledky (pravá strana). Říkáme tomu rozšířená matice soustavy.\n\nCílem je upravit tuto matici tak, aby pod hlavní diagonálou byly samé nuly (stupňovitý tvar). Tomu se říká Gaussova eliminační metoda (GEM).",
                image: "placeholder-gem-steps",
              },
              {
                heading: "Povolené úpravy (Ekvivalentní)",
                text: "Abychom nezměnili výsledek rovnice, můžeme s řádky matice dělat jen tyto věci:\n1. Prohodit dva řádky (změna pořadí rovnic nic nemění).\n2. Vynásobit řádek nenulovým číslem.\n3. Přičíst k jednomu řádku násobek jiného řádku (to je klíčové pro výrobu nul!).\n\nJakmile máme schody (nuly pod diagonálou), převedeme poslední řádek zpět na rovnici, vypočítáme jednu neznámou a dosazujeme zpět nahoru.",
                image: "",
              },
              {
                heading: "Frobeniova věta",
                text: "Než začneme počítat, je dobré vědět, zda řešení vůbec existuje. Frobeniova věta porovnává hodnost (počet nezávislých řádků) matice a rozšířené matice.\n- Hodnosti se rovnají = Řešení existuje (jedno, nebo nekonečně mnoho).\n- Hodnost rozšířené je větší = Nemá řešení (např. vyjde $0 = 5$, což je nesmysl).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "la_c1_l3_t1",
                question: "Která úprava matice NENÍ povolená (změní řešení)?",
                options: [
                  "Prohození řádků.",
                  "Vynásobení řádku nulou.",
                  "Přičtení dvojnásobku prvního řádku k druhému.",
                  "Vynásobení řádku číslem -1.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "la_c1_l3_t2",
                question:
                  "Co znamená, když po úpravách vyjde v posledním řádku '0 0 0 | 5'?",
                options: [
                  "Neznámá je 5.",
                  "Soustava nemá řešení ($0 = 5$).",
                  "Soustava má nekonečně mnoho řešení.",
                  "Je to chyba výpočtu.",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "la_c1_l3_t3",
                question: "Co je cílem Gaussovy eliminace?",
                options: [
                  "Vynulovat celou matici.",
                  "Dostat nuly pod hlavní diagonálu.",
                  "Dostat samé jedničky.",
                  "Vypočítat determinant.",
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
      title: "Funkce a Limity: Srdce analýzy",
      description:
        "Zatímco algebra řeší rovnice (statické vztahy), matematická analýza zkoumá změnu a pohyb. Naučíme se popsat závislosti mezi veličinami (funkce) a podíváme se mikroskopem na to, co se děje v bodech, kde matematika zdánlivě selhává (limity).",
      lessons: [
        {
          title: "Funkce: Stroj na čísla",
          content: {
            sections: [
              {
                heading: "Co je to funkce?",
                text: "Funkce $f$ je předpis (stroj), který každému vstupu $x$ přiřadí právě jeden výstup $y$. Píšeme $y = f(x)$.\nKlíčové pojmy:\n1. Definiční obor ($D_f$): Množina všech čísel, která smíme do stroje vhodit (pro která má výraz smysl). Pozor na dělení nulou a odmocniny ze záporných čísel!\n2. Obor hodnot ($H_f$): Množina všech čísel, která mohou ze stroje vypadnout.",
                image: "",
              },
              {
                heading: "Parita: Symetrie grafu",
                text: "Funkce může být symetrická. To nám usnadňuje kreslení grafů.\n- Sudá funkce: Je souměrná podle osy $y$ (jako zrcadlo). Platí $f(-x) = f(x)$. Příklad: $y = x^2$ nebo $y = \\cos x$.\n- Lichá funkce: Je souměrná podle počátku souřadnic (bodová souměrnost). Platí $f(-x) = -f(x)$. Příklad: $y = x^3$ nebo $y = \\sin x$.",
                image:
                  "[Image showing graphs of even vs odd functions side by side]",
              },
              {
                heading: "Prostá a inverzní funkce",
                text: "Funkce je prostá, když pro různé vstupy dává vždy různé výstupy (nikdy se nevrátí na stejnou hladinu $y$). Jen k prostým funkcím existuje funkce inverzní ($f^{-1}$). Inverzní funkce dělá přesný opak – prohodí $x$ a $y$ (grafy jsou souměrné podle osy $y=x$). Příklad: K exponenciále $e^x$ je inverzní logaritmus $\\ln x$.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ma_c3_l1_t1",
                question:
                  "Jaký je definiční obor funkce $f(x) = \\frac{1}{x-2}$?",
                options: [
                  "Všechna reálná čísla ($\\mathbb{R}$)",
                  "$\\mathbb{R} \\setminus \\{2\\}$ (vše kromě dvojky)",
                  "Interval $(2; \\infty)$",
                  "$\\mathbb{R} \\setminus \\{0\\}$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ma_c3_l1_t2",
                question: "Je funkce $y = x^2$ prostá?",
                options: [
                  "Ano.",
                  "Ne, protože např. pro $x=2$ i $x=-2$ vyjde stejně 4.",
                  "Ano, ale jen pro záporná čísla.",
                  "Záleží na měřítku.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ma_c3_l1_t3",
                question: "Která goniometrická funkce je sudá?",
                options: [
                  "Sinus ($\\sin x$)",
                  "Kosinus ($\\cos x$)",
                  "Tangens ($\\tan x$)",
                  "Kotangens ($\\cot x$)",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Posloupnosti: Řada čísel",
          content: {
            sections: [
              {
                heading: "Diskrétní kroky",
                text: "Posloupnost je speciální typ funkce, kde dosazujeme jen přirozená čísla ($1, 2, 3...$). Místo $f(x)$ píšeme $a_n$. Je to vlastně očíslovaná řada čísel.\nNapř. $a_n = \\frac{1}{n}$ generuje řadu: $1, \\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}...$",
                image: "",
              },
              {
                heading: "Limita posloupnosti",
                text: "Zajímá nás, co se děje na 'konci' nekonečna. K jakému číslu se členy posloupnosti blíží, když $n$ roste nade všechny meze ($n \\to \\infty$)?\n- Konvergentní: Blíží se k jednomu číslu (limitě). Např. $\\lim \\frac{1}{n} = 0$.\n- Divergentní: Uteče do nekonečna (např. $n^2$) nebo osciluje (skáče) a neustálí se (např. $(-1)^n$).",
                image:
                  "[Image illustrating sequence convergence to a limit line]",
              },
              {
                heading: "Eulerovo číslo e",
                text: "Jedna z nejdůležitějších limit v přírodě a ekonomii. Definuje se jako:\n$$ e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n \\approx 2{,}718... $$\nPopisuje přirozený růst a složené úročení.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ma_c3_l2_t1",
                question: "K čemu se blíží posloupnost $1, 1/2, 1/3, 1/4...$?",
                options: [
                  "K nekonečnu",
                  "K jedničce",
                  "K nule",
                  "K ničemu (diverguje)",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ma_c3_l2_t2",
                question: "Co znamená symbol $n \\to \\infty$?",
                options: [
                  "n je rovno nekonečnu",
                  "n se blíží k nule",
                  "n roste nade všechny meze",
                  "n je velmi malé číslo",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ma_c3_l2_t3",
                question: "Je posloupnost $2, 4, 8, 16, 32...$ konvergentní?",
                options: [
                  "Ano, má limitu 0.",
                  "Ne, diverguje k $+\\infty$.",
                  "Ano, má limitu 2.",
                  "Nelze určit.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Limita funkce: Blížíme se",
          content: {
            sections: [
              {
                heading: "Mravenec na grafu",
                text: "Limita funkce $\\lim_{x \\to x_0} f(x) = L$ zkoumá chování funkce v OKOLÍ bodu $x_0$, nikoliv přímo v něm. Ptáme se: 'Když se po křivce grafu blížím k $x_0$, k jaké výšce ($y$) se blížím?'\n\nTo je klíčové tam, kde funkce není definovaná (např. 'díry' v grafu). Můžeme spočítat limitu $\\frac{\\sin x}{x}$ pro $x \\to 0$, přestože $0$ dosadit nesmíme!",
                image:
                  "[Image visualizing the concept of limit approaching a point from left and right]",
              },
              {
                heading: "Vlastní a Nevlastní",
                text: "1. Vlastní limita: Výsledkem je konkrétní číslo.\n2. Nevlastní limita: Funkce 'vyletí' do $+\\infty$ nebo $-\\infty$ (asymptota).\n3. Limita v nevlastním bodě: Zkoumáme chování na krajích osy $x$ (pro $x \\to \\pm \\infty$).",
                image: "",
              },
              {
                heading: "Zleva a zprava",
                text: "Někdy se funkce chová jinak, když jdeme zleva, a jinak zprava (např. funkce 'skočí'). Aby existovala limita, musí se levá i pravá strana 'potkat' ve stejném bodě. Pokud se nepotkají, limita neexistuje.",
                image:
                  "[Image showing discontinuous function with different left and right limits]",
              },
            ],
            tasks: [
              {
                id: "ma_c3_l3_t1",
                question: "Kolik je $\\lim_{x \\to \\infty} \\frac{1}{x}$?",
                options: ["$\\infty$", "1", "0", "Neexistuje"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ma_c3_l3_t2",
                question:
                  "Co se stane, když limita zleva se nerovná limitě zprava?",
                options: [
                  "Limita v tom bodě neexistuje.",
                  "Limita je průměr těchto hodnot.",
                  "Limita je rovna nule.",
                  "To se nemůže stát.",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "ma_c3_l3_t3",
                question:
                  "Můžeme počítat limitu v bodě, kde funkce není definovaná (má tam díru)?",
                options: [
                  "Ne, musíme tam mít plný puntík.",
                  "Ano, limitu zajímá jen okolí bodu, ne bod samotný.",
                  "Jen u lineárních funkcí.",
                  "Ne, to je zakázaná operace.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Spojitost funkce",
          content: {
            sections: [
              {
                heading: "Tužka na papíře",
                text: "Intuitivně: Funkce je spojitá, pokud její graf nakreslíme jedním tahem bez zvednutí tužky. Žádné skoky, žádné díry.\n\nMatematicky: Funkce je spojitá v bodě $x_0$, právě když:\n1. Je v bodě definovaná ($f(x_0)$ existuje).\n2. Má v bodě vlastní limitu.\n3. Tato limita se rovná funkční hodnotě (cesta vede přesně tam, kde je bod).",
                image: "",
              },
              {
                heading: "Body nespojitosti",
                text: "Kde se to kazí?\n- Odstranitelná nespojitost: V grafu je jen malá dírka (chybí jeden bod nebo je posunutý mimo). Limita existuje, jen se nerovná hodnotě.\n- Skok: Graf se roztrhne a pokračuje v jiné výšce (limita zleva $\\neq$ limita zprava).\n- 2. druhu (nekonečná): Funkce uteče podél svislé asymptoty do nekonečna (např. $1/x$ v nule).",
                image:
                  "[Image illustrating types of discontinuity: hole, jump, infinite]",
              },
            ],
            tasks: [
              {
                id: "ma_c3_l4_t1",
                question: "Je funkce $y = \\frac{1}{x}$ spojitá v bodě $x=0$?",
                options: [
                  "Ano.",
                  "Ne, není tam definovaná a 'utíká' do nekonečna.",
                  "Ano, ale má tam skok.",
                  "Jen z jedné strany.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ma_c3_l4_t2",
                question: "Co znamená 'odstranitelná nespojitost'?",
                options: [
                  "Graf má skok o 5 jednotek.",
                  "Graf jde do nekonečna.",
                  "V grafu chybí jen jeden bod (díra), zbytek navazuje.",
                  "Funkce neexistuje nikde.",
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
      title: "Diferenciální počet: Věda o změně",
      description:
        "Svět není statický. Auta zrychlují, ceny akcií kolísají, bakterie se množí. Abychom zachytili tuto dynamiku, potřebujeme derivace. Derivace nám řekne, jak rychle se něco mění právě v tento okamžik. Je to tachometr matematiky.",
      lessons: [
        {
          title: "Co je to derivace?",
          content: {
            sections: [
              {
                heading: "Okamžitá rychlost",
                text: "Představ si, že jedeš autem. Průměrnou rychlost spočítáš snadno (vzdálenost děleno čas). Ale co když chceš vědět, jak rychle jedeš přesně v čase $t = 5,00$ s? To je okamžitá rychlost.\n\nMatematicky to děláme tak, že zmenšujeme časový interval, až se blíží nule. Derivace funkce $f$ v bodě $x$ je tedy definována jako limita:\n$$ f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} $$",
                image: "",
              },
              {
                heading: "Geometrický význam: Směrnice tečny",
                text: "Graficky je derivace v bodě číslo, které udává sklon (strmost) grafu v daném místě. Je to směrnice tečny ke grafu funkce.\n- $f'(x) > 0$: Funkce roste (jde do kopce).\n- $f'(x) < 0$: Funkce klesá (jde z kopce).\n- $f'(x) = 0$: Funkce neroste ani neklesá (vrchol kopce, dno údolí nebo rovinka).",
                image:
                  "[Image showing tangent lines with positive negative and zero slopes]",
              },
              {
                heading: "Základní vzorečky",
                text: "Nemusíme pokaždé počítat limitu. Máme tabulkové derivace, které se musíš naučit zpaměti:\n- $(c)' = 0$ (konstanta se nemění)\n- $(x^n)' = n \\cdot x^{n-1}$ (mocninu hodíš dopředu a jednu odečteš)\n- $(\\sin x)' = \\cos x$\n- $(e^x)' = e^x$ (to je unikátní funkce, derivací je ona sama)",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ma_c4_l1_t1",
                question: "Jaká je derivace funkce $f(x) = x^3$?",
                options: ["$x^2$", "$3x^2$", "$3x^3$", "$2x^3$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ma_c4_l1_t2",
                question:
                  "Co znamená, když je derivace v bodě záporná ($f'(x) < 0$)?",
                options: [
                  "Funkce je v tom bodě záporná (pod osou x).",
                  "Funkce v tom bodě klesá.",
                  "Funkce v tom bodě roste.",
                  "Je to chyba.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ma_c4_l1_t3",
                question: "Derivace konstanty (např. čísla 5) je:",
                options: ["5", "1", "0", "x"],
                correctAnswer: 2,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Pravidla derivování: Skládáme funkce",
          content: {
            sections: [
              {
                heading: "Součin a podíl (Leibnizova pravidla)",
                text: "Pozor! Derivace součinu NENÍ součin derivací! $(u \\cdot v)' \\neq u' \\cdot v'$.\nMusíme použít křížové pravidlo:\n$$ (u \\cdot v)' = u'v + uv' $$\nPro podíl je vzorec ještě výživnější:\n$$ \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2} $$",
                image: "",
              },
              {
                heading: "Složená funkce (Pravidlo cibule)",
                text: "Nejtěžší, ale nejdůležitější část. Jak derivovat $\\sin(x^2)$? Máme vnější funkci (sinus) a vnitřní funkci (kvadrát). Derivujeme jako loupání cibule – od vnější slupky k vnitřní a výsledky násobíme.\n$$ [f(g(x))]' = f'(g(x)) \\cdot g'(x) $$\nPříklad: $(\\sin(x^2))' = \\cos(x^2) \\cdot 2x$.",
                image: "[Image visualizing chain rule as peeling layers]",
              },
            ],
            tasks: [
              {
                id: "ma_c4_l2_t1",
                question: "Jak zderivuješ součin $x \\cdot \\sin x$?",
                options: [
                  "$1 \\cdot \\cos x$",
                  "$\\sin x + x \\cos x$ (podle pravidla $u'v + uv'$)",
                  "$x \\cos x$",
                  "$\\cos x$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ma_c4_l2_t2",
                question: "Derivace složené funkce $(2x + 1)^5$ je:",
                options: [
                  "$5(2x + 1)^4$",
                  "$5(2x + 1)^4 \\cdot 2$ (derivace vnitřku)",
                  "$(2x)^5$",
                  "$10x^4$",
                ],
                correctAnswer: 1,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "L'Hospitalovo pravidlo a vyšší řády",
          content: {
            sections: [
              {
                heading: "Derivace vyšších řádů",
                text: "Když zderivujeme funkci, dostaneme novou funkci. I tu můžeme zderivovat! Dostaneme druhou derivaci ($f''$).\n- Fyzikálně: $f(t)$ je dráha -> $f'(t)$ je rychlost -> $f''(t)$ je zrychlení.\n- Můžeme pokračovat dál ($f'''$, $f^{(4)}$...), ale v praxi málokdy potřebujeme víc než druhou.",
                image: "",
              },
              {
                heading: "L'Hospitalovo pravidlo: Záchrana v limitách",
                text: "Vzpomínáš na limity? Co když vyjde neurčitý výraz typu $\\frac{0}{0}$ nebo $\\frac{\\infty}{\\infty}$? Guillaume de l'Hôpital (čti lopital) vymyslel trik: Limita podílu funkcí je stejná jako limita podílu jejich derivací.\n$$ \\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f'(x)}{g'(x)} $$\nStačí zderivovat čitatele zvlášť a jmenovatele zvlášť (ne jako podíl!) a dosadit znovu.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ma_c4_l3_t1",
                question: "Kdy můžeme použít L'Hospitalovo pravidlo?",
                options: [
                  "Vždy, když počítáme limitu.",
                  "Jen když vyjde typ $\\frac{0}{0}$ nebo $\\frac{\\infty}{\\infty}$.",
                  "Jen pro limity v nekonečnu.",
                  "Když neumíme derivovat.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ma_c4_l3_t2",
                question: "Jaká je druhá derivace funkce $x^3$?",
                options: ["$3x^2$", "$6x$", "$6$", "$0$"],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Průběh funkce: Kreslíme bez tabulky",
          content: {
            sections: [
              {
                heading: "Monotónnost a Extrémy (1. derivace)",
                text: "První derivace nám řekne, kde funkce roste ($f' > 0$) a klesá ($f' < 0$).\nKlíčové jsou body, kde je derivace nulová ($f'(x)=0$). To jsou podezřelé body z extrému (lokální maximum nebo minimum). Představ si to jako vrchol kopce – na chvíli jedeme po rovině.",
                image: "[Image illustrating local maximum and minimum points]",
              },
              {
                heading: "Konvexita a Konkavita (2. derivace)",
                text: "Druhá derivace mluví o zakřivení (jak je graf 'prohnutý').\n- $f''(x) > 0$: Funkce je konvexní (tvar 'misky', usmívající se smajlík).\n- $f''(x) < 0$: Funkce je konkávní (tvar 'kopce', smutný smajlík).\n- Bod, kde se to mění (z misky na kopec), se nazývá inflexní bod.",
                image:
                  "[Image differentiating convex smiley vs concave frown shapes]",
              },
            ],
            tasks: [
              {
                id: "ma_c4_l4_t1",
                question: "Kde hledáme lokální extrémy (minima/maxima)?",
                options: [
                  "Tam, kde je $f(x) = 0$.",
                  "Tam, kde je první derivace nulová ($f'(x) = 0$).",
                  "V nekonečnu.",
                  "Tam, kde je druhá derivace nulová.",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ma_c4_l4_t2",
                question: "Co platí pro konvexní funkci?",
                options: [
                  "Je 'prohnutá dolů' (do kopce).",
                  "Je 'prohnutá nahoru' (jako miska), $f'' > 0$.",
                  "Je to přímka.",
                  "Nemá derivaci.",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Taylorův polynom: Aproximace",
          content: {
            sections: [
              {
                heading: "Když je funkce moc složitá",
                text: "Počítat s funkcemi jako $\\sin x$ nebo $e^x$ je pro počítače náročné. Taylorův polynom nám umožňuje nahradit libovolnou 'hezkou' funkci obyčejným polynomem (součtem mocnin $x$, $x^2$, $x^3$...), který se v okolí daného bodu chová skoro stejně.\n\nČím vyšší stupeň polynomu použijeme (více členů), tím přesnější je náhrada. Většina kalkulaček počítá sinus právě takto!",
                image:
                  "[Image showing sine wave approximated by polynomials of increasing order]",
              },
            ],
            tasks: [
              {
                id: "ma_c4_l5_t1",
                question: "K čemu slouží Taylorův polynom?",
                options: [
                  "K výpočtu kořenů rovnice.",
                  "K nahrazení složité funkce jednodušším polynomem.",
                  "K výpočtu integrálů.",
                  "K rýsování tečen.",
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
      title: "Integrální počet: Skládáme zpět",
      description:
        "Integrace je reverzní proces k derivování. Pokud známe rychlost auta v každém okamžiku, integrál nám řekne, jakou dráhu ujelo. Je to mocný nástroj pro sčítání nekonečně mnoha nekonečně malých kousků.",
      lessons: [
        {
          title: "Neurčitý integrál: Primitivní funkce",
          content: {
            sections: [
              {
                heading: "Hledání původní funkce",
                text: "Při derivování jsme z funkce $F(x)$ udělali $f(x)$. Teď jdeme opačně: Máme $f(x)$ a hledáme takovou funkci $F(x)$, pro kterou platí $F'(x) = f(x)$. Této funkci říkáme primitivní funkce.\n\nZápis: $$ \\int f(x) dx = F(x) + C $$\nSymbol $\\int$ je protažené 'S' (suma).",
                image: "",
              },
              {
                heading: "Integrační konstanta C",
                text: "Proč tam píšeme $+ C$? Protože derivace konstanty je nula. Když zderivujete $x^2$, dostanete $2x$. Když zderivujete $x^2 + 5$, dostanete taky $2x$. Když jdeme zpátky (integrujeme $2x$), nevíme, jestli tam ta pětka byla, nebo ne. Proto píšeme $+ C$ (libovolná reálná konstanta). Neurčitý integrál tedy není jedna funkce, ale celá rodina funkcí.",
                image:
                  "[Image showing a family of curves shifted vertically by C]",
              },
              {
                heading: "Základní vzorce (Tabulkové integrály)",
                text: "Stejně jako u derivací, i tady existuje tabulka, kterou je třeba umět nazpaměť. Většinou je to jen obrácená tabulka derivací.\n- $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$ (pro $n \\neq -1$)\n- $\\int \\frac{1}{x} dx = \\ln|x| + C$\n- $\\int \\cos x dx = \\sin x + C$\n- $\\int e^x dx = e^x + C$",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ma_c5_l1_t1",
                question: "Jaký je integrál $\\int x^2 dx$?",
                options: [
                  "$2x + C$",
                  "$\\frac{x^3}{3} + C$",
                  "$x^3 + C$",
                  "$\\frac{x^2}{2} + C$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ma_c5_l1_t2",
                question: "Co znamená konstanta $C$ ve výsledku?",
                options: [
                  "Chyba výpočtu.",
                  "Komplexní číslo.",
                  "Integrační konstanta (neurčitost posunu).",
                  "Celsius.",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ma_c5_l1_t3",
                question:
                  "Platí, že integrál součtu je součet integrálů ($\\int (f+g) = \\int f + \\int g$)?",
                options: [
                  "Ano, integrál je lineární operace.",
                  "Ne, musíme použít pravidlo součinu.",
                  "Jen pro kladná čísla.",
                  "Ne, to platí jen pro derivace.",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Metoda Per-partes: Po částech",
          content: {
            sections: [
              {
                heading: "Obrácené pravidlo součinu",
                text: "Na integrál součinu $f(x) \\cdot g(x)$ neexistuje jednoduchý vzorec. Pokud ale máme součin dvou funkcí různého typu (např. polynom krát goniometrická funkce $x \\cdot \\sin x$), používáme metodu Per-partes (po částech).\n\nVzorec: $$ \\int u(x) \\cdot v'(x) dx = u(x)v(x) - \\int u'(x) \\cdot v(x) dx $$\n\nPrincip: Jednu funkci zderivujeme ($u \\to u'$), čímž se zjednoduší, a druhou zintegrujeme ($v' \\to v$).",
                image: "",
              },
              {
                heading: "Jak zvolit u a v'?",
                text: "Klíčem k úspěchu je správná volba. Chceme, aby se derivací funkce $u$ zjednodušila (např. z $x$ se stane $1$).\nTypicky:\n- Pokud integrujeme $P(x) \\cdot e^x$ nebo $P(x) \\cdot \\sin x$, volíme jako $u$ polynom $P(x)$.\n- Pokud integrujeme $P(x) \\cdot \\ln x$, musíme volit jako $u$ logaritmus (protože $\\ln x$ neumíme snadno integrovat, ale derivovat ano: $1/x$).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ma_c5_l2_t1",
                question: "Kdy použijeme metodu Per-partes?",
                options: [
                  "Pro integrál podílu.",
                  "Pro integrál součinu dvou 'různorodých' funkcí.",
                  "Když je funkce složená.",
                  "Vždy, když to nejde jinak.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ma_c5_l2_t2",
                question: "Ve vzorci pro Per-partes se nově počítaný integrál:",
                options: ["Přičítá (+).", "Odečítá (-).", "Násobí.", "Dělí."],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Substituční metoda: Nahrazování",
          content: {
            sections: [
              {
                heading: "Obrácená derivace složené funkce",
                text: "Když vidíme složitou funkci, kde je jedna část 'vnořená' do druhé a zároveň tam někde 'plave' její derivace, použijeme substituci. Nahradíme složitý výraz novou proměnnou $t$.\n\nPříklad: $\\int 2x \\cdot \\sin(x^2) dx$. Vidíme $x^2$ a jeho derivaci $2x$. Zavedeme $t = x^2$. Musíme nahradit i diferenciál $dx$ (pomocí derivace: $dt = 2x dx$). Integrál se změní na $\\int \\sin t dt$, což je jednoduché.",
                image: "",
              },
              {
                heading: "1. a 2. druh substituce",
                text: "- 1. druh: $t = g(x)$. Zjednodušujeme výraz (viz příklad výše).\n- 2. druh: $x = g(t)$. Často se používá, když se chceme zbavit odmocniny. Např. $x = t^2$ nám 'vyruší' odmocninu.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ma_c5_l3_t1",
                question: "Co musíme při substituci nahradit kromě proměnné x?",
                options: [
                  "Nic dalšího.",
                  "Diferenciál dx (pomocí dt).",
                  "Integrační konstantu.",
                  "Znaménko integrálu.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ma_c5_l3_t2",
                question:
                  "Jakou substituci bys zvolil pro $\\int \\sin^4(x) \\cdot \\cos(x) dx$?",
                options: [
                  "$t = \\cos x$",
                  "$t = \\sin x$ (protože derivace sinu je cosinus, který tam je).",
                  "$t = x^4$",
                  "Per-partes.",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Integrace racionálních funkcí",
          content: {
            sections: [
              {
                heading: "Rozklad na parciální zlomky",
                text: "Jak integrovat zlomek, kde jsou polynomy nahoře i dole? Např. $\\frac{1}{x^2 - 1}$.\nTrik je rozložit složitý zlomek na součet jednoduchých 'parciálních' zlomků:\n$$ \\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1} $$\nTyto jednoduché zlomky už pak vedou na logaritmy ($\\ln|x-1|$ atd.).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ma_c5_l4_t1",
                question:
                  "Na co obvykle vede integrál typu $\\int \\frac{1}{x+a} dx$?",
                options: [
                  "Na odmocninu.",
                  "Na přirozený logaritmus $\\ln|x+a|$.",
                  "Na sinus.",
                  "Na polynom.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Určitý integrál: Obsah pod křivkou",
          content: {
            sections: [
              {
                heading: "Newton-Leibnizova formule",
                text: "Zatímco neurčitý integrál je funkce, určitý integrál je ČÍSLO. Představuje 'součet' hodnot funkce na intervalu $\\langle a; b \\rangle$.\nPočítáme ho tak, že najdeme primitivní funkci $F(x)$ a dosadíme meze:\n$$ \\int_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a) $$\nOd 'horní meze' odečteme 'dolní mez'.",
                image:
                  "[Image showing area under curve between points a and b]",
              },
              {
                heading: "Geometrický význam",
                text: "Pokud je funkce kladná ($f(x) > 0$), určitý integrál spočítá obsah plochy mezi grafem funkce a osou $x$ na intervalu $a, b$. Pokud je funkce pod osou, integrál vychází záporně.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ma_c5_l5_t1",
                question: "Jaký je výsledek určitého integrálu?",
                options: [
                  "Funkce + C.",
                  "Konkrétní číslo (skalár).",
                  "Matice.",
                  "Vektor.",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ma_c5_l5_t2",
                question:
                  "Vypočítej $\\int_0^1 2x dx$. (Primitivní fce je $x^2$).",
                options: ["$1^2 - 0^2 = 1$", "$0 - 1 = -1$", "$2$", "$1/2$"],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "ma_c5_l5_t3",
                question:
                  "Co když prohodíme meze integrálu ($\\int_b^a$ místo $\\int_a^b$)?",
                options: [
                  "Výsledek se nezmění.",
                  "Změní se znaménko výsledku.",
                  "Výsledek bude nula.",
                  "To nelze udělat.",
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
      title: "Diferenciální rovnice: Modelování světa",
      description:
        "Většina fyzikálních zákonů neříká, kde věci jsou, ale jak se hýbou. Diferenciální rovnice je rovnice, kde neznámou není číslo, ale funkce, a v rovnici se vyskytují její derivace. Je to jazyk, kterým je napsán vesmír – od pohybu planet po šíření epidemií.",
      lessons: [
        {
          title: "Základní pojmy: Rovnice s funkcí",
          content: {
            sections: [
              {
                heading: "Co to je?",
                text: "Obyčejná diferenciální rovnice (ODR) je vztah mezi neznámou funkcí $y(x)$, jejím argumentem $x$ a jejími derivacemi $y', y''...$.\n\nPříklad: $y' = y$. Hledáme funkci, jejíž derivace je stejná jako funkce samotná. (Řešením je $y = e^x$).\n\nŘád rovnice je dán nejvyšší derivací, která se v ní vyskytuje. ($y'' + y = 0$ je rovnice 2. řádu).",
                image: "",
              },
              {
                heading: "Obecné vs. Partikulární řešení",
                text: "Protože při integraci vzniká konstanta $C$, diferenciální rovnice má nekonečně mnoho řešení.\n1. Obecné řešení: Vzorec obsahující konstantu $C$ (popisuje celou rodinu křivek).\n2. Partikulární řešení: Konkrétní funkce pro konkrétní situaci. Získáme ji, když známe počáteční podmínku (např. víme, že v čase $t=0$ byla teplota $100$ stupňů). Tím vypočítáme $C$.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ma_c6_l1_t1",
                question: "Jaký je řád rovnice $y''' + (y')^2 = x$?",
                options: [
                  "1. řád (podle y')",
                  "2. řád (podle mocniny)",
                  "3. řád (nejvyšší derivace)",
                  "0. řád",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ma_c6_l1_t2",
                question:
                  "Co potřebujeme k nalezení partikulárního řešení (konkrétní křivky)?",
                options: [
                  "Větší papír.",
                  "Počáteční podmínku (bod, kterým prochází).",
                  "Druhou derivaci.",
                  "Kalkulačku.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ma_c6_l1_t3",
                question: "Co je neznámou v diferenciální rovnici?",
                options: [
                  "Číslo x.",
                  "Konstanta C.",
                  "Funkce y(x).",
                  "Derivace.",
                ],
                correctAnswer: 2,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Separovatelné rovnice: Třídíme prádlo",
          content: {
            sections: [
              {
                heading: "Metoda separace proměnných",
                text: "Nejjednodušší typ rovnice 1. řádu. Lze ji zapsat ve tvaru $y' = f(x) \\cdot g(y)$.\nPrincip je jednoduchý: Všechno s $y$ dáme na jednu stranu (doleva) a všechno s $x$ na druhou (doprava). Jako když třídíme ponožky a trička.\n\nPostup:\n1. Nahradíme $y'$ za $\\frac{dy}{dx}$.\n2. Vynásobíme/vydělíme tak, aby $dy$ bylo u $y$ a $dx$ u $x$.\n3. Napíšeme před obě strany integrál $\\int$ a spočítáme.",
                image: "",
              },
              {
                heading: "Příklad",
                text: "Mějme $y' = 2x$.\n1. $\\frac{dy}{dx} = 2x$\n2. $dy = 2x dx$\n3. $\\int dy = \\int 2x dx$\n4. $y = x^2 + C$.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ma_c6_l2_t1",
                question: "Kdy lze použít separaci proměnných?",
                options: [
                  "Vždy.",
                  "Když lze rovnici upravit na součin funkce s x a funkce s y.",
                  "Jen když je na pravé straně nula.",
                  "Jen pro rovnice 2. řádu.",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ma_c6_l2_t2",
                question: "Jak přepíšeme $y'$ pro účely separace?",
                options: [
                  "Jako $y/x$.",
                  "Jako $1$.",
                  "Jako $\\frac{dy}{dx}$.",
                  "Jako $\\int y$.",
                ],
                correctAnswer: 2,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Lineární rovnice 1. řádu: Variace konstanty",
          content: {
            sections: [
              {
                heading: "Když separace nestačí",
                text: "Rovnice tvaru $y' + p(x)y = q(x)$. Tady nemůžeme jednoduše oddělit $x$ a $y$ kvůli sčítání. Používáme metodu Variace konstanty.\n\nKrok 1: Vyřešíme 'zkrácenou' rovnici, kde napravo dáme nulu ($y' + p(x)y = 0$). To jde vždy separací. Vyjde nám výsledek s konstantou $C$ (např. $y = C \\cdot e^x$).\n\nKrok 2: Prohlásíme, že $C$ není číslo, ale funkce $C(x)$. Dosadíme tento odhad zpět do původní rovnice i s pravou stranou a vypočítáme, jak musí funkce $C(x)$ vypadat.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ma_c6_l3_t1",
                question: "Co děláme v metodě variace konstanty?",
                options: [
                  "Měníme konstanty v zadání.",
                  "Předstíráme, že konstanta C ve výsledku je funkce C(x).",
                  "Variujeme proměnnou x.",
                  "Násobíme rovnici konstantou.",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Lineární rovnice 2. řádu: Sčítání kmitů",
          content: {
            sections: [
              {
                heading: "Konstantní koeficienty",
                text: "Rovnice typu $ay'' + by' + cy = 0$. Tyto rovnice popisují kmitání (pružiny, elektrické obvody). Úžasné je, že k řešení nepotřebujeme integrovat!\n\nHledáme řešení ve tvaru $y = e^{\\lambda x}$. Dosazením získáme Charakteristickou rovnici (kvadratickou rovnici): $a\\lambda^2 + b\\lambda + c = 0$.",
                image: "[Image illustrating damped harmonic motion graph]",
              },
              {
                heading: "Tři případy řešení",
                text: "Podle diskriminantu kvadratické rovnice:\n1. Dva reálné kořeny: Řešením jsou dvě exponenciály (kmitání nenastane, systém se utlumí).\n2. Jeden dvojnásobný kořen: Mezi řešení se dostane násobení $x$ (kritický útlum).\n3. Komplexní kořeny: Zde se vrací komplexní čísla! Řešení obsahuje $\\sin$ a $\\cos$. To znamená, že systém kmitá (vlní se).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ma_c6_l4_t1",
                question:
                  "Na co převedeme řešení rovnice $y'' + 3y' + 2y = 0$?",
                options: [
                  "Na integrál.",
                  "Na kvadratickou rovnici $\\lambda^2 + 3\\lambda + 2 = 0$.",
                  "Na soustavu rovnic.",
                  "Na derivaci.",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ma_c6_l4_t2",
                question:
                  "Co znamená, když má charakteristická rovnice komplexní kořeny?",
                options: [
                  "Že jsme udělali chybu.",
                  "Že řešení bude obsahovat sinus a kosinus (bude kmitat).",
                  "Že rovnice nemá řešení.",
                  "Že řešení roste do nekonečna.",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ma_c6_l4_t3",
                question: "Co je charakteristická rovnice?",
                options: [
                  "Algebraická (pomocná) rovnice pro výpočet exponentů.",
                  "Rovnice popisující povahu člověka.",
                  "Rovnice tečny.",
                  "Původní diferenciální rovnice.",
                ],
                correctAnswer: 0,
                xp: 10,
              },
            ],
          },
        },
      ],
    },
  ],
};
