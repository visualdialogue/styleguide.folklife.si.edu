// 'use strict';

var  browserSync = require('browser-sync').create(),
            gulp = require('gulp'),
            sass = require('gulp-sass'),
          concat = require('gulp-concat'),
          rename = require('gulp-rename'),
          uglify = require('gulp-uglify'),
         plumber = require('gulp-plumber'),
           uncss = require('gulp-uncss'),
        critical = require('critical'),
            jade = require('gulp-jade'),
         jadephp = require('gulp-jade-php'),
         changed = require('gulp-changed'),
          reload = browserSync.reload; // Save a reference to the `reload` method

// uglify and concat all js library dependancies
gulp.task('vendor', function() {  
  return gulp.src([
    // '/bower_components/jquery/dist/jquery.min.js',
    // '/bower_components/jquery.scrollTo/jquery.scrollTo.min.js',
    // '/bower_components/jquery.localScroll/jquery.localScroll.min.js',
    './bower_components/bootstrap/dist/js/bootstrap.min.js',
    './bower_components/slick-carousel/slick/slick.min.js',
    './bower_components/remodal/dist/remodal.js',
    './bower_components/vimeo-player-js/dist/player.min.js',
    './bower_components/loadcss/src/loadCSS.js',
    // '/bower_components/bxslider-4/jquery3-patch/jquery.bxslider.js',
    // './assets/js/throttle.js',
    // '/js/modernizr-custom.js',
    ])
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js/'))
});

gulp.task('usedCSS', function() {
    return gulp.src('./assets/css/styleguide.css')
        .pipe(uncss({
            // get representative pages
            html: [
              // '_resources/testing/harvard.loc.html',
              'http://folklife.loc:3000/',
            ],
            ignore: [
              // '.icon-share',
              // '.view-by-filter .usgrad-active line',
              // '.view-by-filter .usgrad-active  path',
              // '.view-by-filter .usgrad-active  polygon',
              // '.view-by-filter .usgrad-active  polyline',
              // '.view-by-filter .usgrad-active rect',
              // '.view-by-filter ul li.usgrad-active',
            ]
        }))
        .pipe(rename('folklife-opt.css'))
        .pipe(gulp.dest('./assets/css'));
});
// gulp.task('imagemin', function () {
//     return gulp.src('/images/*')
//         .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//             use: [pngquant()]
//         }))
//         .pipe(gulp.dest('/images'));
// });
// // don't overwrite css
// gulp.task('copystyles', function () {
//     return gulp.src(['/css/opt/main.css'])
//         .pipe($.rename({
//             basename: "" // .css
//         }))
//         .pipe(gulp.dest('/css/opt'));
// });

// Generate & Inline Critical-path CSS
gulp.task('critical', function () {

    // At this point, we have our
    // production styles in main/styles.css

    // As we're going to overwrite this with
    // our critical-path CSS let's create a copy
    // of our -wide styles so we can async
    // load them in later. We do this with
    // 'copystyles' above

    critical.generate({
      base: './',
      src: 'http://folklife.lukehatfield.com',
      // src: 'http://folklife.lukehatfield.com/archives',
      css: ['./assets/css/styleguide.css'],
      // inline: 'true',
      // styleTarget: 'main.css',
      // htmlTarget: '../../..//snippets/header.php',
      // htmlTarget: '../../../_resources/testing/harvard.loc.html',
      // minify: true,
      dimensions: [{
        width: 320,
        height: 480
      },{
        width: 768,
        height: 1024
      },{
        width: 1280,
        height: 960
      },{
        width: 1481,
        height: 3300
      }],
      dest: './assets/css/critical.css',
      extract: false,
      ignore: [/^\.remodal/],
      include: [
        /^\.slick/,
        /^\.col-/,
        /^\.section--first/,
        /^\.hero/,
        /^\.hr/
      ]
    });
    // critical.generateInline({
    //   base: 'test/',
    //   src: 'index.html',
    //   // dest: 'critical.css',
    //   styleTarget: 'main.css',
    //   // htmlTarget: '../../..//snippets/header.php',
    //   htmlTarget: 'index.html',
    //   minify: true
    // });
});

// html
gulp.task('jade', function() {
  gulp.src('./site/**/*.jade')
    .pipe(changed('./site', {extension: '.php'}))
    .pipe(plumber())
    .pipe(jadephp({
      // pretty: true,
      locals: {
        // title: 'OMG THIS IS THE TITLE'
      }
     }))
     .pipe(gulp.dest('./site'));
});

// common html
gulp.task('jade-common', function() {
  gulp.src('./site/common/*.jade')
  // gulp.src('./site/**/*.jade')
    .pipe(changed('./site/common', {extension: '.php'}))
    .pipe(plumber())
    .pipe(jadephp({
      // pretty: true,
      locals: {
        // title: 'OMG THIS IS THE TITLE'
      }
     }))
     .pipe(gulp.dest('./site/snippets'));
});

// php
// gulp.task('templates', function() {
//   gulp.src('./views/**/*.jade')
//     .pipe(jade({
//         locals: {
//           title: 'OMG THIS IS THE TITLE'
//         }
//      }))
//      .pipe(gulp.dest('./dist'));
// });

// sass
gulp.task('styles', function() {
    gulp.src([
          'assets/css/styleguide.scss',
        ])
        .pipe(plumber())
        .pipe(sass({
            errLogToConsole: true,
            // outputStyle: 'compressed'
        }))
        // .pipe(uncss({
        //     // get representative pages
        //     html: [
        //       'http://folklife.loc:3000/',
        //     ],
        // }))
        .pipe(rename('styleguide.css'))
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.stream());
});

// less for bootstrap
var less = require('gulp-less');
var path = require('path');
 
gulp.task('less', function () {
  return gulp.src('bower_components/bootstrap/less/bootstrap.less')
    .pipe(less())
    .pipe(gulp.dest('css/'));
});

// custom js
gulp.task('js', function() {
  // return gulp.src('/bdc/js/scripts.js')
  return gulp.src([
      './assets/js/vendor.js',
      './assets/common/js/common-scripts.js',
      './assets/js/scripts.js'
    ])
    .pipe(concat('scripts.js'))
    // .pipe(concat('../../../../bower_components/jquery/dist/jquery.js'))
    .pipe(uglify())
    .pipe(rename('scripts-min.js'))
    .pipe(gulp.dest('./assets/js/'));
    // gulp.watch('/js/scripts.js',['scripts']);
});
// create a task that ensures the `templates` and `js` tasks are completed before

// reloading browsers
gulp.task('jade-watch', ['jade'], browserSync.reload);
gulp.task('js-watch', ['js'], browserSync.reload);

// Static Server + watching scss/html files
gulp.task('serve', ['jade', 'styles', 'js'], function() {

  browserSync.init({
      proxy     : "styleguide.folklife.loc:3000",
      // port      : 3000,
      open      : false,
      notify    : false,
      ghostMode : false,
      minify    : true,
  });

    gulp.watch('site/**/*.jade',['jade-watch']);
    gulp.watch('site/common/*.jade',['jade-common']);
    gulp.watch('bower_components/bootstrap/less/*.less',['less']);
    gulp.watch('assets/css/*.scss',['styles']);
    gulp.watch('assets/common/*.scss',['styles']);
    gulp.watch('assets/js/scripts.js',['js-watch']);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('site/**/*.php').on('change', browserSync.reload);
    gulp.watch('assets/js/scripts-min.js').on('change', browserSync.reload);
    // gulp.watch("/bdc/**/*.html").on('change', browserSync.reload);
    gulp.watch("content/**/*.txt").on('change', browserSync.reload);
    gulp.watch("*.php").on('change', browserSync.reload);
    gulp.watch("content/**/*.txt").on('change', browserSync.reload);
    // gulp.watch('/bdc/js/*.js').on('change', browserSync.reload);
});

// gulp.task('default', ['usedCSS', 'critical', 'imagemin']);
gulp.task('default', ['serve']);