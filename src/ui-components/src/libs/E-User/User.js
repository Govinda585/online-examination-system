import axios from "axios";
import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import EnrollExam from "./EnrollExam";
import UserSide from "./UserSide";
export default class User extends React.Component {
  state = {
    examList: [],
    erroMsg: "",
    examByTitle: [],
    examTitle: "",
    exam: [],
  };

  listOfExam = async () => {
    try {
      const response = await axios.get("http://localhost:8080/addexam/list");
      this.setState({
        examList: response.data,
      });
    } catch (e) {
      this.setState({
        erroMsg: e.error || e.message || "Internal Server Error",
      });
    }
  };

  componentDidMount(e) {
    this.listOfExam();
  }

  onSelectExam = async (examTitle, e) => {
    this.setState({ examTitle: e.target.value });
    try {
      const response = await axios.get(
        `http://localhost:8080/addexam/${examTitle}`
      );
      this.setState({
        examByTitle: response.data,
      });
    } catch (e) {
      this.setState({
        erroMsg: e.error || e.message || "Internal Server Error",
      });
    }
  };

  // enroll button
  onHandleEnroll = async (exam, e) => {
    try {
      const response = await axios.get(`http://localhost:8080/addexam/${exam}`);
      this.setState({
        exam: response.data,
      });
    } catch (e) {
      this.setState({
        erroMsg: e.error || e.message || "Internal Server Error",
      });
    }
    window.alert("done");
  };
  login;
  render() {
    const { examList, examByTitle, examTitle, exam } = this.state;
    return (
      <>
        <Tabs defaultActiveKey="user side" id="uncontrolled-tab-example">
          <Tab eventKey="user side" title="User Side">
            <UserSide
              examList={examList}
              onSelectExam={this.onSelectExam}
              examTitle={examTitle}
              examByTitle={examByTitle}
              onHandleEnroll={this.onHandleEnroll}
            />
          </Tab>
          <Tab eventKey="enroll exam" title="Enroll Exam">
            <EnrollExam exam={exam} />
          </Tab>
          <Tab eventKey="logout" title="logout"></Tab>
        </Tabs>
      </>
    );
  }
}
