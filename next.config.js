/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
}

module.exports = {
  nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
} 
