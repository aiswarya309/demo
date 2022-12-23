const express= require('express')
const app =express()
const path=require('path')
const  auth  = require('./route/auth')
const admin=require('./route/admin')
const config=require('./config')
app.use(express.json())
console.log("App.js")
app.use((req, res, next) => {
    res.setHeader("X-Frame-Options", "ALLOWALL");
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,authorization,params");
    next();
 }) 
app.use('/slider',express.static(path.join(__dirname,'uploads')))
app.use('/auth', auth)
app.use('/admin',admin)
// const Storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//     //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, path.extname(file.originalname))
//     }
//   })
  
//   const upload = multer({ storage: Storage }).single('image')


app.listen(5000,function(){
    // console.log("connecting to server")
})
