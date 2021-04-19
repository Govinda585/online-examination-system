import React from "react";
import { Form, FormControl } from "react-bootstrap";
import ExamDetails from "./ExamDetails";

const UserSide = (props) => {
  const {
    examList,
    onSelectExam,
    examTitle,
    examByTitle,
    onHandleEnroll,
  } = props;
  return (
    <>
      <Form>
        <div style={{ marginTop: "30px", width: "71.5%" }}>
          <FormControl
            as="select"
            name={examTitle}
            value={examTitle}
            onChange={(e) => onSelectExam(examTitle, e)}
          >
            <option value="">Select Exam</option>
            {examList.map((list) => (
              <option value={list.examTitle}>{list.examTitle}</option>
            ))}
          </FormControl>
        </div>
        <ExamDetails
          examByTitle={examByTitle}
          onHandleEnroll={onHandleEnroll}
        />
      </Form>
    </>
  );
};

export default UserSide;
