var gulp = require("gulp");
var sass = require("gulp-sass");
var htmlmin = require('gulp-htmlmin');

gulp.task("mover-css", function(){
	return gulp.src("./source/scss/*.scss")
			.pipe(sass())
			.pipe(gulp.dest("./dist/css"))
});



gulp.task("escuta-me", function(){
	gulp.watch("./source/scss/*.scss",["mover-css"])
	gulp.watch("./source/*.html",["minify"]);
});


gulp.task('minify', function() {
  return gulp.src('./source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'));
});



