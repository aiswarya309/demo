const {signupModel,signupExist,LoginModel} = require('../model/auth');
const jwt = require('jsonwebtoken')
// const {verifyToken}=require('../middleware/loginMiddleware')
// console.log('controller.js');
async function signupController(req, res) {
  // console.log('signup controller  IN');
  try {
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;
    // console.log('controller data signup', email, password, name);
    // console.log(req)
    if ((!email) || (!password) || (!name)) {
            return res.status(400).json({ success: false, message: 'some data are missing' });
          }else{
            // console.log("EMAIL:---",email)
            const signup_exist= await signupExist(email);
            // console.log("signup_exist...",signup_exist)
              if(signup_exist.length >= 1 ){
                // console.log("........value exist.....")
                return res.status(200).json({ success: false, message: ' Signup fail' });
              }else{
                // console.log('controller  signup', email, password, name);
                const signupC = await signupModel(email, password,name);
                // console.log("signupC..:-",signupC)
                    if(signupC){
                      return res.status(200).json({ success: true, message: ' Signup Success' });
                    }
                    else{
                      return res.status(500).json({ success: false, message: ' Signup failed' });
                    }
                  }
          }
  } catch (err) {
    return res.status(500).json({ success: false, message: 'fail' });

  }
}

async function LoginController(req, res) {
  console.log('Login_contrlr IN');
  try {
    let email = req.body.email;
    let password = req.body.password;
    // console.log('Login_contrlr data', email, password);
    if ((!email)||(!password) ) {
      // console.log('Login_contrlr if_value_nil', email, password);
            return res.status(400).json({ success: false, message: 'Field not Filled' });
          }else{
          // console.log('Login_contrlr if_value', email, password);
          const login_result = await LoginModel(email, password);
          // console.log("Login_contrlr result from model",login_result)
          if(login_result.length >0){
            let resp={
              email:login_result[0].email
            }
            // console.log("Login_contrlr tockn_obj RESP:-",resp.email)
            let token = jwt.sign(resp,"secret")
          return res.status(200).json({ success: true, message: 'login success' ,token:token});
          }else{
            
            return res.status(400).json({ success: false, message: 'wrong login data'});

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
