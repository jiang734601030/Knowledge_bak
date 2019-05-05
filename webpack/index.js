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