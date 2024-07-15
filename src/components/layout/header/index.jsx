import React, { useState } from 'react'

import './header.scss'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx';


const Header = ({ aboutRef, handleScroll, portfolioRef }) => {

    const [showsidebar, setShowSidebar] = useState(false)

    const handleDownload = () => {
        const fileUrl = '../../../assets/folders/SherzodAshirovResume.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Sherzod-Ashirov-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <header className='header'>
            <nav className='header__nav  container'>
                <div className={`header__nav-links ${showsidebar ? "show-sidebar" : ""}`}>
                    <NavLink to={"#"}>Home</NavLink>
                    <NavLink onClick={()=> handleScroll(aboutRef)} to={"#"}>About</NavLink>
                    <NavLink onClick={()=> handleScroll(portfolioRef)} to={"#"}>Portfolio</NavLink>
                    <NavLink to={"#"}>Resume</NavLink>
                    <NavLink to={"#"}>Contact</NavLink>
                </div>
                <button className='header__nav-download' onClick={handleDownload}>Download CV</button>
                <button onClick={() => setShowSidebar(true)} className='header__nav-burger'><RxHamburgerMenu /></button>
            </nav>
            {
                showsidebar
                    ?
                    <div onClick={() => setShowSidebar(false)} className="overlay"></div>
                    :
                    <></>

            }
        </header>
    )
}

export default Header