"use strict";

const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const electron = require('electron-connect').server.create();

sass.compiler = require("node-sass"); //Necessário para funcionar gulp-sass

gulp.task('watch', watch);

gulp.task("sass", compileSassToCss);

gulp.task("start", onElectron);

function onElectron() {
  electron.start();

  gulp.watch('app.js', electron.restart);

  gulp.watch(['app.js', './src/pages', './src/components', './src/www'], electron.reload)
}

function compileSassToCss() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError)) // Converte Sass para CSS mimificado com gulp-sass
    .pipe(gulp.dest("src/www"));
}

function watch() {
  gulp.watch("src/scss/**/*.scss", compileSassToCss);
}