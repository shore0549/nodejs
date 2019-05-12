
//1, 进入repl环境:dos命令行窗口,输入node回车就进去了.
//2, 使用vscode,node的智能提示非常友好,比webstorm强.
var p = require('path');
p.join('c:\\data','data.json');
console.log(p);


// node -e 'console.log(1)'
//3, 运行js文件,node index.js


//4,dom对象不能在node里使用. 
//5,js与node的差别:js里面有window对象,你可以在浏览器里输入:window命令,看到
//  node里面没有window对象,取而代之的是globe对象,你可以在node的repl环境里面输入:globe命令.


