'use strict';
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var jade = require('gulp-jade');
var jadephp = require('gulp-jade-php');
var changed = require('gulp-changed');
var reload = browserSync.reload; // Save a reference to the `reload` method

// uglify and concat all js library dependancies
gulp.task('plugins', function(done) {
	return gulp.src([
			'./assets/common/js/plugins/common-plugins-title.js', // simply for showing title that proves these files compiled successfully
			'./assets/common/js/plugins/slick-carousel/slick/slick.min.js',
			'./assets/common/js/plugins/remodal/dist/remodal.min.js',
			'./assets/common/js/plugins/vimeo-player-js/dist/player.min.js',
			// './assets/common/js/plugins/mediaelement/build/mediaelement-and-player.min.js',
			'./assets/common/js/plugins/mediaelement/build/mediaelement-and-player.js',
			'./assets/common/js/plugins/matchHeight/dist/jquery.matchHeight-min.js',
			'./assets/common/js/plugins/viewport-units-buggyfill/viewport-units-buggyfill.min.js', // for customizing dropdowns (eg. folkways magazine)
			'./assets/common/js/plugins/preparetransition.min.js', // for customizing dropdowns (eg. folkways magazine)
			'./assets/common/js/plugins/mep-feature-playlist-master/mep-feature-playlist.min.js', // for customizing dropdowns (eg. folkways magazine)
			'./assets/common/js/plugins/bootstrap/js/collapse.js', // bootstrap collapse
            './assets/common/js/plugins/bootstrap/js/modal.js', // bootstrap collapse
            './assets/common/js/plugins/bootstrap/js/alert.js', // bootstrap collapse
			'./assets/common/js/plugins/jquery-placeholder/jquery.placeholder.min.js', // bootstrap collapse
			'./assets/common/js/bower_components/svg4everybody/dist/svg4everybody.min.js' // make svg icons work in ie as pngs
		])
		.pipe(concat('common-plugins.js'))
		.pipe(gulp.dest('./assets/common/js'))
		.pipe(gulp.dest('../../toby/festival/src/Orchard.Web/Themes/Festival/Assets/common/js'));
    done();
});

// html
gulp.task('jade', function(done) {
	gulp.src('./site/**/*.jade')
		.pipe(changed('./site', { extension: '.php' }))        
		.pipe(plumber())
		.pipe(jadephp({
          pretty: true,
          locals: {
            // title: 'OMG THIS IS THE TITLE'
          }
         }))
		.pipe(gulp.dest('./site'))
		.pipe(browserSync.stream());
    done();
});

// common html
gulp.task('jade-common', function(done) {
	gulp.src('./site/common/*.jade')
		// gulp.src('./site/**/*.jade')
		.pipe(changed('./site/common', { extension: '.php' }))
		.pipe(plumber())
		.pipe(jadephp({
			pretty: '\t',
		}))
		.pipe(gulp.dest('./site/snippets'));
    done();
});

// copy for keeping blueprint files similar
gulp.task('copy', function(done) {
	gulp.src('../../styleguide.folklife.si.edu/code/site/common/blueprints/*.yml')
		.pipe(gulp.dest('./site/blueprints/'));
	gulp.src('../../styleguide.folklife.si.edu/code/site/common/controllers/*.php')
		.pipe(gulp.dest('./site/controllers/'));
	gulp.src('../../styleguide.folklife.si.edu/code/site/common/**/*.php')
		.pipe(gulp.dest('./site'));
        done();
});

/**********
 * compile styleguide sass
 **********/
gulp.task('styles', function(done) {
	gulp.src('themes/styleguide/styles/styleguide.scss')
		.pipe(plumber())
		.pipe(sass({
			errLogToConsole: true,
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
        .pipe(gulp.dest('themes/styleguide/styles/'))
		.pipe(gulp.dest('../../../visualdialogue.com/code/assets/folkways-styleguide/'))
		.pipe(browserSync.stream());
    done();
});

/**********
 * copy common sass in styleguide to all of toby's common sass folders in folklife, festival, folkways
 * keeps all comomon sass files in one place--my styleguide css folder
 * but copies to all of toby's 3 common sass folders so he can stay up to date and compile in each visual studio project separately
 * he will combine to single area after launch
 **********/
gulp.task('copy-sass', function(done) {
	gulp.src('assets/common/css/*.scss')
		.pipe(plumber())
		.pipe(gulp.dest('../../50objects/code/themes/50objects/assets/common/css'))
		.pipe(gulp.dest('../../toby/folklife/src/Orchard.Web/Themes/Folklife/Assets/common/css'))
		.pipe(gulp.dest('../../toby/festival/src/Orchard.Web/Themes/Festival/Assets/common/css'))
		.pipe(gulp.dest('../../toby/folkways/src/Orchard.Web/Themes/Folkways/Assets/common/css'));
    done();
});

/**********
 * copy common js in styleguide to all of toby's common js folders in folklife, festival, folkways
 * keeps all comomon js files in one place--my styleguide js folder
 * but copies to all of toby's 3 common js folders so he can stay up to date
 * he will combine to single area after launch
 **********/
gulp.task('copy-js', function(done) {
	gulp.src('assets/common/js/*.js')
		.pipe(plumber())
		.pipe(gulp.dest('../../50objects/code/themes/50objects/assets/common/js'))
		.pipe(gulp.dest('../../toby/folklife/src/Orchard.Web/Themes/Folklife/Assets/common/js'))
		.pipe(gulp.dest('../../toby/festival/src/Orchard.Web/Themes/Festival/Assets/common/js'))
		.pipe(gulp.dest('../../toby/folkways/src/Orchard.Web/Themes/Folkways/Assets/common/js'));
    done();
});

// less for bootstrap
var less = require('gulp-less');
var path = require('path');

gulp.task('bootstrap', function(done) {
	return gulp.src('assets/common/js/plugins/bootstrap/less/bootstrap.less')
		.pipe(less())
		.pipe(rename('bootstrap.scss'))
		.pipe(gulp.dest('assets/common/css/'));
    done();
});

// custom js
gulp.task('js', function(done) {
	// return gulp.src('/bdc/js/scripts.js')
	return gulp.src([
			'../../styleguide.folklife.si.edu/code/assets/common/js/common-plugins.js',
			'../../styleguide.folklife.si.edu/code/assets/common/js/common-scripts.js',
			'themes/styleguide/scripts/styleguide.js'
		])
		.pipe(concat('styleguide.pkgd.js'))
        .pipe(gulp.dest('themes/styleguide/scripts/'))
        .pipe(gulp.dest('../../../visualdialogue.com/code/assets/folkways-styleguide/'))
		.pipe(browserSync.stream());
		// gulp.watch('/js/scripts.js',['scripts']);
    done();
});
// create a task that ensures the `templates` and `js` tasks are completed before

// reloading browsers
// gulp.task('jade-watch', ['jade'], browserSync.reload);
// gulp.task('js-watch', ['js'], browserSync.reload);

// Static Server + watching scss/html files
gulp.task('serve', gulp.series(['jade', 'styles', 'js'], function() {
	browserSync.init({
		proxy: "styleguide.folklife.loc:3000",
		port: 3007,
		// xip: true,
		open: false,
		notify: false,
		ghostMode: false,
		minify: true,
		ui: {
		    port: 3008
		}
	});

	// gulp.watch('site/**/*.jade',['jade-watch']);
	// gulp.watch('site/**/*.jade', ['jade']);
    gulp.watch('site/**/*.jade', gulp.series('jade'));
	// gulp.watch('site/common/*.jade',['jade-common']);
	gulp.watch('bower_components/bootstrap/less/*.less', gulp.series(['bootstrap']));
	gulp.watch('site/common/blueprints/*.yml', gulp.series(['copy']));
	gulp.watch('site/common/**/*.php', gulp.series(['copy']));
	gulp.watch([
		'assets/common/css/*.scss',
		'../../toby/folkways/src/Orchard.Web/Themes/Folkways/Styles/folkways.scss'
	], gulp.series(['styles', 'copy-sass']));
	gulp.watch('themes/styleguide/styles/*.scss', gulp.series(['styles']));
	// gulp.watch('../../toby/festival/src/Orchard.Web/Themes/Festival/Assets/common/css/*.scss',['styles']);
	gulp.watch('assets/common/js/*.js', gulp.series(['js', 'copy-js'])); // copy common plugins and scripts to toby's 3 repos until he has centralized common elements
	gulp.watch([ // JS
		'themes/styleguide/scripts/*.js',
		'/assets/common/js/*.js',
	], gulp.series(['js']));
}));

gulp.task('default', gulp.series(['serve']));
