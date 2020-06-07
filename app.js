const express = require('express')

const mongoose = require('mongoose')


const courseRouter = require('./Routes/Courses')
const userRouter = require('./Routes/Users')



//Connect the mongoose
mongoose.connect(
    'mongodb+srv://devuser:abcd1234@cluster0-mlro7.mongodb.net/TaskManager?retryWrites=true&w=majority',
    {
        useNewUrlParser:true, //new technique of parsing the database url
        useUnifiedTopology:true
    },
    ()=> console.log('DB Connected')
)

const app = express()

app.set('view engine', 'ejs')
app.use('/courses', courseRouter);
app.use('/',userRouter)



module.exports = app;