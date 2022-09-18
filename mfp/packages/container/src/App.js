import React, { lazy, Suspense, useState, useEffect } from "react";
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import { createBrowserHistory } from 'history';

const createClassName = createGenerateClassName({
  productionPrefix: "co",
})

// Only loads the component if needed
const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if(isSignedIn) {
      history.push('dashboard');
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={createClassName}>
        <div>
          <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn}/>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path='/auth'>
                <AuthLazy onSignIn={() => setIsSignedIn(true)}/>
              </Route>
              <Route path='/dashboard'>
                {!isSignedIn && <Redirect to="/"/>}
                <DashboardLazy /> 
              </Route>
              <Route path='/' component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
}