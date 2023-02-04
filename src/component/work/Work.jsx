import React from 'react';
import AllWork from './AllWork';
import './work.css';

const Work = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most Recent work</span>

        
        <AllWork />
    </section>
  )
}

export default Work