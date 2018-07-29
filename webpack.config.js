const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './lib/index.js',
  devServer: {
    proxy: {
      '/': 'http://localhost:56709'
    },
  },
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }, {
        loader: 'eslint-loader',
        options: {
          emitWarning: true
        },
      }],
    }]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
}
