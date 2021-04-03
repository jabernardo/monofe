const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('../../webpack.config');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // bundle for nodejs
  target: 'node',

  // root file
  entry: './src/index.js',

  // output file
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
