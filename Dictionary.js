/**
 * Dictionary.js
 */
var express= require('express');
var cors=require('cors')
var app=express();

var port=8081;
app.use(cors())

app.use((req,res,next)=>{
    console.log(`server starting in port: ${port}`);
    next();
});
app.get('/', (req, res, next) => {

    var word= req.query.word;
    // fetch the data and put it to res to send it back to client requesting it
    var query= require('./word');
    query.queryWord(word, res);
});

app.listen(port, ()=>{
console.log('Listenning the port on:'+port)

});
