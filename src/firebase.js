import { initializeApp } from "firebase/app";
// Import other Firebase services as needed, e.g., Firestore, Auth
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from 'firebase/storage';

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app); // For Firestore
const auth = getAuth(app); // For Authentication
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

// Export services for use in your app
export { db, auth, storage, googleProvider };