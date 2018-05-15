var gulp=require('gulp');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var clean=require('gulp-rimraf');
var cleanCSS=require('gulp-clean-css');
var imagemin=require('gulp-imagemin');
var mocha=require('gulp-mocha');
var coffee=require('gulp-coffee');
var sass=require('gulp-sass');



gulp.task('js1',function(){
    gulp.src('src/js/*.js')
    .pipe(concat('all1.js'))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('js2',function(){
    gulp.src('src/js/*.js')
    .pipe(concat('all2.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('js3',function(){
    gulp.src('src/js/*.js')
    .pipe(concat('all3.js'))
    .pipe(gulp.dest('dist/js/'))
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('default',['js2'],function(){
   console.log("default task ran");
});

gulp.task('watch',function(){
   gulp.watch("src/js/*",['js3']);
});

gulp.task('clean',['js3'],function(){
    console.log("Clean all files in built Folder");
    return gulp.src("dist/*",{read:false})
    .pipe(clean());
});

gulp.task('css',function(){
   // console.log("Clean all files in built Folder");
    gulp.src("src/css/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css/'));;
});

gulp.task('images',function(){
   // console.log("Clean all files in built Folder");
     gulp.src("src/images/*.jpg")
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('mocha',function(){
   // console.log("Clean all files in built Folder");
     gulp.src(['test/*.js'],{read:false})
    .pipe(mocha({reporter:'spec'}));
    
});

gulp.task('coffee',function(){
   // console.log("Clean all files in built Folder");
    gulp.src('src/coffee/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('dist/coffee'));
    
});

gulp.task('sass',function(){
   // console.log("Clean all files in built Folder");
     //gulp.src('test/sass/*.scss')
     gulp.src('src/sass/*.scss')
    
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('dist/scss'));
    
});


