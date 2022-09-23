const mysql = require('mysql');
const db=mysql.createConnection({
    user: "root",
    host:"localhost",
    password:"password",
    database:"company_webpage"
})

function clientModel(){
    const client = db.query('SELECT * FROM client', (error, result) => {
        if (error) {
            console.log("Error in model:",error)
        }
        console.log("Result:",result)

    })
}
module.exports={clientModel}