//webpack 配置文件
const path = require('path')
//引入插件
const TestPlugin = require('./testPlugin')
//引入插件
const TestPlugin1 = require('./testPlugin1')

module.exports = {
  entry: './index.js',
  output: path.resolve(__dirname, 'bundle.js'),
  plugins: [
    new TestPlugin(),
    new TestPlugin1()
  ]
}