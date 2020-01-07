

const notify 		= require('gulp-notify')
const lodash		= require('lodash')
const proxy 		= require('proxy-middleware')
const historyApiFallback 	= require('connect-history-api-fallback')
const url 			= require('url')

module.exports = function( ops ){

	var gulp = ops.gulp;
	var config = ops.config;
	var browserSync = ops.browserSync;

	var settings = config.browserSync || {
		server: {
			baseDir: config.dest,
			middleware: [ historyApiFallback() ]
		},
		notify: false,
		ghostMode: false,
		port: config.uiPort,
	};

	var browserSyncTask = function( cb ){
		browserSync.init( settings );

		gulp.watch([
			config.dest+"/**/*.html",
		]).on( 'change', browserSync.reload );
	}

	gulp.task( 'browserSync', browserSyncTask );

	return browserSyncTask;

};