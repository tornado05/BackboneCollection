var gulp = require('gulp');
var concat = require('gulp-concat');

var DIST_DIR = 'dist';

gulp.task('build-back-end', function () {
    return gulp.src(['./src/back_end/js/**/**'])
            .pipe(gulp.dest(DIST_DIR));
});

gulp.task('compile-html', function () {
    return gulp.src(['./src/front_end/html/*'])
            .pipe(gulp.dest(DIST_DIR + '/public'));
});

gulp.task('compile-js', function () {
    return gulp.src(['./src/front_end/js/**/**'])
            .pipe(concat('bundle.js'))
            .pipe(gulp.dest(DIST_DIR + '/public/js'));
});

gulp.task('build-front-end', [
    'compile-html',
    'compile-js'
]);

gulp.task('build', [
    'build-back-end',
    'build-front-end'
]);

gulp.task('default', [ 'build' ]);

gulp.task('watch', function () {
    return gulp.watch('./src/**/**', ['build']);
});