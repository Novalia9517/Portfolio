import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import Nav from './components/Nav'
import BottomNav from './components/BottomNav'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Footer from './components/Footer'
import {Box, Fade, Slide} from '@mui/material'
import Skills from './components/Skills'
import Certificate from './components/Certificate'


function App() {

  return (
    <Box
      sx={{
        width : '100vw', 
        background : '#e8eaf6', 
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between',
        // position : 'relative'
        }} >
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Services/>
      <Certificate/>
      <BottomNav/>
      <Footer/>
    </Box>
  )
}

export default App
