// craco.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add the BundleAnalyzerPlugin to the plugins array
    webpackConfig.plugins.push(new BundleAnalyzerPlugin({analyzerMode:"server"}));
      return webpackConfig;
    },
  },
};
