import React  from 'react'
import PlayArrow from '@mui/icons-material/PlayArrow';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import './featured.scss'
import { useEffect,useState } from 'react';
import axios from 'axios';

const Featured = ({type,setGenre}) => {
    const [content,setContent]=useState({});

    useEffect(()=>{
        const getRandomContent=async()=>{
            try{
             const res=await axios.get(`/movies/random?type=${type}`, {
                headers: {
                  token:
                    "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                },
              });
             setContent(res.data[0]);
            }catch(err){  
               console.log(err);
            }
        }
        getRandomContent();

    },[type]);

  return (
    <div className='Featured'>
       {type && (
       <div className="category">
        <span>{type==='movies'?'Movies':'Series'}</span>
        <select name='genre' id='genre' onChange={(e) => setGenre(e.target.value)}>
            <option selected disabled>Genre</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="animation">Animation</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="documentary">Documentary</option>
            <option value="drama">Drama</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="musical">Musical</option>
            <option value="mystery">Mystery</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
        </select>
       </div>
       )}
       <img src={content.img} alt='missing'/>
  
    <div className='info'>
        <img src='content.imgTitle' alt=''/>
    
        <span className='desc'>
      {content.desc}
    </span>
     
    <div className='buttons'>
        <button className='play'>
            <PlayArrow/>
            <span>Play</span>
        </button>
        <button className='more'>
            <InfoOutlined/>
            <span>Info</span>
        </button>
    </div>
   </div>
 </div>
  );
}

export default Featured;