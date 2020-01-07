

module.exports = function( ops ){

	var gulp = ops.gulp;
	var config = ops.config;
	var env = ops.env;
	var browserSync = ops.browserSync;

	if(!config.tasks.images) return;

	var lodash 			= require('lodash');
	var imagemin 		= require('gulp-imagemin');
	var path 			= require('path');
	var notify 			= require('gulp-notify');
	var changed 		= require('gulp-changed');


	var sources = lodash.map(config.tasks.images.src, function( src ){
		return path.join( src );
	});

	var paths = {
		src: sources,
		dest: path.join(config.dest, config.tasks.images.dest)
	};

	var imagesTask = function(){
		var PROD = Boolean.parse(process.env.prod);
		var stream = gulp.src(paths.src)
			.pipe(changed(paths.dest)) // Ignore unchanged files

		if( PROD ){
			stream = stream.pipe(imagemin({
				optimizationLevel: 5,
				progressive: true,
				interlaced: true
			})) // Optimize
		}else{
			// stream = stream.pipe(imagemin({
			// 	optimizationLevel: 0, // if dev, dont spend time crunching images
			// })) // Optimize
		}
		stream = stream.pipe(gulp.dest(paths.dest));
		if(!PROD)
			stream = stream.pipe(browserSync.stream());
		return stream;
	};

	gulp.task('images', imagesTask);
	gulp.task('images:watch', ['images'], function(){
		return gulp.watch( paths.src, ['images'] );
	});
	return imagesTask;

};