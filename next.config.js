const withTypescript = require("@zeit/next-typescript");
const withMDX = require("@zeit/next-mdx")({
  extension: /.mdx?$/
});
const { ANALYZE } = process.env;

module.exports = withTypescript(withMDX({
  webpack: function(config, { isServer }) {
    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: true,
        defaultSizes: 'gzip',
        generateStatsFile: true
      }));
    }

    return config;
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  target: 'serverless',
}));
