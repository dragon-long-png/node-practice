// Sync函数是同步的，会导致js运行阻塞，极其影响性能
// 通常，在程序启动时运行有限的次数即可

const fs = require('fs');

const path = require('path');

const os = require('os')

const filePath = path.resolve(__dirname, './files/two.txt');

async function test () {
    await fs.promises.writeFile(filePath, '1708.东叔' + os.EOL, {
        flag: 'a'
    });
}

test();