/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: { includePaths: [path.join(__dirname, 'styles')] },
  images: { domains: ['media.graphassets.com'] },
};

module.exports = nextConfig;
