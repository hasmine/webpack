const {
  SyncHook, AsyncSeriesHook, 
} = require('tapable')

class Compiler {
  constructor(context) {
    // 对 tapable 的使用
    this.hooks = {
      initialize: new SyncHook(),
      run: new AsyncSeriesHook(['compiler']),
      emit: new AsyncSeriesHook(['compilation']),
    }

    this.context = context
  }
}

module.exports = Compiler