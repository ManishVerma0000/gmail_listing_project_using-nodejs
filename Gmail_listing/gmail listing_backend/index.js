const express= require("express");

const port=  process.env.port||4000;
const app= express();
const route= require("./routes/routes");
app.use(route);
const user= require("./Schema/user");

require("./db/conn");
const conn= require("./db/conn")
conn();

app.listen(port,()=>{
    console.log(` server is listining on the port ${port}`)
});

