import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./ui-components/src/libs/E-Admin/Admin";
import User from "./ui-components/src/libs/E-User/User";
import Home from "./ui-components/src/libs/HomePage/Home";
import styled from "styled-components";
export default class App extends React.Component {
  render() {
    return (
      <>
        <Main>
          <Router>
            <Switch>
              <Route path="/admin" exact component={Admin} />
              <Route path="/user" exact component={User} />
              <Route path="/" exact component={Home} />
            </Switch>
          </Router>
        </Main>
      </>
    );
  }
}

const Main = styled.div`
  width: 98%;
  margin: 0 auto;
`;
