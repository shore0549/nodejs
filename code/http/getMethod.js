
// 步骤一、引入 required 模块
var http = require("http");

// 发送get请求
http.get('http://m.baidu.com',(response)=>{
    // console.log(response);

    var content = '';
    response.on('data',(chunk)=>{
        content+=chunk.toString();
    });

    response.on('end',(chunk)=>{
        console.log(content.length);
        console.log(content);
    });
});