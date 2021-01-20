const fs = require('fs');

const path = require('path');

// 文件删除

// fs.promises.unlink('./one.txt', (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log('文件已删除')
// })


const rs = fs.createReadStream('./one.txt', {
    encoding: 'utf-8',
    highWaterMark: 1
});

rs.on('open', () => {
    console.log('文件打开了');
})

rs.on('error', () => {
    console.log('文件找不到');
})

rs.on('close', () => {
    console.log('文件关闭了');
})

// rs.close();

rs.on('data', chunk => {
    console.log('读取了一部分数据', chunk);
    rs.pause()
})

rs.on('pause', () => {
    console.log('暂停读取');
    setTimeout(() => {
        rs.resume();
    }, 1000);
})

rs.on('resume', () => {
    console.log('恢复读取');
})

rs.on('end', () => {
    console.log('所有数据读取完毕');
})