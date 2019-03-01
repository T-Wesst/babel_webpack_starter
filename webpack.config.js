// defines source files and output
const path = require('path');
module.exports = {
  // Entry point for es6 and es7 and beyond files
  entry: {
    app: './src/app.js'
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
