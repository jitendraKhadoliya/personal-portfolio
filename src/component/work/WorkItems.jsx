import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id} >
        <img src={item.image} alt="" />
    </div>
  )
}

export default WorkItems