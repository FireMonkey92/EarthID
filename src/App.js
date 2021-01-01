import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import SolutionPage from './pages/solutionpage/solutionpage.component';
import ResourcesPage from './pages/resourcespage/resources.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import TechnoPage from './pages/technopage/techno.component';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/solution' component={SolutionPage} />
      <Route path='/resources' component={ResourcesPage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/technology' component={TechnoPage} />
    </Switch>
  );
}

export default App;
