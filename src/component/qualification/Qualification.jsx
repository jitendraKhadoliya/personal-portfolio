import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {/* <div className="qualification__button qualification__active button--flex"> */}
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* =============== Qualification Content Number 1 ============== */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active "
                : "qualification__content"
            }
          >
            {/* =============== Qualification 1 ============== */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  B K Birla Institute of Engineering & Technology
                </h3>
                <span className="qualification__subtitle">
                  computer science and engineering - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2016 - 2020
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
                <h3 className="qualification__title">
                  Learning by doing, creating by learning
                  {/* B K Birla Institute of Engineering & Technology */}
                </h3>
                <span className="qualification__subtitle">
                  Web development - Online + Institute
                  {/* computer science and engineering - Institute */}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2018 - Present
                </div>
              </div>
            </div>

            {/* =============== Qualification 3 ============== */}

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Parishkar Children Academy sr. sec. school
                </h3>
                <span className="qualification__subtitle">
                  Primary to Higher Secondary Education - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2004 - 2016
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* =============== Qualification 4 For Future ============== */}
          </div>

          {/* =============== Experience Content Number 2 ============== */}

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >

            {/* =============== Qualification For Future ============== */}

            {/* =============== Qualification 6 ============== */}


            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  React JS Developer
                </h3>
                <span className="qualification__subtitle">
                  Fiducia Services Pvt. Ltd. · Full-time , Mohali . India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>  Jul 2023 - Present
                </div>
              </div>
            </div>


            {/* =============== Qualification 5 ============== */}

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer </h3>
                <span className="qualification__subtitle">Hexfork · Full-time Birmingham, England, United Kingdom · Remote </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> Jan 2023 - Jul 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
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
                <h3 className="qualification__title">
                  ENTREPRENEURIAL VENTURE PARTNER </h3>
                <span className="qualification__subtitle">Volc - EV Brand</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> Sep 2021 - Jul 2022
                </div>
              </div>
            </div>

            {/* =============== Qualification 3 ============== */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Open Source Contributions, Gig work</h3>
                <span className="qualification__subtitle">Web App JavaScript Related Mostly </span>
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
                <h3 className="qualification__title">
                  Java training program
                </h3>
                <span className="qualification__subtitle">
                  APTRON SOLUTIONS PVT LTD · Internship
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> Jun 2019 - Jul 2019
                </div>
              </div>
            </div>


            {/* =============== Qualification 1 ============== */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Python, IoT and Raspberry Pi, Machine Learning and Django</h3>
                <span className="qualification__subtitle">TechieNest · Apprenticeship</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> Sep 2018 - Nov 2018
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
