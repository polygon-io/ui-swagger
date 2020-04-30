module.exports = function(ops) {
  var gulp = ops.gulp;
  var config = ops.config;

  if (!config.tasks.icons) return;

  var lodash = require('lodash');
  var path = require('path');
  var async = require('async');
  var iconfont = require('gulp-iconfont');
  var consolidate = require('gulp-consolidate');

  var sources = lodash.map(config.tasks.icons.src, function(src) {
    return path.join(src);
  });

  var paths = {
    src: sources,
    dest: path.join(config.dest, config.tasks.icons.dest)
  };

  var iconsTask = function(cb) {
    var iconStream = gulp.src(paths.src).pipe(
      iconfont({
        fontName: 'poly',
        normalize: true,
        fontHeight: 1001
      })
    );

    async.parallel(
      [
        function handleGlyphs(cb) {
          iconStream.on('glyphs', function(glyphs, options) {
            gulp
              .src(config.tasks.icons.template)
              .pipe(
                consolidate('lodash', {
                  glyphs: glyphs,
                  fontName: 'poly',
                  fontPath: '/docs/icons/',
                  className: 'pi'
                })
              )
              .pipe(gulp.dest(paths.dest))
              .on('finish', cb);
          });
        },
        function handleFonts(cb) {
          iconStream.pipe(gulp.dest(paths.dest)).on('finish', cb);
        }
      ],
      cb
    );
  };

  gulp.task('icons', iconsTask);
  gulp.task('icons:watch', ['icons'], function() {
    return gulp.watch(paths.src, ['icons']);
  });
  return iconsTask;
};
