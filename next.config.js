/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.imgur.com']
  },
  env: {
    backendUrl: 'https://delilahresto-api-production.up.railway.app/api/'
  }
}

module.exports = nextConfig
