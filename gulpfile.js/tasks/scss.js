

module.exports = function( ops ){

	var gulp = ops.gulp;
	var config = ops.config;
	var env = ops.env;
	var browserSync = ops.browserSync;

	if(!config.tasks.sass) return;

	var path 			= require('path');
	var lodash 			= require('lodash');
	var minifyCSS 		= require('gulp-minify-css');
	var sourcemaps 		= require('gulp-sourcemaps');
	var sass 			= require('gulp-sass');
	var concat 			= require('gulp-concat');
	var notify 			= require('gulp-notify');
	const rename 		= require("gulp-rename")

	var tasks = [];
	var DEST = path.join( config.dest, config.tasks.sass.dest );

	var sassTask = function( artifact, output ){

		var PROD = Boolean.parse(process.env.prod);
		let BUILD_NUM = process.env.DRONE_BUILD_NUMBER || 'XX'

		var filename = output+'.css';
		var paths = lodash.map(config.tasks.sass.paths, function(dir){
			return path.join( dir );
		});

		var stream = gulp.src( artifact.src );

		if(!PROD){
			stream = stream.pipe(sourcemaps.init());
		}

		stream = stream.pipe(concat( filename ))
		.pipe(sass({
			includePaths: paths
		}).on('error', notify.onError(function(err){
			return {
				title: '',
				'subtitle': 'SASS Error',
				'message': err.message,
				'icon': path.join(__dirname, 'app/images/logo.png'), // case sensitive
			};
		})));

		if(PROD){
			stream = stream.pipe(minifyCSS());
		}else{
			// sourcemap LESS files, easy debugging:
			stream = stream.pipe(sourcemaps.write('.'));
		}
		stream = stream.pipe(rename({
				basename: `build.${BUILD_NUM}`
			}))
			.pipe(gulp.dest(DEST));
		return stream;
	};


	var sassTask_Watch = function( cb ){
		lodash.each(config.tasks.sass.artifacts, function( artifact, output ){
			gulp.watch(artifact.src, ['sass-'+output]);
		});
		// Inject on css changes in destination directory:
		gulp.watch([DEST+'/**/*.css']).on('change', function(){
			gulp.src(DEST+'/**/*.css')
				.pipe(browserSync.stream());
		});
		cb();
	};

	lodash.each(config.tasks.sass.artifacts, function( artifact, output ){
		var task = 'sass-'+output;
		gulp.task(task, function(){
			return sassTask( artifact, output );
		});
		tasks.push(task);
	});

	gulp.task('sass', tasks);
	gulp.task('sass:watch', ['sass'], sassTask_Watch);
	return sassTask;

};
