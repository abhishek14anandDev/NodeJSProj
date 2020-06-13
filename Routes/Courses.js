const express = require('express')

const CourseController = require('../controller/CourseController');
const CourseValidator = require('../controller/CourseValidator');

const router = express.Router();

//UI Routes
router.get('/listCourses',CourseController.listCourses)
router.get('/createCourse',CourseController.createCourse)
//router.get('/updateCourse/:id',(req,res)=> res.send('update Courses Works'))

//process Routes CourseValidator.createCourseValidator
router.post('/createCourse',CourseController.createCourseProcess)
router.put('/updateCourse/:id',CourseController.UpdateCourseById)
router.delete('/deleteCourse/:id',CourseController.DeleteCourseById)
router.get('/viewCourse/:id',CourseController.ViewCourseById)



module.exports = router;