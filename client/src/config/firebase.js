import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBV22Jhml3A9EXEWUg8ZxlTkBng2bkxQPQ',
  authDomain: 'beatmeter-baf5a.firebaseapp.com',
  projectId: 'beatmeter-baf5a',
  storageBucket: 'beatmeter-baf5a.firebasestorage.app',
  messagingSenderId: '111775710994',
  appId: '1:111775710994:web:4984cb3f26116535fdfdcb',
  measurementId: 'G-2RDYS7W6Z0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Explicitly connect to the default database
const firestore = getFirestore(app, '(default)');
const storage = getStorage(app);
const functions = getFunctions(app);

// Connect to emulators in development
if (import.meta.env.DEV && import.meta.env.VITE_USE_EMULATORS === 'true') {
  console.log('🔧 Connecting to Firebase emulators...');
  try {
    // Connect to Firestore emulator
    if (!firestore._settings?.host?.includes('localhost')) {
      connectFirestoreEmulator(firestore, 'localhost', 8081);
      console.log('✅ Connected to Firestore emulator');
    }

    // Connect to Auth emulator
    if (!auth.config?.emulator) {
      connectAuthEmulator(auth, 'http://localhost:9099');
      console.log('✅ Connected to Auth emulator');
    }

    // Connect to Storage emulator
    if (!storage._host?.includes('localhost')) {
      connectStorageEmulator(storage, 'localhost', 9199);
      console.log('✅ Connected to Storage emulator');
    }

    // Connect to Functions emulator
    try {
      connectFunctionsEmulator(functions, 'localhost', 5001);
      console.log('✅ Connected to Functions emulator');
    } catch (e) {
      console.warn('⚠️ Could not connect to Functions emulator', e.message);
    }
  } catch (error) {
    console.warn('⚠️ Could not connect to emulators:', error.message);
  }
} else {
  console.log('🌐 Using production Firebase services');
}

// Debug: Log Firebase initialization
console.log('� Firebase initialized');
console.log('Project ID:', firebaseConfig.projectId);
console.log('Auth domain:', firebaseConfig.authDomain);

export { app, auth, firestore, storage, functions };
