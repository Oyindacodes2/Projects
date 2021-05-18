const http = require('http');

http.createServer((req,res)=>{
    res.end('ffwrfr');
}).listen(5000,()=>{
    console.log('App running');
})