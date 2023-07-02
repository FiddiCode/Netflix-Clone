import express from 'express'
const app =express();

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'

//Using the .env files
dotenv.config();


//Connecting to mongodb atlas  
mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log('Db connected Sucessfully')})
.catch((e)=>{console.log(e)});


app.use(express.json());  
app.use(authRoute);


app.listen(8800,()=>{
    console.log('Server is Running');
})