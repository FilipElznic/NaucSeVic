export const physicsVS = {
  default: [
    {
      title: "Klasická mechanika (VŠ)",
      lessons: [
        {
          title: "Kinematika bodu: Vektorový popis",
          content: {
            sections: [
              {
                heading: "Polohový vektor a derivace",
                text: "Polohu hmotného bodu v prostoru určuje polohový vektor $\\vec{r}(t)$. Rychlost již není podíl dráhy a času, ale první derivace polohového vektoru podle času: $$ \\vec{v} = \\frac{d\\vec{r}}{dt} = \\dot{\\vec{r}} $$ Zrychlení je druhá derivace polohy (nebo první derivace rychlosti): $$ \\vec{a} = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{r}}{dt^2} = \\ddot{\\vec{r}} $$",
                image: "",
              },
              {
                heading: "Tečné a normálové zrychlení",
                text: "Při pohybu po křivce je užitečné rozložit zrychlení do přirozené souřadné soustavy (Frénetův repér):\n1. Tečné zrychlení ($a_t$): Mění velikost rychlosti. $a_t = \\frac{dv}{dt}$.\n2. Normálové zrychlení ($a_n$): Mění směr rychlosti (zakřivuje dráhu). $a_n = \\frac{v^2}{R}$, kde $R$ je poloměr křivosti trajektorie.",
                image: "",
              },
              {
                heading: "Křivočarý pohyb",
                text: "Pro obecný pohyb v prostoru často používáme jiné než kartézské souřadnice. Například v polárních souřadnicích $(r, \\varphi)$ má rychlost radiální složku (změna vzdálenosti) a transverzální složku (otáčení).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "vs_c1_l1_t1",
                question: "Jak je definována okamžitá rychlost $\\vec{v}$?",
                options: [
                  "$\\vec{v} = \\vec{r} \\cdot t$",
                  "$\\vec{v} = \\int \\vec{r} \\, dt$",
                  "$\\vec{v} = \\frac{d\\vec{r}}{dt}$",
                  "$\\vec{v} = \\frac{\\Delta \\vec{r}}{\\Delta t}$ (pouze pro průměrnou)",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "vs_c1_l1_t2",
                question:
                  "Co způsobuje normálová složka zrychlení $\\vec{a}_n$?",
                options: [
                  "Změnu velikosti rychlosti",
                  "Změnu směru rychlosti (zakřivení trajektorie)",
                  "Zastavení tělesa",
                  "Nic, je fiktivní",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "vs_c1_l1_t3",
                question:
                  "Pokud je $\\vec{r}(t) = (3t, t^2, 0)$, jak vypadá vektor rychlosti?",
                options: [
                  "$(3, 2t, 0)$",
                  "$(3, t, 0)$",
                  "$(0, 2, 0)$",
                  "$(1.5t^2, t^3/3, 0)$",
                ],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "vs_c1_l1_t4",
                question: "Vztah mezi zrychlením a polohou je:",
                options: [
                  "$\\vec{a} = \\dot{\\vec{r}}$",
                  "$\\vec{a} = \\ddot{\\vec{r}}$ (druhá derivace)",
                  "$\\vec{a} = \\int \\vec{r} dt$",
                  "$\\vec{a} = \\vec{r}^2$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "vs_c1_l1_t5",
                question:
                  "Při rovnoměrném pohybu po kružnici je tečné zrychlení:",
                options: [
                  "Konstantní a nenulové",
                  "Rovno normálovému",
                  "Nulové ($dv/dt = 0$)",
                  "Rovno $v^2/R$",
                ],
                correctAnswer: 2,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Dynamika a diferenciální rovnice",
          content: {
            sections: [
              {
                heading: "2. Newtonův zákon obecně",
                text: "Na VŠ definujeme sílu jako časovou změnu hybnosti ($\\vec{p} = m\\vec{v}$):\n$$ \\vec{F} = \\frac{d\\vec{p}}{dt} $$\nTento tvar platí i pro systémy s proměnnou hmotností (např. raketa spalující palivo), kde klasické $F=ma$ selhává.",
                image: "",
              },
              {
                heading: "Pohybová rovnice",
                text: "Řešit fyzikální problém v mechanice obvykle znamená vyřešit diferenciální rovnici 2. řádu:\n$$ m \\frac{d^2\\vec{r}}{dt^2} = \\vec{F}(\\vec{r}, \\dot{\\vec{r}}, t) $$\nK nalezení konkrétního řešení (trajektorie) potřebujeme znát počáteční podmínky (polohu a rychlost v čase $t=0$).",
                image: "",
              },
              {
                heading: "Pohyb s odporem prostředí",
                text: "Reálný příklad: Pád s odporem vzduchu úměrným rychlosti ($\\\\vec{F}_{odpor} = -k\\vec{v}$). Pohybová rovnice je $m\\dot{v} = mg - kv$. Toto je lineární diferenciální rovnice 1. řádu, jejímž řešením je exponenciální funkce náběhu k mezní rychlosti.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "vs_c1_l2_t1",
                question: "Nejobecnější vyjádření 2. Newtonova zákona je:",
                options: [
                  "$\\vec{F} = m \\vec{a}$",
                  "$\\vec{F} = \\frac{d\\vec{p}}{dt}$",
                  "$\\vec{F} = m \\frac{d\\vec{r}}{dt}$",
                  "$\\vec{F} = \\frac{1}{2} m v^2$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "vs_c1_l2_t2",
                question:
                  "Pohybová rovnice harmonického oscilátoru (pružiny) je typu:",
                options: [
                  "$m\\ddot{x} + kx = 0$",
                  "$m\\dot{x} = k$",
                  "$mx^2 = k$",
                  "$m\\ddot{x} = gt$",
                ],
                correctAnswer: 0,
                xp: 30,
              },
              {
                id: "vs_c1_l2_t3",
                question: "Proč je $F=ma$ někdy nedostatečné?",
                options: [
                  "Je to příliš složité",
                  "Neplatí pro tělesa s proměnnou hmotností (rakety)",
                  "Platí jen ve vakuu",
                  "Funguje jen pro kruhový pohyb",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "vs_c1_l2_t4",
                question:
                  "Co potřebujeme k jednoznačnému řešení pohybové rovnice?",
                options: [
                  "Změřit hmotnost",
                  "Znát počáteční podmínky (polohu a rychlost)",
                  "Znát teplotu",
                  "Vypočítat integrál síly",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "vs_c1_l2_t5",
                question: "Hybnost $\\vec{p}$ je definována jako:",
                options: [
                  "$m \\cdot \\vec{a}$",
                  "$m \\cdot \\vec{v}$",
                  "$\\frac{1}{2} m v^2$",
                  "$F \\cdot t$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Práce a konzervativní pole",
          content: {
            sections: [
              {
                heading: "Práce jako křivkový integrál",
                text: "Práce v obecném silovém poli je definována jako křivkový integrál síly po trajektorii $C$:\n$$ W = \\int_C \\vec{F} \\cdot d\\vec{r} $$\nTo znamená, že sčítáme skalární součiny síly a elementárního posunutí podél celé dráhy.",
                image: "",
              },
              {
                heading: "Konzervativní pole",
                text: "Pole je konzervativní, pokud práce nezávisí na tvaru trajektorie, ale jen na počátečním a koncovém bodě (např. gravitační nebo elektrostatické pole). \nMatematicky: Rotace silového pole je nulová ($ \\nabla \\times \\vec{F} = 0 $). V takovém poli práce po uzavřené křivce je vždy nula.",
                image: "",
              },
              {
                heading: "Gradient potenciální energie",
                text: "V konzervativním poli můžeme zavést potenciální energii $E_p$. Síla je pak záporným gradientem potenciální energie:\n$$ \\vec{F} = - \\nabla E_p = - \\left( \\frac{\\partial E_p}{\\partial x}, \\frac{\\partial E_p}{\\partial y}, \\frac{\\partial E_p}{\\partial z} \\right) $$\nTělesa jsou 'tlačena' do míst s nižší potenciální energií.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "vs_c1_l3_t1",
                question:
                  "Práce vykonaná po uzavřené křivce v konzervativním poli je:",
                options: [
                  "Nekonečná",
                  "Závislá na délce křivky",
                  "Nulová",
                  "Maximální",
                ],
                correctAnswer: 2,
                xp: 25,
              },
              {
                id: "vs_c1_l3_t2",
                question: "Vztah mezi silou a potenciální energií je:",
                options: [
                  "$\\vec{F} = E_p$",
                  "$\\vec{F} = - \\nabla E_p$ (záporný gradient)",
                  "$\\vec{F} = \\int E_p dx$",
                  "$\\vec{F} = \\frac{d E_p}{dt}$",
                ],
                correctAnswer: 1,
                xp: 30,
              },
              {
                id: "vs_c1_l3_t3",
                question: "Která síla NENÍ konzervativní?",
                options: [
                  "Gravitační síla",
                  "Síla pružnosti",
                  "Třecí síla (práce závisí na délce dráhy)",
                  "Elektrostatická síla",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "vs_c1_l3_t4",
                question:
                  "Skalární součin $\\vec{F} \\cdot d\\vec{r}$ je nulový, pokud:",
                options: [
                  "Je síla rovnoběžná s posunutím",
                  "Je síla kolmá na posunutí",
                  "Je síla konstantní",
                  "Je trajektorie kruhová",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "vs_c1_l3_t5",
                question: "Symbol $\\nabla$ (nabla) označuje:",
                options: [
                  "Vektorový diferenciální operátor (gradient, divergence, rotace)",
                  "Integrál",
                  "Deltu (změnu)",
                  "Nulu",
                ],
                correctAnswer: 0,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Neinerciální vztažné soustavy",
          content: {
            sections: [
              {
                heading: "Setrvačné síly",
                text: "Newtonovy zákony platí pouze v inerciálních soustavách. Pokud jsme v soustavě, která zrychluje nebo rotuje (neinerciální), musíme zavést tzv. fiktivní (setrvačné) síly, abychom vysvětlili pohyb těles. Tyto síly nemají původ v interakci s jinými tělesy, ale v pohybu soustavy.",
                image: "",
              },
              {
                heading: "Soustava v rotaci",
                text: "V rotující soustavě (např. Země) působí na hmotný bod dvě hlavní setrvačné síly:\n1. Odstředivá síla: Směřuje od osy rotace ($m \\omega^2 r$).\n2. Coriolisova síla: Působí pouze na tělesa, která se v rotující soustavě *pohybují* ($2m \\vec{v} \\times \\vec{\\omega}$).",
                image: "",
              },
              {
                heading: "Důsledky Coriolisovy síly",
                text: "Způsobuje stáčení větrných proudů (pasátů), vymílání pravých břehů řek na severní polokouli a stáčení roviny kyvu Foucaultova kyvadla. Vektorový součin určuje směr: Na severní polokouli stáčí pohyb doprava.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "vs_c1_l4_t1",
                question: "Setrvačné síly zavádíme v:",
                options: [
                  "Inerciálních soustavách",
                  "Neinerciálních soustavách (zrychlujících nebo rotujících)",
                  "Vakuu",
                  "Gravitačním poli",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "vs_c1_l4_t2",
                question: "Coriolisova síla působí na těleso, když:",
                options: [
                  "Těleso stojí v rotující soustavě",
                  "Těleso se pohybuje v rotující soustavě",
                  "Těleso má velkou hmotnost",
                  "Těleso padá ve vakuu",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "vs_c1_l4_t3",
                question:
                  "Na severní polokouli stáčí Coriolisova síla pohybující se objekty:",
                options: ["Doleva", "Doprava", "Nahoru", "Dolů"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "vs_c1_l4_t4",
                question: "Odstředivá síla směřuje:",
                options: [
                  "Do středu otáčení",
                  "Od osy otáčení",
                  "Ve směru rychlosti",
                  "Proti směru rychlosti",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "vs_c1_l4_t5",
                question: "Foucaultovo kyvadlo dokazuje:",
                options: [
                  "Že Země je placatá",
                  "Že Země rotuje kolem své osy",
                  "Že existuje gravitace",
                  "Že perioda závisí na hmotnosti",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Analytická mechanika: Lagrangeův formalismus",
          content: {
            sections: [
              {
                heading: "Proč nová mechanika?",
                text: "Newtonova vektorová mechanika je složitá u systémů s vazbami (např. kulička na drátě, dvojité kyvadlo). Museli bychom počítat síly reakce vazby. Analytická mechanika to obchází pomocí energií a tzv. zobecněných souřadnic ($q_i$).",
                image: "",
              },
              {
                heading: "Lagrangián (L)",
                text: "Základní funkce systému, definovaná jako rozdíl kinetické a potenciální energie:\n$$ L = T - V $$\n(Pozor na znaménko, není to celková energie!).",
                image: "",
              },
              {
                heading: "Euler-Lagrangeovy rovnice",
                text: "Pohyb systému se řídí rovnicemi:\n$$ \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial \\dot{q}_i} \\right) - \\frac{\\partial L}{\\partial q_i} = 0 $$\nZ této jedné rovnice (principu nejmenší akce) lze odvodit veškerý pohyb, aniž bychom museli kreslit vektory sil.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "vs_c1_l5_t1",
                question: "Lagrangián $L$ je definován jako:",
                options: [
                  "$L = T + V$ (Celková energie)",
                  "$L = T - V$ (Kinetická minus Potenciální)",
                  "$L = F \\cdot v$",
                  "$L = m \\cdot a$",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "vs_c1_l5_t2",
                question: "Hlavní výhoda Lagrangeova formalismu je:",
                options: [
                  "Je jednodušší pro sčítání sil",
                  "Umožňuje snadné řešení úloh s vazbami a eliminuje vazbové síly",
                  "Nepotřebuje derivace",
                  "Funguje jen ve statice",
                ],
                correctAnswer: 1,
                xp: 30,
              },
              {
                id: "vs_c1_l5_t3",
                question: "Zobecněné souřadnice $q_i$:",
                options: [
                  "Musí být vždy kartézské (x, y, z)",
                  "Mohou být libovolné parametry popisující stav systému (např. úhly)",
                  "Jsou vždy konstantní",
                  "Jsou síly",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "vs_c1_l5_t4",
                question:
                  "Princip nejmenší akce (Hamiltonův princip) říká, že příroda:",
                options: [
                  "Minimalizuje celkovou energii",
                  "Minimalizuje (extremalizuje) integrál akce $S = \\int L dt$",
                  "Maximalizuje sílu",
                  "Minimalizuje čas",
                ],
                correctAnswer: 1,
                xp: 35,
              },
              {
                id: "vs_c1_l5_t5",
                question:
                  "Symbol $\\partial$ (např. $\\frac{\\partial L}{\\partial q}$) značí:",
                options: [
                  "Obyčejnou derivaci",
                  "Parciální derivaci",
                  "Integrál",
                  "Sumu",
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
      title: "Speciální a obecná teorie relativity",
      lessons: [
        {
          title: "Postuláty a Lorentzova transformace",
          content: {
            sections: [
              {
                heading: "Konec éteru",
                text: "Klasická fyzika předpokládala, že světlo se šíří v médiu zvaném 'éter'. Michelsonův-Morleyho experiment ale ukázal, že rychlost světla je ve všech směrech stejná, bez ohledu na pohyb Země. To vedlo k pádu Newtonovy mechaniky pro vysoké rychlosti.",
                image: "",
              },
              {
                heading: "Dva postuláty STR",
                text: "Einstein založil teorii na dvou tvrzeních:\n1. Princip relativity: Fyzikální zákony jsou stejné ve všech inerciálních vztažných soustavách.\n2. Konstantnost rychlosti světla: Rychlost světla ve vakuu ($c$) je konstantní a nezávislá na pohybu zdroje i pozorovatele.",
                image: "",
              },
              {
                heading: "Lorentzova transformace",
                text: "Galileiho transformace ($x' = x - vt$) nefunguje pro světlo. Musíme použít Lorentzovu transformaci, která míchá čas a prostor. Zavádíme Lorentzův faktor $\\gamma$ (gamma):\n$$ \\gamma = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}} $$\nPro $v \\ll c$ je $\\gamma \\approx 1$, pro $v \\to c$ jde $\\gamma \\to \\infty$.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "vs_c2_l1_t1",
                question:
                  "Jaká je hodnota Lorentzova faktoru $\\gamma$ pro nulovou rychlost?",
                options: ["0", "1", "Nekonečno", "c"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "vs_c2_l1_t2",
                question: "Druhý postulát STR říká, že:",
                options: [
                  "Čas je absolutní",
                  "Rychlost světla je konstantní pro všechny inerciální pozorovatele",
                  "Hmotnost roste s rychlostí",
                  "Vše je relativní",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "vs_c2_l1_t3",
                question:
                  "Pokud se sčítají dvě rychlosti $0,5c$ a $0,5c$ (proti sobě), výsledná rychlost podle Galilea by byla $c$. Podle Einsteina je:",
                options: [
                  "Větší než c",
                  "Rovna c",
                  "Menší než c (cca 0,8c)",
                  "Nulová",
                ],
                correctAnswer: 2,
                xp: 25,
              },
              {
                id: "vs_c2_l1_t4",
                question: "Michelsonův-Morleyho experiment dokázal:",
                options: [
                  "Existenci éteru",
                  "Neexistenci éteru (rychlost světla nezávisí na směru)",
                  "Stáčení světla gravitací",
                  "Existenci atomů",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "vs_c2_l1_t5",
                question: "Vztah pro Lorentzovu transformaci souřadnice x je:",
                options: [
                  "$x' = x - vt$",
                  "$x' = \\gamma (x - vt)$",
                  "$x' = x - ct$",
                  "$x' = \\gamma x$",
                ],
                correctAnswer: 1,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Kinematické důsledky: Čas a délka",
          content: {
            sections: [
              {
                heading: "Dilatace času",
                text: "Hodiny, které se vůči pozorovateli pohybují, tikají pomaleji než hodiny v klidu. \n$$ \\Delta t = \\gamma \\Delta t_0 $$\nKde $\\Delta t_0$ je vlastní čas (měřený v soustavě hodin). Efekt je reálný – miony vznikající v atmosféře dopadnou na zem jen díky tomu, že se jim 'zpomalí čas' (pro nás žijí déle).",
                image: "",
              },
              {
                heading: "Kontrakce délek",
                text: "Tělesa se ve směru pohybu jeví zkrácená.\n$$ L = \\frac{L_0}{\\gamma} $$\nKde $L_0$ je vlastní délka. Pro foton ($v=c$) by se vesmír zkrátil na nulovou tloušťku (pohyb v čase se zastaví).",
                image: "",
              },
              {
                heading: "Relativnost současnosti",
                text: "Dvě události, které jsou současné pro jednoho pozorovatele, nemusí být současné pro jiného, pokud se vůči sobě pohybují. Současnost není absolutní pojem. (Příklad: Blesky na koncích jedoucího vlaku).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "vs_c2_l2_t1",
                question: "Co je to vlastní čas ($\\Delta t_0$)?",
                options: [
                  "Čas měřený pozorovatelem, který se pohybuje",
                  "Čas měřený v soustavě, kde jsou hodiny v klidu",
                  "Čas na Slunci",
                  "Světový čas",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "vs_c2_l2_t2",
                question:
                  "Paradox dvojčat: Jedno dvojče letí raketou k hvězdám a zpět. Po návratu:",
                options: [
                  "Budou stejně stará",
                  "Dvojče z rakety bude mladší (uplynulo pro něj méně času)",
                  "Dvojče z rakety bude starší",
                  "Nelze určit",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "vs_c2_l2_t3",
                question:
                  "Pokud se tyč pohybuje rychlostí blízkou c, její délka se pozorovateli jeví:",
                options: ["Delší", "Kratší (kontrakce)", "Stejná", "Nekonečná"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "vs_c2_l2_t4",
                question: "Jsou události A a B současné ve všech soustavách?",
                options: [
                  "Ano, čas plyne všude stejně",
                  "Ne, současnost je relativní",
                  "Ano, pokud jsou na stejném místě",
                  "Ne, záleží na teplotě",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "vs_c2_l2_t5",
                question: "Vlastní délka objektu ($L_0$) je:",
                options: [
                  "Délka měřená v soustavě, vůči které se objekt pohybuje",
                  "Nejmenší možná naměřená délka",
                  "Délka měřená v soustavě, kde je objekt v klidu (největší délka)",
                  "Délka ve vakuu",
                ],
                correctAnswer: 2,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Relativistická dynamika",
          content: {
            sections: [
              {
                heading: "Hmotnost a energie",
                text: "Hmotnost a energie jsou dvě formy téže věci. Slavná rovnice $E = mc^2$ platí pro klidovou energii. Pro pohybující se částici je celková energie:\n$$ E = \\gamma m_0 c^2 $$\nKde $m_0$ je klidová hmotnost. S blížící se rychlostí světla energie roste nade všechny meze.",
                image: "",
              },
              {
                heading: "Relativistická hybnost",
                text: "Klasické $\\vec{p} = m\\vec{v}$ neplatí. Správně je:\n$$ \\vec{p} = \\gamma m_0 \\vec{v} $$\nProto nelze urychlit částici s hmotností na rychlost světla – vyžadovalo by to nekonečnou energii a hybnost.",
                image: "",
              },
              {
                heading: "Vztah energie a hybnosti",
                text: "Obecný vztah, který platí i pro částice s nulovou klidovou hmotností (fotony):\n$$ E^2 = (pc)^2 + (m_0 c^2)^2 $$\nPro foton ($m_0=0$) platí $E = pc$.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "vs_c2_l3_t1",
                question: "Jaká energie odpovídá klidové hmotnosti tělesa?",
                options: [
                  "$E = 1/2 mv^2$",
                  "$E = m_0 c^2$",
                  "$E = pc$",
                  "$E = mgh$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "vs_c2_l3_t2",
                question:
                  "Proč nemůže hmotné těleso dosáhnout rychlosti světla?",
                options: [
                  "Protože by shořelo",
                  "Protože jeho setrvačná hmotnost (odpor proti zrychlení) roste nade všechny meze",
                  "Protože $c$ není konstantní",
                  "Protože by se čas zastavil",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "vs_c2_l3_t3",
                question: "Jakou klidovou hmotnost má foton?",
                options: [
                  "Velmi malou",
                  "Nulovou",
                  "Závislou na frekvenci",
                  "1 kg",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "vs_c2_l3_t4",
                question: "Pro foton platí vztah mezi energií a hybností:",
                options: ["$E = p^2 / 2m$", "$E = pc$", "$E = 0$", "$p = 0$"],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "vs_c2_l3_t5",
                question:
                  "Při jaderném výbuchu se uvolní energie, která pochází z:",
                options: [
                  "Chemických vazeb",
                  "Úbytku hmotnosti (hmotnostního defektu)",
                  "Gravitace",
                  "Tepla okolí",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Časoprostor a interval",
          content: {
            sections: [
              {
                heading: "Minkowského prostor",
                text: "Hermann Minkowski ukázal, že čas a prostor nelze oddělit. Tvoří 4-rozměrné kontinuum (3 prostorové + 1 časová souřadnice). Bod v časoprostoru se nazývá událost $(ct, x, y, z)$.",
                image: "",
              },
              {
                heading: "Invariantní interval",
                text: "Vzdálenost v prostoru ($dx$) ani doba trvání ($dt$) nejsou absolutní. Co je ale stejné pro všechny pozorovatele, je časoprostorový interval $ds$:\n$$ ds^2 = c^2 dt^2 - dx^2 - dy^2 - dz^2 $$\nPokud je $ds^2 > 0$, události jsou kauzálně spojitelné (časupodobný interval).",
                image: "",
              },
              {
                heading: "Světelný kužel",
                text: "Rozděluje časoprostor na tři oblasti:\n1. Absolutní minulost: Co mohlo ovlivnit mě.\n2. Absolutní budoucnost: Co mohu ovlivnit já.\n3. Absolutně jinde: Události, ke kterým bych musel letět rychleji než světlo (nemohou mě ovlivnit).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "vs_c2_l4_t1",
                question: "Kolik rozměrů má Minkowského časoprostor?",
                options: ["3", "4 (3 prostorové + 1 časový)", "5", "11"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "vs_c2_l4_t2",
                question: "Invariantní interval $ds^2$ je:",
                options: [
                  "Stejný pro všechny inerciální pozorovatele",
                  "Různý pro každého pozorovatele",
                  "Vždy nulový",
                  "Roven prostorové vzdálenosti",
                ],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "vs_c2_l4_t3",
                question: "Pro světelný paprsek je interval $ds^2$ roven:",
                options: ["c", "Nule (světelný interval)", "Kladný", "Záporný"],
                correctAnswer: 1,
                xp: 30,
              },
              {
                id: "vs_c2_l4_t4",
                question:
                  "Události v oblasti 'absolutně jinde' (mimo světelný kužel):",
                options: [
                  "Mohou se kauzálně ovlivňovat",
                  "Nemohou se kauzálně ovlivňovat (signál by musel být rychlejší než c)",
                  "Jsou v minulosti",
                  "Jsou v budoucnosti",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "vs_c2_l4_t5",
                question: "Světelný kužel představuje:",
                options: [
                  "Trajektorii blesku",
                  "Hranici maximální rychlosti šíření informace (kauzality)",
                  "Tvar vesmíru",
                  "Dráhu Země",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Úvod do Obecné relativity (OTR)",
          content: {
            sections: [
              {
                heading: "Princip ekvivalence",
                text: "Einsteinův 'nejšťastnější nápad'. V uzavřené kabině (výtahu) nelze žádným experimentem rozlišit, zda stojíme na Zemi (gravitace) nebo zda nás táhne raketa ve vesmíru zrychlením $g$ (setrvačná síla). Gravitace a zrychlení jsou lokálně nerozlišitelné.",
                image: "",
              },
              {
                heading: "Zakřivení časoprostoru",
                text: "V OTR gravitace není síla, ale důsledek zakřivení časoprostoru hmotou. Hmota říká prostoru, jak se má zakřivit, a prostor říká hmotě, jak se má pohybovat. Tělesa se pohybují po nejrovnějších možných drahách – geodetikách.",
                image: "",
              },
              {
                heading: "Důkazy OTR",
                text: "1. Stáčení perihelia Merkuru: Jeho dráha se stáčí jinak, než by chtěl Newton.\n2. Ohyb světla: Světlo hvězd se v blízkosti Slunce ohýbá (prokázáno při zatmění 1919).\n3. Gravitační rudý posuv: Čas v silném gravitačním poli plyne pomaleji (GPS by bez korekce nefungovalo!).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "vs_c2_l5_t1",
                question:
                  "Podle principu ekvivalence je gravitace nerozlišitelná od:",
                options: [
                  "Magnetismu",
                  "Zrychlení vztažné soustavy",
                  "Rychlosti",
                  "Tepla",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "vs_c2_l5_t2",
                question: "Co je gravitace podle Obecné teorie relativity?",
                options: [
                  "Síla působící na dálku",
                  "Zakřivení časoprostoru způsobené hmotou a energií",
                  "Výměna gravitonů",
                  "Elektromagnetická interakce",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "vs_c2_l5_t3",
                question: "Geodetika je:",
                options: [
                  "Přístroj na měření Země",
                  "Nejkratší (nejrovnější) spojnice dvou bodů v zakřiveném prostoru",
                  "Křivá čára",
                  "Dráha elektronu",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "vs_c2_l5_t4",
                question:
                  "Jak plyne čas v silném gravitačním poli (např. u černé díry)?",
                options: [
                  "Rychleji než ve vakuu",
                  "Pomaleji než ve slabém poli",
                  "Stejně",
                  "Čas se vrací zpět",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "vs_c2_l5_t5",
                question: "Co se stane se světlem, když prolétá kolem Slunce?",
                options: [
                  "Zrychlí",
                  "Jeho dráha se zakřiví (ohne se)",
                  "Odrazí se zpět",
                  "Nic",
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
      title: "Termodynamika a statistická fyzika",
      lessons: [
        {
          title: "Termodynamické potenciály",
          content: {
            sections: [
              {
                heading: "Proč nestačí vnitřní energie?",
                text: "Vnitřní energie $U(S, V)$ je přirozená pro procesy při stálé entropii a objemu. V praxi ale často kontrolujeme teplotu $T$ nebo tlak $p$. Proto zavádíme nové funkce stavu pomocí Legendreovy transformace. Tyto funkce nazýváme termodynamické potenciály.",
                image: "",
              },
              {
                heading: "Entalpie (H) a Helmholtzova energie (F)",
                text: "1. Entalpie ($H = U + pV$): Přirozené proměnné $(S, p)$. Vhodná pro izobarické procesy (chemické reakce v otevřené nádobě). Změna $H$ odpovídá vyměněnému teplu.\n2. Helmholtzova volná energie ($F = U - TS$): Přirozené proměnné $(T, V)$. Určuje práci, kterou systém může vykonat při konstantní teplotě.",
                image: "",
              },
              {
                heading: "Gibbsova energie (G)",
                text: "Nejdůležitější potenciál pro chemii a fázové přměny: $G = H - TS$. Přirozené proměnné jsou $(T, p)$.\nSystém při konstantním tlaku a teplotě samovolně směřuje do stavu s minimální Gibbsovou energií. Podmínka rovnováhy fází je rovnost jejich molárních Gibbsových energií (chemických potenciálů).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "vs_c3_l1_t1",
                question:
                  "Který potenciál je minimální při rovnováze za konstantního tlaku a teploty?",
                options: [
                  "Vnitřní energie (U)",
                  "Entropie (S)",
                  "Gibbsova energie (G)",
                  "Entalpie (H)",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "vs_c3_l1_t2",
                question: "Vztah pro definici Entalpie je:",
                options: [
                  "$H = U - TS$",
                  "$H = U + pV$",
                  "$H = TS + pV$",
                  "$H = G - pV$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "vs_c3_l1_t3",
                question: "Přirozené proměnné Helmholtzovy energie F jsou:",
                options: [
                  "Tlak a objem (p, V)",
                  "Teplota a objem (T, V)",
                  "Entropie a tlak (S, p)",
                  "Teplota a tlak (T, p)",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "vs_c3_l1_t4",
                question: "Legendreova transformace slouží k:",
                options: [
                  "Výpočtu práce plynu",
                  "Přechodu od jedněch nezávislých proměnných k druhým při zachování informace o systému",
                  "Integraci stavové rovnice",
                  "Měření teploty",
                ],
                correctAnswer: 1,
                xp: 30,
              },
              {
                id: "vs_c3_l1_t5",
                question: "Co představuje člen $TS$ v definicích potenciálů?",
                options: [
                  "Mechanickou práci",
                  "Vázanou energii (teplo), kterou nelze využít k práci",
                  "Kinetickou energii molekul",
                  "Tlakovou energii",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Maxwellovy vztahy a Entropie",
          content: {
            sections: [
              {
                heading: "Matematika diferenciálů",
                text: "Protože termodynamické potenciály jsou stavové funkce, jejich druhé smíšené derivace jsou záměnné (Schwarzova věta). To vede k Maxwellovým vztahům, které propojují zdánlivě nesouvisející veličiny. Například nám umožňují spočítat změnu entropie (což se špatně měří) pomocí změny objemu a tlaku (což se měří snadno).",
                image: "",
              },
              {
                heading: "Statistická definice Entropie",
                text: "Ludwig Boltzmann definoval entropii ($S$) jako míru neuspořádanosti systému:\n$$ S = k_B \\cdot \\ln \\Omega $$\nKde $\\Omega$ (Omega) je počet mikrostavů (způsobů uspořádání částic), které realizují daný makrostav. Druhý zákon termodynamiky říká: Systém se vyvíjí do stavu s největší pravděpodobností (největší $\\Omega$, tedy největší $S$).",
                image: "",
              },
              {
                heading: "Třetí termodynamický zákon",
                text: "Nernstův teorém: Při teplotě blížící se absolutní nule ($0 K$) se entropie čisté krystalické látky blíží k nule. To znamená, že systém konverguje do jediného základního kvantového stavu ($\\\\Omega = 1, \\ln 1 = 0$).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "vs_c3_l2_t1",
                question: "Boltzmannův vztah pro entropii je:",
                options: [
                  "$S = Q / T$",
                  "$S = k_B \\ln \\Omega$",
                  "$S = U + pV$",
                  "$S = k_B T$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "vs_c3_l2_t2",
                question: "Maxwellovy vztahy vycházejí z faktu, že:",
                options: [
                  "Energie se zachovává",
                  "Termodynamické potenciály jsou exaktní diferenciály (stavové funkce)",
                  "Teplota je konstantní",
                  "Ideální plyn neexistuje",
                ],
                correctAnswer: 1,
                xp: 30,
              },
              {
                id: "vs_c3_l2_t3",
                question:
                  "Podle 3. termodynamického zákona je entropie dokonalého krystalu při 0 K:",
                options: [
                  "Nekonečná",
                  "Nulová",
                  "Záporná",
                  "Rovna plynové konstantě",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "vs_c3_l2_t4",
                question: "Co je to mikrostav?",
                options: [
                  "Stav, kdy je systém velmi malý",
                  "Konkrétní kvantové uspořádání všech částic systému (polohy a hybnosti)",
                  "Makroskopicky měřitelná veličina (tlak, teplota)",
                  "Krátký časový úsek",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "vs_c3_l2_t5",
                question: "Entropie izolovaného systému:",
                options: [
                  "Může klesat",
                  "Je vždy konstantní",
                  "Nikdy neklesá (zůstává stejná nebo roste)",
                  "Kmitá",
                ],
                correctAnswer: 2,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Kanonický soubor a statistika",
          content: {
            sections: [
              {
                heading: "Statistický soubor",
                text: "Místo sledování jedné částice sledujeme obrovské množství kopií systému (soubor). Nejčastější je kanonický soubor: systém má fixní objem ($V$), počet částic ($N$) a je v kontaktu s tepelnou lázní o teplotě ($T$). Energie systému fluktuuje.",
                image: "",
              },
              {
                heading: "Boltzmannův faktor",
                text: "Pravděpodobnost, že systém nalezneme ve stavu s energií $E_i$, je úměrná exponenciále:\n$$ P(E_i) \\propto e^{-\\frac{E_i}{k_B T}} $$\nTento člen se nazývá Boltzmannův faktor. Říká, že stavy s nižší energií jsou pravděpodobnější, ale s rostoucí teplotou roste šance na obsazení vyšších energetických hladin.",
                image: "",
              },
              {
                heading: "Partiční funkce (Z)",
                text: "Suma přes všechny stavy: $Z = \\sum e^{-E_i / k_B T}$. Je to nejdůležitější funkce ve statistické fyzice. Pokud známe $Z$, můžeme zderivovat všechny termodynamické veličiny (energii, tlak, entropii, Helmholtzovu energii $F = -k_B T \\ln Z$).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "vs_c3_l3_t1",
                question: "Kanonický soubor popisuje systém, který:",
                options: [
                  "Je izolovaný (nemění energii)",
                  "Vyměňuje teplo s okolím (konstantní T)",
                  "Vyměňuje částice s okolím",
                  "Nemá žádné částice",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "vs_c3_l3_t2",
                question: "Partiční funkce (statistická suma) Z slouží k:",
                options: [
                  "Výpočtu pravděpodobnosti",
                  "Výpočtu všech termodynamických veličin systému",
                  "Měření teploty",
                  "Určení polohy částic",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "vs_c3_l3_t3",
                question: "Boltzmannův faktor $e^{-E/kT}$ říká, že:",
                options: [
                  "Vysokoenergetické stavy jsou pravděpodobnější",
                  "Nízkoenergetické stavy jsou pravděpodobnější",
                  "Všechny stavy jsou stejně pravděpodobné",
                  "Energie nezávisí na teplotě",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "vs_c3_l3_t4",
                question:
                  "Vztah mezi Helmholtzovou energií F a partiční funkcí Z je:",
                options: [
                  "$F = Z$",
                  "$F = -k_B T \\ln Z$",
                  "$F = Z^2$",
                  "$F = 1/Z$",
                ],
                correctAnswer: 1,
                xp: 30,
              },
              {
                id: "vs_c3_l3_t5",
                question:
                  "Při teplotě $T \\to 0$ (absolutní nula) systém obsadí:",
                options: [
                  "Všechny stavy rovnoměrně",
                  "Pouze základní stav (nejnižší energie)",
                  "Pouze stavy s nejvyšší energií",
                  "Stavy náhodně",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Kvantové statistiky",
          content: {
            sections: [
              {
                heading: "Nerozlišitelné částice",
                text: "V kvantové mechanice nelze rozlišit dvě identické částice (např. dva elektrony). To vede k tomu, že klasická Maxwell-Boltzmannova statistika selhává. Musíme rozlišovat dva typy částic: Fermiony a Bosony.",
                image: "",
              },
              {
                heading: "Fermi-Diracova statistika",
                text: "Platí pro Fermiony (elektrony, protony - spin 1/2). Platí pro ně Pauliho vylučovací princip (dva fermiony nemohou být ve stejném stavu). \nRozdělení: $$ f(E) = \\frac{1}{e^{(E-\\mu)/kT} + 1} $$ \nDůležité pro vodivost elektronů v kovech.",
                image: "",
              },
              {
                heading: "Bose-Einsteinova statistika",
                text: "Platí pro Bosony (fotony, atomy helia-4 - celočíselný spin). Mohou sdílet stejný stav ('rády se shlukují'). \nRozdělení: $$ f(E) = \\frac{1}{e^{(E-\\mu)/kT} - 1} $$ \nUmožňuje vznik laseru nebo supratekutosti (Bose-Einsteinův kondenzát).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "vs_c3_l4_t1",
                question: "Pauliho vylučovací princip platí pro:",
                options: ["Bosony", "Fermiony", "Klasické částice", "Fotony"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "vs_c3_l4_t2",
                question: "Které rozdělení popisuje elektrony v kovu?",
                options: [
                  "Maxwell-Boltzmann",
                  "Bose-Einstein",
                  "Fermi-Dirac",
                  "Gaussovo",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "vs_c3_l4_t3",
                question: "Hlavní rozdíl ve vzorcích F-D a B-E je:",
                options: [
                  "Znaménko ve jmenovateli (+1 vs -1)",
                  "Teplota",
                  "Chemický potenciál",
                  "Žádný, jsou stejné",
                ],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "vs_c3_l4_t4",
                question: "Foton je:",
                options: ["Fermion", "Boson", "Klasická částice", "Atom"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "vs_c3_l4_t5",
                question: "Bose-Einsteinův kondenzát vzniká:",
                options: [
                  "Při velmi vysokých teplotách",
                  "Při teplotách blízkých absolutní nule",
                  "Ve vakuu za pokojové teploty",
                  "V jaderném reaktoru",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Fázové přechody",
          content: {
            sections: [
              {
                heading: "Klasifikace přechodů",
                text: "Fázový přechod je náhlá změna vlastností látky (hustota, magnetizace). \n- 1. druhu: Skoková změna entropie a objemu. Je spojena s latentním teplem (např. tání ledu, var vody).\n- 2. druhu: Spojitá entropie, ale skok ve specifickém teple (např. přechod do supravodivého stavu).",
                image: "",
              },
              {
                heading: "Clausius-Clapeyronova rovnice",
                text: "Popisuje křivku fázové rovnováhy (např. jak se mění teplota varu s tlakem). \n$$ \\frac{dp}{dT} = \\frac{L}{T \\Delta V} $$\nKde $L$ je skupenské teplo a $\\Delta V$ změna objemu. Vysvětluje, proč voda vře na horách při nižší teplotě (nižší tlak -> nižší teplota varu).",
                image: "",
              },
              {
                heading: "Kritický bod",
                text: "Bod na fázovém diagramu, kde mizí rozdíl mezi kapalinou a plynem. Nad kritickou teplotou a tlakem existuje jen 'superkritická tekutina'. Skupenské teplo v kritickém bodě klesá k nule.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "vs_c3_l5_t1",
                question: "Fázový přechod 1. druhu je charakteristický:",
                options: [
                  "Spojitou změnou hustoty",
                  "Absorpcí nebo uvolněním latentního (skupenského) tepla",
                  "Nulovou změnou entropie",
                  "Neměnností teploty varu",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "vs_c3_l5_t2",
                question: "Clausius-Clapeyronova rovnice určuje:",
                options: [
                  "Rychlost molekul",
                  "Sklon křivky fázové rovnováhy (dp/dT) v p-T diagramu",
                  "Vnitřní energii plynu",
                  "Účinnost motoru",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "vs_c3_l5_t3",
                question: "V kritickém bodě:",
                options: [
                  "Nelze rozlišit kapalinu a plyn",
                  "Látka tuhne",
                  "Je teplota 0 K",
                  "Je tlak nulový",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "vs_c3_l5_t4",
                question: "Proč led taje pod tlakem brusle (u vody)?",
                options: [
                  "Protože $\\Delta V$ při tání ledu je záporné (voda je hustší), což dle rovnice snižuje teplotu tání při zvýšení tlaku",
                  "Třením se led zahřívá (pouze tento efekt)",
                  "Protože led je kluzký",
                  "Protože brusle je ostrá",
                ],
                correctAnswer: 0,
                xp: 30,
              },
              {
                id: "vs_c3_l5_t5",
                question:
                  "Chemický potenciál $\\mu$ dvou fází v rovnováze musí být:",
                options: ["Různý", "Stejný", "Nulový", "Nekonečný"],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Teorie elektromagnetického pole: Maxwellovy rovnice a vlny",
      lessons: [
        {
          title: "Maxwellovy rovnice",
          content: {
            sections: [
              {
                heading: "Maxwellův posuvný proud",
                text: "Klasický Ampérův zákon nestačil pro nestacionární pole (např. u nabíjení kondenzátoru). Maxwell zavedl posuvný proud $\\vec{J}_D = \\frac{\\partial \\vec{D}}{\\partial t}$. Tím zobecnil první rovnici na tvar $\\nabla \\times \\vec{H} = \\vec{J} + \\frac{\\partial \\vec{D}}{\\partial t}$, což propojilo časovou změnu elektrického pole se vznikem pole magnetického.",
                image: "",
              },
              {
                heading: "Faradayův zákon indukce",
                text: "Druhá Maxwellova rovnice ($\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$) říká, že časová změna magnetického pole indukuje vírové elektrické pole. To je fyzikální podstata elektromagnetické indukce, na které fungují generátory a transformátory.",
                image: "",
              },
              {
                heading: "Gaussovy zákony",
                text: "Třetí rovnice ($\\nabla \\cdot \\vec{D} = \\rho$) potvrzuje, že zdrojem elektrického pole jsou náboje. Čtvrtá rovnice ($\\nabla \\cdot \\vec{B} = 0$) říká, že magnetické siločáry jsou vždy uzavřené a neexistují magnetické monopóly (izolované póly).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "elmag_c4_l1_t1",
                question: "Který člen přidal J. C. Maxwell do Ampérova zákona?",
                options: [
                  "Vodivý proud ($\\vec{J}$)",
                  "Posuvný proud ($\\partial \\vec{D} / \\partial t$)",
                  "Gradient potenciálu",
                  "Magnetický tok",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "elmag_c4_l1_t2",
                question: "Co říká rovnice $\\nabla \\cdot \\vec{B} = 0$?",
                options: [
                  "Magnetické pole je konzervativní",
                  "Neexistují magnetické monopóly",
                  "Zdrojem magnetického pole je náboj",
                  "Magnetické pole koná práci",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "elmag_c4_l1_t3",
                question:
                  "Elektrické pole indukované změnou magnetického pole (Faradayův zákon) je:",
                options: [
                  "Vírové (ne konzervativní)",
                  "Konzervativní (potenciálové)",
                  "Vždy nulové",
                  "Statické",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "elmag_c4_l1_t4",
                question:
                  "Která veličina vystupuje v 1. Maxwellově rovnici jako zdroj $\\vec{H}$ kromě proudu?",
                options: [
                  "Časová změna elektrické indukce",
                  "Gradient teploty",
                  "Divergence rychlosti",
                  "Hustota náboje",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "elmag_c4_l1_t5",
                question: "Diferenciální operátor $\\nabla \\times$ se nazývá:",
                options: ["Divergence", "Rotace", "Gradient", "Laplacián"],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Elektromagnetické vlnění ve vakuu",
          content: {
            sections: [
              {
                heading: "Vlnová rovnice",
                text: "Kombinací I. a II. Maxwellovy rovnice pro vakuum (kde $\\vec{J}=0, \\rho=0$) získáme vlnovou rovnici: \n$$ \\Delta \\vec{E} - \\mu_0\\varepsilon_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2} = 0 $$\nTo dokazuje, že elektromagnetické pole se může šířit prostorem bez přítomnosti vodičů.",
                image: "",
              },
              {
                heading: "Rychlost světla",
                text: "Rychlost šíření vln ve vakuu vyplývá přímo z konstant prostředí: \n$$ c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 3 \\cdot 10^8 \\, \\text{m/s} $$\nMaxwell tímto teoreticky předpověděl, že světlo je elektromagnetické vlnění.",
                image: "",
              },
              {
                heading: "Vlnová impedance a polarizace",
                text: "V rovinné vlně jsou vektory $\\vec{E}$ a $\\vec{H}$ navzájem kolmé a kolmé na směr šíření $\\vec{k}$. Jsou ve fázi a jejich poměr je dán vlnovou impedancí vakua:\n$$ Z_0 = \\frac{E}{H} = \\sqrt{\\frac{\\mu_0}{\\varepsilon_0}} \\approx 377 \\, \\Omega $$",
                image: "",
              },
            ],
            tasks: [
              {
                id: "elmag_c4_l2_t1",
                question: "Vztah pro rychlost světla ve vakuu je:",
                options: [
                  "$c = \\sqrt{\\mu_0 \\varepsilon_0}$",
                  "$c = 1 / \\sqrt{\\mu_0 \\varepsilon_0}$",
                  "$c = \\mu_0 / \\varepsilon_0$",
                  "$c = E \\cdot H$",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "elmag_c4_l2_t2",
                question:
                  "Jaký úhel svírají vektory $\\vec{E}$ a $\\vec{H}$ v rovinné postupné vlně?",
                options: [
                  "$0^\\circ$ (jsou rovnoběžné)",
                  "$90^\\circ$ (jsou na sebe kolmé)",
                  "$45^\\circ$",
                  "$180^\\circ$ (jsou protiběžné)",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "elmag_c4_l2_t3",
                question: "Hodnota vlnové impedance vakua $Z_0$ je přibližně:",
                options: [
                  "$50 \\, \\Omega$",
                  "$377 \\, \\Omega (120\\pi)$",
                  "$1000 \\, \\Omega$",
                  "$0 \\, \\Omega$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "elmag_c4_l2_t4",
                question: "Elektromagnetická vlna ve vakuu je:",
                options: ["Podélná", "Příčná", "Stojatá", "Skalární"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "elmag_c4_l2_t5",
                question:
                  "Pokud se zdvojnásobí permitivita prostředí ($\\varepsilon_r = 4$), rychlost vlny $v$:",
                options: [
                  "Vzroste 2x",
                  "Klesne na polovinu",
                  "Zůstane stejná",
                  "Klesne 4x",
                ],
                correctAnswer: 1,
                xp: 30,
              },
            ],
          },
        },
        {
          title: "Energie a Poyntingův vektor",
          content: {
            sections: [
              {
                heading: "Poyntingův vektor",
                text: "Tok elektromagnetické energie definuje vektor $\\vec{S} = \\vec{E} \\times \\vec{H}$. Jeho směr ukazuje směr šíření energie a velikost udává okamžitý plošný výkon $[W/m^2]$.",
                image: "",
              },
              {
                heading: "Šíření ve ztrátovém prostředí (Skin efekt)",
                text: "Pokud má látka vodivost $\\gamma > 0$ (např. kovy), vlna do ní nemůže volně pronikat. Dochází k exponenciálnímu útlumu amplitudy. Vzdálenost, na které pole klesne na $1/e$ (cca 37 %) hodnoty, se nazývá hloubka vniku $\\delta$. U dobrých vodičů a vysokých frekvencí je $\\delta$ velmi malá (mikrometry).",
                image: "",
              },
              {
                heading: "Index lomu",
                text: "V optice se často používá index lomu $n$, který vyjadřuje zpomalení vlny v látce oproti vakuu: $n = \\frac{c}{v} = \\sqrt{\\varepsilon_r \\mu_r}$. Pro nemagnetické látky ($\\\\mu_r \\approx 1$) platí Maxwellův vztah $n \\approx \\sqrt{\\varepsilon_r}$.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "elmag_c4_l3_t1",
                question: "Poyntingův vektor $\\vec{S}$ je definován jako:",
                options: [
                  "$\\vec{S} = \\vec{E} \\cdot \\vec{H}$",
                  "$\\vec{S} = \\vec{E} \\times \\vec{H}$",
                  "$\\vec{S} = \\frac{1}{2} \\varepsilon E^2$",
                  "$\\vec{S} = \\vec{J} \\times \\vec{B}$",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "elmag_c4_l3_t2",
                question: "Fyzikální jednotka Poyntingova vektoru je:",
                options: [
                  "Joule ($J$)",
                  "Watt ($W$)",
                  "Watt na metr čtvereční ($W/m^2$)",
                  "Volt na metr ($V/m$)",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "elmag_c4_l3_t3",
                question: "Co popisuje skin efekt?",
                options: [
                  "Změnu barvy kovu při zahřátí",
                  "Vytlačování střídavého proudu a pole k povrchu vodiče",
                  "Průchod světla vakuem",
                  "Magnetizaci izolantu",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "elmag_c4_l3_t4",
                question: "Hloubka vniku $\\delta$ s rostoucí frekvencí:",
                options: [
                  "Klesá (vlna proniká méně hluboko)",
                  "Roste (vlna proniká hlouběji)",
                  "Nemění se",
                  "Osciluje",
                ],
                correctAnswer: 0,
                xp: 30,
              },
              {
                id: "elmag_c4_l3_t5",
                question:
                  "Pro nemagnetické dielektrikum platí vztah mezi indexem lomu a permitivitou:",
                options: [
                  "$n = \\varepsilon_r^2$",
                  "$n = \\sqrt{\\varepsilon_r}$",
                  "$n = 1/\\varepsilon_r$",
                  "$n = \\varepsilon_r$",
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
      title: "Odraz, lom a vyzařování elektromagnetických vln",
      lessons: [
        {
          title: "Chování vln na rozhraní dvou prostředí",
          content: {
            sections: [
              {
                heading: "Snellův zákon lomu",
                text: "Když rovinná vlna dopadne na rozhraní dvou dielektrických prostředí (např. vzduch–sklo), část energie se odrazí a část projde. Úhly dopadu $\\theta_1$ a lomu $\\theta_2$ jsou svázány Snellovým zákonem, který plyne ze zachování tečné složky vlnového vektoru:\n$$ n_1 \\sin \\theta_1 = n_2 \\sin \\theta_2 $$",
                image: "",
              },
              {
                heading: "Fresnelovy koeficienty a Brewsterův úhel",
                text: "Poměry amplitud odražené a dopadající vlny popisují Fresnelovy rovnice. Existuje speciální úhel dopadu, zvaný Brewsterův úhel ($\\theta_B$), při kterém nedochází k odrazu pro vlnu polarizovanou rovnoběžně s rovinou dopadu (TM polarizace). Odražené světlo je pak plně polarizované.",
                image: "",
              },
              {
                heading: "Odraz od dokonalého vodiče",
                text: "Pokud vlna dopadne na ideální vodič (kov), nemůže do něj proniknout ($E=0$ uvnitř). Dojde k totálnímu odrazu. Interakcí dopadající a odražené vlny vzniká před vodičem stojaté vlnění, kde elektrické pole má v místě vodiče uzel (nulovou hodnotu).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "elmag_c5_l1_t1",
                question:
                  "Pokud světlo přechází z opticky řidšího do hustšího prostředí ($n_1 < n_2$), láme se:",
                options: [
                  "Ke kolmici",
                  "Od kolmice",
                  "Neláme se",
                  "Zpět ke zdroji",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "elmag_c5_l1_t2",
                question: "Co se děje při Brewsterově úhlu?",
                options: [
                  "Dochází k totálnímu odrazu veškeré energie",
                  "Odrazivost pro jednu polarizaci klesá na nulu",
                  "Vlna se zastaví",
                  "Vzniká stojaté vlnění",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "elmag_c5_l1_t3",
                question:
                  "Na povrchu dokonalého vodiče musí být tečná složka elektrického pole $\\vec{E}_t$:",
                options: [
                  "Maximální",
                  "Nulová",
                  "Nekonečná",
                  "Rovna magnetické složce",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "elmag_c5_l1_t4",
                question:
                  "Totální odraz (kdy vlna neproniká do druhého prostředí) nastává:",
                options: [
                  "Při přechodu z hustšího do řidšího prostředí pod velkým úhlem",
                  "Při kolmém dopadu",
                  "Při přechodu z vakua do skla",
                  "Vždy u kovů",
                ],
                correctAnswer: 0,
                xp: 30,
              },
              {
                id: "elmag_c5_l1_t5",
                question:
                  "Interakcí dopadající a odražené vlny o stejné amplitudě vzniká:",
                options: [
                  "Postupná vlna",
                  "Stojaté vlnění",
                  "Vírové proudění",
                  "Statické pole",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Elektrodynamické potenciály",
          content: {
            sections: [
              {
                heading: "Skalární a vektorový potenciál",
                text: "Řešit Maxwellovy rovnice přímo pro vektory $\\vec{E}$ a $\\vec{B}$ je složité. Proto zavádíme pomocné potenciály:\n1. Skalární potenciál $\\varphi$ (známe z elektrostatiky).\n2. Vektorový potenciál $\\vec{A}$, definovaný vztahem $\\vec{B} = \\nabla \\times \\vec{A}$.\nIntenzita elektrického pole je pak: $\\vec{E} = -\\nabla \\varphi - \\frac{\\partial \\vec{A}}{\\partial t}$.",
                image: "",
              },
              {
                heading: "Kalibrační podmínka (Lorenzova)",
                text: "Potenciály nejsou určeny jednoznačně (můžeme k nim přičíst funkci a pole se nezmění). Abychom zjednodušili vlnové rovnice, volíme tzv. Lorenzovu kalibraci: \n$$ \\nabla \\cdot \\vec{A} + \\varepsilon\\mu \\frac{\\partial \\varphi}{\\partial t} = 0 $$",
                image: "",
              },
              {
                heading: "Retardované potenciály",
                text: "Protože se změna pole šíří konečnou rychlostí $c$, potenciál v bodě pozorování v čase $t$ nezávisí na tom, co zdroj dělá *teď*, ale co dělal v minulosti (v čase $t - r/c$). Tomu říkáme retardace (zpoždění).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "elmag_c5_l2_t1",
                question:
                  "Vztah mezi magnetickou indukcí a vektorovým potenciálem je:",
                options: [
                  "$\\vec{B} = \\nabla \\cdot \\vec{A}$",
                  "$\\vec{B} = \\nabla \\times \\vec{A}$",
                  "$\\vec{B} = \\nabla \\varphi$",
                  "$\\vec{B} = \\partial \\vec{A} / \\partial t$",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "elmag_c5_l2_t2",
                question: "Proč zavádíme retardované potenciály?",
                options: [
                  "Protože výpočty jsou snazší",
                  "Protože interakce se šíří konečnou rychlostí světla",
                  "Protože elektrony se pohybují pomalu",
                  "Protože pole ve vakuu neexistuje",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "elmag_c5_l2_t3",
                question:
                  "V elektrostatice (kde se nic nemění v čase) platí pro elektrické pole:",
                options: [
                  "$\\vec{E} = -\\nabla \\varphi - \\partial \\vec{A}/\\partial t$",
                  "$\\vec{E} = -\\nabla \\varphi$ (druhý člen je nulový)",
                  "$\\vec{E} = 0$",
                  "$\\vec{E} = \\vec{A}$",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "elmag_c5_l2_t4",
                question: "Lorenzova kalibrace slouží k:",
                options: [
                  "Separaci vlnových rovnic pro $\\varphi$ a $\\vec{A}$",
                  "Zvýšení energie vlny",
                  "Vynulování magnetického pole",
                  "Měření teploty",
                ],
                correctAnswer: 0,
                xp: 30,
              },
              {
                id: "elmag_c5_l2_t5",
                question: "Jednotkou vektorového potenciálu $\\vec{A}$ je:",
                options: [
                  "Volt (V)",
                  "Tesla (T)",
                  "Weber na metr ($Wb/m$ nebo $V \\cdot s / m$)",
                  "Ampér (A)",
                ],
                correctAnswer: 2,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Vyzařování: Hertzův dipól",
          content: {
            sections: [
              {
                heading: "Co je zdrojem elektromagnetické vlny?",
                text: "Stacionární proudy vytváří jen magnetické pole. Aby vznikla vlna, která se odtrhne od zdroje a nese energii do nekonečna, musí se náboje pohybovat se zrychlením (časově proměnný proud).",
                image: "",
              },
              {
                heading: "Elementární elektrický dipól (Hertzův)",
                text: "Nejjednodušší model antény. Jde o krátký vodič délky $l$, kterým teče střídavý proud $I(t)$. \n- Blízká zóna: V blízkosti dipólu převládá indukční pole (klesá rychle s $1/r^2$ a $1/r^3$), energie kmitá tam a zpět.\n- Vzdálená (radiační) zóna: Ve velké vzdálenosti převládá složka klesající s $1/r$. To je skutečná vlna, která odnáší energii.",
                image: "[Image of Hertz dipole radiation pattern]",
              },
              {
                heading: "Vyzařovací charakteristika",
                text: "Hertzův dipól nezáří do všech směrů stejně. \n- Maximum: Ve směru kolmém na osu dipólu.\n- Minimum (nula): Ve směru osy dipólu.\nVýkon vyzářený dipólem roste se čtvrtou mocninou frekvence ($\\omega^4$). To vysvětluje, proč je obloha modrá (Rayleighův rozptyl – molekuly září lépe na vyšších frekvencích/modré barvě).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "elmag_c5_l3_t1",
                question: "Aby náboj vyzařoval elektromagnetickou vlnu, musí:",
                options: [
                  "Být v klidu",
                  "Pohybovat se konstantní rychlostí",
                  "Pohybovat se se zrychlením (kmitat)",
                  "Mít nulový náboj",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "elmag_c5_l3_t2",
                question:
                  "V jakém směru vyzařuje svislý Hertzův dipól nejvíce energie?",
                options: [
                  "Ve směru své osy (nahoru a dolů)",
                  "V rovině kolmé na svou osu (horizontálně)",
                  "Izotropně do všech směrů stejně",
                  "Nevyzařuje nic",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "elmag_c5_l3_t3",
                question:
                  "Amplituda pole ve vzdálené (radiační) zóně klesá se vzdáleností $r$ jako:",
                options: [
                  "$1/r$ (pomalu)",
                  "$1/r^2$ (rychle)",
                  "$1/r^3$ (velmi rychle)",
                  "Neklesá",
                ],
                correctAnswer: 0,
                xp: 30,
              },
              {
                id: "elmag_c5_l3_t4",
                question:
                  "Celkový vyzářený výkon elementárního dipólu závisí na frekvenci jako:",
                options: [
                  "Nezávisí",
                  "Lineárně ($\\omega$)",
                  "Druhá mocnina ($\\omega^2$)",
                  "Čtvrtá mocnina ($\\omega^4$)",
                ],
                correctAnswer: 3,
                xp: 25,
              },
              {
                id: "elmag_c5_l3_t5",
                question:
                  "Proč antény pro mobilní telefony (GHz) mohou být malé, zatímco pro rádio (AM/FM) musí být velké?",
                options: [
                  "Je to náhoda",
                  "Účinnost vyzařování souvisí s poměrem délky antény a vlnové délky (čím vyšší frekvence, tím kratší vlna)",
                  "Mobily používají silnější baterie",
                  "Vysoké frekvence nepotřebují anténu",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
      ],
    },
  ],
};
