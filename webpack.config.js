// defines source files and output
const path = require('path');
module.exports = {
  // Providing the mode configuration option tells webpack to use its built-in optimizations accordingly.
  // can be set in config or passed in CLI arguement
  mode: 'none',
  // Entry point for es6 and es7 and beyond files
  entry: {
    app: ['babel-polyfill', './src/app.js']
  },
  // compiled es6 and es7 and beyond javascript into es5
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  // babel module as loader
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
};
