var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename')
var babel = require('babelify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var watchify = require('watchify')

gulp.task('styles', function() {
	gulp
	  .src('index.scss')
	  .pipe(sass())
	  .pipe(rename('styles.css'))
	  .pipe(gulp.dest('public'));
})

gulp.task('assets', function(){
	gulp
	  .src('assets/*/*')
	  .pipe(gulp.dest('public/assets'));
	gulp
	  .src('assets/*/*/*')
	  .pipe(gulp.dest('public/assets'));
	gulp
	  .src('assets/*/*/*/*')
	  .pipe(gulp.dest('public/assets'));
	gulp
	  .src('assets/*/*/*/*/*')
	  .pipe(gulp.dest('public/assets'));
})

gulp.task('pages', function(){
	gulp
	  .src('pages/*/*')
	  .pipe(gulp.dest('public/pages'));
	gulp
	  .src('pages/*/*/*')
	  .pipe(gulp.dest('public/pages'));
	gulp
	  .src('pages/*/*/*/*')
	  .pipe(gulp.dest('public/pages'));
	gulp
	  .src('pages/img/*')
	  .pipe(gulp.dest('public/img'));
	gulp
	  .src('pages/img/*/*')
	  .pipe(gulp.dest('public/img'));
})

gulp.task('views', function(){
	gulp
	  .src('views/*/*')
	  .pipe(gulp.dest('public/views'));
})

gulp.task('fonts', function(){
	gulp
	  .src('pages/fonts/*/*')
	  .pipe(gulp.dest('public/fonts'));
})

function compile(watch){
	var bundle = watchify(browserify('./src/index.js'));

	function rebundle(){
		bundle
			.transform(babel)
		  .bundle()
		  .pipe(source('index.js'))
		  .pipe(rename('app.js'))
		  .pipe(gulp.dest('public'));
	}

	if (watch){
		bundle.on('update', function(){
			console.log('--> Bundling.....');
			rebundle();
		})
	}

	rebundle();
}

gulp.task('build', function(){ return compile() });

gulp.task('watch', function(){ return compile(true) });


gulp.task('default', ['styles', 'assets', 'pages', 'views', 'fonts', 'build']);