/**
 * @type {import('next').NextConfig}
 */

const path = require("path");

module.exports = {
  compress: true,
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "/src/styles")],
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack } // options
  ) => {
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "https://api.petbook.site/api/v1/:path*",
      },
    ];
  },
  images: {
    domains: ["objectstorage.ap-seoul-1.oraclecloud.com"],
  },
};
