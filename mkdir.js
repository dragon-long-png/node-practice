// mkdir, 创建目录

const fs = require('fs');

const path = require('path');

const filePath = path.resolve(__dirname, './files/hello');

async function test () {
    await fs.promises.mkdir(filePath, (err) => {
        if(err) {
            throw err
        }
    });
}
test();