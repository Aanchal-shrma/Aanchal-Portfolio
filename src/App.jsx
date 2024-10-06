import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

import Contact from './Components/Contact'
import AOS from 'aos';
import "aos/dist/aos.css";



function App() {
  useEffect(() => {
    AOS.init();
  })
  const [count, setCount] = useState(0)

  return (
 <>
 <Navbar />
  <Outlet />
  <Contact />
 </>
  )
}

export default App
