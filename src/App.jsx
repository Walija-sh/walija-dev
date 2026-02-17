import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { CursorContextProvider } from './components/CursorContext'
import Cursor from './components/Cursor'

const App = () => {
  // first handle all the layout, text animations at end, loader,custom cursor, gradients
  return (

    <main className='bg-black-2 text-white min-h-screen'>
      <CursorContextProvider>
<Cursor/>
      <Hero/>

      <About/>

      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
      </CursorContextProvider>
    </main>

  )
}

export default App