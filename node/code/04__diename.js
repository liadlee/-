const fs = require('fs');
/* ./成绩.txt
    . 代表的不是当前目录，或者说.代表的当前目录不是我们编写文件的当前目录；
    而是node命令执行所在的目录。对我们来说是不确定的，进行自动的动态拼接时容易出错；
*/
/* 
*  与我们熟知的当前目录相同的是 __dirname 
代表当前文件所在路径。
*/
fs.readFile(__dirname + '/成绩.txt', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log(data);
})
