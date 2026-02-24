import { mathSS } from "../data/mathSS.js";
import { mathZS } from "../data/mathZS.js";
import { mathVS } from "../data/mathVS.js";
import { physicsZS } from "../data/physicsZS.js";
import { physicsSS } from "../data/physicsSS.js";
import { physicsVS } from "../data/physicsVS.js";

export const courseContentDatabase = {
  matematika: {
    zs: mathZS,
    ss: mathSS,
    vs: mathVS,
  },
  fyzika: {
    zs: physicsZS,
    ss: physicsSS,
    vs: physicsVS,
  },
  geometrie: {
    zs: {
      default: [
        { title: "Základní útvary", lessons: ["Bod", "Přímka", "Úsečka"] },
        { title: "Úhly", lessons: ["Měření", "Typy"] },
      ],
      1: [
        {
          title: "Základní plošné obrazce",
          lessons: [
            {
              title: "Čtverec",
              content: {
                sections: [
                  {
                    heading: "Dokonalá symetrie",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/naucsevic.firebasestorage.app/o/geometricBodies%2Fctverecbg.png?alt=media&token=5a2acce9-6560-41c4-a131-66c5fd53b2f7",

                    text: "Čtverec je králem geometrie. Je to naprosto pravidelný čtyřúhelník, což znamená dvě důležité věci: všechny jeho čtyři strany jsou na milimetr stejně dlouhé (značíme je písmenem $a$) a všechny čtyři vnitřní úhly jsou pravé (mají přesně $90^\\circ$). Představ si ho jako dokonalou dlaždici na podlaze nebo políčko na šachovnici. Má také dvě úhlopříčky, které jsou stejně dlouhé a protínají se přesně v polovině pod pravým úhlem.",
                  },
                  {
                    heading: "Obvod: Cesta kolem dokola",
                    text: "Představ si, že jsi mravenec a chceš čtverec obejít po jeho okraji. Ujdeš stranu $a$, pak druhou stranu $a$, třetí a čtvrtou. Obvod (značíme $o$) je vlastně součet všech stran neboli délka 'plotu' kolem obrazce. Protože jsou všechny strany stejné, vzoreček je velmi jednoduchý: $$ o = 4 \\cdot a $$ Pokud má strana čtverce délku 5 cm, obvod je $4 \\cdot 5 = 20$ cm.",
                  },
                  {
                    heading: "Obsah: Kolik se toho vejde dovnitř",
                    text: "Zatímco obvod byl plot, obsah (značíme $S$) je trávník uvnitř. Zjišťujeme, kolik malých jednotkových čtverečků se vejde na plochu našeho velkého čtverce. Obsah spočítáme tak, že vynásobíme délku a šířku obrazce. U čtverce je délka i šířka stejná (strana $a$), takže vzoreček zní: $$ S = a \\cdot a = a^2 $$ Pro čtverec o straně 5 cm je obsah $5 \\cdot 5 = 25$ cm² (čtverečních centimetrů).",
                  },
                ],
              },
            },
            {
              title: "Obdélník",
              content: {
                sections: [
                  {
                    heading: "Natažený příbuzný",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/naucsevic.firebasestorage.app/o/geometricBodies%2Fobdelnikbg.png?alt=media&token=d1a4e270-1077-4e4d-8c35-231042dbec20",

                    text: "Obdélník je velmi blízký příbuzný čtverce. Také má čtyři pravé úhly ($90^\\circ$), ale liší se délkou stran. Nemá všechny čtyři strany stejné, ale vždy jen dvě a dvě protější strany jsou stejně dlouhé a rovnoběžné. Značíme je obvykle jako stranu $a$ (délka) a stranu $b$ (šířka). Kolem sebe vidíme obdélníky neustále – je to tvar displeje tvého telefonu, sešitu, dveří nebo fotbalového hřiště.",
                  },
                  {
                    heading: "Obvod obdélníku",
                    text: "Opět jdeme na procházku kolem obrazce. Tentokrát ujdeme stranu $a$, pak kratší stranu $b$, zase stranu $a$ a nakonec stranu $b$. Sečetli jsme dvě 'áčka' a dvě 'béčka'. Obvod proto počítáme podle vzorce: $$ o = 2 \\cdot a + 2 \\cdot b $$ nebo zkráceně se závorkou: $$ o = 2 \\cdot (a + b) $$ Pokud má obdélník strany 4 cm a 3 cm, jeho obvod je $2 \\cdot (4 + 3) = 14$ cm.",
                  },
                  {
                    heading: "Obsah obdélníku",
                    text: "Chceme zjistit plochu obdélníku, třeba když počítáme, kolik barvy budeme potřebovat na vymalování obdélníkové zdi. Jednoduše vynásobíme délku zdi její výškou (šířkou). Vzoreček pro obsah obdélníku je: $$ S = a \\cdot b $$ Pokud je pokoj dlouhý 4 metry a široký 3 metry, jeho plocha (obsah) je $4 \\cdot 3 = 12$ m² (metrů čtverečních).",
                  },
                ],
              },
            },
          ],
        },
        {
          title: "Cesta k trojúhelníkům a kruhům",
          lessons: [
            {
              title: "Trojúhelník obecný",
              content: {
                sections: [
                  {
                    heading: "Základní stavební kámen",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/naucsevic.firebasestorage.app/o/geometricBodies%2Fobecnytrojuhelnik.png?alt=media&token=a8788357-6317-44dc-ab17-cdfec7bd491f", // Zde si případně nahraď URL vlastním modelem trojúhelníku

                    text: "Trojúhelník je nejjednodušší mnohoúhelník, ale zároveň ten nejpevnější – proto se často používá ve stavebnictví (např. u mostů nebo střech). Má tři vrcholy, tři strany (obvykle značené $a$, $b$, $c$) a tři vnitřní úhly. Zajímavostí je, že součet všech tří vnitřních úhlů v každém rovinném trojúhelníku je vždy přesně $180^\\circ$. Aby trojúhelník vůbec mohl existovat, musí platit tzv. trojúhelníková nerovnost: součet délek dvou libovolných stran musí být vždy větší než délka strany třetí.",
                  },
                  {
                    heading: "Obvod: Cesta po třech stranách",
                    text: "Výpočet obvodu obecného trojúhelníku je velmi přímočarý. Pokud ho chceš obejít, musíš projít všechny jeho tři různě dlouhé strany. Obvod (značíme $o$) získáme pouhým sečtením délek všech tří stran. Vzoreček je: $$ o = a + b + c $$ Pokud máme trojúhelník, jehož strany měří 3 cm, 4 cm a 5 cm, jeho obvod spočítáme jako $3 + 4 + 5 = 12$ cm.",
                  },
                  {
                    heading: "Obsah a tajemství výšky",
                    text: "Pro výpočet obsahu (plochy) už nám samotné strany nestačí. Potřebujeme znát 'výšku' (značíme $v$). Výška je kolmice spuštěná z vrcholu na protější stranu (které pak říkáme základna). Trojúhelník je vlastně přesná polovina rovnoběžníku. Proto jeho obsah získáme tak, že vynásobíme základnu příslušnou výškou a výsledek vydělíme dvěma: $$ S = \\frac{a \\cdot v_a}{2} $$ \n\n[Image illustrating a general triangle with base, height, and vertices labeled]\n\nNapříklad: Pokud je strana $a = 6$ cm a výška na ni $v_a = 4$ cm, obsah bude $(6 \\cdot 4) / 2 = 12$ cm².",
                  },
                ],
              },
            },
            {
              title: "Kruh",
              content: {
                sections: [
                  {
                    heading: "Kružnice vs. Kruh",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/naucsevic.firebasestorage.app/o/geometricBodies%2Fkruhbg.png?alt=media&token=3eebf1dd-3b11-43c1-9c5b-afbab4b2b3ac", // Zde si případně nahraď URL vlastním modelem kruhu

                    text: "Nejprve si musíme ujasnit důležitý rozdíl. **Kružnice** je jen prázdná obruč (čára), tvořená body, které jsou všechny stejně daleko od středu. **Kruh** je naproti tomu plný – je to kružnice i se vším prostorem uvnitř (jako mince nebo pizza). Důležité pojmy jsou střed ($S$), poloměr ($r$ – vzdálenost ze středu na okraj) a průměr ($d$ – vzdálenost od okraje k okraji přes střed). Platí, že průměr je přesně dvakrát delší než poloměr ($d = 2 \\cdot r$).\n\n[Image showing a circle with center, radius, diameter and circumference labeled]",
                  },
                  {
                    heading: "Obvod (Délka kružnice)",
                    text: "Jak změříme délku kružnice (obvod kruhu), když nemáme žádné rovné strany? Zde přichází na scénu magické Ludolfovo číslo $\\pi$ (Pí). To má hodnotu přibližně $3,14$. Obvod zjistíme tak, že průměr kruhu vynásobíme číslem $\\pi$. Vzoreček pro obvod ($o$) vypadá takto: $$ o = \\pi \\cdot d $$ nebo častěji s použitím poloměru: $$ o = 2 \\cdot \\pi \\cdot r $$ Příklad: Pokud má kolo u bicyklu poloměr 20 cm, jeho obvod je $2 \\cdot 3,14 \\cdot 20 = 125,6$ cm.",
                  },
                  {
                    heading: "Obsah kruhu",
                    text: "Chceme-li vědět, kolik těsta potřebujeme na upečení pizzy, zajímá nás její plocha (obsah). I zde hraje hlavní roli poloměr a číslo $\\pi$. Pozor, u obsahu budeme poloměr umocňovat na druhou! Vzoreček je: $$ S = \\pi \\cdot r^2 $$ Pokud má naše pizza poloměr 10 cm, její obsah spočítáme jako $3,14 \\cdot (10 \\cdot 10) = 3,14 \\cdot 100 = 314$ cm².",
                  },
                ],
              },
            },
          ],
        },
        {
          title: "První setkání s prostorem (Hranatá tělesa)",
          lessons: [
            {
              title: "Krychle",
              content: {
                splineUrl:
                  "https://prod.spline.design/xHk11UuRR4ODhHhx/scene.splinecode", // Můžeš nahradit URL s 3D modelem krychle
                sections: [
                  {
                    heading: "Dokonalý prostorový tvar",
                    text: "Krychle je trojrozměrný (3D) sourozenec čtverce. Zatímco čtverec je jen placka nakreslená na papíře, krychli si můžeš vzít do ruky. Kolem sebe ji vidíš neustále – představ si hrací kostku nebo Rubikovu kostku. Krychle je naprosto pravidelná: má 6 úplně stejných stěn (všechno to jsou čtverce), 12 stejně dlouhých hran (značíme je písmenem $a$) a 8 vrcholů (rohů). Ať ji otočíš jakkoliv, vypadá pořád stejně.\n\n[Image illustrating a 3D cube with faces, edges, and vertices labeled]",
                  },
                  {
                    heading: "Povrch: Balíme dárek",
                    text: "Představ si, že chceš krychli zabalit do balicího papíru. Kolik papíru budeš potřebovat? To nám řekne povrch (značíme $S$). Protože se krychle skládá ze 6 naprosto stejných čtvercových stěn, stačí nám spočítat obsah jedné stěny ($a \\cdot a$) a vynásobit ho šesti. Vzoreček je: $$ S = 6 \\cdot a^2 $$ Příklad: Pokud má hrana krychle délku 3 cm, obsah jedné stěny je $3 \\cdot 3 = 9$ cm². Celý povrch je pak $6 \\cdot 9 = 54$ cm².",
                  },
                  {
                    heading: "Objem: Kolik vody se tam vejde",
                    text: "Zatímco povrch byl o obalu, objem (značíme $V$) nám říká, co je uvnitř. Kolik vody nebo písku se do krychle vejde? Objem spočítáme tak, že vynásobíme její tři rozměry: délku, šířku a výšku. Ale protože u krychle jsou všechny tyto rozměry stejné (všechny měří $a$), vzoreček se velmi zjednoduší: $$ V = a \\cdot a \\cdot a = a^3 $$ Čteme to jako 'a na třetí'. Pokud má naše krychle hranu 3 cm, její objem je $3 \\cdot 3 \\cdot 3 = 27$ cm³ (centimetrů krychlových).",
                  },
                ],
              },
            },
            {
              title: "Kvádr",
              content: {
                splineUrl:
                  "https://prod.spline.design/qE3w6N6yjixh-SZI/scene.splinecode", // Můžeš nahradit URL s 3D modelem kvádru
                sections: [
                  {
                    heading: "Krabice nebo cihla",
                    text: "Kvádr je 3D sourozenec obdélníku. Znáš ho z běžného života asi nejlépe ze všech těles – je to krabice od bot, cihla, kniha nebo i tvůj pokoj. Kvádr má také 6 stěn, 12 hran a 8 vrcholů jako krychle, ale jeho hrany nejsou všechny stejně dlouhé. Má tři různé rozměry: délku ($a$), šířku ($b$) a výšku ($c$). Jeho stěny jsou obdélníky a platí, že vždy dvě protější stěny (např. podlaha a strop nebo levá a pravá stěna) jsou úplně stejné.",
                  },
                  {
                    heading: "Povrch: Natíráme stěny",
                    text: "Jak spočítáme plochu všech stěn kvádru? Protože jsou stěny po dvojicích stejné, spočítáme si obsah podlahy ($a \\cdot b$), obsah boční stěny ($b \\cdot c$) a obsah přední stěny ($a \\cdot c$). Všechny tři výsledky sečteme a nakonec vynásobíme dvěma (protože každá stěna tam je dvakrát). Vzoreček vypadá takto: $$ S = 2 \\cdot (a \\cdot b + a \\cdot c + b \\cdot c) $$ \n\n[Image showing a net of a 3D cuboid unfolded into 6 rectangles to demonstrate surface area calculation]\n\nPříklad pro kvádr o rozměrech 2 cm, 3 cm a 4 cm: $S = 2 \\cdot (2\\cdot3 + 2\\cdot4 + 3\\cdot4) = 2 \\cdot (6 + 8 + 12) = 2 \\cdot 26 = 52$ cm².",
                  },
                  {
                    heading: "Objem: Plníme bazén",
                    text: "Výpočet objemu u kvádru je velmi podobný jako u krychle, akorát musíme pracovat se třemi různými čísly. Zjišťujeme, kolik prostoru zabere. Prostě vynásobíme délku, šířku a výšku dohromady. Vzoreček je: $$ V = a \\cdot b \\cdot c $$ Pokud je bazén dlouhý 5 metrů, široký 3 metry a hluboký 2 metry, objem vody v něm spočítáme jako $5 \\cdot 3 \\cdot 2 = 30$ m³ (metrů krychlových, neboli kubíků).",
                  },
                ],
              },
            },
          ],
        },
        {
          title: "Tělesa v našem okolí (Oblá a špičatá tělesa)",
          lessons: [
            {
              title: "Koule",
              content: {
                splineUrl:
                  "https://prod.spline.design/0lrgZxstxvvirq3I/scene.splinecode", // Zde nahraď 3D modelem koule
                sections: [
                  {
                    heading: "Dokonalost bez rohů",
                    text: "Koule je nejdokonalejší ze všech těles. Nemá žádné rohy (vrcholy), žádné hrany, jen jeden spojitý oblý povrch. V přírodě ji najdeme všude – od kapek rosy přes fotbalový míč až po planety a hvězdy. Každý bod na povrchu koule je přesně stejně daleko od jejího středu. Tuto vzdálenost nazýváme poloměr (značíme $r$).",
                  },
                  {
                    heading: "Povrch: Kůže pomeranče",
                    text: "Když chceš zjistit, kolik kůže má pomeranč nebo kolik kůže je potřeba na ušití fotbalového míče, počítáš povrch koule (značíme $S$). K výpočtu potřebujeme znát poloměr $r$ a Ludolfovo číslo $\\pi$ (přibližně 3,14). Vzoreček vypadá takto: $$ S = 4 \\cdot \\pi \\cdot r^2 $$ Příklad: Míč s poloměrem 10 cm má povrch $4 \\cdot 3,14 \\cdot (10 \\cdot 10) = 4 \\cdot 3,14 \\cdot 100 = 1256$ cm².",
                  },
                  {
                    heading: "Objem: Vzduch v míči",
                    text: "Objem (značíme $V$) nám říká, kolik vzduchu se vejde do míče nebo kolik zmrzliny tvoří jeden dokonalý kopeček. Vzoreček pro objem koule je o něco složitější, protože obsahuje zlomek a poloměr umocněný na třetí: $$ V = \\frac{4}{3} \\cdot \\pi \\cdot r^3 $$",
                  },
                ],
              },
            },
            {
              title: "Válec",
              content: {
                splineUrl:
                  "https://prod.spline.design/NXG09-hjh04vwVyK/scene.splinecode", // Zde nahraď 3D modelem válce
                sections: [
                  {
                    heading: "Plechovka nebo trubka",
                    text: "Válec potkáváš každý den – ať už pijete limonádu z plechovky, kreslíte fixou nebo se díváte na komín. Rotační válec má dvě naprosto stejné kruhové podstavy (spodní a horní víčko) a oblou boční stěnu, které říkáme plášť. Důležité rozměry jsou poloměr podstavy ($r$) a výška válce ($v$), která nám říká, jak je válec vysoký.",
                  },
                  {
                    heading: "Povrch: Rozbalená plechovka",
                    text: "Jak vypočítat plochu plechu potřebnou na výrobu plechovky? Když válec 'rozstřihneme' a rozbalíme, zjistíme, že se jeho síť skládá ze dvou kruhů (podstavy) a jednoho obdélníku (plášť). Vzoreček pro povrch je součtem těchto částí: $$ S = 2 \\cdot \\pi \\cdot r^2 + 2 \\cdot \\pi \\cdot r \\cdot v $$ Což matematici pro ulehčení počítání často zapisují se závorkou: $$ S = 2 \\cdot \\pi \\cdot r \\cdot (r + v) $$ \n\n[Image showing the unfolded net of a cylinder consisting of two circles and a rectangle]",
                  },
                  {
                    heading: "Objem: Kapacita hrnku",
                    text: "Výpočet objemu válce je logický. Představ si, že na dno hrnku položíš kruhovou placku (obsah podstavy) a pak tyto placky skládáš na sebe, dokud nedosáhneš výšky hrnku ($v$). Proto objem vypočítáme tak, že obsah kruhové podstavy vynásobíme výškou: $$ V = \\pi \\cdot r^2 \\cdot v $$ Příklad: Hrneček s poloměrem dna 4 cm a výškou 10 cm má objem $3,14 \\cdot 16 \\cdot 10 = 502,4$ cm³ (tedy něco málo přes půl litru).",
                  },
                ],
              },
            },
            {
              title: "Jehlan",
              content: {
                splineUrl:
                  "https://prod.spline.design/F8qrqEGlMo2fjGHw/scene.splinecode", // Zde nahraď 3D modelem jehlanu
                sections: [
                  {
                    heading: "Egyptské pyramidy a věže",
                    text: "Jehlan je špičaté těleso. Nejslavnějším příkladem jsou egyptské pyramidy nebo stříšky hradních věží. Jehlan má jednu podstavu (to může být čtverec, obdélník, trojúhelník a podobně) a boční stěny, které jsou vždy tvořeny trojúhelníky. Tyto trojúhelníky se všechny potkávají v jednom jediném bodě nahoře – v hlavním vrcholu.",
                  },
                  {
                    heading: "Povrch: Stan a podlážka",
                    text: "Při výpočtu povrchu jehlanu musíme sečíst plochu, na které stojí (obsah podstavy, značíme $S_p$), a plochu všech stěn směřujících nahoru (obsah pláště, značíme $S_{pl}$). Protože podstava může mít různý tvar, univerzální vzorec je: $$ S = S_p + S_{pl} $$ Pokud by podstava byla čtverec o straně $a$, pak $S_p = a^2$, a plášť by tvořily čtyři stejné trojúhelníky.",
                  },
                  {
                    heading: "Objem: Třetina kvádru",
                    text: "Zde přichází velké matematické kouzlo! Kdybys měl krabici (kvádr) a jehlan se stejnou podstavou a stejnou výškou, zjistil bys, že objem jehlanu je přesně **jedna třetina** objemu kvádru. Znamená to, že bys z jehlanu musel přelít vodu do kvádru třikrát, aby se naplnil. Vzoreček pro objem je: $$ V = \\frac{1}{3} \\cdot S_p \\cdot v $$ (Tedy jedna třetina krát obsah podstavy krát výška tělesa).\n\n[Image illustrating that the volume of a pyramid is one third of a prism with the same base and height]",
                  },
                ],
              },
            },
          ],
        },
      ],
      2: [
        {
          title: "Mnohoúhelníky",
          lessons: [
            {
              title: "Trojúhelník rovnostranný",
              content: {
                sections: [
                  {
                    heading: "Dokonalá rovnováha",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/naucsevic.firebasestorage.app/o/geometricBodies%2Ftrojuhelnikbg.png?alt=media&token=29ff87c7-9b17-4346-bf61-542c389a18b3", // Zde si nahraď 3D modelem rovnostranného trojúhelníku

                    text: "Rovnostranný trojúhelník je králem mezi trojúhelníky. Má všechny tři strany naprosto stejně dlouhé (značíme $a$) a všechny tři vnitřní úhly jsou úplně stejné. Protože součet úhlů v každém trojúhelníku je vždy $180^\\circ$, musí mít každý úhel v rovnostranném trojúhelníku přesně $60^\\circ$ ($180 : 3$). Znáš ho z běžného života – všechny výstražné dopravní značky (např. 'Pozor, přechod pro chodce') mají tento dokonalý tvar.",
                  },
                  {
                    heading: "Obvod: Rychlá procházka",
                    text: "Výpočet obvodu (značíme $o$) je velmi snadný. Máme tři naprosto stejné strany, takže je prostě sečteme, nebo ještě lépe, vynásobíme délku jedné strany třemi. Vzoreček je: $$ o = 3 \\cdot a $$ Pokud má dopravní značka stranu dlouhou 50 cm, její obvod je $3 \\cdot 50 = 150$ cm.",
                  },
                  {
                    heading: "Obsah a speciální vzorec",
                    text: "K výpočtu obsahu potřebujeme znát výšku. U rovnostranného trojúhelníku si výšku umíme spočítat rovnou z délky strany pomocí Pythagorovy věty ($v = \\frac{a \\cdot \\sqrt{3}}{2}$). Když to dosadíme do základního vzorce pro obsah, vznikne nám speciální rychlý vzoreček jen a pouze pro tento dokonalý trojúhelník: $$ S = \\frac{a^2 \\cdot \\sqrt{3}}{4} $$ Znamená to, že nám k výpočtu plochy stačí znát jen délku jedné strany!",
                  },
                ],
              },
            },
            {
              title: "Šestiúhelník",
              content: {
                sections: [
                  {
                    heading: "Oblíbený tvar přírody",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/naucsevic.firebasestorage.app/o/geometricBodies%2Fsestiuhelnikpravidelny.png?alt=media&token=31e54d3f-75dc-4cb0-88a2-d6c191a05ea3", // Zde si nahraď 3D modelem šestiúhelníku

                    text: "Pravidelný šestiúhelník je fascinující útvar. Zeptej se včel! Včelí plástve jsou tvořeny dokonalými šestiúhelníky. Je to proto, že šestiúhelníky k sobě dokonale pasují bez jakýchkoliv mezer a spotřebují nejméně vosku na co největší prostor pro med. Najdeme ho i ve sněhových vločkách, na matici od šroubu nebo u některých krystalů a čedičových sloupů.\n\n",
                  },
                  {
                    heading: "Skryté tajemství: Šest bratrů",
                    text: "Pravidelný šestiúhelník (všechny strany $a$ a úhly jsou stejné) v sobě skrývá jedno krásné tajemství. Když spojíš jeho střed se všemi šesti vrcholy, rozpadne se přesně na **6 úplně stejných rovnostranných trojúhelníků**! Jeho obvod spočítáme jednoduše jako součet všech šesti vnějších hran: $$ o = 6 \\cdot a $$ \n\n[Image illustrating a regular hexagon divided into 6 equilateral triangles]",
                  },
                  {
                    heading: "Obsah: Šestkrát víc",
                    text: "Díky tomu, že víme, z čeho se šestiúhelník skládá, je výpočet obsahu (značíme $S$) hračka. Nepotřebujeme vymýšlet nic nového. Vezmeme vzoreček pro obsah jednoho rovnostranného trojúhelníku (z předchozí lekce) a prostě ho vynásobíme šesti. $$ S = 6 \\cdot \\left(\\frac{a^2 \\cdot \\sqrt{3}}{4}\\right) $$ Zjednodušeně po zkrácení: $$ S = \\frac{3 \\cdot a^2 \\cdot \\sqrt{3}}{2} $$",
                  },
                ],
              },
            },
            {
              title: "n-úhelník",
              content: {
                sections: [
                  {
                    heading: "Cesta do nekonečna",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/naucsevic.firebasestorage.app/o/geometricBodies%2Fnuhelnik.png?alt=media&token=2f690b5d-630e-4553-8e9a-ce1b9caccb3d", // Zde si nahraď abstraktnějším modelem nebo např. osmiúhelníkem

                    text: "V matematice se nespokojíme jen se třemi nebo šesti stranami. Co když jich máme pět, osm, deset nebo sto? Tomu říkáme pravidelný **$n$-úhelník**, kde písmeno $n$ označuje počet stran (např. pro osmiúhelník je $n=8$, pro desetiúhelník $n=10$). Všechny jeho strany a vnitřní úhly jsou stejně velké. Slavným příkladem z praxe je dopravní značka 'STOP', což je pravidelný osmiúhelník.",
                  },
                  {
                    heading: "Součet vnitřních úhlů",
                    text: "Existuje geniální trik, jak zjistit součet všech vnitřních úhlů v naprosto jakémkoliv mnohoúhelníku. Představ si, že z jednoho vrcholu narýsuješ čáry do všech ostatních (nesousedních) vrcholů. Tím se obrazec rozpadne na trojúhelníky. Počet těchto trojúhelníků je vždy přesně o 2 menší než počet stran (tedy $n - 2$). Protože každý trojúhelník má úhly o součtu $180^\\circ$, celkový součet úhlů v $n$-úhelníku je: $$ (n - 2) \\cdot 180^\\circ $$ Pro pětúhelník ($n=5$) to je např. $(5-2) \\cdot 180^\\circ = 540^\\circ$.",
                  },
                  {
                    heading: "Proměna v kruh",
                    text: "Co se stane, když budeme číslo $n$ zvětšovat? Zkus si představit pravidelný dvacetiúhelník, pak padesátiúhelník a nakonec tisíciúhelník. Čím více má pravidelný mnohoúhelník stran, tím kratší ty strany jsou a obrazec ztrácí viditelné rohy. Obrys se čím dál více podobá kružnici! Kruh je vlastně takový dokonalý limitní případ pravidelného $n$-úhelníku s 'nekonečně' mnoha stranami.\n\n[Image showing a sequence of regular polygons with increasing number of sides approaching a circle]",
                  },
                ],
              },
            },
          ],
        },
        {
          title: "Svět čtyřúhelníků",
          lessons: [
            {
              title: "Kosočtverec",
              content: {
                sections: [
                  {
                    heading: "Nakloněný čtverec",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/naucsevic.firebasestorage.app/o/geometricBodies%2Fkosoctverec.png?alt=media&token=2820bd9b-0a6c-4067-98ed-f02a96435f9b", // Zde si případně nahraď URL vlastním modelem kosočtverce

                    text: "Představ si, že postavíš čtverec z dřevěných špejlí a pak do něj z boku strčíš. Úhly už nebudou pravé, ale všechny čtyři strany zůstanou stejně dlouhé. Přesně to je kosočtverec! Znáš ho z hracích karet (káry) nebo jako logo automobilky Renault. Má jednu úžasnou vlastnost: jeho úhlopříčky (čáry spojující protější rohy) se protínají přesně v polovině a navíc pod pravým úhlem ($90^\\circ$).",
                  },
                  {
                    heading: "Obvod: Pořád čtyři stejné kroky",
                    text: "Výpočet obvodu kosočtverce (značíme $o$) je úplně stejný jako u čtverce. Naklonění tvaru délku stran nijak nezměnilo. Pořád obcházíme čtyři stejně dlouhé strany (značíme je písmenem $a$). Vzoreček je tedy náš starý známý: $$ o = 4 \\cdot a $$ Pokud má strana kosočtverce $5$ cm, jeho obvod je $4 \\cdot 5 = 20$ cm.",
                  },
                  {
                    heading: "Obsah: Dvě různé cesty",
                    text: "Na obsah kosočtverce můžeme jít dvěma způsoby. První způsob používá stranu a výšku (kolmici z jednoho rohu na protější stranu): $$ S = a \\cdot v_a $$ Druhý, mnohem oblíbenější způsob, využívá jeho kolmé úhlopříčky (značíme je $u_1$ a $u_2$, nebo $e$ a $f$). Obsah získáme tak, že úhlopříčky vynásobíme a výsledek vydělíme dvěma: $$ S = \\frac{u_1 \\cdot u_2}{2} $$ \n\n[Image showing a rhombus with diagonals intersecting at a right angle]",
                  },
                ],
              },
            },
            {
              title: "Lichoběžník obecný",
              content: {
                sections: [
                  {
                    heading: "Dvě rovnoběžky a nic víc",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/naucsevic.firebasestorage.app/o/geometricBodies%2Flichobeznik.png?alt=media&token=1cf1f086-7f1e-4c10-ad88-8e2a455576ce", // Zde si případně nahraď URL vlastním modelem lichoběžníku

                    text: "Lichoběžník je velmi častý tvar ve stavebnictví – podívej se na bok střechy domu nebo na stínidlo lampy. Aby byl čtyřúhelník lichoběžníkem, stačí mu splnit jedinou podmínku: dvě jeho protější strany musí být rovnoběžné (nikdy se neprotnou). Těmto stranám říkáme základny (obvykle $a$ a $c$). Zbylé dvě strany rovnoběžné nejsou a říkáme jim ramena ($b$ a $d$).",
                  },
                  {
                    heading: "Obvod: Každý pes jiná ves",
                    text: "U obecného lichoběžníku může mít každá ze čtyř stran úplně jinou délku. Žádné zjednodušení tu neexistuje. Obvod ($o$) spočítáme jako poctivou procházku kolem dokola – prostě sečteme všechny čtyři strany. $$ o = a + b + c + d $$ Pokud jsou strany dlouhé 10, 5, 6 a 7 cm, obvod bude $10 + 5 + 6 + 7 = 28$ cm.",
                  },
                  {
                    heading: "Obsah: Průměrná šířka",
                    text: "Jak spočítat plochu tvaru, který je dole široký a nahoře úzký? Matematici vymysleli skvělý trik: spočítají si z obou základen průměr, čímž si z lichoběžníku myšlenkově udělají hezký obdélník. Tento průměr základen pak jednoduše vynásobí výškou ($v$). Vzoreček pro obsah ($S$) vypadá takto: $$ S = \\frac{(a + c)}{2} \\cdot v $$ (Sečti horní a dolní stranu, vyděl dvěma a výsledek vynásob výškou).\n\n[Image illustrating the area of a trapezoid by transforming it into a rectangle of average width]",
                  },
                ],
              },
            },
            {
              title: "Lichoběžník rovnoramenný",
              content: {
                sections: [
                  {
                    heading: "Dokonale symetrický bratr",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/naucsevic.firebasestorage.app/o/geometricBodies%2Flichobeznikbg.png?alt=media&token=8c4231d7-77e7-4d26-a553-96463f1f07d6", // Zde si případně nahraď URL vlastním modelem

                    text: "Rovnoramenný lichoběžník je speciální případ lichoběžníku, který má rád pořádek a symetrii. Obě jeho šikmá ramena (strany $b$ a $d$) jsou na chlup stejně dlouhá. Představ si ho jako průřez zlatou cihlou, profil pilíře mostu nebo kbelík nakreslený ve 2D. Díky jeho souměrnosti jsou i úhly u obou základen naprosto stejné.",
                  },
                  {
                    heading: "Obvod a výhoda symetrie",
                    text: "Výpočet obvodu je díky dvěma stejným ramenům (obě budeme značit písmenem $b$) trošku kratší než u obecného lichoběžníku. Obvod ($o$) je součtem dolní základny, horní základny a dvou stejných ramen: $$ o = a + c + 2 \\cdot b $$ Pokud je dolní základna 12 cm, horní 6 cm a ramena mají 5 cm, obvod je $12 + 6 + 2 \\cdot 5 = 28$ cm.",
                  },
                  {
                    heading: "Tajemství úhlopříček",
                    text: "Obsah rovnoramenného lichoběžníku se počítá úplně stejným vzorcem jako u toho obecného ($S = \\frac{(a + c)}{2} \\cdot v$). Skrývá však ještě jedno kouzlo. Pokud v něm nakreslíš obě úhlopříčky (od rohu k rohu), zjistíš, že jsou naprosto stejně dlouhé! Navíc, díky dokonalé symetrii, je možné tomuto tvaru opsat kružnici (všechny čtyři vrcholy leží na jedné kružnici).",
                  },
                ],
              },
            },
            {
              title: "Deltoid",
              content: {
                sections: [
                  {
                    heading: "Létající drak",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/naucsevic.firebasestorage.app/o/geometricBodies%2Fdeltoid.png?alt=media&token=aa3362dc-bf8f-4f5c-a486-045cfae5cb0e", // Zde si případně nahraď URL vlastním modelem deltoidu

                    text: "Deltoid je geometrický název pro klasického papírového létajícího draka. Je to čtyřúhelník, který nemá rovnoběžné protější strany. Místo toho má vždy dvě a dvě **sousední** strany stejně dlouhé. Horní dvě strany jsou kratší, dolní dvě strany jsou delší. Vznikne tvar, který má jednu osu souměrnosti – úhlopříčky se kříží pod pravým úhlem a jedna z nich rozděluje tu druhou přesně na polovinu.\n\n[Image showing a kite shape with adjacent equal sides and perpendicular diagonals]",
                  },
                  {
                    heading: "Obvod: Dvě a dvě",
                    text: "Obvod deltoidu ($o$) se počítá podobně jako u obdélníku, protože máme dvě stejně dlouhé strany $a$ a dvě stejně dlouhé strany $b$. Sečteme délku jedné dlouhé a jedné krátké strany a výsledek vynásobíme dvěma. Vzoreček je: $$ o = 2 \\cdot (a + b) $$ Má-li papírový drak horní strany 20 cm a dolní strany 50 cm, potřebuješ na jeho obvod $2 \\cdot (20 + 50) = 140$ cm provázku.",
                  },
                  {
                    heading: "Obsah: Kříž z úhlopříček",
                    text: "Aby drak mohl létat, má uvnitř nosný kříž ze dvou špejlí. Těmto špejlím říkáme úhlopříčky ($e$ a $f$). Protože na sebe úhlopříčky svírají pravý úhel ($90^\\circ$), obsah deltoidu se počítá naprosto stejným trikem jako u kosočtverce – úhlopříčky se vynásobí a vydělí dvěma. $$ S = \\frac{e \\cdot f}{2} $$ Znáš-li délku obou špejlí kříže, víš přesně, kolik papíru potřebuješ na potažení draka!",
                  },
                ],
              },
            },
          ],
        },
        {
          title: "Pokročilé křivky a kruhové výseče",
          lessons: [
            {
              title: "Mezikruží",
              content: {
                sections: [
                  {
                    heading: "Matematická kobliha",
                    image:
                      "https://bviuhriolcuvayzbgzum.supabase.co/storage/v1/object/public/Telesa//prstenec.png", // Zde si případně nahraď URL vlastním modelem

                    text: "Představ si placatou koblihu (donut), cédéčko nebo kovovou podložku pod šroubek. Tomuto tvaru matematici říkají mezikruží. Vznikne tak, že vezmeš velký kruh a přesně z jeho středu vyřízneš menší kruh. Mezikruží je tedy plocha mezi dvěma soustřednými kružnicemi (kružnicemi se stejným středem). Máme zde dva důležité rozměry: poloměr vnitřního, prázdného kruhu (značíme $r$ nebo $r_1$) a poloměr velkého, vnějšího kruhu (značíme $R$ nebo $r_2$).\n\n[Image illustrating an annulus (donut shape) with inner radius r and outer radius R labeled]",
                  },
                  {
                    heading: "Obsah: Velký minus malý",
                    text: "Jak spočítáme plochu samotného těsta naší koblihy? Je to vlastně logická hádanka. Spočítáme si obsah celého velkého kruhu (jako by v něm nebyla díra) a pak od něj odečteme obsah té díry (malého kruhu). Vzoreček je: $$ S = \\pi \\cdot R^2 - \\pi \\cdot r^2 $$ Což si můžeme pro zjednodušení počítání upravit vytknutím čísla $\\pi$ před závorku: $$ S = \\pi \\cdot (R^2 - r^2) $$ Pozor: Nejdřív umocňujeme obě čísla, až potom je od sebe odčítáme!",
                  },
                  {
                    heading: "Obvod: Dvě cesty",
                    text: "Když chceš mezikruží natřít barvou po jeho okraji, musíš natřít vnější hranu, ale i tu vnitřní (uvnitř díry)! Obvod mezikruží se tedy skládá ze dvou kružnic. Proto obvod (délku hranice) vypočítáme jako součet obvodu velkého a malého kruhu: $$ o = 2 \\cdot \\pi \\cdot R + 2 \\cdot \\pi \\cdot r $$ Nebo zkráceně: $$ o = 2 \\cdot \\pi \\cdot (R + r) $$",
                  },
                ],
              },
            },
            {
              title: "Elipsa",
              content: {
                sections: [
                  {
                    heading: "Zploštělý kruh",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/naucsevic.firebasestorage.app/o/geometricBodies%2Felipsa.png?alt=media&token=edace710-12ba-4c23-959f-69b23dca7473", // Zde si případně nahraď URL vlastním modelem

                    text: "Elipsa vypadá jako kruh, na který si někdo sedl. Znáš ji velmi dobře – je to přesný tvar oběžných drah planet kolem Slunce (jak objevil Johannes Kepler). Zatímco kruh má jeden střed a jeden poloměr, elipsa je protáhlá a má dva různé 'poloměry', kterým říkáme **poloosy**.\n\n[Image showing an ellipse with major semi-axis a and minor semi-axis b labeled]\n\nTa delší vzdálenost od středu k okraji se jmenuje hlavní poloosa (značíme $a$) a ta kratší (od středu nahoru/dolů) se jmenuje vedlejší poloosa (značíme $b$).",
                  },
                  {
                    heading: "Obsah elipsy",
                    text: "Výpočet obsahu elipsy je překvapivě snadný a velmi se podobá kruhu. U kruhu násobíme poloměr poloměrem ($\\pi \\cdot r \\cdot r$). U elipsy nemáme dva stejné poloměry, ale máme poloosy $a$ a $b$. Místo umocňování jednoho čísla tedy prostě vynásobíme hlavní poloosu vedlejší poloosou a přidáme $\\pi$. Vzoreček pro obsah je: $$ S = \\pi \\cdot a \\cdot b $$ Pokud má elipsa hlavní poloosu dlouhou 5 cm a vedlejší 3 cm, její plocha je $3,14 \\cdot 5 \\cdot 3 = 47,1$ cm².",
                  },
                  {
                    heading: "Záhada obvodu",
                    text: "Tady přichází největší matematický šok! Zatímco obsah je snadný, spočítat přesný obvod elipsy je extrémně složité. Žádný jednoduchý a přesný vzoreček pro základní školy na to neexistuje (vyžaduje to vysokoškolskou matematiku). V běžném životě si ale vystačíme s přibližným odhadem. Nejjednodušší odhad je, že poloosy $a$ a $b$ prostě sečteme a vynásobíme číslem $\\pi$: $$ o \\approx \\pi \\cdot (a + b) $$ Znak $\\approx$ znamená 'přibližně se rovná'. Není to dokonale přesné, ale pro rychlou představu to stačí!",
                  },
                ],
              },
            },
          ],
        },
        {
          title: "Rotační a složitější tělesa",
          lessons: [
            {
              title: "Kužel",
              content: {
                splineUrl:
                  "https://prod.spline.design/niaQ90g0HTHxnQy1/scene.splinecode", // Zde si nahraď 3D modelem kužele
                sections: [
                  {
                    heading: "Kornoutek a čarodějnický klobouk",
                    text: "Kužel je elegantní rotační těleso. Představ si kornoutek na zmrzlinu, dopravní kužel nebo klobouk čaroděje. Vznikne velmi jednoduše: vezmeš pravoúhlý trojúhelník a roztočíš ho kolem jedné jeho odvěsny. Kužel má kruhovou podstavu s poloměrem $r$, jeden hlavní vrchol a výšku $v$. Důležitá je také takzvaná strana kužele (značíme $s$), což je šikmá vzdálenost od okraje podstavy až k samotnému vrcholu.\n\n",
                  },
                  {
                    heading: "Povrch: Dno a plášť",
                    text: "Pokud chceš kužel vyrobit z papíru, potřebuješ vystřihnout kruh (na podstavu) a podivný tvar připomínající kousek pizzy (kruhovou výseč na plášť). Povrch ($S$) je tedy součet obsahu podstavy ($S_p = \\pi \\cdot r^2$) a pláště ($S_{pl} = \\pi \\cdot r \\cdot s$). Spojením vznikne vzoreček: $$ S = \\pi \\cdot r^2 + \\pi \\cdot r \\cdot s $$ Nebo po vytknutí do závorky: $$ S = \\pi \\cdot r \\cdot (r + s) $$ Pokud neznáš šikmou stranu $s$, můžeš si ji vždycky dopočítat pomocí Pythagorovy věty z poloměru a výšky: $s^2 = r^2 + v^2$.",
                  },
                  {
                    heading: "Objem: Opět ta kouzelná třetina",
                    text: "Pamatuješ si na jehlan a kvádr? U kužele a válce funguje úplně stejný matematický zázrak! Pokud máš kužel a válec se stejně velkou podstavou a stejnou výškou, do kužele se vejde přesně třikrát méně vody než do válce. Objem kužele ($V$) je tedy jedna třetina objemu válce: $$ V = \\frac{1}{3} \\cdot \\pi \\cdot r^2 \\cdot v $$\n\n[Image illustrating that a cone's volume is exactly one third of a cylinder's volume with the same base and height]",
                  },
                ],
              },
            },
            {
              title: "Komolý kužel",
              content: {
                splineUrl:
                  "https://prod.spline.design/I8s-KdMOn6kOpe7K/scene.splinecode", // Zde si nahraď 3D modelem komolého kužele
                sections: [
                  {
                    heading: "Uříznutá špička",
                    text: "Zní to složitě, ale komolý kužel vidíš každý den. Je to obyčejný kbelík na vodu, stínidlo lampičky nebo květináč. Jak vznikne? Vezmeš klasický špičatý kužel, vodorovně mu uřízneš vršek a ten zahodíš. To, co zbyde, je komolý kužel. Nemá už žádnou špičku, ale místo ní má **dvě kruhové podstavy**: jednu velkou dole (poloměr $r_1$) a jednu menší nahoře (poloměr $r_2$). Mezi nimi je výška $v$ a na boku šikmá strana $s$.\n\n[Image showing a truncated cone (frustum) with bottom radius r1, top radius r2, height v, and slant height s labeled]",
                  },
                  {
                    heading: "Objem: Kolik vody je v kbelíku?",
                    text: "Protože komolý kužel nemá po celé výšce stejnou šířku (dole je široký, nahoře úzký), je vzoreček pro výpočet jeho objemu trochu delší. Vlastně děláme takový speciální průměr mezi oběma podstavami. Vzoreček pro objem ($V$) vypadá takto: $$ V = \\frac{\\pi \\cdot v}{3} \\cdot (r_1^2 + r_1 \\cdot r_2 + r_2^2) $$ Obsahuje druhou mocninu dolního poloměru, součin obou poloměrů a druhou mocninu horního poloměru. Stačí jen dosadit čísla a opatrně počítat!",
                  },
                  {
                    heading: "Povrch: Dvě víčka a obal",
                    text: "Představ si, že chceš celý kbelík zvenku natřít barvou, a to včetně dna i vrchního krytu. Povrch ($S$) se skládá ze tří částí: spodní podstavy (kruh), horní podstavy (menší kruh) a pláště kolem dokola. Když to všechno sečteme, dostaneme tento vzoreček: $$ S = \\pi \\cdot r_1^2 + \\pi \\cdot r_2^2 + \\pi \\cdot s \\cdot (r_1 + r_2) $$ První dvě části jsou zřejmé (obsahy dvou kruhů), ta třetí zdlouhavější část ($\\pi \\cdot s \\cdot (r_1 + r_2)$) počítá ten šikmý obal.",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    ss: {
      default: [{ title: "Zatím žádné lekce" }],
    },
    vs: {
      default: [{ title: "Zatím žádné lekce" }],
    },
  },
};

export const generateCourseData = (subject, level, subLevel) => {
  // Get subject data or fallback
  const subjectData =
    courseContentDatabase[subject.id] || courseContentDatabase.matematika;

  // Get level data or fallback
  const levelData = subjectData[level.id] || subjectData.zs;

  // Get specific chapters based on sublevel or default
  // If subLevel is provided, try to find it, otherwise use default or '1'
  let chaptersConfig = levelData.default;
  if (subLevel && levelData[subLevel]) {
    chaptersConfig = levelData[subLevel];
  } else if (!chaptersConfig && levelData[1]) {
    chaptersConfig = levelData[1];
  }

  // Fallback if nothing found
  if (!chaptersConfig) {
    chaptersConfig = [
      { title: "Úvod do předmětu", lessons: ["Lekce 1", "Lekce 2", "Lekce 3"] },
      { title: "Pokročilé téma", lessons: ["Lekce 1", "Lekce 2"] },
    ];
  }

  const chapters = chaptersConfig.map((chapterConfig, chapterIdx) => {
    const chapterNum = chapterIdx + 1;

    return {
      id: `ch-${chapterNum}`,
      title: `Kapitola ${chapterNum}: ${chapterConfig.title}`,
      description: `Úvod do problematiky a základní koncepty pro téma ${chapterConfig.title}.`,
      lessons: chapterConfig.lessons.map((lessonItem, lessonIdx) => {
        const lessonNum = lessonIdx + 1;
        const isCompleted = chapterIdx === 0 && lessonIdx < 2; // First 2 lessons completed
        const isUnlocked =
          chapterIdx === 0 || (chapterIdx === 1 && lessonIdx === 0); // First chapter and first lesson of 2nd chapter unlocked

        const title =
          typeof lessonItem === "string" ? lessonItem : lessonItem.title;
        const content =
          typeof lessonItem === "object" ? lessonItem.content : null;

        return {
          id: `l-${chapterNum}-${lessonNum}`,
          title: `${lessonNum}. ${title}`,
          content: content,
          duration: `${10 + lessonIdx * 5} min`,
          type: lessonIdx % 2 === 0 ? "video" : "quiz", // Alternate types
          status: isCompleted
            ? "completed"
            : isUnlocked
              ? "unlocked"
              : "locked",
        };
      }),
    };
  });

  return {
    title: `${subject.title} - ${level.title}${
      subLevel ? ` (${subLevel}. stupeň)` : ""
    }`,
    description: `Komplexní kurz pro ${level.title.toLowerCase()}.`,
    progress: 15, // 15% completed
    chapters,
  };
};
