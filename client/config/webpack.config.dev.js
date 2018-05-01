const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const ROOT_DIR = path.resolve(__dirname, '../');

module.exports = {
  entry: path.resolve(ROOT_DIR, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(ROOT_DIR, 'build'),
    publicPath: '/'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    host: 'localhost',
    port: '3000',
    contentBase: path.resolve(ROOT_DIR, 'public'),
    watchContentBase: true,
    publicPath: '/',
    clientLogLevel: 'none',
    compress: true,
    noInfo: true,
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(ROOT_DIR, '../node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  grid: true,
                  flexbox: 'no-2009'
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_DIR, 'public/index.html'),
      favicon: path.resolve(ROOT_DIR, 'public/favicon.ico'),
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

