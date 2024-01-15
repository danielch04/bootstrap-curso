const {src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));;

function css( done ){
    console.log('Compilando SASS');
    
    src('src/scss/app.scss')//identificar archivo pricipal
    .pipe( sass() )//compilar SASS 
    .pipe( dest('build/css') )//Exportarlo o guardarlo en una ubicación

    


    
    done();
}
exports.css = css;