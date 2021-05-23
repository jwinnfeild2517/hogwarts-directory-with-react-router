import React from 'react';
import {NavLink, Route, Redirect} from 'react-router-dom'
import StudentsContainer from './students/StudentContainer'
import {StudentsData} from '../data/students'

const StudentsSection = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Students</h2>
      <ul className="student-nav">
        <li>
          <NavLink to={`${match.url}/all`}>All Students</NavLink>
        </li>
        <li>
          <NavLink className="gryffindor" to={`${match.url}/griffindor`}>Griffindor</NavLink>
        </li>
        <li>
          <NavLink className="slytherin" to={`${match.url}/slytherin`}>Slytherin</NavLink>
        </li>
        <li>
          <NavLink className="hufflepuff" to={`${match.url}/hufflepuff`}>Hufflepuff</NavLink>
        </li>
        <li>
          <NavLink className="ravenclaw" to={`${match.url}/ravenclaw`}>Ravenclaw</NavLink>
        </li>
      </ul>
    </div>
    <Route path="/students" render={() => <Redirect to="/students/all"/>}/>
    <Route path={`${match.path}/all`} render={() => <StudentsContainer data={StudentsData}/>}/>
    <Route path={`${match.path}/griffindor`} render={ () => <StudentsContainer data={StudentsData.filter(student => student.house === 'Gryffindor' )}/>}/>
    <Route path={`${match.path}/slytherin`} render={ () => <StudentsContainer data={StudentsData.filter(student => student.house === 'Slytherin' )}/>}/>
    <Route path={`${match.path}/hufflepuff`} render={ () => <StudentsContainer data={StudentsData.filter(student => student.house === 'Hufflepuff' )}/>}/>
    <Route path={`${match.path}/ravenclaw`} render={ () => <StudentsContainer data={StudentsData.filter(student => student.house === 'Ravenclaw' )}/>}/>

  </div>
);

export default StudentsSection;