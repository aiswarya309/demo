const {makeDb}=require('../db')
const db=makeDb()
async function replyPostModel(id,reply,f_id){
    // console.log("data F_model:-",id,reply)
    const db=makeDb()
    try{
        const result= await db.query("insert into reply(emp_id,reply,f_id) value(?,?,?)",[id,reply,f_id])
        return true
    }
    catch{
        return false
    }
}

async function replyViewModel(f_id,f_empId){
    // console.log("**********replyViewModel");
    const db=makeDb()
try{
    
    const getView= await db.query("select reply from reply where f_id=? && emp_id=? order by id desc LIMIT 5",[f_id,f_empId])
    // console.log("getView reply:-",getView);
    return getView
}catch{
    // console.log("getView reply ERROR :-");
    // f_empId
    return false
}
}
async function replyGetModel(){
    const db=makeDb()
try{
    const getReply= await db.query("select * from reply ")
    return getReply
}catch{
    return false
}
}
module.exports={replyPostModel,replyViewModel,replyGetModel}