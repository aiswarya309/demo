const {makeDb}=require('../db')
const db=makeDb()
async function feedbackPostModel(id,name,empName,feedback){
    console.log("data F_model:-",id,name,empName,feedback)
    const db=makeDb()
    try{
        const result= await db.query("INSERT INTO feedback (emp_id,feedback,name,empName) value(?,?,?,?)",[id,name,empName,feedback])
        return true
    }
    catch{
        return false
    }
}

async function feedbackGetModel(){
try{
    const getResult= await db.query("SELECT * FROM feedback")
    return getResult
}catch{
    return false
}
}
module.exports={feedbackPostModel,feedbackGetModel}