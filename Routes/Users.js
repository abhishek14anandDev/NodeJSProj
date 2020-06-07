const express = require('express')

const router = express.Router();

//UI Routes
router.get('/login',(req,res)=> res.send('Login Works'))
router.get('/editProfile',(req,res)=> res.send('register Works'))
router.get('/dashboard',(req,res)=> res.send('dashboard Works'))

//process Routes
router.post('/login',(req,res)=> res.send('login Works'))
router.post('/register',(req,res)=> res.send('register Works'))
router.get('/changepasssword',(req,res)=> res.send('changepasssword Works'))
router.get('/editProfile',(req,res)=> res.send('editProfile Works'))


module.exports = router;