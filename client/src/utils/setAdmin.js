// Script to set admin role for a user
// Run this in the browser console while logged in, or use it as a reference for a cloud function

import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const makeMeAdmin = async () => {
  const auth = getAuth();
  const db = getFirestore();

  if (!auth.currentUser) {
    console.error('You must be logged in to run this.');
    return;
  }

  const userId = auth.currentUser.uid;
  console.log(`Setting admin role for user: ${userId}`);

  try {
    const userRef = doc(db, 'userprofiles', userId);
    await updateDoc(userRef, {
      userRole: 'admin',
    });
    console.log(
      'Success! You are now an admin. Refresh the page to see admin features.'
    );
  } catch (error) {
    console.error('Error setting admin role:', error);
  }
};
