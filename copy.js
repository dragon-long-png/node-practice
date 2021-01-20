const fs = require('fs');

const path = require('path');

// 复制一份文件

// 方法1，readFile读取文件，writeFile写文件
// async function method1 () {
//     const from = path.resolve(__dirname, './temp/one.txt');
//     const to = path.resolve(__dirname, './temp/two.txt');
//     console.time('method1');
//     const data = await fs.promises.readFile(from);
//     await fs.promises.writeFile(to, data);
//     console.timeEnd('method1');
//     console.log('复制完成')
// }

// method1()

// 方法2，文件流

function method2() {
    const from = path.resolve(__dirname, './temp/one.txt');
    const to = path.resolve(__dirname, './temp/two.txt');
    const rs = fs.createReadStream(from);
    const ws = fs.createWriteStream(to);
    console.time('method2');
    // 读一部分，写一部分，但读的默认字节为64kb, 写的默认字节为16kb，会出现背压
    rs.on('data', chunk => {
        let flag = ws.write(chunk);
        // 表示出现背压，先缓一缓
        if (!flag) {
            // 暂停
            rs.pause();
        }
    })
    ws.on('drain', () => {
        // 恢复
        rs.resume();
    })

    rs.on('close', () => {
        ws.end();
        console.timeEnd('method2');
        console.log('复制完成')
    })

    // rs.pipe(ws)
}

method2()