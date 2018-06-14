const path = require('path')
const Components = require('../components.json')
const dependencies = require('../package.json').dependencies

let externals = {}
let pkg = {}

Object.keys(Components).forEach((key) => {
  externals[`valkyrie/packages/${key}/index.js`] = `valkyrie/lib/${key}`
  // externals[
  //   `valkyrie/packages/${key}/style.css`
  // ] = `valkyrie/lib/${key}/style.css`
})

Object.keys(dependencies).forEach((key) => {
  externals[key] = key
  pkg[key] = key
})

exports.externals = Object.assign(
  {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
  externals,
)

exports.pkg = Object.assign({ vue: 'vue' }, pkg)

exports.alias = {
  valkyrie: path.join(__dirname, '..'),
  src: path.join(__dirname, '../src'),
}

exports.jsexclude = /node_modules|lib/

exports.extends = ['vue2']
