const {employeeGetModel,empIdGetModel} =require('../model/employee')
async function employeeGetController(req,res){
    try{
        const empGet= await employeeGetModel()
        if(empGet){
            res.status(200).json({success:true,message:"Data getting completed",result:empGet})
        } else{
            res.status(500).json({success:false,message:"Data getting not completed"})
        }
    }
    catch{
        res.status(500).json({success:false,message:"Server issue"})
    }
    }
    async function empIdGetController(req,res){
        try{
            const id=req.query.id
            console.log("id from contrllr",id);
            if(!id){
                res.status(500).json({success:false,message:"Data missing"})
            }else{
                const empGet= await empIdGetModel(id)
                if(empGet){
                    res.status(200).json({success:true,message:"Data getting completed",result:empGet})
                } else{
                    res.status(500).json({success:false,message:"Data getting not completed"})
                }
            }
        }
        catch{
            res.status(500).json({success:false,message:"Server issue"})
        }
        }
module.exports={employeeGetController,empIdGetController}