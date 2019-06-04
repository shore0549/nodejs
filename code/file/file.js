
'use strict';
// 加载文件
const fs = require('fs');


// 回调函数,错误优先(error,data)=>
fs.readFile('./http/http.js','utf-8',(error,data)=>{
    if(error){
        throw new Error('读取文件错误');
    }
    console.log(data);
});