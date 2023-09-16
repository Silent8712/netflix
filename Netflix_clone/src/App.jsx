import Navbar from './Components/navbar/Navbar'
import './app.scss'
import Home from './Pages/Home/Home.jsx'
import Watch from './Pages/Watch/Watch.jsx'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'

const App = () => {
  return (
    <div className='App'>
        <div className="Container">
           <Home />
        </div>
    </div>
  )
}

export default App
