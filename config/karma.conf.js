'use strict';
const params = require('minimist')(process.argv.slice(2));

const files = '../src/**/*.spec.js';

module.exports = function(config) {
	config.set({
		frameworks: ['chai', 'mocha'],
		files: [files],
		exclude: [],
		preprocessors: {
			[files]: ['webpack']
		},
		reporters: ['mocha'],
		webpack: require('./webpack.test.conf')(params),
		webpackMiddleware: {noInfo: true},
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		browsers: ['Chrome'],				
		browserNoActivityTimeout: 180000,
		plugins: [
			'karma-webpack',
			'karma-mocha',
			'karma-chai',
			'karma-mocha-reporter',
			'karma-chrome-launcher'
		]
	});
};
