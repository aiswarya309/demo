const {makeDb} = require('../../db')
function employeeGetModel(){
const db=makeDb()
try{
    const data=db.query("SELECT * FROM employee")
    return data
}catch{
    return false
}
}
async function empUpdateModel(name,email,jobTitle,country,pincode,id){
    console.log("model emp update ",name,email,jobTitle,country,pincode,id)
    const db=makeDb()
    try{
        const updateEmp=await db.query("UPDATE employee SET first_name=?, email=?,job_title=?,country=?,pincode=? where id=?",[name,email,jobTitle,country,pincode,id])
        return updateEmp
    }catch{
        return false
    }
}
async function empDeleteModel(id){
    const db=makeDb()
    try{
        const imgDel=await db.query("DELETE FROM slider WHERE id=?",[id])
        return true
    }catch{
        return false
    }
}
module.exports={
    employeeGetModel,empUpdateModel ,empDeleteModel
}

