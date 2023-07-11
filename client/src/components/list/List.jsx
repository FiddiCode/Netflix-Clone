import React,{useRef, useState} from 'react'
import {ArrowBackIosOutlined ,ArrowForwardIosOutlined} from '@mui/icons-material';
import ListItems from '../listItems/ListItems';
import './list.scss'

const List = () => {
  const [isMoved,setIsMoved]=useState(false);
  const [sliderNumber,setSliderNumber]=useState(0);
  const listRef=useRef();
  
  const handleClick=(direction)=>{
    setIsMoved(true);
    let distance=listRef.current.getBoundingClientRect().x-50;
    if(direction==='left'&& sliderNumber>0){
      setSliderNumber(sliderNumber-1);
      listRef.current.style.transform=`translateX(${230+distance}px)`;
    }
    if(direction==='right'&& sliderNumber<5){
      setSliderNumber(sliderNumber+1);
      listRef.current.style.transform=`translateX(${-230+distance}px)`;
    }

  }
  return (
    <div className='list'>
        <span className='listTitle'>Continue to Watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick('left')} style={{display:!isMoved && 'none'}}/>
            <div className='container' ref={listRef}>
             <ListItems index={0}/>
             <ListItems index={1}/>
             <ListItems index={2}/>
             <ListItems index={3}/>
             <ListItems index={4}/>
             <ListItems index={5}/>
             <ListItems index={6}/>
             <ListItems index={7}/>
             <ListItems index={8}/>
             <ListItems index={9}/>
            

             <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick('right')}/>
</div>
</div>
</div>
  )};


  export default List;

