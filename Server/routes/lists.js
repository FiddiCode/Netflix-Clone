import express from 'express' 
import List from '../models/List.js' 
import verify  from '../verifyToken.js';

const router= new express.Router();  

 
//Create
router.post('/',verify, async (req,res)=> {
     if(req.user.isAdmin){
        const newList=new List(req.body);
        try{
            const savedList= await newList.save();
            res.status(201).json(savedList);
        }catch(err){
          res.status(400).json(err);
        }
     }else{
         res.status(403).json("You are not a Admin");
     }
});
 
//Delete
router.delete('/:id',verify, async (req,res)=> {
  if(req.user.isAdmin){
     try{
        await List.findByIdAndDelete(req.params.id);
        res.status(201).json("List has been deleted");
     }catch(err){
       res.status(400).json(err);
     }
  }else{
      res.status(403).json("You are not allowed to Delete a List");
  }});


//Get
router.get('/',async (req,res)=> {
  const typeQuery=req.query.type;
  const genreQuery=req.query.genre;
  let list=[];

  try{
    if(typeQuery){ 
      if(genreQuery){
         list= await List.aggregate([
          {$sample:{size:10}},
          {$match:{type:typeQuery,genre:genreQuery}}
         ]);
      }else{
        list= await List.aggregate([
          {$sample:{size:10}},
          {$match:{type:typeQuery}}
         ]);
      }
    }else{
        list = await List.aggregate([ {$sample:{size:10}}]);
      }
     res.status(201).json(list);
  }catch(err){
    res.status(400).json(err);
  } 
});



export default router; 