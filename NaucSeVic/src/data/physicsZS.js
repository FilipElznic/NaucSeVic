export const physicsZS = {
  default: [
    {
      title: "Mechanika hmotného bodu",
      lessons: [
        {
          title: "Pohyb pod lupou: Kinematika",
          content: {
            sections: [
              {
                heading: "Hmotný bod a vztažná soustava",
                text: "Abychom mohli zkoumat pohyb, musíme si svět zjednodušit. Těleso nahradíme 'hmotným bodem' – bodem, který má hmotnost tělesa, ale nulové rozměry. Polohu tohoto bodu vždy určujeme vzhledem k něčemu jinému – k vztažné soustavě (např. k silnici, k Zemi, ke Slunci).",
                image: "placeholder-point-mass-reference-frame",
              },
              {
                heading: "Rychlost není jen číslo",
                text: "Rychlost ($v$) nám říká, jakou dráhu ($s$) těleso urazí za určitý čas ($t$). Průměrná rychlost je celková dráha dělená celkovým časem ($v = s/t$).\nOkamžitá rychlost je to, co vidíš na tachometru právě teď. Rychlost je vektor – má velikost (např. 50 km/h) a směr (např. na sever).",
                image: "placeholder-velocity-vector",
              },
              {
                heading: "Když rychlost není stálá: Zrychlení",
                text: "Pokud auto zrychluje, brzdí nebo zatáčí, mění se jeho rychlost. Veličina, která popisuje změnu rychlosti v čase, se jmenuje zrychlení ($a$).\nZákladní jednotkou je $m/s^2$ (metr za sekundu na druhou). Znamená to, o kolik m/s se změní rychlost každou sekundu.",
                image: "placeholder-acceleration-graph",
              },
            ],
            tasks: [
              {
                id: "ss_c1_l1_t1",
                question: "Jaká je základní jednotka rychlosti v soustavě SI?",
                options: [
                  "km/h (kilometr za hodinu)",
                  "m/s (metr za sekundu)",
                  "mph (míle za hodinu)",
                  "m/s² (metr za sekundu na druhou)",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c1_l1_t2",
                question:
                  "Auto ujelo 100 km za 2 hodiny. Jaká byla jeho průměrná rychlost?",
                options: ["200 km/h", "100 km/h", "50 km/h", "20 km/h"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c1_l1_t3",
                question:
                  "Co znamená, když má zrychlení zápornou hodnotu (v přímém směru)?",
                options: [
                  "Těleso couvá",
                  "Těleso zpomaluje (brzdí)",
                  "Těleso zrychluje",
                  "Těleso stojí",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c1_l1_t4",
                question: "Vzorec pro dráhu rovnoměrného pohybu je:",
                options: [
                  "$s = v \\cdot t$",
                  "$s = v / t$",
                  "$s = 1/2 \\cdot a \\cdot t^2$",
                  "$s = m \\cdot a$",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "ss_c1_l1_t5",
                question: "Jak převedeme rychlost z m/s na km/h?",
                options: [
                  "Vydělíme 3,6",
                  "Vynásobíme 3,6",
                  "Vynásobíme 1000",
                  "Vydělíme 100",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Síla a vektory",
          content: {
            sections: [
              {
                heading: "Skalár vs. Vektor",
                text: "Fyzikální veličiny dělíme na dva typy:\n1. Skalární: Jsou určeny jen číslem (jednotkou). Např. čas, hmotnost, teplota. (Nemají směr).\n2. Vektorové: Mají velikost i směr. Např. síla, rychlost, zrychlení. (Znázorňujeme je šipkou).",
                image: "placeholder-scalar-vs-vector",
              },
              {
                heading: "Skládání sil",
                text: "Když na těleso působí více sil najednou, můžeme je nahradit jednou výslednicí. Pokud jdou stejným směrem, sčítají se. Pokud jdou proti sobě, odčítají se. Pokud svírají úhel, skládáme je pomocí 'rovnoběžníku sil'.",
                image: "placeholder-force-addition",
              },
              {
                heading: "Rozklad síly",
                text: "Často potřebujeme sílu rozložit na složky. Například když táhneme sáňky šikmo nahoru, část síly táhne sáňky dopředu (pohybová složka) a část je nadlehčuje (kolmá složka).",
                image: "placeholder-force-decomposition",
              },
            ],
            tasks: [
              {
                id: "ss_c1_l2_t1",
                question: "Která z následujících veličin JE vektor?",
                options: ["Hmotnost", "Čas", "Síla", "Teplota"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c1_l2_t2",
                question:
                  "Působí-li síla 3 N doleva a 4 N doprava, jaká je výslednice?",
                options: ["7 N doprava", "1 N doprava", "1 N doleva", "12 N"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c1_l2_t3",
                question: "Jednotkou síly je:",
                options: ["Watt", "Joule", "Newton", "Pascal"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c1_l2_t4",
                question: "Graficky sčítáme dva různoběžné vektory pomocí:",
                options: [
                  "Pravidla trojčlenky",
                  "Doplnění na rovnoběžník",
                  "Násobení velikostí",
                  "Kružítka",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c1_l2_t5",
                question: "Když síly působí v rovnováze, jejich výslednice je:",
                options: [
                  "Nulová",
                  "Maximální",
                  "Rovná součtu velikostí",
                  "Rovná gravitační síle",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Newtonovy zákony",
          content: {
            sections: [
              {
                heading: "1. Zákon setrvačnosti",
                text: "Těleso setrvává v klidu nebo v rovnoměrném přímočarém pohybu, dokud není přinuceno vnější silou tento stav změnit. Jinými slovy: Věci se samy od sebe nerozjedou ani nezastaví (brzdí je tření).",
                image: "placeholder-newton-1st-law",
              },
              {
                heading: "2. Zákon síly (Zákon zrychlení)",
                text: "Tento zákon je slavná rovnice $F = m \\cdot a$. Říká, že zrychlení tělesa je přímo úměrné síle, která na něj působí, a nepřímo úměrné jeho hmotnosti. Čím těžší auto (větší $m$), tím větší sílu ($F$) motor potřebuje, aby ho rozjel (zrychlení $a$).",
                image: "placeholder-newton-2nd-law-formula",
              },
              {
                heading: "3. Zákon akce a reakce",
                text: "Každá akce vyvolává stejně velkou, ale opačně orientovanou reakci. Když bouchneš pěstí do stolu, stůl 'bouchne' stejně velkou silou do tvé pěsti (proto to bolí). Síly se nevyruší, protože každá působí na jiné těleso (ruka na stůl, stůl na ruku).",
                image: "placeholder-action-reaction",
              },
            ],
            tasks: [
              {
                id: "ss_c1_l3_t1",
                question:
                  "Který zákon vysvětluje, proč cestující v autobuse padají dopředu při brzdění?",
                options: [
                  "Zákon síly",
                  "Zákon setrvačnosti",
                  "Zákon akce a reakce",
                  "Gravitační zákon",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c1_l3_t2",
                question: "Jak zní vzorec pro 2. Newtonův zákon?",
                options: [
                  "$F = m / a$",
                  "$F = m \\cdot a$",
                  "$a = F \\cdot m$",
                  "$m = F \\cdot a$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c1_l3_t3",
                question:
                  "Když vystřelí dělo kouli dopředu, dělo cukne dozadu. To je příklad:",
                options: [
                  "1. Newtonova zákona",
                  "2. Newtonova zákona",
                  "3. Newtonova zákona",
                  "Archimédova zákona",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c1_l3_t4",
                question:
                  "Pokud na těleso o hmotnosti 2 kg působí síla 10 N, jaké má zrychlení?",
                options: [
                  "$5 m/s^2$",
                  "$20 m/s^2$",
                  "$0,2 m/s^2$",
                  "$12 m/s^2$",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "ss_c1_l3_t5",
                question: "Proč se akce a reakce navzájem nevyruší?",
                options: [
                  "Protože akce je silnější",
                  "Protože reakce přichází se zpožděním",
                  "Protože každá síla působí na jiné těleso",
                  "Protože působí ve stejném směru",
                ],
                correctAnswer: 2,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Práce, výkon a účinnost",
          content: {
            sections: [
              {
                heading: "Mechanická práce (W)",
                text: "Ve fyzice konáme práci ($W$) jen tehdy, když silou ($F$) přemísťujeme těleso po dráze ($s$). $W = F \\cdot s$. Pokud držíš těžkou činku nad hlavou a nehýbeš se, ve fyzikálním smyslu nekonáš práci (dráha je nulová), i když se potíš. Jednotkou je Joule ($J$).",
                image: "placeholder-work-physics-definition",
              },
              {
                heading: "Výkon (P)",
                text: "Výkon nám říká, jak rychle práci vykonáme. Je to práce dělená časem: $P = W / t$. Stejnou práci (vynesení cihel) uděláš rychleji s větším výkonem. Jednotkou je Watt ($W$). Pozor, neplést značku práce $W$ a jednotku výkonu $W$ (Watt).",
                image: "placeholder-power-formula",
              },
              {
                heading: "Účinnost",
                text: "Žádný stroj není dokonalý. Vždy musíme dodat více energie (příkon), než kolik získáme užitečné práce (výkon), protože část se ztratí (obvykle jako teplo třením). Účinnost $\\eta$ (eta) je poměr Výkon/Příkon. Je vždy menší než 1 (nebo menší než 100 %).",
                image: "placeholder-efficiency-diagram",
              },
            ],
            tasks: [
              {
                id: "ss_c1_l4_t1",
                question:
                  "Jakou práci vykonáme, když tlačíme silou 100 N po dráze 5 metrů?",
                options: ["20 J", "500 J", "105 J", "0 J"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c1_l4_t2",
                question: "Jednotka Joule (J) je stejná pro práci i pro:",
                options: ["Výkon", "Sílu", "Energii", "Rychlost"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c1_l4_t3",
                question: "Který stroj má 100% účinnost?",
                options: [
                  "Elektromotor",
                  "Parní stroj",
                  "Perpetuum mobile (neexistuje)",
                  "Kladka",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c1_l4_t4",
                question:
                  "Jaký výkon má motor, který vykoná práci 1000 J za 10 sekund?",
                options: ["100 W", "10 000 W", "10 W", "990 W"],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "ss_c1_l4_t5",
                question:
                  "Konám práci, když tlačím vší silou do zdi, ale zeď se ani nehne?",
                options: [
                  "Ano, hodně velkou",
                  "Ano, ale jen malou",
                  "Ne, protože dráha je nulová",
                  "Záleží na čase",
                ],
                correctAnswer: 2,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Energie a její zachování",
          content: {
            sections: [
              {
                heading: "Kinetická energie ($E_k$)",
                text: "Energie pohybu. Má ji každé těleso, které se hýbe. Závisí na hmotnosti a hlavně na rychlosti (ta je ve vzorci na druhou!). $E_k = \\frac{1}{2} m \\cdot v^2$. Proto je náraz v dvojnásobné rychlosti čtyřikrát ničivější.",
                image: "placeholder-kinetic-energy-car",
              },
              {
                heading: "Potenciální energie ($E_p$)",
                text: "Polohová energie. Má ji těleso, které je zvednuté v gravitačním poli. Je to 'nastřádaná' energie, která se může změnit v pohyb. $E_p = m \\cdot g \\cdot h$ (hmotnost $\\cdot$ gravitace $\\cdot$ výška).",
                image: "placeholder-potential-energy-rock",
              },
              {
                heading: "Zákon zachování mechanické energie (ZZME)",
                text: "V izolované soustavě (bez tření) se celková energie nemění, jen se přelévá z jedné formy do druhé. Když padá kámen, $E_p$ se zmenšuje a $E_k$ se zvětšuje. Součet $E = E_k + E_p$ zůstává konstantní.",
                image: "placeholder-conservation-pendulum",
              },
            ],
            tasks: [
              {
                id: "ss_c1_l5_t1",
                question: "Kterou energii má jablko visící na stromě?",
                options: [
                  "Kinetickou",
                  "Potenciální (polohovou)",
                  "Tepelnou",
                  "Žádnou",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c1_l5_t2",
                question:
                  "Co se stane s energií kuličky při volném pádu (zanedbáme odpor vzduchu)?",
                options: [
                  "Celková energie se zvětšuje",
                  "Potenciální se mění na kinetickou",
                  "Kinetická se mění na potenciální",
                  "Energie se ztrácí",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c1_l5_t3",
                question: "Vzorec pro kinetickou energii je:",
                options: [
                  "$E_k = m \\cdot g \\cdot h$",
                  "$E_k = m \\cdot v^2$",
                  "$E_k = \\frac{1}{2} m \\cdot v^2$",
                  "$E_k = F \\cdot s$",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c1_l5_t4",
                question:
                  "Pokud auto zrychlí z 50 km/h na 100 km/h (2x), jeho brzdná dráha bude:",
                options: ["2x delší", "4x delší", "Stejná", "8x delší"],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "ss_c1_l5_t5",
                question:
                  "Hodnota gravitačního zrychlení $g$ na Zemi je přibližně:",
                options: [
                  "$1 m/s^2$",
                  "$10 m/s^2$",
                  "$100 m/s^2$",
                  "$9,81 km/h$",
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
                image: "[Image of equilibrium types stable unstable neutral]",
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
                image: "[Image of hydraulic press principle]",
              },
              {
                heading: "Hydrostatický tlak",
                text: "Voda má hmotnost a tlačí sama na sebe. Čím hlouběji jsi, tím větší sloupec vody máš nad sebou. Tlak ($p_h$) závisí na hloubce ($h$) a hustotě kapaliny ($\\rho$).\n$$ p_h = h \\cdot \\rho \\cdot g $$",
                image: "",
              },
              {
                heading: "Archimédův zákon",
                text: "Těleso ponořené do kapaliny je nadlehčováno silou, která se rovná tíze kapaliny tělesem vytlačené. Proto lodě z oceli plavou – vytlačí obrovské množství vody, která je 'vynese' nahoru.",
                image: "[Image of Archimedes principle buoyancy]",
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
                image: "[Image of continuity equation pipe flow]",
              },
              {
                heading: "Bernoulliho rovnice",
                text: "Zákon zachování energie pro tekutiny. Říká překvapivou věc: Tam, kde kapalina nebo plyn proudí rychleji, je NIŽŠÍ tlak. \nSoučet tlaku a kinetické energie toku je konstantní: $$ \\frac{1}{2}\\rho v^2 + p = konst. $$",
                image: "[Image of Bernoulli principle venturi]",
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
      title: "Gravitační pole",
      lessons: [
        {
          title: "Newtonův gravitační zákon",
          content: {
            sections: [
              {
                heading: "Všechno se přitahuje",
                text: "Isaac Newton přišel na to, že gravitace není jen síla, která drží nás na Zemi. Je to univerzální síla, kterou na sebe působí *jakákoliv* dvě tělesa ve vesmíru. Ty přitahuješ Zemi stejně velkou silou, jako Země přitahuje tebe (zákon akce a reakce), jen s tebou to pohne víc.",
                image: "",
              },
              {
                heading: "Vzorec vesmíru",
                text: "Velikost gravitační síly $F_g$ závisí na hmotnostech těles ($m_1, m_2$) a jejich vzdálenosti ($r$).\n$$ F_g = G \\frac{m_1 m_2}{r^2} $$\n$G$ je gravitační konstanta (velmi malé číslo). Důležité je $r^2$ ve jmenovateli: Když vzdálenost zdvojnásobíš, síla klesne čtyřnásobně!",
                image: "",
              },
              {
                heading: "Centrální pole",
                text: "Gravitační pole kolem planety je centrální. To znamená, že síla vždy směřuje do středu tělesa. Čím dál jsi od středu, tím je pole slabší. Intenzitu gravitačního pole značíme $K$ (nebo často splývá s $g$).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c3_l1_t1",
                question:
                  "Co se stane s gravitační silou, když se vzdálenost mezi tělesy zvětší 3x?",
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
                question: "Gravitační síla působí:",
                options: [
                  "Jen na planetách",
                  "Jen mezi magnetickými tělesy",
                  "Mezi všemi tělesy s hmotností",
                  "Jen ve vakuu",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c3_l1_t3",
                question: "Kdo formuloval gravitační zákon?",
                options: [
                  "Albert Einstein",
                  "Isaac Newton",
                  "Johannes Kepler",
                  "Galileo Galilei",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c3_l1_t4",
                question: "Přitahuje jablko Zemi?",
                options: [
                  "Ne, jen Země přitahuje jablko",
                  "Ano, ale mnohem menší silou",
                  "Ano, stejně velkou silou (akce a reakce)",
                  "Ano, ale jen když visí na stromě",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c3_l1_t5",
                question: "Co ve vzorci reprezentuje $G$?",
                options: [
                  "Gravitační zrychlení Země",
                  "Hmotnost Slunce",
                  "Univerzální gravitační konstantu",
                  "Gram",
                ],
                correctAnswer: 2,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Gravitační vs. Tíhová síla",
          content: {
            sections: [
              {
                heading: "Není to totéž",
                text: "Pozor na pojmy! **Gravitační síla ($F_g$)** je čistá přitažlivost hmot. Ale Země se točí! Na všechna tělesa působí ještě **odstředivá síla** (směrem od osy otáčení). Výslednici těchto dvou sil říkáme **Tíhová síla ($F_G$)**.",
                image: "",
              },
              {
                heading: "Tíhové zrychlení (g)",
                text: "Tíhová síla uděluje tělesům tíhové zrychlení $g$. Jeho průměrná hodnota je $9,81 m/s^2$. Není ale všude stejné. Na pólech je $g$ největší (Země je tam zploštělá a nepůsobí tam odstředivá síla), na rovníku je $g$ nejmenší.",
                image: "",
              },
              {
                heading: "Tíha (G)",
                text: "Tíha je síla, kterou těleso tlačí na podložku nebo táhne závěs. Když stojíš v klidu, tíha se rovná tíhové síle. Ale když jsi ve výtahu, který zrychluje nahoru, tvá tíha (tlak na podlahu) se zvětší (přetížení).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c3_l2_t1",
                question: "Průměrná hodnota tíhového zrychlení na Zemi je:",
                options: [
                  "$100 m/s^2$",
                  "$9,81 m/s^2$",
                  "$1,62 m/s^2$",
                  "$6,67 m/s^2$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c3_l2_t2",
                question:
                  "Kde na Zemi budeš vážit nejméně (kde je nejmenší $g$)?",
                options: [
                  "Na severním pólu",
                  "Na jižním pólu",
                  "Na rovníku",
                  "V Praze",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c3_l2_t3",
                question: "Tíhová síla vzniká složením:",
                options: [
                  "Gravitační a magnetické síly",
                  "Gravitační a odstředivé síly",
                  "Elektrické a třecí síly",
                  "Pouze gravitační síly",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c3_l2_t4",
                question: "Jaká je tvá hmotnost na Měsíci ve srovnání se Zemí?",
                options: [
                  "Šestinová",
                  "Nulová",
                  "Stejná (hmotnost se nemění)",
                  "Dvojnásobná",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c3_l2_t5",
                question: "Jednotkou tíhy (síly) je:",
                options: [
                  "Kilogram (kg)",
                  "Newton (N)",
                  "Metr (m)",
                  "Sekunda (s)",
                ],
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
                text: "Když hodíš kámen šikmo, koná dva pohyby zároveň:\n1. Ve vodorovném směru letí rovnoměrně (pokud zanedbáme odpor vzduchu), setrvačností.\n2. Ve svislém směru padá volným pádem (zrychleně).\nVýsledkem složení je trajektorie ve tvaru paraboly.",
                image: "[Image of projectile motion components]",
              },
              {
                heading: "Volný pád",
                text: "Zvláštní případ pohybu, kdy těleso pustíme z klidu. Rychlost roste každou sekundu o $g$ ($v = g \\cdot t$). Dráha roste s druhou mocninou času ($s = 1/2 g t^2$). Zajímavost: Ve vakuu padá pírko i kladivo stejně rychle (nezávisí na hmotnosti).",
                image: "",
              },
              {
                heading: "Vodorovný vrh",
                text: "Hodíš míček ze stolu vodorovně. Svisle padá dolů, vodorovně si drží rychlost. Dopadne dál, čím větší byla počáteční rychlost, ale na zem dopadne za *stejný* čas, jako kdybys ho jen upustil z ruky.",
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
                question:
                  "Na čem nezávisí rychlost dopadu při volném pádu ve vakuu?",
                options: [
                  "Na výšce",
                  "Na gravitačním zrychlení",
                  "Na hmotnosti tělesa",
                  "Na čase pádu",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c3_l3_t3",
                question:
                  "Vystřelím kulku vodorovně a zároveň pustím druhou z ruky na zem. Která dopadne dřív?",
                options: [
                  "Ta z ruky",
                  "Ta vystřelená",
                  "Dopadnou současně",
                  "Záleží na větru",
                ],
                correctAnswer: 2,
                xp: 25,
              },
              {
                id: "ss_c3_l3_t4",
                question:
                  "Pod jakým úhlem musím hodit oštěp, aby doletěl co nejdál (ve vakuu)?",
                options: ["90°", "0°", "45°", "30°"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c3_l3_t5",
                question:
                  "Jak se mění vodorovná rychlost při vodorovném vrhu (bez odporu vzduchu)?",
                options: [
                  "Zvyšuje se",
                  "Snižuje se",
                  "Je konstantní (nemění se)",
                  "Klesá k nule",
                ],
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
                text: "Planety neobíhají po kružnicích, ale po elipsách. Slunce není ve středu, ale v jednom z ohnisek. Proto se vzdálenost Země od Slunce během roku mění (nejblíže, v přísluní, jsme v lednu!).",
                image: "",
              },
              {
                heading: "2. Zákon: Plochy",
                text: "Planety se nepohybují stálou rychlostí. Čím blíže jsou ke Slunci (v přísluní), tím letí rychleji. Čím jsou dál (v odsluní), tím letí pomaleji. Přesněji: Spojnice planety a Slunce opíše za stejný čas stejnou plochu.",
                image: "",
              },
              {
                heading: "3. Zákon: Doba oběhu",
                text: "Tento zákon dává do poměru dobu oběhu ($T$) a vzdálenost od Slunce ($a$). Platí $\\frac{T^2}{a^3} = konst$. Jednoduše: Čím dál je planeta od Slunce, tím pomaleji se 'vleče' a tím déle jí trvá jeden rok.",
                image: "[Image of Kepler's third law formula]",
              },
            ],
            tasks: [
              {
                id: "ss_c3_l4_t1",
                question: "V jakém bodě své dráhy je Země nejrychlejší?",
                options: [
                  "V odsluní (nejdál od Slunce)",
                  "V přísluní (nejblíže Slunci)",
                  "Všude stejně",
                  "V den rovnodennosti",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c3_l4_t2",
                question: "Planety obíhají po:",
                options: ["Kružnicích", "Elipsách", "Parabolách", "Přímkách"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c3_l4_t3",
                question: "Kde se nachází Slunce vzhledem k dráze planety?",
                options: [
                  "Přesně ve středu elipsy",
                  "V jednom z ohnisek elipsy",
                  "Obíhá kolem planety",
                  "Vně elipsy",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c3_l4_t4",
                question:
                  "Planeta Jupiter je mnohem dál než Země. Její rok bude:",
                options: [
                  "Mnohem kratší než náš",
                  "Mnohem delší než náš",
                  "Stejně dlouhý",
                  "Závisí na rotaci Jupitera",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c3_l4_t5",
                question: "Keplerovy zákony platí pro:",
                options: [
                  "Jen pro planety Sluneční soustavy",
                  "Jen pro Měsíc",
                  "Obecně pro tělesa v gravitačním poli (i družice)",
                  "Jen pro komety",
                ],
                correctAnswer: 2,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Kosmonautika a družice",
          content: {
            sections: [
              {
                heading: "1. Kosmická rychlost (Kruhová)",
                text: "Představ si, že hodíš kámen tak rychle, že 'přeletí horizont'. Země se pod ním zakulatí dřív, než stačí dopadnout. Kámen začne Zemi obíhat. Tato rychlost je pro Zemi cca $7,9 km/s$. Těleso se stane družicí.",
                image: "",
              },
              {
                heading: "2. Kosmická rychlost (Úniková)",
                text: "Pokud zrychlíme na cca $11,2 km/s$, gravitace Země už nás neudrží. Dráha se změní z kružnice na parabolu a těleso navždy opustí Zemi (stane se oběžnicí Slunce). Tuto rychlost potřebují sondy letící k Marsu.",
                image: "",
              },
              {
                heading: "Stav beztíže",
                text: "Není to stav 'bez gravitace'! Gravitace na ISS je skoro stejná jako na Zemi. Kosmonauti ale 'padají' volným pádem kolem Země. Protože padá stanice i oni stejnou rychlostí, vznášejí se vůči stěnám. Nemají oporu, proto necítí svou tíhu.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c3_l5_t1",
                question:
                  "Jaká je přibližně 1. kosmická rychlost (pro nízkou orbitu Země)?",
                options: ["300 km/h", "7,9 km/s", "11,2 km/s", "300 000 km/s"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c3_l5_t2",
                question: "Proč je kosmonaut na orbitě ve stavu beztíže?",
                options: [
                  "Protože tam není gravitace",
                  "Protože je ve vakuu",
                  "Protože 'padá' volným pádem spolu se stanicí",
                  "Protože má těžké boty",
                ],
                correctAnswer: 2,
                xp: 25,
              },
              {
                id: "ss_c3_l5_t3",
                question: "Co je geostacionární družice?",
                options: [
                  "Družice, která stojí na místě nad jedním bodem rovníku",
                  "Družice, která létá přes póly",
                  "Družice, která fotí Zemi zblízka",
                  "Družice letící k Marsu",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "ss_c3_l5_t4",
                question:
                  "Kdyby Země neměla gravitaci, co by dělal kámen hozený vodorovně?",
                options: [
                  "Padal by dolů",
                  "Letěl by rovnoměrně přímočaře do vesmíru",
                  "Zastavil by se",
                  "Kroužil by",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c3_l5_t5",
                question:
                  "Co se stane, když družice zpomalí pod 1. kosmickou rychlost?",
                options: [
                  "Odletí do vesmíru",
                  "Začne klesat a shoří v atmosféře (nebo dopadne)",
                  "Zastaví se",
                  "Nic, jen bude pomalejší",
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
      title: "Molekulová fyzika a termika",
      lessons: [
        {
          title: "Kinetická teorie látek",
          content: {
            sections: [
              {
                heading: "Všechno se hýbe",
                text: "Základní myšlenka: Všechna tělesa se skládají z částic (atomů, molekul), které jsou v neustálém, neuspořádaném pohybu. Důkazem je **Brownův pohyb** – když se podíváš mikroskopem na pylové zrnko ve vodě, trhavě se pohybuje, protože do něj neustále 'kopou' molekuly vody.",
                image: "",
              },
              {
                heading: "Co je to teplota?",
                text: "Teplota není nic jiného než míra průměrné kinetické energie částic. \n- Vyšší teplota = částice kmitají a létají rychleji.\n- Nižší teplota = částice jsou línější.\nPocit 'horka' je jen předávání této energie nárazem rychlých částic do tvé kůže.",
                image: "",
              },
              {
                heading: "Kelvin a absolutní nula",
                text: "Celsiova stupnice je fajn pro vodu (0 = led, 100 = var), ale ve fyzice používáme **Kelviny ($K$)**. \n$0 K$ (Absolutní nula) je teoretický stav, kdy by se pohyb částic zcela zastavil. Je to -273,15 °C. Nižší teplota neexistuje. Převod: $T [K] = t [°C] + 273,15$.",
                image: "[Image of Kelvin vs Celsius scale]",
              },
            ],
            tasks: [
              {
                id: "ss_c4_l1_t1",
                question: "Co je příčinou Brownova pohybu?",
                options: [
                  "Životní síla v pylových zrnech",
                  "Náhodné nárazy molekul okolního prostředí",
                  "Proudění vzduchu v místnosti",
                  "Gravitace",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c4_l1_t2",
                question: "Kolik Kelvinů je 20 °C (pokojová teplota)?",
                options: ["293 K", "253 K", "20 K", "0 K"],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "ss_c4_l1_t3",
                question: "Co se děje s částicemi při ochlazování plynu?",
                options: [
                  "Zmenšují se",
                  "Zpomalují se",
                  "Zrychlují se",
                  "Shlukují se do kostek",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c4_l1_t4",
                question: "Lze dosáhnout teploty -300 °C?",
                options: [
                  "Ano, v laboratoři",
                  "Ano, ve vesmíru",
                  "Ne, absolutní nula je cca -273 °C",
                  "Ano, ale jen u hélia",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c4_l1_t5",
                question: "Kinetická teorie říká, že pohyb molekul je:",
                options: [
                  "Uspořádaný a předvídatelný",
                  "Neustálý a neuspořádaný (chaotický)",
                  "Dočasný (časem ustane)",
                  "Závislý na barvě látky",
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
                heading: "Model ideálního plynu",
                text: "Aby se nám lépe počítalo, zavedli jsme 'ideální plyn'. Předpokládáme, že:\n1. Částice jsou jen hmotné body (nemají objem).\n2. Nepůsobí na sebe silami (jen se pružně srážejí).\nSkutečné plyny se tak chovají při nízkém tlaku a vysoké teplotě.",
                image: "",
              },
              {
                heading: "Stavová rovnice",
                text: "Svatý grál termiky. Popisuje vztah mezi tlakem ($p$), objemem ($V$) a teplotou ($T$):\n$$ p cdot V = n cdot R cdot T $$\nKde $n$ je látkové množství (v molech) a $R$ je plynová konstanta. Říká nám, že když plyn zahřejeme (zvětšíme $T$) v pevné nádobě, stoupne tlak ($p$).",
                image: "",
              },
              {
                heading: "Děje s ideálním plynem",
                text: "Co když držíme jednu veličinu stálou?\n- **Izotermický děj ($T=konst$):** Stlačím plyn $\\rightarrow$ tlak stoupne (Boyleův zákon).\n- **Izobarický děj ($p=konst$):** Zahřeju plyn $\\rightarrow$ objem se zvětší (nafoukne se).\n- **Izochorický děj ($V=konst$):** Zahřeju plyn v zavřené láhvi $\\rightarrow$ tlak stoupne (nebezpečí výbuchu).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c4_l2_t1",
                question:
                  "Pokud v uzavřené nádobě (stálý objem) zahřeji plyn, co se stane s tlakem?",
                options: ["Klesne", "Stoupne", "Nezmění se", "Plyn zkapalní"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c4_l2_t2",
                question: "Stavová rovnice má tvar:",
                options: [
                  "$p / V = R \\cdot T$",
                  "$p \\cdot V = n \\cdot R \\cdot T$",
                  "$p \\cdot T = V \\cdot R$",
                  "$E = m \\cdot c^2$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c4_l2_t3",
                question: "Co je to 'izobarický děj'?",
                options: [
                  "Děj při stálé teplotě",
                  "Děj při stálém objemu",
                  "Děj při stálém tlaku",
                  "Děj bez výměny tepla",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c4_l2_t4",
                question: "Jednotkou látkového množství ($n$) je:",
                options: ["Kilogram", "Mol", "Pascal", "Joule"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c4_l2_t5",
                question: "Proč sprej nepatří do ohně?",
                options: [
                  "Protože plyn by zmrzl",
                  "Protože při izochorickém ději s rostoucí teplotou prudce roste tlak (výbuch)",
                  "Protože plechovka se roztaví a plyn vyteče",
                  "Je to mýtus, nic se nestane",
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
                text: "Každé těleso má v sobě skrytou energii (pohyb a vazby molekul). Říkáme jí vnitřní energie $U$. Můžeme ji změnit dvěma způsoby:\n1. Konáním práce ($W$) - např. stlačením pístu nebo třením.\n2. Tepelnou výměnou ($Q$) - ohřátím nebo ochlazením.",
                image: "",
              },
              {
                heading: "Zákon zachování energie",
                text: "První zákon termodynamiky říká: Změna vnitřní energie se rovná součtu přijatého tepla a vykonané práce.\n$$ \\Delta U = Q + W $$\nEnergii nelze vyrobit ani zničit, jen přeměnit.",
                image: "",
              },
              {
                heading: "Adiabatický děj",
                text: "Speciální případ, kdy proběhne děj tak rychle (nebo v izolaci), že se nestihne vyměnit žádné teplo ($Q=0$).\nKdyž rychle stlačíš pumpičku na kolo, zahřeje se. Proč? Protože jsi konal práci ($W$), která se celá přeměnila na vnitřní energii (teplotu).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c4_l3_t1",
                question: "Jak zní 1. termodynamický zákon?",
                options: [
                  "Těleso setrvává v klidu",
                  "$\\Delta U = Q + W$ (Změna vnitřní energie = teplo + práce)",
                  "Teplo přechází z chladnějšího na teplejší těleso",
                  "$p \\cdot V = konst.$",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c4_l3_t2",
                question:
                  "Když třu dlaně o sebe a zahřívají se, měním vnitřní energii:",
                options: [
                  "Tepelnou výměnou",
                  "Konáním práce",
                  "Chemickou reakcí",
                  "Jadernou reakcí",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c4_l3_t3",
                question: "Při adiabatickém ději platí:",
                options: [
                  "Teplota je konstantní",
                  "Tlak je konstantní",
                  "Nedochází k výměně tepla ($Q=0$)",
                  "Objem se nemění",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c4_l3_t4",
                question:
                  "Pokud plyn vykoná práci (třeba odtlačí píst) a nedostane teplo, co se stane s jeho teplotou?",
                options: [
                  "Klesne (spotřebuje vnitřní energii)",
                  "Stoupne",
                  "Nezmění se",
                  "Plyn zmrzne na absolutní nulu",
                ],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "ss_c4_l3_t5",
                question: "Vnitřní energie ideálního plynu závisí hlavně na:",
                options: [
                  "Barvě plynu",
                  "Teplotě",
                  "Tvaru nádoby",
                  "Poloze nádoby",
                ],
                correctAnswer: 1,
                xp: 15,
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
                text: "Aby motor běžel pořád dokola, musí se plyn po expanzi (kdy koná práci) vrátit do původního stavu. Graficky to v p-V diagramu vypadá jako smyčka. Plocha uvnitř smyčky představuje vykonanou práci.",
                image: "",
              },
              {
                heading: "Druhý termodynamický zákon",
                text: "Příroda má směr. Teplo **vždy** samovolně přechází z teplejšího tělesa na chladnější, nikdy ne naopak. Nelze sestrojit motor, který by veškeré teplo přeměnil na práci (Perpetuum mobile 2. druhu neexistuje). Vždy musíme část tepla 'vyhodit' do chladiče.",
                image: "",
              },
              {
                heading: "Účinnost motoru",
                text: "Účinnost ($\\eta$) nám říká, kolik energie jsme využili. Je to podíl vykonané práce ($W$) a dodaného tepla ($Q_1$).\n$$ \\eta = \\frac{W}{Q_1} = 1 - \\frac{Q_2}{Q_1} $$\nÚčinnost je vždy menší než 100 %. Moderní benzínové motory mají účinnost jen kolem 25-30 %!",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c4_l4_t1",
                question: "Může mít tepelný motor účinnost 100 %?",
                options: [
                  "Ano, pokud je dokonale promazaný",
                  "Ano, v budoucnosti",
                  "Ne, zakazuje to 2. termodynamický zákon",
                  "Ano, elektromotory ji mají",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c4_l4_t2",
                question: "Jakým směrem přechází samovolně teplo?",
                options: [
                  "Z chladnějšího na teplejší",
                  "Z teplejšího na chladnější",
                  "Náhodně",
                  "Závisí na tlaku",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c4_l4_t3",
                question: "Co musí mít každý tepelný motor?",
                options: [
                  "Jen ohřívač",
                  "Jen chladič",
                  "Ohřívač a chladič (zdroj tepla a místo kam teplo odvádět)",
                  "Baterii",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c4_l4_t4",
                question: "Co je to Perpetuum mobile 2. druhu?",
                options: [
                  "Stroj, který vyrábí energii z ničeho",
                  "Motor, který by přeměnil veškeré teplo na práci bez chladiče",
                  "Auto na vodu",
                  "Věčný pohyb planet",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c4_l4_t5",
                question:
                  "Čtyřdobý spalovací motor má fáze: Sání, Stlačení, Výbuch (Expanze) a...",
                options: ["Mražení", "Výfuk", "Vstřikování", "Rotace"],
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
                heading: "Tání a tuhnutí",
                text: "Když pevnou látku zahříváme, částice kmitají tak silně, až roztrhají krystalovou mřížku $\\rightarrow$ látka taje. Zajímavost: Během tání se teplota nemění! Veškeré dodané teplo (skupenské teplo tání) se spotřebuje na rozbíjení vazeb, ne na zvyšování teploty.",
                image: "",
              },
              {
                heading: "Vypařování vs. Var",
                text: "Vypařování probíhá na povrchu kapaliny při jakékoliv teplotě. Var je bouřlivý děj v celém objemu, který nastane při 'teplotě varu'. Teplota varu závisí na tlaku – na horách (nižší tlak) se voda vaří třeba už při 90 °C (proto se tam brambory vaří špatně).",
                image: "[Image of boiling vs evaporation diagram]",
              },
              {
                heading: "Sublimace",
                text: "Některé látky umí přeskočit kapalné skupenství a mění se z pevné látky rovnou na plyn. Příkladem je suchý led (CO2) nebo jód. Opačný proces (plyn $\\rightarrow$ pevná látka) se nazývá desublimace (vznik námrazy).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c4_l5_t1",
                question:
                  "Co se děje s teplotou směsi vody a ledu, když ji zahříváme a led taje?",
                options: [
                  "Teplota rychle roste",
                  "Teplota klesá",
                  "Teplota zůstává konstantní (0 °C), dokud všechen led neroztaje",
                  "Teplota kolísá",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c4_l5_t2",
                question:
                  "Proč pára o teplotě 100 °C opaří víc než voda o teplotě 100 °C?",
                options: [
                  "Protože pára je rychlejší",
                  "Protože pára při kondenzaci na kůži odevzdá obrovské skupenské teplo",
                  "Je to stejné",
                  "Protože pára je pod tlakem",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "ss_c4_l5_t3",
                question: "Jak se nazývá změna z pevné látky přímo na plyn?",
                options: ["Kondenzace", "Tuhnutí", "Sublimace", "Var"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c4_l5_t4",
                question:
                  "Jak ovlivní vyšší tlak (např. v 'papiňáku') teplotu varu vody?",
                options: [
                  "Voda se vaří při nižší teplotě (< 100 °C)",
                  "Voda se vaří při vyšší teplotě (> 100 °C)",
                  "Nemá to vliv",
                  "Voda se vypaří okamžitě",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c4_l5_t5",
                question: "Anomálie vody znamená, že:",
                options: [
                  "Voda je nejhustší při 4 °C (proto led plave)",
                  "Voda nevede proud",
                  "Voda se nedá stlačit",
                  "Voda má modrou barvu",
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
          title: "Svět v rytmu: Kmitavý pohyb",
          content: {
            sections: [
              {
                heading: "Oscilátor a perioda",
                text: "Kmitání je pohyb, který se pravidelně opakuje. Zařízení, které kmitá, je oscilátor (např. kyvadlo, pružina, srdce). \n- **Perioda ($T$):** Čas jednoho kmitu (tam a zpět). Jednotka sekunda ($s$).\n- **Frekvence ($f$):** Počet kmitů za jednu sekundu. Jednotka Hertz ($Hz$).\nPlatí vztah: $$ f = \\frac{1}{T} $$",
                image: "",
              },
              {
                heading: "Harmonický pohyb",
                text: "Nejjednodušší kmitání je 'harmonické'. Jeho grafem je sinusoida. Důležitým parametrem je **amplituda ($y_m$)** – to je maximální výchylka z rovnovážné polohy (jak moc to 'lítá' do stran).",
                image: "",
              },
              {
                heading: "Kyvadlo vs. Pružina",
                text: "1. **Pružinový oscilátor:** Perioda závisí na hmotnosti závaží a tuhosti pružiny.\n2. **Matematické kyvadlo:** Perioda závisí JEN na délce provázku ($l$) a gravitaci ($g$). Na hmotnosti závaží nezáleží! (Galileův objev).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c5_l1_t1",
                question:
                  "Jaká je frekvence, pokud jeden kmit trvá 0,5 sekundy?",
                options: ["0,5 Hz", "2 Hz", "5 Hz", "1 Hz"],
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
                  "Změní se perioda houpačky (kyvadla), když si na ni sedne těžší člověk?",
                options: [
                  "Ano, zpomalí se",
                  "Ano, zrychlí se",
                  "Ne, na hmotnosti u kyvadla nezáleží",
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
                  "Délka pružiny",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c5_l1_t5",
                question: "Grafem harmonického kmitání v čase je:",
                options: ["Přímka", "Parabola", "Kružnice", "Sinusoida"],
                correctAnswer: 3,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Rezonance a tlumení",
          content: {
            sections: [
              {
                heading: "Tlumené kmitání",
                text: "V reálném světě kmitání po čase ustane. Proč? Protože energie se mění na teplo kvůli odporu vzduchu a tření. Amplituda se postupně zmenšuje, až je nulová. Aby se houpačka nezastavila, musíme jí dodávat energii (šťouchat).",
                image: "[Image of damped oscillation graph]",
              },
              {
                heading: "Nucené kmitání",
                text: "To je situace, kdy na oscilátor působíme vnější periodickou silou (např. motor roztřese auto). Oscilátor pak nekmitá svou vlastní frekvencí, ale frekvencí té vnější síly.",
                image: "",
              },
              {
                heading: "Rezonance (Když se trefíš)",
                text: "Pokud frekvence vnější síly přesně trefí **vlastní frekvenci** oscilátoru, nastane rezonance. Amplituda prudce vzroste. \nPříklady: \n- Rozhoupání dítěte (šťoucháš přesně v rytmu).\n- Prasknutí skleničky zvukem (opera).\n- Zřícení mostu Tacoma Narrows (vítr foukal ve frekvenci kmitů mostu).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c5_l2_t1",
                question: "Proč se amplituda tlumeného kmitání zmenšuje?",
                options: [
                  "Protože se mění gravitace",
                  "Protože se energie ztrácí (tření, odpor prostředí)",
                  "Protože se zvyšuje frekvence",
                  "Protože pružina měkne",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c5_l2_t2",
                question: "Kdy nastává rezonance?",
                options: [
                  "Když je tření maximální",
                  "Když frekvence vnější síly odpovídá vlastní frekvenci oscilátoru",
                  "Když oscilátor zastavíme",
                  "Když do systému bouchneme náhodně",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c5_l2_t3",
                question: "Co se stane při rezonanci?",
                options: [
                  "Kmitání okamžitě ustane",
                  "Amplituda kmitů prudce vzroste",
                  "Změní se hmotnost tělesa",
                  "Frekvence klesne na nulu",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c5_l2_t4",
                question:
                  "Proč vojáci nesmí pochodovat po mostě stejným krokem?",
                options: [
                  "Aby se neunavili",
                  "Aby most nerozkmitali do rezonance a nezřítil se",
                  "Je to jen pověra",
                  "Aby nebyli moc hluční",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c5_l2_t5",
                question: "Příkladem užitečné rezonance je:",
                options: [
                  "Drnčení skel v autobuse",
                  "Mikrovlnná trouba (rozkmitala molekuly vody)",
                  "Zemětřesení",
                  "Vibrace volantu",
                ],
                correctAnswer: 1,
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
                heading: "Co je to vlnění?",
                text: "Vlnění vzniká, když se kmitání šíří prostorem (jako 'mexická vlna' na stadionu). Důležité: **Částice látky se nikam neposouvají**, jen kmitají na místě. To, co cestuje, je energie a tvar vlny.",
                image: "",
              },
              {
                heading: "Příčné vs. Podélné",
                text: "1. **Příčné vlnění:** Částice kmitají kolmo na směr šíření (nahoru-dolů). Např. vlna na hladině, struna kytary, světlo.\n2. **Podélné vlnění:** Částice kmitají ve směru šíření (zahušťování a zřeďování). Např. zvuk, pružina stlačená podélně.",
                image: "[Image of transverse vs longitudinal wave diagram]",
              },
              {
                heading: "Vlnová délka (Lambda)",
                text: "Vzdálenost dvou nejbližších bodů, které kmitají stejně (vzdálenost 'hřbetu ke hřbetu'). Značíme $\\lambda$ (lambda). Platí rovnice postupné vlny:\n$$ v = \\lambda \\cdot f $$\nRychlost šíření = vlnová délka krát frekvence.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c5_l3_t1",
                question: "Co se přenáší vlněním?",
                options: [
                  "Hmotnost (materiál)",
                  "Energie",
                  "Pouze vzduch",
                  "Nic",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c5_l3_t2",
                question: "Vlnová délka $\\lambda$ je:",
                options: [
                  "Výška vlny (amplituda)",
                  "Vzdálenost, kterou vlna urazí za jednu periodu (vzdálenost hřbetů)",
                  "Počet vln za sekundu",
                  "Rychlost zvuku",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c5_l3_t3",
                question: "Zvuk ve vzduchu je vlnění:",
                options: ["Příčné", "Podélné", "Elektromagnetické", "Stojaté"],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c5_l3_t4",
                question: "Vlna na hladině rybníka je příkladem vlnění:",
                options: [
                  "Příčného (hlavně)",
                  "Podélného",
                  "Zvukového",
                  "Statického",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "ss_c5_l3_t5",
                question:
                  "Pokud se frekvence zdvojnásobí a rychlost zůstane stejná, vlnová délka se:",
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
          title: "Když se vlny potkají (Interference)",
          content: {
            sections: [
              {
                heading: "Odraz vlnění",
                text: "Když vlna narazí na překážku, odrazí se. \n- Na pevném konci (přivázané lano) se odráží s opačnou fází (kopce se vrací jako dolík).\n- Na volném konci (bič) se vrací se stejnou fází.",
                image: "",
              },
              {
                heading: "Interference (Skládání)",
                text: "Když se potkají dvě vlny, 'neodrazí' se od sebe, ale projdou skrz sebe a jejich výchylky se sečtou.\n- **Konstruktivní interference:** Kopec potká kopec $\\rightarrow$ vznikne super-kopec (zesílení).\n- **Destruktivní interference:** Kopec potká dolík $\\rightarrow$ vyruší se (ticho/tma).",
                image: "[Image of constructive and destructive interference]",
              },
              {
                heading: "Stojaté vlnění",
                text: "Vzniká interferencí vlny jdoucí tam a vlny odražené zpět (např. na kytarové struně). Vlna nikam neběží, jen kmitá na místě. Má:\n- **Uzly:** Místa, která se ani nehnou.\n- **Kmitny:** Místa s maximální výchylkou.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c5_l4_t1",
                question:
                  "Co se stane, když se potkají dvě stejné vlny s 'kopcem' proti sobě?",
                options: [
                  "Odrazí se zpět",
                  "Vznikne dvojnásobný kopec (zesílení)",
                  "Vyruší se (nic se nestane)",
                  "Změní se frekvence",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c5_l4_t2",
                question:
                  "Místo na stojatém vlnění, které se nepohybuje, se nazývá:",
                options: ["Kmitna", "Uzel", "Amplituda", "Perioda"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c5_l4_t3",
                question: "Stojaté vlnění je principem fungování:",
                options: [
                  "Hudebních nástrojů (struny, píšťaly)",
                  "Mobilních telefonů",
                  "Žárovky",
                  "Brzd v autě",
                ],
                correctAnswer: 0,
                xp: 15,
              },
              {
                id: "ss_c5_l4_t4",
                question: "Princip superpozice říká, že:",
                options: [
                  "Vlny se při setkání sčítají",
                  "Vlny se od sebe odrážejí jako kulečníkové koule",
                  "Větší vlna požírá menší",
                  "Vlnění se šíří jen ve vakuu",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "ss_c5_l4_t5",
                question:
                  "Sluchátka s 'Noise Cancelling' (rušením hluku) využívají:",
                options: [
                  "Odraz zvuku",
                  "Destruktivní interferenci (vytvoří opačnou vlnu k hluku)",
                  "Vakuum",
                  "Rezonanci uší",
                ],
                correctAnswer: 1,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Akustika: Svět zvuků",
          content: {
            sections: [
              {
                heading: "Co je to zvuk?",
                text: "Zvuk je mechanické vlnění prostředí (ve vakuu se nešíří!). Ucho vnímá frekvence cca od 16 Hz do 20 000 Hz.\n- **Výška tónu:** Je dána frekvencí (více Hz = pisklavější).\n- **Hlasitost:** Je dána amplitudou (větší tlakové změny = řev).",
                image: "",
              },
              {
                heading: "Rychlost zvuku",
                text: "Závisí na prostředí a teplotě. Ve vzduchu při 20 °C je to cca **340 m/s** (cca 1200 km/h). Ve vodě je mnohem rychlejší (1500 m/s) a v oceli ještě rychlejší (5000 m/s). Proto indiáni poslouchali koleje, aby slyšeli vlak dřív.",
                image: "",
              },
              {
                heading: "Dopplerův jev",
                text: "Proč má sanitka jiný zvuk, když přijíždí (íííí) a když odjíždí (úúúú)?\nKdyž se zdroj zvuku blíží, vlny před sebou 'mačká' $\\rightarrow$ vyšší frekvence.\nKdyž se vzdaluje, vlny za sebou 'natahuje' $\\rightarrow$ nižší frekvence.",
                image: "[Image of doppler effect ambulance]",
              },
            ],
            tasks: [
              {
                id: "ss_c5_l5_t1",
                question: "Jaká je přibližná rychlost zvuku ve vzduchu?",
                options: ["300 000 km/s", "340 m/s", "100 km/h", "10 m/s"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c5_l5_t2",
                question: "Šíří se zvuk ve vakuu (ve vesmíru)?",
                options: [
                  "Ano, velmi rychle",
                  "Ano, ale pomalu",
                  "Ne, potřebuje látkové prostředí",
                  "Jen když je výbuch silný",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c5_l5_t3",
                question: "Co určuje výšku tónu?",
                options: ["Amplituda", "Frekvence", "Barva", "Rychlost šíření"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c5_l5_t4",
                question: "Ultrazvuk je zvuk s frekvencí:",
                options: [
                  "Nižší než 16 Hz",
                  "Vyšší než 20 000 Hz (slyší ho pes/netopýr)",
                  "Velmi hlasitý",
                  "Velmi pomalý",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c5_l5_t5",
                question:
                  "Když kolem tebe projede formule, slyšíš změnu zvuku z vysokého na hluboký. To je:",
                options: [
                  "Bernoulliho jev",
                  "Dopplerův jev",
                  "Pascalův zákon",
                  "Interference",
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
                heading: "Náboj a Coulombův zákon",
                text: "Zdrojem elektřiny je elektrický náboj ($Q$), jehož jednotkou je Coulomb ($C$). Existuje kladný (proton) a záporný (elektron). \nCoulombův zákon říká, že síla mezi dvěma náboji klesá se čtvercem vzdálenosti (podobně jako u gravitace):\n$$ F_e = k \\frac{|Q_1 Q_2|}{r^2} $$\nStejné náboje se odpuzují, opačné přitahují.",
                image: "",
              },
              {
                heading: "Intenzita elektrického pole (E)",
                text: "Kolem každého náboje je 'silová aura' – elektrické pole. Jeho sílu v daném místě popisuje intenzita $E = F / q$. Je to síla, která by působila na jednotkový náboj. Znázorňujeme ji siločarami (jdou od plusu k mínusu).",
                image:
                  "[Image of electric field lines positive negative charge]",
              },
              {
                heading: "Práce a napětí",
                text: "Když chceme posunout náboj proti směru siločar (třeba přitlačit dva plusy k sobě), konáme práci. Tato 'nastřádaná' energie na jednotku náboje se nazývá elektrický potenciál ($\\\\varphi$). Rozdíl potenciálů mezi dvěma body je **elektrické napětí ($U$)**. Jednotka Volt ($V$).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c6_l1_t1",
                question: "Co se stane, když k sobě přiblížíš dva elektrony?",
                options: [
                  "Přitahují se",
                  "Odpuzují se",
                  "Nic se nestane",
                  "Zničí se",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c6_l1_t2",
                question: "Jaká je jednotka elektrického náboje?",
                options: ["Volt", "Ampér", "Coulomb", "Watt"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "ss_c6_l1_t3",
                question: "Elektrické siločáry směřují:",
                options: [
                  "Od záporného náboje ke kladnému",
                  "Od kladného náboje k zápornému",
                  "Vždy svisle dolů",
                  "Kolem dokola",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c6_l1_t4",
                question:
                  "Když vzdálenost mezi náboji zmenšíme na polovinu, síla mezi nimi:",
                options: ["Vzroste 2x", "Klesne 2x", "Vzroste 4x", "Klesne 4x"],
                correctAnswer: 2,
                xp: 25,
              },
              {
                id: "ss_c6_l1_t5",
                question: "Napětí ($U$) je definováno jako:",
                options: [
                  "Rozdíl potenciálů",
                  "Součet nábojů",
                  "Rychlost elektronů",
                  "Odpor vodiče",
                ],
                correctAnswer: 0,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Kondenzátor a kapacita",
          content: {
            sections: [
              {
                heading: "Sklad energie",
                text: "Kondenzátor je součástka, která umí uchovat náboj (a tím i energii). Nejjednodušší deskový kondenzátor jsou dvě vodivé desky oddělené izolantem (dielektrikem). Když ho připojíš k baterii, jedna deska se nabije kladně, druhá záporně a vznikne mezi nimi silné elektrické pole.",
                image: "[Image of capacitor plate diagram dielectric]",
              },
              {
                heading: "Kapacita (C)",
                text: "Schopnost kondenzátoru pojmout náboj se nazývá kapacita. Jednotkou je Farad ($F$).\n$$ C = \\frac{Q}{U} $$\nKapacita závisí na ploše desek (větší je lepší) a vzdálenosti (blíže je lepší).",
                image: "",
              },
              {
                heading: "Využití",
                text: "Kondenzátory jsou všude. Blesk ve fotoaparátu (rychlé vybití energie), dotykové displeje (prst mění kapacitu), filtry v nabíječkách (vyhlazují napětí).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c6_l2_t1",
                question: "Jednotkou kapacity je:",
                options: ["Tesla", "Farad", "Henry", "Ohm"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c6_l2_t2",
                question: "Jak zvýším kapacitu deskového kondenzátoru?",
                options: [
                  "Oddálím desky od sebe",
                  "Zmenším plochu desek",
                  "Přiblížím desky k sobě (zmenším vzdálenost)",
                  "Odstraním izolant",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c6_l2_t3",
                question: "Co je mezi deskami kondenzátoru?",
                options: [
                  "Vodič",
                  "Izolant (dielektrikum)",
                  "Voda",
                  "Nic, musí se dotýkat",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c6_l2_t4",
                question: "K čemu slouží kondenzátor?",
                options: [
                  "K výrobě elektřiny",
                  "K uchování náboje a energie",
                  "Jako zesilovač zvuku",
                  "Jako zdroj tepla",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c6_l2_t5",
                question:
                  "Pokud na kondenzátor s kapacitou $C$ připojím dvojnásobné napětí, náboj na deskách bude:",
                options: [
                  "Poloviční",
                  "Dvojnásobný ($Q = C \\cdot U$)",
                  "Čtyřnásobný",
                  "Stejný",
                ],
                correctAnswer: 1,
                xp: 25,
              },
            ],
          },
        },
        {
          title: "Zákony obvodů (Ohm & Kirchhoff)",
          content: {
            sections: [
              {
                heading: "Ohmův zákon",
                text: "Základní zákon elektrotechniky. Proud ($I$) tekoucí vodičem je přímo úměrný napětí ($U$) a nepřímo úměrný odporu ($R$).\n$$ I = \\frac{U}{R} $$\nOdpor brání průchodu elektronů (narážejí do atomů mřížky a zahřívají vodič).",
                image: "[Image of Ohms law triangle]",
              },
              {
                heading: "1. Kirchhoffův zákon (O uzlech)",
                text: "Zákon zachování náboje: Co do křižovatky (uzlu) přiteče, musí i odtéct. Součet proudů v uzlu je nula.\n$$ I_1 + I_2 = I_3 + I_4 $$",
                image: "[Image of Kirchhoffs current law node]",
              },
              {
                heading: "2. Kirchhoffův zákon (O smyčkách)",
                text: "Zákon zachování energie: Když obejdeš jakoukoliv uzavřenou smyčku v obvodu, součet napětí na zdrojích se rovná součtu úbytků napětí na spotřebičích (odporech).",
                image: "[Image of Kirchhoffs voltage law loop]",
              },
            ],
            tasks: [
              {
                id: "ss_c6_l3_t1",
                question:
                  "Když zvýším odpor v obvodu (při stálém napětí), proud:",
                options: [
                  "Vzroste",
                  "Klesne",
                  "Zůstane stejný",
                  "Začne kmitat",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c6_l3_t2",
                question: "1. Kirchhoffův zákon říká, že:",
                options: [
                  "Součet napětí v uzlu je nula",
                  "Součet proudů v uzlu je nula (přítok = odtok)",
                  "Odpor je konstantní",
                  "Napětí předbíhá proud",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c6_l3_t3",
                question:
                  "Mám dva odpory 10 Ohmů zapojené sériově (za sebou). Celkový odpor je:",
                options: ["5 Ohmů", "10 Ohmů", "20 Ohmů", "100 Ohmů"],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "ss_c6_l3_t4",
                question:
                  "Jaké napětí je potřeba k protlačení 2 A přes odpor 5 Ohmů?",
                options: ["2,5 V", "10 V", "0,4 V", "7 V"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c6_l3_t5",
                question:
                  "Vodič se průchodem proudu zahřívá. Tomuto jevu říkáme:",
                options: [
                  "Jouleovo teplo",
                  "Coulombovo tření",
                  "Faradayův jev",
                  "Supravodivost",
                ],
                correctAnswer: 0,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Magnetická síla",
          content: {
            sections: [
              {
                heading: "Magnetické pole",
                text: "Kolem magnetů a (pozor!) kolem každého vodiče s proudem vzniká magnetické pole. Jeho siločáry jsou uzavřené kružnice. Sílu pole popisuje magnetická indukce $B$ (jednotka Tesla, $T$).",
                image: "",
              },
              {
                heading: "Ampérova síla (Fm)",
                text: "Když dáš vodič s proudem do magnetického pole, magnet na něj zatlačí silou. To je princip elektromotoru!\nVelikost síly: $$ F_m = B \\cdot I \\cdot l $$\nSměr určíme Flemingovým pravidlem levé ruky (prsty směr proudu, siločáry do dlaně, palec ukáže sílu).",
                image: "",
              },
              {
                heading: "Lorentzova síla",
                text: "Působí na volný náboj (elektron), který letí magnetickým polem. Síla ho stáčí na kruhovou dráhu. Využívá se to v urychlovačích částic (CERN) nebo v televizních obrazovkách (CRT).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "ss_c6_l4_t1",
                question: "Jednotkou magnetické indukce ($B$) je:",
                options: ["Weber", "Tesla", "Gauss", "Newton"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c6_l4_t2",
                question:
                  "Co se stane s vodičem pod proudem, když ho dáme mezi silné magnety?",
                options: [
                  "Vodič se zahřeje",
                  "Působí na něj síla, která ho chce vystřelit ven (nebo vtáhnout)",
                  "Vodič zmagnetuje natrvalo",
                  "Proud se zastaví",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c6_l4_t3",
                question: "K určení směru magnetické síly používáme:",
                options: [
                  "Pravidlo pravé ruky",
                  "Flemingovo pravidlo levé ruky",
                  "Pravidlo vývrtky",
                  "Pravidlo silnějšího",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c6_l4_t4",
                question: "Působí magnetické pole na stojící elektron?",
                options: [
                  "Ano, silně",
                  "Ne, Lorentzova síla působí jen na pohybující se náboj",
                  "Ano, ale jen v pátek",
                  "Záleží na hmotnosti",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "ss_c6_l4_t5",
                question: "Princip elektromotoru je založen na:",
                options: [
                  "Elektrostatické indukci",
                  "Interakci magnetického pole a vodiče s proudem",
                  "Chemické reakci",
                  "Tepelné roztažnosti",
                ],
                correctAnswer: 1,
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
                heading: "Faradayův objev",
                text: "Oersted zjistil, že elektřina dělá magnetismus. Faraday se ptal: Jde to naopak? Ano! Pokud se v cívce **mění** magnetické pole (hýbeme magnetem), vzniká v ní elektrické napětí. Tomu říkáme indukce. Na tomto principu fungují všechny elektrárny.",
                image: "",
              },
              {
                heading: "Lenzův zákon",
                text: "Příroda je konzervativní. Indukovaný proud má vždy takový směr, aby svým magnetickým polem bránil změně, která ho vyvolala. \nKdyž strkáš magnet do cívky, cívka ho 'tlačí' ven. Když ho vytahuješ, 'tahá' ho zpět. (Musíš konat mechanickou práci, aby vznikla elektřina).",
                image: "[Image of Lenz law diagram]",
              },
              {
                heading: "Transformátor",
                text: "Zařízení, které mění velikost střídavého napětí. Funguje díky indukci mezi dvěma cívkami na společném jádře. Kolikrát více závitů má druhá cívka, tolikrát větší napětí z ní leze (ale proud je menší, energie se nezjevuje z ničeho).",
                image: "[Image of transformer schematic coils]",
              },
            ],
            tasks: [
              {
                id: "ss_c6_l5_t1",
                question:
                  "Aby se v cívce indukovalo napětí, musí být magnetické pole:",
                options: [
                  "Velmi silné",
                  "Konstantní (neměnné)",
                  "Proměnné (musí se měnit v čase)",
                  "Kolmé k Zemi",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "ss_c6_l5_t2",
                question: "Lenzův zákon říká, že indukovaný proud:",
                options: [
                  "Zesiluje příčinu svého vzniku",
                  "Působí proti změně, která ho vyvolala",
                  "Teče vždy doprava",
                  "Je nekonečný",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "ss_c6_l5_t3",
                question: "Kde se využívá elektromagnetická indukce?",
                options: [
                  "V baterii",
                  "V generátoru v elektrárně",
                  "V žárovce",
                  "V rezistoru",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "ss_c6_l5_t4",
                question: "Transformátor funguje pouze na:",
                options: [
                  "Stejnosměrný proud",
                  "Střídavý proud (měnící se pole)",
                  "Statickou elektřinu",
                  "Vysoké teploty",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "ss_c6_l5_t5",
                question:
                  "Pokud má sekundární cívka transformátoru 10x více závitů než primární, výstupní napětí bude:",
                options: ["10x menší", "Stejné", "10x větší", "Nulové"],
                correctAnswer: 2,
                xp: 20,
              },
            ],
          },
        },
      ],
    },
    {
      title: "Elektřina a magnetismus ",
      lessons: [
        {
          title: "Elektrování těles: Proč dostáváme rány?",
          content: {
            sections: [
              {
                heading: "Kouzlo s balónkem",
                text: "Zkoušel jsi někdy třít nafouknutý balónek o vlasy? Vlasy se k němu přilepí a stojí jako hřebíky. To není magie, to je elektrický náboj! Třením se přenáší maličké částice (elektrony). Těleso se nabije.",
                image: "",
              },
              {
                heading: "Plus a Mínus",
                text: "Existují dva druhy náboje: kladný (+) a záporný (-).\n- **Stejné se odpuzují** (plus a plus se nemají rádi).\n- **Opačné se přitahují** (plus a mínus chtějí být spolu).\nProto ti svetr při svlékání praská – přeskakují tam malé jiskry.",
                image: "",
              },
              {
                heading: "Blesk: Obří jiskra",
                text: "V bouřkovém mraku se o sebe třou krystalky ledu a vody. Mrak se nabije jako obrovská baterie. Když je napětí moc velké, přeskočí k zemi obří jiskra – blesk. Hrom je jen zvuk té rány.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "zs_el_l1_t1",
                question:
                  "Co se stane, když k sobě přiblížíš dva kladně nabité balónky?",
                options: [
                  "Přitáhnou se",
                  "Odstrčí se (odpuzují se)",
                  "Prasknou",
                  "Nic se nestane",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "zs_el_l1_t2",
                question: "Blesk je:",
                options: [
                  "Oheň padající z nebe",
                  "Elektrický výboj (jiskra)",
                  "Laserový paprsek",
                  "Padající hvězda",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "zs_el_l1_t3",
                question: "Jak vznikne statická elektřina na pravítku?",
                options: [
                  "Když ho poliješ vodou",
                  "Když ho třeš třeba o suchý hadřík nebo vlasy",
                  "Když ho dáš do lednice",
                  "Když na něj svítíš",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "zs_el_l1_t4",
                question: "Opačné náboje (+ a -) se:",
                options: [
                  "Přitahují",
                  "Odpuzují",
                  "Nezajímají",
                  "Mění na vodu",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "zs_el_l1_t5",
                question: "Proč je nebezpečné být v bouřce na poli?",
                options: [
                  "Můžeš zmoknout",
                  "Jsi nejvyšší bod v okolí a může do tebe uhodit blesk",
                  "Vítr tě odfoukne",
                  "Mraky padají dolů",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Elektrický obvod: Jak rozsvítit žárovku",
          content: {
            sections: [
              {
                heading: "Co je to obvod?",
                text: "Představ si elektřinu jako vláček, který musí jet po kolejích dokola. Aby žárovka svítila, musí být obvod **uzavřený**. Musí vést od jednoho pólu baterie, přes žárovku, zpátky k druhému pólu baterie. Kdyby byly koleje přerušené, vláček nepojede.",
                image: "[Image of simple electric circuit diagram]",
              },
              {
                heading: "Hlavní části",
                text: "1. **Zdroj:** Baterie nebo zásuvka (dává energii).\n2. **Spotřebič:** Žárovka, motor, mobil (využívá energii).\n3. **Vodič:** Dráty (cesta).\n4. **Spínač:** Umí cestu rozpojit (zhasnout) nebo spojit (rozsvítit).",
                image: "",
              },
              {
                heading: "Pozor na zkrat!",
                text: "Kdybychom spojili drátem přímo plus a mínus baterie bez žárovky, proud by tekl strašně rychle. Drát by se rozžhavil a baterie zničila. Tomu se říká **zkrat**. Je to nebezpečné a může to způsobit požár!",
                image: "",
              },
            ],
            tasks: [
              {
                id: "zs_el_l2_t1",
                question: "Co se stane, když se v obvodu přetrhne drát?",
                options: [
                  "Žárovka zhasne (obvod se rozpojí)",
                  "Žárovka bude svítit dál",
                  "Baterie vybouchne",
                  "Žárovka začne blikat",
                ],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "zs_el_l2_t2",
                question: "Která součástka slouží jako zdroj energie?",
                options: ["Žárovka", "Vypínač", "Baterie", "Drát"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "zs_el_l2_t3",
                question: "K čemu slouží spínač (vypínač)?",
                options: [
                  "K výrobě elektřiny",
                  "K uzavírání a rozpojování obvodu",
                  "Aby to vypadalo hezky",
                  "K zahřívání drátů",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "zs_el_l2_t4",
                question: "Co je to zkrat?",
                options: [
                  "Když je drát moc krátký",
                  "Nebezpečné přímé spojení pólů zdroje (bez spotřebiče)",
                  "Když dojde baterie",
                  "Zkratka do školy",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "zs_el_l2_t5",
                question: "Aby žárovka svítila, musí být obvod:",
                options: ["Uzavřený", "Rozpojený", "Mokrý", "Přerušený"],
                correctAnswer: 0,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Vodiče a izolanty: Kudy proud projde?",
          content: {
            sections: [
              {
                heading: "Elektrická dálnice: Vodiče",
                text: "Některé látky dovolí elektřině snadno protékat. Říkáme jim **vodiče**. Nejlepšími vodiči jsou kovy (měď, hliník, zlato, železo). Také voda z kohoutku a lidské tělo vedou elektřinu (proto nesahat na zásuvku mokrou rukou!).",
                image: "",
              },
              {
                heading: "Stopka: Izolanty",
                text: "Jiné látky elektřinu nepustí. Říkáme jim **izolanty** (nevodiče). Jsou to plasty, guma, dřevo, sklo nebo porcelán. Izolanty jsou důležité, aby nás elektřina nekopla.",
                image: "",
              },
              {
                heading: "Proč má drát plastový obal?",
                text: "Uvnitř kabelu je kov (měď), aby vedl proud k počítači. Zvenku je plast, abychom se ho mohli dotknout a nedostali ránu. Je to dokonalá spolupráce vodiče a izolantu.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "zs_el_l3_t1",
                question: "Která látka je dobrý vodič elektřiny?",
                options: ["Guma", "Dřevo", "Kov (např. měď)", "Plast"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "zs_el_l3_t2",
                question:
                  "Proč mají elektrikáři šroubováky s gumovou rukojetí?",
                options: [
                  "Aby je nestudila ruka",
                  "Protože guma je izolant a chrání před úrazem proudem",
                  "Aby šroubovák neklouzal",
                  "Je to levnější",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "zs_el_l3_t3",
                question: "Je bezpečné fénovat si vlasy ve vaně?",
                options: [
                  "Ano, pokud je fén vodotěsný",
                  "Ne, voda vede elektřinu a je to smrtelně nebezpečné",
                  "Ano, ale jen studenou vodou",
                  "Ano, elektřina ve vodě plave",
                ],
                correctAnswer: 1,
                xp: 25,
              },
              {
                id: "zs_el_l3_t4",
                question: "Která z těchto věcí je izolant?",
                options: [
                  "Hřebík",
                  "Zlatý prsten",
                  "Mokrá ruka",
                  "Plastové pravítko",
                ],
                correctAnswer: 3,
                xp: 15,
              },
              {
                id: "zs_el_l3_t5",
                question: "Co je uvnitř většiny kabelů?",
                options: ["Provázek", "Měděný drát", "Voda", "Vzduch"],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Magnetické pole: Neviditelná síla",
          content: {
            sections: [
              {
                heading: "Póly magnetu",
                text: "Každý magnet má dva póly: **Severní (N - North)**, který je často červený, a **Jižní (S - South)**, často modrý. Kolem magnetu je neviditelné silové pole, které umí přitahovat železné věci.",
                image: "",
              },
              {
                heading: "Jak se magnety kamarádí?",
                text: "Zkus dát dva magnety k sobě. \n- Pokud dáš k sobě **opačné póly (N a S)**, magnety se silně **přitáhnou** (cvak!).\n- Pokud dáš k sobě **stejné póly (N a N)**, magnety se budou **odpuzovat** a utíkat před sebou.",
                image: "[Image of magnet poles attracting repelling]",
              },
              {
                heading: "Co magnet přitahuje?",
                text: "Magnet nepřitahuje všechno. Přitahuje železo, ocel a nikl. Nepřitahuje dřevo, plast, papír, ale ani zlato, stříbro nebo hliník. Zkus doma magnetem najít hřebíky ve zdi!",
                image: "[Image of magnet attracting nails]",
              },
            ],
            tasks: [
              {
                id: "zs_el_l4_t1",
                question: "Kolik pólů má tyčový magnet?",
                options: ["Jeden", "Dva (Severní a Jižní)", "Tři", "Žádný"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "zs_el_l4_t2",
                question:
                  "Co se stane, když k sobě přiblížíš dva severní póly (N a N)?",
                options: [
                  "Přitáhnou se",
                  "Odpuzují se",
                  "Nic se nestane",
                  "Zmagnetizují se",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "zs_el_l4_t3",
                question: "Který předmět přitáhne magnet?",
                options: [
                  "Plastová lžička",
                  "Dřevěná kostka",
                  "Železný klíč",
                  "Zlatý prstýnek",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "zs_el_l4_t4",
                question: "Když rozřízneš magnet napůl, co vznikne?",
                options: [
                  "Dva menší magnety, každý má zase N a S pól",
                  "Jeden magnet bude jen N a druhý jen S",
                  "Magnety přestanou fungovat",
                  "Vznikne písek",
                ],
                correctAnswer: 0,
                xp: 25,
              },
              {
                id: "zs_el_l4_t5",
                question: "Značka N na magnetu znamená:",
                options: [
                  "Nice (pěkný)",
                  "North (Sever)",
                  "Normal (normální)",
                  "Near (blízko)",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Kompas a Země: Obří magnet",
          content: {
            sections: [
              {
                heading: "Země je magnet",
                text: "Naše planeta Země má uvnitř roztavené železné jádro. Díky tomu se chová jako gigantický magnet. Má své magnetické póly nahoře i dole (blízko těch zeměpisných). Díky tomu nás chrání před nebezpečným zářením z vesmíru.",
                image: "[Image of Earth magnetic field lines]",
              },
              {
                heading: "Jak funguje kompas?",
                text: "Kompas je vlastně maličký, lehoučký magnet na jehle (střelka). Protože se může volně otáčet, natočí se podle magnetického pole Země. Červený konec střelky ukazuje vždy na sever (k severnímu pólu).",
                image: "",
              },
              {
                heading: "Polární záře",
                text: "Magnetické pole Země zachytává částice ze Slunce. Když tyto částice narazí do vzduchu u pólů, začnou svítit. Vznikají nádherné zelené a fialové závoje na obloze – polární záře (Aurora).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "zs_el_l5_t1",
                question: "Kam ukazuje střelka kompasu?",
                options: [
                  "Na jih",
                  "Na východ",
                  "Na sever",
                  "Na nejbližší kopec",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "zs_el_l5_t2",
                question: "Proč kompas funguje?",
                options: [
                  "Protože je v něm baterie",
                  "Protože Země je obrovský magnet",
                  "Protože reaguje na vítr",
                  "Je to kouzlo",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "zs_el_l5_t3",
                question: "K čemu sloužil kompas námořníkům?",
                options: [
                  "Aby věděli, kolik je hodin",
                  "Aby se orientovali na moři a našli směr",
                  "Aby předpověděli počasí",
                  "Aby chytali ryby",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "zs_el_l5_t4",
                question: "Co je polární záře?",
                options: [
                  "Světla měst viděná z vesmíru",
                  "Světelný úkaz na obloze způsobený magnetickým polem Země a Sluncem",
                  "Odrážení měsíčního světla o led",
                  "Lesní požár",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "zs_el_l5_t5",
                question:
                  "Bude kompas fungovat správně, když k němu přiložíš silný magnet?",
                options: [
                  "Ano, bude fungovat ještě lépe",
                  "Ne, střelka se otočí k tvému magnetu místo k severu",
                  "Kompas vybouchne",
                  "Střelka zmizí",
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
      title: "Světelné jevy (ZŠ)",
      lessons: [
        {
          title: "Zdroje světla a stín",
          content: {
            sections: [
              {
                heading: "Odkud se bere světlo?",
                text: "Abychom viděli, potřebujeme světlo. Máme zdroje:\n1. **Přírodní:** Slunce (nejdůležitější), oheň, blesk, světluška.\n2. **Umělé:** Žárovka, laser, displej mobilu.\nPozor! Měsíc NEJE zdroj světla. Jenom odráží světlo od Slunce jako zrcadlo.",
                image: "",
              },
              {
                heading: "Přímo za nosem",
                text: "Světlo se v čistém vzduchu šíří vždy **přímočaře** (rovně). Neumí zahýbat za roh. Proto když mu něco stojí v cestě, vznikne za tím tma – **stín**.",
                image: "[Image of light rays traveling in straight lines]",
              },
              {
                heading: "Rychlík vesmíru",
                text: "Světlo je to nejrychlejší, co existuje. Urazí 300 000 km za jedinou sekundu! Proto když bouří, vidíme blesk hned, ale hrom slyšíme až později (zvuk je mnohem pomalejší).",
                image: "",
              },
            ],
            tasks: [
              {
                id: "zs_opt_l1_t1",
                question: "Je Měsíc zdrojem světla?",
                options: [
                  "Ano, v noci svítí sám",
                  "Ne, jen odráží světlo Slunce",
                  "Ano, ale jen v úplňku",
                  "Ne, Měsíc je černá díra",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "zs_opt_l1_t2",
                question: "Jak se šíří světlo?",
                options: [
                  "V kruzích",
                  "Přímočaře (rovně)",
                  "Cik-cak",
                  "Padá dolů jako kámen",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "zs_opt_l1_t3",
                question: "Stín vznikne, když:",
                options: [
                  "Světlo projde sklem",
                  "Neprůhledné těleso zabrání průchodu světla",
                  "Je zima",
                  "Zapneme druhou žárovku",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "zs_opt_l1_t4",
                question: "Co je rychlejší?",
                options: [
                  "Zvuk (letadlo)",
                  "Světlo (blesk)",
                  "Obojí je stejně rychlé",
                  "Běžící gepard",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "zs_opt_l1_t5",
                question: "Které těleso je umělý zdroj světla?",
                options: [
                  "Slunce",
                  "Hvězda",
                  "Baterka (svítilna)",
                  "Světluška",
                ],
                correctAnswer: 2,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Zákon odrazu: Zrcadla",
          content: {
            sections: [
              {
                heading: "Zákon odrazu",
                text: "Světlo se chová jako hopík. Když hodíš míček o zem šikmo, odrazí se stejně šikmo na druhou stranu. Platí: **Úhel odrazu se rovná úhlu dopadu**. Díky tomu fungují zrcadla.",
                image: "[Image of light reflection angle diagram]",
              },
              {
                heading: "Rovinné zrcadlo",
                text: "To je to, co máš v koupelně. Obraz v něm je:\n1. Stejně velký.\n2. Vzpřímený (hlavou nahoru).\n3. Stranově převrácený (zvedneš pravou ruku, tvůj odraz zvedne levou).",
                image: "",
              },
              {
                heading: "Periskop",
                text: "Jak se koukat za roh nebo z ponorky? Pomocí periskopu! Jsou to dvě zrcátka nastavená tak, aby poslala obraz dolů k tvému oku.",
                image: "[Image of periscope diagram with mirrors]",
              },
            ],
            tasks: [
              {
                id: "zs_opt_l2_t1",
                question:
                  "Když se podíváš do zrcadla a mrkneš levým okem, které oko mrkne na tvém obraze?",
                options: ["Levé", "Pravé (z pohledu obrazu)", "Obě", "Žádné"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "zs_opt_l2_t2",
                question: "K čemu slouží periskop?",
                options: [
                  "K pozorování hvězd",
                  "K pozorování za roh nebo nad hladinu",
                  "K zapálení ohně",
                  "K měření teploty",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "zs_opt_l2_t3",
                question: "Jaký je obraz v rovinném zrcadle?",
                options: [
                  "Zvětšený",
                  "Zmenšený",
                  "Stejně velký",
                  "Vzhůru nohama",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "zs_opt_l2_t4",
                question:
                  "Když posvítím baterkou kolmo na zrcadlo, kam se světlo odrazí?",
                options: [
                  "Přímo zpátky do baterky",
                  "Doleva",
                  "Doprava",
                  "Zmizí",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "zs_opt_l2_t5",
                question: "Co se musí lesknout, aby to fungovalo jako zrcadlo?",
                options: [
                  "Povrch musí být drsný a černý",
                  "Povrch musí být hladký a lesklý",
                  "Povrch musí být průhledný",
                  "Musí to být ze dřeva",
                ],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Lom světla: Kouzla s vodou",
          content: {
            sections: [
              {
                heading: "Zlomená lžička",
                text: "Když dáš lžičku do sklenice s vodou, vypadá jako zlomená. Proč? Protože světlo ve vodě zpomalí a změní směr. Tomu říkáme **lom světla**. Náš mozek si myslí, že světlo letí rovně, a proto vidíme lžičku jinde, než doopravdy je.",
                image: "",
              },
              {
                heading: "Klamavá hloubka",
                text: "Když se díváš na dno bazénu nebo potoka, zdá se ti, že je voda mělká. Pozor na to! Ve skutečnosti je dno hlouběji. Světlo nás klame.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "zs_opt_l3_t1",
                question: "Proč vypadá brčko ve vodě jako zlomené?",
                options: [
                  "Protože se opravdu zlomilo",
                  "Kvůli lomu světla (optický klam)",
                  "Voda brčko ohne tlakem",
                  "Máš špatné brýle",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "zs_opt_l3_t2",
                question: "Když se díváš na rybu ve vodě, je ve skutečnosti:",
                options: [
                  "Hlouběji, než ji vidíš",
                  "Výše, než ji vidíš",
                  "Přesně tam, kde ji vidíš",
                  "Na břehu",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "zs_opt_l3_t3",
                question: "Lom světla nastává, když světlo:",
                options: [
                  "Narazí na zrcadlo",
                  "Přechází z jednoho prostředí do druhého (vzduch -> voda)",
                  "Svítí ve vakuu",
                  "Zhasne",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "zs_opt_l3_t4",
                question: "Co se stane s rychlostí světla, když vletí do vody?",
                options: [
                  "Zrychlí se",
                  "Zpomalí se",
                  "Zůstane stejná",
                  "Zastaví se úplně",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "zs_opt_l3_t5",
                question: "Lom světla využíváme v:",
                options: [
                  "Zrcadlech",
                  "Čočkách (brýle, lupy)",
                  "Baterkách",
                  "Kamnech",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Čočky: Lupa a brýle",
          content: {
            sections: [
              {
                heading: "Spojka (Lupa)",
                text: "Spojka je čočka, která je uprostřed tlustší (jako čočka k jídlu). \n- Paprsky světla **spojuje** do jednoho bodu.\n- Funguje jako lupa (zvětšuje písmenka).\n- Můžeš s ní zapálit papír, když soustředíš sluneční paprsky.",
                image: "",
              },
              {
                heading: "Rozptylka",
                text: "Rozptylka je uprostřed tenčí (jako ohryzek od jablka). \n- Paprsky světla **rozptyluje** do stran.\n- Obraz zmenšuje.\n- Nosí ji lidé, kteří vidí špatně na dálku.",
                image: "",
              },
              {
                heading: "Lidské oko",
                text: "I v oku máme čočku! Je pružná a umí se zploštit nebo ztlustit, abychom zaostřili na blízko i na dálku. Obraz dopadá dozadu na sítnici.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "zs_opt_l4_t1",
                question:
                  "Jak se jmenuje čočka, která je uprostřed tlustší a zvětšuje?",
                options: ["Rozptylka", "Spojka", "Zrcadlo", "Hranol"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "zs_opt_l4_t2",
                question: "Kterou čočkou můžeš na sluníčku zapálit papír?",
                options: [
                  "Rozptylkou",
                  "Spojkou (lupou)",
                  "Žádnou",
                  "Brýlemi na dálku (rozptylkami)",
                ],
                correctAnswer: 1,
                xp: 20,
              },
              {
                id: "zs_opt_l4_t3",
                question: "Co máme v oku?",
                options: [
                  "Zrcátko",
                  "Skleněnou kuličku",
                  "Pružnou čočku",
                  "Diamant",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "zs_opt_l4_t4",
                question: "Rozptylka světlo:",
                options: [
                  "Soustředí do jednoho bodu",
                  "Rozptyluje do všech stran",
                  "Odráží zpět",
                  "Mění na tmu",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "zs_opt_l4_t5",
                question: "Kdo nosí brýle s rozptylkami?",
                options: [
                  "Ten, kdo vidí špatně na dálku (krátkozraký)",
                  "Ten, kdo vidí špatně na blízko (dalekozraký)",
                  "Ten, kdo chce vypadat chytře",
                  "Ten, kdo chce vidět za roh",
                ],
                correctAnswer: 0,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Barvy a duha",
          content: {
            sections: [
              {
                heading: "Bílé světlo není bílé",
                text: "Sluneční světlo vypadá bílé, ale ve skutečnosti je to směs všech barev duhy! Isaac Newton to dokázal, když poslal světlo skrz skleněný hranol. Světlo se rozpadlo na barevný pás (spektrum): červená, oranžová, žlutá, zelená, modrá, fialová.",
                image: "",
              },
              {
                heading: "Jak vzniká duha?",
                text: "Když prší a zároveň svítí slunce, kapky deště fungují jako miliony malých hranolů. Rozloží sluneční světlo na barvy a promítnou je na oblohu.",
                image: "[Image of rainbow formation diagram]",
              },
              {
                heading: "Proč je tráva zelená?",
                text: "Proč má tráva zelenou barvu? Protože pohltí všechny barvy ze slunce KROMĚ zelené. Zelenou odrazí do našeho oka. Černé tričko pohltí všechno světlo (proto je v něm horko), bílé tričko všechno odrazí.",
                image: "[Image of objects reflecting colors]",
              },
            ],
            tasks: [
              {
                id: "zs_opt_l5_t1",
                question: "Bílé světlo se skládá z:",
                options: [
                  "Jen z bílé barvy",
                  "Z černé a bílé",
                  "Ze všech barev duhy",
                  "Z ničeho",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "zs_opt_l5_t2",
                question: "Co funguje jako hranol při vzniku duhy?",
                options: ["Mraky", "Kapky deště", "Vzduch", "Ptáci"],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "zs_opt_l5_t3",
                question: "Proč je červené tričko červené?",
                options: [
                  "Protože odráží jen červenou barvu",
                  "Protože pohlcuje červenou barvu",
                  "Protože samo svítí",
                  "Protože je teplé",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "zs_opt_l5_t4",
                question: "Které tričko je v létě nejchladnější?",
                options: [
                  "Černé (všechno pohlcuje)",
                  "Bílé (všechno odráží)",
                  "Modré",
                  "Je to jedno",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "zs_opt_l5_t5",
                question: "Kdo objevil, že se světlo skládá z barev?",
                options: [
                  "Isaac Newton",
                  "Albert Einstein",
                  "Harry Potter",
                  "Mistr Jan Hus",
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
      title: "Vesmír a Země (ZŠ)",
      lessons: [
        {
          title: "Den a noc: Proč se to střídá?",
          content: {
            sections: [
              {
                heading: "Země je jako káča",
                text: "Země se neustále točí kolem své osy (jako roztočená káča nebo balerína). Jedno otočení jí trvá přesně **24 hodin**. To je jeden den.",
                image: "[Image of Earth rotation day night cycle diagram]",
              },
              {
                heading: "Světlo a tma",
                text: "Slunce svítí pořád, ale může osvítit jen polovinu Zeměkoule. \n- Na straně otočené ke Slunci je **den**.\n- Na odvrácené straně (ve stínu) je **noc**.\nMy se točíme z tmy do světla, proto ráno Slunce 'vychází' na východě a večer 'zapadá' na západě.",
                image: "",
              },
              {
                heading: "Osa je nakloněná",
                text: "Země nestojí rovně, je trochu nakloněná na bok. To je hrozně důležité pro střídání ročních období, ale o tom v další lekci.",
                image: "[Image of earth axis tilt]",
              },
            ],
            tasks: [
              {
                id: "zs_uni_l1_t1",
                question: "Za jak dlouho se Země otočí kolem své osy?",
                options: [
                  "Za 12 hodin",
                  "Za 24 hodin (1 den)",
                  "Za 365 dní (1 rok)",
                  "Za měsíc",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "zs_uni_l1_t2",
                question: "Proč se střídá den a noc?",
                options: [
                  "Protože Slunce v noci zhasne",
                  "Protože Měsíc zakryje Slunce",
                  "Protože se Země točí a nastavuje Slunci různé strany",
                  "Protože mraky zakryjí oblohu",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "zs_uni_l1_t3",
                question: "Kde vychází Slunce?",
                options: ["Na severu", "Na západě", "Na jihu", "Na východě"],
                correctAnswer: 3,
                xp: 10,
              },
              {
                id: "zs_uni_l1_t4",
                question: "Je v noci Slunce zhasnuté?",
                options: [
                  "Ano",
                  "Ne, svítí na druhou půlku Zeměkoule",
                  "Svítí jen trochu",
                  "Odpočívá",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "zs_uni_l1_t5",
                question: "Co by se stalo, kdyby se Země přestala točit?",
                options: [
                  "Nic",
                  "Na jedné půlce by byl věčný den a na druhé věčná noc",
                  "Všude by byla tma",
                  "Všude by bylo světlo",
                ],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Roční období: Cesta kolem Slunce",
          content: {
            sections: [
              {
                heading: "Velký okruh",
                text: "Země se nejen točí na místě, ale také obíhá kolem Slunce. Jeden oběh trvá **365 a čtvrt dne** (jeden rok). Ten čtvrt-den se sčítá a jednou za 4 roky máme přestupný rok (únor má 29 dní).",
                image: "[Image of Earth orbit around Sun diagram]",
              },
              {
                heading: "Proč je v létě teplo?",
                text: "Není to proto, že jsme blíž ke Slunci! Je to kvůli náklonu osy.\n- **Léto:** Naše polokoule (severní) je nakloněná KE Slunci. Slunce svítí vysoko a dlouho (hřeje).\n- **Zima:** Jsme odkloněni OD Slunce. Slunce je nízko, svítí šikmo a krátce (studí).",
                image: "[Image of seasons diagram earth tilt]",
              },
              {
                heading: "Rovnodennost a Slunovrat",
                text: "- **Slunovrat (červen a prosinec):** Nejdelší den nebo nejdelší noc.\n- **Rovnodennost (březen a září):** Den i noc jsou stejně dlouhé všude na Zemi.",
                image: "[Image of solstice and equinox diagram]",
              },
            ],
            tasks: [
              {
                id: "zs_uni_l2_t1",
                question: "Jak dlouho trvá oběh Země kolem Slunce?",
                options: [
                  "24 hodin",
                  "1 měsíc",
                  "1 rok (cca 365 dní)",
                  "10 let",
                ],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "zs_uni_l2_t2",
                question: "Proč je v zimě zima?",
                options: [
                  "Protože jsme dál od Slunce",
                  "Protože Slunce méně topí",
                  "Protože je naše polokoule odkloněná a sluneční paprsky dopadají šikmo",
                  "Protože hodně fouká",
                ],
                correctAnswer: 2,
                xp: 20,
              },
              {
                id: "zs_uni_l2_t3",
                question: "Co je přestupný rok?",
                options: [
                  "Rok, kdy se stěhujeme",
                  "Rok, který má o jeden den navíc (366 dní)",
                  "Rok, který je kratší",
                  "Rok bez zimy",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "zs_uni_l2_t4",
                question:
                  "Když je u nás (na severu) léto, co mají v Austrálii (na jihu)?",
                options: ["Taky léto", "Zimu", "Jaro", "Noc"],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "zs_uni_l2_t5",
                question: "Jak se jmenuje den, kdy je noc i den stejně dlouhá?",
                options: ["Slunovrat", "Rovnodennost", "Novoluní", "Vánoce"],
                correctAnswer: 1,
                xp: 10,
              },
            ],
          },
        },
        {
          title: "Měsíc: Náš věrný souputník",
          content: {
            sections: [
              {
                heading: "Měsíc nesvítí",
                text: "Měsíc je velká kamenná koule, která obíhá Zemi. Sám nesvítí, vidíme ho jen proto, že na něj svítí Slunce. Je to naše jediná přirozená družice.",
                image: "[Image of Moon orbiting Earth]",
              },
              {
                heading: "Fáze Měsíce",
                text: "Měsíc mění tvar, protože vidíme různě velkou část jeho osvětlené půlky.\n- **Nov:** Měsíc není vidět (je mezi námi a Sluncem).\n- **První čtvrť:** Tvar písmene **D** (Dorůstá).\n- **Úplněk:** Vidíme celé kolečko (Slunce nám svítí za zády).\n- **Poslední čtvrť:** Tvar písmene **C** (Couvá).",
                image: "[Image of moon phases cycle diagram]",
              },
              {
                heading: "Zatmění",
                text: "- **Zatmění Měsíce:** Země stíní Měsíci (Slunce - Země - Měsíc).\n- **Zatmění Slunce:** Měsíc stíní Zemi (Slunce - Měsíc - Země).",
                image: "[Image of solar and lunar eclipse diagram]",
              },
            ],
            tasks: [
              {
                id: "zs_uni_l3_t1",
                question: "Co znamená, když Měsíc 'couvá'?",
                options: [
                  "Že letí pozpátku",
                  "Že se zmenšuje a má tvar písmene C",
                  "Že se zvětšuje a má tvar písmene D",
                  "Že zapadá",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "zs_uni_l3_t2",
                question: "Kdy nastává zatmění Slunce?",
                options: [
                  "Když Měsíc vleze mezi Zemi a Slunce a zastíní ho",
                  "Když Slunce zhasne",
                  "Když Země stíní Měsíci",
                  "V noci",
                ],
                correctAnswer: 0,
                xp: 20,
              },
              {
                id: "zs_uni_l3_t3",
                question: "Jak poznáš, že Měsíc dorůstá?",
                options: [
                  "Vypadá jako C",
                  "Vypadá jako D",
                  "Je to úplněk",
                  "Je červený",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "zs_uni_l3_t4",
                question: "Svítí Měsíc vlastním světlem?",
                options: [
                  "Ano, je žhavý",
                  "Ne, odráží světlo Slunce",
                  "Ano, má v sobě elektřinu",
                  "Jen v úplňku",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "zs_uni_l3_t5",
                question: "Jeden oběh Měsíce kolem Země trvá přibližně:",
                options: [
                  "Jeden den",
                  "Jeden týden",
                  "Jeden měsíc (cca 28 dní)",
                  "Jeden rok",
                ],
                correctAnswer: 2,
                xp: 15,
              },
            ],
          },
        },
        {
          title: "Sluneční soustava: Naše rodina",
          content: {
            sections: [
              {
                heading: "Slunce je šéf",
                text: "Slunce je obrovská žhavá hvězda uprostřed. Je tak těžké, že svou gravitací drží všechny planety u sebe. Bez Slunce by na Zemi nebyl život – dává nám světlo a teplo.",
                image: "[Image of solar system planets lineup]",
              },
              {
                heading: "Kamenné planety (Vnitřní)",
                text: "Jsou blízko Slunce, malé a pevné.\n1. **Merkur:** Nejblíž, horký a děravý od kráterů.\n2. **Venuše:** Nejteplejší planeta (skleníkový efekt), září na obloze jako 'Večernice'.\n3. **Země:** Náš domov, jediná s tekutou vodou a životem.\n4. **Mars:** Rudá planeta, zkoumají ji roboti.",
                image: "",
              },
              {
                heading: "Plynní obři (Vnější)",
                text: "Jsou daleko, obrovští a nemají pevný povrch.\n5. **Jupiter:** Největší planeta, chrání nás před kometami.\n6. **Saturn:** Má nádherné prstence z ledu a kamení.\n7. **Uran:** Ledový obr, kutálí se po boku.\n8. **Neptun:** Nejvzdálenější, velmi studený a větrný.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "zs_uni_l4_t1",
                question: "Která planeta je Slunci nejblíže?",
                options: ["Země", "Venuše", "Merkur", "Mars"],
                correctAnswer: 2,
                xp: 10,
              },
              {
                id: "zs_uni_l4_t2",
                question: "Která planeta je úplně největší?",
                options: [
                  "Slunce (chyták - Slunce je hvězda)",
                  "Jupiter",
                  "Země",
                  "Saturn",
                ],
                correctAnswer: 1,
                xp: 15,
              },
              {
                id: "zs_uni_l4_t3",
                question: "Které planetě se říká 'Rudá planeta'?",
                options: ["Mars", "Venuše", "Jupiter", "Merkur"],
                correctAnswer: 0,
                xp: 10,
              },
              {
                id: "zs_uni_l4_t4",
                question: "Čím je výjimečný Saturn?",
                options: [
                  "Má nejvíce sopek",
                  "Je nejteplejší",
                  "Má viditelné prstence",
                  "Je modrý",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "zs_uni_l4_t5",
                question: "Kolik je planet ve Sluneční soustavě?",
                options: ["7", "8 (Pluto už není planeta)", "9", "12"],
                correctAnswer: 1,
                xp: 20,
              },
            ],
          },
        },
        {
          title: "Hvězdy a souhvězdí: Mapa oblohy",
          content: {
            sections: [
              {
                heading: "Co je to hvězda?",
                text: "Hvězda je obrovská koule žhavého plynu (jako naše Slunce), která vyrábí vlastní světlo. Hvězdy, které vidíme v noci, jsou strašně daleko – světlo od nich k nám letí i tisíce let.",
                image: "",
              },
              {
                heading: "Souhvězdí",
                text: "Lidé si spojili hvězdy čarami do obrázků, aby se na obloze vyznali. Nejznámější je **Velký vůz** (součást Velké medvědice). Pomocí zadních kol Velkého vozu snadno najdeš **Polárku (Severku)**. Ta ukazuje vždy na sever.",
                image: "",
              },
              {
                heading: "Mléčná dráha",
                text: "Naše Sluneční soustava patří do obrovského města hvězd, kterému říkáme Galaxie (Mléčná dráha). Když je v noci tma, vidíme ji jako světlý pás přes celou oblohu.",
                image: "",
              },
            ],
            tasks: [
              {
                id: "zs_uni_l5_t1",
                question: "Která hvězda ukazuje vždy na sever?",
                options: ["Večernice", "Slunce", "Polárka (Severka)", "Sirius"],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "zs_uni_l5_t2",
                question: "Co je to Velký vůz?",
                options: [
                  "Raketa",
                  "Souhvězdí (část Velké medvědice)",
                  "Planeta",
                  "Kometa",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "zs_uni_l5_t3",
                question: "Je Slunce hvězda?",
                options: [
                  "Ne, je to planeta",
                  "Ano, je to naše nejbližší hvězda",
                  "Ne, je to oheň",
                  "Ano, ale vyhaslá",
                ],
                correctAnswer: 1,
                xp: 10,
              },
              {
                id: "zs_uni_l5_t4",
                question: "Co je to Mléčná dráha?",
                options: [
                  "Rozlité mléko na stole",
                  "Cesta pro rakety",
                  "Naše Galaxie (obrovské množství hvězd)",
                  "Jméno čokolády",
                ],
                correctAnswer: 2,
                xp: 15,
              },
              {
                id: "zs_uni_l5_t5",
                question: "Proč ve dne nevidíme hvězdy?",
                options: [
                  "Protože zhasnou",
                  "Protože je přezáří světlo Slunce",
                  "Protože spadnou pod obzor",
                  "Protože spí",
                ],
                correctAnswer: 1,
                xp: 15,
              },
            ],
          },
        },
      ],
    },
  ],
};
