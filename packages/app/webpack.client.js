const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('../../webpack.config');
const webpackNodeExternals = require('webpack-node-externals');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ChunksWebpackPlugin = require('chunks-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

const config = {
  // root file
  entry: './src/client/index.js',

  // output file
  output: {
    filename: 'static/[name].[contenthash:4].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'static/[name].[contenthash:4].js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
    ]
  },

  externals: [
    '@loadable/components',
    webpackNodeExternals()
  ],

  plugins: [
    new LoadablePlugin(),
    new ChunksWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/[name].[contenthash].css'
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
    splitChunks: {
      chunks: 'async',
      minSize: 200,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-helment)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      }
    },
  },
};

module.exports = merge(baseConfig, config);
