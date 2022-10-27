const mysql = require("mysql") ;

const info = {
    host : "localhost",
    user : "root",
    password : "root",
    database : "eagle"
}

const conn = mysql.createConnection(info) ;

conn.connect(err=>{
    if(err) console.log("Connection failed") ;
    else console.log("Connected...") ;
}) ;