import React, { useEffect, useState } from 'react'
import './listItems.scss'
import { PlayArrow, ThumbDownOffAltOutlined, ThumbUpAltOutlined,Add } from '@mui/icons-material';
import video from './1712075980.mp4'
import axios from 'axios';
import { Link } from 'react-router-dom'

const ListItems = ({index,item}) => {
  const [isHovered,setIsHovered]=useState(false);
  const [movie,setMovie]=useState({});

  useEffect(()=>{
      const getMovie= async ()=>{
            try{
                   const res= await axios.get('/movies/find/'+ item, {headers:{
                        token:
                        'bearer'+JSON.parse(localStorage.getItem("user")).accessToken,},
                      });
                    setMovie(res.data);
            }catch(err){
              console.log(err);
            }
      }
      getMovie();
  },[item]);

  return (
      <Link to={{pathname:'/watch',movie:movie}}>
 <div className='listItems' 
 style={{left:isHovered && index*255-50 +index*2.5 }} 
 onMouseEnter={()=>setIsHovered(true)}  
 onMouseLeave={()=>setIsHovered(false)}>

      <img  src={movie?.img}  alt='missing'/>
  {isHovered && (<>
        <video src={movie.trailer} autoPlay={true} loop />
    <div className="iteminfo">
          <div className="icons">
                <PlayArrow className='icon'/>
                <Add className='icon'/>
                <ThumbUpAltOutlined className='icon'/>
                <ThumbDownOffAltOutlined className='icon'/>
          </div>
            <div className="itemInfoTop">
                   <span>{movie.duration}</span>
                   <span className='limit'>+{movie.limit}</span>
                   <span>{movie.year}</span>
            </div>
            <div className='desc'>{movie.desc}
            </div>
                <div className='genre'>{movie.genre}</div>
      </div>
   </>
 )}

  </div>
  </Link>
  
  )
}

export default ListItems;