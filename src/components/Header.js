import React from 'react';
import {NavLink} from 'react-router-dom'


// use activeStyle and activeStyleName to assign a special classname to
// the active nav link or change styling inline

const Header = () => (
  <header>
    <h5>Hogwarts Wizarding School</h5>
    <ul className="main-nav">
      <li>
        <NavLink exact to="/"><i className="material-icons">dashboard</i>
        Dashboard
        </NavLink>
      </li>
      <li><NavLink to="/students"><i className="material-icons">school</i>Students</NavLink></li>
      <li><NavLink to="/teachers"><i className="material-icons">person</i>Teachers</NavLink></li>
      <li><NavLink to="/courses"><i className="material-icons">history_edu</i>Courses</NavLink></li>
    </ul>
  </header>
);

export default Header;