const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { minimize: true } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              config: {
                path: "./postcss.config.js"
              },
              plugins: loader => [require("autoprefixer")()]
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        ecma: 8,
        warnings: false,
        mangle: true
      }
    })
    // new webpack.DefinePlugin({
    //     "process.env.NODE_ENV": JSON.stringify("production")
    // })
  ]
});
