# Admin System Setup Guide

Tento průvodce vysvětluje, jak nastavit a používat admin systém pro správu úloh v aplikaci NaucSeVic.

## 🔐 Jak funguje Admin systém

### Backend Security

- **Firebase Custom Claims**: Admin oprávnění jsou uložena jako custom claims v Firebase Auth
- **Cloud Functions Validation**: Každá admin operace je ověřena na backend serveru
- **Rate Limiting**: Ochrana proti zneužití s rate limiting
- **Input Validation**: Všechny vstupy jsou validovány a sanitizovány

### Frontend Security

- **AdminRoute Component**: Chrání admin stránky před neoprávněným přístupem
- **useAdminCheck Hook**: Ověřuje admin status v reálném čase
- **Conditional Rendering**: UI prvky se zobrazují pouze admin uživatelům

## 🚀 Nastavení prvního Admin uživatele

### Krok 1: Registrace uživatele

1. Nejdříve se uživatel musí zaregistrovat normálně přes aplikaci
2. Přihlásit se a vytvořit si profil

### Krok 2: Nastavení Admin oprávnění

```bash
# V adresáři Functions
cd Functions
node setFirstAdmin.js admin@example.com
```

**Důležité**: Nahraďte `admin@example.com` skutečným emailem uživatele.

### Krok 3: Refresh tokenu

Uživatel se musí odhlásit a znovu přihlásit, aby se načetly nové oprávnění.

## 📋 Admin funkcionalita

### Vytváření úloh

- **Route**: `/create-task`
- **Přístup**: Pouze admin uživatelé
- **Funkce**: Vytváření vzdělávacích úloh všech typů

### Správa úloh

- **Route**: `/tasks/:subject` (v záložce "Spravovat úlohy")
- **Přístup**: Pouze admin uživatelé
- **Funkce**: Zobrazení, úprava, mazání úloh

## 🔧 Backend Functions

### Admin kontrola

```javascript
// Kontrola admin statusu
const userIsAdmin = await isAdmin(request.auth.uid);
if (!userIsAdmin) {
  throw new Error("Admin privileges required");
}
```

### Nastavení admin role

```javascript
// Cloud Function pro nastavení admin role
exports.setAdminRole = onCall(async (request) => {
  // Pouze existující admin může přidělit admin práva
  const requesterIsAdmin = await isAdmin(request.auth.uid);
  if (!requesterIsAdmin) {
    throw new Error("Super admin privileges required");
  }

  await admin.auth().setCustomUserClaims(targetUid, { admin: true });
});
```

## 🎯 Frontend komponenty

### AdminRoute

```jsx
// Ochrana admin stránek
<AdminRoute>
  <TaskCreator />
</AdminRoute>
```

### useAdminCheck Hook

```jsx
// Kontrola admin statusu v komponentě
const { isAdmin, loading, error } = useAdminCheck();
```

## ⚡ Rychlé nasazení

1. **Deploy functions**:

```bash
cd Functions
firebase deploy --only functions
```

2. **Nastavit prvního admina**:

```bash
node setFirstAdmin.js your-email@domain.com
```

3. **Testování**:
   - Přihlásit se jako admin uživatel
   - Přejít na `/create-task`
   - Vytvořit testovací úlohu

## 🛡️ Bezpečnostní funkce

### Rate Limiting

- **Task Creation**: 5 úloh za 5 minut na uživatele
- **Admin Role Setting**: Ochrana proti zneužití

### Input Validation

- Všechny vstupy sanitizovány
- Type checking pro task typy
- Required fields validation

### Error Handling

- Structured error messages
- Logging všech admin operací
- Graceful fallback pro UI

## 🔍 Debugging

### Kontrola admin statusu

```javascript
// V browser console
user.getIdTokenResult().then((result) => {
  console.log("Admin claims:", result.claims.admin);
});
```

### Logs

```bash
# Firebase Functions logs
firebase functions:log
```

## 📝 Poznámky

- **Produkční prostředí**: Odstraňte nebo zabezpečte `setFirstAdmin.js`
- **Service Account**: Uchovávejte service account klíče v bezpečí
- **Testování**: Vždy testujte admin funkcionalitu před nasazením
- **Backup**: Admin uživatelé mohou vytvářet další adminy

## 🆘 Troubleshooting

### "Admin privileges required"

- Zkontrolujte custom claims: `user.getIdTokenResult()`
- Uživatel se musí odhlásit a znovu přihlásit
- Ověřte, že admin claims jsou nastaveny správně

### Task creation fails

- Zkontrolujte Firebase Functions logs
- Ověřte network connectivity
- Zkontrolujte input validation errors

### Admin status not updating

- Clear browser cache
- Force token refresh: `user.getIdToken(true)`
- Zkontrolujte Firebase Auth rules
