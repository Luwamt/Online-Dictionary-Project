/***
 * word.js
 * connection to database
 */
 exports.queryWord =function(word,res){

var msql=require('mysql2');
//console.log("DB Connected!")
var con=msql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:"root",
    password:"rootsq",
    database:"entries",
   // options:{trustServerCertificate: true}
});
//var sql = `SELECT word, definition FROM entries.entries where word= '${word}'`;

var sql = `SELECT * FROM entries`;
// where word = '" +  req.query.term.trim() + "'`;
//var sql =`SELECT * FROM entries.entries where word = '" + req.body.term.trim()+"'`;

con.query(sql,function(err,data,fields){
    if(err){ console.log(err);
    }else{
        console.log(`Database Connected`)
        //res.send(data[1])
    res.json(data);
    console.log("data: ",data)
    }   
});
// con.connect(function (err){
//     if(err){ 
//         throw err;
//     console.log("Error in the connection")

   
     //var sql = `SELECT wordtype, definition FROM entries.entries where word= '${word}'`;

 }
