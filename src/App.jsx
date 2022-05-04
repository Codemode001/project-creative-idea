import React from "react";
import Navbar from "./pages/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./pages/signup";
import LoginPage from "./pages/login";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/navbar" component={Navbar} />
        <Route path="/" component={Signup} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
