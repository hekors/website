/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["hekors-strapi.herokuapp.com"]
  }
}

module.exports = nextConfig
