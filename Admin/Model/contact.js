const {makeDb} = require('../../db')
async function ContactGetModel(){
    const db=makeDb()
    try{
        const contact= await db.query("SELECT * FROM contact_us")
        return contact
    }
    catch{
        return false
    }
    finally {
        await db.close();
      }
}

module.exports={ContactGetModel}