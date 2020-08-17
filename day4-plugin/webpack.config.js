//path node.js 提供的模块
const path = require('path')
const ClearPlugin = require('./plugins/clearPlugin');
const OnlinePlugin = require('./plugins/onlinePlugin');

//webpack 的配置 类型为对象
module.exports = {
  //设置打包方式，支持development & production
  mode: 'development',
  //打包入口文件
  entry: './index.js',
  //最终打包结果配置
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new ClearPlugin({
      removeAll: true
    }),
    new OnlinePlugin({
      errorTodo: true
    })
  ]
}