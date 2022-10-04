require('dotenv').config();
const bcrypt = require("bcryptjs/dist/bcrypt");
const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");


const registrationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email already exist"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    instituteName:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }],
    verified:{
        type:Boolean,
        default:false
    },
    admin:{
        type:Boolean,
        default:false

    }

})
registrationSchema.methods.generateAuthToken = async function(){
    try{
        
        const token = jwt.sign({_id:this._id},process.env.SECRET);
      
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(error){
        //console.log("token error"+error);
        res.send("error : "+error);
       
    }
}
registrationSchema.pre("save",async function(next){
    try{
    if(this.isModified("password")){
    this.password =await bcrypt.hash(this.password,10);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword,10);;
}
    next();
}catch(e){
    console.log(e);

}
})

const registrationData=new mongoose.model("registrationData",registrationSchema);

module.exports=registrationData;
