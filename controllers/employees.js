// const employees = require("../data/users");
// const sampleUser = require("../data/sampleUser");


const getEmployees = (req, res) => {
  res.json(employees);
};

const getEmployeesById = (req, res) => {
  const employee = employees.find(function(item) {
    return item.emp_no == req.params.id;
  });
  if (employee) {
    res.json(employee)
  } else {
    res.status(404).json({ msg: `No employee data found.` });
  }
};

module.exports = {
  getEmployees,
  getEmployeesById
}