/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: { domains: [] },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/furniture",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
