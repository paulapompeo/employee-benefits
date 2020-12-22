import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Employees from '../pages/Employees';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/companies/:company/employees" exact component={Employees} />
    </Switch>
  );
};

export default Routes;
