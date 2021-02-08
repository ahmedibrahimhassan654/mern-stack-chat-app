
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import DashboardPage from "./Pages/DashbordPage";
import IndexPage from "./Pages/indexPage";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" component={IndexPage} exact /> */}
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/dashboard" component={DashboardPage} exact />
      </Switch>
    </BrowserRouter>
  );

}

export default App;
