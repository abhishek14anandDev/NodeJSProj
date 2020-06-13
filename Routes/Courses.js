const express = require('express')

const CourseController = require('../controller/CourseController');
const CourseValidator = require('../controller/CourseValidator');

const router = express.Router();

//UI Routes
router.get('/listCourses',CourseController.listCourses)
router.get('/createCourse',CourseController.createCourse)
router.get('/updateCourse/:id',(req,res)=> res.send('update Courses Works'))

//process Routes
router.post('/createCourse',CourseValidator.createCourseValidator,CourseController.createCourseProcess)
router.get('/updateCourse/:id',(req,res)=> res.send('update Courses Works'))


module.exports = router;