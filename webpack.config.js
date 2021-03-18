const webpack = require('webpack');

/* This describes the behavior of webpack.
 */
module.exports = {
  /* The main javascript file for the application
   */
  entry: {
    index: ["./src/index.js", "./views/css/vendor.scss"],
    vendor: "./src/vendor.js",
  },

  /* Just... ignore this for now.
   */
  performance: {
    hints: false
  },

  /* The default mode.
   */
  mode: "production",

  /* The eventual transpiled output file.
   */
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    sourceMapFilename: "compiled-[name].js.map"
  },

  /* We want source maps!
   */
  devtool: "source-map",

  /* What file types to filter.
   */
  resolve: {
    extensions: ['.js', '.css', '.scss']
  },

  /* How to load/import modules (for each file).
   */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          "babel-loader",
          "eslint-loader",
        ]
      }
    ]
  }
}
