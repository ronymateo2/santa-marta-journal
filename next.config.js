/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Importante si no usas <Image> de Next.js
  },
};

module.exports = nextConfig;
