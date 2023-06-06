/** @type {import('next').NextConfig} */
const headers = require('./headers');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github-readme-stats.vercel.app', 'images.microcms-assets.io'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ];
  }
};

module.exports = nextConfig;
