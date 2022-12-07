const {makeDb} = require("../db")
console.log("model. contact")

async function ContactUs(name,phn,place,email,resume){
  console.log("name,phn,place,email",name,phn,place,email,resume)
  const db=makeDb()
    try{
          let contact=await db.query("INSERT INTO contact_us(first_name,email,phn,place,Resume)values(?,?,?,?,?)",[name,email,phn,place,resume])
          console.log("contact ",contact)
          return true
    }catch(err){
        return false
    }finally {
        await db.close();
      }
}
module.exports =ContactUs