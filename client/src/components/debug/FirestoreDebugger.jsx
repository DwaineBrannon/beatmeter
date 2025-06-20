import React, { useState } from 'react';
import { useAuth } from '../../features/auth/context/AuthContext';
import { debugFirestore, createOrUpdateUserProfile } from '../../features/auth/services/userProfileService';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { firestore } from '../../config/firebase';

const FirestoreDebugger = () => {
  const [debugResults, setDebugResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useAuth();

  const addResult = (result) => {
    setDebugResults(prev => [...prev, { ...result, timestamp: new Date().toLocaleTimeString() }]);
  };

  const clearResults = () => {
    setDebugResults([]);
  };

  const runDebugTest = async () => {
    setIsLoading(true);
    addResult({ type: 'info', message: 'Starting Firestore debug tests...' });

    try {
      const result = await debugFirestore();
      addResult({ 
        type: result.success ? 'success' : 'error', 
        message: result.success ? 'Debug tests passed' : `Debug failed: ${result.error}`,
        details: result
      });
    } catch (error) {
      addResult({ type: 'error', message: `Debug test error: ${error.message}`, details: error });
    }

    setIsLoading(false);
  };

  const testUserProfileCreation = async () => {
    if (!currentUser) {
      addResult({ type: 'error', message: 'No authenticated user found' });
      return;
    }

    setIsLoading(true);
    addResult({ type: 'info', message: 'Testing user profile creation...' });

    try {
      const result = await createOrUpdateUserProfile(currentUser.uid, {
        debugTest: true,
        testField: 'test value',
        testNumber: 123,
        testArray: ['item1', 'item2'],
        testObject: { nested: 'value' }
      }, true);

      addResult({ 
        type: 'success', 
        message: 'User profile creation successful',
        details: result
      });
    } catch (error) {
      addResult({ 
        type: 'error', 
        message: `User profile creation failed: ${error.message}`,
        details: {
          code: error.code,
          message: error.message,
          originalError: error.originalError,
          uid: error.uid,
          documentPath: error.documentPath
        }
      });
    }

    setIsLoading(false);
  };

  const testProblematicData = async () => {
    if (!currentUser) {
      addResult({ type: 'error', message: 'No authenticated user found' });
      return;
    }

    setIsLoading(true);
    addResult({ type: 'info', message: 'Testing with potentially problematic data...' });

    const problematicData = {
      // Valid fields
      validString: 'test',
      validNumber: 42,
      validBoolean: true,
      validArray: [1, 2, 3],
      validObject: { key: 'value' },
      validTimestamp: serverTimestamp(),
      
      // Potentially problematic fields
      'field.with.dots': 'should fail',
      '123numericStart': 'should fail',
      '_privateField': 'might fail',
      'field/with/slashes': 'should fail',
      undefinedField: undefined,
      nullField: null,
      nanValue: NaN,
      infinityValue: Infinity,
    };

    try {
      const docRef = doc(firestore, 'userprofiles', `test-problematic-${Date.now()}`);
      await setDoc(docRef, problematicData);
      
      addResult({ 
        type: 'warning', 
        message: 'Problematic data test unexpectedly succeeded',
        details: problematicData
      });
    } catch (error) {
      addResult({ 
        type: 'info', 
        message: `Problematic data test failed as expected: ${error.message}`,
        details: {
          code: error.code,
          message: error.message,
          problematicData
        }
      });
    }

    setIsLoading(false);
  };

  const testMinimalData = async () => {
    if (!currentUser) {
      addResult({ type: 'error', message: 'No authenticated user found' });
      return;
    }

    setIsLoading(true);
    addResult({ type: 'info', message: 'Testing with minimal valid data...' });

    try {
      const minimalData = {
        test: true,
        timestamp: serverTimestamp()
      };

      const docRef = doc(firestore, 'userprofiles', currentUser.uid);
      await setDoc(docRef, minimalData, { merge: true });
      
      addResult({ 
        type: 'success', 
        message: 'Minimal data test successful',
        details: minimalData
      });
    } catch (error) {
      addResult({ 
        type: 'error', 
        message: `Minimal data test failed: ${error.message}`,
        details: error
      });
    }

    setIsLoading(false);
  };

  const getResultStyle = (type) => {
    const baseStyle = {
      padding: '8px 12px',
      margin: '4px 0',
      borderRadius: '4px',
      fontSize: '14px',
      fontFamily: 'monospace'
    };

    switch (type) {
      case 'success':
        return { ...baseStyle, backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb' };
      case 'error':
        return { ...baseStyle, backgroundColor: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb' };
      case 'warning':
        return { ...baseStyle, backgroundColor: '#fff3cd', color: '#856404', border: '1px solid #ffeaa7' };
      case 'info':
      default:
        return { ...baseStyle, backgroundColor: '#d1ecf1', color: '#0c5460', border: '1px solid #bee5eb' };
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Firestore 400 Error Debugger</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Current User Info:</h3>
        <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
          {JSON.stringify({
            uid: currentUser?.uid,
            email: currentUser?.email,
            displayName: currentUser?.displayName,
            authenticated: !!currentUser
          }, null, 2)}
        </pre>
      </div>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button 
          onClick={runDebugTest} 
          disabled={isLoading}
          style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Run Full Debug Test
        </button>
        
        <button 
          onClick={testUserProfileCreation} 
          disabled={isLoading || !currentUser}
          style={{ padding: '10px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Test User Profile Creation
        </button>
        
        <button 
          onClick={testMinimalData} 
          disabled={isLoading || !currentUser}
          style={{ padding: '10px 15px', backgroundColor: '#17a2b8', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Test Minimal Data
        </button>
        
        <button 
          onClick={testProblematicData} 
          disabled={isLoading || !currentUser}
          style={{ padding: '10px 15px', backgroundColor: '#ffc107', color: 'black', border: 'none', borderRadius: '4px' }}
        >
          Test Problematic Data
        </button>
        
        <button 
          onClick={clearResults}
          style={{ padding: '10px 15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Clear Results
        </button>
      </div>

      <div>
        <h3>Debug Results:</h3>
        <div style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ddd', borderRadius: '4px' }}>
          {debugResults.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
              No debug results yet. Click a test button to start.
            </div>
          ) : (
            debugResults.map((result, index) => (
              <div key={index} style={getResultStyle(result.type)}>
                <div style={{ fontWeight: 'bold' }}>
                  [{result.timestamp}] {result.type.toUpperCase()}: {result.message}
                </div>
                {result.details && (
                  <details style={{ marginTop: '8px' }}>
                    <summary style={{ cursor: 'pointer' }}>Show Details</summary>
                    <pre style={{ marginTop: '8px', fontSize: '12px', whiteSpace: 'pre-wrap' }}>
                      {JSON.stringify(result.details, null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <h4>Quick Debugging Steps:</h4>
        <ol>
          <li><strong>Run Full Debug Test</strong> - Tests Firebase connection, auth, and basic operations</li>
          <li><strong>Test User Profile Creation</strong> - Tests your specific user profile creation function</li>
          <li><strong>Test Minimal Data</strong> - Tests with minimal valid data to isolate issues</li>
          <li><strong>Test Problematic Data</strong> - Tests with known problematic field names/values</li>
        </ol>
        
        <h4>Common 400 Error Causes:</h4>
        <ul>
          <li>Field names starting with numbers (e.g., "123field")</li>
          <li>Field names containing dots or slashes (e.g., "field.name", "field/name")</li>
          <li>Undefined, null, NaN, or Infinity values</li>
          <li>File or Blob objects in data</li>
          <li>Invalid document ID format</li>
          <li>Authentication issues</li>
          <li>Firestore security rules blocking the write</li>
        </ul>
      </div>
    </div>
  );
};

export default FirestoreDebugger;
