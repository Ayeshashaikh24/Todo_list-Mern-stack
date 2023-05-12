import express from "express";
import Connection from "./database/db.js";
import bodyParser from "body-parser";
import cors from 'cors'
import route from "./routes/routes.js";

const app =express();

app.use(cors());
app.use(bodyParser.json({extended:true}))

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',route);

const Port=8000;
Connection();
app.listen(Port,()=>console.log(`your server is running on port ${Port}`
))