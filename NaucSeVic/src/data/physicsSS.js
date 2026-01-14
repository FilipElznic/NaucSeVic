export const physicsSS = {
  default: [
    {
      title: "Mechanika hmotného bodu",
      lessons: [
        {
          title: "Kinematika: Popis pohybu",
          content: {
            sections: [
              {
                heading: "Hmotný bod a poloha",
                text: "Abychom mohli fyziku počítat, musíme si svět zjednodušit. Auto, letadlo i planetu nahradíme **hmotným bodem** (bod, který má hmotnost, ale nulové rozměry). Jeho polohu určujeme souřadnicemi $(x, y, z)$ v čase. Pohyb je vždy relativní – záleží, vůči čemu ho měříme (vztažná soustava).",
                image: "",
              },
              {
                heading: "Rychlost: Průměrná vs. Okamžitá",
                text: "Průměrná rychlost je celková dráha dělená časem ($v_p = s / t$). Ale tachometr v autě ukazuje **okamžitou rychlost** – to je rychlost v daném kratičkém okamžiku. Rychlost je vektor $\\vec{v}$, má tedy směr (tečna k trajektorii).",
                image: "",
              },
              {
                heading: "Zrychlení: Změna rychlosti",
                text: "Pokud se mění velikost nebo směr rychlosti, těleso má zrychlení ($a$).\n- **Rovnoměrný pohyb:** $a = 0$, rychlost je konstantní ($s = v \\cdot t$).\n- **Rovnoměrně zrychlený pohyb:** $a = konst$, rychlost roste lineárně ($v = a \\cdot t$), dráha roste kvadraticky ($s = \\frac{1}{2} a t^2$).",
                image: "[Image of distance time graph acceleration]",
              },
            ],
            tasks: [
              {
                id: "ss_c1_l1_t1",
                question: "Co je to hmotný bod?",
                options: [
                  "Nejmenší částice atomu",
                  "Model tělesa, u kterého zanedbáváme rozměry, ale zachováváme hmotnost",
                  "Bod, který nic neváží",
                  "Střed Země",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c1_l1_t2",
                question:
                  "Jak vypadá graf dráhy v závislosti na čase ($s-t$) u rovnoměrně zrychleného pohybu?",
                options: ["Přímka", "Parabola", "Kružnice", "Vodorovná čára"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c1_l1_t3",
                question:
                  "Auto zrychlí z 0 na 20 m/s za 4 sekundy. Jaké je jeho zrychlení?",
                options: [
                  "$5 m/s^2$",
                  "$80 m/s^2$",
                  "$0,2 m/s^2$",
                  "$4 m/s^2$",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "ss_c1_l1_t4",
                question: "Základní jednotkou zrychlení v soustavě SI je:",
                options: ["$m/s$", "$km/h^2$", "$m/s^2$", "$N/kg$"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c1_l1_t5",
                question:
                  "Pokud se těleso pohybuje po kružnici stálou rychlostí, má zrychlení?",
                options: [
                  "Ne, protože velikost rychlosti se nemění",
                  "Ano, protože se mění směr rychlosti (dostředivé zrychlení)",
                  "Ano, ale jen občas",
                  "Ne, je to klidový stav",
                ],
                correctAnswer: 1,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Vektory a síly",
          content: {
            sections: [
              {
                heading: "Skalár a Vektor",
                text: "Fyzikální veličiny dělíme na:\n1. **Skalární:** Stačí číslo a jednotka (čas, hmotnost, teplota).\n2. **Vektorové:** Mají velikost, směr a působiště (síla, rychlost, zrychlení). Znázorňujeme je orientovanou úsečkou (šipkou).",
                image: "",
              },
              {
                heading: "Skládání sil",
                text: "Když na těleso působí více sil ($F_1, F_2$), nahradíme je jednou **výslednicí ($F$)**. \n- Stejný směr: $F = F_1 + F_2$.\n- Opačný směr: $F = F_1 - F_2$.\n- Různý směr: Používáme **rovnoběžník sil** a počítáme velikost úhlopříčky (často pomocí Pythagorovy věty nebo kosinové věty).",
                image: "[Image of vector addition parallelogram rule]",
              },
              {
                heading: "Rozklad sil",
                text: "Často potřebujeme jednu sílu rozložit na dvě složky. Typický příklad: Těleso na nakloněné rovině. Tíhovou sílu rozkládáme na složku, která táhne těleso dolů (rovnoběžná s rovinou), a složku, která ho tiskne k podložce (kolmá).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c1_l2_t1",
                question: "Která veličina NENÍ vektor?",
                options: ["Síla", "Čas", "Rychlost", "Hybnost"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c1_l2_t2",
                question:
                  "Dvě síly o velikosti 3 N a 4 N svírají pravý úhel. Jak velká je výslednice?",
                options: ["7 N", "1 N", "5 N (podle Pythagorovy věty)", "12 N"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c1_l2_t3",
                question: "Co je to výslednice sil?",
                options: [
                  "Síla, která má stejný účinek jako všechny působící síly dohromady",
                  "Největší z působících sil",
                  "Součet velikostí všech sil",
                  "Síla tření",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "ss_c1_l2_t4",
                question: "Na nakloněné rovině způsobuje pohyb dolů:",
                options: [
                  "Celá tíhová síla",
                  "Pohybová složka tíhové síly ($F_g \\cdot \\sin \\alpha$)",
                  "Normálová síla",
                  "Tření",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "ss_c1_l2_t5",
                question: "Jednotkou síly je:",
                options: ["Joule", "Watt", "Newton", "Pascal"],
                correctAnswer: 2,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Dynamika: Newtonovy zákony",
          content: {
            sections: [
              {
                heading: "1. Zákon setrvačnosti",
                text: "Těleso setrvává v klidu nebo v rovnoměrném přímočarém pohybu, dokud na něj nepůsobí vnější síla. To znamená, že síla není nutná k *udržení* pohybu (jak si myslel Aristoteles), ale jen ke *změně* pohybu. Příklad: Když autobus zabrzdí, letíš dopředu.",
                image: "",
              },
              {
                heading: "2. Zákon síly (Zákon zrychlení)",
                text: "Toto je nejdůležitější rovnice mechaniky: $$ \\vec{F} = m \\cdot \\vec{a} $$ \nVýsledná síla uděluje tělesu zrychlení. Čím větší síla, tím větší zrychlení. Čím větší hmotnost ($m$), tím je těleso 'línější' (má větší setrvačnost) a zrychluje méně.",
                image: "",
              },
              {
                heading: "3. Zákon akce a reakce",
                text: "Síly vždy vznikají ve dvojicích. Jestliže těleso A působí silou na těleso B, pak těleso B působí stejně velkou, ale opačnou silou na těleso A. \nDůležité: Tyto síly se **nevyruší**, protože každá působí na jiné těleso! (Ty tlačíš do zdi, zeď tlačí do tebe).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c1_l3_t1",
                question:
                  "Který zákon vysvětluje, proč je těžší roztlačit kamion než osobní auto?",
                options: [
                  "1. zákon (setrvačnost)",
                  "2. zákon (síla a hmotnost)",
                  "3. zákon (akce a reakce)",
                  "Gravitační zákon",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c1_l3_t2",
                question:
                  "Když vystřelí puška, kopne střelce do ramene. To je příklad:",
                options: [
                  "Zákona setrvačnosti",
                  "Zákona akce a reakce",
                  "Zachování energie",
                  "Zákona lomu",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c1_l3_t3",
                question:
                  "Jaké zrychlení udělí síla 10 N tělesu o hmotnosti 2 kg?",
                options: [
                  "$20 m/s^2$",
                  "$5 m/s^2$",
                  "$0,2 m/s^2$",
                  "$8 m/s^2$",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c1_l3_t4",
                question: "Proč se síly akce a reakce navzájem nezruší?",
                options: [
                  "Protože akce je větší",
                  "Protože každá působí na jiné těleso",
                  "Protože působí v jiný čas",
                  "Protože reakce je jen fiktivní",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "ss_c1_l3_t5",
                question:
                  "Když na těleso nepůsobí žádná výsledná síla ($F=0$), těleso:",
                options: [
                  "Musí stát v klidu",
                  "Musí zrychlovat",
                  "Je v klidu nebo se pohybuje rovnoměrně přímočaře",
                  "Padá volným pádem",
                ],
                correctAnswer: 2,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Mechanická práce a výkon",
          content: {
            sections: [
              {
                heading: "Práce (W)",
                text: "Ve fyzice konáme práci ($W$), jen když působíme silou po určité dráze. \n$$ W = F \\cdot s \\cdot \\cos \\alpha $$\nPokud tlačíš do zdi a ta se nehne ($s=0$), práce je nulová. Pokud neseš tašku vodorovně a síla míří nahoru (kolmo na pohyb), práce je také nulová ($\\\\cos 90^\\circ = 0$). Jednotka: Joule ($J$).",
                image: "",
              },
              {
                heading: "Výkon (P)",
                text: "Výkon říká, jak rychle práci vykonáme. Je to práce za čas.\n$$ P = \\frac{W}{t} $$\nJednotka: Watt ($W$). Starší jednotka je 'koňská síla' (hp). Čím vyšší výkon motoru, tím rychleji auto zrychlí nebo vyjede kopec.",
                image: "",
              },
              {
                heading: "Účinnost",
                text: "Žádný stroj nepřemění veškerou dodanou energii (příkon $P_0$) na užitečnou práci (výkon $P$). Vždy jsou ztráty (tření, teplo). Účinnost ($\\eta$) je poměr $P / P_0$ a je vždy menší než 1 (neboli < 100 %).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c1_l4_t1",
                question:
                  "Jakou práci vykonám, když zvednu činku o tíze 100 N do výšky 2 metry?",
                options: ["50 J", "200 J", "0 J", "102 J"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c1_l4_t2",
                question: "Kdy je vykonaná mechanická práce nulová?",
                options: [
                  "Když je síla kolmá na směr pohybu",
                  "Když je dráha nulová",
                  "Když je síla nulová",
                  "Ve všech uvedených případech",
                ],
                correctAnswer: 3,
                xp: 20,
              },
              {
                id: "ss_c1_l4_t3",
                question: "Jednotkou výkonu je:",
                options: ["Joule (J)", "Watt (W)", "Newton (N)", "Hertz (Hz)"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c1_l4_t4",
                question:
                  "Motor má příkon 1000 W a výkon 800 W. Jaká je jeho účinnost?",
                options: ["80 %", "125 %", "20 %", "100 %"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "ss_c1_l4_t5",
                question:
                  "Zvednout kámen jeřábem trvá 10s, člověku 100s. Kdo vykonal větší práci?",
                options: [
                  "Jeřáb",
                  "Člověk",
                  "Oba vykonali stejnou práci (ale jeřáb měl větší výkon)",
                  "Nelze určit",
                ],
                correctAnswer: 2,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Energie a zákon zachování",
          content: {
            sections: [
              {
                heading: "Kinetická energie ($E_k$)",
                text: "Energie spojená s pohybem. Má ji každé těleso, které má rychlost. \n$$ E_k = \\frac{1}{2} m v^2 $$\nZávisí na druhé mocnině rychlosti! Proto je náraz v 50 km/h mnohem horší než v 25 km/h (energie je 4x větší).",
                image: "",
              },
              {
                heading: "Potenciální energie ($E_p$)",
                text: "Polohová energie v gravitačním poli. Těleso ji má, když je ve výšce $h$.\n$$ E_p = m \\cdot g \\cdot h $$\nJe to 'uložená' práce, kterou jsme vykonali při zvedání tělesa.",
                image: "",
              },
              {
                heading: "Zákon zachování mechanické energie",
                text: "V izolované soustavě (kde nepůsobí tření a odpor) se mechanická energie nemění, jen se přelévá.\nKdyž míč padá: $E_p$ se zmenšuje $\\rightarrow$ $E_k$ se zvětšuje.\nKdyž vyhodíme míč nahoru: $E_k$ se zmenšuje $\\rightarrow$ $E_p$ se zvětšuje.\nCelková $E = E_k + E_p = konst.$",
                image: "[Image of conservation of energy pendulum diagram]",
              },
            ],
            tasks: [
              {
                id: "ss_c1_l5_t1",
                question: "Vzorec pro kinetickou energii je:",
                options: ["$mgh$", "$1/2 mv^2$", "$mc^2$", "$F \\cdot s$"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c1_l5_t2",
                question: "Kde má kyvadlo největší kinetickou energii?",
                options: [
                  "V nejvyšším bodě (v úvrati)",
                  "V nejnižším bodě (rovnovážná poloha)",
                  "Všude stejnou",
                  "Uprostřed mezi nejvyšším a nejnižším bodem",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c1_l5_t3",
                question:
                  "Co se děje s energií při volném pádu (bez odporu vzduchu)?",
                options: [
                  "Energie se ztrácí",
                  "Potenciální se mění na kinetickou",
                  "Kinetická se mění na potenciální",
                  "Celková energie roste",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c1_l5_t4",
                question:
                  "Pokud auto zrychlí z 10 m/s na 20 m/s (2x), jeho kinetická energie vzroste:",
                options: ["2x", "4x", "8x", "Nezmění se"],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "ss_c1_l5_t5",
                question: "Jablko visící na stromě má:",
                options: [
                  "Nulovou energii",
                  "Jen kinetickou energii",
                  "Jen potenciální energii",
                  "Kinetickou i potenciální",
                ],
                correctAnswer: 2,
                xp: 10,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Mechanika tuhého tělesa a tekutin",
      lessons: [
        {
          title: "Tuhé těleso a moment síly",
          content: {
            sections: [
              {
                heading: "Co je tuhé těleso?",
                text: "V minulé kapitole jsme brali tělesa jako body. Tuhé těleso je model, který má tvar a rozměry, ale nedeformuje se (vzdálenost mezi dvěma body zůstává stejná). Síla už nezpůsobuje jen posun, ale může těleso i roztočit.",
                image: "",
              },
              {
                heading: "Moment síly (M)",
                text: "Otáčivý účinek síly závisí nejen na velikosti síly ($F$), ale i na vzdálenosti od osy otáčení – rameni síly ($r$).\n$$ M = F \\cdot r $$\nJednotkou je Newtonmetr ($N \\cdot m$). Čím delší páka, tím menší sílu potřebujeme (princip páčidla).",
                image: "",
              },
              {
                heading: "Momentová věta",
                text: "Těleso se nezačne otáčet (je v rovnováze), pokud se součet momentů sil otáčejících jedním směrem rovná součtu momentů otáčejících druhým směrem. Na tomto principu fungují váhy, houpačky i jeřáby.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c2_l1_t1",
                question: "Jaká je jednotka momentu síly?",
                options: [
                  "Newton (N)",
                  "Joule (J)",
                  "Newtonmetr (N·m)",
                  "Watt (W)",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c2_l1_t2",
                question: "Chceš povolit utažený šroub. Co ti pomůže?",
                options: [
                  "Kratší klíč",
                  "Delší klíč (větší rameno)",
                  "Větší rychlost",
                  "Tlačit blíže k ose otáčení",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c2_l1_t3",
                question: "Vzorec pro moment síly je:",
                options: [
                  "$M = F / r$",
                  "$M = F + r$",
                  "$M = F \\cdot r$",
                  "$M = 1/2 F r^2$",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c2_l1_t4",
                question:
                  "Na houpačce sedí dítě (20 kg) 2 m od středu. Kam si musí sednout dospělý (80 kg), aby byla rovnováha?",
                options: [
                  "0,5 m od středu",
                  "1 m od středu",
                  "4 m od středu",
                  "Do středu",
                ],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "ss_c2_l1_t5",
                question: "Když je výsledný moment sil nulový, těleso:",
                options: [
                  "Se zastaví",
                  "Nemění svůj otáčivý pohyb (je v rotační rovnováze)",
                  "Zrychluje",
                  "Padá dolů",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Těžiště a stabilita",
          content: {
            sections: [
              {
                heading: "Kde je těžiště?",
                text: "Těžiště ($T$) je bod, ve kterém působí výsledná tíhová síla na celé těleso. Pokud těleso v tomto bodě podepřeme, zůstane v klidu. U pravidelných těles je ve středu, u prstenu je uprostřed 'díry' (mimo hmotu).",
                image: "",
              },
              {
                heading: "Druhy rovnováhy",
                text: "1. **Stálá (stabilní):** Těžiště je pod osou závěsu. Po vychýlení se vrací zpět (houpačka).\n2. **Vratká (labilní):** Těžiště je nad osou. Po vychýlení spadne (tužka na špičce).\n3. **Volná (indiferentní):** Těžiště se nemění (koule na stole).",
                image: "",
              },
              {
                heading: "Stabilita proti převrácení",
                text: "Těleso je tím stabilnější, čím níže má těžiště a čím širší má podstavu. Převrátí se ve chvíli, kdy těžnice spuštěná z těžiště vybočí z plochy podstavy.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c2_l2_t1",
                question: "Jak zvýšíme stabilitu závodního auta?",
                options: [
                  "Zvýšíme podvozek",
                  "Snížíme těžiště a rozšíříme kola",
                  "Dáme motor na střechu",
                  "Zúžíme pneumatiky",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c2_l2_t2",
                question: "Kulička ležící na vodorovném stole je v rovnováze:",
                options: ["Stálé", "Vratké", "Volné", "Dynamické"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c2_l2_t3",
                question: "Kdy se převrátí skříň?",
                options: [
                  "Když je těžká",
                  "Když svislice z těžiště opustí půdorys podstavy",
                  "Když je prázdná",
                  "Když je těžiště uprostřed",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c2_l2_t4",
                question: "Provazochodec používá tyč, aby:",
                options: [
                  "Vypadal lépe",
                  "Zvýšil moment setrvačnosti a snížil těžiště",
                  "Snížil tření",
                  "Měl čím mávat",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c2_l2_t5",
                question: "Kde má těžiště obruč?",
                options: [
                  "V materiálu obruče",
                  "Uprostřed prázdného prostoru",
                  "Na kraji",
                  "Nemá těžiště",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Tlak v kapalinách (Hydrostatika)",
          content: {
            sections: [
              {
                heading: "Pascalův zákon",
                text: "Tlak vyvolaný vnější silou v uzavřené kapalině je ve všech místech stejný. To je princip hydrauliky (lisy, brzdy). Působením malé síly na malý píst vyvoláme velkou sílu na velkém pístu.",
                image: "",
              },
              {
                heading: "Hydrostatický tlak",
                text: "Vzniká vlastní tíhou kapaliny. Čím hlouběji jsme ($h$) a čím má kapalina větší hustotu ($\\rho$), tím je tlak větší.\n$$ p_h = h \\cdot \\rho \\cdot g $$",
                image: "",
              },
              {
                heading: "Archimédův zákon",
                text: "Těleso ponořené do kapaliny je nadlehčováno silou ($F_{vz}$), která se rovná tíze kapaliny tělesem vytlačené. Pokud je $F_{vz}$ větší než tíha tělesa, těleso plave.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c2_l3_t1",
                question: "Na jakém principu fungují hydraulické brzdy?",
                options: [
                  "Archimédův zákon",
                  "Pascalův zákon",
                  "Newtonův zákon",
                  "Ohmův zákon",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c2_l3_t2",
                question: "Proč plave ocelová loď?",
                options: [
                  "Protože má motor",
                  "Protože je lehká",
                  "Protože vytlačí tolik vody, že ji vztlaková síla unese",
                  "Protože voda je slaná",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c2_l3_t3",
                question: "Vzorec pro hydrostatický tlak je:",
                options: [
                  "$p = F/S$",
                  "$p = h \\cdot \\rho \\cdot g$",
                  "$p = 1/2 \\rho v^2$",
                  "$p = m \\cdot g$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c2_l3_t4",
                question: "Která kapalina vyvolá v hloubce 1 m největší tlak?",
                options: ["Voda", "Olej", "Rtuť (největší hustota)", "Líh"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c2_l3_t5",
                question: "Velikost vztlakové síly závisí na:",
                options: [
                  "Hloubce ponoření",
                  "Objemu ponořené části tělesa a hustotě kapaliny",
                  "Barvě tělesa",
                  "Tvaru nádoby",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Bernoulliho rovnice (Hydrodynamika)",
          content: {
            sections: [
              {
                heading: "Rovnice kontinuity",
                text: "Když voda teče trubkou, která se zužuje, musí voda zrychlit, aby stihla protéct. Platí: $S_1 v_1 = S_2 v_2$. (Průřez krát rychlost je konstanta). Kde je trubka úzká, tam je proud rychlý.",
                image: "",
              },
              {
                heading: "Bernoulliho rovnice",
                text: "Popisuje zákon zachování energie v proudící tekutině. Klíčový důsledek: **V místě, kde tekutina proudí rychleji, je NIŽŠÍ tlak.** To se zdá nelogické, ale je to tak.",
                image: "",
              },
              {
                heading: "Aerodynamický vztlak",
                text: "Proč létají letadla? Profil křídla je tvarován tak, aby vzduch nad křídlem musel obtékat rychleji než pod křídlem. Díky Bernoulliho jevu vznikne nahoře podtlak, který letadlo 'vcucne' nahoru.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c2_l4_t1",
                question: "Co se stane s rychlostí vody, když zúžíme hadici?",
                options: [
                  "Zpomalí se",
                  "Zrychlí se",
                  "Zůstane stejná",
                  "Voda se zastaví",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c2_l4_t2",
                question:
                  "Podle Bernoulliho rovnice je v místě s vyšší rychlostí proudění:",
                options: [
                  "Vyšší tlak",
                  "Nižší tlak",
                  "Stejný tlak",
                  "Nulový tlak",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c2_l4_t3",
                question:
                  "Proč se k sobě přitáhnou dva listy papíru, když mezi ně foukneš?",
                options: [
                  "Vzduch je od sebe odtlačí",
                  "Mezi papíry vznikne podtlak (díky rychlému proudění)",
                  "Je to statická elektřina",
                  "Papíry navlhnou",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "ss_c2_l4_t4",
                question: "Fixírka (rozprašovač parfému) funguje na principu:",
                options: [
                  "Archimédova zákona",
                  "Pascalova zákona",
                  "Bernoulliho jevu (podtlak nasaje kapalinu)",
                  "Gravitace",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c2_l4_t5",
                question: "Rovnice kontinuity vyjadřuje zákon zachování:",
                options: [
                  "Energie",
                  "Hmotnostního toku (objemu)",
                  "Hybnosti",
                  "Teploty",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Odpor prostředí a obtékání těles",
          content: {
            sections: [
              {
                heading: "Odporová síla",
                text: "Proti pohybu tělesa v tekutině (vzduch, voda) působí odpor. Odporová síla roste s druhou mocninou rychlosti ($F_o \\sim v^2$). Dvakrát větší rychlost znamená čtyřikrát větší odpor.",
                image: "",
              },
              {
                heading: "Součinitel odporu ($C_x$)",
                text: "Závisí na tvaru tělesa. Nejnižší odpor má kapkovitý tvar (aerodynamický), největší má dutá polokoule (padák) nebo deska kolmo k pohybu.",
                image: "",
              },
              {
                heading: "Mezní rychlost",
                text: "Při volném pádu v atmosféře těleso nezrychluje donekonečna. Odpor vzduchu se v určitou chvíli vyrovná tíhové síle a těleso padá konstantní 'mezní' rychlostí (parašutista cca 200 km/h, s padákem 20 km/h).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c2_l5_t1",
                question: "Který tvar má nejmenší odpor vzduchu?",
                options: ["Krychle", "Koule", "Kapka", "Válec"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c2_l5_t2",
                question: "Jak roste odpor vzduchu s rychlostí?",
                options: [
                  "Lineárně ($v$)",
                  "Kvadraticky ($v^2$)",
                  "Nezávisí na rychlosti",
                  "Klesá",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c2_l5_t3",
                question: "Proč má padák velký odpor?",
                options: [
                  "Aby brzdil pád parašutisty",
                  "Aby vypadal hezky",
                  "Aby se nezamotal",
                  "Aby chránil před deštěm",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "ss_c2_l5_t4",
                question: "Co je to mezní rychlost?",
                options: [
                  "Maximální povolená rychlost na dálnici",
                  "Rychlost, při které se odpor vzduchu vyrovná tíze a pád se ustálí",
                  "Rychlost světla",
                  "Rychlost zvuku",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c2_l5_t5",
                question: "Kde se snažíme odpor vzduchu minimalizovat?",
                options: [
                  "U padáků",
                  "U brzd",
                  "U závodních aut a letadel",
                  "U plachetnic",
                ],
                correctAnswer: 2,
                xp: 10,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Gravitační pole",
      lessons: [
        {
          title: "Newtonův gravitační zákon",
          content: {
            sections: [
              {
                heading: "Zákon všeobecné gravitace",
                text: "Isaac Newton formuloval myšlenku, že gravitace není jen síla, která drží nás na Zemi, ale univerzální síla působící mezi *všemi* tělesy ve vesmíru. Každá dvě tělesa se přitahují. Síla je ale patrná jen tehdy, když je alespoň jedno z těles obrovské (jako planeta).",
                image: "",
              },
              {
                heading: "Vzorec gravitační síly",
                text: "Velikost síly $F_g$ je přímo úměrná součinu hmotností těles ($m_1, m_2$) a nepřímo úměrná druhé mocnině jejich vzdálenosti ($r$).\n$$ F_g = G \\frac{m_1 m_2}{r^2} $$\n$G$ je gravitační konstanta ($6,67 \\cdot 10^{-11}$).",
                image: "",
              },
              {
                heading: "Co nám vzorec říká?",
                text: "Dvě důležité věci:\n1. Když zdvojnásobíme hmotnost jednoho tělesa, síla bude dvojnásobná.\n2. Když zdvojnásobíme vzdálenost mezi tělesy, síla klesne čtyřnásobně ($2^2 = 4$). Gravitace s dálkou rychle slábne.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c3_l1_t1",
                question:
                  "Jak se změní gravitační síla, když se vzdálenost mezi tělesy zvětší 3x?",
                options: [
                  "Zmenší se 3x",
                  "Zmenší se 9x",
                  "Zvětší se 3x",
                  "Zůstane stejná",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c3_l1_t2",
                question: "Kdo formuloval gravitační zákon?",
                options: [
                  "Albert Einstein",
                  "Johannes Kepler",
                  "Isaac Newton",
                  "Galileo Galilei",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c3_l1_t3",
                question: "Přitahuje padající jablko Zemi?",
                options: [
                  "Ne, jen Země přitahuje jablko",
                  "Ano, ale zanedbatelně malou silou",
                  "Ano, stejně velkou silou, jakou Země přitahuje jablko (akce a reakce)",
                  "Ano, ale jen když dopadne",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c3_l1_t4",
                question: "Co je ve vzorci označeno písmenem G?",
                options: [
                  "Gravitační zrychlení",
                  "Hmotnost",
                  "Gravitační konstanta (kappa)",
                  "Gram",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c3_l1_t5",
                question: "Gravitační síla působí:",
                options: [
                  "Pouze na Zemi",
                  "Mezi všemi hmotnými tělesy ve vesmíru",
                  "Pouze ve vakuu",
                  "Pouze mezi hvězdami",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Gravitační a tíhová síla",
          content: {
            sections: [
              {
                heading: "Není to totéž",
                text: "Na tělesa na Zemi působí dvě síly:\n1. **Gravitační síla ($F_g$):** Přitažlivost Země.\n2. **Odstředivá síla ($F_o$):** Vzniká rotací Země.\nVýslednici těchto dvou sil říkáme **Tíhová síla ($F_G$)**. To je ta síla, která nás reálně táhne k zemi.",
                image: "",
              },
              {
                heading: "Tíhové zrychlení (g)",
                text: "Země není dokonalá koule a ještě rotuje. Proto tíhové zrychlení $g$ není všude stejné. \n- Na pólech je největší ($9,83 m/s^2$) – není tam odstředivá síla a jsme blíž středu.\n- Na rovníku je nejmenší ($9,78 m/s^2$).\nBěžně počítáme s průměrem $9,81 m/s^2$.",
                image: "",
              },
              {
                heading: "Intenzita pole (K)",
                text: "Intenzita gravitačního pole ($K$) nám říká, jak velká gravitační síla působí na těleso o hmotnosti 1 kg v daném místě. Číselně se rovná gravitačnímu zrychlení ($a_g$).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c3_l2_t1",
                question: "Kde na Zemi je tíhové zrychlení nejmenší?",
                options: [
                  "Na pólech",
                  "Na rovníku",
                  "V Praze",
                  "Všude je stejné",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c3_l2_t2",
                question: "Tíhová síla je výslednicí:",
                options: [
                  "Gravitační a magnetické síly",
                  "Gravitační a odstředivé síly",
                  "Třecí a odporové síly",
                  "Jen gravitační síly",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c3_l2_t3",
                question: "Průměrná hodnota g na Zemi je:",
                options: [
                  "$100 m/s^2$",
                  "$1,62 m/s^2$",
                  "$9,81 m/s^2$",
                  "$6,67 m/s^2$",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c3_l2_t4",
                question: "Jak se změní hmotnost kosmonauta na Měsíci?",
                options: [
                  "Zmenší se 6x",
                  "Zvětší se",
                  "Nezmění se (hmotnost je vlastnost látky)",
                  "Bude nulová",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c3_l2_t5",
                question: "Jednotkou tíhy (což je síla) je:",
                options: ["Kilogram", "Newton", "Watt", "Joule"],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Pohyby v gravitačním poli (Vrhy)",
          content: {
            sections: [
              {
                heading: "Princip nezávislosti pohybů",
                text: "Když hodíme kámen šikmo, koná dva pohyby najednou, které se neovlivňují:\n1. Vodorovně letí rovnoměrně (setrvačností).\n2. Svisle padá volným pádem (zrychleně).\nVýsledkem je trajektorie ve tvaru paraboly.",
                image: "",
              },
              {
                heading: "Volný pád",
                text: "Pád z klidu ve vakuu. Rychlost roste podle vzorce $v = g \\cdot t$. Dráha roste s čtvercem času $s = 1/2 g t^2$. Důležité: Ve vakuu padají všechna tělesa stejně rychle, bez ohledu na hmotnost (pírko i kladivo).",
                image: "",
              },
              {
                heading: "Vodorovný vrh",
                text: "Těleso vržené vodorovně z výšky $h$. Dopadne na zem za úplně stejný čas, jako kdybychom ho jen upustili (protože svislý pohyb je nezávislý na vodorovné rychlosti). Vodorovná rychlost jen určí, jak daleko dopadne.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c3_l3_t1",
                question: "Jakou trajektorii má šikmý vrh (ve vakuu)?",
                options: ["Přímku", "Kružnici", "Parabolu", "Hyperbolu"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c3_l3_t2",
                question: "Na čem nezávisí doba volného pádu z výšky h?",
                options: [
                  "Na výšce",
                  "Na tíhovém zrychlení",
                  "Na hmotnosti tělesa",
                  "Na ničem",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c3_l3_t3",
                question:
                  "Vystřelím kulku vodorovně a zároveň upustím druhou z ruky. Která dopadne dřív?",
                options: [
                  "Ta z ruky",
                  "Ta vystřelená",
                  "Dopadnou současně",
                  "Nelze určit",
                ],
                correctAnswer: 2,
                xp: 25,
              },
              {
                id: "ss_c3_l3_t4",
                question: "Pod jakým úhlem dohodíme nejdál (ve vakuu)?",
                options: ["30°", "45°", "60°", "90°"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c3_l3_t5",
                question:
                  "Pokud zanedbáme odpor vzduchu, vodorovná složka rychlosti se během letu:",
                options: ["Zvětšuje", "Zmenšuje", "Nemění", "Mění náhodně"],
                correctAnswer: 2,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Keplerovy zákony (Planety)",
          content: {
            sections: [
              {
                heading: "1. Zákon: Elipsy",
                text: "Planety neobíhají po kružnicích, ale po elipsách málo odlišných od kružnic. Slunce leží v jednom z ohnisek elipsy (ne ve středu!). Proto se vzdálenost Země od Slunce během roku mění.",
                image: "",
              },
              {
                heading: "2. Zákon: Plochy",
                text: "Planety se nepohybují stálou rychlostí. V přísluní (blízko Slunci) jsou nejrychlejší, v odsluní (daleko) nejpomalejší. Přesně: Spojnice planety a Slunce opíše za stejný čas stejnou plochu.",
                image: "",
              },
              {
                heading: "3. Zákon: Doba oběhu",
                text: "Vztah mezi vzdáleností od Slunce a délkou roku. Čím je planeta dál, tím déle jí trvá oběh. Platí $T^2 / a^3 = konst$.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c3_l4_t1",
                question: "Planety obíhají po drahách ve tvaru:",
                options: ["Kružnice", "Elipsy", "Osmičky", "Spirály"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c3_l4_t2",
                question: "Kde je planeta na své dráze nejrychlejší?",
                options: [
                  "V odsluní (nejdál od Slunce)",
                  "V přísluní (nejblíže Slunci)",
                  "Všude má stejnou rychlost",
                  "Na pólech",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c3_l4_t3",
                question: "Kde se nachází Slunce?",
                options: [
                  "Ve středu elipsy",
                  "V jednom z ohnisek elipsy",
                  "Obíhá kolem planet",
                  "Mimo rovinu oběhu",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c3_l4_t4",
                question: "Rok na Jupiteru (který je dál než Země) je:",
                options: [
                  "Kratší než pozemský",
                  "Delší než pozemský",
                  "Stejně dlouhý",
                  "Závisí na rotaci",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c3_l4_t5",
                question: "Keplerovy zákony platí pro:",
                options: [
                  "Jen planety Sluneční soustavy",
                  "Jen komety",
                  "Obecně pro tělesa obíhající v centrálním poli (i družice)",
                  "Pouze pro Měsíc",
                ],
                correctAnswer: 2,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Kosmické rychlosti a družice",
          content: {
            sections: [
              {
                heading: "1. kosmická rychlost (Kruhová)",
                text: "Rychlost, kterou musíme udělit tělesu (vodorovně), aby nespadlo na Zem, ale začalo ji obíhat po kružnici. Pro Zemi je to cca **7,9 km/s**. Těleso se stane umělou družicí.",
                image: "",
              },
              {
                heading: "2. kosmická rychlost (Úniková)",
                text: "Rychlost, při které se těleso vymaní z gravitačního pole planety a odletí do vesmíru (po parabole). Pro Zemi je to **11,2 km/s**.",
                image: "",
              },
              {
                heading: "Stav beztíže",
                text: "Na oběžné dráze (např. na ISS) působí gravitace (je tam cca 90 % té pozemské!). Kosmonauti se vznášejí proto, že 'padají' volným pádem kolem Země spolu se stanicí. Nemají se o co opřít, proto necítí tíhu.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c3_l5_t1",
                question: "Jaká je hodnota 1. kosmické rychlosti pro Zemi?",
                options: ["340 m/s", "7,9 km/s", "11,2 km/s", "300 000 km/s"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c3_l5_t2",
                question:
                  "Co se stane, když těleso dosáhne 2. kosmické rychlosti?",
                options: [
                  "Začne obíhat po kružnici",
                  "Spadne na Zem",
                  "Opustí gravitační pole Země (odletí pryč)",
                  "Shoří",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c3_l5_t3",
                question: "Proč je na ISS stav beztíže?",
                options: [
                  "Protože tam není gravitace",
                  "Protože je ve vakuu",
                  "Protože stanice i kosmonauti volně padají kolem Země",
                  "Protože jsou daleko od Země",
                ],
                correctAnswer: 2,
                xp: 25,
              },
              {
                id: "ss_c3_l5_t4",
                question: "Geostacionární družice:",
                options: [
                  "Visí stále nad jedním místem rovníku",
                  "Létá nad póly",
                  "Mění svou výšku",
                  "Létá velmi nízko",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "ss_c3_l5_t5",
                question:
                  "Co by se stalo s kamenem hozeným vodorovně, kdyby neexistovala gravitace?",
                options: [
                  "Kroužil by kolem Země",
                  "Letěl by rovnoměrně přímočaře do vesmíru",
                  "Okamžitě by se zastavil",
                  "Padal by dolů",
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
      title: "Molekulová fyzika a termika",
      lessons: [
        {
          title: "Kinetická teorie látek",
          content: {
            sections: [
              {
                heading: "Neklidný mikrosvět",
                text: "Základní předpoklad: Všechna tělesa se skládají z částic (atomů, molekul), které se neustále a neuspořádaně pohybují. Důkazem je **Brownův pohyb** – viditelný trhavý pohyb pylových zrnek ve vodě, způsobený nárazy neviditelných molekul vody.",
                image: "",
              },
              {
                heading: "Co je vlastně teplota?",
                text: "Teplota je makroskopickým projevem mikrosvěta. Je to míra **průměrné kinetické energie** částic. Když těleso zahříváme, dodáváme částicím energii -> pohybují se rychleji -> teplota roste. 'Studené' atomy jsou líné, 'horké' atomy kmitají zběsile.",
                image: "",
              },
              {
                heading: "Absolutní nula a Kelvin",
                text: "Ve fyzice používáme termodynamickou teplotní stupnici (Kelviny). $0 K$ (absolutní nula) je stav, kdy by se pohyb částic zcela zastavil. Je to -273,15 °C. Nižší teplota ve vesmíru existovat nemůže. Vztah: $T [K] = t [^\\circ C] + 273,15$.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c4_l1_t1",
                question: "Co způsobuje Brownův pohyb?",
                options: [
                  "Vnitřní životní síla částic",
                  "Neustálé nárazy molekul okolního prostředí",
                  "Proudění vzduchu",
                  "Gravitace",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c4_l1_t2",
                question: "Vyjádři 20 °C v Kelvinech.",
                options: ["20 K", "293,15 K", "253,15 K", "0 K"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c4_l1_t3",
                question: "Co se děje s molekulami plynu při ochlazování?",
                options: [
                  "Zmenšují se",
                  "Zpomalují se (klesá jejich kinetická energie)",
                  "Zrychlují se",
                  "Spojí se v jednu velkou molekulu",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c4_l1_t4",
                question: "Je možné dosáhnout teploty -300 °C?",
                options: [
                  "Ano, v laboratoři",
                  "Ano, ve vesmíru",
                  "Ne, absolutní nula je cca -273 °C",
                  "Ano, u kapalného dusíku",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c4_l1_t5",
                question: "Kinetická teorie říká, že pohyb molekul je:",
                options: [
                  "Uspořádaný",
                  "Neustálý a chaotický (neuspořádaný)",
                  "Dočasný",
                  "Závislý na barvě",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Ideální plyn a stavová rovnice",
          content: {
            sections: [
              {
                heading: "Ideální plyn",
                text: "Model, který nám zjednodušuje počítání. Předpokládáme, že: 1) Částice jsou hmotné body bez objemu. 2) Nepůsobí na sebe silami (kromě srážek). Reálné plyny se tak chovají při vysoké teplotě a nízkém tlaku.",
                image: "",
              },
              {
                heading: "Stavová rovnice",
                text: "Popisuje vztah mezi tlakem ($p$), objemem ($V$) a teplotou ($T$).\n$$ p \\cdot V = n \\cdot R \\cdot T $$\nKde $n$ je látkové množství a $R$ plynová konstanta. Říká například: Když v uzavřené láhvi ($V=konst$) zvýšíme teplotu ($T$), musí stoupnout tlak ($p$).",
                image: "",
              },
              {
                heading: "Izoděje",
                text: "Speciální případy, kdy je jedna veličina konstantní:\n- **Izotermický ($T=konst$):** Boyleův zákon ($p \\cdot V = konst$). Stlačíš plyn $\\rightarrow$ tlak vzroste.\n- **Izobarický ($p=konst$):** Gay-Lussacův zákon. Zahřeješ plyn $\\rightarrow$ objem se zvětší.\n- **Izochorický ($V=konst$):** Charlesův zákon. Zahřeješ plyn v papiňáku $\\rightarrow$ tlak roste.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c4_l2_t1",
                question:
                  "Co se stane s tlakem ideálního plynu v uzavřené nádobě, když zdvojnásobíme teplotu (v Kelvinech)?",
                options: [
                  "Klesne na polovinu",
                  "Zdvojnásobí se",
                  "Nezmění se",
                  "Zčtyřnásobí se",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c4_l2_t2",
                question: "Vzorec stavové rovnice je:",
                options: [
                  "$p / V = RT$",
                  "$pV = nRT$",
                  "$pT = VR$",
                  "$E = mc^2$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c4_l2_t3",
                question: "Děj, při kterém se nemění objem plynu, se nazývá:",
                options: [
                  "Izotermický",
                  "Izobarický",
                  "Izochorický",
                  "Adiabatický",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c4_l2_t4",
                question: "Jednotka 'mol' vyjadřuje:",
                options: [
                  "Hmotnost",
                  "Látkové množství (počet částic)",
                  "Tlak",
                  "Objem",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c4_l2_t5",
                question: "Proč je nebezpečné házet sprej do ohně?",
                options: [
                  "Protože plyn zkapalní",
                  "Protože při izochorickém ději s rostoucí teplotou prudce roste tlak a nádoba exploduje",
                  "Protože se plyn vypaří",
                  "Nic se nestane",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "První termodynamický zákon",
          content: {
            sections: [
              {
                heading: "Vnitřní energie (U)",
                text: "Součet kinetických a potenciálních energií všech částic v tělese. Vnitřní energii můžeme změnit dvěma způsoby:\n1. Konáním práce $W$ (stlačení pístu, tření).\n2. Tepelnou výměnou $Q$ (ohřátí, ochlazení).",
                image: "",
              },
              {
                heading: "Zákon zachování energie",
                text: "1. termodynamický zákon říká: Změna vnitřní energie $\\Delta U$ se rovná součtu přijatého tepla a vykonané práce.\n$$ \\Delta U = Q + W $$\nEnergii nelze stvořit ani zničit, jen přeměnit.",
                image: "",
              },
              {
                heading: "Adiabatický děj",
                text: "Děj, který proběhne tak rychle (nebo v izolaci), že nedojde k výměně tepla s okolím ($Q=0$).\n- **Adiabatická komprese:** Prudké stlačení plyn zahřeje (Dieselův motor).\n- **Adiabatická expanze:** Prudké rozepnutí plyn ochladí (uvolnění plynu ze spreje, vznik mlhy).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c4_l3_t1",
                question: "Jak zní 1. termodynamický zákon?",
                options: [
                  "Těleso setrvává v klidu",
                  "$\\Delta U = Q + W$",
                  "Teplo přechází z teplejšího na chladnější",
                  "$F = m \\cdot a$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c4_l3_t2",
                question:
                  "Když rychle nahustím kolo, ventilek se zahřeje. Proč?",
                options: [
                  "Třením vzduchu",
                  "Konáním práce při stlačování (adiabatická komprese)",
                  "Slunečním zářením",
                  "Chemickou reakcí gumy",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c4_l3_t3",
                question: "Co platí pro adiabatický děj?",
                options: [
                  "Teplota je konstantní",
                  "Tlak je konstantní",
                  "Neprobíhá tepelná výměna ($Q=0$)",
                  "Objem se nemění",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c4_l3_t4",
                question: "Vnitřní energie ideálního plynu závisí pouze na:",
                options: ["Objemu", "Teplotě", "Tvaru nádoby", "Hustotě"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c4_l3_t5",
                question:
                  "Když plyn vykoná práci (třeba odtlačí píst) a nedostane žádné teplo, jeho teplota:",
                options: [
                  "Klesne (spotřebuje vnitřní energii)",
                  "Stoupne",
                  "Nezmění se",
                  "Plyn zkapalní",
                ],
                correctAnswer: 0,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Tepelné motory a 2. zákon",
          content: {
            sections: [
              {
                heading: "Kruhový děj",
                text: "Aby motor pracoval trvale, musí se pracovní látka (plyn) vracet do původního stavu. V p-V diagramu to tvoří uzavřenou smyčku. Plocha uvnitř smyčky odpovídá vykonané práci.",
                image: "",
              },
              {
                heading: "2. termodynamický zákon",
                text: "Říká, jakým směrem přírodní děje probíhají: **Teplo samovolně přechází pouze z tělesa teplejšího na chladnější.** Nikdy naopak. Nelze sestrojit motor, který by jen bral teplo a měnil ho beze zbytku na práci (Perpetuum mobile 2. druhu neexistuje). Vždy musíme část tepla 'vyhodit' do chladiče.",
                image: "",
              },
              {
                heading: "Účinnost motoru",
                text: "Je poměr vykonané práce ($W$) k dodanému teplu ($Q_1$).\n$$ \\eta = \\frac{W}{Q_1} = 1 - \\frac{Q_2}{Q_1} $$\nProtože vždy musíme část tepla ($Q_2$) odvést do chladiče, účinnost je vždy menší než 1 (100 %).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c4_l4_t1",
                question: "Může existovat tepelný motor s účinností 100 %?",
                options: [
                  "Ano, pokud nemá tření",
                  "Ano, v budoucnosti",
                  "Ne, odporuje to 2. termodynamickému zákonu",
                  "Ano, elektromotory",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c4_l4_t2",
                question: "Samovolný přechod tepla probíhá:",
                options: [
                  "Z chladnějšího na teplejší",
                  "Z teplejšího na chladnější",
                  "Oběma směry stejně",
                  "Závisí na tlaku",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c4_l4_t3",
                question: "Každý tepelný motor musí mít:",
                options: [
                  "Ohřívač a chladič",
                  "Jen ohřívač",
                  "Jen chladič",
                  "Baterii",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "ss_c4_l4_t4",
                question: "Perpetuum mobile 2. druhu je:",
                options: [
                  "Stroj, který vyrábí energii z ničeho",
                  "Motor, který by přeměnil veškeré teplo na práci (neměl by chladič)",
                  "Auto na vodu",
                  "Solární panel",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c4_l4_t5",
                question:
                  "Účinnost zážehového (benzínového) motoru se pohybuje kolem:",
                options: ["10 %", "30 %", "80 %", "95 %"],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Změny skupenství",
          content: {
            sections: [
              {
                heading: "Skupenské teplo",
                text: "Když látka taje nebo se vaří, její teplota se **nemění**, i když ji stále zahříváme! Veškerá energie se spotřebuje na rozbití vazeb mezi částicemi (změnu skupenství). Této energii říkáme skupenské teplo ($L$).",
                image: "",
              },
              {
                heading: "Var vs. Vypařování",
                text: "- **Vypařování:** Probíhá jen na povrchu kapaliny při jakékoliv teplotě.\n- **Var:** Probíhá v celém objemu při specifické teplotě varu. Teplota varu závisí na tlaku (vyšší tlak = vyšší teplota varu, viz Papinův hrnec).",
                image: "",
              },
              {
                heading: "Sublimace",
                text: "Přímá změna z pevné látky na plyn (přeskočí kapalinu). Příklad: Suchý led ($CO_2$), jód, nebo sníh za mrazivého suchého dne. Opačný děj je desublimace (vznik jinovatky).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c4_l5_t1",
                question:
                  "Co se děje s teplotou vody při varu (za normálního tlaku)?",
                options: [
                  "Roste nad 100 °C",
                  "Zůstává konstantní (100 °C), dokud se všechna voda nevypaří",
                  "Klesá",
                  "Kolísá",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c4_l5_t2",
                question: "Proč pára o 100 °C popálí více než voda o 100 °C?",
                options: [
                  "Protože je rychlejší",
                  "Protože při kondenzaci odevzdá navíc velké skupenské teplo",
                  "Je to stejné",
                  "Protože pára je pod tlakem",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "ss_c4_l5_t3",
                question: "Co je to sublimace?",
                options: [
                  "Změna kapaliny na plyn",
                  "Změna pevné látky přímo na plyn",
                  "Tání ledu",
                  "Srážení páry",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c4_l5_t4",
                question: "Jak funguje 'papiňák' (tlakový hrnec)?",
                options: [
                  "Zvyšuje tlak, tím zvyšuje teplotu varu (voda má např. 120 °C) a jídlo se uvaří rychleji",
                  "Snižuje tlak, aby voda vařila dřív",
                  "Izoluje teplo",
                  "Míchá jídlo",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "ss_c4_l5_t5",
                question: "Anomálie vody spočívá v tom, že:",
                options: [
                  "Voda má největší hustotu při 4 °C (led plave na vodě)",
                  "Voda je modrá",
                  "Voda nevede proud",
                  "Voda se nedá stlačit",
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
      title: "Kmitání a vlnění",
      lessons: [
        {
          title: "Kmitavý pohyb: Základy",
          content: {
            sections: [
              {
                heading: "Oscilátor a parametry",
                text: "Kmitání je pohyb, který se pravidelně opakuje. Zařízení, které kmitá, je oscilátor. \n- **Perioda ($T$):** Doba jednoho kmitu (tam a zpět). [s]\n- **Frekvence ($f$):** Počet kmitů za sekundu. [Hz]\nPlatí vztah: $$ f = \\frac{1}{T} $$",
                image: "",
              },
              {
                heading: "Harmonický pohyb",
                text: "Nejjednodušší typ kmitání, jehož grafem v čase je sinusoida. Důležitou veličinou je **amplituda ($y_m$)**, což je maximální výchylka z rovnovážné polohy. Okamžitá výchylka se mění podle funkce $y = y_m \\cdot \\sin(\\omega t)$.",
                image: "",
              },
              {
                heading: "Kyvadlo vs. Pružina",
                text: "1. **Pružinový oscilátor:** Perioda závisí na hmotnosti závaží ($m$) a tuhosti pružiny ($k$).\n2. **Matematické kyvadlo:** Perioda závisí JEN na délce závěsu ($l$) a gravitaci ($g$). Na hmotnosti závaží nezáleží!",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c5_l1_t1",
                question: "Pokud jeden kmit trvá 0,5 s, jaká je frekvence?",
                options: ["0,5 Hz", "2 Hz", "1 Hz", "10 Hz"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c5_l1_t2",
                question: "Jednotkou frekvence je:",
                options: ["Sekunda", "Metr", "Hertz", "Watt"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c5_l1_t3",
                question:
                  "Změní se perioda kyvadla, když na něj pověsíme těžší závaží?",
                options: [
                  "Ano, zpomalí se",
                  "Ano, zrychlí se",
                  "Ne, perioda kyvadla na hmotnosti nezávisí",
                  "Ano, ale jen ve vakuu",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c5_l1_t4",
                question: "Co je to amplituda?",
                options: [
                  "Rychlost kmitání",
                  "Maximální výchylka z rovnovážné polohy",
                  "Počet kmitů za sekundu",
                  "Délka provázku",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c5_l1_t5",
                question: "Grafem harmonického kmitání je:",
                options: ["Přímka", "Parabola", "Kružnice", "Sinusoida"],
                correctAnswer: 3,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Tlumení a rezonance",
          content: {
            sections: [
              {
                heading: "Tlumené kmitání",
                text: "V reálném světě se kmitání po čase zastaví. Energie oscilátoru se mění na vnitřní energii (teplo) vlivem odporu prostředí a tření. Amplituda postupně klesá k nule.",
                image: "",
              },
              {
                heading: "Nucené kmitání",
                text: "Aby kmitání neustalo, musíme dodávat energii (např. strkat do houpačky). Oscilátor pak kmitá frekvencí vnější síly, ne svou vlastní frekvencí.",
                image: "",
              },
              {
                heading: "Rezonance",
                text: "Nastane, když frekvence vnější síly přesně odpovídá **vlastní frekvenci** oscilátoru. Amplituda kmitů prudce vzroste (až k destrukci). Příklad: Zřícení mostu Tacoma Narrows vlivem větru, prasknutí skleničky zvukem.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c5_l2_t1",
                question: "Proč se amplituda tlumeného kmitání zmenšuje?",
                options: [
                  "Mění se gravitace",
                  "Energie se ztrácí třením a odporem prostředí",
                  "Zvyšuje se frekvence",
                  "Pružina měkne",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c5_l2_t2",
                question: "Kdy nastává rezonance?",
                options: [
                  "Při maximálním tření",
                  "Když se frekvence vnější síly shodne s vlastní frekvencí oscilátoru",
                  "Když oscilátor zastavíme",
                  "Když do systému bouchneme náhodně",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c5_l2_t3",
                question: "Hlavním projevem rezonance je:",
                options: [
                  "Zastavení pohybu",
                  "Prudký nárůst amplitudy výchylky",
                  "Změna hmotnosti",
                  "Snížení frekvence",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c5_l2_t4",
                question: "Proč vojáci na mostě ruší krok?",
                options: [
                  "Aby si odpočinuli",
                  "Aby nevyvolali rezonanci mostu a ten nespadl",
                  "Je to jen tradice",
                  "Aby nebyli hluční",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c5_l2_t5",
                question: "Mikrovlnná trouba ohřívá jídlo díky:",
                options: [
                  "Rezonanci molekul vody",
                  "Vedení tepla ze stěn",
                  "Horkému vzduchu",
                  "Laseru",
                ],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Mechanické vlnění",
          content: {
            sections: [
              {
                heading: "Co se šíří?",
                text: "Vlnění je děj, při kterém se kmitání šíří látkovým prostředím. Důležité: **Částice látky se neposouvají** (zůstávají na místě a kmitají), prostorem putuje pouze **energie** a rozruch (tvar vlny).",
                image: "",
              },
              {
                heading: "Příčné vs. Podélné",
                text: "1. **Příčné:** Částice kmitají kolmo na směr šíření vlny (voda, struna). Tvoří vrcholy a dolíky.\n2. **Podélné:** Částice kmitají ve směru šíření vlny (zvuk, pružina). Tvoří zhuštění a zředění.",
                image: "",
              },
              {
                heading: "Vlnová délka (Lambda)",
                text: "Vzdálenost, kterou vlna urazí za jednu periodu ($T$). Je to vzdálenost dvou nejbližších bodů, které kmitají ve fázi (např. vrchol-vrchol).\n$$ \\lambda = v \\cdot T = \\frac{v}{f} $$",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c5_l3_t1",
                question: "Co se přenáší postupným vlněním?",
                options: ["Hmota", "Energie", "Vzduch", "Atomy"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c5_l3_t2",
                question: "Co je vlnová délka $\\lambda$?",
                options: [
                  "Výška vlny (amplituda)",
                  "Vzdálenost dvou sousedních vrcholů vlny",
                  "Počet vln za sekundu",
                  "Rychlost vlny",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c5_l3_t3",
                question: "Zvuk ve vzduchu je vlnění:",
                options: ["Příčné", "Podélné", "Stojaté", "Elektromagnetické"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c5_l3_t4",
                question: "Vlna na hladině vody je převážně:",
                options: [
                  "Příčné vlnění",
                  "Podélné vlnění",
                  "Zvukové vlnění",
                  "Statické vlnění",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "ss_c5_l3_t5",
                question:
                  "Pokud se frekvence zdvojnásobí (a rychlost je stejná), vlnová délka se:",
                options: [
                  "Zdvojnásobí",
                  "Zmenší na polovinu",
                  "Nezmění",
                  "Zčtyřnásobí",
                ],
                correctAnswer: 1,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Interference a stojaté vlnění",
          content: {
            sections: [
              {
                heading: "Skládání vln (Interference)",
                text: "Když se potkají dvě vlny, projdou skrze sebe a jejich výchylky se sčítají (princip superpozice).\n- **Konstruktivní interference:** Vrchol potká vrchol -> zesílení.\n- **Destruktivní interference:** Vrchol potká dolík -> vyrušení (ticho/tma).",
                image: "",
              },
              {
                heading: "Odraz vlnění",
                text: "Na pevném konci (přivázané lano) se vlna odráží s opačnou fází (vrchol se vrací jako dolík). Na volném konci se vrací se stejnou fází.",
                image: "",
              },
              {
                heading: "Stojaté vlnění",
                text: "Vzniká interferencí přímé a odražené vlny (např. na kytarové struně). Vlna nikam nepostupuje, jen kmitá. Má:\n- **Uzly:** Body, které se nepohybují.\n- **Kmitny:** Body s maximální amplitudou.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c5_l4_t1",
                question:
                  "Co se stane při setkání dvou vln s vrcholem proti vrcholu?",
                options: [
                  "Odrazí se",
                  "Vznikne dvojnásobná výchylka (zesílení)",
                  "Vyruší se",
                  "Zmizí",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c5_l4_t2",
                question:
                  "Místo na stojatém vlnění, které má nulovou výchylku, se nazývá:",
                options: ["Kmitna", "Uzel", "Amplituda", "Perioda"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c5_l4_t3",
                question:
                  "Na jakém principu vzniká tón ve strunných nástrojích?",
                options: [
                  "Stojaté vlnění",
                  "Dopplerův jev",
                  "Lom vlnění",
                  "Fotoelektrický jev",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "ss_c5_l4_t4",
                question: "Noise Cancelling sluchátka fungují na principu:",
                options: [
                  "Odrazu zvuku",
                  "Destruktivní interference (generují opačnou vlnu k hluku)",
                  "Vakua",
                  "Rezonance",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "ss_c5_l4_t5",
                question: "Princip superpozice znamená, že:",
                options: [
                  "Vlny se v místě setkání sčítají",
                  "Větší vlna zničí menší",
                  "Vlny se odrážejí jako míčky",
                  "Vlnění se zastaví",
                ],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Zvuk a akustika",
          content: {
            sections: [
              {
                heading: "Povaha zvuku",
                text: "Zvuk je mechanické vlnění prostředí (v pevných látkách, kapalinách i plynech). **Ve vakuu se nešíří!** \n- **Výška tónu:** Je dána frekvencí ($f$).\n- **Hlasitost:** Je dána amplitudou tlakových změn.",
                image: "",
              },
              {
                heading: "Rychlost zvuku",
                text: "Závisí na materiálu a teplotě. Ve vzduchu (20 °C) je to cca **340 m/s**. Ve vodě cca 1500 m/s, v oceli 5000 m/s. (Indiáni poslouchali koleje, aby slyšeli vlak dřív).",
                image: "",
              },
              {
                heading: "Dopplerův jev",
                text: "Změna vnímané frekvence při pohybu zdroje. Když se sanitka blíží, slyšíme vyšší tón (vlny se 'mačkají' k sobě). Když odjíždí, slyšíme hlubší tón (vlny se 'natahují').",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c5_l5_t1",
                question: "Jaká je rychlost zvuku ve vzduchu?",
                options: ["300 000 km/s", "340 m/s", "100 km/h", "10 m/s"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c5_l5_t2",
                question: "Proč není ve vesmíru slyšet výbuch?",
                options: [
                  "Protože je tam tma",
                  "Protože tam není vzduch (látkové prostředí), který by přenášel vlnění",
                  "Protože helma tlumí zvuk",
                  "Protože výbuchy jsou tiché",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c5_l5_t3",
                question: "Co určuje výšku tónu?",
                options: ["Amplituda", "Frekvence", "Barva", "Teplota"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c5_l5_t4",
                question: "Co je to ultrazvuk?",
                options: [
                  "Zvuk s frekvencí nižší než 16 Hz",
                  "Zvuk s frekvencí vyšší než 20 000 Hz",
                  "Velmi hlasitý zvuk",
                  "Rychlý zvuk",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c5_l5_t5",
                question: "Změna výšky tónu projíždějící formule se nazývá:",
                options: [
                  "Bernoulliho jev",
                  "Dopplerův jev",
                  "Interference",
                  "Ozvěna",
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
      title: "Elektřina a magnetismus",
      lessons: [
        {
          title: "Elektrický náboj a pole",
          content: {
            sections: [
              {
                heading: "Coulombův zákon",
                text: "Elektrický náboj ($Q$, jednotka Coulomb) je zdrojem elektrického pole. Síla mezi dvěma bodovými náboji je přímo úměrná součinu nábojů a nepřímo úměrná čtverci jejich vzdálenosti:\n$$ F_e = k \\frac{|Q_1 Q_2|}{r^2} $$\nStejné náboje se odpuzují, opačné přitahují.",
                image: "",
              },
              {
                heading: "Intenzita elektrického pole (E)",
                text: "Vektorová veličina, která popisuje sílu pole v daném místě. Je definována jako síla působící na jednotkový kladný náboj: $E = F / q$. Znázorňujeme ji siločarami, které vycházejí z kladného náboje a končí v záporném.",
                image: "",
              },
              {
                heading: "Potenciál a napětí",
                text: "Elektrický potenciál ($\\varphi$) vyjadřuje potenciální energii jednotkového náboje. Rozdíl potenciálů mezi dvěma body se nazývá **elektrické napětí ($U$)**. Jednotkou je Volt ($V$).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c6_l1_t1",
                question:
                  "Jak se změní elektrická síla, když vzdálenost mezi náboji zmenšíme na polovinu?",
                options: [
                  "Zmenší se 2x",
                  "Zvětší se 2x",
                  "Zvětší se 4x",
                  "Zmenší se 4x",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c6_l1_t2",
                question: "Jednotkou intenzity elektrického pole je:",
                options: [
                  "Newton (N)",
                  "Volt na metr (V/m) nebo Newton na Coulomb (N/C)",
                  "Joule (J)",
                  "Watt (W)",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c6_l1_t3",
                question: "Elektrické siločáry směřují:",
                options: [
                  "Od mínusu k plusu",
                  "Od plusu k mínusu",
                  "Kolmo k zemi",
                  "V kruzích",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c6_l1_t4",
                question: "Napětí je definováno jako:",
                options: [
                  "Rozdíl potenciálů",
                  "Součet nábojů",
                  "Odpor vodiče",
                  "Rychlost elektronů",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "ss_c6_l1_t5",
                question:
                  "Co se stane se dvěma elektrony, když je dáme blízko sebe?",
                options: ["Přitahují se", "Odpuzují se", "Nic", "Zničí se"],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Kondenzátor a kapacita",
          content: {
            sections: [
              {
                heading: "Kondenzátor",
                text: "Součástka schopná uchovat elektrický náboj. Nejčastěji jde o dvě vodivé desky oddělené izolantem (dielektrikem). Po připojení ke zdroji vznikne mezi deskami homogenní elektrické pole.",
                image: "",
              },
              {
                heading: "Kapacita (C)",
                text: "Veličina udávající schopnost kondenzátoru pojmout náboj při daném napětí. \n$$ C = \\frac{Q}{U} $$\nJednotkou je Farad ($F$). Kapacita deskového kondenzátoru roste s plochou desek a klesá s jejich vzdáleností.",
                image: "",
              },
              {
                heading: "Energie kondenzátoru",
                text: "Nabíjením kondenzátoru konáme práci, která se ukládá jako energie elektrického pole. $E = \\frac{1}{2} C U^2$. Využití: Blesk fotoaparátu, defibrilátor (rychlé uvolnění energie).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c6_l2_t1",
                question: "Jednotkou kapacity je:",
                options: ["Tesla", "Henry", "Farad", "Ohm"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c6_l2_t2",
                question: "Jak zvýšíme kapacitu deskového kondenzátoru?",
                options: [
                  "Oddálením desek",
                  "Zmenšením plochy desek",
                  "Přiblížením desek k sobě (zmenšením vzdálenosti)",
                  "Odstraněním dielektrika",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c6_l2_t3",
                question: "Co je dielektrikum?",
                options: [
                  "Dobrý vodič",
                  "Nevodivá látka (izolant) mezi deskami kondenzátoru",
                  "Druh baterie",
                  "Magnetický materiál",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c6_l2_t4",
                question:
                  "Když zapojíme kondenzátory paralelně (vedle sebe), celková kapacita se:",
                options: [
                  "Sčítá ($C = C_1 + C_2$)",
                  "Snižuje ($1/C = 1/C_1 + 1/C_2$)",
                  "Násobí",
                  "Nemění",
                ],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "ss_c6_l2_t5",
                question:
                  "Pokud zdvojnásobíme napětí na kondenzátoru, uložená energie:",
                options: [
                  "Se zdvojnásobí",
                  "Vzroste 4x (závisí na $U^2$)",
                  "Klesne na polovinu",
                  "Zůstane stejná",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Stejnosměrný proud",
          content: {
            sections: [
              {
                heading: "Ohmův zákon",
                text: "Základní vztah pro obvody: Proud ($I$) je přímo úměrný napětí ($U$) a nepřímo úměrný odporu ($R$).\n$$ I = \\frac{U}{R} $$\nOdpor vodiče závisí na materiálu, délce (čím delší, tím větší odpor) a průřezu (čím tlustší, tím menší odpor).",
                image: "",
              },
              {
                heading: "Kirchhoffovy zákony",
                text: "1. **O uzlech:** Součet proudů přitékajících do uzlu se rovná součtu proudů odtékajících (zákon zachování náboje).\n2. **O smyčkách:** V uzavřené smyčce je součet úbytků napětí na spotřebičích roven napětí zdroje.",
                image: "",
              },
              {
                heading: "Zapojení rezistorů",
                text: "- **Sériové (za sebou):** Proud je stejný, napětí se dělí. Odpory se sčítají ($R = R_1 + R_2$).\n- **Paralelní (vedle sebe):** Napětí je stejné, proud se větví. Celkový odpor klesá ($1/R = 1/R_1 + 1/R_2$).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c6_l3_t1",
                question:
                  "Dva rezistory o odporu 10 Ohmů zapojíme sériově. Výsledný odpor je:",
                options: ["5 Ohmů", "10 Ohmů", "20 Ohmů", "100 Ohmů"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c6_l3_t2",
                question:
                  "Pokud je v obvodu konstantní napětí a zvýšíme odpor, proud:",
                options: ["Vzroste", "Klesne", "Zůstane stejný", "Změní směr"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c6_l3_t3",
                question: "1. Kirchhoffův zákon pro uzel říká, že:",
                options: [
                  "Součet napětí je nula",
                  "Součet proudů je nula (co přiteče, to odteče)",
                  "Odpor je nula",
                  "Energie se ztrácí",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c6_l3_t4",
                question: "Jednotkou elektrického odporu je:",
                options: ["Siemens", "Ohm", "Volt", "Ampér"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c6_l3_t5",
                question:
                  "Jaké napětí je na rezistoru 5 Ohmů, kterým tečou 2 Ampéry?",
                options: ["2,5 V", "0,4 V", "10 V", "7 V"],
                correctAnswer: 2,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Magnetické pole",
          content: {
            sections: [
              {
                heading: "Magnetická indukce (B)",
                text: "Vektorová veličina popisující silové účinky magnetického pole. Jednotkou je Tesla ($T$). Zdrojem pole je buď trvalý magnet, nebo pohybující se náboj (elektrický proud). Kolem vodiče s proudem jsou siločáry ve tvaru soustředných kružnic.",
                image: "",
              },
              {
                heading: "Ampérova síla",
                text: "Magnetické pole působí silou na vodič, kterým teče proud.\n$$ F_m = B \\cdot I \\cdot l \\cdot \\sin \\alpha $$\nTato síla je principem elektromotoru. Směr určíme Flemingovým pravidlem levé ruky.",
                image: "",
              },
              {
                heading: "Lorentzova síla",
                text: "Síla působící na volnou nabitou částici (např. elektron) letící v magnetickém poli. Tato síla zakřivuje dráhu částice (na kružnici nebo spirálu), ale nemění velikost její rychlosti. Využití: Urychlovače, hmotnostní spektrometry.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c6_l4_t1",
                question: "Jednotkou magnetické indukce je:",
                options: ["Weber", "Tesla", "Gauss", "Henry"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c6_l4_t2",
                question:
                  "K určení směru magnetické síly působící na vodič používáme:",
                options: [
                  "Pravidlo pravé ruky",
                  "Flemingovo pravidlo levé ruky",
                  "Ohmův zákon",
                  "Bernoulliho rovnici",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c6_l4_t3",
                question: "Působí magnetické pole na stojící elektron?",
                options: [
                  "Ano, silně",
                  "Ne, působí jen na pohybující se náboj",
                  "Ano, ale jen slabě",
                  "Záleží na teplotě",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c6_l4_t4",
                question:
                  "Jakou dráhu opisuje elektron, který vletí kolmo do homogenního magnetického pole?",
                options: ["Přímku", "Parabolu", "Kružnici", "Hyperbolu"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c6_l4_t5",
                question: "Princip elektromotoru je založen na:",
                options: [
                  "Interakci magnetického pole a vodiče s proudem",
                  "Elektrostatické indukci",
                  "Tepelné roztažnosti",
                  "Jaderné reakci",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Elektromagnetická indukce",
          content: {
            sections: [
              {
                heading: "Faradayův zákon",
                text: "Nestacionární (měnící se) magnetické pole vyvolává ve vodiči elektrické napětí. Velikost indukovaného napětí je rovna rychlosti změny magnetického indukčního toku.\n$$ U_i = - \\frac{\\Delta \\Phi}{\\Delta t} $$",
                image: "",
              },
              {
                heading: "Lenzův zákon",
                text: "Indukovaný proud má vždy takový směr, že svým magnetickým polem působí **proti změně**, která ho vyvolala. (Příroda se brání změnám). To je to mínus ve Faradayově vzorci.",
                image: "",
              },
              {
                heading: "Střídavý proud a transformátor",
                text: "Díky indukci vzniká v generátorech střídavý proud. Transformátor mění velikost střídavého napětí pomocí dvou cívek na společném jádře. Platí transformační poměr: $U_2 / U_1 = N_2 / N_1$.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c6_l5_t1",
                question:
                  "Aby se v cívce indukovalo napětí, magnetické pole se musí:",
                options: [
                  "Být velmi silné",
                  "Měnit v čase",
                  "Být nulové",
                  "Pohybovat rychlostí světla",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c6_l5_t2",
                question: "Transformátor funguje pouze na:",
                options: [
                  "Stejnosměrný proud",
                  "Střídavý proud",
                  "Statickou elektřinu",
                  "Vysoké napětí",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c6_l5_t3",
                question: "Lenzův zákon říká, že indukovaný proud:",
                options: [
                  "Podporuje změnu",
                  "Působí proti změně, která ho vyvolala",
                  "Teče náhodně",
                  "Je vždy nulový",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c6_l5_t4",
                question:
                  "Když má sekundární cívka 2x více závitů než primární, výstupní napětí bude:",
                options: ["Poloviční", "Dvojnásobné", "Čtyřnásobné", "Stejné"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c6_l5_t5",
                question: "Kde se využívá elektromagnetická indukce?",
                options: [
                  "V generátorech elektráren",
                  "V bateriích",
                  "V rezistorech",
                  "V kondenzátorech",
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
      title: "Optika",
      lessons: [
        {
          title: "Povaha světla a odraz",
          content: {
            sections: [
              {
                heading: "Co je to světlo?",
                text: "Světlo je elektromagnetické vlnění s vlnovou délkou cca 390–760 nm. Šíří se i ve vakuu. Rychlost světla ve vakuu ($c$) je základní fyzikální konstantou: $c \\approx 300 000 \\ km/s$. V látkovém prostředí (sklo, voda) je vždy pomalejší.",
                image: "",
              },
              {
                heading: "Zákon odrazu",
                text: "Když paprsek dopadne na rozhraní dvou prostředí (např. vzduch-zrcadlo), odráží se. Platí zákon odrazu: Úhel odrazu se rovná úhlu dopadu ($\\alpha' = \\alpha$). Úhly měříme vždy od kolmice k dopadové ploše!",
                image: "",
              },
              {
                heading: "Rovinné zrcadlo",
                text: "Vytváří obraz, který je: 1) Zdánlivý (virtuální) – je 'za' zrcadlem. 2) Vzpřímený. 3) Stejně velký. 4) Stranově převrácený.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c7_l1_t1",
                question: "Jaká je přibližná rychlost světla ve vakuu?",
                options: ["340 m/s", "300 000 km/s", "1000 km/h", "Nekonečná"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c7_l1_t2",
                question:
                  "Pokud dopadá světlo na zrcadlo pod úhlem 30° od kolmice, úhel odrazu je:",
                options: ["60°", "30°", "90°", "45°"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c7_l1_t3",
                question: "Obraz v rovinném zrcadle je:",
                options: [
                  "Skutečný (lze ho zachytit na stínítko)",
                  "Zdánlivý (virtuální)",
                  "Zvětšený",
                  "Převrácený hlavou dolů",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c7_l1_t4",
                question: "Světlo je druh:",
                options: [
                  "Mechanického vlnění",
                  "Elektromagnetického vlnění",
                  "Zvukového vlnění",
                  "Gravitačního vlnění",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c7_l1_t5",
                question:
                  "Co se děje s rychlostí světla, když vletí ze vzduchu do skla?",
                options: [
                  "Zpomalí se",
                  "Zrychlí se",
                  "Zůstane stejná",
                  "Světlo se zastaví",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Kulová zrcadla",
          content: {
            sections: [
              {
                heading: "Druhy zrcadel",
                text: "Zrcadla nemusí být rovná. \n- **Duté (konkávní):** Vnitřní plocha koule. Světlo soustředí do bodu (ohniska). Příklad: Kosmetické zrcátko (zvětšuje).\n- **Vypuklé (konvexní):** Vnější plocha koule. Světlo rozptyluje. Příklad: Zrcadla v zatáčkách (zmenšují, ale vidíš větší úhel).",
                image: "",
              },
              {
                heading: "Ohnisko (F)",
                text: "Bod, ve kterém se protínají paprsky (u dutého zrcadla) nebo jejich prodloužení (u vypuklého). Vzdálenost ohniska od zrcadla je polovina poloměru křivosti ($f = r/2$).",
                image: "",
              },
              {
                heading: "Zobrazovací rovnice",
                text: "Vztah mezi vzdáleností předmětu ($a$), obrazu ($a'$) a ohniskovou vzdáleností ($f$):\n$$ \\frac{1}{f} = \\frac{1}{a} + \\frac{1}{a'} $$",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c7_l2_t1",
                question:
                  "Které zrcadlo soustředí rovnoběžné paprsky do jednoho bodu?",
                options: [
                  "Rovinné",
                  "Duté (konkávní)",
                  "Vypuklé (konvexní)",
                  "Žádné",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c7_l2_t2",
                question: "Kde se používá vypuklé zrcadlo?",
                options: [
                  "Ve světlometech aut",
                  "V nepřehledných křižovatkách (pro širší rozhled)",
                  "V teleskopech",
                  "Pro zapálení ohně",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c7_l2_t3",
                question: "Ohnisková vzdálenost kulového zrcadla je rovna:",
                options: [
                  "Poloměru křivosti",
                  "Polovině poloměru křivosti",
                  "Dvojnásobku poloměru křivosti",
                  "Průměru zrcadla",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c7_l2_t4",
                question:
                  "Obraz v dutém zrcadle, pokud je předmět velmi blízko (mezi ohniskem a zrcadlem), je:",
                options: [
                  "Zmenšený a převrácený",
                  "Zvětšený, vzpřímený a zdánlivý (lupa)",
                  "Stejně velký",
                  "Neviditelný",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "ss_c7_l2_t5",
                question: "Parabolická zrcadla se používají v:",
                options: [
                  "Satelitních anténách a světlometech",
                  "Koupelnách",
                  "Zpětných zrcátkách",
                  "Oknech",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Lom světla a čočky",
          content: {
            sections: [
              {
                heading: "Lom světla (Refrakce)",
                text: "Když světlo přechází z jednoho průhledného prostředí do jiného (např. vzduch $\\rightarrow$ voda), mění směr. \n- **Ke kolmici:** Do opticky hustšího prostředí (vzduch $\\rightarrow$ sklo).\n- **Od kolmice:** Do opticky řidšího prostředí (sklo $\\rightarrow$ vzduch).",
                image: "",
              },
              {
                heading: "Čočky",
                text: "Průhledná tělesa, která lomem mění směr paprsků.\n- **Spojka:** Uprostřed tlustší. Mění rovnoběžný svazek na sbíhavý (do ohniska). $D > 0$.\n- **Rozptylka:** Uprostřed tenčí. Mění rovnoběžný svazek na rozbíhavý. $D < 0$.",
                image: "",
              },
              {
                heading: "Optická mohutnost",
                text: "Říká, jak moc čočka láme světlo. Jednotkou je Dioptrie ($D$ nebo $m^{-1}$). Je to převrácená hodnota ohniskové vzdálenosti:\n$$ D = \\frac{1}{f} $$",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c7_l3_t1",
                question:
                  "Při přechodu světla ze vzduchu do vody se paprsek láme:",
                options: ["Od kolmice", "Ke kolmici", "Zpět", "Nelomí se"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c7_l3_t2",
                question: "Spojná čočka (spojka) je uprostřed:",
                options: [
                  "Tenčí než na kraji",
                  "Tlustší než na kraji",
                  "Stejně tlustá",
                  "Děravá",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c7_l3_t3",
                question:
                  "Optická mohutnost čočky s ohniskovou vzdáleností 0,5 m je:",
                options: ["0,5 D", "2 D ($1 / 0,5$)", "5 D", "1 D"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c7_l3_t4",
                question: "Úplný odraz (totální reflexe) se využívá v:",
                options: ["Optických vláknech", "Brýlích", "Lupě", "Zrcadlech"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "ss_c7_l3_t5",
                question: "Rozptylka vytváří obraz:",
                options: [
                  "Skutečný",
                  "Vždy zdánlivý, vzpřímený a zmenšený",
                  "Zvětšený",
                  "Převrácený",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Oko a optické přístroje",
          content: {
            sections: [
              {
                heading: "Lidské oko",
                text: "Funguje jako fotoaparát. Objektiv tvoří rohovka a pružná čočka, snímačem je sítnice. Obraz na sítnici je skutečný, zmenšený a převrácený. Oko zaostřuje (akomoduje) změnou zakřivení čočky.",
                image: "",
              },
              {
                heading: "Vady oka",
                text: "1. **Krátkozrakost (Myopie):** Obraz vzniká PŘED sítnicí. Vidí špatně na dálku. Korekce: Rozptylka (mínus dioptrie).\n2. **Dalekozrakost (Hypermetropie):** Obraz vzniká ZA sítnicí. Vidí špatně na blízko. Korekce: Spojka (plus dioptrie).",
                image: "",
              },
              {
                heading: "Mikroskop a Dalekohled",
                text: "Složitější přístroje složené ze dvou soustav čoček (objektiv a okulár).\n- **Mikroskop:** Objektiv s malou ohniskovou vzdáleností.\n- **Dalekohled:** Objektiv s velkou ohniskovou vzdáleností.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c7_l4_t1",
                question: "Kde vzniká obraz ve zdravém oku?",
                options: [
                  "Před sítnicí",
                  "Za sítnicí",
                  "Na sítnici",
                  "Na čočce",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c7_l4_t2",
                question: "Krátkozrakost se koriguje:",
                options: ["Spojkou", "Rozptylkou", "Hranolem", "Zrcadlem"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c7_l4_t3",
                question: "Akomodace oka znamená:",
                options: [
                  "Změna velikosti zornice",
                  "Změna tvaru (optické mohutnosti) čočky pro zaostření",
                  "Zavírání víčka",
                  "Slzení",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c7_l4_t4",
                question: "Lupa je v podstatě:",
                options: [
                  "Jednoduchá spojka",
                  "Jednoduchá rozptylka",
                  "Soustava zrcadel",
                  "Kus plastu",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "ss_c7_l4_t5",
                question: "Keplerův dalekohled se skládá z:",
                options: [
                  "Dvou rozptylek",
                  "Dvou spojek (objektiv a okulár)",
                  "Zrcadla a čočky",
                  "Hranolu",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Vlnová optika",
          content: {
            sections: [
              {
                heading: "Disperze (Rozklad)",
                text: "Bílé světlo je složeno z barevného spektra (duha). Index lomu závisí na frekvenci (barvě). Fialová se láme nejvíce, červená nejméně. Proto hranol rozkládá světlo na spektrum.",
                image: "",
              },
              {
                heading: "Interference",
                text: "Skládání světelných vln. Je vidět např. na tenké vrstvě (bublifuk, olej na vodě). Světlo se odráží od horní i spodní hranice vrstvy a tyto dvě vlny se složí – některé barvy se zesílí, jiné vyruší.",
                image: "",
              },
              {
                heading: "Polarizace",
                text: "Světlo je příčné vlnění kmitající ve všech směrech. Polarizační filtr propustí jen kmity v jedné rovině. Využití: Polarizační brýle (odstraní odlesky od silnice nebo vody), LCD displeje.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c7_l5_t1",
                question: "Která barva se při průchodu hranolem láme nejvíce?",
                options: ["Červená", "Žlutá", "Zelená", "Fialová"],
                correctAnswer: 3,
                xp: 15,
              },
              {
                id: "ss_c7_l5_t2",
                question: "Barevné skvrny na mýdlové bublině jsou způsobeny:",
                options: [
                  "Lomem světla",
                  "Interferencí světla na tenké vrstvě",
                  "Pigmentem v mýdle",
                  "Polarizací",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c7_l5_t3",
                question: "Co dělají polarizační brýle?",
                options: [
                  "Zvyšují jas",
                  "Mění barvy na černobílé",
                  "Odstraňují odlesky (propouští světlo kmitající jen v jednom směru)",
                  "Fungují jako lupa",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c7_l5_t4",
                question: "Duha vzniká díky:",
                options: [
                  "Ohybu světla",
                  "Lomu, rozkladu a odrazu světla v kapkách vody",
                  "Interferenci",
                  "Elektrickému výboji",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c7_l5_t5",
                question: "Ohyb (difrakce) světla nastává:",
                options: [
                  "Na překážkách srovnatelně malých s vlnovou délkou (např. mřížka)",
                  "Vždy v noci",
                  "Pouze ve vakuu",
                  "Na velkých zrcadlech",
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
      title: "Fyzika mikrosvěta",
      lessons: [
        {
          title: "Kvantová povaha světla",
          content: {
            sections: [
              {
                heading: "Fotoelektrický jev",
                text: "Když světlo dopadá na kovovou desku, může z ní vyrážet elektrony. Klasická fyzika selhala, protože tento jev nezávisí na intenzitě světla (jak moc svítíme), ale na jeho barvě (frekvenci). Červené světlo (nízká frekvence) nevyráží nic, fialové (vysoká) ano.",
                image: "",
              },
              {
                heading: "Foton",
                text: "Albert Einstein vysvětlil fotoefekt tím, že světlo není spojitá vlna, ale proud částic energie – fotonů. Energie fotonu je přímo úměrná frekvenci: $E = h \\cdot f$ ($h$ je Planckova konstanta). Za toto dostal Einstein Nobelovu cenu.",
                image: "",
              },
              {
                heading: "Dualita částice a vlnění",
                text: "Světlo se chová podivně. Při šíření (ohyb, interference) se chová jako vlna. Při interakci s hmotou (fotoefekt) se chová jako částice. Říkáme tomu vlnově-korpuskulární dualita. Platí to i pro elektrony (i ty se mohou chovat jako vlny!).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c8_l1_t1",
                question: "Kdo vysvětlil fotoelektrický jev?",
                options: [
                  "Isaac Newton",
                  "Albert Einstein",
                  "Thomas Edison",
                  "Nikola Tesla",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c8_l1_t2",
                question: "Co je to foton?",
                options: [
                  "Jádro atomu",
                  "Kvantum (balíček) elektromagnetické energie",
                  "Záporně nabitá částice",
                  "Druh baterie",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c8_l1_t3",
                question: "Energie fotonu roste s:",
                options: [
                  "Frekvencí záření",
                  "Vlnovou délkou",
                  "Rychlostí světla",
                  "Teplotou zdroje",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "ss_c8_l1_t4",
                question: "Co znamená vlnově-korpuskulární dualita?",
                options: [
                  "Světlo má dvě barvy",
                  "Světlo se chová někdy jako vlna a někdy jako částice",
                  "Světlo se šíří jen ve dne",
                  "Světlo je tvořeno protony",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c8_l1_t5",
                question: "Které světlo má fotony s největší energií?",
                options: ["Červené", "Zelené", "Fialové (UV)", "Infračervené"],
                correctAnswer: 2,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Stavba atomu",
          content: {
            sections: [
              {
                heading: "Rutherfordův model",
                text: "Atom je téměř prázdný prostor. Uprostřed je maličké, těžké, kladné jádro (kde je 99,9 % hmotnosti). Kolem obíhají lehoučké elektrony jako planety kolem Slunce.",
                image: "",
              },
              {
                heading: "Bohrův model",
                text: "Niels Bohr model vylepšil: Elektrony nemohou být kdekoliv, ale jen na určitých 'povolených' drahách (slupkách). \n- Když elektron přeskočí z vyšší dráhy na nižší, vyzáří přebytečnou energii jako foton (světlo). Tak vzniká světlo v neonkách nebo ohňostroji.",
                image: "",
              },
              {
                heading: "Kvantově mechanický model",
                text: "Dnes víme, že elektron není kulička na dráze, ale 'mrak pravděpodobnosti' (orbital). Podle Heisenbergova principu neurčitosti nemůžeme nikdy současně přesně znát polohu i rychlost elektronu.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c8_l2_t1",
                question: "Kde je soustředěna většina hmotnosti atomu?",
                options: [
                  "V obalu",
                  "V jádře",
                  "Je rozložena rovnoměrně",
                  "V elektronech",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c8_l2_t2",
                question: "Z čeho se skládá atomové jádro?",
                options: [
                  "Z elektronů a protonů",
                  "Z protonů a neutronů (nukleonů)",
                  "Pouze z neutronů",
                  "Z fotonů",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c8_l2_t3",
                question:
                  "Co se stane, když elektron v atomu 'spadne' z vyšší hladiny na nižší?",
                options: [
                  "Atom se rozpadne",
                  "Atom vyzáří energii (foton)",
                  "Atom pohltí energii",
                  "Vznikne neutron",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c8_l2_t4",
                question: "Atom jako celek je elektricky:",
                options: [
                  "Kladný",
                  "Záporný",
                  "Neutrální (počet protonů = počet elektronů)",
                  "Nestabilní",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c8_l2_t5",
                question: "Co říká Heisenbergův princip neurčitosti?",
                options: [
                  "Že atomy neexistují",
                  "Že nelze současně přesně změřit polohu a hybnost částice",
                  "Že fyzika je nepřesná",
                  "Že elektron stojí na místě",
                ],
                correctAnswer: 1,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Radioaktivita",
          content: {
            sections: [
              {
                heading: "Rozpad jader",
                text: "Některá atomová jádra jsou nestabilní a samovolně se rozpadají na jiná. Přitom vyzařují neviditelné záření. Tento jev se nazývá radioaktivita (objevili ji Becquerel a Curieovi). Doba, za kterou se rozpadne polovina jader, je **poločas rozpadu**.",
                image: "",
              },
              {
                heading: "Druhy záření",
                text: "- **Alfa ($\\alpha$):** Jádra helia. Málo pronikavé (zastaví ho papír), ale nebezpečné při vdechnutí.\n- **Beta ($\\beta$):** Rychlé elektrony. Zastaví ho tenký plech.\n- **Gama ($\\gamma$):** Elektromagnetické vlnění (jako rentgen, ale silnější). Velmi pronikavé, zastaví ho tlusté olovo nebo beton.",
                image: "",
              },
              {
                heading: "Využití",
                text: "V lékařství (ozařování nádorů, rentgen), v průmyslu (kontrola svárů), v archeologii (uhlíková metoda datování stáří kostí).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c8_l3_t1",
                question: "Které jaderné záření je nejvíce pronikavé?",
                options: ["Alfa", "Beta", "Gama", "Všechna stejně"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c8_l3_t2",
                question: "Čím lze odstínit záření Alfa?",
                options: [
                  "Listem papíru",
                  "Metrovou zdí z olova",
                  "Hliníkovou fólií",
                  "Ničím",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "ss_c8_l3_t3",
                question: "Co udává poločas rozpadu?",
                options: [
                  "Dobu, kdy přestane látka zářit",
                  "Dobu, za kterou se rozpadne polovina jader ve vzorku",
                  "Dobu života atomu",
                  "Polovinu roku",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c8_l3_t4",
                question:
                  "Kdo získal dvě Nobelovy ceny za výzkum radioaktivity?",
                options: [
                  "Albert Einstein",
                  "Marie Curie-Skłodowska",
                  "Isaac Newton",
                  "Ernest Rutherford",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c8_l3_t5",
                question: "Metoda C14 (radiouhlíková) se používá k:",
                options: [
                  "Výrobě energie",
                  "Určování stáří organických nálezů (kostí, dřeva)",
                  "Léčbě nemocí",
                  "Výrobě bomb",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Jaderná energie",
          content: {
            sections: [
              {
                heading: "E = mc²",
                text: "Einsteinova rovnice říká, že hmota je jen extrémně koncentrovaná forma energie. Pokud se nám podaří přeměnit kousek hmoty (tzv. hmotnostní úbytek), získáme obrovské množství energie. To se děje v jádrech atomů.",
                image: "",
              },
              {
                heading: "Štěpení (Fise)",
                text: "Rozbití těžkého jádra (Uran) na dvě lehčí pomocí neutronu. Uvolní se energie a další neutrony $\\rightarrow$ **řetězová reakce**. \n- Řízená: Jaderná elektrárna.\n- Neřízená: Atomová bomba.",
                image: "",
              },
              {
                heading: "Slučování (Fúze)",
                text: "Spojování lehkých jader (Vodík) na těžší (Helium). Uvolní se ještě více energie než při štěpení. Takto funguje Slunce. Na Zemi se to snažíme napodobit v reaktorech typu Tokamak (zatím je to velmi těžké udržet).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c8_l4_t1",
                question: "Co pohání jaderné elektrárny (např. Temelín)?",
                options: [
                  "Jaderná fúze (slučování)",
                  "Jaderné štěpení uranu",
                  "Spalování uhlí",
                  "Chemická reakce",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c8_l4_t2",
                question: "Odkud bere energii Slunce?",
                options: [
                  "Z hoření kyslíku",
                  "Z jaderné fúze (slučování vodíku na helium)",
                  "Ze štěpení uranu",
                  "Z gravitačního smršťování",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c8_l4_t3",
                question: "Co znamená $c$ v rovnici $E=mc^2$?",
                options: [
                  "Teplo",
                  "Rychlost světla ve vakuu",
                  "Konstanta",
                  "Čas",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c8_l4_t4",
                question: "K čemu slouží v elektrárně regulační tyče?",
                options: [
                  "K míchání vody",
                  "K pohlcování neutronů (brzdí nebo zastavují reakci)",
                  "Jako palivo",
                  "K chlazení věží",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c8_l4_t5",
                question:
                  "Jaký je hlavní odpadní produkt jaderné fúze (na Slunci)?",
                options: [
                  "Radioaktivní odpad",
                  "Helium (neškodné)",
                  "Uhlí",
                  "Plutonium",
                ],
                correctAnswer: 1,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Částicová fyzika",
          content: {
            sections: [
              {
                heading: "Standardní model",
                text: "Protony a neutrony nejsou nejmenší! Skládají se z **kvarků**. Elektrony se (asi) dělit nedají a patří mezi **leptony**. Vše drží pohromadě díky **bosonům** (částice přenášející sílu, např. foton nebo gluon).",
                image: "",
              },
              {
                heading: "Antihmota",
                text: "Ke každé částici existuje anti-částice s opačným nábojem (např. pozitron je kladný elektron). Když se potká hmota s antihmotou, nastane **anihilace** – obě zmizí a 100 % jejich hmotnosti se změní na záření (energii).",
                image: "",
              },
              {
                heading: "Urychlovače",
                text: "Abychom tyto částice viděli, musíme do sebe atomy vrážet obrovskou rychlostí. K tomu slouží urychlovače, jako je LHC v CERNu (podzemní tunel dlouhý 27 km).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c8_l5_t1",
                question: "Z čeho se skládá proton?",
                options: [
                  "Je nedělitelný",
                  "Z kvarků",
                  "Z elektronů",
                  "Z fotonů",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c8_l5_t2",
                question: "Co se stane při setkání hmoty a antihmoty?",
                options: [
                  "Odrazí se",
                  "Anihilace (přeměna na čistou energii)",
                  "Vznikne černá díra",
                  "Nic",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c8_l5_t3",
                question: "Elektron patří do rodiny částic zvaných:",
                options: ["Kvarky", "Leptony", "Hadrony", "Nukleony"],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "ss_c8_l5_t4",
                question: "Kde se nachází největší urychlovač částic (LHC)?",
                options: [
                  "V USA (NASA)",
                  "Na hranicích Švýcarska a Francie (CERN)",
                  "V Rusku",
                  "V Číně",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c8_l5_t5",
                question: "Higgsův boson je částice, která ostatním dává:",
                options: ["Barvu", "Elektrický náboj", "Hmotnost", "Rychlost"],
                correctAnswer: 2,
                xp: 25,
              },
            ],
          },
        },
      ],
    },
  ],
};

export const physicsSS2 = {
  default: [],
};
