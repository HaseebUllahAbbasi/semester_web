// const fileS = require('fs')

// fileS.readFile('document.txt', function (err, data) {
//     console.log(data.toString())
// })

const http = require('http')
// const mysql = require('mysql')
const url = require('url')
// const conString = {
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'hr'
// }
// const con = mysql.createConnection(conString)

// const server = http.createServer(function (req, res) {
//     let parsedUrl = url.parse(req.url, true)

//     if (req.url == '/getAllCustomers' && req.method == 'GET') {
//         console.log('entered')
//         con.query('SELECT * from employees LIMIT 10', function (err, rows, fields) {
//             if (err) throw err;
//             res.writeHead(200, { "Content-type": 'text/json' })
//             res.write(JSON.stringify(rows))
//             res.end()
//         })
//         return;

//     }
//     console.log(parsedUrl)

//     if (parsedUrl.pathname == '/getCustomerById/' && req.method == 'GET') {
//         id = parsedUrl.query.cmsid;
//         con.query('SELECT * from employees WHERE employee_id=' + id, function (err, rows, fields) {
//             if (err) throw err;
//             res.writeHead(200, { "Content-type": 'text/json' })
//             res.write(JSON.stringify(rows))
//             res.end()
//         })
//         return;
//         res.writeHead(200, { "Content-type": 'text/json' })
//         res.write(JSON.stringify({ abc: 'sss' }))
//         res.end()
//     }
//     res.writeHead(404, { "Content-type": 'text/json' })
//     res.write('Invalid url')
//     res.end()

// })

// server.listen(
//     3000, function () {
//         console.log('server is listening to 3000 port')
//     }
// )

const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const conString = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hr'
}
const con_string = {
    host: 'localhost',
    user: 'root',
    password: '',
}
const con_2 = mysql.createConnection(con_string)
const con = mysql.createConnection(conString)

const app = express()
app.get('/createDB/:dbName', function (req,res) {
        
    const db_name = req.params.dbName;
    con_2.query(`CREATE DATABASE ${db_name}`, function (err, result) {
        
            if (err) throw err;
            console.log(`Database ${db_name}, Table  created`);
            res.send(`Database ${db_name}, Table  created`)
          });
})

app.use(bodyParser.json())

app.get('/getEmployess', function (req, res) {
    con.query('SELECT * FROM employees LIMIT 10', function (err, rows, fields) {
        if (err) throw err;
        res.send(rows)
    })

})

app.get('/getEmployess/:empId', function (req, res) {
    const id = req.params.empId
    con.query('SELECT * FROM employees WHERE employee_id=' + id, function (err, rows, fields) {
        if (err) throw err;
        res.json(rows)
    })

})

app.post('/addJob', function (req, res) {
    const { jobId, jobTitle } = req.body;

    const sql = `INSERT INTO JOBS (job_id, job_title) VALUES('${jobId}', '${jobTitle}')`
    con.query(sql, function (err, rows, fields) {
        if (!err)
            res.send('DONE')
        else
            throw err;
    })
})
app.get('/ShowJobs',function (req, res){
    con.query('SELECT * FROM JOBS ', function (err, rows, fields) {

        if (err) throw err;
        // res.send(fields);
        res.send(rows)
    })
})
app.put('/updateJob', function (req, res) {
    const { jobId, jobTitle } = req.body;
    var sql = `UPDATE customers SET job_title = '${jobTitle}' WHERE job_id = ${jobId}`;

    con.query(sql, function (err, rows, fields) {
        if (!err)
            res.send('DONE')
        else
            throw res.send('not done');
        
        })
        // res.send(req.body)
})


app.listen(3099, function () {
    console.log('server is listening port 3099')
})

