//path node.js 提供的模块
const path = require('path')
// vue-loader was used without the corresponding plugin.
// Make sure to include VueLoaderPlugin in your webpack config.
// 使用 vue-loader 是官方要求必须要使用 VueLoaderPlugin 这个插件
// 引入时只能叫 VueLoaderPlugin 这个名字
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//webpack 的配置 类型为对象
module.exports = {
  //设置打包方式，支持development & production
  mode: 'development',
  //打包入口文件
  entry: './home/index.js',
  //最终打包结果配置
  output: {
    filename: 'day1.js',
    path: path.resolve(__dirname, './dist')
  },
  //配置loader, 不同文件应用不同的loader
  module: {
    rules: [
      {
        // vue 文件采用 vue-loader 来处理
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        // css 文件，先采用 style-loader 处理，
        // 再使用 css-loader 处理，注意顺序
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // vue-loader 目前需要 VueLoaderPlugin，不然会报错
    // 直接创建了 VueLoaderPlugin 实例
    new VueLoaderPlugin()
  ]
}