import React from 'react';
import Course from './Course';

const CourseContainer = (props) => {
  // debugger
  let courses = props.data.map((course) => {
    return <Course title={course.title}
                   desc={course.description}
                   key={course.id} />
  });
  return (
    <div>
      <ul className="course-container">
        {courses}
      </ul>
    </div>
  );
}

export default CourseContainer;