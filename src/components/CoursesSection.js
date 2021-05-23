import React from 'react';
import {NavLink, Route, Redirect} from 'react-router-dom'
import {CoreClasses, Electives, ExtraCurricular} from '../data/courses'
import CourseContainer from './courses/CourseContainer'

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li>
          <NavLink to={`${match.url}/core`}>Core</NavLink>
          <h1>{CoreClasses.length}</h1>
        </li>
        <li>
          <NavLink to={`${match.url}/electives`}>Electives</NavLink>
          <h1>{Electives.length}</h1>
        </li>
        <li>
          <NavLink to={`${match.url}/extra`}>Extra Curricular</NavLink>
          <h1>{ExtraCurricular.length}</h1>
        </li>
      </ul>
    </div>
    <Route path="/courses" render={() => <Redirect to="/courses/core"/>}/>
    <Route path={`${match.path}/core`} render={ () => <CourseContainer data={CoreClasses}/>}/>
    <Route path={`${match.path}/electives`} render={() => <CourseContainer data={Electives}/>}/>
    <Route path={`${match.path}/extra`} render={() => <CourseContainer data={ExtraCurricular}/>}/>
  </div>
);

export default Courses;