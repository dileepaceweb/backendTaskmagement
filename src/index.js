const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
const route=require("./routes/route");

const PORT=process.env.PORT||4000;

mongoose.connect(process.env.MongoURL||"mongodb+srv://dileepkm:L3cuCdGwQQWTF3Hs@cluster0.iqkms8u.mongodb.net/inventoryManage")
.then(()=>{
    console.log("Mongodb is Successfully connected")
})
.catch((error)=>{
    console.error("MongoDb connection failed",error);
})
app.use("/",route);
app.listen(PORT,()=>{
    console.log("Server is Connected on  Port no:",PORT);
})