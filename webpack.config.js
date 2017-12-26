const path = require('path');
// const BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
	entry: './demos/src/main.js',
	output: {
		path: path.join(__dirname, '.tmp/scripts'),
		filename: 'main.js',
		sourceMapFilename: '[file].map'
	},
	watch: false,
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, ''),
					path.resolve(__dirname, 'bower_components')
				],
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			}
		]
	}/*,
	plugins: [
		new BowerWebpackPlugin({
			includes: /\.js$/
		})
	]*/
};
