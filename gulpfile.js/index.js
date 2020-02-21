"use strict";

// passed in ops:
const gulp = require("gulp");
const path = require("path");
const lodash = require("lodash");
const browserSync = require("browser-sync");
const gulpSequence = require("gulp-sequence").use(gulp);
const program = require("commander");
const requireDir = require("require-dir");

var config = {
  app: "./app",
  dest: "./public",
  uiPort: 5005,
  tasks: {
    sass: {
      dest: "styles",
      paths: ["app/styles", "node_modules/", "node_modules/font-awesome/scss"],
      artifacts: {
        app: {
          src: ["app/styles/app.scss", "app/**/*.scss"]
        }
      }
    },
    webpack: {
      src: "",
      dest: "",
      artifacts: {
        app: "./app"
      },
      output: "app.bundle.js",
      rules: [
        {
          test: /\.html$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "html-loader?attrs=false",
            options: {
              attrs: false
            }
          }
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          include: [path.resolve(__dirname, "../", "app")],
          use: {
            loader: "babel-loader", // 'babel-loader' is also a legal name to reference
            options: {
              presets: ["es2015", "react"],
              plugins: [
                "syntax-dynamic-import",
                "jsx-control-statements",
                "transform-object-rest-spread",
                "transform-class-properties",
                "transform-decorators-legacy",
                "react-html-attrs"
              ]
            }
          }
        }
      ]
    },
    html: {
      src: "*.html"
    },
    images: {
      src: ["app/images/**/*.+(png|jpg|gif|jpeg)"],
      dest: "images"
    },
    webp: {
      src: ["app/images/**/*.+(png|jpg|gif|jpeg)"],
      dest: "images"
    },
    fonts: {
      src: [
        // 'node_modules/font-awesome/fonts/**/*',
        "app/fonts/*"
      ],
      dest: "fonts"
    },
    icons: {
      template: "app/images/icons/template.css",
      src: [
        // 'node_modules/font-awesome/fonts/**/*',
        "app/images/icons/*.svg"
      ],
      dest: "icons"
    },
    svgs: {
      src: [
        // 'node_modules/font-awesome/fonts/**/*',
        "app/images/*.svg",
        "app/images/**/*.svg"
      ],
      dest: "images"
    }
  }
};

program
  .version("0.1.1")
  .option("-d, --dontbuild", "Dont build the app before running the tests")
  .option("-F, --fix", "Attempt to fix the lint errors when running")
  .parse(process.argv);

let env = "dev";
const falsy = /^(?:f(?:alse)?|no?|0+)$/i;
Boolean.parse = val => {
  return !falsy.test(val) && !!val;
};

// custom additions to ops:
let ops = {};
ops.gulp = gulp;
ops.config = config;
ops.browserSync = browserSync;
ops.program = program;
ops.gulpSequence = gulpSequence;
ops.prod = function() {
  return false;
};
ops.env = env;

// Require all tasks in gulpfile.js/tasks, including subfolders
let tasks = requireDir("./tasks");

// load each gulp task and pass it ops:
tasks = lodash.each(tasks, task => task(ops));
