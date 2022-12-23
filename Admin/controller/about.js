const {aboutModel,aboutPostModel,aboutDeleteModel,aboutUpdateModel}=require('../../Admin/Model/about')
async function aboutController(req,res){
    console.log("About controller")
    try{
        const result= await aboutModel()
        // console.log("Admin controller try",result)
        if(result){
            console.log("about try")
            // res.status(500).json({success:'dummy',message:"#########",result:result})
            return res.status(200).json({success:true,message:"Data fetching completed",result:result})
        }
        else{
            res.status(500).json({success:false,message:"Data fetching not completed"})
        }
    }
    catch{
        console.log("about catch")
        res.status(500).json({success:false,message:"Server issue"})
    }
}
async function aboutPostController(req,res){
    try{
        // console.log("Admin controller",req.body)
        const title=req.body.title
        const content=req.body.content
        const result= await aboutPostModel(title,content)
        // console.log("Admin controller try",result)
        if(result){
            res.status(200).json({success:true,message:"about posting completed"})
        }
        else{
            res.status(500).json({success:false,message:"about posting not completed"})
        }
    }
    catch(err){
        // console.log("err",err)
        res.status(500).json({success:false,message:err})
    }
}
async function aboutDeleteController(req,res){
    console.log("Admin controller",req.query)
    try{
        const id=req.body.id
        const result= await aboutDeleteModel(id)
        console.log("Admin controller try",result)
        if(result){
            res.status(200).json({success:true,message:"about posting completed"})
        }
        else{
            res.status(500).json({success:false,message:"about posting not completed"})
        }
    }
    catch(err){
        console.log("err",err)
        res.status(500).json({success:false,message:err})
    }
}
async function aboutUpdateController(req,res){
    console.log("Admin controller")
    try{
        const id=req.body.id
        const title=req.body.title
        const content=req.body.content
        console.log("UPDATE",id,title,content)
        const result= await aboutUpdateModel(id,title,content)
        // console.log("Admin controller try",result)
        if((!id) || (!title) || (!content))
        if(result){
            res.status(200).json({success:true,message:"about posting completed"})
        }
        else{
            res.status(500).json({success:false,message:"about posting not completed"})
        }
    }
    catch(err){
        console.log("err",err)
        res.status(500).json({success:false,message:err})
    }
}
module.exports={aboutController,aboutPostController,aboutDeleteController,aboutUpdateController}