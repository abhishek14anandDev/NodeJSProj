const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullName: {type:String, required:true},
    EmailId:{type:String,required:true,unique:true},
    TypeOfuser:{type:String, required:true},
    password:{type:String,required:true},
    
})

const User = mongoose.model('User',UserSchema,'Users')


module.exports = User;