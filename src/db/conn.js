require('dotenv').config();
const mongoose = require("mongoose");



mongoose.connect("mongodb+srv://vijay:%40vijay9926@cluster0.izbukiw.mongodb.net/placement",{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>{
    console.log("connection successfull");
}).catch((e)=>{
    console.log(`no connecton ${e}`);
})