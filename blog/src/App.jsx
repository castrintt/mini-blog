import './styles/App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// pages
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'


//components
import NavBar from './components/navbar/NavBar.jsx'
import Footer from './components/footer/Footer.jsx'
import Register from './pages/register/Register'
import Login from './pages/login/Login'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
