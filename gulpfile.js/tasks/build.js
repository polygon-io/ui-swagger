module.exports = function(ops) {
  var gulp = ops.gulp;
  var gulpSequence = ops.gulpSequence;

  gulp.task('build', function(cb) {
    process.env.prod = true;
    return gulpSequence(
      'clean',
      [
        'sass',
        'svgs',
        'html',
        'swaggerYamlToJson',
        'webpack:production',
        'fonts',
        'images',
        'webp',
        'icons'
      ],
      cb
    );
  });
};
