const express = require("express");
const todoRoute = require("./router/todoRouter");
const userRoute = require("./router/userRouter");
const dotenv = require("dotenv");
dotenv.config();

const app=express();
app.use(express.json())

app.use("/api/todo",todoRoute);
app.use("/api/user",userRoute);
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})











//app.get("/",(req,res)=>{
    //res.send("Get Route is working");
//})
//app.post("/create",(req,res)=>{
  //  res.json({message:"post route is working"});
//})
//app.put("/update",(req,res)=>{
  //  res.status(200).json({message:"Put Route is working"});
//})
//app.delete("/delete",(req,res)=>{
  //  res.status(200).json({message:"Delete Route is working"});
//})