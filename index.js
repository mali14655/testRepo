import express from "express";
import dotenv from "dotenv";
import { connectToMongoDB } from "./connection.js";


dotenv.config();
const app =express();
const PORT=process.env.PORT;

console.log(connectToMongoDB(process.env.DB_URL)
.then(()=>{
    console.log("promise resolved")
})
.catch((err)=>{
    console.log("error ocuur ",err);
})
)

app.get("/",(req,res)=>{
    res.send("Server is Serving !")
})

app.listen(PORT,()=>{
    console.log(`Sever Started at Port ${PORT} !`);
})