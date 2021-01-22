const net = require("net");

const socket = net.createConnection({
    host: "duyi.ke.qq.com",
    port: 80
}, () => {
    // console.log("连接成功")
})

let receive = null;

function parseResponse(data) {
    const index = data.indexOf('\r\n\r\n');
    const responseHead = data.substring(1, index); //响应头
    const responseBody = data.substring(index + 2); //响应体
    const head = responseHead.split('\r\n');
    const headArray = head.slice(1).map(str => {
        return str.split(':').map(s => s.trim());
    })
    const header = headArray.reduce((a, b) => {
        a[b[0]] = b[1];
        return a
    }, {});

    return {
        header,
        body: responseBody.trimStart()
    }
}

function isOver() {
    const contentLength = receive.header['Content-Length'];
    const currentLength = Buffer.from(receive.body, 'utf-8').byteLength;
    return currentLength >= contentLength;
}

socket.on("data", chunk => {
    let responseData = chunk.toString("utf-8");
    if (!receive) {
        // 第一次，
        receive = parseResponse(responseData);
        if(isOver()) {
            socket.end();
        }
        return;
    }
    // 如果没有完成，则继续添加
    receive.body += responseData;
    // 判断是否完成
    if (isOver()) {
        socket.end();
        return;
    }
})

socket.write(`GET / HTTP/1.1
Host: duyi.ke.qq.com
Connection: keep-alive

`);

socket.on("close", () => {
    console.log("连接关闭了");
})