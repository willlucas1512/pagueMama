import React from "react";
import { Switch, Route, BrowserRouter, withRouter } from "react-router-dom";
import Chart from "../Chart";
import Deposits from "../Deposits";
import Orders from "../Orders";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Chart} />
        <Route exact path="/depositos" component={Deposits} />
        <Route exact path="/pedidos" component={Orders} />
      </Switch>
    </BrowserRouter>
  );
};

export default withRouter(Routes);
