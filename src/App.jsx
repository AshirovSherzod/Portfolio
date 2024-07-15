import { useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

function App() {
  const aboutRef = useRef(null)
  const portfolioRef = useRef(null)
  const resumeRef = useRef(null)


  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header handleScroll={handleScroll} aboutRef={aboutRef} portfolioRef={portfolioRef} />
      <Routes>
        <Route path='/' element={<Home aboutRef={aboutRef} portfolioRef={portfolioRef} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
