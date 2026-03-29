// src/utils/api.js
// Central place to get the API base URL from environment variables

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  (import.meta.env.DEV 
    ? 'http://localhost:5001/beatmeter-baf5a/us-central1/api'
    : 'https://us-central1-beatmeter-baf5a.cloudfunctions.net/api');

// Helper to build full API URLs
export function apiUrl(path) {
  // Remove leading slash if present
  const cleanPath = typeof path === 'string' && path.startsWith('/') ? path.slice(1) : path;
  // Ensure no double slashes (but preserve protocol slashes)
  return `${API_BASE_URL}/${cleanPath}`.replace(/([^:]\/)\/+/g, '$1');
}
