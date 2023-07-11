import React from 'react'
import './watch.scss'
import watchVideo from '../../components/listItems/1712075980.mp4'
import { ArrowBackOutlined } from '@mui/icons-material'

const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video className='video' autoPlay={true} progress controls src={watchVideo}/>
    </div>
  )
}


export default Watch;