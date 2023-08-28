/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'https://api.skinaro.id/',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'https://skinaro.id/',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
