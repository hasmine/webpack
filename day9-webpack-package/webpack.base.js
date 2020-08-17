//base 用来处理各个webpack 文件中共用的配置
// 解析 ES6
// 解析css 预处理 比如less、scss、stylus
// 解析图片、字体
// 解析主要的开发框架，比如Vue、React
// 多页面入口
// output 定义
// html 模板处理
const path = require('path')
const glob = require('glob')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//多页面处理
const setupMutiPageApp = () => {
  const entry = {}
  const htmlPlugins = []
  const entryFiles = glob.sync(path.join(__dirname, './src/pages/*/index.js'));
  console.log("entryFiles", entryFiles)
  Object.keys(entryFiles).map(key => {
    const entryFile = entryFiles[key]

    const match = entryFile.match(/src\/pages\/(.*)\/index\.js/)
    const pageName = match && match[1] //文件名称 //比如获取src/pages/home/index.js 中的home

    entry[pageName] = entryFile //entry = { home: /src/pages/home/index.js/ }

    let templatePath = path.join(__dirname, `./src/pages/${pageName}/index.html`)

    //如果不存在则使用全局模板
    if (!fs.existsSync(templatePath)) {
      templatePath = path.join(__dirname, `./src/index.html`)
    }

    htmlPlugins.push(
      new HtmlWebpackPlugin({
        title: 'webpack package study',
        template: templatePath,
        templateParameters: {
          'welcome': `hello ${pageName}`,
          'des': 'study webpack'
        },
        filename: `${pageName}.html`,
        chunks: [pageName],
        //压缩处理
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
        //控制script 标签插入的位置
        inject: true,
      })
    )
  })
  return {
    entry, htmlPlugins
  }
}

const { entry, htmlPlugins } = setupMutiPageApp()

//预处理、loader
const files = {
  rules: [
    {
      // ES6 -> ES5
      test: /\.js$/,
      use: 'babel-loader'
    },
    {
      // css
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      // less
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    },
    {
      // vue 文件采用vue-loader 来处理
      test: /\.vue$/,
      use: 'vue-loader'
    },
    {
      //处理图片
      test: /\.(png|jpg|jpeg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10240
          }
        }
      ]
    },
    {
      //字体处理
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: 'file-loader'
    }
  ]
}

module.exports = {
  entry: entry,
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  module: files,
  plugins: [
    new VueLoaderPlugin(),
    ...htmlPlugins
  ]
}