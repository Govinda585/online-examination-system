import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Exam from "./Exam";

export default class Admin extends React.Component {
  // function for add button
  onHandleAdd = (e) => {
    e.preventDefault();
    window.alert("Added successfully");
  };
  render() {
    return (
      <>
        <Tabs defaultActiveKey="exam">
          <Tab title="Exam" eventKey="exam">
            <Exam onHandleAdd={this.onHandleAdd} />
          </Tab>
          <Tab title="User" eventKey="user">
            User
          </Tab>
          <Tab title="Logout" eventKey="logout">
            Logout
          </Tab>
        </Tabs>
      </>
    );
  }
}
