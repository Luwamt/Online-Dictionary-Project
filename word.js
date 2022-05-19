
 /* word.js
* connection to database
*/

exports.queryWord =function(req,res){

   let result = req.query.term;
   //const mysql=require('mysql');
const   mysql = require('mysql');

   // Connection to DB Connected!
   const con=mysql.createConnection({
       host:"127.0.0.1",
       port:3306,
      user:"root1",
      password:"password",
       database:"entries",
   
   });
   con.connect();


    var sql ="SELECT * FROM entries.entries where word = '" + result +"'";
   con.query(sql,function(err,data,fields){
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


