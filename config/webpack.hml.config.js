const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const DefinePlugin = new Webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('statement'),
  },
});
const CleanPlugin = new CleanWebpackPlugin({
  cleanAfterEveryBuildPatterns: ['build'],
});
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'dist/index.html',
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'index_bundle.js',
    publicPath: '/',
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
  mode: 'statement',
  devServer: {
    historyApiFallback: true,
  },
  plugins: [CleanPlugin, DefinePlugin, HTMLWebpackPluginConfig],
};
