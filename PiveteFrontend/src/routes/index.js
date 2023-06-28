import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Dependencies from '../pages/Dependencies';
import Profile from '../pages/Profile';
import Flavors from '../pages/Flavors';
import FlavorCreation from '../pages/FlavorCreation';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import About from '../pages/About';
import Aboutus from '../pages/Aboutus'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />

        <Route path="/dependencies" component={Dependencies}/>
        <Route path="/about" component={About}/>
        <Route path="/aboutus" component={Aboutus}/>
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password" component={ResetPassword} />

        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />
        <Route path="/flavors" component={Flavors} isPrivate />
        <Route path="/flavoradd" component={FlavorCreation} isPrivate />
      </Switch>
    </>
  );
};

export default Routes;
