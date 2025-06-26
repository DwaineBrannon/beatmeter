import * as functions from 'firebase-functions/v1';
import * as admin from 'firebase-admin';

/**
 * Firebase Auth trigger: When a new user is created,
 * create a corresponding user profile document in Firestore
 * Initializes musicCollection, rateLater, followers, following, etc.
 */
export const createUserProfilev1 = functions.auth.user().onCreate(async (user: admin.auth.UserRecord) => {
  const uid = user.uid;
  const email = user.email || '';
  const displayName = user.displayName || '';
  const photoURL = user.photoURL || '';

  functions.logger.info(`Creating profile for user: ${uid}, ${displayName}`);

  const profileData = {
    uid,
    email,
    displayName,
    photoURL,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    musicCollection: [],
    rateLater: [],
    followers: [],
    following: [],
    profileComplete: false,
  };  try {
    // Use the default database (Firestore automatically uses 'userprofiles' if configured)
    const db = admin.firestore();
    await db.collection('userprofiles').doc(uid).set(profileData);
    functions.logger.info(`Profile created for user: ${uid}`);
  } catch (error) {
    functions.logger.error(`Error creating profile for user ${uid}:`, error);
  }
});
