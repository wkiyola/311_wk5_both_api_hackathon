const mysql = require("mysql");
const pool = require("../mysql/connections");
const { handleSQLError } = require("../mysql/error");


const getEmployees = (req, res) => {
  pool.query("SELECT * FROM employees", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEmployeesById = (req, res) => {
  let sql = `SELECT ??, ??, ?? FROM ?? WHERE ?? = ${req.params.id}`;
  sql = mysql.format(sql, ["emp_no", "first_name", "last_name", "employees.employees", "emp_no"]);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEmployeesByFirstName = (req, res) => {
  let sql = `SELECT ??, ??, ?? FROM ?? WHERE ?? = ${req.params.first_name}`;
  sql = mysql.format(sql, ["emp_no", "first_name", "last_name", "employees.employees", "first_name"]);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getEmployees,
  getEmployeesById,
  getEmployeesByFirstName
}