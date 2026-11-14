/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      {
        source: '/histoire',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
