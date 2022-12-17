const { Router } = require("express");
const express = require("express");
const route = express.Router();
const user = require("../Schema/user");
route.use(express.json());
const bodyParser = require("body-parser");
const cors = require("cors");
// var validator = require("node-email-validation");
const validator = require("node-email-validation");
const path = require("path");
const { appendFile } = require("fs");
const { count } = require("console");

// const { appendFile } = require("fs");
console.log(path.join(__dirname, "../gmail_listing/"))
const staticPath = path.join(__dirname, "../gmail_listing/")
route.use(express.static(staticPath))
route.use(cors())



route.get("/login", async (req, res) => {
    res.sendFile("login.html", { root: staticPath });

})
route.get("/dashboard", (req, res) => {
    res.send("welcome to the dashboard")
    // res.sendFile("index.html", { root: staticPath });
});


route.post("/registration", async (req, res) => {
    try {

        const { name, email, subject } = req.body;
        if (!name || !email || !subject) {
            res.send("please enter the details carefully");
        }

        const emailvalidation = validator.is_email_valid(req.body.email);
        if (emailvalidation == true) {

            const registeruser = new user(req.body);
            const saveuser = await registeruser.save();
            console.log(saveuser)
            res.send(saveuser)

        } else {
            res.send("email is invalid");
        }

    } catch (error) {
        res.send({ message: error.message })
    }
})

route.get("/alldataofemail", async (req, res) => {
    try {

        const allemail = await user.find();
        if (!allemail) {
            res.send("email not found")
        } else {
            console.log(allemail)
            res.send(allemail);
        }
    } catch (error) {
        res.send({ message: error.message })
    }
})


//////right code///////
route.get("/headername", async (req, res) => {
    try {
        var data2;
        var data3 = [];
        const alldata = await user.find({}, { "_id": 0, "email": 0, "subject": 0, "date": 0, "__v": 0 });
        const alldata1 = await user.find({}, { "_id": 0, "email": 0, "subject": 0, "date": 0, "__v": 0 }).countDocuments();

        const finaldata = [...new Map(alldata.map((items) => [items["username"], items

        ])).values()];
        

        function findOcc(arr, key) {
            let arr2 = [];

            arr.forEach((x) => {


                if (arr2.some ((val)=> { return val[key] == x[key] })) {


                    arr2.forEach((k) => {
                        if (k[key] === x[key]) {
                            k["occurrence"]++
                        }
                    })

                } else {

                    let a = {}
                    a[key] = x[key]
                    a["occurrence"] = 1
                    arr2.push(a);
                }
            })

            return arr2
        }

        let arr = alldata;

        let key = "username"
        
        let output = findOcc(arr, key);
        console.log(output)
        res.send(output)
    } catch (error) {
        console.log(error)
        res.send({ message: error.message })
    }
})





route.post("/headernamedata", async (req, res) => {
    try {
        const namedata = await user.find({ name: req.body.name });
        res.send(namedata);
    } catch (error) {
        console.log(error);
        res.send(error)
    }



})

route.get("/logout", async (req, res) => {
    try {
        res.sendFile("login.html", { root: staticPath });

    } catch (error) {
        res.send({ message: error.message })
    }
})



module.exports = route;