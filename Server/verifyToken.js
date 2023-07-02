import jwt from 'jsonwebtoken';

const verify =(req,res,next)=>{
    const authHeader=req.headers.token;
    if(authHeader){
        const token=authHeader.split(" ")[1];

        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err){  res.status(401).json("Token is not Valid!"); }
         req.user=user;
         next();   
        });

    }
    else{
        res.status(401).json("You are Not Authenticated");
    }
};

export default verify;