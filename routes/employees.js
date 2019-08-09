const express = require('express')
const router = express.Router()
const employeesController = require('../controller/employees')

router.get('/', employeesController.getEmployees)
router.get('/:id', employeesController.getEmployeesById)
router.get('/firstname/:first_name', employeesController.getEmployeesByFirstName)

module.exports = employees;