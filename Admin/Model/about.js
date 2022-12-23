const {makeDb} = require('../../db')
// const db=makeDb()

async function aboutModel(){
    console.log("about model")
    const db=makeDb()
    try{
        const aboutModel_result= await db.query("select * from homeabout ")
        return aboutModel_result
    }
    catch{
        return false
    }
    finally {
        await db.close();
      }
}
async function aboutPostModel(title,content){
    // console.log("title,content",title,content);
    const db=makeDb()
    try{
        // console.log("try##")
        const aboutModel_result= await db.query("insert into homeabout (title,content) value(?,?)",[title,content])
        return true
    }
    catch{
        return false
    }
    finally {
        await db.close();
      }
}
async function aboutDeleteModel(id){
    console.log("id",id);
    const db=makeDb()
    try{
        console.log("try##")
        const aboutModel_result= await db.query("DELETE FROM homeabout WHERE id=?",[id])
        return true
    }
    catch{
        return false
    }
    finally {
        await db.close();
      }
}
async function aboutUpdateModel(id,title,content){
    console.log("id,title,content",id,title,content);
    const db=makeDb()
    try{
        console.log("try##")
        const aboutModel_result= await db.query("UPDATE homeabout SET title=? ,content=? where id=?",[title,content,id])
        return true
    }
    catch{
        return false
    }
    finally {
        await db.close();
      }
}

module.exports={aboutModel,aboutPostModel,aboutDeleteModel,aboutUpdateModel}