'use strict';

let path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?optional[]=runtime',
          options: {
            presets: [
              ["@babel/env", {
                targets: {
                  edge: "15",
                  firefox: "55",
                  chrome: "60",
                  safari: "10",
                  ie: "10"
                },
                useBuiltIns: "usage"
              }]
            ]
          }
        }
      }
    ]
  },

  plugins: [
    new UglifyJsPlugin()
  ]
};