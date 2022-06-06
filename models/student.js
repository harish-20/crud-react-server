const mongoose = require('mongoose')

//creating a schema
const studentSchema = mongoose.Schema({
  name: {
    type: String,
  },
  rollno: {
    type: Number,
  },
  dob: {
    type: String,
  },
  bloodgroup: {
    type: String,
  },
  createtime: {
    type: Date,
    default: Date.now,
  },
})

//creating a model with schema
const studentModel = mongoose.model('student', studentSchema)

module.exports = studentModel
