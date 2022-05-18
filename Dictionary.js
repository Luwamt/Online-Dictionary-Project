/**
 * Dictionary.js
 */
var express= require('express');
var cors=require('cors')
const path = require('path');
var app=express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var port=8088;
app.use(express.static(__dirname));
app.use(cors())

console.log(`server starting in port: ${port}`);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './dict.html'));    
});
app.get("/FindWord", (req, res) => {
    queryWord(req,res);
 });

app.listen(port, ()=>{
console.log('Listenning the port on:'+port)

});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/***
 * word.js
 * connection to database
 */

 const queryWord =function(req,res){

    let result = req.query.term;
    const mysql=require('mysql');

    // Connection to DB Connected!
    const con=mysql.createConnection({
        host:"127.0.0.1",
        //port:3306,
       user:"root",
       password:"root",
        database:"entries",
        // insecureAuth: true,
        // dialect: 'mysql',   
        // multipleStatements: true,
    
    });
    con.connect();
    //var sql = `SELECT word, definition FROM entries.entries where word '${word}'`;

    // var sql ="SELECT * FROM entries.entries where word = '" + result +"'";
    con.query("SELECT * FROM entries.entries where word = '" + result +"'",
        function(err,data,fields){
        if(err){ console.log(err);
        }else{
            console.log(`Database Connected`)  
        //res.json(data);
        res.json(Object.values(JSON.parse(JSON.stringify(data))));
    }
       
        }   
    );
    con.end(req,res);
}


//  var word= req.query.word;
    //  // fetch the data and put it to res to send it back to client requesting it
    // var query= require('./word');
    // query.queryWord(word, res);
 