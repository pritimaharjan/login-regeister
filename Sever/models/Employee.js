const mongoose = require('mongoose')
 const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: string
 })
 const EmployeeModel = mongoose.model("employees" , EmployeeSchema)
 module.exports = EmployeeModel