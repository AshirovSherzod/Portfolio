import React, { useRef } from 'react'
import Hero from '../../components/hero'
import About from '../../components/about'
import Portfolio from '../../components/portfolio'
import Resume from '../../components/resume'
import Contact from '../../components/contact'

const Home = ({ aboutRef, portfolioRef}) => {

  return (
    <main>
      <Hero />
      <About aboutRef={aboutRef} />
      <Portfolio portfolioRef={portfolioRef}/>
      <Resume />
      <Contact />
    </main>
  )
}

export default Home