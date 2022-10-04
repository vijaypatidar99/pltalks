const express = require ("express");
const { model } = require("mongoose");
const router = new express.Router;
const registrationData = require ("../models/registrationSchema");
const bcrypt =require ("bcryptjs");
const cookieParser = require('cookie-parser')
const { cookie } = require("express/lib/response");
const auth =require("../middleware/auth");
const userExperianceData = require("../models/userExperienceSchema");
router.use(express.json());

router.get("/account",auth,async(req,res)=>{
try{
    const accountExpData = await userExperianceData.find({email:req.rootUser.email});
    const userAccountData={
        name:req.rootUser.name,
        email:req.rootUser.email,
        userPost:accountExpData
    }
    
    res.send(userAccountData);
}catch(error){
  console.log(error);
  res.send(req.rootUser);
}

})

router.post("/account",auth,async(req,res)=>{
    try{
    
    const expData ={
       ... req.body,
        email:req.rootUser.email,
        instituteName:req.rootUser.instituteName,
        
    }
    const newExp=new userExperianceData(expData);
    const saved=await newExp.save();
     
    res.status(201).send("exp data added");
}catch(e){
    res.status(400).send(`errorr ${e}`);
    
}
    })
module.exports=router;