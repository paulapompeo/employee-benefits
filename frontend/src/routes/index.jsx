import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Companies from '../pages/Companies';
// import Employees from '../pages/Employees';

const Routes = () => {
  return (
    <Switch>
      <Route path="/companies" exact component={Companies} />
      {/* <Route path="/companies/:company/employees" exact component={Employees} /> */}
    </Switch>
  );
};

export default Routes;
