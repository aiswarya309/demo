const express= require('express')
const route = express.Router()
const {signupController,LoginController} =require('../controller/auth')
// const LoginController =require('../controller/login')
console.log("Route...")
route.post('/signup',signupController)
route.post('/login',LoginController)

module.exports=route