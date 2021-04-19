import React from "react";
import { Card, Table, Button, Form } from "react-bootstrap";

const ExamDetails = (props) => {
  const { examByTitle, onHandleEnroll } = props;

  return (
    <>
      <div style={{ width: "50%", marginTop: "30px" }}>
        <Form>
          <Card bg="light">
            <Card.Body>
              <div style={{ textAlign: "center" }}>
                <h5>Exam Details</h5>
              </div>
              <hr></hr>
              <Card.Text>
                <Table striped bordered size="sm">
                  {examByTitle.map((list) => (
                    <tbody key={list.examTitle}>
                      <tr>
                        <td className="font-weight-bold">Exam Title</td>
                        <td>{list.examTitle}</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Exam Date & Time</td>
                        <td>{list.examDate}</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Exam Duration</td>
                        <td>{list.examDuration}</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">
                          Exam Total Question
                        </td>
                        <td>{list.totalQuestion}</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">
                          Marks Per Right Answer
                        </td>
                        <td>{list.rightAnswer}</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">
                          Marks Per Wrong Answer
                        </td>
                        <td>{list.wrongAnswer}</td>
                      </tr>
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => onHandleEnroll(list.examTitle)}
                      >
                        Enroll it
                      </Button>
                    </tbody>
                  ))}
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </Form>
      </div>
    </>
  );
};

export default ExamDetails;
