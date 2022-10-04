require('dotenv').config({path:"./.env"});
const express = require("express");
const cors =require("cors");
const registrationRouter = require("./src/routers/registrationRouters");
const loginRouter =require ("./src/routers/loginRouter")
const userAccountRouter=require ("./src/routers/userAccountRouter")
const experienceRouter = require("./src/routers/experianceRouter");
const adminRouters = require("./src/routers/adminRouters");
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;
require("./src/db/conn");

app.use(express.json());

app.use(cors());
app.use(express.static(path.join(__dirname, "frontend", "build")))





//console.log(process.env.SECRET);
app.use(registrationRouter);
app.use(loginRouter);
app.use(userAccountRouter);
app.use(experienceRouter);
app.use(adminRouters);



app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});


app.listen(port,()=>{
    console.log(`connection is setup ${port}`);
})