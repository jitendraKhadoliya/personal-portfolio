import React from 'react'
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
import './skills.css';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Slills</h2>
        <span className="section__subtitle">My Technical Skills</span>

        <div className="skills__container container grid">
            <FrontEnd />
            <BackEnd />
        </div>

    </section>
  )
}

export default Skills