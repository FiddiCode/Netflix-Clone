import express from 'express'
import User from '../models/User.js'
import CryptoJS from 'crypto-js';
import verify  from '../verifyToken.js';

const router= new express.Router();


//Update
router.put('/:id',verify, async (req,res)=> {
     if(req.user.id === req.params.id){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString();
        }

        try{
           const updatedUser= await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
           res.status(201).json(updatedUser);
        }catch(err){
          res.status(400).json(err);
        }
     }else{
         res.status(403).json("You can Update only Your Account");
     }
});


//Delete
//Get
//Get All
//Get User Stats 

export default router;
