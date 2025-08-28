//  npx nodemon index .\js
// http://localhost:4000/create
// npm i express
// npm i dovenv

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const { type } = require("os");
require('dotenv').config()//npm dotenv
const PORT = 4000;


app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL).then(()=>{
  console.log("DB connected");
}).catch((error)=>{
  console.log(error);
})

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    trim:true,
    unique:true
  },
  age:{
    type:Number,
    min:0,
    max:125
  },
  available:{
    type:Boolean,
    default:false
  },
  arr:[
    {
      type:String
    }
  ]
})

const User = mongoose.model("User",userSchema);//create a model(class) called User using
//  the userSchema in mongo db which help to curd operation

app.get("/create",async (req,res)=>{
  try {
    let newUser = await User.create({ //Creates a new user in your MongoDB after click on /create
      name:"neha",
      email:"sharma02@gmail.com",
      arr:["hii","hello"]
    })
    console.log(newUser);
    res.json({newUser})
  } catch (error) {
    res.status(400).json({message:error.message});
    console.log(error);
  }
})

app.get("/users",async (req,res)=>{
  try {
    let users = await User.find(); // find all users
    res.status(200).json({users})
  } catch (error) {
    console.log(error);
    res.status(400).json({message:error.message});
  }
})

app.get("/update/:id",async (req,res)=>{
  try {
    const id = req.params.id;//gets the user ID from the URL.
    // User.updateOne->find and update just one user
    await User.updateOne({_id:id,name:"Dikshant sharma"}) //find a user by _id
    // and update the name to "neha sharma"
    res.status(200).json({message:"user updated successfully"})
  } catch (error) {
    res.status(400).json({message:error.message});
    console.log(error);
  }
})
app.listen(PORT,()=>{
  console.log(`live on ${PORT}`);
})






