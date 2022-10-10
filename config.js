const dotenv=require('dotenv')
const path=require('path')
dotenv.config({path:path.resolve(`./.env.${process.env.NODE_ENV}`)})
module.exports={
    node_env:process.env.NODE_ENV ,
    user:process.env.USER ,
    host:process.env.HOST ,
    password:process.env.PASSWORD ,
    database:process.env.DATABASE ,
    port:process.env.PORT
}
// const path=require('path')
// const dotenv = require('dotenv').config({path:path.resolve(__dirname,`.env.${process.env.NODE_ENV}`)});
// // dotenv.config({path:path.resolve(__dirname,`.env.${process.env.NODE_ENV}`)});
// console.log("dirname",__dirname)
// module.exports={
//     node_env:process.env.NODE_ENV,
//     configname:process.env.CONFIG_NAME || 'development',
//     db_user: process.env.USER || 'user',
//     db_host:process.env.HOST || 'localhost',
//     db_password:process.env.PASSWORD || 'password',
//     db_database:process.env.DATABASE || 'company_webpage',
//     port:process.env.PORT || 5000
// }


// // // console aavunnundalloo?
// // // console aayal work cheyumo?
// // // config engane aa work cheyunnath?
