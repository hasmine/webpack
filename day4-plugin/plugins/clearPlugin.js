const del = require('del')

class clearPlugin {
  // 1、定义一个 JavaScript 类（class ClearPlugin）或者函数；
  constructor(option) {
    console.log("ClearPlugin constructor called")
  }

  // 2、需要定义一个 apply 方法；
  //compiler 参数 相当于webpack实例、包含webpack 所有数据和方法
  //hooks属性 可以监听整个编译过程中webpack 发出的事件
  apply(compiler) {
    console.log('ClearPlugin apply called');
    const hooks = compiler.hooks
    if (!hooks) { //只支持 webpack4+
      return;
    }
    if (!compiler.options.output || !compiler.options.output.path) {
      console.log('webpack config not found');
      return;
    }

    this.outputPath = compiler.options.output.path;

    //3、指定 hook 来 「钩住」想要的事件
    hooks.emit.tapAsync('clear-plugin', (compilertion, callback) => {
      //4、处理webpack 内部提供的数据
      const stats = compilertion.getStats();
      if (stats.hasErrors()) {
        //有错误不能删除文件
        return;
      }

      //开始删除文件
      (async () => {
        await del([this.outputPath])
        //5、当处理的任务结束时，要给webpack 一个回调高度webpack 我完事了；
        callback();
      })();
    });
  }
}

module.exports = clearPlugin