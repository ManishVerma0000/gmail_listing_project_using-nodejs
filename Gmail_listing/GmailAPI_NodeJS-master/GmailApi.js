var axios = require("axios");
const express = require('express')
var qs = require("qs");
const port = 5000;
const app = express()
app.use(express.json())
const mongoose = require("mongoose");
var user1 = require("./schema/user");


class GmailAPI {
  accessToken = "";
  constructor() {
    this.accessToken = this.getAcceToken();
  }

  getAcceToken = async () => {
    var data = qs.stringify({
      client_id:
        "545897526961-e7kulg5h927pmr9sh9onfgu0j6jdimnu.apps.googleusercontent.com",
      client_secret: "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",
      refresh_token:
        "1//04uhmUUol5E0cCgYIARAAGAQSNwF-L9Ir_V9zsBgCPgYhJuD8E-uawhXmDUJCSJMXiz3x-aTYJdXo4Lun5fEc4hyAB8ZUXQLNGmk",
      grant_type: "refresh_token",
    });
    var config = {
      method: "post",
      url: "https://accounts.google.com/o/oauth2/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    let accessToken = "";

    await axios(config)
      .then(async function (response) {
        accessToken = await response.data.access_token;

        console.log("Access Token " + accessToken);
      })
      .catch(function (error) {
        console.log(error);
      });

    return accessToken;
  };

  searchGmail = async (searchItem) => {
    var config1 = {
      method: "get",
      url:
        "https://www.googleapis.com/gmail/v1/users/me/messages?q=" + searchItem,
      headers: {
        Authorization: `Bearer ${await this.accessToken} `,
      },
    };
    var threadId = "";

    await axios(config1)
      .then(async function (response) {
        threadId = await response.data["messages"][0].id;

        console.log("ThreadIdsssssssssssssss = " + threadId);
      })
      .catch(function (error) {
        console.log(error);
      });

    return threadId;
  };

  readGmailContent = async (messageId) => {
    var config = {
      method: "get",
      url: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`,
      headers: {
        Authorization: `Bearer ${await this.accessToken}`,
      },
    };

    var dataa = [];

    await axios(config)
      .then(async function (response) {
        dataa = await response.data;

      })
      .catch(function (error) {
        console.log(error);
      });


    // console.log("users message ")
    // //const myObj = JSON.stringify(dataa);
    // //console.log(myObj)
    // console.log(dataa)
    // console.log("user messagegggg")
    return dataa;

  };




  readInboxContent = async (searchText) => {
    //const threadId = await this.searchGmail(searchText);
    //console.log(threadId,"this is the thteadidffffff")

    const message = await this.readGmailContent(searchText);
    console.log("############################")
    //console.log(message.payload.headers)
    message.payload.headers.forEach(element => {
      // if (element.name === "Subject") {
      //   var subject = element.value

      //   //console.log(element.value)
      // } else {
      //   var subject = "";
      // }
      // if (element.name === "Date") {
      //   var date = element.value;

      //   //console.log(element.value)
      // } else {
      //   var date = "";
      // }
      // if (element.name === "From") {
      //   var username = element.value;
      //   //console.log(element.value)
      // } else {
      //   var username = "";
      // }
      if (element.name === "Subject") {
        var subject = element.value;
        console.log(subject);

        if(element.name==="Date"){
          var date=element.value;
          console.log(date);
        }
        if(element.name==="From"){
          var username=element.value;
          console.log(username)

        }else{
          console.log("error")
        }
      }
      // console.log(subject);
      // console.log(date);
      // console.log(username)
      //insert
      // const{subject,date,username}= data1;

//      const savedata=async()=>{
//       const datasave={username,subject,date}
//   const savedata=  await user1.save(datasave);
//   // console.log(savedata)
// console.log(username);
// console.log(subject)

//      }
// console.log(username);
// console.log(date);
// console.log(subject);


        // console.log(saveuser);

        //insert
        
      });


  };


  //get all data
  getalldata = async () => {
    const threadId = '';
    //console.log(threadId,"this is the thteadidffffff")

    const alldata = await this.readGmailContent(threadId);


    // alldata.messages.forEach((m) => {

    //   // console.log(m.threadId);
    //   this.readInboxContent(m.threadId)

    //   // gdata.payload.headers.forEach(element => {
    //   //   if(element.name==="Subject"){
    //   //     console.log(element.value)
    //   //   }
    //   // });




    // })



  };

}


module.exports = new GmailAPI();
