import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const EnrollExam = (props) => {
  const { exam } = props;
  return (
    <>
      <h4 style={{ textAlign: "center", color: "gray" }}>
        You can only take part in one exam at a time
      </h4>
      <Table striped bordered variant="dark">
        <thead>
          <tr>
            <th>Exam Title</th>
            <th>Date & Time</th>
            <th>Duration</th>
            <th>Total Question</th>
            <th>Right Answer Mark</th>
            <th>Wrong Answer Mark</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {exam.map((list) => (
            <tr key={list.id}>
              <td>{list.examTitle}</td>
              <td>{list.examDate}</td>
              <td>{list.examDuration}</td>
              <td>{list.totalQuestion}</td>
              <td>{list.rightAnswer}</td>
              <td>{list.wrongAnswer}</td>
              <td>
                <Button size="sm" variant="secondary">
                  Started
                </Button>
              </td>
              <td>
                <Link to="/exam-start">
                  <Button>View Exam</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default EnrollExam;
