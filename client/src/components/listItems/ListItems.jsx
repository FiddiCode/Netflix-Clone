import React, { useState } from 'react'
import './listItems.scss'
import { PlayArrow, ThumbDownOffAltOutlined, ThumbUpAltOutlined,Add } from '@mui/icons-material';
import video from './1712075980.mp4'

const ListItems = ({index}) => {
  const [isHovered,setIsHovered]=useState(false);

  //  const trailer='https://vod-progressive.akamaized.net/exp=1689076303~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F203%2F16%2F401018575%2F1712075980.mp4~hmac=0a2b8297f919a84b3e9d38162b22a8c72042f7758a2b1af83b080fc332fc3a44/vimeo-prod-skyfire-std-us/01/203/16/401018575/1712075980.mp4';

  return (
 <div className='listItems' 
 style={{left:isHovered && index*255-50 +index*2.5 }} 
 onMouseEnter={()=>setIsHovered(true)}  
 onMouseLeave={()=>setIsHovered(false)}>

      <img  src='https://th.bing.com/th/id/OIP.bwlWhMUt-oDRsjAdZ0C1VQHaEK?pid=ImgDet&rs=1'  alt='missing'/>
  {isHovered && (<>
        <video src={video} autoPlay={true} loop />
    <div className="iteminfo">
          <div className="icons">
                <PlayArrow className='icon'/>
                <Add className='icon'/>
                <ThumbUpAltOutlined className='icon'/>
                <ThumbDownOffAltOutlined className='icon'/>
          </div>
            <div className="itemInfoTop">
                   <span>1hour 14min</span>
                   <span className='limit'>+16</span>
                   <span>1999</span>
            </div>
            <div className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, perspiciatis. 
                     Architecto  enim odit, recusandae non quae cum possimus numquam. Facere alias ad 
            </div>
                <div className='genre'>Action</div>
    </div>
 </>)}

  </div>
  
  )
}

export default ListItems;