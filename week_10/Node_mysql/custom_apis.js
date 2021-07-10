var mysql = require('mysql');
const bodyParser = require('body-parser')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "new_db"
  
  });

const express = require('express');
const app = express();
app.use(bodyParser.json())
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    if(con.connect)
    {
        con.query("select * from std",(err,row,fields)=>
        {
            res.json(row)
        })
    }
})

app.get('/:id', (req, res) => {
     const {id} = (req.params);
    if(con.connect)
    {
        con.query(`select * from std where id = ${id}`,(err,row,fields)=>
        {
            res.json(row)
        })
    }
})
app.post('/add', (req, res) => {
    const {name} = (req.body);
    // console.log(body);
   if(con.connect)
   {
       con.query("INSERT INTO `std`(`name`) VALUES (' " +name+"') " ,(err,row,fields)=>
       {
           if(err)
           {
               throw err;
           }
           res.send(row)
       })
   }
})


app.listen(3000, () => {
    console.log("started the server");
}
)