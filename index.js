// // http module
// var http = require("http");
// console.log("create http server");
// http.createServer(function (req, res) {
//     res.write("server is running in http");
//     console.log("we are programer");
//     res.end();
// }).listen(8081);

// // fs module
// var http = require('http');
// var fs = require('fs')
// console.log('server')
// http.createServer((req, res) => {
//     fs.readFile("index.html", function (err, data) {
//         res.writeHead(200, { "content-type": "text/html" });
//         res.write(data);
//         return res.end();
//     })
// }).listen(8080);

// // expres js 
// var express = require('express')
// var app = express();
// console.log('hello , express !');
// app.get('/',(req,res)=>{
//     res.send('surver is running now')
//     console.log('now you are using express');
//     res.end();
// }).listen(8909);