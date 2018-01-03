const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const path = require("path")

module.exports = merge(common, {
    devServer: {
        publicPath: "/",
        contentBase: path.join(__dirname, "/dist"),
        watchContentBase: true,
        historyApiFallback: true
    }
})
