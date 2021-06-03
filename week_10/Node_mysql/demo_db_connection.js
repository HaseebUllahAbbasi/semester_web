var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_mysql"

});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");


        
    // inserting the customer in the customer table 
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";

      con.query(sql, function (err, result) {
    
        // creating the table but database should be defined 
    //  con.query("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))", function (err, result) {
    
    
    // creating database , but do not but the put the name of the database in the creaconnection method  
    // con.query("CREATE DATABASE node_mysql", function (err, result) {
        
        if (err) throw err;
      console.log("Database, Table  created");
    });
  });