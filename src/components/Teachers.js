import React from 'react';
import TeacherList from '../data/teachers';

const Teachers = () => {
  let teachers = TeacherList.map((teacher) => {
    let HouseColor;
    if (teacher.house === "Gryffindor") {
      HouseColor = "#7F0909"
    } else if (teacher.house === "Slytherin") {
      HouseColor = "#2a623d"
    } else {
      HouseColor = "#ecb939"
    }
    return (
      <li className="teacher" key={teacher.id} >
        {/* <img className="teacher-img" src={teacher.img_src} alt="teacher" /> */}
        <h3 style={{backgroundColor: HouseColor}}>{teacher.name}</h3>
        <p><strong>Species:</strong> {teacher.species}</p>
        <p><strong>Gender:</strong> {teacher.gender}</p>
        <p><strong>House:</strong> {teacher.house}</p>
        <p><strong>subject:</strong> {teacher.subject}</p>
      </li>
    );
  });

  return (
    <div className="main-content">
      <h2>Teachers</h2>
      <ul className="personel-container teachers">
        {teachers}
      </ul>
    </div>
  );
}

export default Teachers;