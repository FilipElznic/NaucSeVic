# Firestore Security Rules - Fix Documentation

## Problem

The application was experiencing **500 Internal Server Error** and **"Missing or insufficient permissions"** errors when trying to:

- Initialize user profiles via Cloud Functions
- Read/write user data from Firestore
- Create user profiles during registration

## Root Cause

Missing Firestore Security Rules configuration. The Firebase project had no security rules defined, causing all database operations to be denied by default.

## Solution Applied

### 1. Created `firestore.rules`

Located at: `Functions/firestore.rules`

This file defines security rules that:

- ✅ Allow authenticated users to read/write their own profile data
- ✅ Allow users to create their profile during registration
- ✅ Allow admins to read/write all user data
- ✅ Allow public read access to tasks (for demo purposes)
- ✅ Protect sensitive data from unauthorized access

### 2. Updated `firebase.json`

Added Firestore configuration to include the rules file:

```json
"firestore": {
  "rules": "firestore.rules",
  "indexes": "firestore.indexes.json"
}
```

### 3. Created `firestore.indexes.json`

Basic indexes configuration file for Firestore queries.

### 4. Deployed Rules

Ran: `firebase deploy --only firestore:rules`
Successfully deployed the security rules to production.

## Security Rules Overview

### Users Collection (`/users/{userId}`)

- **Read**: User can read their own profile OR user is admin
- **Create**: User can create their own profile with required fields
- **Update**: User can update their own profile OR user is admin
- **Delete**: User can delete their own profile OR user is admin

### Tasks Collection (`/tasks/{taskId}`)

- **Read**: Public access (anyone can read)
- **Create**: Authenticated users only
- **Update/Delete**: Task owner OR admin only

### Other Collections

- Progress tracking: Owner or admin only
- Task attempts: Owner (read/create) or admin (all operations)
- Admin data: Admin only

## Testing

After deployment, test by:

1. Registering a new user
2. Checking if the profile is created successfully
3. Refreshing the page - should not show permission errors
4. Verifying user data loads correctly

## Next Steps (Optional Security Enhancements)

1. Enable Firebase App Check for additional security
2. Add data validation rules (e.g., email format, string lengths)
3. Implement more granular permissions for specific operations
4. Add rate limiting at the Firestore rules level
5. Consider splitting public and private user data

## Important Notes

- Rules are now deployed to **production**
- Any changes to `firestore.rules` require redeployment
- Test rules thoroughly before deploying to production
- Monitor Firebase Console for rule violations

## Useful Commands

```bash
# Deploy only Firestore rules
firebase deploy --only firestore:rules

# Deploy everything
firebase deploy

# Test rules locally (requires emulator)
firebase emulators:start

# View deployed rules
firebase firestore:rules get
```

## References

- [Firebase Security Rules Documentation](https://firebase.google.com/docs/firestore/security/get-started)
- [Security Rules Conditions](https://firebase.google.com/docs/firestore/security/rules-conditions)
- [Security Rules Testing](https://firebase.google.com/docs/firestore/security/test-rules-emulator)
