const express= require('express')
const cors = require('cors')
const app =express()
const db=require('./db')
const  auth  = require('./route/auth')
// app.use(cors())
app.use((req, res, next) => {
    res.setHeader("X-Frame-Options", "ALLOWALL");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 }) 
app.use(express.json())
console.log("App.js")
//controller CLIENT
// const clientCon=require('./controller/client')
// app.get('/',clientCon.client)
// app.push('/')

app.use('/auth', auth)
app.listen(5000,function(){
    console.log("connecting to server")
})
