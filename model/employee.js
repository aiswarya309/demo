const {makeDb} = require('../db')
async function employeeGetModel(){
const db=makeDb()
try{
    const data=await db.query("SELECT * FROM employee")
    return data
}catch{
    return false
}
}
async function empIdGetModel(id){
    console.log("MOdel id emp",id)
    const db=makeDb()
    try{
        const data= await db.query("SELECT * FROM employee where id=?",[id])
        return data
    }catch{
        return false
    }
    }
module.exports={employeeGetModel,empIdGetModel}