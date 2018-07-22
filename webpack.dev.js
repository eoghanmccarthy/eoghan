const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const CircularDependencyPlugin = require("circular-dependency-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    publicPath: "/assets/",
    contentBase: path.resolve(__dirname, "dist/"),
    watchContentBase: true,
    historyApiFallback: true,
    port: 6060
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
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
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: true,
      cwd: process.cwd()
    })
  ]
});
