# NaucSeVic

A modern learning platform built with React, Vite, and Firebase.

## Features

- 🌗 Dark/Light mode support
- 🔐 Firebase Authentication (Login/Registration)
- 🎨 Tailwind CSS for styling
- 🚀 Vite for fast development
- 📱 Responsive design
- 🌍 Czech language interface

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication related components
│   ├── ui/             # General UI components
│   └── LandingPage.jsx # Main landing page
├── contexts/           # React contexts
│   ├── DarkModeContext.jsx      # Dark mode state management
│   └── FirebaseAuthContext.jsx # Authentication state management
├── pages/              # Page components
│   ├── Prihlaseni.jsx  # Login page
│   └── Registrace.jsx  # Registration page
├── config/             # Configuration files
│   └── firebase.js     # Firebase configuration
└── hooks/              # Custom React hooks
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Configuration

1. Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password provider
3. Copy your Firebase configuration
4. Create a `.env` file in the root directory (copy from `.env.example`)
5. Fill in your Firebase configuration values in the `.env` file
6. Update `src/config/firebase.js` to use environment variables:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};
```

### 3. Run the Development Server

```bash
npm run dev
```

## Available Routes

- `/` - Landing page (protected, requires authentication)
- `/prihlaseni` - Login page
- `/registrace` - Registration page

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **Firebase** - Authentication and backend services
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Spline** - 3D graphics and animations

## Context Usage

### Dark Mode Context

```jsx
import { useDarkMode } from "./contexts/DarkModeContext";

const MyComponent = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
```

### Firebase Auth Context

```jsx
import { useFirebaseAuth } from "./contexts/FirebaseAuthContext";

const MyComponent = () => {
  const { user, login, register, logout, loading, error } = useFirebaseAuth();

  // Your component logic here
};
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
