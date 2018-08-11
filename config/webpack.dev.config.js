const commonPaths = require('./common-paths');
const webpack = require('webpack');

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: commonPaths.outputPath,
        compress: true,
        hot: false,
        port: 3002
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;