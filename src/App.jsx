import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Capsules from './components/Capsules/Capsules'
import Rockets from './components/Rockets/Rockets'
import Dragons from './components/Dragons/Dragons'
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import ViewCapsule from './components/Capsules/ViewCapsule/ViewCapsule'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='Laxmikant-Frontend-Developer/' element={<Homepage />} />
        <Route path='/capsules' element={<Capsules />} />
        <Route path='/rockets' element={<Rockets />} />
        <Route path='/dragons' element={<Dragons />} />
        <Route path='/capsulse/viewcapsule/:id' element={<ViewCapsule />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
