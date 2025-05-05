/** @type {import('@remix-run/dev').AppConfig} */
export default {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  serverBuildTarget: "vercel", // ini penting agar cocok dengan Vercel
  ignoredRouteFiles: ["**/.*"],
  future: {
    v3_routeConvention: true
  }
};
