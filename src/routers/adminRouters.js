const express = require ("express");
const { model } = require("mongoose");
const router = new express.Router;
const registrationData = require ("../models/registrationSchema");
const bcrypt =require ("bcryptjs");
const cookieParser = require('cookie-parser')
const { cookie } = require("express/lib/response");
const adminauth =require("../middleware/adminauth");
const userExperianceData = require("../models/userExperienceSchema");
router.use(express.json());

router.get("/admin/userdata",adminauth,async(req,res)=>{
    try{
        const pendingCount = await userExperianceData.find({status:"Pending"}).countDocuments();
        const rejectCount = await userExperianceData.find({status:"Reject"}).countDocuments();
        const postCount = await userExperianceData.countDocuments();
        
        const userCount= await registrationData.countDocuments();
        const count={
            total:userCount,
            reject:rejectCount,
            post:postCount,
            pending:pendingCount

        }

       
        
      
        res.status(200).send(count);
    }catch(error){
 
      res.status(400).send(error);
    }

})

router.get("/admin/records/:key",adminauth,async(req,res)=>{
    try{
        const pendingRecords = await userExperianceData.find({status:req.params.key});
     
        res.status(200).send(pendingRecords);
    }catch(error){
      
      res.status(400).send(error);
    }

})

router.patch("/admin/records/update/:key",adminauth,async(req,res)=>{
   
    try{
        
        const updatepost = await userExperianceData.findOneAndUpdate({_id:req.body.id},{$set:{status:req.body.key}},{upsert: true});
       
        res.status(200).send("post Updated");
    }catch(error){
      
      res.status(400).send(error);
    }

})
module.exports=router;