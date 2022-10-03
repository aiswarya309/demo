const db = require('../db');
console.log('model.');
async function signupModel(email, password, name) {
  console.log('signup model');
  try {
    let signupM = await db.query(
      'INSERT INTO signup(email,password,name)values(?,?,?)',
      [email, password, name]
    );
    return res.status(200).json({ success: true, message: 'success' });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'fail' });
  } finally {
    await makeDb.close();
  }
}
module.exports = signupModel;
