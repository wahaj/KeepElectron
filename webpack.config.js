const autoprefixer = require('autoprefixer');

module.exports = {
	/* +++++ entry +++++ */
	entry: [__dirname + '/main.js', __dirname + '/src/scss/app.scss'],
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
	/* +++++ plugins +++++ */
	plugins: [
	],
	output: {
		path: __dirname + '/build/',
		publicPath: './build/',
		filename: 'bundle.js'
	},
	node: {
		fs: "empty"
	},
	optimization: {
		nodeEnv: 'electron'
	},
	target: 'electron-main'
};
