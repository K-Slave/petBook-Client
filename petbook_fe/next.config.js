/**
 * @type {import('next').NextConfig}
 */

const path = require("path");

const nextConfig = {
  // reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.petbook.site/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack } // options
  ) => {
    return config;
  },
};
