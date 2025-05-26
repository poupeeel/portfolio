import WithPWA from "next-pwa";

const withPWA = WithPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/portfolio/", // important for sub-path
  sw: "service-worker.js",
});

/** @type {import('next').NextConfig} */
const config = withPWA({
  reactStrictMode: true,
  output: "export",
  basePath: "/portfolio", // ✅ required for GitHub Pages
  images: {
    unoptimized: true,     // ✅ required for static hosting
  },
  // ❌ REMOVE i18n to avoid error with output: 'export'
  /*
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  */
});

export default config;
