import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Exam from "./Exam";
import axios from "axios";

export default class Admin extends React.Component {
  state = {
    showModel: false,
    addQuestionModel: false,

    examData: {
      examTitle: "",
      examDate: "",
      examDuration: "5 Minute",
      totalQuestion: "5 Question",
      rightAnswer: "1 Mark",
      wrongAnswer: "-1.5 Mark",
    },
    errMsg: "",
    examList: [],
    questionData: {
      questionTitle: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "option1",
    },
  };
  // get request

  getExam = async () => {
    try {
      const response = await axios.get("http://localhost:8080/addexam/list");
      this.setState({ examList: response.data });
    } catch (e) {
      this.setState({
        errMsg: e.message || e.error || "Internal Server Error",
      });
    }
  };

  componentDidMount() {
    this.getExam();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      examData: {
        ...prevState.examData,
        [name]: value,
      },
    }));
    console.log("nochange");
  };
  submitForm = async (e) => {
    e.preventDefault();
    try {
      const { examData } = this.state;
      await axios.post("http://localhost:8080/addexam", examData);
    } catch (e) {
      this.setState({
        errMsg: e.error || e.message || "Internal Server Error",
      });
    }
    window.alert("exam added successfully!");
    this.setState({
      showModel: false,
    });
    this.getExam();
  };
  // function for add button
  onHandleAdd = (e) => {
    e.preventDefault();
    this.setState({
      showModel: true,
    });
  };
  // table
  // --------------- write code to map data in table

  // edit and delete button of table

  handleEdit = (e) => {
    e.preventDefault();
    window.alert("edit succesfully");
  };

  handleDelete = async (id) => {
    console.log("delete" + id);
    await axios.delete(`http://localhost:8080/addexam/${id}`);
    window.alert("delete succesfully");
    this.getExam();
  };
  addQuestion = (e) => {
    e.preventDefault();
    this.setState({
      addQuestionModel: true,
    });
  };
  // api integraiton

  onHandleCancle = (e) => {
    e.preventDefault();
    this.setState({
      showModel: false,
    });
  };
  onSubmitQuestion = async (e) => {
    e.preventDefault();
    try {
      const { questionData } = this.state;
      await axios.post("http://localhost:8080/add_question", questionData);
    } catch (e) {
      this.setState({
        errMsg: e.error || e.massage || "Internal Server Error",
      });
    }
    window.alert("question added successfully!");
    this.setState({
      addQuestionModel: false,
    });
  };

  onChangeHandle1 = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      questionData: {
        ...prevState.questionData,
        [name]: value,
      },
    }));
  };
  render() {
    const {
      showModel,
      addQuestionModel,
      examTitle,
      examDate,
      examDuration,
      totalQuestion,
      rightAnswer,
      wrongAnswer,
      examData,
      examList,
      option1,
      option2,
      option3,
      option4,
      answer,
      questionTitle,
    } = this.state;
    console.log(examData);
    return (
      <>
        <Tabs defaultActiveKey="exam">
          <Tab title="Exam" eventKey="exam">
            <Exam
              onHandleAdd={this.onHandleAdd}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              showModel={showModel}
              hideModel={() => {
                this.setState({
                  showModel: false,
                });
              }}
              title="Add Exam Details"
              body="this is the body of model"
              addQuestion={this.addQuestion}
              addQuestionTitle="Add Exam Questions"
              addQuestionModel={addQuestionModel}
              hideAddQuestion={() => {
                this.setState({
                  addQuestionModel: false,
                });
              }}
              examTitle={examTitle}
              examDate={examDate}
              examDuration={examDuration}
              totalQuestion={totalQuestion}
              rightAnswer={rightAnswer}
              wrongAnswer={wrongAnswer}
              handleChange={this.handleChange}
              submitForm={this.submitForm}
              onHandleCancle={this.onHandleCancle}
              examList={examList}
              onHandleCan={() => {
                this.setState({
                  addQuestionModel: false,
                });
              }}
              onSubmitQuestion={this.onSubmitQuestion}
              onChangeHandle1={this.onChangeHandle1}
              option1={option1}
              option2={option2}
              option3={option3}
              option4={option4}
              answer={answer}
              questionTitle={questionTitle}
            />
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
