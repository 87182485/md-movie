var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({lazy:true});

var base = './';

gulp.task('help', $.taskListing);

gulp.task('default',['help'], function() {
	console.log('first run gulp.');
});

gulp.task('styles', function(){
	console.log('Style, compile Less to Css');
	
	return gulp
	.src(config.less)
	.pipe($.plumber())
	.pipe($.less())
	.pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
	.pipe(gulp.dest(config.styles));
});

gulp.task('wiredep', function() {
	var options = config.getWiredepDefaultOptions;
	var wiredep = require('wiredep').stream;
	
	return gulp.src(config.index)
	.pipe(wiredep(options))
	.pipe($.inject(gulp.src(config.js)))
	.pipe(gulp.dest(base));
});

gulp.task('inject', ['styles','wiredep'], function() {
	return gulp.src(config.index)
	.pipe($.inject(gulp.src(config.css)))
	//.pipe($.replace(/="..\/..\/bower_components\//g, '="/bower_components/'))
	.pipe(gulp.dest(base));
});

gulp.task('serve',['inject', 'less-watcher'], function() {
	$.connect.server({
		root:'.',
		livereload:true
	});
});

// Watchers

gulp.task('less-watcher', function() {
	gulp.watch([config.less], ['styles']);
});