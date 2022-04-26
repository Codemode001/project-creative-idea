import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Signup from "./pages/signup";
import LoginPage from "./pages/login";
import Dashboard from "./pages/homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
