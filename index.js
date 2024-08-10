
import { connect } from 'mongoose';
import express, { urlencoded } from 'express';
import cors from 'cors'; 
const app=express()

import router from "./backend/router/router.js"

connect("mongodb://127.0.0.1:27017/authentication")
.then(()=>console.log("MongoDb connected!"))

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use("/",router)


app.listen(5002,()=>console.log("Server started at port 5002"))