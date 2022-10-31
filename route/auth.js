const express= require('express')
const route = express.Router()
const {signupController,LoginController} =require('../controller/auth')
const aboutController=require('../controller/about')
const {verifyToken} =require('../middleware/verifyMiddleware')
console.log("Route...")
route.post('/signup',signupController)
route.post('/login',LoginController)
route.get('/about',verifyToken,aboutController)

module.exports=route