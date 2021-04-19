import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./ui-components/src/libs/E-Admin/Admin";
import User from "./ui-components/src/libs/E-User/User";
import styled from "styled-components";
import ExamStart from "./ui-components/src/libs/E-User/ExamStart";
import AdminLogin from "./ui-components/src/libs/LoginAndRegister/AdminLogin";
import Register from "./ui-components/src/libs/LoginAndRegister/Register";
export default class App extends React.Component {
  render() {
    return (
      <>
        <Main>
          <Router>
            <Switch>
              <Route path="/login" exact component={AdminLogin} />
              <Route path="/sign-up" exact component={Register} />
              <Route path="/admin" exact component={Admin} />
              <Route path="/user" exact component={User} />
              <Route path="/" exact component={AdminLogin} />
              <Route path="/exam-start" exact component={ExamStart} />
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
