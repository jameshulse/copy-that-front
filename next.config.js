const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === "development"
    ? {} // We're never in "production server" phase when in development mode
    : !process.env.NOW_REGION
    ? require("next/constants") // Get values from `next` package when building locally
    : require("next-server/constants"); // Get values from `next-server` package when building on now v2
const { ANALYZE } = process.env

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {};
  }

  const withTypescript = require("@zeit/next-typescript");
  const withMDX = require("@zeit/next-mdx")({
    extension: /.mdx?$/
  });

  return withTypescript(
    withMDX({
      webpack: function (config, { isServer }) {
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
    })
  );
};
