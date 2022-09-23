const worldModel = require('../model/client')

function client(req , res) {
    const client = worldModel.world()
    console.log(client)
    return res.status(200).json({ success: true})
    
}
module.exports={client}