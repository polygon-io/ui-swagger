"use strict";

const yaml = require("gulp-yaml");
const concat = require("gulp-concat");

module.exports = function(ops) {
  const gulp = ops.gulp;
  gulp.task("swaggerYamlToJson", function() {
    return gulp
      .src(__dirname + "/../../app/swagger/*.yaml")
      .pipe(concat("swagger.yaml"))
      .pipe(yaml({ schema: "DEFAULT_SAFE_SCHEMA" }))
      .pipe(gulp.dest(__dirname + "/../../public/"));
  });
};
