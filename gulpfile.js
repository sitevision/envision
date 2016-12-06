var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');

gulp.task('copyimages', doCopyImages);
gulp.task('copyfonts', doCopyFonts);

gulp.task('less', doLess);
gulp.task('autoprefix', ['less'], doAutoprefix);
gulp.task('minifycss', ['autoprefix'], doMinifyCSS);
gulp.task('buildcss', ['less', 'autoprefix', 'minifycss']);
gulp.task('default', ['buildcss', 'copyimages', 'copyfonts']);
gulp.task('watch', doWatch);

function doAutoprefix() {
   return gulp.src('build/styles.css')
      .pipe(autoprefixer())
      .pipe(gulp.dest('dist'));
}

function doLess() {
   return gulp.src('./src/styles.less')
      .pipe(less({
         paths: [ path.join(__dirname, 'src') ]
      }))
      .pipe(gulp.dest('./build'));
}

function doMinifyCSS() {
   return gulp.src('./dist/styles.css')
      .pipe(sourcemaps.init())
      .pipe(cleanCSS())
      .pipe(sourcemaps.write('./map'))
      .pipe(gulp.dest('./dist'));
}

function doWatch() {
   gulp.watch('src/*.less', ['buildcss']);
   gulp.watch('src/img/**/*', ['copyimages']);
   gulp.watch('src/fonts/**/*', ['copyfonts']);
}

function doCopyImages() {
   gulp.src('src/img/**/*')
      .pipe(gulp.dest('./dist/img'));
}

function doCopyFonts() {
   gulp.src('src/fonts/**/*')
      .pipe(gulp.dest('./dist/fonts'));
}

