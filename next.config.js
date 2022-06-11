/** @type {import('next').NextConfig} */

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

// module.exports = withBundleAnalyzer({
//   reactStrictMode: true,
//   async redirects() {
//     return [
//       {
//         source: '/shop',
//         destination: '/store',
//         permanent: true,
//       },
//       {
//         source: '/shop/all/accessories',
//         destination: '/shop/accessories/all',
//         permanent: true,
//       },
//       {
//         source: '/shop/all/accessories/:category*',
//         destination: '/shop/accessories/all/:category*',
//         permanent: true,
//       },
//     ]
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/store',
//         destination: '/shop',
//       },
//       {
//         source: '/shop/accessories/all',
//         destination: '/shop/all/accessories',
//       },
//       {
//         source: '/shop/accessories/all/:category*',
//         destination: '/shop/all/accessories/:category*',
//       },
//     ]
//   },
// })
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },

  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/store',
        destination: '/shop/all',
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
  async redirects() {
    return [
      ...['/shop', '/shop/all'].map((source) => ({
        source,
        destination: '/store',
        permanent: true,
      })),
      ...['mac', 'ipad', 'watch', 'iphone'].map((family) => ({
        source: `/shop/${family}`,
        destination: `/shop/buy-${family}`,
        permanent: true,
      })),
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
})
