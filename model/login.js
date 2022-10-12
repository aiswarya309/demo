// const {makeDb} = require("../db")
// console.log("model.")
// async function LoginModel(email,password){
//   const db=makeDb()
//     console.log("signup model")
//     try{
//         let loginModel=await db.query("SELECT * FROM signup WHERE email=? AND password=?",[email,password])
//         return true

//     }catch(err){
//         console.log("Error:-",err)
//     }finally {
//         await db.close();
//       }
// }
// module.exports=LoginModel