import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, About, Contact, Support, Business, Residential } from "./pages";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/business">
          <Business />
        </Route>
        <Route path="/residential">
          <Residential />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export { Router };
