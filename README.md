# NaucSeVic - Moderní Vzdělávací Platforma

NaucSeVic je moderní vzdělávací platforma zaměřená na poskytování studijních materiálů, fyzikálních simulací a interaktivních geometrických těles s úkoly. Aplikace neobsahuje žádnou vestavěnou umělou inteligenci (AI). Kombinuje moderní React frontend s robustním Firebase backendem pro poskytování obsahu v matematice, fyzice a geometrii.

## Struktura Projektu

Projekt je organizován jako monorepo se dvěma hlavními složkami:

- **`NaucSeVic/` (Frontend)**: Aplikace Vite + React, která obsluhuje uživatelské rozhraní. Řeší směrování (routing), 3D vizualizace, simulace a interakci s uživatelem.
- **`Functions/` (Backend)**: Obsahuje Firebase Cloud Functions a administrativní skripty. Tato vrstva zajišťuje bezpečné operace, databázové triggery a správu dat.

## Klíčové Funkce

- **Interaktivní Předměty**: Komplexní moduly pro Matematiku, Fyziku a Geometrii přizpůsobené pro různé úrovně vzdělávání (ZŠ, SŠ, VŠ).
- **Gamifikace**: Získávejte XP a Coins (mince), odemykejte úspěchy a soutěžte v žebříčcích.
- **Vizuální Učení**:
  - **3D Geometrie**: Interaktivní 3D modely geometrických těles pomocí Spline.
  - **Fyzikální Simulace**: Fyzikální simulace v reálném čase (např. gravitační laboratoře) využívající Matter.js.
- **Sledování Pokroku Uživatele**: Detailní analytika výkonu studenta, denní série (streaks) a zvládnutí dovedností.
- **Boosters & Obchod**: Využití získaných mincí k nákupu boosterů, které urychlují postup.
- **Tmavý/Světlý Režim**: Plně tematické UI přizpůsobující se preferencím uživatele.
- **Podpora Dockeru**: Kontejnerizované vývojové prostředí pro konzistentní nastavení.

## Předměty a Směrování (Routing)

Aplikace používá `react-router-dom` pro navigaci. Předměty jsou dynamicky konfigurovány v `src/config/subjectConfig.js`, což slouží jako jediný zdroj pravdy pro:

- ID předmětů (`matematika`, `fyzika`, atd.)
- Úrovně vzdělání (Základní, Střední, Vysoká škola)
- Ikony, barvy a témata

**Struktura Routingu:**

- `/` - Dashboard / Úvodní stránka
- `/predmet/:subjectId/:levelId` - Konkrétní úroveň předmětu (např. `/predmet/matematika/ss`)
- `/lekce/:lessonId` - Konkrétní výukový modul
- `/profil` - Uživatelský profil a statistiky

## Správa Databáze a Obsahu

### Aktualizace Obsahu Předmětů

Obsah předmětů (například data pro geometrii) je uložen ve Firestore. Pro aktualizaci databáze slouží skripty v `Functions/scripts/`.

**Příklad: Nahrání geometrických dat**

1. Upravte `Functions/scripts/geometryData.json` s novým obsahem.
2. Spusťte nahrávací skript:

```bash
node Functions/scripts/uploadGeometry.js
```

### Vizualizace

- **Geometrie**: Tělesa jsou uložena s metadaty včetně `spline_url` pro 3D modely a `image_url` pro náhledy. Frontend využívá `GeometricBodyCard.jsx` pro jejich vykreslení pomocí Spline Viewer.
- **Simulace**: Fyzikální koncepty jsou demonstrovány pomocí interaktivních komponent (např. `GravitySimulation.jsx`), které vizualizují síly a pohybové zákony.

## Schéma Pokroku Uživatele

Data uživatelů jsou uložena v kolekci `users` ve Firestore. Toto schéma sleduje pokrok a aktivitu studentů.

**Příklad datové struktury:**

```json
{
  // Základní Informace o Profilu
  "profile": {
    "name": "Filip",
    "surname": "Elznic",
    "email": "user@example.com",
    "xp": 35,
    "coins": 15,
    "photoURL": "..."
  },

  // Pokrok v Kurzech (Klíčováno podle subject_level)
  "courseProgress": {
    "geometrie_vs": {
      "progress": 11, // Procento dokončení nebo body
      "completedLessons": 1, // Počet dokončených modulů
      "lastUpdated": "2026-02-24T20:01:22.214Z"
    }
    // ... další předměty jako fyzika_ss, matematika_zs
  },

  // Denní Záznam Aktivity (Log)
  "progress": {
    "2026-02-21": {
      "loginTime": "Timestamp...",
      "xpGained": 20,
      "coinsGained": 10,
      "tasksFinished": 2,
      "chaptersFinished": 0
    }
  },

  // Historie Konkrétních úloh
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

  // Seznam ID Dokončených Lekcí
  "completedLessons": ["geometrie_zs_1_ch1_l2"]
}
```

## Nastavení Dockeru

Pro spuštění celé aplikace (Frontend + Firebase Emulators) lokálně pomocí Dockeru:

1. **Spusťte kontejnery:**

```bash
docker-compose --profile dev up --build
```

2. **Přístup ke službám:**

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- http://localhost:3000

## Instalace (Manuální)

Pokud nechcete použít Docker, můžete prostředí nastavit ručně:

1. **Frontend**:

```bash
cd NaucSeVic
npm install
npm run dev
```

2. **Backend (Functions)**:

```bash
cd Functions/functions
npm install
# Pro nasazení (deploy)
firebase deploy --only functions
```
