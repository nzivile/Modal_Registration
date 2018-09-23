var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css'); //css minfy

gulp.task('sass', function(){
    return gulp.src('assets/scss/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(cleanCSS({compatibility: 'ie8'})) //css minify
        .pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function(){
    gulp.watch('assets/scss/*.scss', ['sass']);
    // Other watchers
})

