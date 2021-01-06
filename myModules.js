console.log('当前文件目录', __dirname);
console.log('当前文件路径', __filename);

exports.c = 3;
// module.exports = {
//     a: 1,
//     b: 2
// }
// module.exports.a = 1;
// module.exports.b = 2;
this.m = 5;

/**
 * require 伪代码
 */

// function require(modulePath) {
//     //  1. 将modulePath 转换为绝对路径
//     //  2. 判断该模块是否已有缓存
//     if (require.cache[绝对路径]) {
//         return 该模块的运行结果
//     }
//     //  3. 读取文件内容
//     //  4. 包裹到一个函数中

//     function __temp(module, exports, require, __dirname, __filename) {
//         // 这就是为什么不是global的，却可以直接使用
//         console.log('当前文件目录', __dirname);
//         console.log('当前文件路径', __filename);
//         exports.c = 3;
//         module.exports = {
//             a: 1,
//             b: 2
//         }
//         this.m = 5;
//     }
//     //  5. 创建module对象
//     module.exports = {};
//     exports = module.exports;
//     //  6. 函数调用
//     __temp.call(module.exports, module, exports, require, module.path, module.filename)

//     return module.exports;
// }

// require.cache = {}