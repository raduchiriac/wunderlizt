const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    new ExtractTextPlugin('style.bundle.css')
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
      ],
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: 'css-loader',
      }),
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};