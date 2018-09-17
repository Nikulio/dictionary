const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const optimizationConfig = require('./webpack.opt.config');

const productionConfiguration = function (env) {
	const {NODE_ENV} = process.env;
	return {
		plugins: [
			new webpack.DefinePlugin([
				{'process.env.NODE_ENV': JSON.stringify(NODE_ENV)},
				{'process.env.BASE_URL': JSON.stringify("/api")},
				]),
		]
	};
}

module.exports = merge.smart(baseConfig, optimizationConfig, productionConfiguration);
