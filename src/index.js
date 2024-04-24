const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");
const requests = require("requests");
const fs = require("fs");
 

const htmlcss = path.join(__dirname,"../public");
console.log(htmlcss);

// app.use(express.static(htmlcss))

 
const viewsPath = path.join(__dirname, "../customName/views");
const partialsPath = path.join(__dirname, "../customName/partials");

console.log(viewsPath);
app.set("view engine", "hbs");
app.set("views", viewsPath);

hbs.registerPartials(partialsPath);

app.get("/", (req,res)=>{
    res.render("index",{
        name:"sufyan",
        age:21,
    })
})
app.get("/about",(req,res)=>[
    res.render("about")
])
app.get("/contact",(req,res)=>[
    res.render("contact")
])
app.get("/login",(req,res)=>[
    res.render("login")
])
app.get("/about/*",(req,res)=>[
    res.render("errorPage",{
        errorMsg:"ABOUT US :: PAGE NOT FOUND SORRY:"
    })
])
const city = "pune"
app.get("/weather",(req,res)=>{
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d83156e4e40ca97d0c6924b832fe00c`)
    .on('data', function (chunk) {
    //   console.log(chunk)
      let objData = JSON.parse(chunk); 
      let arrData = [objData];
       res.write("City Name : "+arrData[0].name+"::"+"Temprature : "+arrData[0].main.temp)
      console.log(arrData[0].name+"::"+arrData[0].main.temp);
    })
    .on('end', function (err) {
      if (err) return console.log('connection closed due to errors', err);
      res.end();
     
      console.log('end');
    });
})
app.get("*",(req,res)=>[
    res.render("errorPage",{
        errorMsg:"PAGE NOT FOUND SORRY:"
    })
])



app.get("/", (req,res)=>{
    res.send("HOME PAGE IS HERE") 
    
})

app.get("/about", (req,res)=>{
    res.send("<h1>ABOUT US PAGE IS HERE</h1>");
     
})
app.get("/contact", (req,res)=>{
     res.send("Contact us Page") 
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