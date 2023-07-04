import express from 'express'
import User from '../models/User.js'
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

const router= new express.Router();

//REGISTER
router.post('/register', async (req,res)=>{
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password ,process.env.SECRET_KEY).toString()
    });
  
    try{
    const user= await newUser.save(); 
    res.status(201).json(user); 
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}) 
  
//Login

router.post('/login',async (req,res)=>{  
    try{
        const user= await User.findOne({email:req.body.email});
        !user && res.status(401).json("User not Found");
        
        const bytes=CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        console.log(bytes);
        const orignalPassword= bytes.toString(CryptoJS.enc.Utf8);
        
        orignalPassword !==req.body.password && res.status(401).json("Wrong Password");

        const accessToken =jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.SECRET_KEY,{expiresIn :"1hr"} );

        const {password ,...info}=user._doc;

        res.status(200).json({...info,accessToken});
  

    }catch(err){
        res.status(500).json(err);
    }
})

export default router;