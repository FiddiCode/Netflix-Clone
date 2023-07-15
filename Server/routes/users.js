import express from 'express' 
import User from '../models/User.js'
import CryptoJS from 'crypto-js'; 
import verify  from '../verifyToken.js';

const router= new express.Router();

//Update
router.put('/:id',verify, async (req,res)=> {
     if(req.user.id === req.params.id || req.user.isAdmin){
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
router.delete('/:id',verify, async (req,res)=> {
    if(req.user.id === req.params.id || req.user.isAdmin){
       if(req.body.password){
           req.body.password = CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString();
       }

       try{
          await User.findByIdAndDelete(req.params.id);
          res.status(201).json("User has been deleted");
       }catch(err){
         res.status(400).json(err);
       }
    }else{
        res.status(403).json("You can Delete only Your Account");
    }});

//Get
router.get('/:id',async (req,res)=> {
       try{
          const user= await User.findById(req.params.id);
          res.status(201).json(user);
       }catch(err){
         res.status(400).json(err);
       } 
    });
//Get All   
router.get('/',verify, async (req,res)=> {
    const query=req.query.new;
    if(req.user.isAdmin){
       try{
          const Users=query ? await User.findById().sort({_id:-1}).limit(10):await User.findById();
          res.status(201).json(Users);
       }catch(err){
         res.status(400).json(err);
       }
    }else{
        res.status(403).json("You are not allowed");
    }});
//Get User Stats 
router.get('/stats', async (req,res)=>{
    const today= new Date();
    const lastYear= today.setFullYear(today.setFullYear()-1);
    const monthsArray=[
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];

try {
    const data= new User.aggregate({
         $project:{ 
          month:{ $month:"$createdAt"}
          },
         $group:{
          _id: "$month",
          total: {$sum:1}
         }
    }); 

} catch (error) {
  res.status(501).json(error);
}
});

export default router; 