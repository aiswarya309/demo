const express= require('express')
const app =express()
//controller
const clientCon=require('./controller/client')

app.get('/',clientCon.client)
app.listen(5000,function(){
    console.log("connecting")
})