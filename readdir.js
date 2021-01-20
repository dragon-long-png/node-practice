// readdir, 获取目录中的文件和子目录

const fs = require('fs');

const path = require('path');

const filePath = path.resolve(__dirname, './files');

async function test () {
    const data = await fs.promises.readdir(filePath);
    console.log(data);
}
test();