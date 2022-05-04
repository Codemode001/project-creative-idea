import React from "react";
import Navbar from "./pages/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/navbar" component={Navbar} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
