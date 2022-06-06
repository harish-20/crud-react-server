const express = require('express')
const router = express.Router()
const { getall, addnew, delOne, editOne } = require('../controller/controller.js')

//read all student
router.get('/allstudent', getall)

//create a new student
router.post('/newstudent', addnew)

//delete a student
router.delete('/delstudent/:id', delOne)

//update a student
router.patch('/editstudent/:id', editOne)

module.exports = router
