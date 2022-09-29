const db = require("../db")
console.log("model.")
async function signupModel(email,password,name){
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
module.exports=signupModel