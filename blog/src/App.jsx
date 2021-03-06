//css
import './styles/App.css'

//react router dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//firebase
import { onAuthStateChanged } from 'firebase/auth'

//hooks 
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

// pages
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Dashboard from './pages/dashboard/Dashboard'
import CreatePost from './pages/createpost/CreatePost'
import Search from './pages/search/Search'
import Post from './pages/post/Post'

//components
import NavBar from './components/navbar/NavBar.jsx'
import Footer from './components/footer/Footer.jsx'
import Register from './pages/register/Register'
import Login from './pages/login/Login'

//context
import { AuthProvider } from './context/AuthContext'


function App() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }


  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/search' element={<Search />} />
              <Route path='/posts/:id' element={<Post />} />

              <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
              <Route path='/post/create' element={user ? <CreatePost /> : <Navigate to='/login' />} />
              <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/login' />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
