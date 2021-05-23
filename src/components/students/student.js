import React from 'react';

const Student = (props) => {
  let HouseColor;
  if (props.house === "Gryffindor") {
    HouseColor = "#7F0909"
  } else if (props.house === "Slytherin") {
    HouseColor = "#2a623d"
  } else if (props.house === "Ravenclaw") {
    HouseColor = '#222f5b'
  } else {
    HouseColor = "#ecb939"
  }
  return (
    <li className="course media group" style={{borderTop: `4px solid ${HouseColor}`}}>
      {/* <img className="course-img" src={props.img} alt="course" /> */}
      {/* <div> */}
        <h3>{props.name}</h3>
        <p><strong>Species</strong>: {props.species}</p>
        <p><strong>Gender</strong>: {props.gender}</p>
        <p><strong>House</strong>: {props.house}</p>
      {/* </div> */}
    </li>
  )
};

export default Student;