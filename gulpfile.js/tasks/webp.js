

module.exports = function( ops ){

	var gulp = ops.gulp;
	var config = ops.config;
	var env = ops.env;
	var browserSync = ops.browserSync;

	if(!config.tasks.webp) return;

	var lodash 			= require('lodash');
	var imagemin 		= require('gulp-imagemin');
	var path 			= require('path');
	var notify 			= require('gulp-notify');
	var changed 		= require('gulp-changed');
	const webp 			= require("imagemin-webp");
	const extReplace 	= require("gulp-ext-replace");


	var sources = lodash.map(config.tasks.webp.src, function( src ){
		return path.join( src );
	});

	var paths = {
		src: sources,
		dest: path.join(config.dest, config.tasks.webp.dest)
	};

	var webpTask = function(){
		var PROD = Boolean.parse(process.env.prod);
		var stream = gulp.src(paths.src)
			.pipe(changed(paths.dest)) // Ignore unchanged files

		// if( PROD ){
			stream = stream.pipe(imagemin([
				webp({
					quality: 60,
				})
			])) // Optimize
		// }else{
		// 	// stream = stream.pipe(imagemin({
		// 	// 	optimizationLevel: 0, // if dev, dont spend time crunching webp
		// 	// })) // Optimize
		// }
		stream = stream.pipe(extReplace(".webp"))
		stream = stream.pipe(gulp.dest(paths.dest))
		if(!PROD)
			stream = stream.pipe(browserSync.stream())
		return stream;
	}

	gulp.task('webp', webpTask);
	gulp.task('webp:watch', ['webp'], function(){
		return gulp.watch( paths.src, ['webp'] );
	});
	return webpTask;

};