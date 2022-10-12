const {signupModel,LoginModel} = require('../model/auth');
console.log('controller.js');
async function signupController(req, res) {
  console.log('signup data');
  try {
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;
    console.log('controller data', email, password, name);
    // console.log(req)
    if ((!email) || (!password) || (!name)) {
            return res.status(500).json({ success: false, message: 'fail' });
          }else{
          console.log('controller data', email, password, name);
          const signupC = await signupModel(email, password,name);
          return res.status(200).json({ success: true, message: 'success' });
      
          }
  } catch (err) {
    return res.status(500).json({ success: false, message: 'fail' });

  }
}

async function LoginController(req, res) {
  console.log('signup data');
  try {
    let email = req.body.email;
    let password = req.body.password;
    console.log('controller data', email, password);
    if ((!email)||(!password) ) {
            return res.status(500).json({ success: false, message: 'login fail' });
          }else{
          console.log('controller data', email, password);
          const login_result = await LoginModel(email, password);
          console.log("login_result",login_result)
          if(login_result.length >0){
          return res.status(200).json({ success: true, message: 'login success' });
          }else{
            return res.status(404).json({ success: false, message: 'wrong login data' });

          }
          }
  } catch (err) {
    return res.status(500).json({ success: false, message: 'login fail' });

  }
}
module.exports = { signupController ,LoginController};

// // const { user } = require('../config');
// const signupModel = require('../model/auth');
// console.log('controller.js');
// async function signupController(req, res) {
//   console.log('signup data');
//   try {
//      let email = req.body.params.email;
//      let password = req.body.params.password;
//      let name = req.body.params.name;
//      console.log("signup data:-",email,password,name)
//     if (email == '' && password == '' && name == '') {
//       return res.status(500).json({ success: false, message: 'fail' });
//     }else{
//     console.log('controller data', email, password, name);
//     const signupC = await signupModel(email, password,name);
//     return res.status(200).json({ success: true, message: 'success' });

//     }
//     // if (signupC) {
//     //   return res.status(200).json({ success: true, message: 'success' });
//     // } else {
//     //   return res.status(500).json({ success: false, message: 'fail' });
//     // }
//   } catch (err) {
//     console.log('Error:-', err);
//   }
// }
// module.exports = { signupController };
