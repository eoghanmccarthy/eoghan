const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/js/index.js", "./src/scss/main.scss"],
  output: {
    path: path.join(__dirname, "/dist/assets/"),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    }
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
        test: /\.(png|jpg|gif|mp3|mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "../assets/media/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css"
    })
  ]
};
