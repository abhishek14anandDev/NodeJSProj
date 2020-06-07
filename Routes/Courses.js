const express = require('express')

const CourseController = require('../controller/CourseController');

const router = express.Router();

//UI Routes
router.get('/listCourses',CourseController.listCourses)
router.get('/createCourse',(req,res)=> res.send('create Courses Works'))
router.get('/updateCourse/:id',(req,res)=> res.send('update Courses Works'))

//process Routes
router.post('/listOfCourses',(req,res)=> res.send('List Courses Works'))
router.post('/createCourse',(req,res)=> res.send('create Courses Works'))
router.get('/updateCourse/:id',(req,res)=> res.send('update Courses Works'))


module.exports = router;