// node的全局对象
// console.log(global);

// setTimeout setInterval 返回的是一个对象，不再是一个数字
// const timer = setTimeout(() => {
    
// }, 400);

// console.log(timer);

// setImmediate 相当于 setTimeout 0


// __dirname  获取当前模块所在的目录，  并非global属性

// console.log(__dirname);

// console.log(global.__dirname);

// __filename  获取当前模块的文件路径，  并非global属性

// console.log(__filename);

// Buffer  自es6, 回头看

// const buffer = Buffer.from('abcdefg', 'utf-8');

// console.log(buffer);

// process

    // cwd, 返回当前进程的工作目录
    // console.log(process.cwd());

    // exit, 强制退出当前Node进程

    // setTimeout(() => {
    //     console.log('111');
    // }, 500);
    // process.exit()

    // argv, 获取命令中的所有参数 String

    // console.log(process.argv);

    // platform, 获取当前的操作系统 最低及以上版本，并不代表自己电脑的操作系统版本
    
    // console.log(process.platform);

    // kill(id), 根据进程id杀死进程

    // process.kill(12760);

    // env, 获取环境变量对象
    // console.log(process.env);