/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tz.smart-ui.pro',
      },
    ],
  },
}

module.exports = nextConfig
