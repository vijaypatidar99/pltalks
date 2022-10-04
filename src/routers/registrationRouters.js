const express = require ("express");
const router = new express.Router;
const registrationData = require ("../models/registrationSchema");
const jwt = require("jsonwebtoken");
router.use(express.json());
const crypto = require('crypto')
const EmailToken = require("../models/token");
const sendEmail = require("../utils/email");


router.post("/registration",async(req,res)=>{
    try {
      console.log(" vijaypatidarrrr ");
      
    const newuser=new registrationData(req.body);
    
    
    const token=await newuser.generateAuthToken();
    
    const registered=await newuser.save();
    



    let emailToken = await new EmailToken({
        userId: registered._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();

      const message = `Click on the link to verify -> ${process.env.BASE_URL}/user/verify/${registered._id}/${emailToken.token}`;
    await sendEmail(registered.email, "Email verification from Placementtalks", message);




    res.status(201).send("An Email sent to your account please verify");
     
    }catch(e){
        res.status(400).send(`errorr ${e}`);
        
    }
})

router.get("/registration", async(req,res)=>{
    try{
        const userData= await registrationData.find();
        res.send(userData);
    }catch(e){
        res.send(e);
    }
})

router.patch("/registration/:name", async (req,res)=>{
    try{
        const name = req.params.name;
        const updateStudent = await registrationData.findOneAndUpdate({name:name},req.body,{new:true});
        res.send(updateStudent);
    }catch(e){
        res.status(400).send(e);
    }
})


router.get("/user/verify/:id/:token", async (req, res) => {
    try {
      const user = await registrationData.findOne({ _id: req.params.id });
     
      if (!user) return res.status(400).send("Invalid link");
     
      const token = await EmailToken.findOne({
        userId: user._id,
        token: req.params.token,
      });
      
      if (!token) return res.status(400).send("Invalid link");
      
     await registrationData.updateOne({ _id: user._id}, {$set: {verified: true}});
     
      await EmailToken.findByIdAndRemove(token._id);
      console.log("email verified");
      res.send(`<h3>Email verified successfully. </h3> `);
    } catch (error) {
      res.status(400).send("An error occured");
    }
  });
module.exports=router;