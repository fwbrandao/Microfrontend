import React from "react";
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const createClassName = createGenerateClassName({
  productionPrefix: "co",
})

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={createClassName}>
        <div>
          <Header />
          <hr />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
}