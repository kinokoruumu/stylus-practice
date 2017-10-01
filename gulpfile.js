var gulp = require('gulp');
var stylus = require('gulp-stylus');

var path = {
    'stylusFile': ['stylus/*']
};

gulp.task('stylus', function() {
    gulp.src(path.stylusFile)
      .pipe(stylus())
      .on('error', function (err) {
        console.error('Error', err.message);
      })
      .pipe(gulp.dest('css/'))
      
});

gulp.task('watch-stylus', function(){
    gulp.watch(path.stylusFile, ['stylus']);
});
