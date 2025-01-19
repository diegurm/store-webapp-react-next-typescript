/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'serverless',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['github.com'],
  },
}

module.exports = nextConfig
