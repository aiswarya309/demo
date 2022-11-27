const express= require('express')
const app =express()
const path=require('path')
const  auth  = require('./route/auth')
app.use(express.json())
const config=require('./config')
console.log("App.js")
// console.log("__dirname:-",__dirname)

app.use((req, res, next) => {
    res.setHeader("X-Frame-Options", "ALLOWALL");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,authorization,params");
    next();
 }) 
//controller CLIENT
// const clientCon=require('./controller/client')
// app.get('/',clientCon.client)
// app.push('/')
// console.log("node_env:=",config.node_env)
// console.log("host:=",config.host)
// console.log("user:=",config.user)
// console.log("database:=",config.database)
app.use('/slider',express.static(path.join(__dirname,'uploads')))
// console.log("__dirname:-",__dirname)

app.use('/auth', auth)
app.listen(5000,function(){
    // console.log("connecting to server")
})
