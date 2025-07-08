/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // For GitHub Pages deployment, we need basePath only if the repository is not named 'username.github.io'
  // If repository is named 'sowrabb.github.io', no basePath is needed
  // If repository is named 'nexes1', basePath '/nexes1' is needed
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 