import React, { useEffect, useState } from "react";
import { projectsData, projectNav } from "./ProjectData";
import WorkItems from "./WorkItems";

const AllWork = () => {
  const [item, setItem] = useState({ name: "all" });
  const [project, setProject] = useState([]);
  const [activeNav, setActiveNav] = useState(0);

  // for state change show I will use Effect here

  useEffect(() => {
    if (item.name === "all") {
      // here i am setting my Project data inside this state to all in starting
      setProject(projectsData);
    } else {
      // here I am creating new array for the category that I want
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      // now i am setting new array(newProjects) inside the setProject
      setProject(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActiveNav(index);
  };

  return (
    <>
      <div className="work__filters">
        {projectNav.map((item, index) => {
          return (
            // created an function that will change data
            <span
              onClick={(e, index) => handleClick(e, index)}
              // here I will check first set give className
              className={`${
                activeNav === index ? "active__nav-work" : ""
              } work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid ">
        {project.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default AllWork;
