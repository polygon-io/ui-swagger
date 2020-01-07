

var clean 			= require('rimraf');
var path 			= require('path');
var notify 			= require('gulp-notify');


module.exports = function( ops ){

	var gulp = ops.gulp;
	var config = ops.config;

	gulp.task('clean', function( cb ){
		clean(config.dest, cb);
	});

};