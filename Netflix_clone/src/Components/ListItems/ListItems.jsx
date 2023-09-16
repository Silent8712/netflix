import './listitems.scss'
import Netflix from '../../assets/download.jpeg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import React, { useRef, useState } from 'react'

const ListItems = ({index}) => {

  const [isHovered, setIsHovered] = useState(false)
  const Trailer = "https://assets.ign.com/videos/zencoder/2023/05/08/1920/86efb0ec-a836-4b57-a038-b4cda43e6a04-1683553744.mp4"

  return (
    <div className='listItems'
     style = {{left: isHovered && (index * 275) + (index * 2.5)}}
     onMouseEnter={() => setIsHovered(true)} 
     onMouseLeave={() => setIsHovered(false)}>
      <img src={Netflix} alt="" />
     
       {isHovered && (
         <>
      <video src={Trailer} autoPlay={true} loop />
      <div className="itemInfo">
        <div className="Icons">
          <PlayArrowIcon className="icon" />
          <AddIcon className="icon" />
          <ThumbUpAltOutlinedIcon className="icon" />
          <ThumbDownOutlinedIcon className="icon" />
        </div>
        <div className="itemsTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>2022</span>
        </div>
        <div className="desc">
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique iure deleniti dolores possimus in excepturi</span>
        </div>
        <div className="Genre"> 
          <span>Action</span>
        </div>
      </div>
      </>
        )}
    </div>
  )
}

export default ListItems
