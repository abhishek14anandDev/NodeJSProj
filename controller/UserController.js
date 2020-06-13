const user = require('../model/user')

//Register the user
exports.RegisterUser = (req,res) =>{
    console.log(req.body)

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
       
        return res.status(400).send({
            Errormessage: "Please send data"
        })
    }

    const userObj = new user({
        fullName : req.body.fullName,
        TypeOfuser : req.body.TypeOfuser,
        EmailId : req.body.EmailId,
        password : req.body.password
    })
    

    userObj.save(userObj)
        .then(data=>{
            res.status(200).send({
                SuccessMessage : `User registered Successfully`
            })
        })
        .catch(err=>{
           res.status(500).send({
            serverMessage : err
           })
        })
}

//Login user
exports.Login = (req,res)=>{
    const emailId = 
    user.finnd
    res.send(`I am in login`)
}

//change password
exports.ChangePassword = (req,res)=>{
    res.send(`I am in change password`)
}

exports.EditProfile = (req,res)=>{
    res.send(`I am in Edit Profile`)
}