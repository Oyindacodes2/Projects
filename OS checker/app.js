const http = require('http');
const path = require('path');
const os = require('os');
const fs = require('fs');
const config = require('./default.json');
const express = require('express');
const request = require('request');
const cors = require('cors');
const { json } = require('express');


var app = express();

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    next();
})

var port = process.env.PORT || config.PORT;
var hostName = config.HOSTNAME;

var server = http.createServer((req,res)=>{

    //res.end(`Backend Working`);
    /*
    if(req.url == '/' || req.url == '/home'){
        fs.readFile(path.join(__dirname,'Public','index.html'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(content);
        })
    }

    if(req.url == '/about'){
        fs.readFile(path.join(__dirname,'Public','about.html'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(content);
        })
    }

    if(req.url == '/api/users'){

        const users = [
            {
                id:1,
                name:'Nigga'
            },
            {
                id:2,
                name:'Homie'
            },
            {
                id:3,
                name:'Ballas'
            }
        ];

      res.writeHead(200,{'Content-Type':'application/json'});
      res.end(JSON.stringify(users))
    }
    */

    //Build File path
    let filePath = path.join(__dirname,'Public',req.url === '/'?  'index.html': req.url );
    console.log(filePath);
    //Extension
    let extname = path.extname(filePath);
    //Initial content Type
    let contentType = 'text/html';

    //Check extension and set content
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
            
        case '.css'    :
            contentType = 'text/css';
            break;

        case '.json':
            contentType = 'application/json';
            break;

        case '.png':
            contentType = 'image/png';
            break;

        case '.jpg':
            contentType = 'image/jpg';
            break;

        case '.svg':
            contentType = 'image/svg';
            break;
    }

    //Read file
    fs.readFile(filePath,(err,content)=>{
        if(err){
            if(err.code == 'ENOENT'){
                //Page not found
                fs.readFile(path.join(__dirname,'Public','404.html'),'utf8',(err,content)=>{
                    res.writeHead(200,{ 'Content-Type':'text/html' });
                    res.end(content,'utf8');
                })
            }else{
                //Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }else{
            //Success
            res.writeHead(200,{'Content-Type':contentType});
            res.end(content,'utf8');
        }
    })


    switch(req.url){
        case '/platform':
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify(os.platform()));
            break;

        case '/arch':
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify(os.arch()));
            break;

        case '/cpus':
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify(os.cpus()[0]['model']));
            break;

        case '/freemem':
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify(os.freemem()));
            break;

        case '/totalmem':
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify(os.totalmem()));
            break;

        case '/uptime':
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify(os.uptime()));
            break;
    }
});

server.listen(port,hostName,()=>{
    console.log(`Server Running at http://${hostName}:${port}`);
})

