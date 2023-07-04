import express from 'express' 
import Movie from '../models/Movie.js' 
import verify  from '../verifyToken.js';

const router= new express.Router();  

 
//Create
router.post('/',verify, async (req,res)=> {
     if(req.user.isAdmin){
        const newMovie=new Movie(req.body);
        try{
            const savedMovie= await newMovie.save();
            res.status(201).json(savedMovie);
        }catch(err){
          res.status(400).json(err);
        }
     }else{
         res.status(403).json("You are not a Admin");
     }
});
 

//Update 
router.put('/:id',verify, async (req,res)=> {
    if(req.user.isAdmin){
       try{
         const updatedMovie= await Movie.findByIdAndUpdate(req.params.id,{$set:req.body});
          res.status(201).json("Movie has been Updated",updatedMovie);
       }catch(err){
         res.status(400).json(err);
       }
    }else{
        res.status(403).json("You are not allowed to Update a Movie");
    }});

    
//Delete
router.delete('/:id',verify, async (req,res)=> {
    if(req.user.isAdmin){
       try{
          await User.findByIdAndDelete(req.params.id);
          res.status(201).json("Movie has been deleted");
       }catch(err){
         res.status(400).json(err);
       }
    }else{
        res.status(403).json("You are not allowed to Delete a Movie");
    }});

//Get
router.get('/find/:id',async (req,res)=> {
       try{
          const movie= await Movie.findById(req.params.id);
          res.status(201).json(movie);
       }catch(err){
         res.status(400).json(err);
       } 
    });

//Get all
router.get('/find',async (req,res)=> {
    try{
        if(req.body.isAdmin){
           const movies= await Movie.find();
           res.status(201).json(movies.reverse());
        }
    }catch(err){
      res.status(400).json(err);
    } 
 });

//RandomMovie
router.get('/random',async (req,res)=> {
    const type=req.query.type;
    let movie;
    try{
        if(type==="series"){
           movie= await Movie.aggregate([
            {$match:{isSeries:true}},
            {$set:{size:1}}
           ]);
        }else{
            movie= await Movie.aggregate([
                {$match:{isSeries:false}},
                {$set:{size:1}}
               ]);
        }
       res.status(201).json(movie);
    }catch(err){
      res.status(400).json(err);
    } 
 });



export default router; 