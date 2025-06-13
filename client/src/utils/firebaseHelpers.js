/**
 * Utility functions for Firebase operations with better error handling
 */

/**
 * Execute a Firestore operation with timeout and retry logic
 * @param {Function} operation - The Firestore operation to perform
 * @param {Object} options - Configuration options
 * @param {number} options.timeoutMs - Timeout in milliseconds (default: 10000)
 * @param {boolean} options.retry - Whether to retry on failure (default: true)
 * @param {number} options.retryDelay - Delay before retry in milliseconds (default: 1000)
 * @param {string} options.operationName - Name of operation for logging (default: 'Firestore operation')
 * @returns {Promise<*>} - Result of the operation
 */
export const executeFirestoreOperation = async (operation, options = {}) => {
  const {
    timeoutMs = 10000,
    retry = true,
    retryDelay = 1000,
    operationName = 'Firestore operation'
  } = options;

  // Create a timeout promise
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error(`${operationName} timed out after ${timeoutMs}ms`)), timeoutMs)
  );

  try {
    // Execute operation with timeout
    console.log(`Starting ${operationName}`);
    return await Promise.race([operation(), timeoutPromise]);
  } catch (error) {
    console.warn(`${operationName} failed or timed out:`, error.message);
    
    // Retry logic
    if (retry) {
      console.log(`Retrying ${operationName} after ${retryDelay}ms delay...`);
      
      // Wait for the retry delay
      await new Promise(resolve => setTimeout(resolve, retryDelay));
      
      // Execute operation without timeout on retry
      try {
        return await operation();
      } catch (retryError) {
        console.error(`${operationName} retry failed:`, retryError.message);
        throw retryError;
      }
    } else {
      throw error;
    }
  }
};

/**
 * Checks if the error is related to network connectivity
 * @param {Error} error - The error to check
 * @returns {boolean} - True if it's a network-related error
 */
export const isNetworkError = (error) => {
  // Check for common network error codes and patterns
  if (!error) return false;
  
  const networkErrorMessages = [
    'network error',
    'failed to fetch',
    'network request failed',
    'connection refused',
    'timeout',
    'offline',
    'internet',
    'ECONNREFUSED',
    'ETIMEDOUT'
  ];
  
  // Check if error message contains any network-related terms
  const message = error.message ? error.message.toLowerCase() : '';
  return networkErrorMessages.some(term => message.includes(term));
};

/**
 * Log detailed information about a Firebase error
 * @param {Error} error - The error to log
 * @param {string} context - Context where the error occurred
 */
export const logFirebaseError = (error, context = 'Firebase operation') => {
  console.group(`Firebase Error in ${context}`);
  console.error(`Error name: ${error.name}`);
  console.error(`Error message: ${error.message}`);
  
  // Firebase specific error info
  if (error.code) console.error(`Firebase error code: ${error.code}`);
  if (error.customData) console.error('Custom data:', error.customData);
  
  // Server response details for network errors
  if (error.response) {
    console.error('Server response:', {
      status: error.response.status,
      statusText: error.response.statusText,
      data: error.response.data
    });
  }
  
  console.error('Stack trace:', error.stack);
  console.groupEnd();
};
