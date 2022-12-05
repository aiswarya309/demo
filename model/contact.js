const {makeDb} = require("../db")
console.log("model. contact")
async function contactUs(name,phn,place,email){
  console.log("name,phn,place,email",name,phn,place,email)
  const db=makeDb()
    try{
          let contact=await db.query("INSERT INTO contact_us(first_name,email,phn,place)values(?,?,?,?)",[name,email,phn,place])
          console.log("contact ",contact)
          return true
    }catch(err){
        return false
    }finally {
        await db.close();
      }
}
module.exports=contactUs