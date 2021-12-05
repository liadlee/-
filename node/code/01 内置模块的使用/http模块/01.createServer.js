const http = require('http');
const server = http.createServer();
server.on('request',(req,res)=>{
    console.log('someone come in'); 
})
server.listen('8080',()=>{
    console.log('the server is running');
})