const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('../../webpack.config');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // root file
  entry: './src/client.js',

  // output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};

module.exports = merge(baseConfig, config);
