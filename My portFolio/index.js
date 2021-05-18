const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const url = require('url');
const path = require('path');
const fs = require('fs');

var app = express();

//view engine setup
app.engine('handlebars', exphbs({
    extname: '.hbs',
    defaultLayout: null
}));
app.set('view engine', 'handlebars');

//Bodyparser middleware
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json()); 

app.use('/Public',express.static(path.join(__dirname,'Public')));
//app.use('/',indexRouter);

app.get('/',(req,res)=>{
    res.render('index'); 
})

app.post('/send',(req,res)=>{
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>E-mail: ${req.body.email}</li>
    </ul>
    <h3>
        <p>Message: ${req.body.message}</p>
    </h3>
       `;

    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();
      
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "Smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: 'akogunoyindamola42@gmail.com', // generated ethereal user
            pass: 'damodami43', // generated ethereal password
          },
          tls:{
              rejectUnauthorized: false
          }
        });
      
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: 'akogunoyindamola42@gmail.com', // sender address
          to: "akogunolayinka42@gmail.com", // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: output, // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        
        res.render('contact',{msg:"Email has been sent"});
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      }
      
      main().catch(console.error);

})

            /*Using express*/

app.listen(5000,()=>{
    console.log(`Server running`)
});

/*const port = process.env.PORT || 5001;
hostname = '127.0.0.1';

const server = http.createServer((req,res)=>{
    let filepath = path.join(__dirname, 'Public',req.url==='/'?'index.html':req.url);
    let errorpage = path.join(__dirname,'Public','404.html');

    let extname = path.extname(filepath);

    let ContentType = 'text/html';

    switch(extname){
        case '.js':
            ContentType='text/javascript';
            break;
        
        case '.css':
            ContentType = 'text/css';
            break;

        case '.json':
            ContentType = 'application/json';
            break;

        case '.png':
            ContentType = 'image/png';
            break;

        case '.jpg':
            ContentType = 'image/jpg';
            break;
    }

    console.log(filepath)
   fs.readFile(filepath,(err,content)=>{
       if(err){
           if(err.code=='ENOENT'){
               fs.readFile(errorpage,(err,content)=>{
                   res.writeHead(200, {'Content-Type':'text/html'});
                   res.end(content,'utf8');
               })
           }else{
               res.writeHead(500);
               res.end(`Server error ${err.code}`)
           }
       }else{
           res.writeHead(200, {'Content-Type':ContentType});
           res.end(content,'utf8');
       }
   })

});

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});*/

