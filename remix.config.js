/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildTarget: "vercel",
  ignoredRouteFiles: ["**/.*"],
  future: {
    v3_routeConvention: true,
  },
};
