import { doc, getDoc, setDoc, collection, getDocs, writeBatch } from 'firebase/firestore';
import { firestore } from '../../../config/firebase';

/**
 * Migration utility to fix existing users who are stuck in onboarding loop
 */

/**
 * Migrate a single user's profile to use the new profileSetupComplete system
 * @param {string} uid - User ID
 * @param {Object} currentUser - Current Firebase Auth user object
 */
export async function migrateUserProfile(uid, currentUser = null) {
  if (!uid) throw new Error('No user UID provided');
  
  try {
    const userDocRef = doc(firestore, 'userprofiles', uid);
    const docSnap = await getDoc(userDocRef);
    
    if (!docSnap.exists()) {
      console.log('No profile document found for user:', uid);
      return false;
    }
    
    const userData = docSnap.data();
    
    // If already has the new field, no migration needed
    if (userData.profileSetupComplete !== undefined) {
      console.log('User already migrated:', uid);
      return true;
    }
    
    // Determine if user should be considered "setup complete"
    const hasDisplayName = userData.displayName || currentUser?.displayName;
    const hasAnyProfileData = userData.bio || userData.profilePicture || hasDisplayName;
    
    // If user has any profile data, consider them migrated
    const profileSetupComplete = hasAnyProfileData;
    
    await setDoc(userDocRef, { 
      profileSetupComplete 
    }, { merge: true });
    
    console.log(`Successfully migrated user ${uid} with profileSetupComplete: ${profileSetupComplete}`);
    return true;
    
  } catch (error) {
    console.error('Error migrating user profile:', uid, error);
    return false;
  }
}

/**
 * Batch migrate all users who don't have the profileSetupComplete field
 * WARNING: This is a one-time migration function - use carefully!
 */
export async function batchMigrateAllUsers() {
  try {
    console.log('Starting batch migration of all users...');
    
    const usersRef = collection(firestore, 'userprofiles');
    const querySnapshot = await getDocs(usersRef);
    
    const batch = writeBatch(firestore);
    let migratedCount = 0;
    let skippedCount = 0;
    
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      
      // Skip if already has the field
      if (userData.profileSetupComplete !== undefined) {
        skippedCount++;
        return;
      }
      
      // Determine migration status
      const hasAnyProfileData = userData.displayName || userData.bio || userData.profilePicture;
      const profileSetupComplete = hasAnyProfileData;
      
      batch.update(doc.ref, { profileSetupComplete });
      migratedCount++;
    });
    
    if (migratedCount > 0) {
      await batch.commit();
      console.log(`Batch migration complete: ${migratedCount} users migrated, ${skippedCount} skipped`);
    } else {
      console.log('No users needed migration');
    }
    
    return { migratedCount, skippedCount };
    
  } catch (error) {
    console.error('Error in batch migration:', error);
    throw error;
  }
}

/**
 * Get migration status for all users (for debugging)
 */
export async function getMigrationStatus() {
  try {
    const usersRef = collection(firestore, 'userprofiles');
    const querySnapshot = await getDocs(usersRef);
    
    const stats = {
      total: 0,
      migrated: 0,
      needsMigration: 0,
      users: []
    };
    
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      stats.total++;
      
      const userInfo = {
        uid: doc.id,
        displayName: userData.displayName,
        profileSetupComplete: userData.profileSetupComplete,
        needsMigration: userData.profileSetupComplete === undefined
      };
      
      if (userData.profileSetupComplete !== undefined) {
        stats.migrated++;
      } else {
        stats.needsMigration++;
      }
      
      stats.users.push(userInfo);
    });
    
    return stats;
    
  } catch (error) {
    console.error('Error getting migration status:', error);
    throw error;
  }
}
