const {makeDb} = require("../db")
async function aboutModel(){
    const db=makeDb()
    try{
        const aboutModel_result= await db.query("select * from homeabout limit 1 ")
        return aboutModel_result
    }
    catch{
        return false
    }
    finally {
        await db.close();
      }
}

module.exports=aboutModel