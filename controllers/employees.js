const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");


const getEmployees = (req, res) => {
  pool.query("SELECT * FROM users", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEmployeesById = (req, res) => {
  let mysql = `SELECT ??, ??, ?? FROM ?? WHERE ?? = ${req.params.id}`;
  mysql = mysql.format(mysql, ["id", "first_name", "last_name", "users", "id"]);
  pool.query(mysql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEmployeesByFirstName = (req, res) => {
  let mysql = `SELECT ??, ??, ?? FROM ?? WHERE ?? = ${req.params.first_name}`;
  mysql = mysql.format(mysql, ["id", "first_name", "last_name", "users", "id"]);
  pool.query(mysql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getEmployees,
  getEmployeesById,
  getEmployeesByFirstName
}