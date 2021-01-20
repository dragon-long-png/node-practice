const path = require('path');

const fs = require('fs');

// 读取一个目录中的所有子目录和文件

// 每个目录或文件都是一个对象

/**
 * [
 *   "目录/文件名" : {
 *          name: 文件名,
 *          ext: 后缀名
 *          isFile: 是否是一个文件
 *          size: 文件大小
 *          createTime: 创建时间
 *          updateTime: 修改时间
 *          getChildren: function () {
 *              得到目录的所有子文件对象，如果是文件，返回空数组
 *          }
 *          getContent: function (Buffer = false) {
 *              读取文件内容，如果是目录，返回null
 *          }
 *      }
 * ]
 */

class File {
    constructor (filename, name, ext, isFile, size, createTime, updateTime) {
        this.filename = filename;
        this.name = name;
        this.ext = ext;
        this.isFile = isFile;
        this.size = size;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }
    static async getStat (filename) {
        const stat = await fs.promises.stat(filename);
        // 文件名
        const name = path.basename;
        // 后缀名
        const ext = path.extname;
        // 是否是一个文件
        const isFile = stat.isFile();
        // 尺寸
        const size = stat.size;
        // 创建时间
        const createTime = stat.birthtime;
        // 上次修改时间
        const updateTime = stat.mtime;
        return new File (filename, name, ext, isFile, size, createTime, updateTime);
    }
    async getChildren () {
        // 如果是一个文件，则直接返回空数组
        if(this.isFile) {
            return []
        }
        let children = await fs.promises.readdir(this.filename);
        children = children.map (name => {
            const result = path.resolve(this.filename, name);
            return File.getStat(result)
        })
        return Promise.all(children)
    }
    async getContent (isBuffer = false) {
        // 读取文件内容，如果是目录，返回null
        if(this.isFile) {
            // 返回的是utf-8还是
            if(isBuffer) {
                return await fs.promises.readFile(this.filename)
            } else {
                return await fs.promises.readFile(this.filename, 'utf-8');
            }
        }
        return null
    }
}

async function readDir(pathname) {
    const result = await File.getStat(pathname);
    return await result.getChildren();
}

async function test () {
    // 要访问的路径
    const pathname = path.resolve(__dirname, './files');
    // 读取后的结果，包含目录，文件
    const data = await readDir(pathname);
    // 读取内容
    const res = await data[0].getContent(true)
    console.log(res);
}

test()