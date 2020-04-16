  const path = require('path');
  const Webpack = require('webpack');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const dotenv = require('dotenv');

  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

 module.exports = {
   entry: {
     app: './src/index.js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'url-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
        },
      },
    ],
  },
   plugins: [
    new CleanWebpackPlugin(),
     new Webpack.DefinePlugin(envKeys),
     new HtmlWebpackPlugin({
      title: 'Challenge Xp Investments',
      template: 'dist/index.html',
     }),
   ],
   output: {
   filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'build'),
   },
 };
