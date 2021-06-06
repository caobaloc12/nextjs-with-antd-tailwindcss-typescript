/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL || 'https://jsonplaceholder.typicode.com',
  },
})
