// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// const router = express.Router();
// // const importController = require('../controllers/import');

// // const BASE_DIR = path.join(process.cwd());
// // const UPLOADS_DIR = path.join(BASE_DIR, 'uploads');

// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         // if (!fs.existsSync(UPLOADS_DIR)) {
//         //     fs.mkdirSync(UPLOADS_DIR);
//         // }

//         callback(null, 'uploads');
//     },
//     filename: function (req, file, callback) {
//         const datetimestamp = Date.now();
//         callback(
//             null,
//             file.originalname
//         );
//     },
// });

// const upload = multer({storage: storage}).single('img');

// // router.post('/file_upload', upload, importController.dataImport);

// module.exports = upload;


const multer  = require("multer")
console.log("Aishu")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log("FILE",file);
      cb(null, "uploads")
    },
    filename: function (req, file, cb) {
      // console.log("file name in multer",file);
    cb(null,file.originalname)
    //   cb(null,path.basename(file.originalname))
      // console.log("path.extname(file.originalname)", path.basename(file.originalname))
    },
  });
  // console.log("STORAGE",Storage);
  const upload = multer({ storage: storage })
  // console.log("upload:-",upload)
 module.exports=upload

// const multer  = require('multer')
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads')
//   },
//   filename: function (req, file, cb) {
//     req.body.file=Date.now()+file.originalname
//     cb(null, req.body.file)
//   }
// })

// const upload = multer({ storage: storage,});
// module.exports=upload;