const path = require('path');

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
        rules: [{
                test: /\.jsx?$/,
                use: 'babel-loader'
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: 'file-loader?limit=1024&name=public/font/[name].[ext]',
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: 'url-loader?mimetype=image/png&name=public/img/[name]-[hash:6].[ext]',
            }
        ]
    }
};
