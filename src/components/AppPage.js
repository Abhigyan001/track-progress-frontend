import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


const AppPage = () => (
  <div className="App-page">
    <Router>
      <Header />
      <div className="App-content">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/addData">
            <AddDataPage />
          </Route>
          <Route exact path="/activities">
            <ActivitiesPage />
          </Route>
          <Route exact path="/progress">
            <ProgressPage />
          </Route>
          <Route exact path="/more">
            <MorePage />
          </Route>
        </Switch>
      </div>

      <Navbar />
    </Router>
  </div>
);

export default AppPage;
