import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../../modules/login/presentation/ui/Login";
import Dashboard from "../../modules/dashboard/presentation/ui/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
