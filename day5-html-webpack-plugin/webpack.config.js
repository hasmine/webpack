//path node.js 提供的模块
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//定义入口
const entry = {
  home: './home/index.js',
  topic: './topic/index.js'
}

//根据入口生成html plugin
const plugins = []
!(function () {
  let keys = Object.keys(entry);
  keys.map(key => {
    let htmlPlugin = new HtmlWebpackPlugin({
      title: 'webpack训练营',
      template: './index.tpl.html',
      templateParameters: {
        'welcome': 'hello world',
        'des': 'study webpack'
      },
      chunks: [key],
      filename: `${key}.html`,
      //压缩处理
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      //meta 标签
      meta: {
        charset: { charset: 'utf-8' },
        viewport: 'width=device-width, initial-scale=1'
      },
      //控制script 标签插入的位置
      inject: 'head',
      favicon: 'favicon.ico'
    })
    plugins.push(htmlPlugin)
  })
}())

//webpack 的配置 类型为对象
module.exports = {
  //设置打包方式，支持development & production
  mode: 'development',
  //打包入口文件
  entry: entry,
  //最终打包结果配置
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: plugins
}