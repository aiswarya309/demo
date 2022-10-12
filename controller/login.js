const LoginModel = require('../model/login');
console.log('controller.js');

async function LoginController(req, res) {
  console.log('signup data');
  try {
    let email = req.body.email;
    let password = req.body.password;
    console.log('controller data', email, password);
    if ((!email)  && (!password) ) {
            return res.status(500).json({ success: false, message: 'fail' });
          }else{
          console.log('controller data', email, password);
          const login_result = await LoginModel(email, password);
          if(login_result.length <= 0){
            res.redirect('/login')
          return false
          }else{
            return true;
          }
          }
  } catch (err) {
    return res.status(500).json({ success: false, message: 'fail' });

  }
}
module.exports = { LoginController };