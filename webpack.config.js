const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'assets/micro-config/micro-config.js',
    library: 'micro-config',
    libraryTarget: 'amd',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'production',
  module: {
    rules: [
      {parser: {System: false}},
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      }
    ],
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  devtool: 'source-map',
  externals: [
    /^lodash$/,
    /^single-spa$/,
    /^rxjs\/?.*$/,
  ],
};
