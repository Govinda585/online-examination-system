import React from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import "./AddTable.css";

const AddQuestion = (props) => {
  const {
    onHandleCan,
    onSubmitQuestion,
    onChangeHandle1,
    option1,
    option2,
    option3,
    option4,
    questionTitle,
    answer,
  } = props;
  return (
    <>
      <Form size="sm" onSubmit={onSubmitQuestion}>
        <FormGroup className="form-group">
          <FormLabel>Question Title*</FormLabel>
          <FormControl
            placeholder="question title must be unique"
            className="form-control"
            required
            type="text"
            name="questionTitle"
            value={questionTitle}
            onChange={onChangeHandle1}
          ></FormControl>
        </FormGroup>

        <FormGroup>
          <FormLabel>Option 1*</FormLabel>
          <FormControl
            required
            type="text"
            name="option1"
            value={option1}
            onChange={onChangeHandle1}
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Option 2*</FormLabel>
          <FormControl
            required
            type="text"
            name="option2"
            value={option2}
            onChange={onChangeHandle1}
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Option 3*</FormLabel>
          <FormControl
            required
            type="text"
            name="option3"
            value={option3}
            onChange={onChangeHandle1}
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Option 4*</FormLabel>
          <FormControl
            required
            type="text"
            name="option4"
            value={option4}
            onChange={onChangeHandle1}
          ></FormControl>
        </FormGroup>

        <FormGroup>
          <FormLabel>Answer*</FormLabel>
          <FormControl
            required
            as="select"
            name="answer"
            value={answer}
            onChange={onChangeHandle1}
          >
            <option name="option1" value="option1">
              option1
            </option>
            <option name="option2" value="option2">
              option2
            </option>
            <option name="option3" value="option3">
              option3
            </option>
            <option name="option4" value="option4">
              option4
            </option>
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
            variant="outline-primary"
            type="submit"
            name="add"
          >
            Add
          </Button>
          <Button
            onClick={onHandleCan}
            className="m-1"
            variant="outline-danger"
          >
            Cancle
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AddQuestion;
