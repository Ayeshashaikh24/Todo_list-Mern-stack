import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const username=process.env.DB_USERNAME;
const pass=process.env.DB_PASSWORD;
 const Connection=()=>{

    const url=`mongodb+srv://${username}:${pass}@cluster0.nnzsi1i.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(url,{useNewUrlParser:true})
    mongoose.connection.on('connected',()=>
    {console.log("database connection successfully")

    })
mongoose.connection.on('disconnected',()=>{
    console.log("database disconnected")
})
mongoose.connection.on('error',()=>{
    console.log("error while connecting")
})

}

export default Connection;