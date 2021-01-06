// 模块查找，绝对路径
// require('C:\\Users\\Administrator\\Desktop\\Practice\\Yuan-Node\\node-practice\\a.js')

// 相对路径，./  ../
// require('./a.js');

// 相对路径，检查内置模块，node_modules
// require('abc')

// 自动补全后缀，  .js .json .node .mjs
// const result = require('./a');
// const result = require('./a.json')
// console.log(result);

// console.log('执行');

// main字段，入口文件
// require('abc');


// require('./src')

// reslove函数，返回的是绝对路径，不加载模块
// console.log(require.resolve('./a.js'));


// require('./src')

const result = require('./myModules')
console.log(result);