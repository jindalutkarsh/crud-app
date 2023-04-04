const express=require("express");
const mongoose= require("mongoose");
const app=express();
const router = require("./routes/router");

var cors=require("cors");
app.use(cors());
app.use(express.json());
app.use(router);

const url2="mongodb+srv://utkarshjindal:tUh6SDRye87xffyA@cluster0.gskuhcb.mongodb.net/crud?retryWrites=true&w=majority";

mongoose.connect(url2).then(()=>{
    console.log("Database Connected Succssfully")
}).catch((err)=>{
    console.log(err)
});

app.listen(5000);