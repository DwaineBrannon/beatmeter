import React, { useState } from 'react';
import { auth, firestore } from '../../config/firebase';
import { useAuth } from '../../features/auth/context/AuthContext';
import { createOrUpdateUserProfile } from '../../features/auth/services/userProfileService';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import styled from 'styled-components';

const DebugContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  font-family: monospace;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #0056b3;
  }
  
  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`;

const ResultBox = styled.pre`
  background: #000;
  color: #00ff00;
  padding: 15px;
  border-radius: 4px;
  white-space: pre-wrap;
  max-height: 400px;
  overflow-y: auto;
  margin: 10px 0;
`;

const FirestoreDebugPage = () => {
  const [results, setResults] = useState('');
  const { user } = useAuth();

  const appendResult = (text) => {
    setResults(prev => prev + '\n' + text + '\n' + '='.repeat(50) + '\n');
  };

  const clearResults = () => {
    setResults('');
  };

  const testConnectivity = async () => {
    try {
      appendResult('🔍 Testing Firestore Connectivity...');
      
      if (!auth.currentUser) {
        appendResult('❌ ERROR: No authenticated user');
        return;
      }

      // Test basic Firestore connection
      const testDoc = doc(firestore, 'test', 'connectivity');
      await setDoc(testDoc, { 
        timestamp: new Date(),
        message: 'Connectivity test successful' 
      });
      
      const docSnap = await getDoc(testDoc);
      if (docSnap.exists()) {
        appendResult('✅ SUCCESS: Firestore connectivity working');
        appendResult(`Data: ${JSON.stringify(docSnap.data(), null, 2)}`);
      } else {
        appendResult('❌ ERROR: Document write/read failed');
      }
    } catch (error) {
      appendResult(`❌ ERROR: ${error.code} - ${error.message}`);
    }
  };

  const testCollectionAccess = async () => {
    try {
      appendResult('🔍 Testing userprofiles collection access...');
      
      if (!auth.currentUser) {
        appendResult('❌ ERROR: No authenticated user');
        return;
      }

      const testProfileDoc = doc(firestore, 'userprofiles', `test-${Date.now()}`);
      const testData = {
        displayName: 'Test User',
        email: 'test@example.com',
        createdAt: new Date(),
        uid: `test-${Date.now()}`
      };

      await setDoc(testProfileDoc, testData);
      
      const docSnap = await getDoc(testProfileDoc);
      if (docSnap.exists()) {
        appendResult('✅ SUCCESS: userprofiles collection accessible');
        appendResult(`Data: ${JSON.stringify(docSnap.data(), null, 2)}`);
      } else {
        appendResult('❌ ERROR: Collection access failed');
      }
    } catch (error) {
      appendResult(`❌ ERROR: ${error.code} - ${error.message}`);
      if (error.code === 'permission-denied') {
        appendResult('💡 TIP: Check your Firestore security rules');
      }
    }
  };

  const testProfileCreation = async () => {
    try {
      appendResult('🔍 Testing user profile creation...');
      
      if (!auth.currentUser) {
        appendResult('❌ ERROR: No authenticated user');
        return;
      }

      // Create user profile
      const result = await createOrUpdateUserProfile(auth.currentUser.uid, {
        displayName: user?.displayName || 'Test User',
        email: user?.email || 'test@example.com',
        photoURL: user?.photoURL || null,
        bio: 'Test profile creation',
        createdAt: new Date()
      });

      appendResult('✅ SUCCESS: Profile creation worked');
      appendResult(`Result: ${JSON.stringify(result, null, 2)}`);
    } catch (error) {
      appendResult(`❌ ERROR: ${error.code} - ${error.message}`);
      appendResult(`Full error: ${JSON.stringify(error, Object.getOwnPropertyNames(error), 2)}`);
    }
  };

  const runFullDiagnostic = async () => {
    clearResults();
    appendResult('🚀 Starting Full Firestore Diagnostic...');
    appendResult(`Current user: ${auth.currentUser?.email || 'Not logged in'}`);
    appendResult(`Environment: ${import.meta.env.VITE_USE_EMULATORS === 'true' ? 'Emulator' : 'Production'}`);
    
    await testConnectivity();
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
    
    await testCollectionAccess();
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
    
    await testProfileCreation();
    
    appendResult('🏁 Diagnostic Complete!');
  };

  if (!user) {
    return (
      <DebugContainer>
        <h2>Firestore Debug Tool</h2>
        <p>❌ Please log in to use the debug tools.</p>
      </DebugContainer>
    );
  }

  return (
    <DebugContainer>
      <h2>🔧 Firestore Debug Tools</h2>
      <p>Current User: {user.email}</p>
      <p>Environment: {import.meta.env.VITE_USE_EMULATORS === 'true' ? '🧪 Emulator' : '🌐 Production'}</p>
      
      <div style={{ marginBottom: '20px' }}>
        <Button onClick={testConnectivity}>
          Test Connectivity
        </Button>
        <Button onClick={testCollectionAccess}>
          Test Collection Access
        </Button>
        <Button onClick={testProfileCreation}>
          Test Profile Creation
        </Button>
        <Button onClick={runFullDiagnostic} style={{ backgroundColor: '#007bff', color: 'white' }}>
          Run Full Diagnostic
        </Button>
        <Button onClick={clearResults} style={{ backgroundColor: '#dc3545', color: 'white' }}>
          Clear Results
        </Button>
      </div>

      <ResultBox>
        {results || 'Click a button above to start testing...'}
      </ResultBox>
    </DebugContainer>
  );
};

export default FirestoreDebugPage;
