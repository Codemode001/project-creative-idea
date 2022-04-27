import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./pages/navbar";

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
