// Sync函数是同步的，会导致js运行阻塞，极其影响性能
// 通常，在程序启动时运行有限的次数即可

const fs = require('fs');

const path = require('path');

const filePath = path.resolve(__dirname, './files/1.jpeg');

async function test () {
    const data = await fs.promises.readFile(filePath);
    const newPath = path.resolve(__dirname, './files/copy1.jpeg');
    fs.promises.writeFile(newPath, data)
}

test();