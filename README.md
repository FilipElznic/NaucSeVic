# NaucSeVic — Moderní Vzdělávací Platforma

<p align="center">
  <strong>Interaktivní výuková platforma pro matematiku, fyziku a geometrii</strong><br/>
  <em>3D vizualizace · Fyzikální simulace · Gamifikace · Sledování pokroku</em>
</p>

---

## Obsah

- [Přehled](#přehled)
- [Technický Stack](#technický-stack)
- [Architektura Projektu](#architektura-projektu)
- [Klíčové Funkce](#klíčové-funkce)
- [Předměty a Vzdělávací Obsah](#předměty-a-vzdělávací-obsah)
- [Fyzikální Simulace](#fyzikální-simulace)
- [3D Geometrie](#3d-geometrie)
- [Gamifikační Systém](#gamifikační-systém)
- [Systém Autentizace a Uživatelských Účtů](#systém-autentizace-a-uživatelských-účtů)
- [Směrování a Navigace](#směrování-a-navigace)
- [Komponenty Frontendu](#komponenty-frontendu)
- [Backendové Služby (Cloud Functions)](#backendové-služby-cloud-functions)
- [Databázové Schéma (Firestore)](#databázové-schéma-firestore)
- [Správa Obsahu](#správa-obsahu)
- [Zabezpečení](#zabezpečení)
- [Optimalizace Výkonu](#optimalizace-výkonu)
- [Tmavý a Světlý Režim](#tmavý-a-světlý-režim)
- [SEO a Přístupnost](#seo-a-přístupnost)
- [Nastavení Dockeru](#nastavení-dockeru)
- [Manuální Instalace](#manuální-instalace)
- [Proměnné Prostředí](#proměnné-prostředí)
- [Uživatelské Pracovní Postupy](#uživatelské-pracovní-postupy)

---

## Přehled

NaucSeVic je komplexní webová vzdělávací platforma navržená pro studenty na všech úrovních vzdělávání — od základní školy (ZŠ), přes střední školu (SŠ) až po vysokou školu (VŠ). Platforma nabízí studijní materiály z matematiky, fyziky a geometrie obohacené o interaktivní 3D modely, fyzikální simulace v reálném čase a gamifikační prvky jako XP, mince a žebříčky.

Aplikace **neobsahuje žádnou vestavěnou umělou inteligenci (AI)** — veškerý obsah je tvořen ručně a ověřen. Kombinuje moderní React frontend s robustním Firebase backendem a je plně kontejnerizovatelná pomocí Dockeru.

> **Poznámka:** Tento GitHub repozitář je **veřejný** (public). Zdrojový kód je volně dostupný k prohlížení, studiu a nekomerčnímu použití. Jakékoliv komerční využití vyžaduje předchozí písemný souhlas autora — viz sekce [Licence](#licence).

---

## Technický Stack

### Frontend

| Technologie                  | Účel                                                              |
| ---------------------------- | ----------------------------------------------------------------- |
| **React 19**                 | UI framework s nejnovějšími funkcemi (Suspense, lazy loading)     |
| **Vite 7**                   | Rychlý build tool a dev server s HMR                              |
| **Tailwind CSS**             | Utility-first CSS framework pro responzivní design                |
| **Framer Motion**            | Animace komponent a přechodů mezi stránkami                       |
| **GSAP**                     | Pokročilé animace (hero sekce, přihlašovací stránky)              |
| **Three.js**                 | 3D renderování                                                    |
| **@splinetool/react-spline** | Integrace interaktivních 3D modelů ze Spline                      |
| **Matter.js**                | 2D fyzikální engine pro simulace (gravitace, kyvadlo, lom světla) |
| **KaTeX / react-katex**      | Renderování matematických vzorců a rovnic                         |
| **Recharts**                 | Grafy a vizualizace statistik uživatele                           |
| **React Router DOM**         | Směrování a navigace v SPA                                        |
| **React Toastify**           | Systém notifikací (toast zprávy)                                  |
| **Lucide React**             | Ikonová knihovna                                                  |

### Backend

| Technologie                  | Účel                                                 |
| ---------------------------- | ---------------------------------------------------- |
| **Firebase Authentication**  | Přihlášení přes email/heslo + OAuth (Google, GitHub) |
| **Cloud Firestore**          | NoSQL databáze pro uživatelská data, úlohy a obsah   |
| **Firebase Cloud Functions** | Serverless backend logika (region: europe-west1)     |
| **Firebase Storage**         | Ukládání profilových obrázků a mediálních souborů    |
| **Firebase App Check**       | Ochrana API pomocí reCAPTCHA v3                      |
| **Firebase Hosting**         | Produkční hosting s bezpečnostními hlavičkami        |

### DevOps & Tooling

| Technologie                 | Účel                                              |
| --------------------------- | ------------------------------------------------- |
| **Docker & Docker Compose** | Kontejnerizace pro vývojové i produkční prostředí |
| **Nginx**                   | Produkční webový server se zabezpečením           |
| **ESLint**                  | Statická analýza kódu                             |
| **PostCSS**                 | Zpracování CSS (Tailwind)                         |

---

## Architektura Projektu

Projekt je organizován jako **monorepo** se dvěma hlavními složkami:

```
NaucSeVic/                              # Kořenový adresář
├── README.md                           # Tato dokumentace
├── package.json                        # Root skripty (Docker, utility)
│
├── Functions/                          # 🔧 Backend
│   ├── functions/
│   │   ├── index.js                    # Cloud Functions (produkce)
│   │   ├── index.secure.js             # Zabezpečená verze s App Check
│   │   └── package.json                # Závislosti backendu
│   ├── scripts/
│   │   ├── geometryData.json           # Data geometrických těles
│   │   └── uploadGeometry.js           # Skript pro nahrání do Firestore
│   ├── firestore.rules                 # Pravidla zabezpečení Firestore
│   ├── firestore.indexes.json          # Indexy pro dotazy
│   ├── storage.rules                   # Pravidla zabezpečení Storage
│   └── firebase.json                   # Konfigurace Firebase projektu
│
└── NaucSeVic/                          # 🎨 Frontend
    ├── src/
    │   ├── App.jsx                     # Hlavní router a entry point
    │   ├── main.jsx                    # React DOM render
    │   ├── components/                 # Znovupoužitelné komponenty
    │   │   ├── guards/                 # Route guardy (auth, admin, error)
    │   │   ├── layout/                 # Layout komponenty (Navbar, Footer)
    │   │   ├── geometry/               # Komponenty pro geometrii
    │   │   ├── math/                   # Komponenty pro matematiku
    │   │   ├── physics/                # Komponenty pro fyziku
    │   │   ├── lecture/                # Kvízy a výukové komponenty
    │   │   ├── shared/                 # Sdílené (LaTeX renderer aj.)
    │   │   ├── special/                # Speciální mapování komponent
    │   │   └── ui/                     # UI elementy (18+ komponent)
    │   ├── pages/                      # Stránky aplikace
    │   │   ├── auth/                   # Přihlášení a registrace
    │   │   ├── geometry/               # Správa geometrie (admin)
    │   │   ├── math/                   # Stránky matematiky
    │   │   └── physics/                # Stránky fyziky
    │   ├── services/                   # Firebase služby a API
    │   ├── hooks/                      # Custom React hooky
    │   ├── contexts/                   # Globální stav (auth, dark mode)
    │   ├── config/                     # Konfigurace předmětů a Firebase
    │   ├── data/                       # Datové soubory kurzů
    │   └── simulations/                # Fyzikální simulace
    ├── public/                         # Statické soubory
    │   ├── robots.txt                  # SEO konfigurace pro crawlery
    │   └── sitemap.xml                 # Mapa webu
    ├── Dockerfile                      # Produkční build (Node + Nginx)
    ├── Dockerfile.dev                  # Vývojový kontejner (Vite dev server)
    ├── docker-compose.yml              # Orchestrace kontejnerů
    └── nginx.conf                      # Konfigurace Nginx serveru
```

---

## Klíčové Funkce

### Vzdělávací Obsah

- **Tři hlavní předměty**: Matematika, Fyzika a Geometrie
- **Tři úrovně vzdělávání**: Základní škola (ZŠ), Střední škola (SŠ), Vysoká škola (VŠ)
- **Pod-úrovně**: ZŠ nabízí volbu mezi 1. a 2. stupněm
- **Strukturovaný kurikulum**: Kapitoly → Lekce → Sekce → Úlohy
- **Matematické vzorce**: Renderování přes KaTeX s podporou inline (`$...$`) a blokových (`$$...$$`) výrazů

### Interaktivní Simulace

- **Gravitační simulace**: Volný pád s konfigurací restituce a zrychlení (Matter.js)
- **Kyvadlo**: Oscilace s nastavitelnou délkou, úhlem a tlumením
- **Lom světla**: Snellův zákon s interaktivním ovládáním myší na canvasu
- **Fyzikální laboratoř**: Virtuální prostředí pro experimenty

### 3D Vizualizace

- **Geometrická tělesa**: Interaktivní 3D modely (koule, válce, kužely aj.) pomocí Spline
- **Lazy loading**: 3D modely se načítají na vyžádání pro úsporu výkonu
- **Vzorce a popis**: Každé těleso zobrazuje objem, povrch a typ (2D/3D)

### Gamifikace

- **XP systém**: Body zkušeností za dokončené úlohy a lekce
- **Mince (Coins)**: Virtuální měna získávaná paralelně s XP
- **Boostery**: Znásobení XP (2x, 3x) s časovým limitem
- **Žebříček (Leaderboard)**: Top 10 uživatelů podle XP
- **Denní série (Streaks)**: Sledování každodenní aktivity

### Sledování Pokroku

- **Procento dokončení** kurzů s vizuálním progress barem
- **Detailní statistiky**: Grafy XP/mincí v čase (Recharts)
- **Historie úloh**: Záznam každého pokusu s typem, odpovědí a výsledkem
- **Oblíbené kurzy**: Záložky pro rychlý přístup

---

## Předměty a Vzdělávací Obsah

### Konfigurace Předmětů

Všechny předměty jsou definovány v `src/config/subjectConfig.js`, který slouží jako **jediný zdroj pravdy** pro celou aplikaci:

```js
{
  matematika: {
    id: "matematika",
    levels: {
      zs: { name: "Základní škola", subLevels: { 1: "1. stupeň", 2: "2. stupeň" } },
      ss: { name: "Střední škola" },
      vs: { name: "Vysoká škola" }
    },
    icon: "📐",
    colors: { ... },
    description: "..."
  },
  fyzika: { ... },
  geometrie: { ... }
}
```

### Datové Soubory Kurzů

Obsahy kurzů jsou uloženy v `src/data/` a mapovány přes `src/config/courseContent.js`:

| Soubor              | Předmět    | Úroveň              |
| ------------------- | ---------- | ------------------- |
| `mathZS.js`         | Matematika | ZŠ (1. a 2. stupeň) |
| `mathSS.js`         | Matematika | SŠ                  |
| `mathVS.js`         | Matematika | VŠ                  |
| `physicsZS.js`      | Fyzika     | ZŠ                  |
| `physicsSS.js`      | Fyzika     | SŠ                  |
| `physicsVS.js`      | Fyzika     | VŠ                  |
| `geometryData.json` | Geometrie  | Všechny úrovně      |

### Struktura Výukového Obsahu

Každý kurz se skládá z hierarchie **Kapitola → Lekce → Sekce/Úlohy**:

```js
{
  title: "Název kapitoly",
  lessons: [
    {
      title: "Název lekce",
      content: {
        sections: [
          {
            heading: "Nadpis sekce",
            text: "Výkladový text s podporou $KaTeX$ vzorců...",
            image: "url_obrázku"       // Volitelné
          }
        ],
        tasks: [
          {
            id: "unique_task_id",
            question: "Otázka",
            type: "multipleChoice",     // nebo "textInput", "sequence"
            options: ["A", "B", "C", "D"],
            correctAnswer: 1,           // Index správné odpovědi
            xp: 10                      // Body za správnou odpověď
          }
        ]
      }
    }
  ]
}
```

**Podporované typy úloh:**

| Typ              | Popis                                              |
| ---------------- | -------------------------------------------------- |
| `multipleChoice` | Výběr jedné správné odpovědi z nabízených možností |
| `textInput`      | Zadání odpovědi do textového pole                  |
| `sequence`       | Seřazení prvků do správného pořadí (drag & drop)   |

---

## Fyzikální Simulace

Simulace se nachází ve složce `src/simulations/` a jsou přístupné přes stránku `/simulace`. Každá simulace běží v modálním okně s interaktivním panelem vlevo a vzdělávacím obsahem vpravo.

### Gravitační Simulace (`GravitySimulation.jsx` + `FallingBall.jsx`)

- **Fyzikální koncept**: Volný pád, gravitační zrychlení
- **Implementace**: Matter.js fyzikální engine s konfigurovatelnou restitucí (odrazivostí)
- **Interakce**: Míč padá pod vlivem gravitace a odráží se od podlahy
- **Vzdělávací panel**: Vysvětlení gravitační síly, zrychlení $g = 9{,}81\,\text{m/s}^2$

### Kyvadlo (`PendulumSimulation.jsx` + `Pendulum.jsx`)

- **Fyzikální koncept**: Harmonický pohyb, oscilace, perioda kyvadla
- **Implementace**: Matter.js rigid body dynamika
- **Konfigurace**: Nastavitelná délka závěsu, počáteční úhel, tlumení
- **Vzdělávací panel**: Vztah mezi délkou kyvadla a periodou

### Lom Světla (`LightSimulation.jsx` + `LightRay.jsx`)

- **Fyzikální koncept**: Refrakce, Snellův zákon
- **Implementace**: Canvas 2D kreslení s interaktivním ovládáním směru paprsku myší
- **Interakce**: Uživatel mění úhel dopadu a pozoruje změnu lomu
- **Vzdělávací panel**: Index lomu, přechod mezi prostředími

### Fyzikální Laboratoř (`PhysicsLab.jsx`)

- **Účel**: Přehledový vstupní bod pro všechny simulace
- **Obsah**: Informační karta s navigací na konkrétní simulace

---

## 3D Geometrie

### Interaktivní Modely

Geometrická tělesa jsou uložena ve Firestore v kolekci `/geometricBodies`. Každé těleso obsahuje:

```json
{
  "name": "Koule",
  "description": "Koule je geometrické těleso...",
  "type": "3d",
  "spline_url": "https://prod.spline.design/...",
  "image_url": "https://firebasestorage.../image.png",
  "formulas": {
    "volume": "\\frac{4}{3}\\pi r^3",
    "surface": "4\\pi r^2"
  }
}
```

### Zobrazení

Komponenta `GeometricBodyCard.jsx` vykresluje každé těleso jako kartu s:

- **3D Spline model** — interaktivní, otáčitelný model (lazy-loaded)
- **Náhledový obrázek** — zobrazený před načtením 3D modelu
- **Vzorce** — objem a povrch renderované přes KaTeX
- **Popis** — textový popis tělesa
- **Typ** — odlišení 2D a 3D těles

### Správa (Admin)

Administrátor může spravovat geometrická tělesa přes stránku `/admin/tasks` (`AdminGeometryManager.jsx`), která je chráněna `AdminRoute` guardem.

---

## Gamifikační Systém

### XP (Body Zkušeností)

- Uživatel získává XP za **správné odpovědi** na úlohy v lekcích i ve volných úlohách
- Každá úloha má předdefinovanou hodnotu XP (typicky 10–25 bodů)
- XP jsou ukládány v `userProfile.profile.xp`

### Mince (Coins)

- Získávány společně s XP jako odměna za dokončené aktivity
- Mohou být využity k nákupu **boosterů** v obchodu
- Ukládány v `userProfile.profile.coins`

### Boostery

- **XP Multiplikátor**: 2x nebo 3x násobek získaného XP po omezenou dobu
- Sledovány v `userProfile.activeBoosts.xp` s atributy `multiplier` a `endsAt`
- Zobrazeny v UI při řešení úloh a na dashboardu

### Žebříček (Leaderboard)

- Top 10 uživatelů seřazených podle celkového XP
- Načítán přes Cloud Function `getLeaderboard()`
- Zobrazený na uživatelském dashboardu

### Denní Série (Streaks)

- Sledování **každodenní aktivity** uživatele
- Záznam v `userProfile.progress[datum]` obsahuje:
  - `loginTime` — čas přihlášení
  - `xpGained` — získané XP za den
  - `coinsGained` — získané mince za den
  - `tasksFinished` — počet dokončených úloh
  - `chaptersFinished` — počet dokončených kapitol

---

## Systém Autentizace a Uživatelských Účtů

### Metody Přihlášení

| Metoda           | Popis                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------- |
| **Email/Heslo**  | Klasická registrace s validací síly hesla (min. 6 znaků, velké/malé písmeno, číslice) |
| **Google OAuth** | Přihlášení přes Google účet                                                           |
| **GitHub OAuth** | Přihlášení přes GitHub účet                                                           |

### Registrace Nového Uživatele

1. Uživatel vyplní formulář (jméno, příjmení, email, heslo)
2. Musí souhlasit s podmínkami služby
3. Po odeslání se volá `cloudFunctionsService.initializeUserProfile()`, která vytvoří profil v Firestore
4. Přesměrování na dashboard

### Obnova Hesla

- Dostupná na přihlašovací stránce
- Odeslání resetovacího emailu přes Firebase Auth

### Ochrana Stránek

Aplikace využívá tři úrovně ochrany:

| Guard            | Účel                                                                                                      |
| ---------------- | --------------------------------------------------------------------------------------------------------- |
| `ProtectedRoute` | Vyžaduje přihlášení — nepřihlášení uživatelé jsou přesměrováni na `/prihlaseni` s uchováním původní cesty |
| `AdminRoute`     | Vyžaduje admin roli (custom claim) — zobrazuje „Přístup zamítnut" pro běžné uživatele                     |
| `ErrorBoundary`  | Zachycení runtime chyb s možností opakování a detailním zobrazením v dev režimu                           |

---

## Směrování a Navigace

Aplikace používá `react-router-dom` s **lazy-loadingem** všech stránek přes `React.lazy()` a `Suspense`. Stránky jsou předem načítány (preload) během autentizačního kontrolního cyklu.

### Kompletní Mapa Rout

| Cesta                                                         | Komponent                       | Ochrana          | Popis                                                      |
| ------------------------------------------------------------- | ------------------------------- | ---------------- | ---------------------------------------------------------- |
| `/`                                                           | `LandingPage` / `UserDashboard` | —                | Veřejná stránka pro nepřihlášené, dashboard pro přihlášené |
| `/prihlaseni`                                                 | `ModernLogin`                   | Veřejná          | Přihlašovací stránka                                       |
| `/registrace`                                                 | `ModernRegister`                | Veřejná          | Registrační stránka                                        |
| `/predmety`                                                   | `UniversalSubjectLayout`        | —                | Výběr předmětu a úrovně                                    |
| `/kurz/:subjectId/:levelId/:subLevelId/:chapterId/:lectureId` | `LecturePage`                   | `ProtectedRoute` | Konkrétní lekce s obsahem a kvízy                          |
| `/vsechny-ukoly`                                              | `AllTasks`                      | `ProtectedRoute` | Seznam úloh s filtrováním                                  |
| `/profil`                                                     | `ProfilePage`                   | `ProtectedRoute` | Úprava profilu a nahrání fotky                             |
| `/statistiky`                                                 | `StatisticsPage`                | `ProtectedRoute` | Statistiky a grafy pokroku                                 |
| `/simulace`                                                   | `SimulationsPage`               | `ProtectedRoute` | Fyzikální simulace                                         |
| `/geometricka-telesa`                                         | `GeometrySimulationsPage`       | `ProtectedRoute` | 3D geometrická tělesa                                      |
| `/admin/tasks`                                                | `AdminGeometryManager`          | `AdminRoute`     | Správa úloh a geometrie                                    |
| `/o-nas`                                                      | `AboutPage`                     | —                | O platformě                                                |
| `/kontakt`                                                    | `ContactPage`                   | —                | Kontaktní informace                                        |
| `/podminky`                                                   | `TermsPage`                     | —                | Podmínky služby                                            |
| `/ochrana-soukromi`                                           | `PrivacyPage`                   | —                | Zásady ochrany soukromí                                    |
| `*`                                                           | `NotFound`                      | —                | 404 stránka                                                |

---

## Komponenty Frontendu

### UI Komponenty (`src/components/ui/`)

Kompletní sada 18+ UI komponent tvořících vizuální identitu platformy:

| Komponenta               | Funkce                                                                                                                           |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| **Navbar**               | Sticky navigace s detekce posunu, přepínáním dark mode, rozbalovacím menu předmětů, uživatelským menu (profil, odhlášení, admin) |
| **Footer**               | Patička s quick linky, kontaktem a právními informacemi                                                                          |
| **ModernHeroSection**    | Hero sekce úvodní stránky s CTA tlačítky a mouse-tracking efektem. LaserFlow WebGL animace                                       |
| **FeatureSection**       | Prezentace funkcí platformy (výukové materiály, sledování pokroku, interaktivní úlohy)                                           |
| **StatsSection**         | Statistiky platformy (počet uživatelů, lekcí, udělených XP)                                                                      |
| **TestimonialSection**   | Hodnocení studentů a reference                                                                                                   |
| **PricingSection**       | Cenové plány a předplatné                                                                                                        |
| **UserDashboardUI**      | Hlavní dashboard s aktuálními statistikami, kartami kurzů, žebříčkem, spotlight a particle efekty                                |
| **SplineViewer**         | Wrapper pro `@splinetool/react-spline` zobrazující 3D modely                                                                     |
| **DashboardEffects**     | Spotlight, particles a glow efekty pro dashboard                                                                                 |
| **LaserFlow**            | WebGL animace laserového efektu                                                                                                  |
| **StarBorder**           | Animované tlačítko s pohyblivým okrajem                                                                                          |
| **CardLanding**          | Animované karty pro landing page                                                                                                 |
| **SectionSeparator**     | Vizuální oddělovač sekcí                                                                                                         |
| **LoadingSpinner**       | Animovaný spinner (velikosti: sm, md, lg, xl)                                                                                    |
| **FyzikaBackground**     | Tematické pozadí pro fyziku                                                                                                      |
| **ThemedToastContainer** | Toast notifikace respektující dark/light mode                                                                                    |

### Layout Komponenty (`src/components/layout/`)

| Komponenta                 | Funkce                                                                                                                |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Layout**                 | Wrapper: `<Navbar> <main>{children}</main> <Footer>` s volitelným zobrazením navbar/footer                            |
| **UniversalSubjectLayout** | Data-driven router pro výběr předmětu → úrovně → obsahu. Podporuje pod-úrovně (1./2. stupeň). Memoizuje konfigurace   |
| **UniversalCoursePage**    | Vykresluje osnovu kurzu s rozbalovacími kapitolami/lekcemi, progress barem, oblíbenými kurzy a tlačítkem „Začít kurz" |

### Sdílené Komponenty (`src/components/shared/`)

| Komponenta           | Funkce                                                                                 |
| -------------------- | -------------------------------------------------------------------------------------- |
| **LatexRenderer**    | Parsuje a renderuje KaTeX vzorce — podporuje inline `$...$` i blokové `$$...$$` výrazy |
| **SubjectSelection** | Mřížka karet předmětů s logikou výběru úrovně                                          |

### Speciální Komponenty (`src/components/special/`)

| Komponenta               | Funkce                                                                                          |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| **BackgroundMap**        | Mapuje ID předmětů na komponenty pozadí s fallback na výchozí mřížku                            |
| **SpecialComponentsMap** | Mapuje kombinace předmět_úroveň na speciální komponenty (např. `fyzika_zs → GravitySimulation`) |

### Další Komponenty

| Komponenta             | Funkce                                                                                                                                                                      |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **CharacterAssistant** | Animovaný průvodce s efektem psaní textu. Portal-based pro zobrazení nad vším obsahem. Ukazuje tutoriály a nápovědu                                                         |
| **SEO**                | Dynamicky nastavuje `document.title` a meta description stránky                                                                                                             |
| **TaskCreator**        | Admin panel pro vytváření jednotlivých úloh nebo hromadný import z JSON. Formulářový builder s nastavením typu, obtížnosti, předmětu a XP                                   |
| **QuizComponent**      | UI pro kvízy v lekcích. Podpora multiple-choice, textového vstupu a řazení sekvencí. Navigace mezi úlohami, odeslání přes Cloud Function, zobrazení výsledku a získaných XP |

---

## Backendové Služby (Cloud Functions)

Cloud Functions běží v regionu **europe-west1** (Belgie) s limitem max. 10 instancí a integrovaným rate limitingem.

### Exportované Funkce

| Funkce                  | Typ         | Popis                                                                                                     |
| ----------------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `api`                   | `onRequest` | REST endpoint — GET pro zdravotní kontrolu, POST pro echo službu. CORS, validace velikosti a content-type |
| `createUserProfile`     | `onCall`    | Vytvoření profilu v `/users/{userId}`. Rate limit: 3 volání / 5 minut. Vstupy: jméno, příjmení            |
| `initializeUserProfile` | `onCall`    | Inicializace kompletního profilu po registraci                                                            |
| `getTasks`              | `onCall`    | Načtení úloh s filtrováním podle předmětu, obtížnosti a typu                                              |
| `submitTaskAnswer`      | `onCall`    | Odeslání odpovědi na úlohu — validace, udělení XP/mincí, zápis do historie                                |
| `setAdminRole`          | `onCall`    | Nastavení admin custom claim (pouze pro existující adminy)                                                |
| `createEducationalTask` | `onCall`    | Admin: vytvoření nové vzdělávací úlohy                                                                    |
| `getLeaderboard`        | `onCall`    | Načtení žebříčku top uživatelů podle XP                                                                   |
| `updateUserProfile`     | `onCall`    | Aktualizace uživatelského profilu                                                                         |
| `seedGeometryData`      | `onCall`    | Nahrání geometrických dat do Firestore (admin)                                                            |

### Služby na Frontendu (`src/services/`)

| Služba                 | Účel                                                                                                                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **userService.js**     | CRUD operace s uživatelským profilem, 10sekundový cache. Metody: `getUserProfile()`, `ensureProfileExists()`, `updateProfile()`, `updateCourseProgress()`, `toggleFavoriteCourse()` |
| **cloudFunctions.js**  | Wrapper pro Cloud Functions s vestavěným cachováním a deduplikací souběžných požadavků                                                                                              |
| **geometryService.js** | Načtení geometrických těles z Firestore s 5minutovým cache                                                                                                                          |
| **storageService.js**  | Upload profilového obrázku do Firebase Storage. Validace typu (JPEG, PNG, WebP, GIF) a velikosti (<5 MB)                                                                            |

### Custom Hooky (`src/hooks/`)

| Hook                                          | Vrací                                                                | Popis                                                                                  |
| --------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `useAdminCheck()`                             | `{ isAdmin, loading, error }`                                        | Kontrola admin custom claimu s 5minutovým cache                                        |
| `useCourseData(subjectId, levelId, subLevel)` | `{ courseData, loading, error }`                                     | Získání obsahu kurzu přes Cloud Function s 5minutovým cache a deduplikací              |
| `useUserProfile()`                            | `{ userProfile, loading, refreshProfile, xp, coins, userName, pic }` | Uživatelský profil s odvozenými daty, inicializace z cache pro prevenci loading flashe |

---

## Databázové Schéma (Firestore)

### Kolekce `/users/{uid}`

```json
{
  "profile": {
    "name": "Filip",
    "surname": "Elznic",
    "email": "user@example.com",
    "xp": 350,
    "coins": 150,
    "photoURL": "https://..."
  },

  "courseProgress": {
    "matematika_ss": {
      "progress": 45,
      "completedLessons": 12,
      "lastUpdated": "2026-03-12T..."
    }
  },

  "completedTasks": {
    "taskId123": {
      "type": "multipleChoice",
      "userAnswer": "4",
      "isCorrect": true,
      "xpEarned": 10,
      "taskRef": "/tasks/taskId123",
      "attemptedAt": "Timestamp..."
    }
  },

  "progress": {
    "2026-03-12": {
      "loginTime": "2026-03-12T08:30:00Z",
      "xpGained": 50,
      "coinsGained": 25,
      "tasksFinished": 3,
      "chaptersFinished": 0
    }
  },

  "completedLessons": ["geometrie_zs_1_ch1_l2", "matematika_ss_ch2_l1"],
  "favoriteCourses": ["matematika_ss", "fyzika_vs"],

  "activeBoosts": {
    "xp": {
      "multiplier": 2,
      "endsAt": "2026-03-13T08:30:00Z"
    }
  }
}
```

### Kolekce `/tasks/{taskId}`

```json
{
  "name": "Název úlohy",
  "description": "Popis úlohy...",
  "subject": "Matematika",
  "difficulty": "zakladni_2",
  "type": "multipleChoice",
  "xp": 15,
  "options": ["A", "B", "C", "D"],
  "correctAnswer": 1,
  "explanation": "Vysvětlení správné odpovědi..."
}
```

### Kolekce `/geometricBodies/{bodyId}`

```json
{
  "name": "Koule",
  "description": "Koule je geometrické těleso tvořené...",
  "type": "3d",
  "spline_url": "https://prod.spline.design/...",
  "image_url": "https://firebasestorage.../image.png",
  "formulas": {
    "volume": "\\frac{4}{3}\\pi r^3",
    "surface": "4\\pi r^2"
  }
}
```

### Další Kolekce

| Kolekce                     | Obsah                           |
| --------------------------- | ------------------------------- |
| `/progress/{userId}`        | Denní záznamy aktivity (mirror) |
| `/taskAttempts/{attemptId}` | Historie pokusů o úlohy         |
| `/adminData/**`             | Interní administrátorská data   |

---

## Správa Obsahu

### Aktualizace Obsahu Předmětů

Obsah kurzů (matematika, fyzika) je definován přímo v datových souborech (`src/data/math*.js`, `src/data/physics*.js`). Pro aktualizaci:

1. Upravte příslušný datový soubor
2. Přestavte frontend (`npm run build`)
3. Nasaďte novou verzi

### Aktualizace Geometrických Dat

Geometrická tělesa jsou uložena ve Firestore a spravována přes skripty:

1. Upravte `Functions/scripts/geometryData.json` s novým obsahem
2. Spusťte nahrávací skript:

```bash
node Functions/scripts/uploadGeometry.js
```

Případně lze data spravovat přes admin rozhraní na stránce `/admin/tasks`.

### Vytváření Úloh

Administrátor může vytvářet úlohy dvěma způsoby:

1. **Jednotlivě** — přes formulář v `TaskCreator` komponentě
2. **Hromadně** — importem JSON souboru s polem úloh

---

## Zabezpečení

### Firestore Security Rules

```
users/{userId}       — Čtení/zápis pouze vlastník; admin má plný přístup
tasks/{taskId}       — Čtení pro přihlášené; CRUD pouze admin
progress/{userId}    — Přístup pouze vlastník nebo admin
taskAttempts/{id}    — Čtení vlastních pokusů; vytváření přihlášeným; správa admin
adminData/**         — Pouze admin
```

### HTTP Bezpečnostní Hlavičky (Firebase Hosting)

| Hlavička                    | Hodnota                                        |
| --------------------------- | ---------------------------------------------- |
| `X-Frame-Options`           | `SAMEORIGIN`                                   |
| `X-Content-Type-Options`    | `nosniff`                                      |
| `Referrer-Policy`           | `strict-origin-when-cross-origin`              |
| `Permissions-Policy`        | Zamítá kameru, mikrofon, geolokaci             |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |

### Cloud Functions Zabezpečení

- **Rate limiting**: Omezení počtu volání (např. 3 volání / 5 minut pro `createUserProfile`)
- **App Check**: Volitelná ochrana API přes reCAPTCHA v3
- **CORS**: Povoleny pouze specifické origin
- **Validace vstupů**: Kontrola velikosti požadavku a content-type
- **Admin custom claims**: Ověření admin oprávnění přes Firebase Auth custom claims

---

## Optimalizace Výkonu

### Cachování

| Služba            | TTL       | Popis                          |
| ----------------- | --------- | ------------------------------ |
| `userService`     | 10 sekund | Cache uživatelského profilu    |
| `cloudFunctions`  | 5 minut   | Cache odpovědí Cloud Functions |
| `geometryService` | 5 minut   | Cache geometrických dat        |
| `useAdminCheck`   | 5 minut   | Cache admin kontroly           |
| `useCourseData`   | 5 minut   | Cache obsahu kurzů             |

### Deduplikace Požadavků

Všechny služby implementují **deduplikaci souběžných požadavků** — pokud je stejný požadavek již v letu, nový volající obdrží výsledek prvního místo vytvoření duplicitního.

### Code Splitting

Vite automaticky rozděluje build do optimalizovaných chunks:

- **Vendor chunks**: Three.js, Firebase SDK, Recharts, KaTeX (odděleny od aplikačního kódu)
- **Route-based splits**: Každá stránka se načítá jako samostatný chunk přes `React.lazy()`
- **Preloading**: Dashboard se předem načítá během auth kontroly

### Lazy Loading

- **3D modely** (Spline) se načítají až při zobrazení karty
- **Obrázky** využívají nativní lazy loading
- **Simulace** jsou wrappovány v `Suspense` s fallback spinnerem

### Memoizace

- `useMemo` pro drahé výpočty (konfigurace předmětů, filtrované seznamy)
- Debouncing zápisů do Firebase (1 sekunda) při aktualizaci pokroku

---

## Tmavý a Světlý Režim

- Přepínač v navigační liště
- Preference ukládána do `localStorage`
- Implementace přes `DarkModeContext` — přidání třídy `dark` na `<html>` element
- Tailwind CSS `dark:` varianty pro všechny komponenty
- Toast notifikace (`ThemedToastContainer`) automaticky respektují aktuální režim

---

## SEO a Přístupnost

### SEO

- **Dynamické meta tagy**: Komponenta `SEO.jsx` nastavuje `document.title` a meta description pro každou stránku
- **robots.txt**: Konfigurace pro vyhledávací roboty
- **sitemap.xml**: Mapa webu pro indexaci

### Přístupnost (A11y)

- Správa fokusu v modálních oknech
- Sémantické HTML elementy
- ARIA labely na interaktivních prvcích
- Klávesová navigace (ESC pro zavření modálů, Tab pro přepínání fokusu)
- Responzivní design optimalizovaný pro mobilní zařízení

### Responzivní Design

Tailwind CSS mobile-first přístup s breakpointy:

| Breakpoint | Šířka  |
| ---------- | ------ |
| `sm`       | 640px  |
| `md`       | 768px  |
| `lg`       | 1024px |
| `xl`       | 1280px |
| `2xl`      | 1536px |

Speciální mobilní úpravy pro hero sekci, navigaci a simulace (detekce `isMobile` stavu).

---

## Nastavení Dockeru

### Kontejnery

Aplikace nabízí tři Docker profily orchestrované přes `docker-compose.yml`:

| Služba               | Port             | Popis                                              |
| -------------------- | ---------------- | -------------------------------------------------- |
| `nauc-se-vic`        | 3000             | Produkční build (Node → Nginx Alpine)              |
| `nauc-se-vic-dev`    | 5173             | Vývojový server (Vite s HMR a volume mounts)       |
| `firebase-emulators` | 5001, 8080, 9199 | Firebase emulátory (Functions, Firestore, Storage) |

### Spuštění

**Produkční build:**

```bash
docker-compose up --build
```

**Vývojový režim s emulátory:**

```bash
docker-compose --profile dev up --build
```

### NPM Skripty pro Docker

```bash
npm run docker:build          # Sestavení produkčního image
npm run docker:run            # Spuštění produkčního kontejneru
npm run docker:compose        # Docker Compose produkce
npm run docker:compose-dev    # Docker Compose vývoj + emulátory
```

### Produkční Dockerfile

Dvoustupňový build:

1. **Build stage**: Node 22 Alpine → `npm ci` + `npm run build`
2. **Production stage**: Nginx Alpine → servírování `dist/` s bezpečnostními hlavičkami

---

## Manuální Instalace

### Požadavky

- **Node.js** ≥ 22
- **npm** ≥ 10
- **Firebase CLI** (pro nasazení Cloud Functions)

### Frontend

```bash
cd NaucSeVic
npm install
npm run dev
```

Frontend bude dostupný na [http://localhost:5173](http://localhost:5173).

### Backend (Cloud Functions)

```bash
cd Functions/functions
npm install

# Lokální testování s emulátory
firebase emulators:start

# Nasazení do produkce
firebase deploy --only functions
```

### Nasazení Hostingu

```bash
cd NaucSeVic
npm run build
firebase deploy --only hosting
```

---

## Proměnné Prostředí

Vytvořte soubor `.env` v adresáři `NaucSeVic/`:

```env
# Firebase konfigurace
VITE_API_KEY=<Firebase API klíč>
VITE_AUTH_DOMAIN=naucsevic.firebaseapp.com
VITE_PROJECT_ID=naucsevic
VITE_STORAGE_BUCKET=naucsevic.appspot.com
VITE_MESSAGING_SENDER_ID=<Sender ID>
VITE_APP_ID=<App ID>
VITE_MEASUREMENT_ID=<Measurement ID>

# App Check (volitelné)
VITE_ENABLE_APPCHECK=false
VITE_APPCHECK_PROVIDER=v3
VITE_RECAPTCHA_SITE_KEY=<reCAPTCHA v3 klíč>

# Emulátory (pro lokální vývoj)
VITE_USE_EMULATOR=false
```

---

## Uživatelské Pracovní Postupy

### Registrace a Přihlášení

1. Přejděte na `/registrace`
2. Vyplňte formulář (jméno, příjmení, email, heslo — min. 6 znaků s velkým/malým písmenem a číslicí)
3. Potvrďte souhlas s podmínkami
4. Po registraci je automaticky vytvořen profil ve Firestore a uživatel přesměrován na dashboard

### Studijní Postup

1. Přejděte na `/predmety` → vyberte předmět (Matematika / Fyzika / Geometrie)
2. Vyberte úroveň vzdělání (ZŠ / SŠ / VŠ), případně pod-úroveň (1. nebo 2. stupeň)
3. Zobrazí se osnova kurzu s kapitolami a lekcemi
4. Klikněte na „Začít kurz" nebo konkrétní lekci → navigace na `/kurz/...`
5. Čtěte výukový obsah (sekce s obrázky a KaTeX vzorci)
6. Dokončete kvíz (multiple-choice, textový vstup nebo řazení)
7. Po odeslání obdržíte XP a mince
8. Pokrok se automaticky ukládá

### Interaktivní Simulace

1. Přejděte na `/simulace`
2. Vyberte simulaci (Gravitace, Světlo, Kyvadlo, Laboratoř)
3. Klikněte „Spustit simulaci" → otevře se modální okno
4. Interagujte se simulací (přetahování, nastavení parametrů)
5. Čtěte vzdělávací obsah na pravém panelu
6. Animovaný průvodce (CharacterAssistant) nabídne nápovědu

### Profil a Statistiky

1. `/profil` → úprava jména, emailu, nahrání profilového obrázku
2. `/statistiky` → grafy XP/mincí v čase, dokončené lekce, aktivní série
3. Dashboard → žebříček top 10 uživatelů, karty kurzů s pokrokem

---

## Licence

Tento projekt je licencován pod vlastní licencí **CC BY-NC 4.0 s dodatkem o komerčním použití**.

### Povoleno (bez souhlasu autora):

- Prohlížení a studium zdrojového kódu
- Použití pro osobní, vzdělávací a nekomerční účely
- Forkování a úpravy pro nekomerční využití
- Sdílení s uvedením původního autora

### Vyžaduje písemný souhlas autora:

- **Jakékoliv komerční použití** — prodej, monetizace, nasazení v komerčním produktu
- Použití v placených službách nebo produktech
- Distribuce jako součást komerčního softwaru
- Poskytování jako placená služba (SaaS)

### Kontakt pro komerční licence

Pro získání souhlasu ke komerčnímu využití kontaktujte autora:

- **Autor**: Filip Elznic
- **Email**: elznicfilip@gmail.com
- **GitHub**: [FilipElznic](https://github.com/FilipElznic)

Úplné znění licence naleznete v souboru [LICENSE](LICENSE).

---

© 2026 Filip Elznic. Všechna práva vyhrazena pro komerční použití.
