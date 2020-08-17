//这个配置文件主要为线上环境打包，包含文件压缩、文件指纹等、代码优化。
const baseConf = require('./webpack.base')
const { merge } = require('webpack-merge')

const prodConf = {
  mode: 'production'
}

const retConf = merge(baseConf, prodConf)

module.exports = retConf