import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './Dashboard'
import StudentsSection from './StudentsSection'
import Courses from './CoursesSection'
import Teachers from './Teachers'
import NotFound from './NotFound'
import Navigation from './Header'

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/students" component={StudentsSection}/>
        <Route path="/courses" component={Courses}/>
        <Route exact path="/teachers" component={Teachers}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;