const os = require('os');

// EOL, 获取不同操作系统行尾的空格标志   windows为 \r\n   linux, mac为 \n

// console.log(os.EOL);

// arch, 返回操作系统的cpu架构

// console.log(os.arch());

// cpus, 返回每个cpu相关的内核信息  返回的是对象数组

// console.log(os.cpus().length);

// freeman, 返回空闲的系统内存，单位为字节

// console.log(os.freemem() / 1024 ** 3);

// homedir, 返回当前用户的主目录的字符串路径

// console.log(os.homedir());

// hostname, 返回操作系统的主机名

// console.log(os.hostname());

// tmpdir, 返回操作系统的默认临时文件目录

// console.log(os.tmpdir());