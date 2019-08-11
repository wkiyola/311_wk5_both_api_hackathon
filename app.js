const express = require('express');
const express = require("express");
const mysql = require("mysql");
//create connection
const db = mysql.createConnection({
host: "35.225.62.28",
user: "root",
password: "wekyek12T",
database: "employees"
});
//connect to database
db.connect(err => {
if (err) {
throw err;
}
console.log("mysql connected");
});


const app = express();

//get req to 'home page'

app.get('/', (req, res) => {
res.send('Welcome to RED TEAM API PROJECT!')

})
//EMPLOYEES
app.get('/employees', (req, res) => {
let sql = 'SELECT * FROM employees'
db.query(sql, (err, results) => {
if(err) throw err;
res.send(results)
})
})
//select employee by Employee No_

app.get('/employees/:id', (req, res) => {
let sql = SELECT * FROM employees WHERE emp_no = ${req.params.id};
db.query(sql, (err, result) => {
if(err) throw err;
res.send(result)
})
})
//Select employee by First Name ITS NOT WORKING 😕
// app.get('/employees/:first_name', (req, res) => {
// let sql = SELECT * FROM employees WHERE first_name = ${req.params.first_name};
// db.query(sql, (err, result) => {
// if(err) throw err;
// res.send(result)
// })
// })

//SALARIES

//Select all salaries
app.get('/salaries', (req, res) => {
let sql = SELECT * FROM salaries;
db.query(sql, (err, result) => {
if(err) throw err;
res.send(result)
})
})
//Select salaries by employee ID
app.get('/salaries/:id', (req, res) => {
let sql = SELECT * FROM salaries WHERE emp_no = ${req.params.id};
db.query(sql, (err, result) => {
if(err) throw err;
res.send(result)
})
})

//Select salaries by amount less than xxxxxx
app.get('/salaries/lessthan/:amount', (req, res) => {
let sql = `select * from salaries WHERE salary < ${req.params.amount}; 
`;
db.query(sql, (err, result) => {
if(err) throw err;
res.send(result)
})
})

//DEPARTMENTS

//SELECT ALL DEPARTMENTS
app.get('/departments', (req, res) => {
let sql = SELECT * FROM departments;
db.query(sql, (err, result) => {
if(err) throw err;
res.send(result)
})
})

//SELECT DEPARTMENTS BY DEPT ID
app.get('/departments/:id', (req, res) => {
let sql = SELECT * FROM departments WHERE dept_no = ${req.params.id};
db.query(sql, (err, result) => {

if(err) throw err;
res.send(result)
})
})




app.listen("4000", () => {
console.log("Listening on 4000");
});