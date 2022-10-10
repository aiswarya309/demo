const mysql = require('mysql');
const util =require('util');
const config=require('./config')

function makeDb(){
const dbconnction={
    user: config.user,
    host:config.host,
    password:config.password,
    database:config.database
}
const conncetion=mysql.createConnection(dbconnction)
return{
  query(sql,args){
    return util.promisify(conncetion.query ).call(conncetion, sql, args );
  },
  close(){
    return util.promisify(conncetion.end ).call(conncetion);
  }
};
}

module.exports = {makeDb};


// const mysql = require('mysql');
// const util = require('util');
// const { port } = require('./config');
// // const path =require('path')
// const config=require('./config');
// // let config_db={
// //     user: config.user,
// //     host:config.host,
// //     password:config.password,
// //     database:config.database
// // }
// function makeDb() {
//   console.log("###########database")
//   const conncetion = mysql.createConnection({
//     host:config.host,
//     user: config.user,
//     password:config.password,
//     database:config.database,
//     port:port
// });
//   return {
//     query(sql, args) {
//       return util.promisify(connection.query).call(conncetion, sql, args);
//     },
//     close() {
//       return util.promisify(connection.end).call(connection);
//     }
  
//   };
// }
// module.exports = makeDb;


// // const data={
// //   name:'aiswarya',
// //   age:'24',
// // }
// // const dbhost=config.DB_HOST
// // const pass=config.DB_PASSWORD
