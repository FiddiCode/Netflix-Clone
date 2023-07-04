import express from 'express'
const app =express();

import mongoose from 'mongoose'
import dotenv from 'dotenv'  
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import moviesRoute from './routes/movies.js'
//Using the .env files
dotenv.config(); 


//Connecting to mongodb atlas  
mongoose.connect(process.env.MONGO_URL) 
.then(()=>{console.log('Db connected Sucessfully')})
.catch((e)=>{console.log(e)});

//Using the Routes
app.use(express.json());
app.use("api/auth",authRoute);
app.use("api/users",userRoute);
app.use("api/movies",moviesRoute);


app.listen(8800,()=>{
    console.log('Server is Running');
})