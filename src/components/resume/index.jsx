import React from 'react'

import './resume.scss'
import img1 from '../../assets/icons/html.svg'
import img2 from '../../assets/icons/css.svg'
import img3 from '../../assets/icons/sass.svg'
import img4 from '../../assets/icons/tailwind2.svg'
import img5 from '../../assets/icons/js.svg'
import img6 from '../../assets/icons/ts1.svg'
import img7 from '../../assets/icons/react1.svg'
import img8 from '../../assets/icons/next.png'
import img9 from '../../assets/icons/git.svg'


const Resume = () => {
  return (
    <section className='resume'>
      <div className="resume__wrapper container">
        <p>Resume</p>
        <h1>Skills</h1>
        <div className="resume__skills">
          <div className="resume__skill">
            <img src={img1} alt="" />
          </div>
          <div className="resume__skill">
            <img src={img2} alt="" />
          </div>
          <div className="resume__skill">
            <img src={img3} alt="" />
          </div>
          <div className="resume__skill">
            <img src={img4} alt="" />
          </div>
          <div className="resume__skill">
            <img src={img5} alt="" />
          </div>
          <div className="resume__skill">
            <img src={img6} alt="" />
          </div>
          <div className="resume__skill">
            <img src={img7} alt="" />
          </div>
          <div className="resume__skill">
            <img src={img8} alt="" />
          </div>
          <div className="resume__skill">
            <img src={img9} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume