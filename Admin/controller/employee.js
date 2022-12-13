const {employeeGetModel,empUpdateModel,empDeleteModel} =require('../Model/employee')
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
async function empUpdateController(req,res){
  // console.log("Update employee controller",req.body);
    try {
      // console.log("inside try cntrllr")
          const name=req.body.name
          const email=req.body.email
          const jobTitle=req.body.jobTitle
          const country=req.body.country
          const pincode=req.body.pincode
          const id=req.body.id
          // console.log("name,email,jobTitle,country,pincode,id :-",name,email,jobTitle,country,pincode,id)
  
          if((!name) || (!email) || (!jobTitle) || (!country) || (!pincode) || (!id)){
            // console.log("missing data")
            return res.status(500).json({ success: false, message: ' Data Missing' });
  
          }else{
            // console.log("empUpdate Contrllr");
            const empUpdate= await empUpdateModel(name,email,jobTitle,country,pincode,id)
            // console.log("empUpdate",empUpdate);
              if(empUpdate){
                return res.status(200).json({ success: true, message: ' Updating Success',result: empUpdate });
              }
              else{
                return res.status(500).json({ success: false, message: ' Updating failed' });
              }
          }
      } catch (err) {
        // console.log("insie  catch contrllr");
        return res.status(500).json({ success: false, message: 'server issue in updation' });
    
      }
}

async function empDeleteController(req, res) {
  console.log("empGet Contrllr");
  try {
    const id=req.query.id
    console.log("Admin controller",id)
      if((!id)){
        return res.status(500).json({ success: false, message: ' Data Missing' });

      }else{
        const imgDelete= await empDeleteModel(id);
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
module.exports={
    employeeGetController,empUpdateController,empDeleteController
}