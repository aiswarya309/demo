const {makeDb} = require('../../db')
async function UploadModel(image){
    // console.log("UploadModel", image);
    const db=makeDb()
    try{
        const slidelModel=await db.query("insert into slider (image) values (?)",[image])
        return true
    }catch{
        return false
    }
}
async function imageModel(){
    const db=makeDb()
    try{
        const slidelModel=await db.query("SELECT * FROM slider")
        return slidelModel
    }catch{
        return false
    }
}
async function imageDeleteModel(id){
    const db=makeDb()
    try{
        const imgDel=await db.query("DELETE FROM slider WHERE id=?",[id])
        return true
    }catch{
        return false
    }
}
async function imageUpdateModel(file,id){
    console.log("file,id",file,id)
    const db=makeDb()
    try{
        const imgDel=await db.query("UPDATE slider SET image=? WHERE id=?",[file,id])
        return imgDel
    }catch{
        return false
    }
}
module.exports={UploadModel,imageModel,imageDeleteModel,imageUpdateModel}