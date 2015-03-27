var gulp = require('gulp');
var less = require('gulp-less');
var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix= new LessPluginAutoPrefix({ browsers: ['IE 8'] });

function handleError (err) {
  console.log('handleError');
  console.err(err);
  this.emit('end'); // so that gulp knows the task is done
}

var CLIENT_LESS = './client/public/less/style.less';
var CLIENT_CSS  = './client/public/css';

gulp.task('less', function() {
  gulp.src(CLIENT_LESS)
    .on('error', handleError)
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(gulp.dest(CLIENT_CSS));
});

gulp.task('watch', ['less'], function() {
  gulp.watch(CLIENT_LESS, ['less']);
});

gulp.task('default', ['less'], function() {

});
