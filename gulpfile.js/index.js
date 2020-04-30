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
      dest: "docs/styles",
      paths: ["app/styles", "node_modules/", "node_modules/font-awesome/scss"],
      artifacts: {
        app: {
          src: ["app/styles/app.scss", "app/**/*.scss"]
        }
      }
    },
    webpack: {
      src: "",
      dest: "docs/",
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
              presets: ["@babel/preset-env", "@babel/react"],
              plugins: [
                [
                  "@babel/plugin-proposal-decorators",
                  {
                    legacy: true
                  }
                ],
                [
                  "@babel/plugin-proposal-class-properties",
                  {
                    loose: true
                  }
                ]
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
      dest: "docs/images"
    },
    webp: {
      src: ["app/images/**/*.+(png|jpg|gif|jpeg)"],
      dest: "docs/images"
    },
    fonts: {
      src: ["app/fonts/*"],
      dest: "docs/fonts"
    },
    icons: {
      template: "app/images/icons/template.css",
      src: ["app/images/icons/*.svg"],
      dest: "docs/icons"
    },
    svgs: {
      src: ["app/images/*.svg", "app/images/**/*.svg"],
      dest: "docs/images"
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
