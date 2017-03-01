'use strict';
var  browserSync = require('browser-sync').create(),
			gulp = require('gulp'),
			sass = require('gulp-sass'),
		  concat = require('gulp-concat'),
		  rename = require('gulp-rename'),
		  uglify = require('gulp-uglify'),
		 plumber = require('gulp-plumber'),
			jade = require('gulp-jade'),
		 jadephp = require('gulp-jade-php'),
		 changed = require('gulp-changed'),
		  reload = browserSync.reload; // Save a reference to the `reload` method

// uglify and concat all js library dependancies
gulp.task('plugins', function() {  
  return gulp.src([
	  './assets/common/js/plugins/common-plugins-title.js', // simply for showing title that proves these files compiled successfully
	  './assets/common/js/plugins/slick-carousel/slick/slick.min.js',
	  './assets/common/js/plugins/remodal/dist/remodal.min.js',
	  './assets/common/js/plugins/vimeo-player-js/dist/player.min.js',
	  './assets/common/js/plugins/mediaelement/build/mediaelement-and-player.min.js',
	  './assets/common/js/plugins/matchHeight/dist/jquery.matchHeight-min.js',
	  './assets/common/js/plugins/viewport-units-buggyfill/viewport-units-buggyfill.min.js', // for customizing dropdowns (eg. folkways magazine)
	  './assets/common/js/plugins/preparetransition.min.js', // for customizing dropdowns (eg. folkways magazine)
	  './assets/common/js/plugins/mep-feature-playlist-master/mep-feature-playlist.min.js', // for customizing dropdowns (eg. folkways magazine)
	  './assets/common/js/plugins/bootstrap/js/collapse.js', // bootstrap collapse
	])
	.pipe(concat('common-plugins.js'))
	.pipe(gulp.dest('./assets/common/js'))
	.pipe(gulp.dest('../../toby/festival/src/Orchard.Web/Themes/Festival/Assets/common/js'))
});

// html
gulp.task('jade', function() {
  gulp.src('./site/**/*.jade')
	.pipe(changed('./site', {extension: '.php'}))
	.pipe(plumber())
	.pipe(jadephp())
	.pipe(gulp.dest('./site'))
	.pipe(browserSync.stream())
});

// common html
gulp.task('jade-common', function() {
  gulp.src('./site/common/*.jade')
  // gulp.src('./site/**/*.jade')
	.pipe(changed('./site/common', {extension: '.php'}))
	.pipe(plumber())
	.pipe(jadephp({
	  pretty: true,
	 }))
	 .pipe(gulp.dest('./site/snippets'));
});

// copy for keeping blueprint files similar
gulp.task('copy', function() {
	gulp.src('../../styleguide.folklife.si.edu/code/site/common/blueprints/*.yml')
	  .pipe(gulp.dest('./site/blueprints/'))
	gulp.src('../../styleguide.folklife.si.edu/code/site/common/controllers/*.php')
	  .pipe(gulp.dest('./site/controllers/'))
	gulp.src('../../styleguide.folklife.si.edu/code/site/common/**/*.php')
	  .pipe(gulp.dest('./site'));
});

/**********
* compile styleguide sass
**********/
gulp.task('styles', function() {
	gulp.src('themes/styleguide/styles/styleguide.scss')
		.pipe(plumber())
		.pipe(sass({
			errLogToConsole: true,
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(gulp.dest('themes/styleguide/styles/'))
		.pipe(browserSync.stream());
});

/**********
* copy common sass in styleguide to all of toby's common sass folders in folklife, festival, folkways
* keeps all comomon sass files in one place--my styleguide css folder
* but copies to all of toby's 3 common sass folders so he can stay up to date and compile in each visual studio project separately
* he will combine to single area after launch
**********/
gulp.task('copy-sass', function() {
  gulp.src('assets/common/css/*.scss')
	.pipe(plumber())
	.pipe(gulp.dest('../../toby/folklife/src/Orchard.Web/Themes/Folklife/Assets/common/css'))
	.pipe(gulp.dest('../../toby/festival/src/Orchard.Web/Themes/Festival/Assets/common/css'))
	.pipe(gulp.dest('../../toby/folkways/src/Orchard.Web/Themes/Folkways/Assets/common/css'))
})

/**********
* copy common js in styleguide to all of toby's common js folders in folklife, festival, folkways
* keeps all comomon js files in one place--my styleguide js folder
* but copies to all of toby's 3 common js folders so he can stay up to date
* he will combine to single area after launch
**********/
gulp.task('copy-js', function() {
  gulp.src('assets/common/js/*.js')
	.pipe(plumber())
	.pipe(gulp.dest('../../toby/folklife/src/Orchard.Web/Themes/Folklife/Assets/common/js'))
	.pipe(gulp.dest('../../toby/festival/src/Orchard.Web/Themes/Festival/Assets/common/js'))
	.pipe(gulp.dest('../../toby/folkways/src/Orchard.Web/Themes/Folkways/Assets/common/js'))
})

// less for bootstrap
var less = require('gulp-less');
var path = require('path');
 
gulp.task('less', function () {
  return gulp.src('assets/common/js/plugins/bootstrap/less/bootstrap.less')
	.pipe(less())
	.pipe(rename('bootstrap.scss'))
	.pipe(gulp.dest('assets/common/css/'));
});

// custom js
gulp.task('js', function() {
  // return gulp.src('/bdc/js/scripts.js')
  return gulp.src([
	  '../../styleguide.folklife.si.edu/code/assets/common/js/common-plugins.js',
	  '../../styleguide.folklife.si.edu/code/assets/common/js/common-scripts.js',
	  'themes/styleguide/scripts/styleguide.js'
	])
	.pipe(concat('styleguide.pkgd.js'))
	.pipe(gulp.dest('themes/styleguide/scripts/'))
	.pipe(browserSync.stream())
	// gulp.watch('/js/scripts.js',['scripts']);
});
// create a task that ensures the `templates` and `js` tasks are completed before

// reloading browsers
// gulp.task('jade-watch', ['jade'], browserSync.reload);
// gulp.task('js-watch', ['js'], browserSync.reload);

// Static Server + watching scss/html files
gulp.task('serve', ['jade', 'styles', 'js'], function() {

  browserSync.init({
	  proxy     : "styleguide.folklife.loc:3000",
	  xip       : true,
	  open      : false,
	  notify    : false,
	  ghostMode : false,
	  minify    : true,
  });

	// gulp.watch('site/**/*.jade',['jade-watch']);
	gulp.watch('site/**/*.jade',['jade']);
	// gulp.watch('site/common/*.jade',['jade-common']);
	gulp.watch('bower_components/bootstrap/less/*.less',['less']);
	gulp.watch('site/common/blueprints/*.yml',['copy']);
	gulp.watch('site/common/**/*.php',['copy']);
	gulp.watch([
		'assets/common/css/*.scss',
		'../../toby/folkways/src/Orchard.Web/Themes/Folkways/Styles/folkways.scss'
		],['styles','copy-sass']);
	gulp.watch('themes/styleguide/styles/*.scss',['styles']);
	// gulp.watch('../../toby/festival/src/Orchard.Web/Themes/Festival/Assets/common/css/*.scss',['styles']);
	gulp.watch('assets/common/js/*.js',['js','copy-js']); // copy common plugins and scripts to toby's 3 repos until he has centralized common elements
	gulp.watch([ // JS
		'themes/styleguide/scripts/*.js',
		'/assets/common/js/*.js',
		],['js']);

});

// gulp.task('default', ['usedCSS', 'critical', 'imagemin']);
gulp.task('default', ['serve']);