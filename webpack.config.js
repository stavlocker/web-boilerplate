//TODO:100 Uglify
//TODO:90 ES6 config
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: __dirname,

    entry: {
        main: './frontend/assets/js/main/main.jsx',
        login: './frontend/assets/js/login/login.jsx'
    },

    output: {
        path: path.resolve('./bundles/'),
        publicPath: '/static/',
        filename: "[name].js"
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        // new UglifyJsPlugin({sourceMap: true}),
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'svg-react-loader',
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }, {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            }
        ]
    },

    resolve: {
        modules: ['node_modules']
    }
}
