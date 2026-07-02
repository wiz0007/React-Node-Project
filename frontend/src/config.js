const isBrowser = typeof window !== 'undefined';
const isVercelPreview = isBrowser && window.location.hostname.endsWith('.vercel.app');

export const API_BASE_URL = isVercelPreview
  ? 'https://react-node-project-lixm.onrender.com'
  : process.env.REACT_APP_API_URL || 'http://localhost:8000';
