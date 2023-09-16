import React from 'react'
import feature from '../../assets/230222_oppenheimer_HP.webp'
import featured from '../../assets/title-logo-orange.6ed4d9.png'
import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const Featured = () => {
  return (
    <div className='featured'>
      <img src={feature} alt="" />
      <div className="info">
        <img src={featured} alt="info" />
        <span className='desc'>
        Oppenheimer (/ˈɒpənhaɪmər/ OP-ən-hy-mər) is a 2023 epic biographical thriller film written and directed by Christopher Nolan. Based on the 2005 biography American Prometheus by Kai Bird and Martin J. Sherwin, the film chronicles the career of American theoretical physicist J. Robert Oppenheimer.
        </span>
        <div className="Buttons">
          <button className='Play'>
            <PlayArrowIcon />
            <span> Play </span>
            </button>
          <button className='More'>
            <InfoOutlinedIcon/>
            <span> Info </span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
