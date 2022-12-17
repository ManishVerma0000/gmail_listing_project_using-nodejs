const mongoose= require("mongoose");
const userSchema1= new mongoose.Schema({
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
        default:new Date(Date.now()).toDateString()
    }
})

const user1= mongoose.model("user",userSchema1);
module.exports= user1;

