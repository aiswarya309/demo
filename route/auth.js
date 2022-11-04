const express= require('express')
const route = express.Router()
const {signupController,LoginController} =require('../controller/auth')
const aboutController=require('../controller/about')
const {verifyToken} =require('../middleware/verifyMiddleware')
const sliderController=require('../controller/slider')

console.log("Route...")
route.post('/signup',signupController)
route.post('/login',LoginController)
route.get('/about',verifyToken,aboutController)
route.get('/slider',verifyToken,sliderController)


module.exports=route