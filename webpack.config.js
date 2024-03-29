const path = require("path");
const HtmlWwebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  devServer: {
    watchFiles: ["./template.html"],
  },
  devtool: "eval-source-map",
  plugins: [
    new HtmlWwebpackPlugin({
      title: "Template",
      template: "template.html",
    }),
    new Dotenv({
      path: "./.env",
      safe: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
