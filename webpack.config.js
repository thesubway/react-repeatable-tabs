var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/RepeatableTabs.jsx",
  output: {
    path: path.resolve("lib"),
    filename: "RepeatableTabs.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      }
    ]
  }
};
