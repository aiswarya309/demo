const jwt = require('jsonwebtoken')

function verifyToken(req,res,next){
    // console.log("varifyToken")
    const authHeader = req.headers.authorization;
    // console.log("authHeader:-",authHeader)
    // if(authHeader){
    //         let token=authHeader.split(' ')[1]
    //         console.log("TOKEN IN MIDDLEWARE::--",token)
    //         jwt.verify(token,"secret",(error,decode)=>{
    //             if(error){
    //                 console.log("error in about middle:-",error);
    //                 res.status(200).json({success:false, message:"Authentication Failed"})
    //             }
    //             req.decoded = decoded;
    //             next()
    //     })
    // }else{
    //                 res.status(200).json({success:false, message:"Authentication Failed"})

    // }

    if(authHeader == null){
        res.status(200).json({success: false, message: 'no token provided'})
    }
    let token=authHeader.split(' ')[1]
    // console.log("TOKEN IN MIDDLEWARE::--",token)
    jwt.verify(token,"secret",(error,decode)=>{
        if(error){
            // console.log("error in about middle:-",error);
            res.status(200).json({success:false, message:"Authentication Failed"})
        }
        else{
            // console.log("NEXT()")
            // req.decode=decode
            next()
            // res.send(decode)
        }
    })
}
module.exports={
    verifyToken
}