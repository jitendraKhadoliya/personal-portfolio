import React from "react";
import "./scrollUp.css";

const ScrollUp = () => {
  // show scroll
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    // when the scroll is higher then 560 view port high
    // it will add this class
    if (this.scrollY >= 560) {
      scrollUp.classList.add("show-scroll");
    }
    // else it will remove the class
    else {
      scrollUp.classList.remove("show-scroll");
    }
  });
  return (
    <a href="#home" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
