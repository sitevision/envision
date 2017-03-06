var gulp          = require('gulp');
var path          = require('path');
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var sourcemaps    = require('gulp-sourcemaps');
var cleanCSS      = require('gulp-clean-css');
var rename        = require('gulp-rename');
var scsslint      = require('gulp-scss-lint');
var babel         = require('gulp-babel');

var DIST_FOLDER = './dist';
var DOCS_DIST_FOLDER = './docs/dist'

gulp.task('copyimages', doCopyImages);
gulp.task('copyfonts', doCopyFonts);

gulp.task('hintcss', doHint);
gulp.task('sass', doSass);
gulp.task('autoprefix', ['sass'], doAutoprefix);
gulp.task('minifycss', ['autoprefix'], doMinifyCSS);
gulp.task('buildcss', ['hintcss', 'sass', 'autoprefix', 'minifycss']);
gulp.task('buildjs', doBuildJS);
gulp.task('default', ['buildjs', 'buildcss', 'copyimages', 'copyfonts']);
gulp.task('watch', doWatch);

function doAutoprefix() {
   return gulp.src('build/styles.css')
      .pipe(autoprefixer())
      .pipe(gulp.dest('dist'));
}

function doSass() {
   return gulp.src('./src/scss/styles.scss')
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(sourcemaps.write('../dist/map'))
      .pipe(gulp.dest('./build'));
}

function doMinifyCSS() {
   return gulp.src(DIST_FOLDER + '/styles.css')
      .pipe(rename({
         suffix: '.min'
      }))
      .pipe(cleanCSS())
      .pipe(gulp.dest(DIST_FOLDER))
      .pipe(gulp.dest(DOCS_DIST_FOLDER));
}

function doBuildJS() {
   return gulp.src('src/js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(sourcemaps.write('../dist/map'))
      .pipe(gulp.dest(DIST_FOLDER))
      .pipe(gulp.dest(DOCS_DIST_FOLDER));
}

function doWatch() {
   gulp.watch('src/scss/**/*.scss', ['buildcss']);
   gulp.watch('src/img/**/*', ['copyimages']);
   gulp.watch('src/fonts/**/*', ['copyfonts']);
   gulp.watch('src/js/**/*.js', ['buildjs']);
}

function doCopyImages() {
   gulp.src('src/img/**/*')
      .pipe(gulp.dest(DIST_FOLDER + '/img'))
      .pipe(gulp.dest(DOCS_DIST_FOLDER + '/img'))
}

function doCopyFonts() {
   gulp.src('src/fonts/**/*')
      .pipe(gulp.dest(DIST_FOLDER + '/fonts'))
      .pipe(gulp.dest(DOCS_DIST_FOLDER + '/fonts'));
}

function doHint() {
   return gulp.src(['./src/scss/*.scss', '!./src/**/variable.scss', '!./src/**/icons.scss'])
      .pipe(scsslint({
         config: 'scss-lint.yml'
      }));
}
