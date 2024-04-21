const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("HOME PAGE IS HERE")
    
})
app.get("/about", (req,res)=>{
    res.send("<h1>ABOUT US PAGE IS HERE</h1>");
     
})
app.get("/contact", (req,res)=>{
    res.json([{
        name:"sufyan",
        age:"21",
        hobby:"NGF",
    },
    {
        name:"sufyan",
        age:"21",
        hobby:"NGF",
    },
    {
        name:"sufyan",
        age:"21",
        hobby:"NGF",
    },
    {
        name:"sufyan",
        age:"21",
        hobby:"NGF",
    },
])
})
app.get("/temp", (req,res)=>{
    res.send("TEMPRATURE PAGE IS HERE !!!!111111111")
})
app.listen(5000,()=>{
    console.log("5000 running");
})

// EXPRESS methods:
// get get data from server
// post create Data
// put  update Data 
// delete delete data


// ? query string
// : paramter
// status code Header