const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

/**
 * When a new user is created in Firebase Authentication,
 * this function automatically creates a corresponding document
 * in the userprofiles collection with the same ID.
 */
exports.createUserProfile = functions.auth.user().onCreate((user) => {
  const uid = user.uid;
  const email = user.email || '';
  const displayName = user.displayName || '';
  const photoURL = user.photoURL || '';

  console.log(`Creating profile for user: ${uid}, ${displayName}`);
  
  // Basic profile data
  const profileData = {
    uid: uid,
    email: email,
    displayName: displayName,
    photoURL: photoURL,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    // Initialize with empty collections
    musicCollection: [],
    rateLater: [],
    followers: [],
    following: [],
    profileComplete: false
  };
  
  // Create user document in Firestore
  return admin.firestore()
    .collection('userprofiles')
    .doc(uid)
    .set(profileData)
    .then(() => {
      console.log(`Profile created for user: ${uid}`);
      return null;
    })
    .catch(error => {
      console.error(`Error creating profile for user ${uid}:`, error);
      return null;
    });
});
