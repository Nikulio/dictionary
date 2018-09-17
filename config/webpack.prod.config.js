const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const optimizationConfig = require('./webpack.opt.config');

const productionConfiguration = function (env) {
	const {NODE_ENV} = process.env;
	console.log("--- 1", NODE_ENV);
	return {
		plugins: [
			new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(NODE_ENV)}),
		]
	};
}

module.exports = merge.smart(baseConfig, optimizationConfig, productionConfiguration);
