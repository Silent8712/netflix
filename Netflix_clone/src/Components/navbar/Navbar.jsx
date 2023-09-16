import './navbar.scss'
import Netflix from '../../assets/Netflix_2015_logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pfp from '../../assets/anime pfp.jpg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRef, useState } from 'react';
const Navbar = ({ type }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  const [isSeries, setIsSeries] = useState(false)
  const [isMovie, setIsMovie] = useState(false)

  return (
    <div className={isScrolled ? 'Navbar scrolled' : '  Navbar'}>
      <div className="Container">
        <div className="Left">
          <img src={Netflix} alt="n_logo" />
          <span>Homepage</span>
          <div className="Series_container">
          <span className='Series' onClick={() => setIsSeries(!isSeries)}> Series</span>
          <div className="Series_select">
          {isSeries && (
              <div className="Category" >
                <select name="genre" id="genre">
                  <option>Genre</option>
                  <option value='comedy'>Comedy</option>
                  <option value='action'>Action</option>
                  <option value='horror'>Horror</option>
                  <option value='romance'>Romance</option>
                  <option value='documentary'>Documentary</option>
                  <option value='thriller'>Thriller</option>
                  <option value='western'>Western</option>
                  <option value='family'>Family</option>
                  <option value='animation'>Animation</option>
                  <option value='crime'>Crime</option>
                  <option value='drama'>Drama</option>
                  <option value='sci-fi'>Sci-Fi</option>
                  <option value='history'>Historical</option>
                  <option value='fantasy'>Fantasy</option>
                </select>
              </div>
            )}
            </div>
            </div>
            <div className="Movies_container">
            <span className='Genre movies' onClick={() => setIsMovie(!isMovie)}>Movies</span>
            <div className="movies_select">
          {isMovie && (
              <div className="Category" >
                <select name="genre" id="genre">
                  <option>Genre</option>
                  <option value='comedy'>Comedy</option>
                  <option value='action'>Action</option>
                  <option value='horror'>Horror</option>
                  <option value='romance'>Romance</option>
                  <option value='documentary'>Documentary</option>
                  <option value='thriller'>Thriller</option>
                  <option value='western'>Western</option>
                  <option value='family'>Family</option>
                  <option value='animation'>Animation</option>
                  <option value='crime'>Crime</option>
                  <option value='drama'>Drama</option>
                  <option value='sci-fi'>Sci-Fi</option>
                  <option value='history'>Historical</option>
                  <option value='fantasy'>Fantasy</option>
                </select>
              </div>
            )}
            </div>
            </div>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="Right">
          <SearchIcon className='icon' />
          <span>KID</span>
          <NotificationsIcon className='icon' />
          <img src={pfp} alt="n_logo" />
          <div className="profile">
            <KeyboardArrowDownIcon className='icon' />
            <div className="Options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
