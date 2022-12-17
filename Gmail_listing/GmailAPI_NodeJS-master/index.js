var gmail = require("./GmailApi");
const express= require("express")
const port=6000;
const mongoose=require("mongoose")
const app= express();
app.use(express.json())
const connection= require("./db/conn");
connection()


app.get("/getallemaildata",async(req,res)=>{
    gmail.getalldata("label:Primary");
    gmail.getalldata("category:primary");
   
    res.send("successfull...")
})


app.listen(port,()=>{
    console.log("server is listen on the port 5000");
  })