import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const[toggleState, setToggleState] = useState(1);

  const toggleTab = (index)=>{
    setToggleState(index);
  }
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {/* <div className="qualification__button qualification__active button--flex"> */}
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>toggleTab(1)} >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>toggleTab(2)} >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* =============== Qualification Content Number 1 ============== */}
          <div className={toggleState ===1 ? "qualification__content qualification__content-active " : "qualification__content"}>
            {/* =============== Qualification 1 ============== */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* =============== Qualification 2 ============== */}

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">
                  spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - Present
                </div>
              </div>
            </div>

            {/* =============== Qualification 3 ============== */}

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">
                  spain - Institute
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* =============== Qualification 4 ============== */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Ux expert</h3>
                <span className="qualification__subtitle">
                  spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>
          </div>

          {/* =============== Qualification Content Number 2 ============== */}

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            {/* =============== Qualification 1 ============== */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Ux expert</h3>
                <span className="qualification__subtitle">
                  spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>

            {/* =============== Qualification 2 ============== */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Product Designer</h3>
                <span className="qualification__subtitle">Microsoft-spain</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* =============== Qualification 3 ============== */}

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX designer</h3>
                <span className="qualification__subtitle">Apple-spain</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - Present
                </div>
              </div>
            </div>

            {/* =============== Qualification 3 ============== */}

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Desiner</h3>
                <span className="qualification__subtitle">Figma-spain </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
