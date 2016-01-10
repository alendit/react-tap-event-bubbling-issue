var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.json'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
    ],
  },
  plugins: [
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // proxy: {
    //   '*': 'http://127.0.0.1:' + (process.env.PORT || 3000)
    // },
    host: '127.0.0.1',
  },
};
