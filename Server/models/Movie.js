import mongoose from "mongoose";

const movieSchema= new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    desc:{type:String,required:true,unique:true},
    img:{type:String},
    imgTitle:{type:String},
    imgSm:{type:String},
    trailer:{type:String},
    video:{type:String},
    year:{type:String},
    limit:{type:String},
    genre:{type:String},
    isSeries  :{type:Boolean,default:false}
},{timestamps:true});

const Movie=new mongoose.model("Movie",movieSchema);

export default Movie;