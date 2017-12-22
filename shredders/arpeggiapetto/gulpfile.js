// var gulp = require('gulp');
// var uglify = require('gulp-uglify');
// var livereload = require('gulp-livereload');
// var watch = require('gulp-watch');
// var streamqueue = require('streamqueue');
// var concat = require('gulp-concat');

// gulp.task('build', ['js', 'vendor']);

// gulp.task('watch', function () {
//    gulp.watch('src/*', ['build']);
// });

// gulp.task('js', function() {
//   return streamqueue({ objectMode: true },
//                        gulp.src('src/js/app.js'),
//                        gulp.src(['src/js/**/*.js', '!src/js/app.js'])
//                     )
//                     .pipe(uglify())
//                     .pipe(concat('app.js'))
//                     .pipe(gulp.dest('build'));
// });

// gulp.task('vendor', function() {
//   return streamqueue({ objectMode: true },
//                        gulp.src('bower_components/jquery/dist/jquery.js'),
//                        gulp.src('bower_components/underscore/underscore.js'),
//                        gulp.src('bower_components/backbone/backbone.js'),
//                        gulp.src('bower_components/wad/src/wad.js')
//                     )
//                     .pipe(uglify())
//                     .pipe(concat('vendor.js'))
//                     .pipe(gulp.dest('build'));
// });
