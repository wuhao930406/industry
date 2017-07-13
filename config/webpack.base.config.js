const path = require('path');
const webpack = require('webpack');
const postcssConfig = require('./postcss.config');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.noDeprecation = true;

const PATHS = {
  DEV: path.join(process.cwd(), '.'),
  PROD: path.join(process.cwd(), 'build'),
};

module.exports = {
  context: PATHS.DEV, // webpack 的主目录，entry 和 module.rules.loader 选项相对于此目录解析
  entry: {
    vendor: [
      'react',
    ],
    index: './index.jsx',
  },
  output: {
    path: PATHS.PROD,
    filename: `[name]${process.env.NODE_ENV === 'development' ? '' : '[chunkhash:8]'}.js`,
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: 'html-loader',
    },
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: ['env'],
        },
      },
      {
        loader: 'eslint-loader',
        options: {
          failOnWarning: true,
          failOnError: true,
        },
      },
      ],
    },
    // {
    //   test: /\.css$/,
    //   use: ExtractTextPlugin.extract({
    //     fallback: 'style-loader',
    //     use: 'css-loader',
    //   }),
    // },
    // {
    //   test: /\.s[a|c]ss$/,
    //   use: ExtractTextPlugin.extract({
    //     fallback: 'style-loader',
    //     use: [
    //       'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
    //       {
    //         loader: 'postcss-loader',
    //         options: postcssConfig,
    //       },
    //       'sass-loader',
    //     ],
    //   }),
    // },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    },
    {
      test: /\.s[a|c]ss$/,
      use: [
        'style-loader',
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]',
        {
          loader: 'postcss-loader',
          options: postcssConfig,
        },
        'sass-loader',
      ],
    },
    {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      use: 'file-loader?limit=1024&name=assets/font/[name].[ext]',
    },
    {
      test: /\.(jpg|jpeg|png|gif)$/,
      use: 'url-loader?mimetype=image/png&name=assets/img/[name]-[hash:6].[ext]',
    },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': PATHS.DEV,
      PUBLIC: '@/pubilc',
      COMPONENT: '@/components',
      REDUCER: '@/reducers',
      ROUTE: '@/routes',
      SERVICE: '@/service',
      STORE: '@/store',
      STYLE: '@/styles',
      UTIL: '@/utils',
      VIEW: '@/views',
    },
    modules: [
      'node_modules',
    ],
  },
  plugins: [
    new NyanProgressPlugin(), // 进度条
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: postcssConfig.plugins,
        eslint: {
          configFile: path.join(process.cwd(), '.eslintrc'),
        },
      },
    }),
    // new ExtractTextPlugin({
    //     filename: 'style.css',
    //     disable: false,
    //     allChunks: true,
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(process.cwd(), '.', 'index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
};
