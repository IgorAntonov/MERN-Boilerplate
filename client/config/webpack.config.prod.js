const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const ROOT_DIR = path.resolve(__dirname, '../');

module.exports = {
  entry: path.resolve(ROOT_DIR, 'src/index.js'),
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    path: path.resolve(ROOT_DIR, 'build'),
    publicPath: '/'
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(ROOT_DIR, '../node_modules'),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true
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
              limit: 10000,
              name: 'media/[name].[hash:8].[ext]'
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_DIR, 'public/index.html'),
      favicon: path.resolve(ROOT_DIR, 'public/favicon.ico'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    })
  ]
};

