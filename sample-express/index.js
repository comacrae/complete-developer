const express = require('express');
const server = express();
const port = 3000;

server.get('/hello',function(req,res){
    res.send('Hello world!');
});

server.listen(port,"localhost",0, function(){
    console.log('Listening on ' + port);
});