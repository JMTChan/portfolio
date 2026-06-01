/** @type {import('next').NextConfig} */

// If deploying to a project page (https://USER.github.io/REPO), set this to "/REPO".
// For a user/org root page or a custom domain, leave it as "".
const repoBase = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  // Required for GitHub Pages: emit a fully static site into ./out
  output: 'export',

  // GitHub Pages serves from folders, so emit /about/index.html instead of /about.html
  trailingSlash: true,

  // Project-page deploys live under a sub-path; prefix assets/links accordingly.
  basePath: repoBase,
  assetPrefix: repoBase || undefined,

  // Next/Image optimization needs a server. Static export can't use it, so disable it.
  // (We will use plain <img> tags in components instead of next/image.)
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
