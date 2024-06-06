const webpack = require('webpack');

const path = require('path');

module.exports = function override(config) {

  config.resolve.modules = [
    path.resolve(__dirname, 'src'),
    'node_modules' 
  ];

  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve('stream-browserify'),
    buffer: require.resolve('buffer/'),
    process: require.resolve('process/browser'),
    crypto: require.resolve('crypto-browserify'),
    fs: false, 
    path: require.resolve('path-browserify'),
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ]);

  return config;
};
