import React from 'react'

import './about.scss'
import img from '../../assets/images/about-img1.png'

const About = ({ aboutRef }) => {
  return (
    <section id='about' ref={aboutRef} className='about '>
      <div className="about__wrapper container">
        <div className="about__left">
          <img src={img} alt="" />
        </div>
        <div className="about__right">
          <p><span>About Me</span></p>
          <div className="about__right-title">
            <h2>Sherzod Ashirov</h2>
            <p>A motivated and detail-oriented Junior React.js developer with a passion for building
              dynamic and responsive web applications. Experienced in modern JavaScript
              frameworks and libraries, especially React.js and state management
              tools. Committed to collaborating in a fast-paced team environment, constantly
              learning new technologies, and providing high-quality, user-focused solutions.</p>
          </div>
          <ul className="about__right-info">
            <li><span>Phone :</span> +998-91-009-31-04</li>
            <li><span>Study :</span> Najot Ta'lim</li>
            <li><span>GitHub :</span> <a target='_blank' href="https://github.com/AshirovSherzod">AshirovSherzod</a></li>
            <li><span>Location :</span> Uzbekistan Tashkent sh</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About