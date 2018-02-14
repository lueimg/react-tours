const path = require('path');
const webpack = require('webpack');

const config = {
    resolve: {
        modules: [
            path.resolve('./lib'),
            path.resolve('./node_modules'),
        ]
    },
    entry: {
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'redux-logger',
            'react-router-dom',
            'redux-thunk',
            'moment',
            'lodash',
            'bootstrap/dist/js/bootstrap.min.js',
            // 'bootstrap/js/dist/modal.js',
            'firebase',
            'material-ui',
        ],
        app: ['./lib/renderes/dom.js'],
    },
    //watch: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
        publicPath: '/',
        chunkFilename: '[name]-[id].js', // or whatever other format you want.
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env', 'stage-2']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
        })
    ]
};

module.exports = config;