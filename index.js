const express=require('express');
const app=express();


app.get("/",(req,res)=>{
    res.send("hello world");
})
app.get("/hi",(req,res)=>{
    res.send("<div><h1>my name is eswar</h1></div>")
})
app.get("/eswar",(req,res)=>{
    res.send("<div><h1>my name is hiiiio</h1></div>")
})


app.listen(3090,(req,res)=>{
    console.log("server is running");
})
