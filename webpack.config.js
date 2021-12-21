const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

const config = {
    mode: "development",
    entry: {
        player: path.resolve(__dirname, "public"),
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        library: "default",
        libraryTarget: "umd"
    },
    devServer: {
        port: 9000,
        hot: true,
        open: true,
        allowedHosts: 'all',
    },
    resolve: {
        extensions: [ ".js", ".jsx", ".json" ]
    },
    plugins: [
        new Dotenv({
            safe: false
        }),
        new ProvidePlugin({
            React: 'react'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            favicon: path.join(__dirname, "public", "favicon.ico"),
            template: path.join(__dirname, "public", "index.html")
        })
    ],
    module: {
        rules: [
            {
                test: /.(js)[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /.css$/i,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: path => path.endsWith('.module.css')
                            }
                        }
                    }
                ]
            }, {
                test: /.(woff|woff2|ttf|eot|svg|png|jpg)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
};

module.exports = () => config;
