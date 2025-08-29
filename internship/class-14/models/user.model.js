const mongoose= require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
   type:String,
   require:true,
   trim:true,
},
email:{
    type:String,
    require:true,
    trim:true,
    unique:true,
},
password:{
    type:String,
    require:true,
    minLength:8,
}
},{
    timestamps:true,//updatedat and createdat 
})

const User = mongoose.model("User",userSchema);
module.exports = User; //modular(file)approach




