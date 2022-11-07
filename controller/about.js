const aboutModel=require('../model/about')
async function aboutController(req,res){
    try{
        // console.log("about_cntrlr IN");
        const result= await aboutModel()
        // console.log("about_cntrlr result frm model:-",result)
        if(result){
            // console.log("about_cntrlr result true:-",result)
            res.status(200).json({success:true,message:"Data fetching completed",result:result})
        }
        else{
            // console.log("about_cntrlr result false:-")
            res.status(500).json({success:false,message:"Data fetching not completed"})
        }
    }
    catch{
        res.status(500).json({success:false,message:"Data fetching not completed"})
    }
}
module.exports=aboutController