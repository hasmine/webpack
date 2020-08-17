//启动的入口文件
const Compiler1 = require('./Compiler');
const options = require('./webpack.dev');

// 创建compiler实例函数
function createCompiler(options) {
  //创建Compiler
  const compiler = new Compiler1(options);

  // 对所有的plugins 调用 apply 函数
  options.plugins.map(plugin => {
    plugin.apply(compiler)
  });

  compiler.hooks.initialize.call();
  //触发各个钩子事件
  compiler.hooks.run.callAsync(compiler, ret => { console.log('compiler run finished') })
  compiler.hooks.emit.callAsync(compiler, ret => { console.log('compiler emit finished') })
  return compiler;
}

//实例化
const compiler = createCompiler(options)