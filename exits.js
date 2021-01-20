const fs = require('fs');

const path = require('path');

const filePath = path.resolve(__dirname, './files/copy2.jpeg');

async function exits (path) {
    // 检查文件或目录是否存在
    try {
        await fs.promises.stat(path)
        return true
    } catch (err) {
        console.log(err);
        if(err.code === 'ENOENT') {
            // 文件不存在
            return false
        }
        throw err
    }
}

async function test () {

    const result = await exits(filePath);
    if(result) {
        console.log('目录存在')
    } else {
        await fs.promises.mkdir(filePath, (err) => {
            console.log('目录创建成功')
        })
    }
}

test()