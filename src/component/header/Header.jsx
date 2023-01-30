import React from "react";
import './header.css';

const Header =()=>{
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Jitendra</a>
                <div className="nav__menu">
                    <ul className="nav__list grid">

                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i class="uil uil-estate"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i class="uil uil-user"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i class="uil uil-file-alt"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i class="uil uil-briefcase-alt"></i> Services
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                            <i class="uil uil-scenery"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                            <i class="uil uil-message"></i> Contact
                            </a>
                        </li>
                    </ul> 
                    <i class="uil uil-times nav__close"></i>
                </div>

                
                <div className="nav__toggle">
                        <i class="uil uil-apps"></i>
                </div>

            </nav>
        </header>
    )
}

export default Header;