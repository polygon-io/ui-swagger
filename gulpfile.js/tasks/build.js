var notify = require("gulp-notify");
var lodash = require("lodash");

module.exports = function(ops) {
  var gulp = ops.gulp;
  var config = ops.config;
  var browserSync = ops.browserSync;
  var gulpSequence = ops.gulpSequence;

  gulp.task("build", function(cb) {
    process.env.prod = true;
    return gulpSequence(
      "clean",
      [
        "sass",
        "svgs",
        "html",
        "webpack:production",
        "fonts",
        "images",
        "webp",
        "icons"
      ],
      cb
    );
  });
};
