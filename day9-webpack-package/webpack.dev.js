//线下环境打包、方便开发与调试 合并baseConf、devConf
const path = require('path')
const baseConf = require('./webpack.base')
const { merge } = require('webpack-merge')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const devConf = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: []
}

const retConf = merge(baseConf, devConf)
console.log("retConf", retConf)
module.exports = retConf