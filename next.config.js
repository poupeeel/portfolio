// next.config.js
import WithPWA from "next-pwa";

const withPWA = WithPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/portfolio/", // important for subpath
  sw: "service-worker.js",
});

/** @type {import('next').NextConfig} */
const config = withPWA({
  reactStrictMode: true,
  output: "export",
  basePath: "/portfolio", // ✅ correct key
  images: {
    unoptimized: true,     // ✅ needed for static export
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});

export default config;
