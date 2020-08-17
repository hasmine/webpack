class testPlugin {
  constructor(options) {
    console.log('testPlugin created')
  }

  apply(compiler) {
    console.log('testPlugin apply')

    const hooks = compiler.hooks

    //监听 complier 初始化函数
    hooks.initialize.tap('TestPlugin', () => {
      console.log('TestPlugin initalize')
    })

    //监听 complier run 函数
    //run 为 AsyncSeriesHook 异步串行hook
    hooks.run.tapAsync('TestPlugin', (compiler, callback) => {
      setTimeout(() => {
        console.log('TestPlugin task finished')
        callback()
      }, 2000)
    })

    hooks.emit.tapAsync('TestPlugin', (compiler, callback) => {
      console.log('TestPlugin emit finished')
      callback()
    })
  }
}

module.exports = testPlugin