
import { useEffect } from 'react'
import './App.css'
import Contact from './compopents/Contact'
import Experience from './compopents/Experience'
import Home from './compopents/Home'
import Navbar from './compopents/Navbar'
import Projects from './compopents/Projects'
import Skills from './compopents/Skills'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    Aos.init();
  },[])

  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

    </>
  )
}

export default App
