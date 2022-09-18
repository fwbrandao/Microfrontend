import React from "react";
import { Switch, Router, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

const createClassName = createGenerateClassName({
  productionPrefix: "au",
})

export default ({ history, onSignIn }) => {
  return <div>
    <StylesProvider generateClassName={createClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin">
            <Signin onSignIn={onSignIn}/>
          </Route>
          <Route path="/auth/signup">
          <Signup onSignIn={onSignIn}/>
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  </div>
}