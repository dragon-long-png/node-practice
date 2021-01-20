const fs = require('fs');

const path = require('path');

const filename = path.resolve(__dirname, './temp/one.txt');

const ws = fs.createWriteStream(filename, {
    encoding: 'utf-8',
    flags: 'w',
    highWaterMark: 4
});

let i = 0;
function write () {
    let flag = true;
    while (i < 1024 * 1024 * 10 && flag) {
        flag = ws.write('a');
        i++;
    }
}

write();

ws.on('drain', () => {
    write();
})