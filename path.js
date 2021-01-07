const path = require('path');

// 1.basename, 返回path的最后一部分, 第二个参数为可选的文件扩展名

// console.log(path.basename('/目录1/目录2/文件.html', '.html'));

// 2.sep, 路径片断分隔符，windows : \ ,   linux/mac/unix : /

// console.log('foo\\bar\\baz'.split(path.sep));

// 3.delimiter, 提供平台特定的路径分隔符

// console.log(process.env.PATH.split(path.delimiter))  

// 4.dirname, 返回目录名

// console.log(path.dirname('C:\\Users\\Administrator\\Desktop\\Practice\\Yuan-Node\\node-practice\\os.js'))

// console.log(path.dirname(__dirname, './os.js'))

// 5.extname, 返回扩展名

// console.log(path.extname('os.js'))

// 6.join, 将给定的path连接到一起，然后规范划生成路径

// console.log(path.join('目录1', '目录2', '目录3/目录4', '..', '目录5'));

// 7.normalize, 规范给定的path, 解析 .. 或 . 片段

// console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));

// console.log(path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar'));

// 8.relative, 返回两个路径之间的相对路径

// console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));

// 9.resolve, 返回绝对路径, 该方法以应用程序根目录为起点, 方向 为自右向左, 如果解析完成，还不是绝对路径，则会使用当前工作目录

console.log(path.resolve('a', '/b', 'c'))

console.log(path.resolve('/目录1/目录2', './目录3'));

console.log(path.resolve('/目录1', '目录2/目录3/', '../目录4/文件.gif'))