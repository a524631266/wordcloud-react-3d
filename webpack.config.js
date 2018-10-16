const path = require('path');
const nodeExternals = require('webpack-node-externals');

// 通过 babel 转换 JSX 和 ES6 代码
// css-loader, sytle-loader 引入 css 到打包文件
// webpack-node-externals 可以避免把 node_modules 里面的依赖包引入打包文件
// libraryTarget: "commonjs2" 使 test project 可以找到我们打包后的组件

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  externals: [nodeExternals()]
};
