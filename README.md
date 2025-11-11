# NaucSeVic

NaucSeVic is a modern, AI-powered learning platform designed to provide an interactive and personalized educational experience. Built with React, Vite, and Firebase, it offers a suite of tools for both students and administrators to manage and engage with educational content.

## Features

- **Interactive Learning Modules**: Engage with subjects like Math, Geometry, and Physics through a modern UI.
- **User Authentication**: Secure login and registration system using Firebase Authentication.
- **Advanced Admin System**: A robust, secure system for managing users and content, protected by custom claims.
- **Cloud Function Integration**: Backend logic powered by Firebase Cloud Functions for scalability and security.
- **Responsive Design**: Fully responsive interface for a seamless experience on desktop and mobile devices.
- **Dark/Light Mode**: Thematically consistent UI with support for dark and light modes.

## Project Architecture

The project is a monorepo organized into two main parts: the frontend React application and the backend Firebase Cloud Functions.

### Frontend (`NaucSeVic/`)

The frontend is a standard Vite-powered React application responsible for the user interface and user experience.

```
NaucSeVic/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, icons, etc.
│   ├── components/       # Reusable React components
│   │   ├── auth/         # Authentication-related components
│   │   ├── subjects/     # Components for specific subjects
│   │   └── ui/           # General-purpose UI elements
│   ├── config/           # Configuration files (e.g., Firebase)
│   ├── contexts/         # React Context providers
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Top-level page components
│   └── services/         # Services for interacting with APIs
└── ...
```

### Backend (`Functions/`)

The backend consists of Firebase Cloud Functions that handle business logic, interact with the database, and perform administrative tasks securely on the server side.

```
Functions/
├── functions/
│   ├── index.js          # Main Cloud Functions file
│   └── package.json      # Node.js dependencies for functions
├── firestore.rules       # Security rules for Firestore
├── firebase.json         # Firebase project configuration
└── ...
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- Firebase CLI (`npm install -g firebase-tools`)
- A Firebase project with Firestore and Authentication enabled.

### Setup Instructions

1.  **Clone the repository**.

2.  **Configure Firebase**:

    - Navigate to your Firebase project settings and copy your web app's Firebase configuration.
    - Create a `.env` file in the `NaucSeVic/` directory.
    - Populate it with your Firebase credentials, using `VITE_` as a prefix for each environment variable (e.g., `VITE_FIREBASE_API_KEY=...`).

3.  **Install Frontend Dependencies**:

    ```bash
    cd NaucSeVic
    npm install
    ```

4.  **Install Backend Dependencies**:
    ```bash
    cd ../Functions/functions
    npm install
    ```

### Running the Application

1.  **Start the Frontend Development Server**:

    ```bash
    cd NaucSeVic
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

2.  **Deploy Cloud Functions**:
    To deploy your backend functions to Firebase, run:

    ```bash
    cd Functions
    firebase deploy --only functions
    ```

3.  **Run with Firebase Emulators (Optional)**:
    For local development, you can use the Firebase Emulator Suite.
    ```bash
    cd Functions
    firebase emulators:start
    ```
    In your frontend `.env` file, set `VITE_USE_EMULATOR=true` to direct the app to use the local emulators.

## Core Frontend Components & Logic

### Authentication

Authentication is managed via the `FirebaseAuthContext`, which provides the `useFirebaseAuth` hook.

- **`register(email, password, displayName)`**: Creates a new user with Firebase Authentication.
- **`login(email, password)`**: Signs in an existing user.
- **`logout()`**: Signs out the current user.
- **`resetPassword(email)`**: Sends a password reset email.

Upon successful login or registration, the `onAuthStateChanged` listener in `FirebaseAuthContext` triggers the `userService.ensureProfileExists` function. This function calls the `initializeUserProfile` Cloud Function to create a new user profile in Firestore if one doesn't already exist.

### Loading States

A reusable `LoadingSpinner` component is available in `src/components/ui/LoadingSpinner.jsx`. It can be used to indicate loading states anywhere in the application.

```jsx
import LoadingSpinner from "./components/ui/LoadingSpinner";

// Usage
<LoadingSpinner size="lg" />;
```

The `FirebaseAuthContext` also provides a `loading` state, which is true while the initial authentication state is being determined.

## Backend Cloud Functions

The backend logic is handled by a suite of secured Cloud Functions located in `Functions/functions/index.js`.

### Key Functions

- **`initializeUserProfile`**: (Callable) Triggered after a user registers. It creates a new user document in Firestore with a default profile structure, including `name`, `surname`, `xp`, `coins`, and `progress`.
- **`createEducationalTask`**: (Callable, Admin-only) Allows an admin to create a new task. It performs comprehensive validation on the task data, including type, difficulty, and required fields.
- **`getTasks`**: (Callable) Fetches a list of active tasks. It can be filtered by `difficulty` and `subject`. It strips the correct answers from the response to prevent cheating.
- **`submitTaskAnswer`**: (Callable) Validates a user's answer to a task. It checks the answer against the correct one stored in Firestore, calculates XP and coins, and updates the user's profile and progress.
- **`recordTaskAttempt`**: (Callable) A more generic function to record any task attempt, updating user progress and stats.

All callable functions include security measures such as input sanitization, rate limiting, and authentication checks.

## Admin System

The application includes a secure, multi-layered admin system for managing content and users, built on Firebase Custom Claims.

### How it Works

- **Backend Security**: Admin privileges are managed using Firebase Custom Claims. A user's ID token contains a custom claim (`admin: true`) which is verified by Cloud Functions on every protected request. This ensures that all admin actions are securely validated on the server.
- **Frontend Security**: The frontend uses a custom `AdminRoute` component and a `useAdminCheck` hook. These components read the user's ID token in real-time to protect admin-only pages and conditionally render UI elements (like admin dashboards or edit buttons).

### Admin Architecture Components

- **`useAdminCheck` hook**: A custom React hook that provides the current user's admin status (`isAdmin`) and a loading state. It listens for changes to the Firebase auth state and token, ensuring the UI always reflects the user's true permissions.
- **`AdminRoute` component**: A wrapper for React Router routes that uses the `useAdminCheck` hook to prevent non-admin users from accessing protected pages, redirecting them if necessary.

### Setting Up the First Admin

1.  **Register a User**: First, a user must register through the application's standard registration form.
2.  **Set Admin Privileges**: Use the provided Node.js script in the `Functions/` directory to grant admin rights. Replace `admin@example.com` with the user's actual email.
    ```bash
    cd Functions
    node setFirstAdmin.js admin@example.com
    ```
3.  **Refresh Token**: The user must log out and log back in. This forces a refresh of their ID token, which will then include the new `admin: true` custom claim.

### Admin Functionality

- **Task Management**: Create, edit, and delete educational tasks via the `/create-task` route.
- **User Management**: Grant or revoke admin privileges from other users via the `/admin` page.

## Security Architecture

Security is a core aspect of this project, with protections implemented at multiple layers to ensure data integrity and prevent abuse.

### The Golden Rule: Frontend vs. Backend

A critical concept in this architecture is the separation of concerns between the client and the server.

- The **Frontend (React)** is responsible for the UI. While it has client-side validation for a better user experience, it is considered **untrusted**. A malicious user can bypass any frontend code.
- The **Backend (Cloud Functions)** is the single source of truth. It runs securely on Google's servers, and its code cannot be seen or modified by users. **All critical business logic, validation, and database operations happen here.**

### Comprehensive Security Layers

1.  **Authentication & Authorization**: Every sensitive server-side action first checks if a user is authenticated via their ID token. It then verifies their authorization by checking for custom claims (e.g., `isAdmin`).
2.  **Server-Side Validation & Sanitization**: All data sent from the client is rigorously validated and sanitized by the Cloud Functions before being processed or stored. This includes checking data types, lengths, and formats, and stripping any potentially malicious content. The backend **never** trusts input from the frontend.
3.  **Firestore Security Rules**: The `firestore.rules` file provides a powerful, declarative way to secure the database. These rules are enforced on Google's servers and define precisely who can read, write, or update specific documents. For example, a rule ensures that a user can only edit their own profile, regardless of what the frontend code attempts to do.
4.  **Cloud Function Rate Limiting**: To prevent abuse and denial-of-service attacks, key Cloud Functions are rate-limited. This restricts the number of times a single user can call a function within a specific time window (e.g., 5 requests per minute).
5.  **HTTP Security Headers**: The API endpoints are configured to send security headers like `X-Content-Type-Options` and `X-Frame-Options` to protect against common web vulnerabilities like XSS.

This layered approach ensures that even if one layer of security were to fail, others are in place to protect the application and its data.

## Deployment

- **Frontend**:
  ```bash
  cd NaucSeVic
  npm run build
  firebase deploy --only hosting
  ```
- **Backend**:
  ```bash
  cd Functions
  firebase deploy --only functions
  ```
- **Firestore Rules**:
  ```bash
  cd Functions
  firebase deploy --only firestore:rules
  ```

## Key Technologies

- **React**: For building the user interface.
- **Vite**: As the frontend build tool and development server.
- **Firebase**: For authentication, database (Firestore), and serverless backend (Cloud Functions).
- **Tailwind CSS**: For styling the application.
- **React Router**: For client-side routing.
- **Framer Motion & GSAP**: For advanced animations and interactive UI elements.
- **Three.js & Spline**: For integrating 3D models and scenes.

## Environment Variables

To run the frontend application, you need to create a `.env` file in the `NaucSeVic/` directory. Copy the contents of `.env.example` and replace the placeholder values with your actual Firebase project configuration.

```bash
# Firebase Configuration
VITE_API_KEY=your_api_key_here
VITE_AUTH_DOMAIN=your_auth_domain_here
VITE_PROJECT_ID=your_project_id_here
VITE_STORAGE_BUCKET=your_storage_bucket_here
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_APP_ID=your_app_id_here
VITE_MEASUREMENT_ID=your_measurement_id_here

# Set to true to connect to the local Firebase Emulator Suite
VITE_USE_EMULATOR=false
```

## Available Scripts

The `NaucSeVic/package.json` file includes several scripts to streamline development:

- `npm run dev`: Starts the Vite development server with hot-reloading.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run preview`: Serves the production build locally for previewing.

## Styling & Theming

The project uses **Tailwind CSS** for styling.

- **Configuration**: The theme is configured in `tailwind.config.js`.
- **Dark Mode**: Dark mode is enabled using the `class` strategy. To apply dark mode styles, use the `dark:` prefix (e.g., `dark:bg-gray-900`). The theme is toggled via the `DarkModeContext`.
- **Custom Animations**: The `tailwind.config.js` file contains custom keyframe animations like `star-movement-bottom` and `star-movement-top`.

## Docker Support

The project includes full Docker support for both development and production environments. For detailed instructions on building and running the Docker containers, please refer to the `NaucSeVic/DOCKER.md` file.

Common commands are also available as npm scripts:

- `npm run docker:compose`: Runs the production environment using Docker Compose.
- `npm run docker:compose-dev`: Runs the development environment with hot-reloading using Docker Compose.
- `npm run docker:stop`: Stops all running Docker Compose services.

## Application Structure & Routing

The main application structure and routing are defined in `NaucSeVic/src/App.jsx`.

### Key Components

- **`Router`**: The top-level component from `react-router-dom` that enables routing.
- **`Layout`**: A wrapper component that provides a consistent layout (like a navbar and footer) for different pages. Some pages, like the `LandingPage`, opt out of the global layout for a custom design.
- **`Routes`**: Defines all possible application routes.

### Route Protection

The application implements robust route protection to manage access to different parts of the site:

- **`ProtectedRoute`**: Wraps routes that should only be accessible to authenticated (logged-in) users. If a non-authenticated user tries to access these routes, they will be redirected. It is used for pages like `/predmety` and `/all-tasks`.
- **`AdminRoute`**: A more specific protected route that is only accessible to users with administrative privileges. This is used for pages like `/create-task`.
- **`PublicRoute`**: Wraps routes that are only for non-authenticated users, such as the login and registration pages (`/prihlaseni`, `/registrace`). If a logged-in user tries to access these, they are redirected to the main application page.

This multi-layered approach ensures that users can only access the content and functionality appropriate for their authentication status and role.
