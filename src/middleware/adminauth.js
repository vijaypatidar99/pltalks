const jwt = require("jsonwebtoken");
const registrationData = require ("../models/registrationSchema");


const adminauth = async (req,res,next)=>{
     try{
          const token =req.cookies.jwt;
          //console.log(token);
          const verifyToken= jwt.verify(token, process.env.SECRET); 
          const rootUser = await registrationData.findOne({
              _id:verifyToken._id,
              "tokens.token":token,
              admin:true
          });
          if(!rootUser){
              throw new Error("user not found")
          }else{
              req.token=token;
              req.rootUser=rootUser;
              req.userID=rootUser._id;
          }
          next();
     }catch(error){
         res.status(401).send(error);
         //console.log("tokrn"+error);
     }
}
module.exports =adminauth;