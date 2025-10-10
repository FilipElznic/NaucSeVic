# Admin Systém - Kompletní Dokumentace

## Přehled

Aplikace NaucSeVic má implementovaný robustní admin systém založený na Firebase Auth Custom Claims s kompletní bezpečnostní ochranou na frontend i backend.

## Architektura Admin Systému

### 1. Backend (Firebase Cloud Functions)

- **Admin Claims**: Firebase Custom Claims pro označení admin uživatelů
- **Bezpečnostní validace**: Všechny admin operace jsou ověřeny na backend
- **Rate Limiting**: Ochrana proti zneužití admin funkcí
- **Audit Log**: Logování všech admin akcí

### 2. Frontend (React)

- **useAdminCheck Hook**: Real-time kontrola admin oprávnění
- **AdminRoute Component**: Ochrana admin routes
- **Admin UI Komponenty**: Speciální rozhraní pro adminy
- **Automatické aktualizace**: Okamžité projevení admin změn

## Komponenty Admin Systému

### Backend Funkce

#### `isAdmin()` - Helper funkce

```javascript
// Functions/functions/index.js
async function isAdmin(uid) {
  const userRecord = await admin.auth().getUser(uid);
  return userRecord.customClaims?.admin === true;
}
```

#### `setAdminRole()` - Udělení admin práv

```javascript
exports.setAdminRole = onCall(
  {
    region: "us-central1",
  },
  async (request) => {
    // Ověření: pouze admin může udělovat admin práva
    // Rate limiting + validace vstupu
    // Nastavení custom claims
  }
);
```

#### `createEducationalTask()` - Vytváření úloh

```javascript
exports.createEducationalTask = onCall(
  {
    region: "us-central1",
  },
  async (request) => {
    // Ověření admin oprávnění
    // Validace úlohy
    // Uložení do databáze
  }
);
```

### Frontend Komponenty

#### `useAdminCheck.js` - Hook pro admin kontrolu

```javascript
// src/hooks/useAdminCheck.js
export const useAdminCheck = () => {
  // Real-time sledování admin statusu
  // Automatické aktualizace při změnách
  // Handling loading stavů
};
```

#### `AdminRoute.jsx` - Ochrana admin routes

```javascript
// src/components/AdminRoute.jsx
const AdminRoute = ({ children }) => {
  // Kontrola admin oprávnění
  // Redirect při nedostatečných právech
  // Loading state handling
};
```

#### `AdminManagement.jsx` - Správa adminů

```javascript
// src/components/AdminManagement.jsx
const AdminManagement = () => {
  // UI pro udělování admin práv
  // Seznam existujících adminů
  // Bezpečnostní pokyny
};
```

#### `TaskCreator.jsx` - Vytváření úloh

```javascript
// src/components/TaskCreator.jsx
const TaskCreator = () => {
  // Form pro vytváření úloh
  // Admin indikátory
  // Validace vstupu
};
```

## Nastavení Prvního Admina

### Pomocí Scriptu (Doporučeno)

```bash
cd Functions
node setFirstAdmin.js admin@example.com
```

### Manuálně přes Firebase Console

1. Otevřete Firebase Console
2. Jděte do Authentication > Users
3. Najděte uživatele a zkopírujte jeho UID
4. Použijte Firebase CLI:

```bash
firebase functions:shell
admin.auth().setCustomUserClaims('USER_UID', { admin: true })
```

## Bezpečnostní Funkce

### 1. Multi-vrstvá Ochrana

- **Frontend**: AdminRoute komponenta
- **Backend**: Validace admin claims v každé funkci
- **Real-time**: Okamžité odebrání přístupu při změně oprávnění

### 2. Rate Limiting

```javascript
// Ochrana proti DDOS útokům
const rateLimiter = {
  maxRequests: 10,
  timeWindow: 60000, // 1 minuta
};
```

### 3. Input Validace

```javascript
// Validace všech vstupních dat
if (!data.title || data.title.length > 200) {
  throw new functions.https.HttpsError("invalid-argument", "Invalid title");
}
```

### 4. Audit Logging

```javascript
// Logování všech admin akcí
console.log(`Admin action: ${action} by user: ${context.auth.uid}`);
```

## Admin Funkce

### 1. Vytváření Úloh

- **Přístup**: `/create-task` (pouze pro adminy)
- **Funkce**: Vytváření vzdělávacích úloh všech typů
- **Validace**: Backend ověření všech dat

### 2. Správa Adminů

- **Přístup**: `/admin` (pouze pro adminy)
- **Funkce**: Udělování admin oprávnění dalším uživatelům
- **Bezpečnost**: Pouze existující admin může vytvořit dalšího

### 3. Dashboard Analytics

- **Přístup**: `/dashboard` s admin rozšířeními
- **Funkce**: Statistiky, uživatelé, výkonnost
- **Data**: Real-time metriky systému

## Routování

```javascript
// App.jsx - Admin routes
<Route path="/create-task" element={
  <ProtectedRoute>
    <AdminRoute>
      <Layout><TaskCreator /></Layout>
    </AdminRoute>
  </ProtectedRoute>
} />

<Route path="/admin" element={
  <ProtectedRoute>
    <AdminRoute>
      <Layout><AdminManagement /></Layout>
    </AdminRoute>
  </ProtectedRoute>
} />
```

## Navbar Integrace

```javascript
// Navbar.jsx - Admin odkazy
{
  isAdmin && (
    <>
      <Link to="/create-task">
        <Plus /> Vytvořit úkol
      </Link>
      <Link to="/admin">
        <Shield /> Admin
      </Link>
    </>
  );
}

// Admin badge v user info
{
  isAdmin && (
    <Shield className="h-3 w-3 text-yellow-500" title="Administrátor" />
  );
}
```

## API Endpointy

### Cloud Functions URL

```
https://api-u5phmhmqua-uc.a.run.app
```

### Dostupné Funkce

1. `setAdminRole` - Udělení admin práv
2. `createEducationalTask` - Vytvoření úlohy
3. `getEducationalTasks` - Seznam úloh
4. `updateUserProfile` - Aktualizace profilu
5. `createUserProfile` - Vytvoření profilu

## Testování Admin Systému

### 1. Registrace testovacího uživatele

```
Email: admin@test.com
Password: test123456
```

### 2. Udělení admin práv

```bash
cd Functions
node setFirstAdmin.js admin@test.com
```

### 3. Test admin funkcí

1. Přihlášení jako admin
2. Kontrola admin badge v navbaru
3. Přístup k `/create-task`
4. Přístup k `/admin`
5. Vytvoření testové úlohy

### 4. Test bezpečnosti

1. Přihlášení jako běžný uživatel
2. Pokus o přístup k admin routes
3. Ověření blokace přístupu
4. Test backend validace

## Deployment

### 1. Firebase Functions

```bash
cd Functions
firebase deploy --only functions
```

### 2. Frontend Build

```bash
cd NaucSeVic
npm run build
firebase deploy --only hosting
```

## Monitoring & Logs

### Firebase Console

- Functions logs: Console > Functions > Logs
- Auth users: Console > Authentication > Users
- Database: Console > Firestore Database

### Admin Actions Log

```javascript
// Všechny admin akce jsou logovány
INFO: Admin task created by uid: xxxxx
INFO: Admin role granted to user: xxxxx
ERROR: Unauthorized admin access attempt: xxxxx
```

## Troubleshooting

### Admin práva se neprojevují

1. **Řešení**: Uživatel se musí odhlásit a znovu přihlásit
2. **Příčina**: Custom claims se načítají při přihlášení

### Backend error při admin operacích

1. **Kontrola**: Firebase Functions logs
2. **Validace**: Správné admin custom claims
3. **Restart**: Firebase Functions restart

### Frontend admin komponenty nefungují

1. **Kontrola**: useAdminCheck hook správně načítá data
2. **Debug**: Console.log admin status
3. **Refresh**: Token refresh po změně oprávnění

## Rozšíření Systému

### Přidání nové admin funkce

1. Vytvořit Cloud Function s admin validací
2. Přidat frontend komponentu
3. Přidat route s AdminRoute ochranou
4. Aktualizovat dokumentaci

### Role-based permissions

```javascript
// Možnost rozšířit na více rolí
customClaims: {
  admin: true,
  moderator: false,
  teacher: true
}
```

---

**Poznámka**: Tento admin systém poskytuje enterprise-level bezpečnost a škálovatelnost pro vzdělávací aplikaci NaucSeVic.
