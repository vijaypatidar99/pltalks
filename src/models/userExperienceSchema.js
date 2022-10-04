require('dotenv').config();
const bcrypt = require("bcryptjs/dist/bcrypt");
const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");


const experienceSchema = new mongoose.Schema({
    status:{
        type:String,
        enum: ['Pending','Accepted','Rejected'],
        default:"Pending"

    },
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
      
    },
    instituteName:{
        type:String,
        required:true,
    },
    company_name:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    date_of_interview:{
        type:String,
        required:true
    },
    eligibility:{
        type:String,
        required:true
    },
    round1:{
        type:String,
        required:true
    },
    round2:{
        type:String
    },
    round3:{
        type:String
    },
    round4:{
        type:String
    },
    round5:{
        type:String
    }
})


experienceSchema.pre("save", function (next) {
    this.company_name= this.company_name.charAt(0).toUpperCase() + this.company_name.slice(1).toLowerCase();
    next();
});

const experienceData=new mongoose.model("experienceData",experienceSchema);

module.exports=experienceData;