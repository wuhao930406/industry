const path = require('path');
const webpack = require('webpack');
const postcssConfig = require('./postcss.config');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/client/app.jsx',

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/javascripts/')
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
              test: /\.html$/,
              use: 'html-loader',
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            },
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
                {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 1
                    }
                },
                {
                  loader: 'postcss-loader',
                  options: postcssConfig,
                },
                'sass-loader',
              ],
            },
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     use: [
            //         {
            //             loader: 'style-loader',
            //         },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 1,
            //             }
            //         },
            //         {
            //             loader: 'postcss-loader'
            //         }
            //     ]
            // },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: 'file-loader?limit=1024&name=public/font/[name].[ext]',
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: 'url-loader?mimetype=image/png&name=public/img/[name]-[hash:6].[ext]',
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['dist'], {
        //     root: path.resolve(__dirname, '.'),
        //     verbose: true,
        // }),
        new webpack.LoaderOptionsPlugin({
          options: {
            postcss: postcssConfig.plugins,
          }
        }),
        // new ExtractTextPlugin("main.css"),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
            },
        }),
    ]
};
