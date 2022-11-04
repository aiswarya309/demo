const sliderModel=require('../model/slider')
async function sliderController(req,res){
    try{
        const sliderResult= await sliderModel()
        if(sliderResult){
            res.status(200).json({success:true,message:"Data fetching completed",result:sliderResult})
        }else{
            res.status(200).json({success:false,message:"Data fetching not completed"})
        }
    }catch{
        res.status(200).json({success:false,message:"Unknown error.."})
    }
}
module.exports=sliderController