window.__ENV__ = {
  VITE_API_BASE_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'http://localhost:8080/api' 
    : 'https://clinic-website-production-d27445a8.up.railway.app/api'
};
