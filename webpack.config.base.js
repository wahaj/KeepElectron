const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = (env, options) => {
	return {
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: [{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						}
					}],
				},
				{
					test: /\.s?css$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].css'
							},
						},
						{loader: 'extract-loader'},
						{loader: 'css-loader'},
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => [autoprefixer()]
							}
						},
						{
							loader: 'sass-loader',
							options: {
								includePaths: ['./node_modules']
							}
						},
					]
				},
				{
					test: /\.svg$/,
					exclude: /node_modules/,
					use: [{
						loader: 'raw-loader'
					}]
				}
			]
		},
		node: {
			fs: "empty"
		},
		optimization: {
			nodeEnv: 'electron'
		},
		resolve: {
			modules: [
				"node_modules"
			],
			extensions: [".ts", ".js", ".json"]
		},
	}
};