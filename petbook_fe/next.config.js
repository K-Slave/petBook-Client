/**
 * @type {import('next').NextConfig}
 */

const path = require("path");

module.exports = {
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
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
        source: "/api/:path*",
        destination: "https://api.petbook.site/api/:path*",
      },
    ];
  },
  images: {
    domains: ["objectstorage.ap-seoul-1.oraclecloud.com"],
  },
};
