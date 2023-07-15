import React from 'react'
import './watch.scss'
import watchVideo from '../../components/listItems/1712075980.mp4'
import { ArrowBackOutlined } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'

const Watch = () => {
  const location=useLocation();
  const movie=location.movie;
  return (
    <div className='watch'>
      <Link to='/'>
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        </Link>
        <video className='video' autoPlay={true} progress controls src={movie.video} loop/>
    </div>
  )
}


export default Watch;