/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  output: 'export', // Explicit static export
  typescript: {
    ignoreBuildErrors: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  // Remove trailingSlash if you don't need it
  trailingSlash: true, // Often needed for GitHub Pages
};

export default config;