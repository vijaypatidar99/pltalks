const express = require ("express");
const { model } = require("mongoose");
const router = new express.Router;
const registrationData = require ("../models/registrationSchema");
const bcrypt =require ("bcryptjs");
const cookieParser = require('cookie-parser')
const { cookie } = require("express/lib/response");
router.use(cookieParser());
router.post("/login", async(req,res)=>{
    try{
        const email= req.body.email;
        const password =req.body.password;
        const userData = await registrationData.findOne({email:email});
        if(userData.verified){
        const isMatch = bcrypt.compare(password,userData.password);
        const token=await userData.generateAuthToken();
       
        res.cookie("jwt",token,{
            expires:new Date(Date.now()+14400000),
            httpOnly:true,
            //secure:true
        });

        
      
        if(isMatch){
    
            res.status(201).send("Login Successful");
        }else{
             res.send("Invalid Password");
        }
        }
        else{
            res.status(400).send("User With This Email Does Not Exist");
        }


    }
    catch(error){
        res.status(400).send("User With This Email Does Not Exist");
    }
})

router.get("/logout",(req,res)=>{
    res.clearCookie('jwt',{path:'/'});
   
    res.status(200).send("user logout");
})

router.post("/admin/login", async(req,res)=>{
    try{
        const email= req.body.email;
        const password =req.body.password;
        const userData = await registrationData.findOne({email:email});
        if(userData.verified){
        const isMatch = bcrypt.compare(password,userData.password);
        const token=await userData.generateAuthToken();
       
        

        
      
        if(isMatch&&userData.admin===true){
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+10800000),
                httpOnly:true,
                //secure:true
            });
    
            res.status(201).send("Login Successful");
        }else{
             res.status(400).send("Invalid Password");
        }
        }
        else{
            res.status(400).send("User With This Email Does Not Exist");
        }


    }
    catch(error){
        res.status(400).send("User With This Email Does Not Exist");
    }
})
module.exports=router;