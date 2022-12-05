const contactUs=require('../model/contact')
async function contactController(req, res) {
  console.log('contct controller  IN');
  try {
    let name = req.body.name;
    let phn = req.body.phn;
    let place = req.body.place;
    let email = req.body.email;

    console.log('controller data ', name,phn,place,email);
    if ((!name) || (!phn) || (!place) || (!email)) {
            return res.status(400).json({ success: false, message: 'some data are missing' });
          }else{
            const contactUs= await contactUs(name,phn,place,email);
            console.log("contactUs...",contactUs)
              if(contactUs ){
                // console.log("........value exist.....")
                return res.status(200).json({ success: true, message: ' contact posted' });
              }else{
                return res.status(500).json({ success: false, message: 'some issues in' });

                  }
          }
  } catch (err) {
    return res.status(500).json({ success: false, message: 'server issue' });

  }
}
module.exports={contactController}
