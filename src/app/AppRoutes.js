import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Theory = lazy(() => import('./teaching/Theory'));
const Lab = lazy(() => import('./teaching/Lab'));

const Student = lazy(() => import('./services/Student'));
const Department = lazy(() => import('./services/Department'));
const College = lazy(() => import('./services/College'));
const Personal = lazy(() => import('./services/Personal'));


const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route exact path="/teaching/theory" component={ Theory } />
          <Route exact path="/teaching/lab" component={ Lab } />
          <Route exact path="/services/student" component={ Student } />
          <Route exact path="/services/department" component={ Department } />
          <Route exact path="/services/college" component={ College } />
          <Route exact path="/services/personal" component={ Personal } />

          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

          <Redirect to="/dashboard" />
          
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;