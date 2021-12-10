import "./App.less";
import "antd/dist/antd.less";
import "./index.less";
import React from "react";
import Container from "./component/Container/index.js";
import FormLogin from "./component/FormLogin";
import { Switch, Route } from "react-router-dom";
import HomePage from "./component/page/homePage";
import Profile from "./component/page/profile";
import PrivateRoute from "./component/routes/privateRoute";
import CovidReport from "./component/page/covidReport";
import Page404 from "./component/page/page404";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Container>
          <FormLogin />
        </Container>
      </Route>
      <PrivateRoute component={HomePage} path="/homepage" />
      <PrivateRoute component={Profile} path="/profile" />
      <PrivateRoute component={CovidReport} path="/covid19" />

      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
}

export default App;
