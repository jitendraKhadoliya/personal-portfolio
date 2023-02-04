import React from "react";
import { projectsData, projectNav } from "./ProjectData";
import WorkItems from './WorkItems';

const AllWork = () => {
  return (
    <>
      <div className="work__filters">
        {projectNav.map((item, index) => {
          return (
            <span className="work__item" key={index}>
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid ">
            {projectsData.map((item)=>{
                return(
                     <WorkItems item={item} key={item.id} />
                )
            })}
      </div>
    </>
  );
};

export default AllWork;
