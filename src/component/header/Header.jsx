import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav , setActiveNav] = useState('#home');

  // change background header
  window.addEventListener('scroll',function(){
    const changeHeader = document.querySelector(".header");
    // when the scroll view port hight is more then it will add box shadow
    if (this.scrollY >= 80) {changeHeader.classList.add("show-header")}
    else{
      changeHeader.classList.remove("show-header")
    }
  })

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Jitendra
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          
          <ul className="nav__list grid">
            
            <li className="nav__item">
              <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav === '#home'? "nav__link active-link": "nav__link" }>
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about'? "nav__link active-link": "nav__link" }>
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav === '#skills'? "nav__link active-link": "nav__link" }>
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services'? "nav__link active-link": "nav__link" }>
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio'? "nav__link active-link": "nav__link" }>
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact'? "nav__link active-link": "nav__link" }>
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
