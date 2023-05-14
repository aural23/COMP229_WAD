//const http = require('http');
//let a = () =>{

//}
//http.createServer(function(req,res){
 //   res.write("<h1> Welcome to my class </h1>");
//    res.end();
//}).listen(8001);

// imports
const express = require('express');
const morgan = require('morgan');

// app init
const app = express();

// first route
app.get('/', (req, res)=>{
    res.json({message: "Welcome to the class"})
})

app.listen('8001');