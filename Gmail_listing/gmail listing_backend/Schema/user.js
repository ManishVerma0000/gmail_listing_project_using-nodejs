const mongoose= require("mongoose");
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true
    },
    subject:{
        type:String,
        // required:true
    },
    date:{
        type:String,
        // required:true,
        // default:new Date(Date.now()).toDateString()
    }
})

const user= mongoose.model("user",userSchema);
module.exports= user;

