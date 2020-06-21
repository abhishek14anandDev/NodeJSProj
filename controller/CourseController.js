const listCourse = require('../model/Course')


exports.createCourse = (req,res)=>{
    const data = {
        title:'LMS| Add Course',
    }
 
    res.render('createCourse', data)
 }

//List of course API
exports.listCourses = (req, res) => {
    listCourse.find()
        .then(courses => {
            const data = {
               // title: 'LMS | List of Courses',
                courses
            }
            //console.log(data);
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
}


//Create Course API
exports.createCourseProcess = (req,res)=>{
    console.log(req.body);

    const {name,description,photo, duration} = req.body;

    const course = new listCourse();
    course.name = name;
    course.description = description;
    course.photo = photo;
    course.duration = Number(duration);

    // course.save()
    // .then(()=>res.redirect('/courses/listCourses'))
    // .catch(console.log("error"))
    
    course.save()
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
    // res.send('create course works' )
}

//Update Course API
exports.UpdateCourseById = (req,res)=>{
    console.log(req.body)
    console.log( req.params.id)
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
       
        return res.status(400).send({
            Errormessage: "Please send the data to update"
        })
    }
    const id = req.params.id;
    listCourse.findByIdAndUpdate(id,req.body,{ useFindAndModify: false })
        .then(data=>{
            console.log(data);
            if(!data){
                res.status(404).send({
                   Errormessage :`data not found with the concern id` 
                })
            }else{
                res.send({
                    Successmessage : `Data Updated Successfully`
                })
            }
        })
        .catch(err=>{
            res.status(500).send({
                ServerErrorMessage: err
            })
        })
}

//View Course By Id
exports.ViewCourseById = (req,res) =>{
    const id  = req.params.id;
    console.log(id);

    listCourse.findById(id)
        .then(data=>{
            console.log(data)
            if(!data){
                res.status(404).send({
                    ErrorMessage : `Id is not available with us`
                })
            }else{
                res.status(200).json(data);
            }
        })
        .catch(err =>{
            res.status(500).send({
                ServerErrorMessage : err
            })
        })
}

//Delete Course By Id
exports.DeleteCourseById = (req,res)=>{
    const id = req.params.id;
    console.log(id);
    
    listCourse.findByIdAndRemove(id)
        .then(data=>{
            console.log(data)
            if(!data){
                res.status(404).send({
                    ErrorMessage : `Id is not available with us`
                })
            }else{
                res.status(200).send({
                    SuccessMessage:`Removed Data Successfully`
                })
            }
        })
    .catch(err =>{
        res.status(500).send({
            ServerErrorMessage : err
        })
    })
}

