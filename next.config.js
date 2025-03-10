const webpack = require("webpack");

module.exports = {
  images: {
    domains: ["seedsman.postaffiliatepro.com"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      // config.output.publicPath = `/_next/static/chunks/`;
      // config.resolve.fallback = config.resolve.fallback || {};
      // config.resolve.fallback.buffer = require.resolve("buffer/");
      // config.resolve.fallback.stream = require.resolve("stream-browserify");
      // config.resolve.fallback.http = require.resolve("stream-http");
      // config.resolve.fallback.https = require.resolve("https-browserify");
      // config.resolve.fallback.crypto = require.resolve("crypto-browserify");
    }

    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser",
      })
    );

    return config;
  },
  reactStrictMode: true,
};
