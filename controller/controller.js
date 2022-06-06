const studentModel = require('../models/student.js')
const getall = (req, res) => {
  studentModel.find((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.json(data)
    }
  })
  res.end
}
const addnew = (req, res) => {
  const data = req.body
  studentModel.insertMany(data, (err, data) => {
    if (err) console.log(err)
    else {
      console.log('inserted...', data)
    }
  })
  res.json('inserted...')
  res.end()
}
const delOne = (req, res) => {
  studentModel.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('removed...')
    }
    res.json('removed...')
    res.end()
  })
}
const editOne = (req, res) => {
  const data = req.body
  studentModel.findByIdAndUpdate(req.params.id, data, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('edited...')
    }
    res.json('edited...')
    res.end()
  })
}
module.exports = { getall, addnew, delOne, editOne }
