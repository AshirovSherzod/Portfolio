import React from 'react'

import './portfolio.scss'
import img1 from '../../assets/images/project-1.png'

const Portfolio = ({ portfolioRef }) => {
  return (
    <section className='portfolio' ref={portfolioRef}>
      <div className="portfolio__wrapper container">
        <p>Portfolio</p>
        <h1>Some Of My Creative Work</h1>
        <div className="portfolio__cards">
          <div className="portfolio__card">
            <div className="portfolio__card-img">
              <img src={img1} alt="" />
            </div>
            <div className="portfolio__card-title">
              <h3>Project Seedra</h3>
              <p className='line-clamp'>An e-commerce website built in React.js</p>
            </div>
          </div>
          <div className="portfolio__card">
            <div className="portfolio__card-img">
              <img src={img1} alt="" />
            </div>
            <div className="portfolio__card-title">
              <h3>Project Seedra</h3>
              <p className='line-clamp'>An e-commerce website built in React.js</p>
            </div>
          </div>
          <div className="portfolio__card">
            <div className="portfolio__card-img">
              <img src={img1} alt="" />
            </div>
            <div className="portfolio__card-title">
              <h3>Project Seedra</h3>
              <p className='line-clamp'>An e-commerce website built in React.js</p>
            </div>
          </div>
          <div className="portfolio__card">
            <div className="portfolio__card-img">
              <img src={img1} alt="" />
            </div>
            <div className="portfolio__card-title">
              <h3>Project Seedra</h3>
              <p className='line-clamp'>An e-commerce website built in React.js</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio