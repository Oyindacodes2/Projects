const fs = require('fs');
const path = require('path');

//Create Folder
/*fs.mkdir(path.join(__dirname,'/test'),{},(err)=>{
    if(err) throw err;

    console.log('Folder created');
    //Create and Write to file
fs.writeFile(path.join(__dirname,'test','hello.txt'),'Hello World!',(err)=>{
    if(err) throw err;

    fs.appendFile(path.join(__dirname,'test','hello.txt'),'I Love Node js',(err)=>{
        if(err) throw err;
    
        console.log('File Written to...');
    })
})
})*/

//ReadFile
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
    if(err) throw err;

    console.log(data);

})


//Rename FIle
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloWorld.txt'),(err)=>{
    if(err) throw err;

    console.log('File Renamed...');

})


