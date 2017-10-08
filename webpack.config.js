const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  APP: path.resolve(__dirname, 'app'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.APP, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.APP, 'index.html'),
    }),
  ],
};