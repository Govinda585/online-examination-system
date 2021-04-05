import React from "react";
import { Button, Table } from "react-bootstrap";
import styled from "styled-components";
import EModel from "../EModel";
import AddQuestion from "./AddQuestion";
import AddTable from "./AddTable";

const Exam = ({
  onHandleCancle,
  onHandleAdd,
  handleEdit,
  handleDelete,
  showModel,
  hideModel,
  title,
  addQuestion,
  addQuestionModel,
  hideAddQuestion,
  addQuestionTitle,
  addExam,
  examTitle,
  examDate,
  handleChange,
  examDuration,
  totalQuestion,
  rightAnswer,
  wrongAnswer,
  submitForm,
  examList,
}) => {
  return (
    <>
      <Header>
        <h4> Online Exam List</h4>
        <Button onClick={onHandleAdd}>Add</Button>
      </Header>
      <EModel
        show={showModel}
        onHide={hideModel}
        title={title}
        body={
          <AddTable
            examTitle={examTitle}
            examDate={examDate}
            handleChange={handleChange}
            examDuration={examDuration}
            totalQuestion={totalQuestion}
            rightAnswer={rightAnswer}
            wrongAnswer={wrongAnswer}
            submitForm={submitForm}
            onHandleCancle={onHandleCancle}
          ></AddTable>
        }
        size="lg"
        onChangeClick1={addExam}
      ></EModel>
      <EModel
        show={addQuestionModel}
        onHide={hideAddQuestion}
        title={addQuestionTitle}
        body={<AddQuestion></AddQuestion>}
      ></EModel>

      <Table striped bordered responsive size="sm">
        <thead>
          <tr>
            <th>Exam Title</th>
            <th>Date & Time</th>
            <th>Duration</th>
            <th>Total Question</th>
            <th>Right Answer Mark</th>
            <th>Wrong Answer Mark</th>
            <th>Status</th>
            <th>Question</th>
            <th>Enroll</th>
            <th>Result</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {examList.map((list) => (
            <tr key={list.id}>
              <td>{list.examTitle}</td>
              <td>{list.examDate}</td>
              <td>{list.examDuration}</td>
              <td>{list.totalQuestion}</td>
              <td>{list.rightAnswer}</td>
              <td>{list.wrongAnswer}</td>
              <td>started/completed</td>
              <td>
                <Button onClick={addQuestion} variant="info" size="sm">
                  Add Question
                </Button>
              </td>
              <td>Enroll</td>
              <td>Result</td>
              <td>
                <Button onClick={handleEdit}>Edit</Button>{" "}
                <Button variant="danger" onClick={() => handleDelete(list.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Exam;
