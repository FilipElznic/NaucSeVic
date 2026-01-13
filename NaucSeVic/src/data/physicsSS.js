export const physicsSS = {
  default: [
    {
      title: "Kinematika",
      lessons: [
        "Pohyb hmotného bodu",
        "Rovnoměrný pohyb",
        "Rovnoměrně zrychlený pohyb",
        "Kruhový pohyb",
      ],
    },
    {
      title: "Dynamika",
      lessons: [
        "Newtonovy zákony",
        "Hybnost",
        "Práce a výkon",
        "Energie",
        "Gravitační pole",
      ],
    },
    {
      title: "Mechanika tuhého tělesa a tekutin",
      lessons: [
        {
          title: "Rovnováha a rotace: Moment síly",
          content: {
            sections: [
              {
                heading: "Tuhé těleso",
                text: "Doteď jsme brali objekty jako body. Ale co když má těleso rozměry a tvar? Tuhé těleso je ideální model, který se nedeformuje (vzdálenost mezi libovolnými dvěma body se nemění). Síla už nezpůsobuje jen posun, ale může těleso i roztočit.",
                image: "",
              },
              {
                heading: "Moment síly (Otáčivý účinek)",
                text: "Proč je klika u dveří co nejdál od pantů? Protože rozhoduje nejen velikost síly, ale i vzdálenost od osy otáčení (rameno síly). Veličinu nazýváme moment síly ($M$).\n$$ M = F \\cdot r $$\nJednotkou je Newtonmetr ($N \\cdot m$). Čím delší páka, tím větší moment.",
                image: "",
              },
              {
                heading: "Momentová věta",
                text: "Aby se těleso nezačalo otáčet (bylo v rovnováze), musí se otáčivé účinky vyrušit. Součet momentů sil otáčejících doprava se musí rovnat součtu momentů sil otáčejících doleva ($M_1 = M_2$). Na tom funguje houpačka i váhy.",
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
                question: "Chceš povolit zarezlý šroub. Co ti pomůže?",
                options: [
                  "Použít kratší klíč",
                  "Použít delší klíč (zvětšit rameno)",
                  "Tlačit blíže ke šroubu",
                  "Rychleji škubnout",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c2_l1_t3",
                question:
                  "Na houpačce sedí dítě (20 kg) 2 metry od středu. Kam si musí sednout dospělý (80 kg), aby byla rovnováha?",
                options: [
                  "0,5 m od středu",
                  "1 m od středu",
                  "4 m od středu",
                  "Přímo do středu",
                ],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "ss_c2_l1_t4",
                question: "Vzorec pro moment síly je:",
                options: [
                  "$M = F / r$",
                  "$M = F \\cdot r$",
                  "$M = F + r$",
                  "$M = 1/2 F \\cdot r^2$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c2_l1_t5",
                question: "Co znamená, že výsledný moment sil je nulový?",
                options: [
                  "Těleso se neposouvá",
                  "Těleso neexistuje",
                  "Těleso se nezačne otáčet (je v rotační rovnováze)",
                  "Na těleso nepůsobí žádná síla",
                ],
                correctAnswer: 2,
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
                heading: "Hledání těžiště",
                text: "Těžiště ($T$) je působiště výslednice všech tíhových sil, které působí na částice tělesa. Je to bod, kolem kterého je těleso 'vyvážené'. Pokud těleso podepřeme v těžišti, nespadne. U pravidelných těles je ve středu, u nepravidelných může být i mimo hmotu (např. prstýnek).",
                image: "",
              },
              {
                heading: "Tři druhy rovnováhy",
                text: "1. **Stálá (stabilní):** Těžiště je pod osou otáčení. Když do tělesa drcneš, vrátí se zpět (zavěšený obraz).\n2. **Vratká (labilní):** Těžiště je nad osou. Stačí drcnout a spadne (tužka na špičce).\n3. **Volná (indiferentní):** Těžiště se nemění (koule na stole).",
                image:
                  "\n\n[Image of equilibrium types stable unstable neutral]\n",
              },
              {
                heading: "Stabilita proti převrácení",
                text: "Proč je formule F1 'přilepená' k zemi a terénní auto vysoké? Čím níže je těžiště a čím širší je podstava, tím je těleso stabilnější. Těleso se převrhne, jakmile svislice spuštěná z těžiště vybočí z podstavy.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c2_l2_t1",
                question: "Kde má těžiště obruč nebo prstýnek?",
                options: [
                  "V materiálu obruče",
                  "Uprostřed prázdného prostoru (mimo hmotu)",
                  "Nemá těžiště",
                  "V nejvyšším bodě",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c2_l2_t2",
                question: "Kulička v důlku je příkladem rovnováhy:",
                options: ["Vratké", "Volné", "Stálé", "Dynamické"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c2_l2_t3",
                question: "Co zvýší stabilitu závodního auta?",
                options: [
                  "Zvýšení podvozku",
                  "Snížení těžiště a rozšíření kol",
                  "Zúžení pneumatik",
                  "Přidání zátěže na střechu",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c2_l2_t4",
                question: "Kdy se těleso převrhne?",
                options: [
                  "Když do něj foukne vítr",
                  "Když je těžké",
                  "Když svislice z těžiště opustí plochu podstavy",
                  "Když je těžiště uprostřed",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c2_l2_t5",
                question: "Provazochodec používá tyč, aby:",
                options: [
                  "Vypadal drsně",
                  "Snížil své těžiště",
                  "Zvětšil svůj moment setrvačnosti (bránil se rotaci)",
                  "Zvýšil tření",
                ],
                correctAnswer: 2,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Tlak v tekutinách (Hydrostatika)",
          content: {
            sections: [
              {
                heading: "Pascalův zákon",
                text: "Pokud zatlačíme na uzavřenou kapalinu, tlak se šíří všemi směry stejně. Toho využívají hydraulická zařízení (brzdy, lisy). Malou silou na malý píst vyvoláme obrovskou sílu na velkém pístu.",
                image: "\n\n[Image of hydraulic press principle]\n",
              },
              {
                heading: "Hydrostatický tlak",
                text: "Voda má hmotnost a tlačí sama na sebe. Čím hlouběji jsi, tím větší sloupec vody máš nad sebou. Tlak ($p_h$) závisí na hloubce ($h$) a hustotě kapaliny ($\\rho$).\n$$ p_h = h \\cdot \\rho \\cdot g $$",
                image: "",
              },
              {
                heading: "Archimédův zákon",
                text: "Těleso ponořené do kapaliny je nadlehčováno silou, která se rovná tíze kapaliny tělesem vytlačené. Proto lodě z oceli plavou – vytlačí obrovské množství vody, která je 'vynese' nahoru.",
                image: "\n\n[Image of Archimedes principle buoyancy]\n",
              },
            ],
            tasks: [
              {
                id: "ss_c2_l3_t1",
                question: "Vzorec pro hydrostatický tlak je:",
                options: [
                  "$p = F / S$",
                  "$p = h \\cdot \\rho \\cdot g$",
                  "$p = 1/2 \\cdot \\rho \\cdot v^2$",
                  "$p = m \\cdot g$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c2_l3_t2",
                question: "Proč plave ocelová loď?",
                options: [
                  "Protože má výkonný motor",
                  "Protože ocel je lehčí než voda",
                  "Protože její průměrná hustota (díky vzduchu uvnitř) je menší než hustota vody",
                  "Protože voda je slaná",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c2_l3_t3",
                question: "Pascalův zákon je principem fungování:",
                options: [
                  "Hydraulického lisu",
                  "Horkovzdušného balónu",
                  "Páky",
                  "Rakety",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "ss_c2_l3_t4",
                question: "V hloubce 10 metrů pod vodou je tlak přibližně o:",
                options: [
                  "100 Pa vyšší",
                  "100 kPa vyšší (1 atmosféru)",
                  "Nic se nemění",
                  "1000 kPa vyšší",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c2_l3_t5",
                question: "Která kapalina způsobí v hloubce 1 m největší tlak?",
                options: ["Voda", "Olej", "Rtuť (má největší hustotu)", "Líh"],
                correctAnswer: 2,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Bernoulliho rovnice a proudění",
          content: {
            sections: [
              {
                heading: "Rovnice kontinuity",
                text: "Představ si zahradní hadici. Když ji zmáčkneš (zmenšíš průřez $S$), voda stříká rychleji ($v$). Protože voda je nestlačitelná, musí jí protéct stejné množství všude.\n$$ S_1 \\cdot v_1 = S_2 \\cdot v_2 $$\nKde je trubka úzká, tam to teče rychle.",
                image: "\n\n[Image of continuity equation pipe flow]\n",
              },
              {
                heading: "Bernoulliho rovnice",
                text: "Zákon zachování energie pro tekutiny. Říká překvapivou věc: Tam, kde kapalina nebo plyn proudí rychleji, je NIŽŠÍ tlak. \nSoučet tlaku a kinetické energie toku je konstantní: $$ \\frac{1}{2}\\rho v^2 + p = konst. $$",
                image: "\n\n[Image of Bernoulli principle venturi]\n",
              },
              {
                heading: "Aerodynamický vztlak",
                text: "Díky Bernoulliho jevu létají letadla. Křídlo je tvarované tak, aby vzduch nahoře musel běžet rychleji než dole. Nahoře tedy vznikne podtlak a dole přetlak. Tento rozdíl tlaků 'vcucne' letadlo nahoru.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c2_l4_t1",
                question:
                  "Co se stane s rychlostí vody, když zúžíme trubku na polovinu průřezu?",
                options: [
                  "Zpomalí se",
                  "Zrychlí se 2x",
                  "Zrychlí se 4x",
                  "Zůstane stejná",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c2_l4_t2",
                question:
                  "Podle Bernoulliho rovnice platí: Rychlejší proudění znamená...",
                options: [
                  "Vyšší tlak",
                  "Nižší tlak",
                  "Vyšší teplotu",
                  "Větší tření",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c2_l4_t3",
                question:
                  "Proč se k sobě přitáhnou dva listy papíru, když mezi ně foukneš?",
                options: [
                  "Protože dech je teplý",
                  "Protože mezi nimi vznikne podtlak (vzduch tam proudí rychle)",
                  "Je to kouzlo",
                  "Vzduch je odtlačí od sebe",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "ss_c2_l4_t4",
                question: "Rovnice kontinuity vyjadřuje zákon zachování:",
                options: ["Hmotnosti", "Energie", "Hybnosti", "Náboje"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "ss_c2_l4_t5",
                question: "Fixírka (rozprašovač) funguje na principu:",
                options: [
                  "Archimédova zákona",
                  "Pascalova zákona",
                  "Bernoulliho jevu (podtlak nasaje kapalinu)",
                  "Gravitace",
                ],
                correctAnswer: 2,
                xp: 20,
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
                text: "V reálném světě existuje tření vzduchu nebo vody. Proti pohybu tělesa působí odporová síla. Závisí na hustotě prostředí, průřezu tělesa, tvaru a hlavně na rychlosti na druhou ($v^2$). Rychlá jízda = obrovská spotřeba paliva.",
                image: "",
              },
              {
                heading: "Součinitel odporu ($C_x$)",
                text: "Číslo, které říká, jak je tvar 'aerodynamický'.\n- Kapka: $C_x \\approx 0,04$ (Nejlepší)\n- Koule: $C_x \\approx 0,48$\n- Deska kolmo: $C_x \\approx 1,2$ (Nejhorší)\nProto mají sportovní auta oblé tvary.",
                image: "",
              },
              {
                heading: "Mezní rychlost",
                text: "Když padá parašutista, zrychluje. S rychlostí ale roste odpor vzduchu. V jednu chvíli se odpor vzduchu vyrovná tíhové síle. Parašutista přestane zrychlovat a padá konstantní 'mezní rychlostí' (cca 200 km/h bez padáku, 20 km/h s padákem).",
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
                question: "Odporová síla roste s rychlostí:",
                options: [
                  "Lineárně (přímo úměrně)",
                  "S druhou mocninou ($v^2$)",
                  "Nezávisí na rychlosti",
                  "Klesá",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c2_l5_t3",
                question: "Co znamená součinitel $C_x$?",
                options: [
                  "Rychlost tělesa",
                  "Aerodynamický tvar tělesa",
                  "Hustota vzduchu",
                  "Výkon motoru",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c2_l5_t4",
                question:
                  "Proč dešťová kapka nikoho nezabije, i když padá z mraků?",
                options: [
                  "Protože je měkká",
                  "Protože dosáhne mezní rychlosti a dál nezrychluje",
                  "Protože padá ve vakuu",
                  "Protože je lehká",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c2_l5_t5",
                question: "Kde se využívá velký odpor vzduchu?",
                options: ["Formule 1", "Padák", "Ponorka", "Rychlovlak"],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Kmitání a vlnění",
      lessons: ["Kmitavý pohyb", "Kyvadlo", "Mechanické vlnění", "Zvuk"],
    },
    {
      title: "Elektřina a magnetismus",
      lessons: [
        "Elektrické pole",
        "Magnetické pole",
        "Elektromagnetická indukce",
        "Střídavý proud",
      ],
    },
  ],
};
