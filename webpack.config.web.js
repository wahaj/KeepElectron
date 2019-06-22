const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const path = require('path');
const webpack = require('webpack');

module.exports = (env, options) => {
	const webpackConfig = baseConfig(env, options);

	return merge.smart(webpackConfig, {
		entry: {
			index: ['./src/js/index.js', './src/scss/index.scss'],
			login: ['./src/js/login.js', './src/scss/login.scss'],
		},
		output: {
			filename: '[name]-bundle.js',
			path: path.resolve(__dirname, 'dist/renderer')
		},
		optimization: {
			nodeEnv: 'web'
		},
		target: 'web',
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		],
		devServer: {
			publicPath: 'http://localhost:8080/dist',
			inline: true,
			port: 4000
		}
	});
};