import React, { ReactElement } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Main } from "./styles";
import Home from "../pages/Home/Home";

const history = createBrowserHistory();
const AppRouter = (): ReactElement => {
  return (
    <Router history={history}>
      <React.Fragment>
        <Main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Main>
      </React.Fragment>
    </Router>
  );
};

export default AppRouter;
