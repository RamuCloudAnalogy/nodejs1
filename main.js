const express = require('express');
const app= express();
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname +'/index.html');
  }); 

app.get("/team",(req,res)=>{
    res.send("this is team page");
});

app.get("/users/:id",(req,res)=>{
    console.log(req.params);
    res.send("this is user page");
});

app.listen(3000,()=>{
    console.log("server is runinng on port 3000")
});