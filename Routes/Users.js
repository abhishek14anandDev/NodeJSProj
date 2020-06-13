const express = require('express')
const userController  = require('../controller/UserController')
const router = express.Router();

//UI Routes
// router.get('/login',(req,res)=> res.send('Login Works'))
// router.get('/editProfile',(req,res)=> res.send('register Works'))
// router.get('/dashboard',(req,res)=> res.send('dashboard Works'))

//process Routes
router.post('/login',userController.Login)
router.post('/register',userController.RegisterUser)
router.post('/changePasssword',userController.ChangePassword)
router.post('/editProfile',userController.EditProfile)


module.exports = router;