import React from 'react'

import './hero.scss'
import img from '../../assets/images/hero-bgimg.png'

const Hero = () => {

  const handleDownload = () => {
    const fileUrl = '../../assets/folders/SherzodAshirovResume.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Sherzod-Ashirov-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className='hero'>
      <div className="hero__wrapper container">
        <div className="hero__left">
          <div className="hero__left-title">
            <p>Welcome to My Portfolio</p>
            <h1>Hi, I'm Sherzod Ashirov</h1>
            <h1><span>Front-End</span> Developer</h1>
          </div>
          <div className="hero__left-desc">
            <p>Conveniently customize proactive web services for leveraged without
              continualliery aggregate fricctionle ou wellies richard.</p>
          </div>
          <div className="hero__left-btns">
            <button onClick={handleDownload}>Download CV</button>
          </div>
        </div>
        <div className="hero__right">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero