const listCourse = require('../model/Course')


exports.createCourse = (req,res)=>{
    const data = {
        title:'LMS| Add Course',
    }
 
    res.render('createCourse', data)
 }


exports.listCourses = (req, res) => {
    listCourse.find()
        .then(courses => {
            const data = {
                title: 'LMS | List of Courses',
                courses
            }
            console.log(data);
            res.render('listCourses', data)
        })
        .catch(err => {
            res.json(err)
        })
}

exports.createCourseProcess = (req,res)=>{
    console.log(req.body);

    const {name,description,photo, duration} = req.body;

    const course = new listCourse();
    course.name = name;
    course.description = description;
    course.photo = photo;
    course.duration = Number(duration);

    course.save()
    .then(()=>res.redirect('/courses/listCourses'))
    .catch(console.log("error"))
    // res.send('create course works' )
}

