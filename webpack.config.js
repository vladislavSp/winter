const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'; // определение режима разработки
const isProd = !isDev;

// const optimization = () => {
//   const config = {
//     splitChunks: {
//       chunks: 'all'
//     }
//   }

//   if (isProd) {
//     config.minimizer = [
//       new OptimizeCssAssetsWebpackPlugin(),
//       new TerserWebpackPlugin()
//     ]
//   }

//   return config;
// }

// variable for name in build / prod development
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
  // context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './src/index.js',
  watch: true,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {hmr: isDev, reloadAll: true}
          }, {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/images',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/fonts',
          name: '[name].[ext]',
        },
      }
    ],
  },

  plugins: [
    // заменить на src/index.html
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist/assets')
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],

  devtool: isDev ? 'source-map' : '',

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  devServer: {
    contentBase: './',
    open: true,
    // host: 'localhost', //192.168.88.197 localhost
    // port: 8080,
    // disableHostCheck: true,
    // hot: isDev,
  },
};
