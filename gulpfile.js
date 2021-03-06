var gulp         = require('gulp');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var webpack      = require('webpack-stream');
var less         = require('gulp-less');
var cleanCSS     = require('gulp-clean-css');

var path = {
  HTML: './app/templates/index.html',
  JSX: ['./app/static/jsx/*.jsx', './app/static/jsx/**/*.jsx'],
  MINIFIED_OUT: 'bundle.js',
  DEST_BUILD: './app/static/js/app',
  LESS: './app/static/less/*.less',
  MainLESS: './app/static/less/main.less',
  CSS: './app/static/css',
  CSSFiles: './app/static/css/*.css'
};

function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
}

// Compiles LESS > CSS 
gulp.task('less', function(){
    return gulp.src(path.MainLESS)
        .pipe(less())
        .on('error', swallowError)
        .pipe(cleanCSS())
        .on('error', swallowError)
        .pipe(gulp.dest(path.CSS));
});

gulp.task('transform', function() {
  return gulp.src(path.JSX)
    .pipe(webpack( require('./webpack.config.js') ))
    .on('error', swallowError)
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('build', function(){
  return gulp.src(path.JSX)
    .pipe(webpack( require('./webpack.config.js') ))
    .on('error', swallowError)
    .pipe(concat(path.MINIFIED_OUT))
    .pipe(uglify(path.MINIFIED_OUT))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('watch', function(){
  gulp.watch(path.JSX, ['transform']);
  gulp.watch(path.LESS, ['less']);
});

gulp.task('default', ['less', 'transform', 'watch']);
