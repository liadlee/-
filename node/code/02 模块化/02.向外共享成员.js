//明确导入模块的操作 会 执行 导入的模块代码， 得到的是 module对象下的exports指向的对象 ==》module.exports 对象，默认指向一个空对象。
/* 所以向外共享的成员的方式就变成了
1：给module.exports对象添加属性 和方法 
2：或 给module.exports 一个新对象引用； */
module.exports.username = 'zhangsan';
module.exports.add = function(){};

module.exports = {
    username = 'zhangsan',
    add = function(){},
    sayhi(){}
}
