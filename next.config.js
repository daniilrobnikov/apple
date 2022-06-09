/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/shop',
        destination: '/store',
        permanent: true,
      },
      {
        source: '/shop/all/accessories',
        destination: '/shop/accessories/all',
        permanent: true,
      },
      {
        source: '/shop/all/accessories/:category*',
        destination: '/shop/accessories/all/:category*',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/store',
        destination: '/shop',
      },
      {
        source: '/shop/accessories/all',
        destination: '/shop/all/accessories',
      },
      {
        source: '/shop/accessories/all/:category*',
        destination: '/shop/all/accessories/:category*',
      },
    ]
  },
}

module.exports = nextConfig
