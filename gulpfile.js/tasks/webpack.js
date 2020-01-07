


module.exports = function( ops ){

	var gulp = ops.gulp;
	var config = ops.config;
	var env = ops.env;
	var browserSync = ops.browserSync;
	var initialCompile = false;

	if(!config.tasks.webpack) return;

	var path 			= require('path');
	var lodash 			= require('lodash');
	var notify 			= require('gulp-notify');
	var webpack 		= require('webpack');
	var raw 			= require('raw-loader');
	var FriendlyErr 	= require('friendly-errors-webpack-plugin');
	const UglifyJsPlugin 	= require('uglifyjs-webpack-plugin')

	var getOptions = function(PROD){

		PROD = PROD || Boolean.parse(process.env.prod);
		var context = path.join( __dirname, '../../', config.app, config.tasks.webpack.src );
		var dest = path.join( __dirname, '../../', config.dest, config.tasks.webpack.dest, 'js' );
		var modulesDirectories = path.join( __dirname, '../../node_modules/' );
		let BUILD_NUM = process.env.DRONE_BUILD_NUMBER || 'XX'

		// Default DEV settings:
		var options = {
			context: context,
			entry: config.tasks.webpack.artifacts,
			target: 'web',
			output: {
				path: dest,
				filename: `app.bundle.build.${BUILD_NUM}.js`,
				chunkFilename: `[name].bundle.${BUILD_NUM}.js`,
				publicPath: '/js/'
			},
			node: {

			},
			resolve: {
				modules: [
					context,
					modulesDirectories
				],
			},
			externals: {

			},
			module: {
				rules: config.tasks.webpack.rules
			},
			plugins: [
				new webpack.ProvidePlugin({
					'Promise': 'bluebird'
				})
			],
		};

		// PROD options ( minify, etc )
		if(PROD === true){
			
			console.log('Adding PROD options...')
			// options.noParse = []
			options.plugins.push(
				// Minify the compiled JS:
				new webpack.DefinePlugin({
					'process.env': {
						'NODE_ENV': JSON.stringify( 'production' )
					}
				}),
				new UglifyJsPlugin({
					sourceMap: false,
					uglifyOptions: {
						parse: {
							ecma: 8,
						},
						compress: {
							ecma: 5,
							global_defs: {
								"process.env.NODE_ENV": "production"
							},
							warnings: false,
							unused: true,
							dead_code: true,
						},
						output: {
							ecma: 5,
							comments: false,
						},
						parallel: true,
					}
				}),
				new webpack.IgnorePlugin(/redux-logger/)
			);
			
			options.module.rules[0].use.options = {
				minimize: true
			}

			options.devtool = false;

			// Strip out console.log for prod:
			// options.module.loaders.push({
			// 	test: /\.js$/,
			// 	loader: 'strip-loader?strip[]=console.log'
			// });
		}else{
			options.plugins.push(
				new webpack.DefinePlugin({
					'process.env': {
						'NODE_ENV': JSON.stringify( 'development' )
					}
				}),
				new FriendlyErr()
				// new webpack.optimize.UglifyJsPlugin({
				// 	sourceMap: true,
				// 	compress: false,
				// 	mangle: false,
				// 	comments: false
				// }),
			)
			options.devtool = 'source-map';
		}
		return options;
	};

	// Dev version:
	var webPackTask_Watch = function( callback ){
		var options = getOptions();
		var WPAC = webpack(options).watch(200, function(err, stats){
			if(err){
				notify({
					title: '',
					'subtitle': 'WebPack Error',
					'message': err.message,
					'icon': path.join(__dirname, 'app/images/logo.png'), // case sensitive
				});
			}
			browserSync.reload();
			// On the initial compile, let gulp know the task is done
			if(!initialCompile){
				initialCompile = true;
				callback();
			}
		});
	};

	// Prod version:
	var webPackTask_Production = function( callback ){
		var options = getOptions(true);
		console.log( 'PACKAGING FOR BUILD ENV:', process.env.DRONE_BUILD_NUMBER )
		var WPAC = webpack(options, function(err, stats){
			// logger(err, stats)
			if(err){
				notify({
					title: '',
					'subtitle': 'WebPack Error',
					'message': err.message,
					'icon': path.join(__dirname, 'app/images/logo.png'), // case sensitive
				});
			}
			callback(err);
		});
	};

	gulp.task('webpack:watch', webPackTask_Watch);
	gulp.task('webpack:production', webPackTask_Production);

	return {
		getOptions: getOptions
	};

};
