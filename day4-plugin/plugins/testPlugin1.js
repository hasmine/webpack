class testPlugin1 {
  constructor(options) {
    console.log('testPlugin1 created')
  }

  apply(compiler) {
    console.log('testPlugin1 apply')

    const hooks = compiler.hooks

    //监听 complier 初始化函数
    hooks.initialize.tap('TestPlugin1', () => {
      console.log('TestPlugin1 initalize')
    })

    //监听 complier run 函数
    //run 为 AsyncSeriesHook 异步串行hook
    hooks.run.tapAsync('TestPlugin1', (compiler, callback) => {
      setTimeout(() => {
        console.log('TestPlugin1 task finished')
        callback()
      }, 1000)
    })
  }
}

module.exports = testPlugin1