import React from 'react'
import Hero from '../../components/hero'
import About from '../../components/about'
import Portfolio from '../../components/portfolio'
import Resume from '../../components/resume'
import Contact from '../../components/contact'

const Home = () => {
  return (
    <main>
        <Hero />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
    </main>
  )
}

export default Home