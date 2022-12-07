const express= require('express')
// const multer = require('multer')
const route = express.Router()
const {aboutController,aboutPostController,aboutUpdateController,aboutDeleteController} = require('../Admin/controller/about')
const {UploadController,imageGetController,imageDeleteController,ImageUpdateController} = require('../Admin/controller/imageUpload')
const upload=require('../middleware/adminMiddle')
const multer = require("multer");
const {ContactGetController}=require('../Admin/controller/contact')
// const upload = multer({ dest: "./uploads" });
route.get('/about',aboutController)
route.post('/aboutPost',aboutPostController)
route.post('/aboutUpdate',aboutUpdateController)
route.post('/aboutDelete',aboutDeleteController)
route.post('/image',upload.single('img'),UploadController)
route.patch('/imageUpdate',upload.single('img'),ImageUpdateController)
route.get('/imageGet',imageGetController)
route.delete('/imageDelete',imageDeleteController)
route.get('/contact',upload.single('resume'),ContactGetController)
route.delete('/contactDelete',imageDeleteController)

console.log("admin route")
module.exports=route