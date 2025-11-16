/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_DOMAIN_NAME: process.env.NEXT_PUBLIC_DOMAIN_NAME,
  },
};

module.exports = nextConfig;

