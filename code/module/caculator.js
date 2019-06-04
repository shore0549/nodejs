// cmd规范


// commonjs规范
function convert(input){
    return parseFloat(input);
}

function add (a,b){
    return convert(a)+convert(b);
}
function substract (a,b){
    return convert(a)-convert(b);
}

// 导出2个方法给外面调用.
//  ES6的新语法,自动化属性
module.exports={
    add,
    substract
}