const fs = require('fs');
fs.readFile(__dirname+'/成绩.txt','utf8',(err,data)=>{
    if(err){
        return console.log(err);
    }
    //let str=data.replace(/=/g,':').split(' ').join('\n')
    let str = data.replace(/=/g,':').replace(/\s/g,'\n')
    console.log(str);
    fs.writeFile('./成绩_ok.txt',str,(err)=>{
       if(err){
        return console.log(err);
        }
    })   
}) 
