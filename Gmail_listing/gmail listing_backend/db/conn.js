// const mongoose= require("mongoose");

// const connection=()=>{
//     mongoose.connect("mongodb://localhost:27017/gmaillisting")
//     try {
//         console.log("connection is successful.....")
//     } catch (error) {
//         console.log({message:message.error})
//     }
// }

// module.exports= connection;
// const mongoose= require("mongoose");

// const connection=()=>{
//     mongoose.connect("mongodb://localhost:27017/data1")
//     try {
//         console.log("connection is successful.....")
//     } catch (error) {
//         console.log({message:message.error})
//     }
// }

// module.exports= connection;
// const mongoose= require("mongoose");

// const connection=()=>{
//     mongoose.connect("mongodb://localhost:27017/gmaillisting")
//     try {
//         console.log("connection is successful.....")
//     } catch (error) {
//         console.log({message:message.error})
//     }
// }

// module.exports= connection;
// const mongoose= require("mongoose");

// const connection=()=>{
//     mongoose.connect("mongodb://localhost:27017/gmaillisting")
//     try {
//         console.log("connection is successful.....")
//     } catch (error) {
//         console.log({message:message.error})
//     }
// }

// module.exports= connection;
const mongoose= require("mongoose");

const connection=()=>{
    mongoose.connect("mongodb://localhost:27017/gmaillisting")
    try {
        console.log("connection is successful.....")
    } catch (error) {
        console.log({message:message.error})
    }
}

module.exports= connection;