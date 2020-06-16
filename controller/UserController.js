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
    const emailId = req.body.EmailId;
    const password = req.body.password;  

    user.find({EmailId: emailId,password: password})
        .then(           
            data=>{
                if(data.length == 0){
                    res.status(404).send({
                       Errormessage :`invalid credential` 
                    })
                }else{
                    res.status(200).json(data)
                }                
            }
        )
        .catch(err =>{
            res.status(500).send({
                ServerErrorMessage : `Oops there is some problem with dat`
            })
        })
   
}

//change password
exports.ChangePassword = (req,res)=>{
    const emailId = req.body.EmailId;
    const password = req.body.password; 
    const NewPassword = req.body.NewPassword;

    user.findOne({EmailId: emailId,password: password})
        .then(           
            data=>{
                console.log(data)
                if(!data){
                    res.status(404).send({
                       Errormessage :`invalid credential` 
                    })
                }else{
                    data.password = NewPassword;
                    data.save()
                    res.status(200).send({
                        SuccessMessage :`You have changed you passowrd`
                    })
                    
                }                
            }
        )
        .catch(err =>{
            res.status(500).send({
                ServerErrorMessage : `Oops there is some problem with dat`
            })
        })
}

exports.EditProfile = (req,res)=>{
    
}