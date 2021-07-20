'use strict';


const { src,dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));


//paths
const paths = {
    scss : './src/scss/**/*.scss',
    build: './build/css/'
}


//compila sass a css

function css () {
    return src(paths.scss)
    .pipe(sass())
    .pipe(dest(paths.build))
}

function watchFiles () {
    watch(paths.scss, css);
}
//exports
exports.css = css;
exports.default = series( css, watchFiles );


