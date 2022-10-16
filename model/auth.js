const {makeDb} = require("../db")
console.log("model.")
async function signupModel(email,password,name){
console.log("model IN")
  const db=makeDb()
    console.log("signup model values ##",email,password,name)
    try{
        // let signup_exist=await db.query("SELECT * FROM signup WHERE email=?",[email])
        // console.log("signup_exist",signup_exist.length);
        // if(signup_exist.length < 1){
          // console.log("value not exist in the signup");
          let signupM=await db.query("INSERT INTO signup(email,password,name)values(?,?,?)",[email,password,name])
          console.log("signup unique",signupM)
          return signupM
        // }
        // else{
        //   console.log("value All ready exist in the signup");
        //   return false
        // }
    }catch(err){
        return false
    }finally {
        await db.close();
      }
}

async function signupExist(email){
  console.log("signupExist IN email:-",email)
  const db=makeDb()
  try{
    let signup_exist=await db.query("SELECT * FROM signup WHERE email=?",[email])
    console.log("exist same value- model")
    return signup_exist
  }
  catch(err){
    console.log("not same value- model")
    return false
  }finally {
    await db.close();
  }
}

async function LoginModel(email,password){
  const db=makeDb()
    console.log("Login model")
    try{
        let loginModel=await db.query("SELECT * FROM signup WHERE email=? AND password=?",[email,password])
        return loginModel
    }catch(err){
        return false
    }finally {
        await db.close();
      }
}
module.exports={  signupModel,LoginModel,signupExist}


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
