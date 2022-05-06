import React from "react";
import Navbar from "./pages/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
        <Route exact path="/profile" component={profilePage} />
        <Route exact path="/navbar" component={Navbar} />
        <Route path="/" component={Signup} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
