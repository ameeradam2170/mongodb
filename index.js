const express = require("express") 
require("./db")
const stuModel=require("./model/student");
const app =express();
app.use(express.json())

var port =5000;


app.post("/",(req,res)=>{
    try {
     
        stuModel(req.body).save();
        res.send("Data added successfully")
    } catch (error) {
        res.send(error)
    }
})
app.get("/",async(req,res)=>{
    try {
        var data = await stuModel.find();
    res.send(data)   
        
    } catch (error) {
        res.send(error);
        
    }  
})



app.listen(port,(req,res)=>{
    console.log(`server is listening in port ${port}`);
})
