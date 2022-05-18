

//  exports.queryWord =function(word,res){

//     let result = req.query.term.trim();
//     const msql=require('mysql');

//     // Connection to DB Connected!")
//     const con=msql.createConnection({
//         host:"localhost",
//         port:3306,
//         user:"root",
//         password:"rootsq",
//         database:"entries",
    
//     });
//     con.connect();
//     //var sql = `SELECT word, definition FROM entries.entries where word '${word}'`;

//     var sql ="SELECT * FROM entries.entries where word = '" + sentence +"'";
//     con.query(sql,function(err,data,fields){
//         if(err){ throw err;
//         }else{
//             console.log(`Database Connected`)  
//         //res.json(data);
//         res.json(Object.values(JSON.parse(JSON.stringify(data))));
//     }
       
//         }   
//     );
//     con.end(req,res);
// }

// con.connect(function (err){
//     if(err){ 
//         throw err;
//     console.log("Error in the connection")

   
     //var sql = `SELECT wordtype, definition FROM entries.entries where word= '${word}'`;

 //}
