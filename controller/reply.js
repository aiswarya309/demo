const {replyPostModel,replyViewModel} =require('../model/reply')
async function replyPostController(req,res){
    // console.log("feedback controller");
    try{
        // console.log("feedback contllr req:-",req);
        // console.log("reply contllr req.body:-",req.body);
        const id=req.body.id
        const reply=req.body.reply
        const f_id=req.body.f_id
        console.log("id,reply,f_id:-",id,reply,f_id);
        if((!id) || (!reply)){
            res.status(200).json({success:false,message:"No data"})
        }else{
        const result= await replyPostModel(id,reply,f_id)
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

// async function replyGetController(req,res){
//     console.log("replyGetController");
//     try{
//         const getResult=await replyGetModel()
//         if(getResult.length > 0){
//             res.status(200).json({success:true,message:"Data Getting completed",result:getResult})
//         }else{
//             res.status(200).json({success:false,message:"Data Getting NOT completed"})
//         }
//     }catch{
//         res.status(500).json({success:false,message:"Data posting server issue"})
//     }
//     }
async function replyViewController(req,res){
    console.log("replyViewController")
    console.log("data View Contrllr::",req.query);
    try{
        const f_id=req.query.f_id
        const f_empId=req.query.f_empId
        console.log("f_id:-",f_id);
        // const f_id=req.data.f_id
        if( (!f_id)){
            res.status(200).json({success:false,message:"No data"})
        }else{
        const view= await replyViewModel(f_id,f_empId)
        if(view){
            res.status(200).json({success:true,message:"Reply Fetch",result:view})
        }
        else{
            res.status(500).json({success:false,message:"Reply Fetch not completed"})
        }
    }
    }
    catch{
        res.status(500).json({success:false,message:"Reply Fetch server issue"})
    }
} 
module.exports={replyPostController,replyViewController}