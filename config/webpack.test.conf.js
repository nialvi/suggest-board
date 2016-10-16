const path = require('path');
const webpack = require('webpack');

module.exports = (params) => {
	return {
		resolve: {
			extensions: ['', '.js', '.jsx', '.json'],
		},

		module: {
			loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
					query: {
						presets:[ 'es2015', 'react', 'stage-2' ]
					}                  
                },
				{
					test: /\.json$/,
					loader: 'json'
				},
				{
					test: /\.(woff2?|ttf|eot|png|jpe?g|gif|svg)(\?.*$|$)/,
					loader: 'null'
				},
				{
					test: /\.css$/,
					loader: 'null'
				},
				{
					test: /\.less$/,
					loader: 'null'
				}
			]
		},

		plugins: [
			// прокидываем переменные окружения
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(params.node_env)
			})
		],

		devtool: 'inline-source-map'
	}
};
