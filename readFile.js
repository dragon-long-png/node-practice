// Sync函数是同步的，会导致js运行阻塞，极其影响性能
// 通常，在程序启动时运行有限的次数即可

const fs = require('fs');

const path = require('path');

const filePath = path.resolve(__dirname, './files/one.txt');

// fs.readFile(filePath, 'utf-8', (err, data) => {
//     console.log(data);
// })

// const data = fs.readFileSync(filePath, 'utf-8');

// console.log(data);

async function test () {
    const data = await fs.promises.readFile(filePath, 'utf-8');
    console.log(data);
}

test();