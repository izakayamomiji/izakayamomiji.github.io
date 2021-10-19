var gulp = require('gulp');

gulp.task('css', function () {
    return gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap.min.css.map',
      ])
      .pipe(gulp.dest('css/'));
  });

  gulp.task('js', function () {
    return gulp.src([
      'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map',
      ])
      .pipe(gulp.dest('js/'));
  });