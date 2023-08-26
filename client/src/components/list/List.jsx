import React,{useRef, useState} from 'react'
import {ArrowBackIosOutlined ,ArrowForwardIosOutlined} from '@mui/icons-material';
import ListItems from '../listItems/ListItems';
import './list.scss'

const List = ({list}) => {
  const [isMoved,setIsMoved]=useState(false);
  const [sliderNumber,setSliderNumber]=useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

  const listRef=useRef();
  
  const handleClick=(direction)=>{

    setIsMoved(true);

    let distance=listRef.current.getBoundingClientRect().x-50;

    if(direction==='left'&& sliderNumber>0){
      setSliderNumber(sliderNumber-1);
      listRef.current.style.transform=`translateX(${230+distance}px)`;
    }

    if(direction==='right'&& sliderNumber<10-clickLimit){
      setSliderNumber(sliderNumber+1);
      listRef.current.style.transform=`translateX(${-230+distance}px)`;
    }

  }
  return (
    <div className='list'>
        <span className='listTitle'>{list.title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick('left')} style={{display:!isMoved && 'none'}}/>
            <div className='container' ref={listRef}>
              {list.content.map((item,i)=>{
                 <ListItems index={i} item={item}/>
              })}
            
            
             </div>
             <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick('right')}/>

</div>
</div>
  )};


  export default List;

