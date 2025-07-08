/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // For GitHub Pages deployment with repository name 'nexes1'
  basePath: process.env.NODE_ENV === 'production' ? '/nexes1' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nexes1' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 