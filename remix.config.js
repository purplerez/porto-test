/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    serverBuildTarget: "vercel", // Pastikan ini adalah 'vercel'
    future: {
      v3_fetcherPersist: true,
      v3_lazyRouteDiscovery: true,
      v3_relativeSplatPath: true,
      v3_singleFetch: true,
      v3_throwAbortReason: true,
    },
  };
  