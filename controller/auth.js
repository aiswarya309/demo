const signupModel = require('../model/auth');
console.log('controller.js');
async function signupController(req, res) {
  console.log('signup data');
  try {
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;
    console.log('controller data', email, password, name);
    const signupC = await signupModel(email, password, name);
    if (signupC) {
      return res.status(200).json({ success: true, message: 'success' });
    } else {
      return res.status(200).json({ success: false, message: 'fail' });
    }
  } catch (err) {
    console.log('Error:-', err);
  }
}
module.exports = { signupController };
