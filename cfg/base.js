var path = require('path');

var port = 8000;
var stylusNib = require('nib');
var srcPath = path.join(__dirname, '/../src');
const isProduction = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging';
var publicPath = isProduction ? '/assets/' : '/';
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  port,
  debug: true,
  output: {
    path: path.join(__dirname, '../assets/'),
    filename: 'app.js',
    publicPath,
  },
  devServer: {
    hot: true,
    contentBase: './src/',
    historyApiFallback: true,
    disableHostCheck: true,
    publicPath: '/',
    noInfo: false,
    stats: {
      assets: true,
      colors: true,
      version: true,
      hash: true,
      timings: true,
      chunks: true,
      chunkModules: true
    }
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      config: `${srcPath}/config/${process.env.REACT_WEBPACK_ENV}`,
    },
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, '../node_modules')
    ]
  },
  stylus: {
    use: [stylusNib()]
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, '../src'),
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('style', 'css!sass?outputStyle=expanded')
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.styl/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
