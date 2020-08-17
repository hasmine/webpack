const path = require('path')
const loaderUtils = require('loader-utils')
const less = require('less')

module.exports = function (source) {
  console.log('___________begin handle less file')
  console.log('source', source)
  const options = loaderUtils.getOptions(this)
  console.log('___________options', options)
  const callback = this.async();
  less.render(source).then(({css, map, imports}) => {
    console.log("less render finished, css: ")
    console.log(css)
    callback(null, css)
  })
  return source
}