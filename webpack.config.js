const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader"
        ]
      }
    ]
  },

  /* Minimize all vendored css */
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new UglifyJsPlugin()
    ]
  },

  /* What plugins to use.
   */
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "../dist/css/vendor.css",
      chunkFilename: "vendor.css"
    }),
    //new webpack.HotModuleReplacementPlugin(),
  ]
}
