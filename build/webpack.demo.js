const path = require('path')
const webpack = require('webpack')
const config = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin') // see https://www.imooc.com/qadetail/260262?t=420578

const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'

const webpackConfig = {
  mode: isDev ? 'development' : 'production',
  entry: './example/entry.js',
  output: {
    path: path.resolve(process.cwd(), './example/valkyrie/'),
    publicPath: process.env.CI_ENV || '',
    filename: '[name].[hash:7].js',
    chunkFilename: isProd ? '[name].[hash:7].js' : '[name].js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules'],
  },
  devServer: {
    host: '0.0.0.0',
    port: 8085,
    publicPath: '/',
    noInfo: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules|bower_components/,
        loader: 'eslint-loader',
      },
      {
        enforce: 'pre',
        test: /\.vue$/,
        exclude: /node_modules|bower_components/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: config.jsexclude,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'less-loader' },
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader?minimize=false',
      },
      {
        test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.svg(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './example/index.tpl',
      filename: './index.html',
      favicon: './example/favicon.ico',
    }),
    new ProgressBarPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      vue: {
        preserveWhitespace: false,
      },
    }),
  ],
}

if (isProd) {
  webpackConfig.optimization = {
    runtimeChunk: {
      name: 'manifest',
    },
    minimizer: true,
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          priority: -10,
          reuseExistingChunk: false,
          test: /node_modules\/(.*)\.js/,
        },
        styles: {
          name: 'styles',
          test: /\.(less|css)$/,
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  }
  webpackConfig.externals = {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    fastclick: 'FastClick',
  }
  webpackConfig.module.rules.push(
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        extractCSS: true,
        preserveWhitespace: false,
      },
    },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'postcss-loader',
      ],
    },
  )
  webpackConfig.plugins.push(
    new MiniCssExtractPlugin({ filename: '[name].[contenthash:7].css' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  )
}
if (isDev) {
  webpackConfig.module.rules.push(
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        preserveWhitespace: false,
      },
    },
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader'],
    },
    {
      test: /\.less$/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
    },
  )
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  )
}

module.exports = webpackConfig
