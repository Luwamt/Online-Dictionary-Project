/**
 * Dictionary.js
 */
var express= require('express');
const path = require('path');
var app=express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var port=8088;
app.use(express.static(__dirname));

var query= require('./word');

console.log(`server starting in port: ${port}`);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './dict.html'));    
});
app.get("/FindWord", (req, res) => {
    
  // fetch the data and put it to res to send it back to client requesting it
     query.queryWord(req, res);
 });

app.listen(port, ()=>{
console.log('Listenning the port on:'+port)

});
