import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
    {/* react-router-dom */}
    <Header/>
 
    <Routes className={'mb-5'}>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<Home/>}  />
      <Route path='/watchHistroy' element ={<WatchHistory/>}  />
    </Routes>
    <Footer/>
    </>
  )
}


export default App
