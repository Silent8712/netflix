import './home.scss'
import Navbar from '../../Components/navbar/Navbar.jsx'
import Featured from '../../Components/featured/Featured.jsx'
import List from '../../Components/List/List.jsx'
import Footer from '../../Components/Footer/Footer.jsx'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <Footer/>
    </div>
  )
}

export default Home
