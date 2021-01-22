const net = require('net');

const fs = require('fs');

const path = require('path');

const server = net.createServer();

server.listen('0907');

server.on('listening', () => {
    console.log('开始监听');
})

server.on('connection', socket => {
    console.log('有人访问了');
    socket.on("data", async chunk => {
        const filename = path.resolve(__dirname, './1.jpg')
        const bodyBuffer = await fs.promises.readFile(filename)
        // const bodyBuffer = Buffer.from("aaaaaaa");
        const headBuffer = Buffer.from(`HTTP/1.1 200 OK
Content-Type: text/plain

`,
            "utf-8"
        );
        const result = Buffer.concat([headBuffer, bodyBuffer]);
        socket.write(result);
        socket.end();
    })
    socket.on("end", () => {
        console.log("连接关闭了");
    });
})