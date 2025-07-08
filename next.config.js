/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/nexes1' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nexes1/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 