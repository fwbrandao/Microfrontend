import React, { lazy, Suspense } from "react";
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const createClassName = createGenerateClassName({
  productionPrefix: "co",
})

// Only loads the component if needed
const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={createClassName}>
        <div>
          <Header />
          <hr />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path='/auth' component={AuthLazy} />
              <Route path='/' component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
}