import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">

        <div className="about__box">
            <i className='bx bx-award about__icon'></i>
            <h3 className="about__title">Exprience</h3>
            <spam className="about__subtitle">2 Years Working</spam>
        </div>
        
        <div className="about__box">
            <i className='bx bx-briefcase-alt about__icon' ></i>
            <h3 className="about__title">Completed</h3>
            <spam className="about__subtitle">10 + Projects</spam>
        </div>

        <div className="about__box">
            <i className='bx bx-support about__icon' ></i>
            <h3 className="about__title">Support</h3>
            <spam className="about__subtitle">Online 24/7</spam>
        </div>

    </div>
    
  )
}

export default Info