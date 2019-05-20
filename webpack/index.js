//5.5 webpack
//网站
//https://www.webpackjs.com/guides/

// npm uninstall webpack -g  //卸载全局的webpack

// 最新的webpack版本是：

// GitHub release

// 要安装最新版本或特定版本，请运行以下命令之一：

// npm install --save-dev webpack
// npm install --save-dev webpack@<version>  : npm install --save-dev webpack@ version
// 如果你使用 webpack 4+ 版本，你还需要安装 CLI。

// npm install --save-dev webpack-cli
// 对于大多数项目，我们建议本地安装。这可以使我们在引入破坏式变更(breaking change)的依赖时，更容易分别升级项目。通常，webpack 通过运行一个或多个 npm scripts，会在本地 node_modules 目录中查找安装的 webpack：

// "scripts": {
//     "start": "webpack --config webpack.config.js"
// }
// 当你在本地安装 webpack 后，你能够从 node_modules/.bin/webpack 访问它的 bin 版本。


//第一部分 安装
//步骤1
//npm init -y
//创建package.json文件 文件内容{}

// npm install --save-dev webpack
// npm install --save-dev webpack@ version
// npm install --save-dev webpack-cli

//创建 webpack.config.js文件
// const path = require('path');
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// };

//运行 npx webpack --config webpack.config.js
//或者 如package.json 文件中scripts 添加如下内容，可用npm run build构建
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "build": "webpack"
//   },
//index.js 中 import _ from 'lodash';
//执行 npm run build     ./src/index.js  解析到 dist/bundle.js

//第二部分 资源管理
//步骤1
// 为了从 JavaScript 模块中 import 一个 CSS 文件，
// 你需要在 module 配置中 安装并添加 style-loader 和 css-loader：
// npm install --save-dev style-loader css-loader


//     module: {
//         rules: [
//             {
//                test: /\.css$/,
//                use: [
//                 'style-loader',
//                 'css-loader'
//               ]
//             }
//           ]
//         }
//index.js 中  import './style.css';
//执行 npm run build    style.css被添加到head里面


//步骤2
//加载图片
// 使用 file-loader，我们可以轻松地将这些内容混合到 CSS 中：
// npm install --save-dev file-loader
            // rules: [
            //     {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            //     },
            //     {
            //     test: /\.(png|svg|jpg|gif)$/, 
            //     use: [
            //         'file-loader'
            //     ]
            // }
            // ]

//index.js 中       import Icon from './icon.jpg';  或者style.css 引用图片路径
//执行 npm run build   在/dist中创建了一个新的图片  

//步骤3
//加载字体 。。。。

//步骤4  加载数据
// 此外，可以加载的有用资源还有数据，如 JSON 文件，CSV、TSV 和 XML。
// 类似于 NodeJS，JSON 支持实际上是内置的，也就是说 import Data from './data.json' 默认将正常运行。
// 要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader。让我们处理这三类文件：
//npm install --save-dev csv-loader xml-loader
// {
//     test: /\.(csv|tsv)$/,
//     use: [
//         'csv-loader'
//         ]
//     },
//     {
//     test: /\.xml$/,
//     use: [
//         'xml-loader'
//     ]
//     }



//第三部分 管理输出
// 1.设定 HtmlWebpackPlugin
//npm install --save-dev html-webpack-plugin

//const HtmlWebpackPlugin = require('html-webpack-plugin');
//   plugins: [
//         new HtmlWebpackPlugin({
//           title: 'Output Management'
//         })
//      ],

// 如果你在代码编辑器中将 index.html 打开，
// 你就会看到 HtmlWebpackPlugin 创建了一个全新的文件，所有的 bundle 会自动添加到 html 中。

// 2.清理 /dist 文件夹

// 你可能已经注意到，由于过去的指南和代码示例遗留下来，导致我们的 /dist 文件夹相当杂乱。
// webpack 会生成文件，然后将这些文件放置在 /dist 文件夹中，
// 但是 webpack 无法追踪到哪些文件是实际在项目中用到的。
// 通常，在每次构建前清理 /dist 文件夹，是比较推荐的做法，因此只会生成用到的文件。让我们完成这个需求。
//clean-webpack-plugin 是一个比较普及的管理插件，让我们安装和配置下。

//npm install clean-webpack-plugin --save-dev

//const CleanWebpackPlugin = require('clean-webpack-plugin');
//plugins 中 new CleanWebpackPlugin(),


//第四部分  开发

//1.使用 source map （不用下载）  追踪到错误和警告在源代码中的原始位置
//webpack.config.js文件中   module.exports 配置 inline-source-map
// devtool: 'inline-source-map',


//2.选择一个开发工具

// 1） webpack's Watch Mode 使用观察模式

// "scripts": {
//    "watch": "webpack --watch",
//   },
//npm run watch 就可以监听，不用每次改动就去npm run build ，但是不能实时加载浏览器

// 2） webpack-dev-server
//webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。让我们设置
//npm install --save-dev webpack-dev-server 

//直接用此命令报错npm install webpack-dev-server --save-dev  ，
//先用npm cache clean --force 再执行npm install webpack-dev-server --save-dev可正常安装

// webpack.config.js
//   devServer: {
//     contentBase: './dist'
//   },

//package.json
// "scripts": {
//"start": "webpack-dev-server --open",
//   },
  
 //npm run  start 可以启动浏览器 服务http://localhost:8080/  ，现在编辑会自动在浏览器刷新

// 3） webpack-dev-middleware
// webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)。
//  webpack-dev-server 在内部使用了它，同时，它也可以作为一个单独的包来使用，
//  以便进行更多自定义设置来实现更多的需求。
// 接下来是一个 webpack-dev-middleware 配合 express server 的示例。

// 首先，安装 express 和 webpack-dev-middleware：
// npm install --save-dev express webpack-dev-middleware

// webpack.config.js
// output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     publicPath: '/'  添加这个
//   }

//添加server.js文件  以下为内容
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});

//package.json 文件
// "scripts": {  
//      "server": "node server.js",
//   },

//执行 npm run server  不会自动打开网页 也不会自动刷新，需手动刷新
//访问http://localhost:3000  


//第五部分 模块热替换