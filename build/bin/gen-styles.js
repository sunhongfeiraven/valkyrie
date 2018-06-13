const path = require('path')
const gulp = require('gulp')
const rimraf = require('rimraf')
const through2 = require('through2')
const merge2 = require('merge2')
const babel = require('gulp-babel')
const transformLess = require('./transformLess')
const getBabelCommonConfig = require('./getBabelCommonConfig')

const cwd = process.cwd()
const libDir = path.join(cwd, 'lib')

const babelify = (js) => {
  const babelConfig = getBabelCommonConfig()
  delete babelConfig.cacheDirectory
  babelConfig.plugins.push(require.resolve('babel-plugin-add-module-exports'))
  const stream = js.pipe(babel(babelConfig)).pipe(through2.obj(function (file, encoding, next) {
    this.push(file.clone())
    if (file.path.match(/\/style\/index\.js/)) {
      const content = file.contents.toString(encoding)
      file.contents = Buffer.from(content
        .replace(/\/style\/?'/g, "/style/css'")
        .replace(/\.less/g, '.css'))
      file.path = file.path.replace(/index\.js/, 'css.js')
      this.push(file)
      next()
    } else {
      next()
    }
  }))
  return stream.pipe(gulp.dest(libDir))
}

const style = () => {
  rimraf.sync(libDir)
  const less = gulp
    .src(['packages/**/*.less'])
    .pipe(through2.obj(function (file, encoding, next) {
      const path = file.path
      this.push(file.clone())
      if (file.path.match(/\/style\/index\.less$/)) {
        transformLess(path)
          .then((css) => {
            file.contents = Buffer.from(css)
            file.path = file.path.replace(/\.less$/, '.css')
            this.push(file)
            next()
          })
          .catch((e) => {
            console.error(e)
          })
      } else {
        next()
      }
    }))
    .pipe(gulp.dest(libDir))

  const jsFilesStream = babelify(gulp.src(['packages/**/style/*.js']))
  return merge2([less, jsFilesStream])
}

gulp.task('style', () => {
  style()
})

gulp.start('style')
