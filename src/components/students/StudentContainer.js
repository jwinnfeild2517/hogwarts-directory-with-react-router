import React from 'react';
import Student from './student';
// import { StudentsData } from '../../data/students'

const StudentContainer = (props) => {

  // let Data = StudentsData
  // console.log(Data)
  // debugger

  let students = props.data.map((student) => {
    return <Student name={student.name}
                   species={student.species}
                   gender={student.gender}
                   house={student.house}
                   key={student.id} />
  });
  return (
    <div className="main-content">
      <ul className="personel-container students">
        {students}
      </ul>
    </div>
  );
}

export default StudentContainer;