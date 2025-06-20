# Firestore 400 Error Debugging Guide

## Updated Quick Start (After Fix)

The userProfileService.js has been updated with better error handling and validation. Here's how to debug the issue:

### 1. **Test Connectivity First**
Open your browser console and run:
```javascript
// Test basic Firestore connectivity
await window.quickConnectivityTest();
```

### 2. **Debug Profile Creation**
```javascript
// Run the comprehensive debug function
await window.debugProfileCreation();
```

### 3. **Full Firestore Debug**
```javascript
// Run all debug tests
await window.debugFirestore();
```

## Key Fixes Applied

1. **Added UID Validation**: Now validates Firebase UIDs before attempting writes
2. **Enhanced Authentication Checks**: Ensures user is authenticated and UID matches
3. **Better Data Sanitization**: More thorough removal of problematic data types
4. **Comprehensive Error Logging**: Detailed error analysis for 400 errors

## Manual Console Testing

You can also test directly in the browser console:

```javascript
// Test user profile creation manually
const { createOrUpdateUserProfile } = await import('./src/features/auth/services/userProfileService.js');
const { auth } = await import('./src/config/firebase.js');

// Make sure you're logged in first
if (auth.currentUser) {
  await createOrUpdateUserProfile(auth.currentUser.uid, { 
    bio: 'Test bio', 
    profileSetup: true 
  });
} else {
  console.error('Please log in first');
}
```

## Common 400 Error Causes & Fixes

### 1. Invalid Document ID (UID)
```javascript
// The new code validates UIDs and will throw clear errors for:
// - Empty strings
// - Non-string values  
// - UIDs containing forward slashes
// - UIDs matching __.*__ pattern
```

### 2. Authentication Issues
```javascript
// The new code ensures:
// - User is authenticated before writing
// - UID matches authenticated user
// - Throws clear error messages for auth failures
```

### 3. Invalid Field Names
```javascript
// ❌ Bad - field names that cause 400 errors
{
  '123field': 'value',        // starts with number
  'field.name': 'value',      // contains dot
  'field/path': 'value',      // contains slash
}

// ✅ Good - valid field names
{
  'field123': 'value',
  'fieldName': 'value',
  'field_path': 'value',
}
```

### 2. Invalid Data Types
```javascript
// ❌ Bad - data types that cause 400 errors
{
  undefinedField: undefined,
  nanValue: NaN,
  infinityValue: Infinity,
  fileObject: new File([''], 'test.txt'),
}

// ✅ Good - valid data types
{
  stringField: 'text',
  numberField: 42,
  booleanField: true,
  arrayField: [1, 2, 3],
  objectField: { key: 'value' },
  timestampField: serverTimestamp(),
}
```

### 3. Authentication Issues
```javascript
// Check if user is authenticated
console.log('Current user:', auth.currentUser);
console.log('User UID:', auth.currentUser?.uid);

// Ensure user is logged in before writing
if (!auth.currentUser) {
  console.error('User not authenticated');
}
```

### 4. Document ID Issues
```javascript
// ❌ Bad - invalid document IDs
doc(firestore, 'collection', '');           // empty
doc(firestore, 'collection', '.hidden');    // starts with dot
doc(firestore, 'collection', '__reserved'); // double underscore

// ✅ Good - valid document IDs
doc(firestore, 'collection', 'user123');
doc(firestore, 'collection', auth.currentUser.uid);
```

## Debug Output Analysis

When you see a 400 error, look for these patterns in the console:

1. **Field validation errors**: Check for problematic field names
2. **Data type errors**: Look for undefined, NaN, or File objects
3. **Authentication errors**: Verify auth.currentUser exists
4. **Document path errors**: Check the document reference path

## Firestore Rules Testing

Temporarily test with open rules (⚠️ **DEVELOPMENT ONLY**):

```javascript
// In firestore.rules - FOR TESTING ONLY
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; // REMOVE IN PRODUCTION
    }
  }
}
```

Deploy with: `firebase deploy --only firestore:rules`

## Next Steps

1. Run the debug tests and check the console output
2. Look for specific error patterns mentioned above
3. Fix any identified issues in your data structure
4. Test with minimal data first, then gradually add complexity
5. Check Firestore rules if basic connectivity works but writes fail

## Get Help

If the debugger shows all tests passing but you still get 400 errors:
1. Share the exact error message from the console
2. Share the data payload that's failing
3. Check the Network tab in DevTools for the actual HTTP request details
