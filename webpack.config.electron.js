const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const path = require('path');

module.exports = (env, options) => {
	const webpackConfig = baseConfig(env, options);

	return merge.smart(webpackConfig,
		{

			target: 'electron-main',
			entry: {
				main: './main.js',
			},
			output: {
				filename: '[name]-bundle.js',
				path: path.resolve(__dirname, 'dist/main')
			},
		},
		{
			target: 'electron-renderer',
			entry: {
				index: ['./src/js/index.js', './src/scss/index.scss'],
				login: ['./src/js/login.js', './src/scss/login.scss'],
			},
			output: {
				filename: '[name]-bundle.js',
				path: path.resolve(__dirname, 'dist/renderer')
			},
		})
};