import './styles/App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// pages
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
