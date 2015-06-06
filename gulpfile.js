var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy:true});

gulp.task('help', $.taskListing);

gulp.task('default',['help'], function() {
	console.log('first run gulp.');
});

gulp.task('styles', function(){
	console.log('Style, compile Less to Css');
	
	
})