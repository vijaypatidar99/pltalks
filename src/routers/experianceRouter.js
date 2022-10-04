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


router.get("/experiance/:key",async(req,res)=>{
    try{
       

        const ExpData = await userExperianceData.find({
            $and : [{company_name:req.params.key.charAt(0).toUpperCase() + req.params.key.slice(1).toLowerCase()},{status:"Accept"}]
        }).sort({id:1});
        
        
        res.status(201).send(ExpData);
    }catch(error){
      
      res.send("Data not found");
    }
   
})
router.get("/experiance",async(req,res)=>{
    try{
       

        const ExpData = await userExperianceData.find({
           status:"Accept"
        }).sort({id:1});
        
        
        res.status(201).send(ExpData);
    }catch(error){
      
      res.send("Data not found");
    }
   
})

module.exports=router;