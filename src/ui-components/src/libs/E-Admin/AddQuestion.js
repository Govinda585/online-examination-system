import React from "react";
import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import "./AddTable.css";

const AddQuestion = () => {
  return (
    <>
      <Form size="sm">
        <FormGroup className="form-group">
          <FormLabel>Question Title*</FormLabel>
          <FormControl
            className="form-control"
            required
            type="text"
          ></FormControl>
        </FormGroup>

        <FormGroup>
          <FormLabel>Option 1*</FormLabel>
          <FormControl required type="text"></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Option 2*</FormLabel>
          <FormControl required type="text"></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Option 3*</FormLabel>
          <FormControl required type="text"></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Option 4*</FormLabel>
          <FormControl required type="text"></FormControl>
        </FormGroup>

        <FormGroup>
          <FormLabel>Answer*</FormLabel>
          <FormControl required as="select">
            <option>1 Option</option>
            <option>2 Option</option>
            <option>3 Option</option>
            <option>4 Option</option>
          </FormControl>
        </FormGroup>
      </Form>
    </>
  );
};

export default AddQuestion;
