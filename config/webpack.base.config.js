const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FEWP = require("friendly-errors-webpack-plugin");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const outputDirectory = "../dist";

module.exports = {
	entry: "./src/client/index.js",
	output: {
		path: path.join(__dirname, outputDirectory),
		filename: "bundle.js",
		publicPath: '/'
	},
	devServer: {
		port: 3000,
		open: true,
		quiet: true,
		historyApiFallback: true,
	},
	node: {
		fs: 'empty'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],

			},
			{
				test: /\.(jpg|png|gif|svg|pdf|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name]-[hash:8].[ext]'
						},
					},
				]
			},
			{
				test: /.(scss|css)$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use:
						"css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader",
				}),
			}
		],
	},
	plugins: [
		new CleanWebpackPlugin([outputDirectory]),
		new Dotenv(),
		new HtmlWebpackPlugin({
			title: "Dictionary",
			template: "./public/index.html",
			favicon: "./public/favicon.ico"
		}),
		new FEWP(),
		new ExtractTextPlugin("style.css"),
	],
};
