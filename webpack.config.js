const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        arrow: "./src/1.x.x/index",
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
    },
    output: {
        filename: "[name]-alpha.js",
        path: path.resolve(__dirname, 'build'),
        library: 'arrow',
        libraryTarget: 'umd'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
}