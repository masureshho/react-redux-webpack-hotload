var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var baseConfig = require('./base');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = _.merge({
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index'
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      _: 'lodash'
    })
  ]
}, baseConfig);

// Add needed loaders
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loaders: ['react-hot-loader/webpack', 'babel'],
  exclude: /node_modules/,
  include: path.join(__dirname, '/../src')
});

module.exports = config;
