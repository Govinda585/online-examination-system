import React from "react";
import {
  Form,
  FormLabel,
  FormControl,
  FormGroup,
  Button,
} from "react-bootstrap";
import "./AddTable.css";
const AddTable = (props) => {
  const {
    onHandleCancle,
    examTitle,
    examDate,
    handleChange,
    examDuration,
    totalQuestion,
    rightAnswer,
    wrongAnswer,
    submitForm,
  } = props;
  return (
    <>
      <Form size="sm" onSubmit={submitForm}>
        <FormGroup className="form-group">
          <FormLabel>Exam Title*</FormLabel>
          <FormControl
            className="form-control"
            required
            type="text"
            name="examTitle"
            value={examTitle}
            onChange={handleChange}
          ></FormControl>
        </FormGroup>

        <FormGroup>
          <FormLabel>Exam Date & Time*</FormLabel>
          <FormControl
            required
            type="datetime-local"
            name="examDate"
            value={examDate}
            onChange={handleChange}
          ></FormControl>
        </FormGroup>

        <FormGroup>
          <FormLabel>Exam Duration*</FormLabel>
          <FormControl
            required
            as="select"
            value={examDuration}
            onChange={handleChange}
            name="examDuration"
          >
            <option value="5 Minute">5 Minute</option>
            <option value="10 Minute">10 Minute</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <FormLabel>Total Question*</FormLabel>
          <FormControl
            required
            as="select"
            value={totalQuestion}
            onChange={handleChange}
            name="totalQuestion"
          >
            <option value="5 Question">5 Question</option>
            <option value="10 Question">10 Question</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <FormLabel>Marks for Right Answer*</FormLabel>
          <FormControl
            required
            as="select"
            value={rightAnswer}
            onChange={handleChange}
            name="rightAnswer"
          >
            <option value="1 Mark">1 Mark</option>
            <option value="2 Mark">2 Mark</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <FormLabel>Marks for Wrong Answer*</FormLabel>
          <FormControl
            required
            as="select"
            value={wrongAnswer}
            onChange={handleChange}
            name="wrongAnswer"
          >
            <option value="-1.5 Mark">-1.5 Mark</option>
            <option value="-3.0 Mark">-3.0 Mark</option>
          </FormControl>
        </FormGroup>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            className="m-1"
            variant="outline-info"
            type="submit"
            name="add"
          >
            Add
          </Button>
          <Button
            className="m-1"
            variant="outline-danger"
            onClick={onHandleCancle}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AddTable;
