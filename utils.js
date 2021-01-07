const util = require('util');

// 1.callbackify, 将异步函数，转换为回调函数, 回调函数中第一个参数为报错内容

// async function delay(duration = 1000) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(duration);
//     }, duration);
//   });
// }

// const callbackFn = util.callbackify(delay);

// callbackFn((err, data) => console.log(data));


// 2.promisify, 将回调函数，转换为异步函数

// function delayCallBack(duration, callback) {
//   setTimeout(() => {
//     callback(null, duration);
//   }, duration);
// }

// const delay = util.promisify(delayCallBack);
// (async () => {
//   const r = await delay(500);
//   console.log(r);
// })();

// 3.inherits, 继承

// 4.isDeepStrictEqual,  深度递归


const obj1 = {
    a: 1,
    b: {
      c: 3,
      d: {
        e: 5
      }
    }
  };
  
  const obj2 = {
    a: 1,
    b: {
      c: 3,
      d: {
        e: 5
      }
    }
  };
  
  console.log(util.isDeepStrictEqual(obj1, obj2));