'use strict';

const path = require('path');
const webpack = require('webpack');


module.exports = {
	entry: [
		'babel-polyfill',
		'./src/main.js'
	],

	target: 'web',

	output: {
		path: path.join(__dirname, '../dist/public'),
		filename: '[name].js',
		publicPath: '/'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets:[ 'es2015', 'react', 'stage-2' ]
				},
				include: path.join(__dirname, '../src')
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.jsx', '.css'],
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"development"'
		})
	],

	devtool: ['source-map']
};
