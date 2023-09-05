require('dotenv').config();
const mongoose = require("mongoose");



mongoose.connect("#",{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>{
    console.log("connection successfull");
}).catch((e)=>{
    console.log(`no connecton ${e}`);
})
