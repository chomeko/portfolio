const
  gulp = require('gulp');
  sass = require('gulp-sass'); //Sassコンパイル
  plumber = require('gulp-plumber'); //エラー時の強制終了を防止
  notify = require('gulp-notify'); //エラー発生時にデスクトップ通知する
  sassGlob = require('gulp-sass-glob'); //@importの記述を簡潔にする
  browserSync = require( 'browser-sync' ); //ブラウザ反映
  postcss = require('gulp-postcss'); //autoprefixerとセット
  autoprefixer = require('autoprefixer'); //ベンダープレフィックス付与
  cssdeclsort = require('css-declaration-sorter'); //css並べ替え
  imagemin = require('gulp-imagemin');
  pngquant = require('imagemin-pngquant');
  mozjpeg = require('imagemin-mozjpeg');
  rename = require("gulp-rename"); //拡張子を変更
  uglify = require('gulp-uglify')
  pug = require('gulp-pug');

const
  pugOptions = {
    pretty: true,
  }
  paths = {
    src: {
      pug: [
        "src/pug/*.pug",
        "!src/pug/_*.pug",
      ],
      html: [
        "src/html/*.html",
      ],
      sass: [
        "src/sass/**/*.scss",
        "src/sass/**/*.sass",
        "!src/sass/**/_*.scss",
        "!src/sass/**/_*.sass",
      ],
      js: [
        "src/js/*.js",
      ],
    },
    dest: {
      html: "dist/",
      css: "dist/css",
      img: "dist/img",
      js: "dist/js",
    }
  }

//pugの設定
gulp.task('pug', function() {
  return gulp
  .src( paths.src.pug )
  .pipe( plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }) )//エラーチェック
  .pipe(pug(pugOptions))
  .pipe(gulp.dest(paths.dest.html))
})

//jsの圧縮設定
gulp.task("js", function() {
  return gulp
    .src( paths.src.js )
    .pipe(uglify())
    .pipe(rename({
          extname: '.min.js'
    }))
    .pipe(gulp.dest(paths.dest.js));
});

// scssのコンパイル
gulp.task('sass', function() {
return gulp
.src( paths.src.sass )
.pipe( plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }) )//エラーチェック
.pipe( sassGlob() )//importの読み込みを簡潔にする
.pipe( sass({
  outputStyle: 'expanded' //expanded, nested, campact, compressedから選択
}) )
.pipe( postcss([ autoprefixer(
{
// ☆IEは11以上、Androidは4.4以上
// その他は最新2バージョンで必要なベンダープレフィックスを付与する
"overridebrowserslist": ["last 2 versions", "ie >= 11", "Android >= 4"],
cascade: false}
) ]) )
.pipe( postcss([ cssdeclsort({ order: 'alphabetical' }) ]) )//プロパティをソートし直す(アルファベット順)
.pipe(gulp.dest(paths.dest.css));//コンパイル後の出力先
});

// 保存時のリロード
gulp.task( 'browser-sync', function(done) {
browserSync.init({

//ローカル開発
server: {
baseDir: "dist/",
index: "index.html",
}
});
done();
});

gulp.task( 'bs-reload', function(done) {
browserSync.reload();
done();
});

//圧縮率の定義
var imageminOption = [
pngquant({ quality: [.7, .85], }),
mozjpeg({ quality: 85 }),
imagemin.gifsicle({
  interlaced: false,
  optimizationLevel: 1,
  colors: 256
}),
imagemin.mozjpeg(),
imagemin.optipng(),
imagemin.svgo()
];
// 画像の圧縮
// $ gulp imageminで./src/img/base/フォルダ内の画像を圧縮し./src/img/フォルダへ
// .gifが入っているとエラーが出る
gulp.task('images', function () {
return gulp
.src('./src/img/base/*.{png,jpg,gif,svg}')
.pipe(imagemin(imageminOption))
.pipe(gulp.dest(paths.dest.img));
});

// 監視
gulp.task( 'watch', function(done) {
gulp.watch( './src/pug/*.pug', gulp.task('pug'));//pugが更新されたらgulp pugを実行
gulp.watch( './src/pug/*.pug', gulp.task('bs-reload'));//pugが更新されたらbs-relaodを実行
gulp.watch( './src/sass/**/*.sass', gulp.task('sass') ); //sassが更新されたらgulp sassを実行
gulp.watch( './src/sass/**/*.sass', gulp.task('bs-reload')); //sassが更新されたらbs-reloadを実行
gulp.watch( './src/sass/**/*.scss', gulp.task('sass') );
gulp.watch( './src/sass/**/*.scss', gulp.task('bs-reload'));
gulp.watch( './src/js/*.js', gulp.task('js') ); //jsが更新されたらgulp jsを実行
gulp.watch( './src/js/*.js', gulp.task('bs-reload') ); //jsが更新されたらbs-relaodを実行
});

// default
gulp.task('default', gulp.series(gulp.parallel('browser-sync', 'watch')));

// build
gulp.task( 'build', gulp.series(gulp.parallel('pug','sass','js','images')));