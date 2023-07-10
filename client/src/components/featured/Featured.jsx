import React from 'react'
import PlayArrow from '@mui/icons-material/PlayArrow';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import './featured.scss'

const Featured = ({type}) => {
  return (
    <div className='Featured'>
       {type && (
       <div className="category">
        <span>{type==='movies'?'Movies':'Series'}</span>
        <select name='genre' id='genre'>
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
       </div>)}
       <img src='https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80' alt='missing'/>
  
    <div className='info'>
        <img src='https://www.seekpng.com/png/full/391-3912218_world-war-z-world-war-z-png.png' alt=''/>
    
        <span className='desc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam enim consectetur sint adipisci perferendis! Esse aliquid explicabo, ullam possimus vero labore numquam nobis dolores quaerat asperiores porro unde illo.
    </span>
     
    <div className='buttons'>
        <button className='play'>
            <PlayArrow/>
            <span>Play</span>
        </button>
        <button className='more'>
            <InfoOutlined/>
            <span>More</span>
        </button>
    </div>

    </div>
 
 

    </div>
  )
}

export default Featured;