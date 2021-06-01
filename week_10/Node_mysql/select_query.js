var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_mysql"
  
  });
  
/*
 code to delete a record
con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
*/

/*
Code to upadate the record
con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
*/


con.connect(function(err) {
  if (err) throw err;
  
    // with where query   
    // con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
 


  //select the specific row that reuturns the object
  //console.log(result[2].address);
    //can be used to display results
 con.query("SELECT name FROM customers", function (err, result, fields) {

//   con.query("SELECT * FROM customers", function (err, result, fields) {
  // all will result in the RowDataPackets   
  if (err) throw err;
  {
      console.log("one result :");
    console.log(result[1]);
    console.log("\n");
    console.log("all results :");
    console.log(result);
    console.log("\n");
    console.log("All fields ");
    console.log(fields);
    console.log("\n");
    console.log("field n");
    console.log(fields[0]);
    console.log("\n");

  }
  });
});