const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('../../webpack.config');
const webpackNodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');

const config = {
  // bundle for nodejs
  target: 'node',

  // root file
  entry: './src/server/index.js',

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'isomorphic-style-loader',
          'css-loader'
        ],
      },
    ]
  },

  plugins: [
    new LoadablePlugin()
  ],

  // output file
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: ['@loadable/webpack-plugin', webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
