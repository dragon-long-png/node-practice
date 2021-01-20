
const fs = require('fs');

const path = require('path');

const filePath = path.resolve(__dirname, './files/one.txt');

async function test () {
    const data = await fs.promises.stat(filePath);
    console.log(data.isDirectory(filePath));
    console.log(data.isFile(filePath));
}
test();