/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['app.topresearchpapers.com','localhost'],
  },
}

module.exports = nextConfig
