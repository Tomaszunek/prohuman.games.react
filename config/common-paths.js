const path = require('path');

module.exports = {
    outputPath: path.resolve(__dirname, '../', 'public'),
    publicPath: 'http://localhost:3001/public/',
    imagesPath: path.join(__dirname, 'images'),
    root: path.resolve(__dirname),
    template: './src/index.html',
    favicon: './src/favicon.ico'
};