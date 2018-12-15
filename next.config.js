/*
module.exports = {
  distDir: "build"
};
*/
const withTypescript = require("@zeit/next-typescript");
const withMDX = require("@zeit/next-mdx")({
  extension: /.mdx?$/
});

module.exports = withTypescript(
  withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"]
  })
);
