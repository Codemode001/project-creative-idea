import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Signup from "./pages/signup";
import LoginPage from "./pages/login";
import Dashboard from "./pages/homepage";
import profilePage from "./pages/profile";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={LoginPage} />
        <Route exact path="/" component={profilePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
