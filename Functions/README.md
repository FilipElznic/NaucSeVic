# Firebase Cloud Functions Setup Guide

This guide explains how to set up and deploy Firebase Cloud Functions for the NaucSeVic project.

## Project Structure

```
NaucSeVic/                          # React Frontend
├── src/
│   ├── config/
│   │   └── firebase.js             # Firebase configuration with Functions
│   ├── services/
│   │   └── cloudFunctions.js       # Cloud Functions service
│   ├── hooks/
│   │   └── useCloudFunctions.js    # React hooks for Functions
│   └── components/
│       └── CloudFunctionDemo.jsx   # Demo component
Functions/                          # Firebase Cloud Functions
├── functions/
│   ├── index.js                    # Cloud Functions code
│   └── package.json               # Functions dependencies
├── firebase.json                   # Firebase configuration
└── .firebaserc                     # Firebase project settings
```

## Setup Instructions

### 1. Prerequisites

- Node.js installed
- Firebase CLI installed globally: `npm install -g firebase-tools`
- Firebase project created in the console

### 2. Initial Setup (Already Done)

```bash
cd Functions
firebase login
firebase init functions
```

### 3. Environment Variables

1. Copy `.env.example` to `.env` in the frontend directory
2. Fill in your Firebase configuration values
3. Set `VITE_FIREBASE_FUNCTIONS_URL` to your functions URL

### 4. Deploy Functions

```bash
cd Functions
firebase deploy --only functions
```

### 5. Local Development with Emulators

```bash
# Start the Firebase emulators
cd Functions
firebase emulators:start

# In your frontend .env file, set:
VITE_USE_EMULATOR=true
```

## Available Cloud Functions

### 1. Hello World (`helloWorld`)

- **Type**: Callable Function
- **Purpose**: Simple demonstration function
- **Usage**:
  ```javascript
  const result = await callHello({ name: "John" });
  ```

### 2. Create User Profile (`createUserProfile`)

- **Type**: Callable Function
- **Purpose**: Create user profile in Firestore
- **Authentication**: Required
- **Usage**:
  ```javascript
  const result = await callCreateUserProfile(uid, profileData);
  ```

### 3. Create Task (`createTask`)

- **Type**: Callable Function
- **Purpose**: Create a new task for the user
- **Authentication**: Required
- **Usage**:
  ```javascript
  const result = await callCreateTask({
    title: "Task Title",
    description: "Task Description",
    category: "general",
  });
  ```

### 4. API Endpoint (`api`)

- **Type**: HTTP Request Function
- **Purpose**: RESTful API endpoint
- **Methods**: GET, POST
- **URL**: `https://us-central1-{project-id}.cloudfunctions.net/api`

### 5. Firestore Triggers

- `onUserCreated`: Triggered when a user document is created
- `onTaskUpdated`: Triggered when a task document is updated

## Frontend Integration

### Using the Cloud Functions Service

```javascript
import { cloudFunctionsService } from "../services/cloudFunctions";

// Call a function
const result = await cloudFunctionsService.callHelloWorld("John");
```

### Using React Hooks

```javascript
import { useCloudFunction } from "../hooks/useCloudFunctions";

const { data, loading, callFunction } = useCloudFunction("helloWorld");

const handleCall = async () => {
  await callFunction({ name: "John" });
};
```

## Development Tips

### 1. Testing Functions Locally

```bash
# Start emulators
firebase emulators:start

# Your functions will be available at:
# - Callable functions: via Firebase SDK
# - HTTP functions: http://localhost:5001/{project-id}/us-central1/{function-name}
```

### 2. Viewing Logs

```bash
# View function logs
firebase functions:log

# View logs for specific function
firebase functions:log --only helloWorld
```

### 3. Debugging

- Use `logger.info()` in your functions
- Check the Firebase Console Functions section
- Use browser network tab to inspect HTTP calls

## Security Rules

Remember to set up proper security rules for:

- Firestore database
- Firebase Authentication
- Cloud Functions authentication

## Cost Optimization

The functions are configured with:

- `maxInstances: 10` to control concurrent executions
- Regional deployment (`us-central1`) for better performance
- Proper error handling to prevent infinite loops

## Next Steps

1. Deploy your functions: `firebase deploy --only functions`
2. Test the Cloud Functions Demo at `/cloud-functions`
3. Add more functions as needed for your application
4. Set up proper monitoring and alerting

## Troubleshooting

### Common Issues:

1. **Authentication errors**: Ensure user is logged in for protected functions
2. **CORS errors**: Functions are configured with CORS enabled
3. **Permission errors**: Check Firebase project permissions
4. **Deployment errors**: Ensure Firebase CLI is logged in and project is selected

### Getting Help:

- Check Firebase Console for function logs
- Use browser dev tools to inspect network requests
- Refer to Firebase documentation for advanced configurations
