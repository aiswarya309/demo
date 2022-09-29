const express= require('express')
const route = express.Router()
const signupController =require('../controller/auth')
console.log("Route")
route.post('/signup',signupController.signupController)
module.exports=route