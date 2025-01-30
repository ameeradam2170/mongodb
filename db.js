const mongoose = require("mongoose");
// mongoose.connect
 mongoose.connect
 ("mongodb+srv://ameeradam:ameeradam2170@cluster0.5dujj.mongodb.net/sampleDB?retryWrites=true&w=majority&appName=Cluster0")
 .then(()=>{console.log("connected to db")})
 .catch((err)=>{console.log(err)})