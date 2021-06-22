const Express = require('express')
const mysql = require('mysql')
const app = Express()
const connectionString = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hr'
}
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const connection_obj = mysql.createConnection(connectionString)
app.get('/', function (req, res) {
    res.send("Got it ")
})
app.get('/chaos', function (req, res) {
    res.send("chaos is coming")
})
app.get('/getEmployees', function (req, res) {
    const sql = `SELECT * FROM employees `;
    connection_obj.query(sql, function (err, rows, fields) {
        if (err)
            res.send('error')
        else
            res.send(rows)
    })
})

app.get('/getEmployees/:id', function (req, res) 
{
    const emp_id = req.params.id;
    const sql = `SELECT * FROM employees where employee_id=${emp_id}`;
    connection_obj.query(sql, function (err, rows, fields) {
        if (err)
            res.send('error')
        else
            res.send(rows)
    })
})
app.post('/addJob',function(req,res){
    const {job_id,job_title} = req.body;
    const sql = `INSERT INTO JOBS (job_id, job_title) VALUES('${job_id}', '${job_title}')`
    connection_obj.query(sql,function(err,rows,fields){
        if(err)
        res.send("error")
        else
        res.send(rows)
    })
})
app.get('/getAllJobs',function(req,res){
    const sql = 'select * from jobs';
    connection_obj.query(sql,function(err,rows,fields){
        if(!err)
        res.send(rows)
    })
})
app.delete('/delete/:id',function(req,res){
    const emp_id = req.params.id;
    const sql = `delete FROM employees where employee_id=${emp_id}`;
    connection_obj.query(sql, function (err, rows, fields) {
        if (err)
            res.send(err)
        else
            res.send(rows)
    })
})

app.listen(4005, function () {
    console.log("on port 4005");
})
