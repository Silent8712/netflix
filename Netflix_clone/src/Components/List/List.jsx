import './list.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItems from '../ListItems/ListItems'
import { useRef, useState } from 'react';
const List = () => {
   
   const [slideNumber, setSlideNumber] = useState(0);
   
   const listRef = useRef();

   const isClicked = (direction) => {
     let distance = listRef.current.getBoundingClientRect().x - 50
     if(direction === 'left' && slideNumber > 0){
      setSlideNumber(slideNumber - 1);
       listRef.current.style.transform = `translateX(${280 + distance}px)`
     }
     if(direction === 'right' && slideNumber < 4){
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-280 + distance}px)`
    }
   }
  return (
    <div className='list'>
     <span className="listTitle">Countinue To Watch</span>
     <div className="Wrapper">
       <ArrowBackIosIcon className='slideArrow Left' onClick={() => isClicked("left")}/>
       <div className="Container" ref={listRef}>
         <ListItems index = {0}/>
         <ListItems index = {1}/>
         <ListItems index = {2}/>
         <ListItems index = {3}/>
         <ListItems index = {4}/>
         <ListItems index = {5}/>
         <ListItems index = {6}/>
         <ListItems index = {7}/>
         <ListItems index = {8}/>
       </div>
       <ArrowForwardIosIcon className='slideArrow Right'  onClick={() => isClicked("right")}/>
     </div>
    </div>
  )
}

export default List
