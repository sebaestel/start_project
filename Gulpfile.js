﻿// File: Gulpfile.js
'use strict';
var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    stylus  = require('gulp-stylus'),
    nib     = require('nib'),
    jshint  = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
    historyApiFallback = require('connect-history-api-fallback');

// Servidor web de desarrollo
gulp.task('server', function() {
  	connect.server({
    	root: './app',
    	hostname: '0.0.0.0',
    	port: 8080,
    	livereload: true,
    	middleware: function(connect, opt) {
      	return [ historyApiFallback ];
    	}
	}); 
});

// Busca errores en el JS y nos los muestra por pantalla
gulp.task('jshint', function() {
  return gulp.src('./app/scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

// Preprocesa archivos Stylus a CSS y recarga los cambios
gulp.task('css', function() {
  gulp.src('./app/stylesheets/main.styl')
    .pipe(stylus({ use: nib() }))
    .pipe(gulp.dest('./app/stylesheets'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});

var inject  = require('gulp-inject');
var wiredep = require('wiredep').stream;
 // Busca en las carpetas de estilos y javascript los archivos que hayamos creado
// para inyectarlos en el index.html

gulp.task('inject', function() {
return gulp.src(['./app/scripts/**/*.js','./app/stylesheets/**/*.css'], {read : false})
	return gulp.src('index.html', {cwd: './app'})
	.pipe(inject(sources, {
		read: false,
    	ignorePath: '/app'
    }))
    .pipe(gulp.dest('./app'));
});


// Inyecta las librerias que instalemos vía Bower
gulp.task('wiredep', function () {
	gulp.src('./app/index.html')
	.pipe(wiredep({
		directory: './app/lib'
	}))
	.pipe(gulp.dest('./app'));
});

gulp.task('watch', function() {
	gulp.watch(['./app/**/*.html'],['html']);
	gulp.watch(['./app/stylesheets/**/*.styl'], ['css']);
	gulp.watch(['./app/scripts/**/*.js', './Gulpfile.js'], ['jshint']);
	gulp.watch(['./app/stylesheets/**/*.styl'], ['css', 'inject']);
	gulp.watch(['./app/scripts/**/*.js', './Gulpfile.js'], ['jshint', 'inject']);
	gulp.watch(['./bower.json'], ['wiredep']);
});
gulp.task('default', ['server', 'inject', 'wiredep', 'watch']);