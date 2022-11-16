const {feedbackPostModel,feedbackGetModel} =require('../model/feedback')
async function feedbackPostController(req,res){
    console.log("feedback controller");
    try{
        // console.log("feedback contllr req:-",req);
        // console.log("feedback contllr req.body:-",req.body);
        const id=req.body.id
        const name=req.body.name
        const empName=req.body.empName
        const feedback=req.body.feedback
        // console.log("data F_controller:-",id,name,empName,feedback)
        if((!id) || (!name) ||(!empName) || (!feedback)){
            res.status(200).json({success:false,message:"No data"})
        }else{
        const result= await feedbackPostModel(id,name,empName,feedback)
        if(result){
            // console.log("feedback controller IF");
            res.status(200).json({success:true,message:"Data posting completed"})
        }
        else{
            // console.log("feedback controller ELSE");
            res.status(500).json({success:false,message:"Data posting not completed"})
        }
    }
    }
    catch{
        // console.log("feedback controller CATCH");
        res.status(500).json({success:false,message:"Data posting server issue"})
    }
}

async function feedbackGetController(req,res){
    // console.log("feedbackGetController")
try{
    const getResult=await feedbackGetModel()
    if(getResult.length > 0){
        res.status(200).json({success:true,message:"Data Getting completed",result:getResult})
    }else{
        res.status(200).json({success:false,message:"Data Getting NOT completed"})
    }
}catch{
    res.status(500).json({success:false,message:"Data posting server issue"})
}
}
module.exports={feedbackPostController,feedbackGetController}
