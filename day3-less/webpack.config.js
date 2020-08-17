//path node.js 提供的模块
const path = require('path')

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
  resolveLoader: {
    modules: ['node_modules', './loader']
  },
  //配置loader, 不同文件应用不同的loader
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'lessLoader',
            options: {
              sourceMap: false
            }
          }
        ]
      }
    ]
  },
}