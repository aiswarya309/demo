const {makeDb} = require("../db")
async function sliderModel(){
    const db=makeDb()
    try{
        const slidelModel=await db.query("SELECT * FROM slider")
        return slidelModel
    }catch{
        return false
    }
}
module.exports=sliderModel