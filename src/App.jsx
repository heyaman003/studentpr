import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './Components/commonStyle.css'
import Card from './Components/Card.jsx'
import Footer from './Components/Footer.jsx'
function App() {

  return (
    <>
     <Navbar/>
    <Card/>
   <Footer/>
    </>
  )
}

export default App
