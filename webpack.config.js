// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: ["babel-polyfill", "./src/index.tsx"],
  module: {
    rules: [
      { test: /\.(ts|tsx)?$/, use: "ts-loader", exclude: /node_modules/ },
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: { loader: "babel-loader" },
      // },
      // { test: /\.html$/, use: [{ loader: "html-loader" }] },
      // {
      //   test: /\.module\.s(a|c)ss$/,
      //   loader: [
      //     isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
      //     {
      //       loader: "css-loader",
      //       options: {
      //         modules: true,
      //         localIdentName: "[name]__[local]___[hash:base64:5]",
      //         camelCase: true,
      //         sourceMap: isDevelopment,
      //       },
      //     },
      //     { loader: "sass-loader", options: { sourceMap: isDevelopment } },
      //   ],
      // },
      {
        test: /\.(sass|scss|css)$/,
        exclude: /\.module.(sass|scss|css)$/,
        loader: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          { loader: "sass-loader", options: { sourceMap: isDevelopment } },
        ],
      },
      // {
      //   test: /(\.css$)/,
      //   include: /node_modules/,
      //   loaders: ["style-loader", "css-loader"],
      // },
      { test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/, loader: "url-loader" },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss", ".css"],
  },
  // Source maps support ('inline-source-map' also works)
  devtool: "source-map",
  plugins: [
    new CheckerPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
    }),
  ],
};
