require('dotenv').config();

const config = require('./webpack.config.js');
const webpack = require('webpack');

config.devServer = {
  contentBase: './build',
  historyApiFallback: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  port: process.env.PORT
};

config.mode = 'development';

module.exports = config;
