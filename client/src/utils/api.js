// src/utils/api.js
// Central place to get the API base URL from environment variables

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

// Helper to build full API URLs
export function apiUrl(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Ensure no double slashes
  return `${API_BASE_URL}/${cleanPath}`.replace(/([^:]\/)\/+/, '$1');
}
