const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { main: "./src/js/index.js" },
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js"
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src/"),
      media: path.resolve(__dirname, "src/media/"),
      app: path.resolve(__dirname, "src/js/app/"),
      actions: path.resolve(__dirname, "src/js/app/actions/"),
      components: path.resolve(__dirname, "src/js/app/components/"),
      containers: path.resolve(__dirname, "src/js/app/containers/"),
      pages: path.resolve(__dirname, "src/js/app/pages/"),
      reducers: path.resolve(__dirname, "src/js/app/reducers/"),
      routes: path.resolve(__dirname, "src/js/app/routes/"),
      selectors: path.resolve(__dirname, "src/js/app/selectors/"),
      types: path.resolve(__dirname, "src/js/app/types/"),
      data: path.resolve(__dirname, "src/js/data/")
    },
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              "transform-class-properties",
              "transform-es2015-classes",
              "transform-object-rest-spread",
              "transform-async-to-generator"
            ]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
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
      },
      {
        test: /\.(png|jpg|svg|gif|mp3|mp4|ttf|eot|woff)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./assets/media/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "main.[contenthash].css"
    })
  ]
};
