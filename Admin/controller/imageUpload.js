const {UploadModel,imageModel,imageDeleteModel,imageUpdateModel} =require('../Model/imageUpload')
const path=require('path')
async function UploadController(req, res) {
    
    console.log("Req.file",req.file)
    // const images=req.body.img
    // const image=path.basename(images)
    const image=req.file
    console.log("image PAth",image)
    try {
    //   let email = req.body.email;
     
      if ((!image) ) {
              return res.status(400).json({ success: false, message: 'image  are missing' });
            }else{
              const upload= await UploadModel(image.originalname);
              // console.log("upload",upload);
                      if(upload){
                        return res.status(200).json({ success: true, message: ' uploaded Success'});
                      }
                      else{
                        return res.status(500).json({ success: false, message: ' upload failed' });
                      }
            }
    } catch (err) {
      return res.status(500).json({ success: false, message: 'server issue' });
  
    }
  }

  async function imageGetController(req, res) {
    // console.log("imageGet Contrllr");
    try {
        const image= await imageModel();
        // console.log("imageGet Contrllr",image);
          if(image){
            return res.status(200).json({ success: true, message: ' loading Success',result:image});
          }
          else{
            return res.status(500).json({ success: false, message: ' loading failed' });
          }
    } catch (err) {
      return res.status(500).json({ success: false, message: 'server issue' });
  
    }
  }
  async function imageDeleteController(req, res) {
    console.log("imageGet Contrllr");
    try {
      const id=req.query.id
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
  async function ImageUpdateController(req, res) {
    // console.log("imageGet Contrllr");
    try {
      // console.log("Admin controller",req.query)
        const id=req.query.id
        const file=req.file

        if((!id)){
          return res.status(500).json({ success: false, message: ' Data Missing' });

        }else{
          const imgDelete= await imageUpdateModel(file.originalname,id);
          // console.log("imageGet Contrllr",imgDelete);
            if(imgDelete){
              return res.status(200).json({ success: true, message: ' loading Success',result: imgDelete });
            }
            else{
              return res.status(500).json({ success: false, message: ' loading failed' });
            }
        }
    } catch (err) {
      return res.status(500).json({ success: false, message: 'server issue' });
  
    }
  }
  module.exports={UploadController,imageGetController,imageDeleteController,ImageUpdateController}