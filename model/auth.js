const {makeDb} = require("../db")
console.log("model.")
async function signupModel(email,password,name){
  const db=makeDb()
    console.log("signup model")
    try{
        let signupM=await db.query("INSERT INTO signup(email,password,name)values(?,?,?)",[email,password,name])
        return true

    }catch(err){
        console.log("Error:-",err)
    }finally {
        await db.close();
      }
}

async function LoginModel(email,password){
  const db=makeDb()
    console.log("signup model")
    try{
        let loginModel=await db.query("SELECT * FROM signup WHERE email=? AND password=?",[email,password])
        return loginModel

    }catch(err){
        return false
    }finally {
        await db.close();
      }
}
module.exports={  signupModel,LoginModel}


// const makeDb = require('../db');
// const {host,user,password,database,port}=require('../config')
// console.log('model.');
// console.log("host",config.host)
// console.log("user", config.user)
// console.log("password:",config.password)
// console.log("database:",config.database)
// console.log("port:",port)

// async function signupModel(email, password, name) {
//   console.log('.......signup model......',email,password,name);
//   const db= await  makeDb()
//   try {
//     // await db.query()
//     let signupM = await db.query(
//       'INSERT INTO signup(email,password,name)values(?,?,?)',
//       [email, password, name]
//     );
//     // await db.close()
//     console.log('--------model.----------',signupM);
//     return true
//   } catch (err) {
//     return false
//   }
//   // finally {
//   //   await db.close();
//   // }
// }
// signupModel('1qw', 'dgdg', 'hjhjh')

// module.exports = signupModel;
