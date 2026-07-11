/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      {
        source: '/equipement',
        destination: 'https://spsvacuumpump.com',
        permanent: true,
      },
      {
        source: '/equipement/:path*',
        destination: 'https://spsvacuumpump.com/:path*',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
