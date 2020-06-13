exports.createCourseValidator = (req,res,nxt)=>{
    console.log('Inside Create Course Validator')

    const {name, description, photo,duration} = req.body;

    let errors = {}

    if(name === '') errors.name = 'Name cannnot be blank';

    if(Object.jeys(errors).length === 0)
        nxt()
    else
        res.redirect('/courses/createCourse');
}