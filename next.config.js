/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async rewrites() {
      return [
        {
          source: '*',
          destination: 'http://localhost:5000/*',
        },
      ]
    },
};

module.exports = nextConfig
