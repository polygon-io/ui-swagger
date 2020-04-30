var clean = require('rimraf');

module.exports = function(ops) {
  var gulp = ops.gulp;
  var config = ops.config;

  gulp.task('clean', function(cb) {
    clean(config.dest, cb);
  });
};
