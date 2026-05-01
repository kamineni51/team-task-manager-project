export const environment = {
  production: false,
  apiUrl:
    window.location.hostname === 'localhost'
      ? 'http://localhost:3000/api'
      : 'https://team-task-manager-project-production-62d2.up.railway.app/',
  trackingApiUrl: 'https://visitor-tracking-api.vercel.app/api/visit',
};
