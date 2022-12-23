const {ContactGetModel}=require('../Model/contact')
async function ContactGetController(req,res){
    // console.log("Admin controller")
    try{
        const result= await ContactGetModel()
        // console.log("Admin controller try",result)
        if(result){
            res.status(200).json({success:true,message:"Data fetching completed",result:result})
        }
        else{
            res.status(500).json({success:false,message:"Data fetching not completed"})
        }
    }
    catch{
        res.status(500).json({success:false,message:"Server issue"})
    }
}

async function ContactDeleteController(req, res) {
    console.log("imageGet Contrllr");
    try {
      const id=req.body.id
      console.log("Admin controller",id)
        if((!id)){
          return res.status(500).json({ success: false, message: ' Data Missing' });

        }else{
          const imgDelete= await imageDeleteModel(id);
          // console.log("imageGet Contrllr",imgDelete);
            if(imgDelete){
              return res.status(200).json({ success: true, message: ' loading Success'});
            }
            else{
              return res.status(500).json({ success: false, message: ' loading failed' });
            }
        }
    } catch (err) {
      return res.status(500).json({ success: false, message: 'server issue' });
  
    }
  }
module.exports={ContactGetController,ContactDeleteController}