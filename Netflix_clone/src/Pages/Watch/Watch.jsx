import './watch.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Watch = () => {
  return (
    <div className='watch'>
      <div className="back">
        <ArrowBackIcon className='backIcon' />
      </div>
      <video className='video' autoPlay progress controls src='https://assets.ign.com/videos/zencoder/2023/05/08/1920/86efb0ec-a836-4b57-a038-b4cda43e6a04-1683553744.mp4' />
    </div>
  )
}

export default Watch

