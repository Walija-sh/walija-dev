import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { CursorContextProvider } from './components/CursorContext'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import PageLoader from './components/PageLoader'
import { AnimatePresence } from 'motion/react'


const App = () => {
  // first handle all the layout, text animations at end, loader,custom cursor, gradients
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
  <>
 <>
<AnimatePresence mode="wait">
    {loading && <PageLoader key="loader" />}
  </AnimatePresence>

  <main className="bg-black-2 text-white min-h-screen">
    <CursorContextProvider>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </CursorContextProvider>
  </main>
</>
</>


  )
}

export default App