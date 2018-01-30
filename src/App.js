import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import NotFoundPage from './components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={LoginPage} exact={true} />
      <Route path="/signup" component={SignupPage}/>
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
