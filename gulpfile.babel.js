const gulp           = require('gulp');
const path           = require('path');
const sass           = require('gulp-sass');
const autoprefixer   = require('gulp-autoprefixer');
const sourcemaps     = require('gulp-sourcemaps');
const cleanCSS       = require('gulp-clean-css');
const rename         = require('gulp-rename');
const scsslint       = require('gulp-scss-lint');
const babel          = require('gulp-babel');
const eslint         = require('gulp-eslint');
const concat         = require('gulp-concat');
const uglify         = require('gulp-uglify');
const pump           = require('pump');

const BUILD_FOLDER = './build';
const DIST_FOLDER = './dist';
const DOCS_DIST_FOLDER = './docs/dist';

const FILE_NAME = 'envision';

gulp.task('copyimages', doCopyImages);
gulp.task('copyfonts', doCopyFonts);

gulp.task('hintcss', doCSSHint);
gulp.task('hintjs', doJSHint);
gulp.task('sass', doSass);
gulp.task('autoprefix', ['sass'], doAutoprefix);
gulp.task('minifycss', ['autoprefix'], doMinifyCSS);
gulp.task('buildcss', ['hintcss', 'sass', 'autoprefix', 'minifycss']);
gulp.task('buildjs', ['hintjs'], doBuildJS);
gulp.task('default', ['buildjs', 'buildcss', 'copyimages', 'copyfonts']);
gulp.task('watch', doWatch);

function doAutoprefix() {
   return gulp.src(`${BUILD_FOLDER}/${FILE_NAME}.css`)
      .pipe(autoprefixer())
      .pipe(gulp.dest('dist'));
}

function doSass() {
   return gulp.src(`./src/scss/${FILE_NAME}.scss`)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(sourcemaps.write('../dist/map'))
      .pipe(gulp.dest(`${BUILD_FOLDER}`));
}

function doMinifyCSS() {
   return gulp.src(`${DIST_FOLDER}/${FILE_NAME}.css`)
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
      .pipe(concat(`${FILE_NAME}.js`))
      .pipe(uglify())
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
      .pipe(gulp.dest(`${DIST_FOLDER}/img`))
      .pipe(gulp.dest(`${DOCS_DIST_FOLDER}/img`));
}

function doCopyFonts() {
   gulp.src('src/fonts/**/*')
      .pipe(gulp.dest(`${DIST_FOLDER}/fonts`))
      .pipe(gulp.dest(`${DOCS_DIST_FOLDER}/fonts`));
}

function doCSSHint() {
   return gulp.src(['./src/scss/**.scss', '!./src/**/variable.scss', '!./src/**/icons.scss'])
      .pipe(scsslint({
         config: 'scss-lint.yml'
      }));
}

function doJSHint() {
   return gulp.src('./src/js/**.js')
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
}
