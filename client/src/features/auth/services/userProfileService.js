// Centralized user profile creation and update logic
import { doc, setDoc, serverTimestamp, Timestamp, getDoc, collection, getDocs, query, limit } from 'firebase/firestore';
import { firestore, auth } from '../../../config/firebase';

/**
 * Builds a user profile object for Firestore, storing only custom fields.
 * Auth fields (email, displayName, photoURL) are not duplicated in Firestore.
 * @param {Object} overrides - Optional fields to override
 */
export function buildUserProfileForFirestore(overrides = {}) {
  return {
    // Profile information
    bio: overrides.bio || '',
    username: overrides.username || '',
    birthDate: overrides.birthDate || null,
    location: overrides.location || '',
    personalLinks: overrides.personalLinks || [],
    favoriteGenres: overrides.favoriteGenres || [],
    
    // Social counts (these will be updated by follow operations)
    followerCount: overrides.followerCount || 0,
    followingCount: overrides.followingCount || 0,
    
    // Legacy fields (kept for backward compatibility)
    musicCollection: overrides.musicCollection || [],
    rateLater: overrides.rateLater || [],
    followers: overrides.followers || [],
    following: overrides.following || [],
    
    // System fields
    profileSetup: overrides.profileSetup || false,
    createdAt: overrides.createdAt !== undefined ? overrides.createdAt : serverTimestamp(),
    joinDate: overrides.joinDate !== undefined ? overrides.joinDate : serverTimestamp(),
    
    ...overrides // allow explicit override of any field
  };
}

/**
 * Recursively sanitize an object for Firestore writes.
 * Removes undefined, NaN, Infinity, and unsupported types.
 * Converts Dates to Firestore Timestamp if needed.
 */
function sanitizeForFirestore(obj) {
  if (Array.isArray(obj)) {
    return obj
      .map(sanitizeForFirestore)
      .filter((v) => v !== undefined && v !== null);
  } else if (obj && typeof obj === 'object') {
    // Preserve Firestore special objects (like serverTimestamp)
    if (obj.constructor && obj.constructor.name === 'FieldValue') {
      return obj; // Don't sanitize Firestore FieldValue objects
    }
    
    // Prevent File/Blob objects from being sent to Firestore
    if (typeof window !== 'undefined' && (obj instanceof File || obj instanceof Blob)) {
      return undefined;
    }
    
    const clean = {};
    for (const [key, value] of Object.entries(obj)) {
      if (
        value === undefined ||
        (typeof value === 'number' && (isNaN(value) || !isFinite(value))) ||
        typeof value === 'function' ||
        (typeof window !== 'undefined' && (value instanceof File || value instanceof Blob))
      ) {
        continue;
      }
      
      // Preserve Firestore FieldValue objects (like serverTimestamp)
      if (value && typeof value === 'object' && value.constructor && value.constructor.name === 'FieldValue') {
        clean[key] = value;
        continue;
      }
      
      // Convert Date to Firestore Timestamp if needed
      if (value instanceof Date) {
        clean[key] = Timestamp.fromDate(value);
        continue;
      }
      
      // Recursively sanitize objects/arrays
      if (typeof value === 'object') {
        const sanitized = sanitizeForFirestore(value);
        if (sanitized !== undefined && sanitized !== null && (typeof sanitized !== 'object' || Object.keys(sanitized).length > 0)) {
          clean[key] = sanitized;
        }
        continue;
      }
      clean[key] = value;
    }
    return clean;
  }
  return obj;
}

/**
 * Validates a Firebase document ID according to Firestore rules
 * @param {string} docId - Document ID to validate
 * @returns {boolean} - True if valid
 */
function isValidFirestoreDocId(docId) {
  if (!docId || typeof docId !== 'string') return false;
  
  // Firestore document ID constraints:
  // - Must be strings
  // - Must be between 1 and 1500 bytes
  // - Cannot contain forward slashes (/)
  // - Cannot consist of only periods (.) or double periods (..)
  // - Cannot match the regular expression __.*__
  
  if (docId.length === 0 || docId.length > 1500) return false;
  if (docId.includes('/')) return false;
  if (docId === '.' || docId === '..') return false;
  if (/^__.*__$/.test(docId)) return false;
  
  return true;
}

/**
 * Creates or updates a user profile document in Firestore (custom fields only)
 * @param {string} uid - Firebase Auth user UID
 * @param {Object} [overrides] - Optional fields to override
 * @param {boolean} [merge] - Whether to merge with existing doc
 */
export async function createOrUpdateUserProfile(uid, overrides = {}, merge = true) {
  if (!uid) throw new Error('No user UID provided');

  // Debug: Validate UID format
  console.log('[DEBUG] Validating UID:', uid, 'Type:', typeof uid);
  if (typeof uid !== 'string' || uid.trim().length === 0) {
    throw new Error('Invalid UID: must be a non-empty string');
  }

  // Validate UID as a Firestore document ID
  if (!isValidFirestoreDocId(uid)) {
    throw new Error(`Invalid UID format for Firestore document ID: ${uid}`);
  }

  // Debug: Check Firebase Auth state
  try {
    console.log('[DEBUG] Current Auth user:', auth.currentUser?.uid);
    console.log('[DEBUG] Auth user authenticated:', !!auth.currentUser);
    
    if (!auth.currentUser) {
      console.warn('[DEBUG] No authenticated user found');
      throw new Error('User must be authenticated before creating profile');
    }
    
    if (auth.currentUser.uid !== uid) {
      throw new Error('UID mismatch: authenticated user UID does not match provided UID');
    }
  } catch (e) {
    console.warn('[DEBUG] Could not check auth state:', e);
    throw new Error(`Authentication check failed: ${e.message}`);
  }

  const userDocRef = doc(firestore, 'userprofiles', uid);

  try {
    // Check if the user profile already exists
    const existingDoc = await getDoc(userDocRef);
    let profileData;
    if (!existingDoc.exists()) {
      // New user: set createdAt and joinDate
      profileData = buildUserProfileForFirestore({
        ...overrides,
        createdAt: serverTimestamp(),
        joinDate: serverTimestamp(),
      });
    } else {
      // Existing user: do not overwrite createdAt/joinDate
      const { createdAt: _createdAt, joinDate: _joinDate, ...restOverrides } = overrides;
      profileData = buildUserProfileForFirestore(restOverrides);
    }

    const sanitizedProfile = sanitizeForFirestore(profileData);
    
    // Validate sanitized data before writing
    if (!sanitizedProfile || typeof sanitizedProfile !== 'object') {
      throw new Error('Invalid profile data after sanitization');
    }

    if (typeof window !== 'undefined') {
      console.log('=== FIRESTORE WRITE DEBUG ===');
      console.log('Firestore UID:', uid);
      console.log('Firestore instance:', firestore);
      if (firestore && firestore._databaseId) {
        console.log('Firestore projectId:', firestore._databaseId.projectId);
        console.log('Firestore database:', firestore._databaseId.database);
      }
      
      // Debug: Check Firestore settings and connectivity
      console.log('Firestore settings:', firestore._settings);
      console.log('Firestore app:', firestore.app.name);
      console.log('Firestore _delegate:', firestore._delegate);
      
      // Check if running in emulator
      const isEmulator = firestore._settings?.host?.includes('localhost') || 
                        firestore._settings?.host?.includes('127.0.0.1') ||
                        firestore._emulatorOptions;
      console.log('Running in emulator:', isEmulator);
      if (isEmulator) {
        console.log('Emulator settings:', firestore._emulatorOptions || firestore._settings);
      }
      
      // Debug: Check document path validity
      console.log('UserDocRef path:', userDocRef.path);
      console.log('UserDocRef id:', userDocRef.id);
      console.log('UserDocRef parent path:', userDocRef.parent.path);
      
      // Debug: Validate data before writing
      console.log('Raw profile data:', JSON.stringify(profileData, null, 2));
      console.log('Sanitized profile data:', JSON.stringify(sanitizedProfile, null, 2));
      console.log('Data size (bytes):', JSON.stringify(sanitizedProfile).length);
      
      // Debug: Check for problematic field names
      const problematicFields = Object.keys(sanitizedProfile).filter(key => 
        key.startsWith('_') || 
        key.includes('.') || 
        key.includes('/') ||
        /^\d/.test(key) // starts with number
      );
      if (problematicFields.length > 0) {
        console.warn('Potentially problematic field names:', problematicFields);
      }
      
      // Debug: Check field types
      Object.entries(sanitizedProfile).forEach(([key, value]) => {
        const type = Object.prototype.toString.call(value);
        console.log(`[FieldType] ${key}:`, value, 'Type:', type);
        
        // Check for unsupported types
        if (type === '[object Function]' || 
            type === '[object Symbol]' || 
            (typeof window !== 'undefined' && (value instanceof File || value instanceof Blob))) {
          console.error(`[ERROR] Unsupported field type for ${key}:`, type);
        }
      });

      // Debug: Test minimal write first with timeout
      console.log('Testing minimal document write...');
      try {
        const testDocRef = doc(firestore, 'userprofiles', `test-${Date.now()}`);
        const minimalData = { test: 'minimal', timestamp: serverTimestamp() };
        console.log('[TEST] Attempting setDoc with data:', minimalData);
        
        // Add timeout to prevent hanging
        const writePromise = setDoc(testDocRef, minimalData);
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Firestore write timeout after 10 seconds')), 10000)
        );
        
        await Promise.race([writePromise, timeoutPromise]);
        console.log('[TEST] Minimal write successful');
        
        // Clean up test document
        try {
          await setDoc(testDocRef, {}, { merge: false });
          console.log('[TEST] Cleanup successful');
        } catch (cleanupError) {
          console.warn('[TEST] Cleanup failed:', cleanupError);
        }
      } catch (testError) {
        console.error('[TEST] Minimal write failed:', testError);
        console.error('[TEST] Error type:', typeof testError);
        console.error('[TEST] Error details:', {
          name: testError.name,
          message: testError.message,
          code: testError.code,
          stack: testError.stack
        });
        
        if (testError.message.includes('timeout')) {
          throw new Error('Firestore write operation timed out - possible connectivity issue');
        } else {
          throw new Error(`Firestore access test failed: ${testError.message}`);
        }
      }
    }

    console.log('[setDoc] Attempting to write document with merge:', merge);
    console.log('[setDoc] Document path:', userDocRef.path);
    console.log('[setDoc] Document data keys:', Object.keys(sanitizedProfile));
    
    await setDoc(userDocRef, sanitizedProfile, { merge })
      .then(() => {
        console.log('[setDoc] Success: Document written to', userDocRef.path);
      })
      .catch((err) => {
        console.error('[setDoc] Direct catch:', err);
        console.error('[setDoc] Error code:', err.code);
        console.error('[setDoc] Error message:', err.message);
        console.error('[setDoc] Error details:', {
          name: err.name,
          code: err.code,
          message: err.message,
          stack: err.stack
        });
        throw err; // Re-throw to be caught by outer catch
      });
      
    // Read back the document immediately after writing
    console.log('[getDoc] Reading back document...');
    const writtenDoc = await getDoc(userDocRef);
    if (writtenDoc.exists()) {
      console.log('[getDoc] Document data after write:', writtenDoc.data());
    } else {
      console.warn('[getDoc] Document does not exist after write!');
    }
    console.log('User profile successfully created/updated:', uid);
    return profileData;
  } catch (error) {
    console.error('=== FIRESTORE ERROR DETAILS ===');
    console.error('Error object:', error);
    console.error('Error name:', error.name);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    // Get profile data and sanitized profile for error logging
    let profileData, sanitizedProfile;
    try {
      profileData = buildUserProfileForFirestore(overrides);
      sanitizedProfile = sanitizeForFirestore(profileData);
    } catch (e) {
      console.error('Could not build profile data for error logging:', e);
    }
    
    if (sanitizedProfile) {
      console.error('Failed data payload:', JSON.stringify(sanitizedProfile, null, 2));
      console.error('Data payload size:', JSON.stringify(sanitizedProfile).length, 'bytes');
    }
    
    // Check for specific 400 error patterns
    if (error.code === 'invalid-argument' || error.message.includes('400')) {
      console.error('=== 400 BAD REQUEST DEBUG ===');
      console.error('This is likely a data validation error. Common causes:');
      console.error('1. Invalid field names (cannot start with numbers, contain dots)');
      console.error('2. Unsupported data types (File, Blob, undefined, NaN)');
      console.error('3. Invalid document ID format');
      console.error('4. Firestore rules rejection');
      
      // Analyze each field for potential issues
      if (sanitizedProfile) {
        Object.entries(sanitizedProfile).forEach(([key, value]) => {
          if (/^\d/.test(key)) {
            console.error(`❌ Field name starts with number: "${key}"`);
          }
          if (key.includes('.') || key.includes('/')) {
            console.error(`❌ Field name contains invalid characters: "${key}"`);
          }
          if (value === undefined || value === null) {
            console.error(`❌ Field has null/undefined value: "${key}"`);
          }
          if (typeof value === 'number' && (isNaN(value) || !isFinite(value))) {
            console.error(`❌ Field has invalid number: "${key}" = ${value}`);
          }
        });
      }
    }
    
    // Enhanced error with context
    const enhancedError = new Error(`Firestore write failed: ${error.message}`);
    enhancedError.originalError = error;
    enhancedError.uid = uid;
    enhancedError.documentPath = userDocRef.path;
    if (sanitizedProfile) {
      enhancedError.dataPayload = sanitizedProfile;
    }
    
    throw enhancedError;
  }
}

/**
 * Fetches the merged user profile (Auth + Firestore custom fields)
 * @param {Object} user - Firebase Auth user object
 * @returns {Object} merged profile
 */
export async function getMergedUserProfile(user) {
  if (!user || !user.uid) return null;
  const userDocRef = doc(firestore, 'userprofiles', user.uid);
  const docSnap = await getDoc(userDocRef);
  const firestoreProfile = docSnap.exists() ? docSnap.data() : {};
  // Merge Auth fields with Firestore custom fields
  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName || '',
    photoURL: user.photoURL || '',
    ...firestoreProfile
  };
}

/**
 * Debug function to test Firestore connectivity and identify 400 error causes
 * Call this function from the browser console: debugFirestore()
 */
export async function debugFirestore() {
  console.log('=== FIRESTORE DEBUG FUNCTION ===');
  
  try {
    // Test 1: Check Firebase configuration
    console.log('Test 1: Firebase Configuration');
    console.log('Firestore instance:', firestore);
    console.log('Project ID:', firestore._databaseId?.projectId);
    console.log('Database:', firestore._databaseId?.database);
    
    // Test 2: Check authentication
    console.log('\nTest 2: Authentication Status');
    console.log('Auth instance:', auth);
    console.log('Current user:', auth.currentUser);
    console.log('User authenticated:', !!auth.currentUser);
    console.log('User UID:', auth.currentUser?.uid);
    console.log('User email:', auth.currentUser?.email);
    
    if (!auth.currentUser) {
      console.error('❌ No authenticated user found!');
      return { success: false, error: 'No authenticated user' };
    }
    
    // Test 3: Try minimal write
    console.log('\nTest 3: Minimal Write Test');
    const testId = `debug-${Date.now()}`;
    const testDocRef = doc(firestore, 'userprofiles', testId);
    
    const minimalData = {
      test: true,
      timestamp: serverTimestamp(),
      message: 'Debug test'
    };
    
    console.log('Writing minimal data:', minimalData);
    await setDoc(testDocRef, minimalData);
    console.log('✅ Minimal write successful');
    
    // Test 4: Read back the document
    console.log('\nTest 4: Read Back Test');
    const readDoc = await getDoc(testDocRef);
    if (readDoc.exists()) {
      console.log('✅ Read back successful:', readDoc.data());
    } else {
      console.error('❌ Document not found after write');
    }
    
    // Test 5: Test with user UID
    console.log('\nTest 5: User UID Write Test');
    const userDocRef = doc(firestore, 'userprofiles', auth.currentUser.uid);
    const userData = {
      debugTest: true,
      timestamp: serverTimestamp(),
      uid: auth.currentUser.uid
    };
    
    console.log('Writing to user document:', userData);
    await setDoc(userDocRef, userData, { merge: true });
    console.log('✅ User document write successful');
    
    // Cleanup test document
    await setDoc(testDocRef, {}, { merge: false });
    
    return { success: true, message: 'All tests passed' };
    
  } catch (error) {
    console.error('❌ Debug test failed:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('Full error:', error);
    
    return { 
      success: false, 
      error: error.message,
      code: error.code,
      fullError: error
    };
  }
}

/**
 * Quick connectivity test - run this first to check basic Firestore access
 */
export async function quickConnectivityTest() {
  console.log('=== QUICK CONNECTIVITY TEST ===');
  
  try {
    // Test 1: Basic Firestore reference
    console.log('1. Testing basic Firestore reference...');
    const testCollection = firestore._delegate || firestore;
    console.log('Firestore delegate:', testCollection);
    
    // Test 2: Check network connectivity
    console.log('2. Checking network status...');
    if (typeof navigator !== 'undefined') {
      console.log('Navigator online:', navigator.onLine);
    }
    
    // Test 3: Try to create a document reference (doesn't write, just creates ref)
    console.log('3. Testing document reference creation...');
    const testDocRef = doc(firestore, 'userprofiles', 'connectivity-test');
    console.log('Document reference created:', testDocRef.path);
    
    // Test 4: Try a very simple write with immediate timeout
    console.log('4. Testing simple write with 5-second timeout...');
    const simpleData = { connectivityTest: true };
    
    const writePromise = setDoc(testDocRef, simpleData);
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('TIMEOUT: Write took longer than 5 seconds')), 5000)
    );
    
    await Promise.race([writePromise, timeoutPromise]);
    console.log('✅ Simple write successful');
    
    // Test 5: Try to read it back
    console.log('5. Testing read back...');
    const readPromise = getDoc(testDocRef);
    const readTimeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('TIMEOUT: Read took longer than 5 seconds')), 5000)
    );
    
    const docSnap = await Promise.race([readPromise, readTimeoutPromise]);
    if (docSnap.exists()) {
      console.log('✅ Read back successful:', docSnap.data());
    } else {
      console.log('⚠️ Document not found after write');
    }
    
    // Cleanup
    await setDoc(testDocRef, {}, { merge: false });
    
    return { success: true, message: 'All connectivity tests passed' };
    
  } catch (error) {
    console.error('❌ Connectivity test failed at step:', error.message);
    console.error('Full error:', error);
    
    // Analyze the error
    if (error.message.includes('TIMEOUT')) {
      console.error('🔍 DIAGNOSIS: Firestore operations are timing out');
      console.error('Possible causes:');
      console.error('- Network connectivity issues');
      console.error('- Firestore service is down');
      console.error('- Incorrect project configuration');
      console.error('- Firestore rules blocking access');
    } else if (error.code === 'permission-denied') {
      console.error('🔍 DIAGNOSIS: Permission denied');
      console.error('Check your Firestore security rules');
    } else if (error.code === 'unavailable') {
      console.error('🔍 DIAGNOSIS: Firestore service unavailable');
      console.error('Check network connection and Firebase status');
    }
    
    return { success: false, error: error.message, code: error.code };
  }
}

/**
 * Test if the userprofiles collection exists and is accessible
 */
export async function testCollectionAccess() {
  console.log('=== TESTING COLLECTION ACCESS ===');
  
  try {
    if (!auth.currentUser) {
      return { success: false, error: 'No authenticated user' };
    }
    
    console.log('1. Testing if we can reference the collection...');
    const userDocRef = doc(firestore, 'userprofiles', 'test-doc');
    console.log('✅ Collection reference created:', userDocRef.path);
    
    console.log('2. Testing if we can write to the collection...');
    const testData = {
      test: true,
      timestamp: serverTimestamp(),
      message: 'Collection access test'
    };
    
    await setDoc(userDocRef, testData);
    console.log('✅ Write successful');
    
    console.log('3. Testing if we can read from the collection...');
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      console.log('✅ Read successful:', docSnap.data());
    } else {
      console.log('❌ Document not found after write');
    }
    
    console.log('4. Testing collection query...');
    const collectionRef = collection(firestore, 'userprofiles');
    const q = query(collectionRef, limit(1));
    const querySnapshot = await getDocs(q);
    
    console.log('✅ Collection query successful, docs found:', querySnapshot.size);
    
    console.log('5. Cleaning up test document...');
    await setDoc(userDocRef, {}, { merge: false });
    console.log('✅ Cleanup successful');
    
    return { 
      success: true, 
      message: 'Collection is accessible and writable',
      docsInCollection: querySnapshot.size
    };
    
  } catch (error) {
    console.error('❌ Collection access test failed:', error);
    
    let diagnosis = 'Unknown error';
    if (error.code === 'permission-denied') {
      diagnosis = 'Permission denied - check Firestore security rules';
    } else if (error.code === 'not-found') {
      diagnosis = 'Collection or database not found';
    } else if (error.message.includes('400')) {
      diagnosis = 'Bad request - likely data validation issue';
    } else if (error.code === 'unavailable') {
      diagnosis = 'Firestore service unavailable';
    }
    
    return {
      success: false,
      error: error.message,
      code: error.code,
      diagnosis: diagnosis
    };
  }
}

// Make debugFirestore, quickConnectivityTest, and testCollectionAccess available globally for browser console testing
if (typeof window !== 'undefined') {
  window.debugFirestore = debugFirestore;
  window.quickConnectivityTest = quickConnectivityTest;
  window.testCollectionAccess = testCollectionAccess;
}
