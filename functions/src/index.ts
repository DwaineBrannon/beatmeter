import * as admin from 'firebase-admin';

// Initialize Firebase Admin
admin.initializeApp();

export { api } from './api';
export { createUserProfilev1 } from './auth';
// Add more exports as you add more functions (e.g., firestoreTriggers, storageTriggers)