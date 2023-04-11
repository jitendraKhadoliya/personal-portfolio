import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      {item.image ? (
        <img src={item.image} alt="project img" className="work__img" />
      ) : (
        <img
          src={item.gif}
          alt="project img"
          className="work__img"
          style={{ maxHeight: "225px" }}
        />
      )}
      <h3 className="work__title">{item.title}</h3>
      <a
        href={item.link}
        className="work__button"
        target={"_blank"}
        rel="noreferrer"
      >
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
