

// 步骤一、引入 required 模块
var http = require("http");

// 步骤二、创建服务器
http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);


// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');





// 使用Express的代码来实现上面的功能

var app = express();
//...中间忽略
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
