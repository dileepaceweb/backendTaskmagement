const mongoose=require("mongoose");
const invertorySchema=new mongoose.Schema({

    name:{
     type:String,
     trime:true,
     required:true,
    },
    vendor:{
      type:String,
      trime:true,
      required:true
    },
    price:{
    type:Number,
    trime:true,
    required:true,
    },
    quantity:{
     type:Number,
     trime:true,
     required:true,
    },

},{timestamps:true});

module.exports=mongoose.model("inventory",invertorySchema);