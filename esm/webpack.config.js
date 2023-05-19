const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimize: true,
  },
  mode: "production",
};
