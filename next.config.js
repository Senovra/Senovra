/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'root',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
