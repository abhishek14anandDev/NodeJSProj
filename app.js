const express = require('express')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const courseRouter = require('./Routes/Courses')
const userRouter = require('./Routes/Users')



//Connect the mongoose
mongoose.connect(
    'mongodb+srv://devuser:abcd1234@cluster0-mlro7.mongodb.net/LMS?retryWrites=true&w=majority',
    {
        useNewUrlParser:true, //new technique of parsing the database url
        useUnifiedTopology:true
    },
    ()=> console.log('DB Connected')
)

const app = express()



app.set('view engine', 'ejs')
//app.set('view', 'ejs')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use('/courses', courseRouter);
app.use('/',userRouter)



module.exports = app;