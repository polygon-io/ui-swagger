module.exports = function(ops) {
  var gulp = ops.gulp;
  var gulpSequence = ops.gulpSequence;

  gulp.task('default', function(cb) {
    process.env.prod = false;
    return gulpSequence(
      'clean',
      [
        'sass:watch',
        'svgs:watch',
        'html:watch',
        'webpack:watch',
        'fonts:watch',
        'images:watch',
        'webp:watch',
        'icons:watch',
        'swaggerYamlToJson'
      ],
      'browserSync',
      cb
    );
  });
};
