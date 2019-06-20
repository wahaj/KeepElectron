const autoprefixer = require('autoprefixer');
const path = require('path');

let common_config = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env'],
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
							name: 'bundle.css'
						},
					},
					{ loader: 'extract-loader' },
					{ loader: 'css-loader' },
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
		modules:[
			"node_modules"
		],
		extensions: [".ts", ".js", ".json"]
	},
};
module.exports = [
	Object.assign({}, common_config, {
		target: 'electron-main',
		entry: {
			main: './main.js',
		},
		output: {
			filename: '[name]-bundle.js',
			path: path.resolve(__dirname, 'dist/main')
		},
	}),
	Object.assign({}, common_config, {
		target: 'electron-renderer',
		entry: {
			index: ['./src/js/index.js','./src/scss/index.scss'],
			login: ['./src/js/login.js','./src/scss/login.scss']
		},
		output: {
			filename: '[name]-bundle.js',
			path: path.resolve(__dirname, 'dist/renderer')
		},
	}),
];