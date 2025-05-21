import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeProvider from './components/ThemeProvider'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <Header/>
      
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>

      
      <Footer/>
    </ThemeProvider>
  )
}

export default App
